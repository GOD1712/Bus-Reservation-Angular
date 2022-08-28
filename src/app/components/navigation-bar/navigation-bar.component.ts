import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("userData") != null) {
      this.loggedIn = true;
    }
  }

  goToLogin() {
    this.router.navigate(['/', 'login'], { relativeTo: this.route });
  }

  logout() {
    this.loggedIn = false;
    sessionStorage.removeItem("userData");
  }
}
