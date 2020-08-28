"use strict"

let numberOfFilms = +prompt("How many films have you allready watched?","");
let personalMovieDB =  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
for(let i = 1; i<=2;i++) {

    let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "");
    let ballFilms = prompt("На сколько оцените его?", "");
    if(lastWatchedFilm == "" || lastWatchedFilm.length > 50 || lastWatchedFilm !=null){
        --i;
    }else {
    personalMovieDB.movies[lastWatchedFilm] = ballFilms;
}}
if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if( personalMovieDB.count>=10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count>30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}



