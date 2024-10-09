import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{
  

constructor(public messageService:MessagesService){}

fatTimes = faTimes;

ngOnInit(): void {
}

remover(){
  this.messageService.clear()
}



}
