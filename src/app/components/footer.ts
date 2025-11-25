import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-white border-top border-neutral-200">
      <div class="container-lg py-5">
        <div class="row g-5 mb-5">
          <!-- Brand -->
          <div class="col-lg-3">
            <p class="fw-bold fs-5 text-neutral-900 mb-3">Company</p>
            <p class="small text-neutral-600">Building sustainable futures through responsible innovation.</p>
          </div>

          <!-- Services -->
          <div class="col-lg-3">
            <h5 class="fw-semibold text-neutral-900 mb-3 small">Our services</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a routerLink="/service1" class="text-neutral-600 text-decoration-none small">Service One</a></li>
              <li class="mb-2"><a routerLink="/service2" class="text-neutral-600 text-decoration-none small">Service Two</a></li>
              <li><a routerLink="/service3" class="text-neutral-600 text-decoration-none small">Service Three</a></li>
            </ul>
          </div>

          <!-- About -->
          <div class="col-lg-3">
            <h5 class="fw-semibold text-neutral-900 mb-3 small">About</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a routerLink="/mission" class="text-neutral-600 text-decoration-none small">Mission</a></li>
              <li class="mb-2"><a routerLink="/careers" class="text-neutral-600 text-decoration-none small">Careers</a></li>
              <li><a routerLink="/impact" class="text-neutral-600 text-decoration-none small">Impact</a></li>
            </ul>
          </div>

          <!-- Get in Touch -->
          <div class="col-lg-3">
            <h5 class="fw-semibold text-neutral-900 mb-3 small">Get in touch</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="mailto:contact@company.com" class="text-neutral-600 text-decoration-none small">contact@company.com</a></li>
              <li class="mb-2"><a href="#" class="text-neutral-600 text-decoration-none small">Contact</a></li>
              <li><a href="#" class="text-neutral-600 text-decoration-none small">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div class="border-top border-neutral-200 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <p class="small text-neutral-500 mb-3 mb-md-0">© 2024 Company. All rights reserved.</p>
          <div class="d-flex gap-4 small">
            <a href="#" class="text-neutral-600 text-decoration-none">Privacy</a>
            <a href="#" class="text-neutral-600 text-decoration-none">Terms</a>
            <a href="#" class="text-neutral-600 text-decoration-none">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
