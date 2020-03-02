import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: string, name?: string): any {
    return '\"' + value + '\"' +
      (name !== undefined &&
        name.trim() !== '' ? ' - ' + name.trim() : '');
  }

}
