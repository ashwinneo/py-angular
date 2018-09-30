import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private lService: LoginServiceService) { }

  ngOnInit() {
    this.lService.login().subscribe(data => {
      console.log(data);
    });
  }

  // login(event) {
  //   console.log(event.target);
  //   this.lService.getLoginDetails().subscribe(data => {
  //     console.log(data);
  //   });
  // }

  login123(event) {
    console.log(event.target);
    let myObj = {
      "user_name" : event.target[0].value,
      "password" : event.target[1].value
    }
    this.lService.getLoginDetails(myObj).subscribe(data => {
      alert('success')
    });
  }

}
