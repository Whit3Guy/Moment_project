import { Component } from '@angular/core';
import { Moment } from '../../../models/moment';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {

  constructor(private momentService:MomentService){}
  btn_text:string = "Enviar"

createHandler(moment:Moment){
  const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)
    if(moment.image){
    formData.append("image", moment.image)

    }
    // -- todo -- 
    this.momentService.createMoment(formData).subscribe(
      response => {
        console.log("Success:", response);
        // Exibir mensagem de sucesso ou redirecionar
      },
      error => {
        console.error("Error:", error);
        // Tratar o erro, exibir mensagem
      }
    );
    // enviar para o service

    this.momentService.createMoment(formData)
    // exibir msg

    // redirect

  }

}

