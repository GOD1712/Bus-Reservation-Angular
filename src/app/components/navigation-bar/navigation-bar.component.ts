import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['/', 'login'], { relativeTo: this.route });
  }
}
