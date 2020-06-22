import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  displayName:string="";
  constructor(private userService: UserService,private authService: AuthService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
        console.log(this.displayName);
  }
  Logout(){
    this.authService.logout();
    location.href="/login";
  }
}
