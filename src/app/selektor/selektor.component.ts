import { Component, OnInit } from '@angular/core';
import { DataServis} from "../sheard/data";

@Component({
  selector: 'app-selektor',
  templateUrl: './selektor.component.html',
  styleUrls: ['./selektor.component.scss']
})
export class SelektorComponent implements OnInit {

  constructor(private dataServis:DataServis) { }

  dataYear:any = this.dataServis.date['_value']['_d'];

  ngOnInit(): void { }

  go(dir:number){
    this.dataServis.changeMonth(dir);
  }

}
