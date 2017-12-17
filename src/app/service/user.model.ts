
export class User {
  private login: string;
  private password: string;
  private name: string;
  constructor() {
  }

  public static createUser(name: string, login: string, password: string): User {
    let user: User = new User();
    user.setLogin(login);
    user.setName(name);
    user.setPassword(password);
    return user;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getPassword() {
    return this.password;
  }
  public getLogin() {
    return this.login;
  }

  public setLogin(login: string) {
    this.login = login;
  }

}
