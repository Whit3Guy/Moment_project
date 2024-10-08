import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../../models/moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
  @Input() btn_text?:string;
  momento?:Moment
  title:string = "";
  momentForm: FormGroup = new FormGroup({})
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void{
    this.momentForm = this.fb.group({
      title:[,[Validators.required, Validators.maxLength(250)]],
      description:[, [Validators.required, Validators.maxLength(300)]],
      image:[,[Validators.required]]

    })
  }

    Submit(){
      console.log(this.momentForm.value)
      this.momentForm.reset()
    }
}
