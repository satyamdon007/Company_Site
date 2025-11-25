import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center px-4 py-12">
      <div class="max-w-lg text-center">
        <div class="w-20 h-20 bg-gradient-to-br from-brand-400 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p class="text-xl text-gray-600 mb-8">
          This page is being crafted with care. Tell us what you'd like to see here!
        </p>
        <a routerLink="/" class="btn-primary inline-block">
          Back to Home
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class PlaceholderComponent {}
