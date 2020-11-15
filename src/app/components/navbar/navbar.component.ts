import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  user: User = null;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  
  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((response) => {
      if (response) {
        this.user = response;
        this.isAuthenticated = true;

        return;
      }

      this.isAuthenticated = false;
      
    });
  }

  authWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['/home']);
        }
      })
      .catch((err) => console.log(err));
  }

  onSearch(value: string){
    if (value){
      this.router.navigate(['/home'],{queryParams: {q: value}});
    }
  }
}
