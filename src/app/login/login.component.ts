import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  msgError: any;
  returnUrl: string;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login() {
    // this.msgError = '';
    // this.authService.login(this.email, this.password)
    //     .subscribe(
    //       (res) => {
    //         this.router.navigateByUrl(this.returnUrl);
    //       },
    //       (err) => {
    //         if (err.status === 401) {
    //           this.msgError = 'Incorrect email or password.';
    //         } else {
    //           this.msgError = err.error.message;
    //         }
    //       },
    //       () => { },
    //     );
  }

}
