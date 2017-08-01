import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit, OnChanges  {
@Input() item:[{type:string , name:string , content:string}];
@Input() name: string;
constructor() {
  console.log("constructor called")
}

  ngOnChanges(changes: SimpleChanges){
    console.log("onChanges called")
    console.log(changes)
  }

  ngOnInit() {
  console.log("ngOnInit called")
  }

}
