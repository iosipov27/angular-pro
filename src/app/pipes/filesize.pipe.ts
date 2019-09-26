import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {


  transform(value: any, ...args: any[]) {
    console.log(value);
    return value * 100;
  }

}
