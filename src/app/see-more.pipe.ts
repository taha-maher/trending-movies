import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeeMorePipe implements PipeTransform {
  
  transform(desc: String, limit: number): any {
    return desc.substring(0,limit);
  }

}
