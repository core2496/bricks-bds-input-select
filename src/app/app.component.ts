import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form!: FormGroup;
  formValue: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputSelectForm: [{value:"", disabled:false}],
    });
  }

  dataList = [
    { "value": 1, "label": "dog" },
    { "value": 2, "label": "leon" },
    { "value": 3, "label": "gato" },
    { "value": 4, "label": "lobo" },
    { "value": 5, "label": "cocodrilo" },
    { "value": 6, "label": "gallo" },
    { "value": 7, "label": "mono" }
  ]


  handleChangue(event:CustomEvent){
    alert(`El nuevo valor es: ${event.detail.value} - ${event.detail.label}`)
  }

  
  handleSubmit():void {
    this.formValue = this.form.value;
    console.log(this.formValue);
    alert(`Form Value: ${ Object.keys(this.formValue)[0]} - ${this.formValue.inputSelectForm} `)
  }
}
