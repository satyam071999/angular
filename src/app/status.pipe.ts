import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==1)
     {
       return "In stock";
     }
     else {
       return "out of stock";
     }
  }

}
