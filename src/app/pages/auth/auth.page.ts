import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {


  public form = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(
  ) {
    

  }

  get fc(){
    return this.form.controls;
  }

}
