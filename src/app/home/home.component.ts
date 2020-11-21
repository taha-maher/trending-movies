import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentPage = 1;
  pageNumbers: number[] = [];
  trendingAll = [];
  term: String;
  subscription: Subscription;
  category: string = `all`;

  constructor(private _MovieService: MovieService, private sharedService: SharedService) {

    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i);
    }


    _MovieService.getTrendingAll(this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;
    })


    this.subscription = this.sharedService.getCategory().subscribe({
      next: (category) => {
        this.category = category;
        this._MovieService.getTrendingAll(this.currentPage, this.category).subscribe((data) => {
          this.trendingAll = data.results;
        })
      }
    })
  }

  changeNumber(ind) {
    document.getElementById(`num-${this.currentPage}`).classList.toggle("active-num");
    this.currentPage = ind;
    document.getElementById(`num-${ind}`).classList.toggle("active-num");
    this._MovieService.getTrendingAll(this.currentPage,this.category).subscribe((data) => {
      this.trendingAll = data.results;
    })
  }

  prev() {
    let ind = this.currentPage - 1;
    if (ind < 1) {
      ind = 10;
    }
    this.changeNumber(ind);
  }
  next() {
    let ind = this.currentPage + 1;
    if (ind > 10) {
      ind = 1;
    }
    this.changeNumber(ind);
  }

  ngAfterViewInit() {
    document.getElementById(`num-1`).classList.toggle("active-num")
  }

  ngOnInit(): void {
  }

}
