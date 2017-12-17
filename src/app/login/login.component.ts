
import {Component} from "@angular/core";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  private login: string;
  private password: string;
  private authorized: boolean;
  public constructor(private userService: UserService, private router: Router){
  }

  public isAuthorized(login: string, password: string) {
    if (this.userService.isAuthorized(login, password)) {
      this.router.navigate(['/dashboard']);
    }

  }

}
