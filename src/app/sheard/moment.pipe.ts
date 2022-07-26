import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})

export class MomentPipe implements PipeTransform{
  transform(value: number, args?: any): string {

    return value.toString().replace("MMMM", ",");
  }
}
