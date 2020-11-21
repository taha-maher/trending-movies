import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any = {};
  ind;
  constructor(_ActivatedRoute:ActivatedRoute , public _MovieService:MovieService) { 
    this.ind= _ActivatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this._MovieService.getTrendingAll().subscribe((data) => {
      this.movieDetails = data.results[this.ind];
    })
  }

}
