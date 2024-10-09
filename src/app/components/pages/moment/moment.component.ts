import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../models/moment';
import { environment } from '../../../../environments/environment.development';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?:Moment
  baseApiUrl:string = environment.baseApiUrl
  FaTimes = faTimes
  FaEdit = faEdit


constructor(private route:ActivatedRoute, private momentService:MomentService){
}
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get("id")

  this.momentService.getMoment(this.baseApiUrl, id).subscribe(
    response => {
      this.moment = response.data
      console.log(response.data)
    },
    error => {
      console.log(error)
    }
  )
}

}
