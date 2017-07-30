import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
   // newServerName = '';
  //newServerContent = '';
 @ViewChild("newServerContentInputRef") ServerContentInputRef:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(ServerNameInputRef:HTMLInputElement) {

    this.serverCreated.emit({
      serverName: ServerNameInputRef.value,
      serverContent:this.ServerContentInputRef.nativeElement.value
    //   serverContent: this.newServerContent
    });

  }

  onAddBlueprint(ServerNameInputRef: HTMLInputElement) {
    console.log(this.ServerContentInputRef);

    this.blueprintCreated.emit({
     serverName: ServerNameInputRef.value,
      //serverContent: this.newServerContent
      serverContent: this.ServerContentInputRef.nativeElement.value
    });
  }

}
