import { Component, OnInit } from '@angular/core';
import { User } from "../users/user";
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";

@Component({
  selector: 'puuni-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
