import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  auth = inject(AuthService)
  router = inject(Router)

  onLogout(){
    this.auth.logOut()
    this.router.navigate(['/login'])
  }

}
