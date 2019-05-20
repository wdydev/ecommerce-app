import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status',
  pure: true
})
export class StatusPipe implements PipeTransform {
  public transform(value: any, ...args): any {
    return value === 1 ? 'Enabled' : 'Disabled';
  }
}
