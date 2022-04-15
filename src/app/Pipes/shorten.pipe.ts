import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  /**
   * ? Change any string with more than 30 character into string with 30 character + '...'
   *
   * @param value
   * @param limit
   * @return
   * @memberof ShortenPipe
   */
  transform(value: any, limit: number = 27) {
    if (value.length > limit + 3) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
