import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {


  transform(value: any, extension: string = 'MB') {
    return value * 100 + ' '+extension;
  }

}
