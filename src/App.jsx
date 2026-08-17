// src/App.jsx - Complete IQlance/Dev App Grid Landing Page
import './App.css'
import { useState } from 'react'
import devLogo from './assets/logo.png'; 
import contactManImg from './assets/contactpic.png';
import texasImg from './assets/texas.png';
import torontoImg from './assets/toronto.png';
import nyImg from './assets/ny.png';
import austinImg from './assets/austin.png';
import californiaImg from './assets/california.png';
import australiaImg from './assets/australia.png';
import reactImg from './assets/react.png';
import flutterImg from './assets/flutter.png';
import xamarinImg from './assets/xamarin.png';
import onsenImg from './assets/onsen.png';
import unityImg from './assets/unity.png';
import emailIcon from './assets/email.png';
import proposalIcon from './assets/proposal.png';
import startIcon from './assets/start.png';
import trustpilotImg from './assets/trustpilot.png';
import megaphoneImg from './assets/megaphone.png';
import client1Img from './assets/client1.jpg';


function App() {

  const handleButtonClick = () => {
    alert('Thank you! We will get back to you within 24 hours. 🚀');
  }

  // For FAQ toggle (click to expand/collapse)
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }

  return (
    <div className="landing-container">
      
      {/* ============================================================ */}
      {/* NAVBAR - Updated with Wrapper to align with form card         */}
      {/* ============================================================ */}
      <header className="navbar-header-wrapper">
        <nav className="navbar">
          <div className="logo">
            <img src={devLogo} alt="Dev App Grid" className="nav-logo" />
          </div>
          
          <div className="nav-contact-section">
            <div className="phone-call-wrapper">
              <div className="phone-icon-circle">
                <span>📞</span>
              </div>
              <div className="phone-text-wrapper">
                <div className="phone-number">+1 (844) 673 6849</div>
                <div className="call-text">Call Us Today!</div>
              </div>
            </div>
            <button className="red-cta-button" onClick={handleButtonClick}>
              Get A Free Quote <span>→</span>
            </button>
          </div>
        </nav>
      </header>

      {/* ============================================================ */}
      {/* HERO / REQUEST A QUOTE SECTION (MATCHING IMAGE 1 PERFECTLY)  */}
      {/* ============================================================ */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          
          {/* Left Side: Red Background Text & CTA */}
          <div className="hero-left">
            <p className="hero-pre-text">Let's bring your idea into reality</p>
            <h1 className="hero-title">Request a Quote</h1>
            
            <p className="hero-email">
              Share Your Project Details on <strong>info@Dev App Grid.com</strong>
            </p>
            
            <div className="hero-phone">
              <strong>Talk To Experts:</strong><br />
              USA: <strong>+1 (469) 793-9837</strong>
            </div>

            <p className="hero-desc">
              Get in touch with us for app development, software development and Hire Dedicated Developers to bring your product into life within your timeline and budget. Let's work as a team to build a great product.
            </p>

            <ul className="hero-bullets">
              <li>45 minutes of free consultation</li>
              <li>A strict non-disclosure policy</li>
              <li>Detailed Feature List Document</li>
              <li>Action plan to kick start your project</li>
            </ul>

            <div className="hero-white-buttons">
              <button className="white-btn" onClick={handleButtonClick}>
                Contact Us &rarr;
              </button>
              <button className="white-btn" onClick={handleButtonClick}>
                See Our Work &rarr;
              </button>
            </div>
          </div>

          {/* Right Side: The Light Pink Form Card */}
          <div className="hero-right-wrapper">
                        {/* Ribbon Badge that hangs over the top right */}
            <div className="ribbon-badge">
              <div className="ribbon-top">
                SAME DAY RESPONSE
              </div>
              <div className="ribbon-middle">
                ★★★★★
              </div>
              <div className="ribbon-bottom">
                GUARANTEED
              </div>
            </div>

            <div className="hero-card">
              <h2 className="card-title">Got a Project in Mind?</h2>
              <p className="card-sub">We Guarantee To Get Back To You Within A Business Day.</p>
              
              <form className="hero-form">
                <div className="input-group">
                  <label className="input-label">Name *</label>
                  <input type="text" className="underline-input" />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Email *</label>
                  <input type="email" className="underline-input" />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Phone*</label>
                  <input type="tel" className="underline-input" />
                </div>
                
                <div className="input-group">
                  <label className="input-label" style={{marginBottom: '5px'}}>Write here Brief about the project...</label>
                  <textarea className="underline-input textarea-input"></textarea>
                </div>

                <div className="file-upload-row">
                  <span className="icon-paperclip">📎</span>
                  <span className="file-text"><strong>Upload file:</strong> No file chosen.</span>
                </div>

                <div className="nda-row">
                  <div className="nda-icon-box">
                    <span>📄</span>
                  </div>
                  <span className="nda-text">Please Send NDA</span>
                </div>

                <button type="button" className="red-submit-btn" onClick={handleButtonClick}>
                  Schedule a free consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* TECH / SERVICES STRIP (Text removed to prevent duplicates)    */}
      {/* ============================================================ */}
      <section className="services">
        <div className="tech-grid">
          <div className="tech-card">
            <img src={reactImg} alt="React Native" className="tech-logo" />
          </div>
          <div className="tech-card">
            <img src={flutterImg} alt="Flutter" className="tech-logo" />
          </div>
          <div className="tech-card">
            <img src={xamarinImg} alt="Xamarin" className="tech-logo" />
          </div>
          <div className="tech-card">
            <img src={onsenImg} alt="Onsen UI" className="tech-logo" />
          </div>
          <div className="tech-card">
            <img src={unityImg} alt="Unity" className="tech-logo" />
          </div>
        </div>
      </section>

      
            {/* ============================================================ */}
      {/* LOCATIONS SECTION (Matches the cropped screenshot exactly) */}
      {/* ============================================================ */}
      <section className="locations" id="locations">
        
        <div className="section-header">
          <h2 className="section-title">Our Locations</h2>
          <p className="section-sub">
            To better serve our clients, Dev App Grid Solutions has established a global presence, delivering innovative web, mobile, and software development services with local expertise and worldwide reach.
          </p>
        </div>

        {/* Contact Info Strip with Red Icons */}
        <div className="contact-icons-row">
          <div className="icon-text">
            <span className="red-icon">🌐</span> Dev App Grid
          </div>
          <div className="icon-text">
            <span className="red-icon">📧</span> info@Dev App Grid.com
          </div>
          <div className="icon-text">
            <span className="red-icon">📅</span> Schedule Meeting
          </div>
        </div>

                {/* Locations Grid Cards */}
        <div className="locations-grid">
          <div className="location-card">
            <h3 className="loc-title">Headquarter</h3>
            <img src={texasImg} alt="Texas Skyline" className="location-img" />
            <h4 className="loc-name">Texas, USA</h4>
            <p className="loc-address">17250 Dallas Pkwy Dallas, TX 75248, USA</p>
            <div className="loc-phone">
              <span className="red-icon phone-icon">📞</span> +1 469 793 9837
            </div>
          </div>

          <div className="location-card">
            <h3 className="loc-title">Branch</h3>
            <img src={torontoImg} alt="Toronto Skyline" className="location-img" />
            <h4 className="loc-name">Toronto, Canada</h4>
            <p className="loc-address">502-10 Markbrook Lane, Etobicoke, M9V5E3</p>
            <div className="loc-phone">
              <span className="red-icon phone-icon">📞</span> +1 647 637 9108
            </div>
          </div>

          <div className="location-card">
            <h3 className="loc-title">Branch</h3>
            <img src={nyImg} alt="New York Skyline" className="location-img" /> 
            <h4 className="loc-name">New York, USA</h4>
            <p className="loc-address">349 5th Ave, New York, NY 10016, USA</p>
            <div className="loc-phone">
              <span className="red-icon phone-icon">📞</span> +1 917 477 8991
            </div>
          </div>

          <div className="location-card">
            <h3 className="loc-title">Branch</h3>
            <img src={austinImg} alt="Austin Skyline" className="location-img" />
            <h4 className="loc-name">Austin, USA</h4>
            <p className="loc-address">701 Brazos St 4th floor ste 415, Austin, TX 78701</p>
          </div>

          <div className="location-card">
            <h3 className="loc-title">Branch</h3>
            <img src={californiaImg} alt="California Skyline" className="location-img" />
            <h4 className="loc-name">California, USA</h4>
            <p className="loc-address">2976 Casa Nueva Ct, San Jose, CA 95124, USA</p>
          </div>

          <div className="location-card">
            <h3 className="loc-title">Branch</h3>
            <img src={australiaImg} alt="Australia Skyline" className="location-img" />
            <h4 className="loc-name">Australia</h4>
            <p className="loc-address">19 Burns Ave, Clayton South VIC 3169, Australia</p>
          </div>
        </div>
        </section>

      {/* ============================================================ */}
      {/* RECOGNITION / TRUSTPILOT BANNER                               */}
      {/* ============================================================ */}
      <section className="recognition-banner">
        <div className="recognition-container">
          
          {/* Text Side - Exact sizes from Figma */}
          <div className="recog-text">
            <span className="recog-bold">WE ARE WIDELY</span><br />
            <span className="recog-light">RECOGNIZED ON</span>
          </div>

          {/* Middle Graphics */}
          <div className="recog-logos">
            <img src={trustpilotImg} alt="Trustpilot" className="trustpilot-logo" />
            <img src={megaphoneImg} alt="Megaphone" className="megaphone-graphic" />
          </div>

          {/* Button Side - Exact sizes from Figma */}
          <button className="order-now-btn" onClick={handleButtonClick}>
            ORDER NOW &rarr;
          </button>

        </div>
      </section>


            {/* ============================================================ */}
      {/* TESTIMONIALS SECTION (Matches the new single-card slider)     */}
      {/* ============================================================ */}
      <section className="testimonials" id="testimonials">
        <div className="test-section-header">
          <h2 className="test-title">Client Testimonials</h2>
          <p className="test-sub">
            Innovating user centric and results driven solutions based on the demanded industry of the client makes them speak about our work. Let's see what they think about our development method.
          </p>
        </div>

        <div className="testimonial-slider-container">
          {/* The single active testimonial card */}
          <div className="testimonial-card-single">
            
            {/* Top Row: Avatar + Name/Role */}
            <div className="testimonial-user-row">
              {/* Replace this src with your actual profile image path */}
              <img src={client1Img} alt="Trina Gill" className="test-client-img" />
              <div className="test-user-details">
                <h3 className="test-name">Trina Gill</h3>
                <p className="test-role">Founder, Northvault</p>
              </div>
            </div>

            {/* Middle: Stars */}
            <div className="test-stars">★★★★★</div>

            {/* Bottom: Testimonial Text */}
            <p className="test-text">
              Dev App Grid's mobile app received positive feedback from people that interacted with it in the development stage. Dev App Grid communicated quickly, frequently, and over several different platforms.
            </p>
            
          </div>

          {/* Controls: Red square arrows at the bottom right */}
          <div className="test-controls">
            <button className="test-arrow-btn" onClick={handleButtonClick}>←</button>
            <button className="test-arrow-btn" onClick={handleButtonClick}>→</button>
          </div>
        </div>
      </section>

      
            {/* ============================================================ */}
      {/* HOW IT WORKS (Matches Image 1 exact layout)                   */}
      {/* ============================================================ */}
      <section className="how-it-works" id="how-it-works">
        <h2 className="process-main-title">How it works</h2>
        
        <div className="process-container">
          
          {/* STEP 1 */}
          <div className="process-step step-1">
            <div className="step-content-wrapper">
            <img src={emailIcon} alt="Email" className="step-icon" />
              <div className="step-number">01.</div>
              <div className="step-text">
                <h3 className="step-title">Submit a Request</h3>
                <p className="step-desc">Our Business Analyst will meet with you to discuss and define project requirements in detail.</p>
              </div>
            </div>
            {/* Arrow pointing down on the right */}
            <div className="arrow-wrapper arrow-right">
  <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
    {/* Curved Stem */}
    <path
      d="M 10 10 C 65 20, 60 70, 20 80"
      stroke="#C0C7AD"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Arrowhead */}
    <path
      d="M 28 73 L 19 80 L 26 88"
      stroke="#C0C7AD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="process-step step-2">
            {/* Arrow pointing down on the left */}
                        {/* Arrow pointing down on the left */}
            <div className="arrow-wrapper arrow-left">
  <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
    {/* Curved Stem */}
    <path
      d="M 50 10 C -5 20, 0 70, 40 80"
      stroke="#C0C7AD"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Arrowhead */}
    <path
      d="M 34 73 L 41 80 L 33 88"
      stroke="#C0C7AD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
