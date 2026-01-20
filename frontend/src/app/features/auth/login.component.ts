import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  submit(): void {
    if (!this.username.trim() || !this.password.trim()) {
      return;
    }
    // Placeholder for real authentication.
    this.router.navigate(['/dashboard']);
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

  forgotPassword(event: Event): void {
    event.preventDefault();
    // Placeholder: add a real reset flow later.
  }
}
