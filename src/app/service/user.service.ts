import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable()
export class UserService {
  private authorizedUsers: User[] = [];

  public constructor() {
    this.authorizedUsers.push(User.createUser('admin', 'admin', 'admin'));
  }

  isAuthorized(login: string, password: string) {
    for (let user of this.authorizedUsers){
      if (user.getLogin() === login && user.getPassword() === password ) {
        return true;
      }
    }
  }

}
