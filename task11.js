"use strict"

let numberOfFilms;
function start(){
    numberOfFilms = +prompt("How many films have you allready watched?","");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you allready watched?","");
    }
}
start();
const personalMovieDB =  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
function rememberMyFilms(){
    for(let i = 1; i<=2;i++) {

        let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "");
        let ballFilms = prompt("На сколько оцените его?", "");
        if(lastWatchedFilm == "" || lastWatchedFilm.length > 50 || lastWatchedFilm ===null){
            --i;
        }else {
            personalMovieDB.movies[lastWatchedFilm] = ballFilms;
        }}
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if( personalMovieDB.count>=10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }

}
detectPersonalLevel();

function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres (){
    for (let i = 1; i<4;i++ ){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");

    }
}
writeYourGenres();
console.log(personalMovieDB);
