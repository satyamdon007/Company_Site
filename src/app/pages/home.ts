import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Mission Hero Section -->
    <section class="section-spacing bg-white d-flex align-items-center justify-content-center">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-hero text-neutral-900 mb-5">
              Building the future. One step at a time.
            </h1>
            <div class="founder-note text-center">
              <p class="text-sm fw-medium mb-2">A note from our Founder</p>
              <p class="fs-5 fw-light lh-lg">Sustainability is not a trend. It's the future.</p>
              <a href="#" class="text-sm fw-medium mt-3 d-inline-block link-arrow">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Businesses Section -->
    <section id="businesses" class="section-spacing bg-white">
      <div class="container-lg">
        <h2 class="fs-3 fw-bold text-neutral-900 mb-3">Our services</h2>
        <p class="text-neutral-600 mb-5" style="max-width: 500px;">We provide comprehensive solutions across multiple sectors, delivering specialized expertise, innovation, and excellence through a portfolio of integrated services.</p>

        <div class="row g-4 mb-5">
          <!-- Service 1 -->
          <div class="col-lg-4">
            <div class="business-card h-100">
              <div class="business-image-placeholder">1</div>
              <div class="p-4">
                <p class="business-label">Core Service</p>
                <h3 class="fs-4 fw-bold mb-3">Service One</h3>
                <p class="text-neutral-300 small lh-lg mb-3">Innovative solutions designed to help modern businesses scale efficiently. We connect people with exceptional experiences, delivering convenience and operational excellence across all touchpoints.</p>
                <a href="#" class="text-sm fw-medium link-arrow">Learn more</a>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="col-lg-4">
            <div class="business-card h-100">
              <div class="business-image-placeholder">2</div>
              <div class="p-4">
                <p class="business-label">Core Service</p>
                <h3 class="fs-4 fw-bold mb-3">Service Two</h3>
                <p class="text-neutral-300 small lh-lg mb-3">Advanced technology and strategic solutions for rapid growth. Our platform delivers speed, reliability, and competitive advantage while maintaining the highest standards of quality and performance.</p>
                <a href="#" class="text-sm fw-medium link-arrow">Learn more</a>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="col-lg-4">
            <div class="business-card h-100">
              <div class="business-image-placeholder">3</div>
              <div class="p-4">
                <p class="business-label">Core Service</p>
                <h3 class="fs-4 fw-bold mb-3">Service Three</h3>
                <p class="text-neutral-300 small lh-lg mb-3">Empowering growth and innovation through integrated solutions. We enable organizations to achieve their full potential with comprehensive services designed for sustainable success and market leadership.</p>
                <a href="#" class="text-sm fw-medium link-arrow">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="section-spacing bg-neutral-50">
      <div class="container-lg">
        <!-- Vision -->
        <div class="row g-5 align-items-start mb-5">
          <div class="col-lg-6">
            <h3 class="fs-4 fw-bold text-neutral-900 mb-4">Our vision</h3>
            <p class="text-neutral-600 lh-lg fs-5 mb-4">
              We envision a world driven by responsible innovation and sustainability. From the foundation of building solutions that matter, we believe in creating lasting impact through purposeful ventures that serve society while delivering excellence.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="img-placeholder" style="height: 300px;"></div>
          </div>
        </div>

        <!-- Mission -->
        <div class="row g-5 align-items-start">
          <div class="col-lg-6 order-lg-2">
            <h3 class="fs-4 fw-bold text-neutral-900 mb-4">Our mission</h3>
            <p class="text-neutral-600 lh-lg fs-5">
              To innovate, evolve, and empower organizations — we aim to build solutions that redefine the future, shape industries, and embody the promise of transformative performance through disciplined excellence and sustainable growth.
            </p>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="img-placeholder" style="height: 300px;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="section-spacing bg-white">
      <div class="container-lg">
        <h2 class="fs-3 fw-bold text-neutral-900 mb-5">Working with us</h2>
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="img-placeholder" style="height: 350px;"></div>
          </div>
          <div class="col-lg-6">
            <p class="text-neutral-600 lh-lg fs-5 mb-4">
              This place is designed to make you feel uncomfortable. Discomfort breeds innovation. Growth comes from challenge.
            </p>
            <a href="#" class="btn-primary-custom">Learn more about our culture</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Section -->
    <section class="section-spacing bg-neutral-50">
      <div class="container-lg">
        <h2 class="fs-3 fw-bold text-neutral-900 mb-3">Our performance at a glance</h2>
        <p class="text-neutral-600 mb-5" style="max-width: 500px;">Transparency and accountability drive our success. Here's how we're delivering value to our stakeholders.</p>
        
        <div class="row g-4">
          <!-- Metric 1 -->
          <div class="col-lg-4">
            <div class="card border-0 border-bottom border-2 border-neutral-200">
              <div class="img-placeholder" style="height: 200px; border-radius: 0;"></div>
              <div class="card-body">
                <h5 class="card-title fs-5 fw-bold text-neutral-900">Q2 FY24</h5>
                <p class="card-text text-neutral-600 small">Growth across all verticals</p>
              </div>
            </div>
          </div>

          <!-- Metric 2 -->
          <div class="col-lg-4">
            <div class="card border-0 border-bottom border-2 border-neutral-200">
              <div class="img-placeholder" style="height: 200px; border-radius: 0;"></div>
              <div class="card-body">
                <h5 class="card-title fs-5 fw-bold text-neutral-900">Q3 FY24</h5>
                <p class="card-text text-neutral-600 small">Expansion in new markets</p>
              </div>
            </div>
          </div>

          <!-- Metric 3 -->
          <div class="col-lg-4">
            <div class="card border-0 border-bottom border-2 border-neutral-200">
              <div class="img-placeholder" style="height: 200px; border-radius: 0;"></div>
              <div class="card-body">
                <h5 class="card-title fs-5 fw-bold text-neutral-900">Q4 FY24</h5>
                <p class="card-text text-neutral-600 small">Record profitability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section id="impact" class="section-spacing bg-white">
      <div class="container-lg">
        <h2 class="fs-3 fw-bold text-neutral-900 mb-3">Our impact beyond business</h2>
        <p class="text-neutral-600 mb-5" style="max-width: 500px;">Committed to building sustainable futures, we invest in initiatives that create meaningful change.</p>
        
        <div class="row g-5">
          <!-- Impact 1 -->
          <div class="col-lg-6">
            <div class="border-bottom border-3 border-neutral-900 pb-4 pb-lg-0">
              <div class="img-placeholder mb-4" style="height: 250px;"></div>
              <h3 class="fs-4 fw-bold text-neutral-900 mb-3">Climate-conscious deliveries</h3>
              <p class="text-neutral-600 lh-lg mb-3">
                100% EV-based last-mile delivery by 2030 to reduce carbon footprint and build the most environmentally sustainable delivery value chain.
              </p>
              <a href="#" class="text-sm fw-medium link-arrow">Learn more</a>
            </div>
          </div>

          <!-- Impact 2 -->
          <div class="col-lg-6">
            <div class="border-bottom border-3 border-neutral-900 pb-4 pb-lg-0">
              <div class="img-placeholder mb-4" style="height: 250px;"></div>
              <h3 class="fs-4 fw-bold text-neutral-900 mb-3">Health, safety and wellbeing for all</h3>
              <p class="text-neutral-600 lh-lg mb-3">
                Pioneering health, safety, and wellbeing of stakeholders across our value chain. Building equitable futures for all.
              </p>
              <a href="#" class="text-sm fw-medium link-arrow">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomePage {}
