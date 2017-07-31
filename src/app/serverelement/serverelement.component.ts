import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';


@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit, OnChanges {
@Input() item:[{type:string , name:string , content:string}];
constructor() { }

  ngOnChanges(changes: SimpleChange){

  }

  ngOnInit() {
  }

}
