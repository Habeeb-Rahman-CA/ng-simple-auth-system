import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false

  register(user: { email: string, password: string }): Observable<any> {
    console.log(user)
    alert('user registered')
    return of({ success: true })
  }

  login(user: { email: string, password: string }): Observable<any> {
    if (user.email === 'habi@gmail.com', user.password === 'habi1234') {
      this.isAuthenticated = true
      return of({ success: true })
    }
    return of({ success: false })
  }

  logOut() {
    this.isAuthenticated = false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated
  }
}
