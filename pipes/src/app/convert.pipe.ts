import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, units: string): any {
    switch (units) {
      case undefined:
        return '';
      case 'cm': {
        const miles = +value;
        return !Number.isNaN(miles) ? miles * 160934 : 0;
      }
      case 'm': {
        const miles = +value;
        return !Number.isNaN(miles) ? miles * 1609.34 : 0;
      }
      case 'km': {
        const miles = +value;
        return !Number.isNaN(miles) ? miles * 1.60934 : 0;
      }
      default: {
        throw new Error(`${units} is not supported`);
      }
    }
  }
}
