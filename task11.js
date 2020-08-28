let numberOfFilms = +prompt("How many films have you allready watched?","");
let personalMovieDB =  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?","");
let ballFilms = prompt("На сколько оцените его?", "");
personalMovieDB.movies[lastWatchedFilm] = ballFilms;