</div>
            
            
            <div className="step-content-wrapper">
              <img src={proposalIcon} alt="Proposal" className="step-icon" />
              <div className="step-text">
                <h3 className="step-title">Project Quote/Proposal</h3>
                <p className="step-desc">Our Analyst will provide a detailed proposal with cost estimate, project plan & timeline. Project starts upon approval.</p>
              </div>
              <div className="step-number">02.</div>
              
            </div>
          </div>

          {/* STEP 3 */}
          <div className="process-step step-3">
            <div className="step-content-wrapper">
              <img src={startIcon} alt="Start Project" className="step-icon" />
              <div className="step-number">03.</div>
              <div className="step-text">
                <h3 className="step-title">Start a Project</h3>
                <p className="step-desc">Dedicated project manager (single point of contact) + designer + developers will start working on your project.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


       {/* ============================================================ */}
      {/* FAQ SECTION */}
      {/* ============================================================ */}
      <section className="faq" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {[
            {
              q: "How do I request a quote for my project?",
              a: "Simply fill out the form on the 'Request a Quote' page to request a quote for your job. Please provide data about your project requirements and any special requirements, and our staff will respond with a personalized price."
            },
            {
              q: "What information should I include when requesting a quote?",
              a: "Include your project goals, target audience, platform preferences (iOS/Android/Web), timeline, and any specific features you need. The more details you provide, the more accurate your quote will be."
            },
            {
              q: "Is there a cost associated with getting a quote?",
              a: "No! Getting a quote is completely free. We believe in providing transparent pricing to help you make an informed decision."
            },
            {
              q: "How long does it take to receive a quote after submitting the request?",
              a: "We guarantee to get back to you within one business day. Usually, you'll receive a detailed quote within 24 hours of submitting your request."
            }
          ].map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.q}</span>
                <span className="faq-toggle">{openFAQ === index ? '−' : '+'}</span>
              </div>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

