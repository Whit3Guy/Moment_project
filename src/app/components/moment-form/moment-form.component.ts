import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../../models/moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
  @Input() btn_text?:string;
  @Output() onSubmit = new EventEmitter<Moment>()

  momento?:Moment
  momentForm: FormGroup = new FormGroup({})
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void{
    this.momentForm = this.fb.group({
      id:[],
      title:[,[Validators.required, Validators.maxLength(250)]],
      description:[, [Validators.required, Validators.maxLength(300)]],
      image:[]

    })
  }

  get title(){
    return this.momentForm.get('title')!
  }
  get description(){
    return this.momentForm.get('description')!
  }

    Submit(){
      console.log(this.momentForm.value)
      console.log("emitiu")

      this.onSubmit.emit(this.momentForm.value)
    }

    onFileSelect(event:any){

      const file:File = event.target.files[0]; 

      this.momentForm.patchValue({image:file})
    }


}
