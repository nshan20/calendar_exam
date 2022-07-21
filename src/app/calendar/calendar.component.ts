import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import {DataServis} from "../sheard/data";

interface Day{
  value: moment.Moment
  active: boolean
  disabled: boolean
  selecded: boolean
}

interface Work{
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendar!: any;
  isActive:boolean = false;

  constructor(private dataServis:DataServis) { }

  ngOnInit(): void {
    this.dataServis.date.subscribe(this.genereit.bind(this));
  }

  genereit(now:moment.Moment){

    const statDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = statDay.clone().subtract(0, 'day');

    const calendar = [];

    while (date.isBefore(endDay, 'day')){
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(()=>{
            const value = date.add(1,'day').clone()
            const active = moment().isSame(value, 'date')
            const disabled = !now.isSame(value, 'month')
            const selected = now.isSame(value, 'date')

            return{
              value, active, disabled, selected
            }
          })
      })
    }
    this.calendar = calendar;
  }

  onClokColor(date:any, arg:any){
    if (!arg) {
      this.dataServis.changeDate(date.value);
    }
  }

}
