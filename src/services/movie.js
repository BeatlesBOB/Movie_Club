import {getApiUrl} from "./api";

export function searchMovie(searchText, page) {
    return fetch(
        getApiUrl(
            `/search/movie`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}

export function getMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}

export function getGenres() {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json())
}

export function getVideo(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}/videos`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json())
}

export function getMovieByGenres(id) {
    return fetch(
        getApiUrl(
            `/discover/movie`,
            {
                with_genres:id,
                language: 'fr-FR',
            }
        )
    ).then(result => result.json())
}


