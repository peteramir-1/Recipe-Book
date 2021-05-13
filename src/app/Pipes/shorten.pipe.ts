// Angular import
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // Change any string with more than 30 character
  // into string with 30 character + '...'
  transform(value: any, ...args: any[]) {
    if (value.length > 30) {
      return value.substr(0, 27) + "..."
    }
    return value;
  }
}
