import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {

  @Input() control!: FormControl
  @Input() type!: string
  @Input() label!: string
  @Input() icon!: string
  @Input() autocomplete!:string
  @Input() isPassword:boolean  = false;

  
  protected hide = false;
  constructor() { }
  
  ngOnInit() {
    if (this.type == 'password') {
      this.isPassword = true;
    }
    console.log("🚀 ~ CustomInputComponent ~ control:", this.control)
  }

  showPassword(){
    this.hide = !this.hide
    if (this.hide) {
      this.type= 'text'
    }else{
      this.type = 'password'
    }
  }
}
