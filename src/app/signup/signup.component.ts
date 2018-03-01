import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	
  onLoginButtonClick(name, pass) {
  	alert('worked')
    window.sessionStorage.setItem('key', "Name: "+name+" Pass: "+pass);
  } 

  getValueFromSession:void() {
    alert(window.sessionStorage.getItem('key'))
  }
  	
  constructor() { }

  ngOnInit() {
  }

}
