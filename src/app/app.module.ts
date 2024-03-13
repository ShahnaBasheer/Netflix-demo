import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MovieService } from './shared/services/movie.service';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BrowseComponent,
    MovieCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
