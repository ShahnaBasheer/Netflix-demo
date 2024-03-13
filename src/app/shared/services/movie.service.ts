import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';






const options = {
  method: 'GET',

  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },

  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTA4YmIzNTQ2NDg3MDgxYjljOTJjMGFkNGU1OTBiOCIsInN1YiI6IjY1ZWY1YTRiMjdkOWNjMDE2NDk3YTNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9arEBU97FQj3lLu-NvRynbNdT0A33ft28vgxY1O5bjA'
  }
};


export class MovieService{
  http = inject(HttpClient);

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }


  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
