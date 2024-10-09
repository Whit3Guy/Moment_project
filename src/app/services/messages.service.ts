import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message:string = ""
constructor() { }

add(msg:string){
  this.message = msg

  setTimeout(() => {
    this.clear()
  }, 4000);
}

clear(){
  console.log("chegou")
  this.message = ""
}


}
