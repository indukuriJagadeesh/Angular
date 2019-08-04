import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  public currentUser1: boolean = false;
  currentUser: User;

  constructor(private router: Router){
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn=='true'){
      this.currentUser1 = true;
    }
    console.log('app constructor called >>'+this.currentUser1);
  }


  logout() {
    
    console.log('logout clicked...!')
    localStorage.removeItem('isLoggedIn');
    this.currentUser1 = false;
    this.router.navigate(['/login']);
    
}

}
