import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar navbar-expand-md navbar-light bg-white border-bottom border-neutral-200 sticky-top">
      <div class="container-lg">
        <!-- Logo -->
        <a routerLink="/" class="navbar-brand me-auto">
          <span class="fw-bold fs-5 text-neutral-900">Company</span>
        </a>

        <!-- Mobile Toggle -->
        <button 
          class="navbar-toggler border-0" 
          type="button" 
          (click)="mobileMenuOpen.set(!mobileMenuOpen())"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Menu -->
        <div [ngClass]="{'collapse': !mobileMenuOpen(), 'navbar-collapse': true}" class="navbar-collapse">
          <nav class="navbar-nav ms-auto">
            <a 
              routerLink="/" 
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link text-neutral-600 fw-medium"
            >
              Home
            </a>
            <a
              href="#businesses"
              class="nav-link text-neutral-600 fw-medium"
            >
              Services
            </a>
            <a 
              href="#impact"
              class="nav-link text-neutral-600 fw-medium"
            >
              Impact
            </a>
            <a 
              routerLink="/about"
              class="nav-link text-neutral-600 fw-medium"
            >
              About
            </a>
            <a 
              routerLink="/contact"
              class="nav-link text-neutral-600 fw-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host ::ng-deep .nav-link:hover {
      color: #171717 !important;
    }
    
    :host ::ng-deep .nav-link.active {
      color: #171717 !important;
      border-bottom: 2px solid #171717;
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
}
