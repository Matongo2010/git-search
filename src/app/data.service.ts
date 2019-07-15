import { Injectable } from '@angular/core';
// import { HttpClient, Headers } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public username:string;
  public clientid = 'fb81443e46e9903bfcdb';
  public clientsecret ='b23d33e16ffc10ce0f4ecfc0903473e22a99e497';

  constructor(private http: HttpClient) { 
    console.log("sevice is wotking ");
    this.username = '';
  }

  getuserInfo(){return this.http.get("https://api.github.com/users/" + this.username + "?client_id" +this.clientid + "&clientsecret=" + this.clientsecret);

  }
  getuserRepos(){return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" +this.clientid + "&clientsecret=" + this.clientsecret);

  }
  updateUsers(username:string){
    this.username = username;
  }

}