{/* === NEW FULL-WIDTH RED BANNER SECTION === */}
<section className="ready-to-work-fullwidth">
  <div className="contact-top-banner">
    <div className="banner-left">
      <h2>Ready to work with us?</h2>
      <p>Tell us about your app idea and get a free blueprint, timeline and fixed quote within 24 hours.</p>
      <button className="white-pill-btn" onClick={handleButtonClick}>
        Start Your Project &rarr;
      </button>
    </div>
    <div className="banner-right">
      <div className="glass-card">
        <div className="glass-icon-circle">📞</div>
        <div className="glass-text">
          <span className="small-label">CALL US ANYTIME</span>
          <strong>(800) 551-2090</strong>
        </div>
      </div>
      <div className="glass-card">
        <div className="glass-icon-circle">✉️</div>
        <div className="glass-text">
          <span className="small-label">TALK TO US NOW</span>
          <strong>hello@appforgestudio.com</strong>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* ============================================================ */}
            {/* CONTACT SECTION - With TWO Red Accent Boxes                  */}
            {/* ============================================================ */}
            <section className="contact-section-new" id="contact">

              {/* ===== BOTTOM WHITE CARD WITH RED BOXES ===== */}
              <div className="contact-bottom-wrapper">
                
                {/* 🔴 RED BOX 1: TOP-LEFT */}
                <div className="contact-red-frame-tl"></div>
                
                {/* 🔴 RED BOX 2: BOTTOM-RIGHT */}
                <div className="contact-red-frame-br"></div>
                
                {/* ⬜ WHITE CARD (Sits on top) */}
                <div className="contact-white-card">
                  <div className="card-image-side">
                    <img src={contactManImg} alt="Contact Us" className="contact-img" />
                  </div>
                  <div className="card-form-side">
                    <h3>Feel Free to Contact Us!</h3>
                    <p className="card-sub-form">
                      Discuss your app idea with our consultants and we'll help you transform them to multi-million dollar reality. It's Free!
                    </p>
                    <form className="pill-form">
                      <div className="form-row-pill">
                        <input type="text" placeholder="Name" className="pill-input" />
                        <input type="tel" placeholder="Phone" className="pill-input" />
                      </div>
                      <textarea placeholder="Enter a brief description of your App Project" className="pill-textarea"></textarea>
                      <button type="button" className="red-btn-pill" >Get A Free Quote</button>
                    </form>
                  </div>
                </div>
                
              </div>
            </section>

      {/* ============================================================ */}
      {/* FOOTER (Matches Image 2)                                      */}
      {/* ============================================================ */}
      <footer className="footer-new">
        <div className="footer-new-container">
          
          {/* 1. Logo centered at the top */}
          <div className="footer-logo-wrapper">
            <img src={devLogo} alt="Dev App Grid" className="footer-logo-img" />
          </div>

          {/* 2. Top Row: Socials on left, Phone on right */}
          <div className="footer-top-row">
            <div className="footer-connect">
              <h4>Always Connect With Us!</h4>
              <div className="footer-socials">
                <span className="social-icon">f</span>
                <span className="social-icon">📸</span>
                <span className="social-icon">in</span>
              </div>
            </div>
            
            <div className="footer-phone-wrapper">
              <div className="footer-phone-icon-circle">
                <span>📞</span>
              </div>
              <div className="footer-phone-text">
                <div className="footer-phone-number">+1 (844) 673 6849</div>
                <div className="footer-call-text">Call Us Today!</div>
              </div>
            </div>
          </div>

          {/* 3. Massive centering heading */}
          <h2 className="footer-big-heading">Let's work together!</h2>

          {/* 4. Red CTA Button */}
          <button className="footer-red-btn" onClick={handleButtonClick}>
            Get A Free Quote
          </button>

          {/* 5. Copyright */}
          <div className="footer-bottom-new">
            <p>© 2026 Dev App Grid. All rights reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  )
}
export default App