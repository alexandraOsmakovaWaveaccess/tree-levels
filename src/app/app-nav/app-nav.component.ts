import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  testCheckPage() {
    this.router.navigate(['test-page'])
  }

  goToMain() {
    this.router.navigate([''])
  }

}
