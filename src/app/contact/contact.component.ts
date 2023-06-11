import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form:any;
  constructor() {
    this.form=new FormGroup({
      email:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      message:new FormControl('',[Validators.required])
    });

  }
  get formAltaControls(): any {
    return this.form['controls'];
  }
}
