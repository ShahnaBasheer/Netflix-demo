import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { IVideoContent } from '../../shared/models/video-content.interface';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  errorMessage: string = ''; // Placeholder for error messages

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    forkJoin([
      this.movieService.getMovies(),
      this.movieService.getTvShows(),
      this.movieService.getNowPlayingMovies(),
      this.movieService.getUpcomingMovies(),
      this.movieService.getPopularMovies(),
      this.movieService.getTopRated()
    ]).pipe(
      map(([movies, tvShows, nowPlaying, upcoming, popular, topRated]) => {
        return { movies, tvShows, nowPlaying, upcoming, popular, topRated };
      })
    ).subscribe((res: any) => {
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcoming.results as IVideoContent[];
      this.popularMovies = res.popular.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
    });
  }
}
