import { Component } from "../../../node_modules/@angular/core";
import { Sender } from "../../Models/sender.model"
import { SenderService } from "./sender.service"

@Component({
    selector: 'app-sender',
    templateUrl: './sender.component.html',
    providers: []
  })
  export class senderComponent {
  //   searchCriteria: string;
  //   sender: string;
  // senderService: any;
  
    
    
  public senders = [];  

    constructor(private _senderService: SenderService ){//private senderService: SenderService){
    }
    ngOnInit(){
      this._senderService.getSenders()
      .subscribe(data => this.senders=data)
    }
    // onClick(value)
    // {
    //   this.sender = value;
    //  //this.senderService.getSenders().then(data => {this.sender = data});

    // }
  }