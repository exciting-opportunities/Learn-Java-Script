"use strict"




const personalMovieDB =  {

    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    toggleVisibleMyDB: function (){
    if (personalMovieDB.privat == false){
        personalMovieDB.privat = true;    }
    else {
        personalMovieDB.privat = false;
    }},
    rememberMyFilms: function (){
    for(let i = 1; i<=2;i++) {

        let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "");
        let ballFilms = prompt("На сколько оцените его?", "");
        if(lastWatchedFilm == "" || lastWatchedFilm.length > 50 || lastWatchedFilm ===null){
            --i;
        }else {
            personalMovieDB.movies[lastWatchedFilm] = ballFilms;
        }}
},
    detectPersonalLevel: function (){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if( personalMovieDB.count>=10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }

},

    writeYourGenres: function (){
    for (let i = 1; i<4;i++ ){
        let genresFilm = prompt(`Ваш любимый жанр под номером ${i}`, "");
        while (genresFilm == "" || genresFilm === null){
            genresFilm = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
        personalMovieDB.genres[i-1] = genresFilm;

    }
    personalMovieDB.genres.forEach(function (item,i,genres){
                console.log(`Любимый жанр #${i+1} - это ${item}`)
            });
        },
    start:function(){
    let numberOfFilms = +prompt("How many films have you allready watched?","");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you allready watched?","");
    }
        personalMovieDB.count = numberOfFilms;
},
    show: function (){
        if(personalMovieDB.privat == true){
        console.log(personalMovieDB);
    }}
}
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.show();
