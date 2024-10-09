import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../models/moment';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
  constructor(public momentService:MomentService){}

  allMoments:Moment[]= []
  moments:Moment[]= []
  baseApiUrl = environment.baseApiUrl

  ngOnInit(): void {
  this.momentService.getMoments(this.baseApiUrl).subscribe(
    response => {
      const data = response.data
      
      data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
          item.updated_at = new Date(item.updated_at!).toLocaleDateString('pt-BR')
      });
      
      this.allMoments = data;
      this.moments = data;
      console.log(this.moments)
    },
    error => {
      console.log(error)
    }
  );

  }

}
