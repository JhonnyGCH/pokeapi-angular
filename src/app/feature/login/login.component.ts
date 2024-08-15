import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor (private router: Router) {}
  ngOnInit() {
    let userName = localStorage.getItem("user")
    let passwordUser = localStorage.getItem("password")

  }
  login() {
    let userName = localStorage.getItem("user")
    let passwordUser = localStorage.getItem("password")
    if(userName === this.name && passwordUser === this.password){
      alert("Sesion iniciada");
      console.log("Sesion iniciada");
      this.router.navigate(['/pokedex']);
      localStorage.setItem('isLogged', 'true');
    }
  }
}
