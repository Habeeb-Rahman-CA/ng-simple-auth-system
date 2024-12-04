import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  auth = inject(AuthService)
  router = inject(Router)

  onRegister(form: NgForm){
    const user = {
      email: form.value.email as string,
      password: form.value.password as string
    }
    form.reset()
    this.auth.register(user).subscribe((res) => {
      console.log('Register successfully');
      this.router.navigate(['/login'])
    })
  }

}
