import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent
) {
    // redirect to home if already logged in
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('constructor isLoggedIn>>>>'+isLoggedIn);
    if (isLoggedIn=='true') { 
      appComponent.currentUser1= true;
        this.router.navigate(['/']);
    }
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.router.navigate([this.returnUrl]);
        
        //let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        //localStorage.setItem('currentUser', JSON.stringify(user));    
        var username = this.loginForm.controls['username'].value;
        var password = this.loginForm.controls['password'].value;
console.log('this.loginForm.username>>>>'+this.loginForm.controls['username'].value);
        
        if(username=='jag'){
  localStorage.setItem('isLoggedIn','true');
  this.appComponent.currentUser1= true;
}
this.router.navigate([this.returnUrl]);
        /*
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                */
                
    }

}
