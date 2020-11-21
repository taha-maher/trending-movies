import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[], term: String): any {

    if (term == undefined) {
      return movies;
    }

    return movies.filter(function (movie) {

      return movie.title == undefined ? movie.name.toLowerCase().includes(term.toLowerCase()) : movie.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}