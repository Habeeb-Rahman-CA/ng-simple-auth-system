import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  auth = inject(AuthService)
  router = inject(Router)

  onLogin(form: NgForm){
    const user = {
      email: form.value.email,
      password: form.value.password
    }
    this.auth.login(user).subscribe((res) => {
      console.log('Logged Successfully')
      form.reset()
      this.router.navigate(['/dashboard'])
    })
  }

}
