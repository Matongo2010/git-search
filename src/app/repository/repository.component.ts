import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;

  constructor(public usersService: DataService ) { 

    this.usersService.getuserInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }

}
