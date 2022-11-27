import axios from "axios";

export const tmdbApi = {
    urlBase: 'https://api.themoviedb.org/3',
    apiKey: '?api_key=e2b5f17ee92a79035b2f5f0f5f93da1c',
    entity: {
        topRatedMovies: '/movie/top_rated',
        topRatedTv: '/tv/top_rated',
        popularMovies: '/movie/popular',
        popularTv: '/tv/popular'
    },
    language: {
        en: '&language=en-US',
        es: '&language=es-ES'
    },
    pagination: '&page=',
    imageUrl: 'https://image.tmdb.org/t/p',
    quality: {
        posterSmall: '/w200',
        posterMedium: '/w300',
        posterLarge: '/w500',
        backdropSmall: '/w300',
        backdropMedium: '/w780',
        backdropLarge: '/w1280',
    }
}

export const apiEntity = {
    topRatedMovies: 'topRatedMovies',
    topRatedTv: 'topRatedTv',
    popularMovies: 'popularMovies',
    popularTv: 'popularTv'
}

export const apiQuality = {
    posterSmall: 'posterSmall',
    posterMedium: 'posterMedium',
    posterLarge: 'posterLarge',
    backdropSmall: 'backdropSmall',
    backdropMedium: 'backdropMedium',
    backdropLarge: 'backdropLarge',
}

export const apiBuilder = {

    tryGet: async (entity, lang = 'es', page = 1) => {
        const url = `${tmdbApi.urlBase}${tmdbApi.entity[entity]}${tmdbApi.apiKey}${tmdbApi.language[lang]}${tmdbApi.pagination}${page}`;
        try {
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error;
        }
    },

    tryGetById: async (entity, id, lang = 'es') => {
        const url = `${tmdbApi.urlBase}${tmdbApi.entity[entity]}/${id}${tmdbApi.apiKey}${tmdbApi.language[lang]}`;
        try {
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error;
        }
    },
    
    tryGetImg: (path, quality = apiQuality.posterLarge) => {
        return `${tmdbApi.imageUrl}${tmdbApi.quality[quality]}${path}`;
    }

}
