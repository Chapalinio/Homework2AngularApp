import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
})
export class ArrayFilterPipe implements PipeTransform {
  transform(value: number[], oddOrEven: boolean): any {
    let filteredArray: number[] = []

    if(oddOrEven == true){
      value.forEach((num: number) => {
        if(num % 2 == 0){
          filteredArray.push(num)
        }
      });

      return filteredArray
    }
    else{
      value.forEach((num: number) => {
        if(num % 2 != 0){
          filteredArray.push(num)
        }
      });

      return filteredArray
    }
  }
}
