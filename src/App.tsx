import { useState } from 'react';
import GradientBlinds from './components/GradientBlinds';
import './App.css';

function App() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    { q: 'How can AI help my creative workflow?', a: 'AI automation streamlines repetitive tasks, generates ideas, and allows you to focus on high-value creative work.' },
    { q: 'Is IMA Studio difficult to use?', a: 'Not at all. IMA Studio is designed with an intuitive interface that makes AI creation accessible to everyone.' },
    { q: 'What can I create with IMA Studio?', a: 'You can generate images, create videos from images or text, compose original music, and much more.' },
    { q: 'Do I need technical knowledge?', a: 'No technical expertise required. IMA Studio features an intuitive no-code interface.' },
    { q: 'What kind of support do you offer?', a: 'We offer comprehensive support including documentation, video tutorials, and email support.' },
  ];

  const logos = ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Amazon', 'Meta', 'NVIDIA', 'Stability'];

  return (
    <div className="app">
      <div className="background">
        <GradientBlinds 
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <nav className="nav">
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>IMA Studio</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a href="#contact" className="btn-primary nav-btn">
          <span>Start Creating</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </nav>

      <section className="hero">
        <div className="tag">
          <span className="tag-dot"></span>
          <span>New</span>
          <span className="tag-text">IMA Studio Beta Now Available</span>
        </div>
        <h1 className="hero-title">
          <span>Intelligent</span>
          <span className="gradient">Creation</span>
          <span>for Modern</span>
          <span>Workflows.</span>
        </h1>
        <p className="hero-subtitle">
          IMA Studio brings AI creation into your workflow — not just a tab, but a living part of how you make things.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary btn-large">
            <span>Get in touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services" className="btn-secondary btn-large">
            <span>View services</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <section className="trust-section">
        <p className="trust-text">Over 50+ creators trust us</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {logos.map((logo, i) => <div key={i} className="trust-logo">{logo}</div>)}
            {logos.map((logo, i) => <div key={`dup-${i}`} className="trust-logo">{logo}</div>)}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">AI Solutions That Take Your Creativity to the Next Level</h2>
          <p className="section-subtitle">We design, develop, and implement AI tools that help you create smarter, not harder</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-content">
              <span className="service-tag">Image Generation</span>
              <h3 className="service-title">Create Stunning Visuals</h3>
              <p className="service-desc">Generate high-quality images from text descriptions. From concept art to product shots.</p>
              <div className="service-features">
                <span className="feature-tag">Text to Image</span>
                <span className="feature-tag">Image to Image</span>
                <span className="feature-tag">Style Transfer</span>
              </div>
            </div>
            <div className="service-visual">
              <div className="visual-mockup image-mockup">
                <div className="mockup-header"><span>AI Generated</span><span className="mockup-status">4 images</span></div>
                <div className="image-grid">
                  <div className="img-placeholder" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
                  <div className="img-placeholder" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
                  <div className="img-placeholder" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
                  <div className="img-placeholder" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <span className="service-tag">Video Creation</span>
              <h3 className="service-title">Bring Stories to Life</h3>
              <p className="service-desc">Transform static images into dynamic videos. Create engaging content for social media.</p>
              <div className="service-features">
                <span className="feature-tag">Image to Video</span>
                <span className="feature-tag">Text to Video</span>
                <span className="feature-tag">Motion Effects</span>
              </div>
            </div>
            <div className="service-visual">
              <div className="visual-mockup video-mockup">
                <div className="video-preview">
                  <div className="video-thumbnail"><div className="play-btn">▶</div></div>
                  <div className="video-info"><span>output.mp4</span><span>00:15</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <span className="service-tag">Music & Audio</span>
              <h3 className="service-title">Compose Original Soundtracks</h3>
              <p className="service-desc">Generate original music and sound effects for your projects. From background scores to jingles.</p>
              <div className="service-features">
                <span className="feature-tag">Text to Music</span>
                <span className="feature-tag">Style Selection</span>
                <span className="feature-tag">Custom Length</span>
              </div>
            </div>
            <div className="service-visual">
              <div className="visual-mockup audio-mockup">
                <div className="audio-wave">
                  {[...Array(20)].map((_, i) => <div key={i} className="wave-bar" style={{height: `${20 + Math.random() * 60}%`}}></div>)}
                </div>
                <div className="audio-controls"><span>♪</span><span>Playing...</span></div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <span className="service-tag">Custom Projects</span>
              <h3 className="service-title">Build Your Vision</h3>
              <p className="service-desc">Need something unique? We offer custom AI solutions tailored to your specific creative needs.</p>
              <div className="service-features">
                <span className="feature-tag">Custom Models</span>
                <span className="feature-tag">API Integration</span>
                <span className="feature-tag">Consulting</span>
              </div>
            </div>
            <div className="service-visual">
              <div className="visual-mockup project-mockup">
                <div className="project-card">
                  <div className="project-header"><span>🚀</span><span>Custom Project</span></div>
                  <div className="project-progress">
                    <div className="progress-bar"><div className="progress-fill" style={{width: '75%'}}></div></div>
                    <span>75% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">Our Simple, Smart, and Scalable Process</h2>
          <p className="section-subtitle">We design, develop, and implement AI tools that help you create smarter</p>
        </div>
        <div className="process-steps">
          {[
            { step: '01', title: 'Discovery', desc: 'We understand your creative needs and identify the best AI solutions for your workflow.' },
            { step: '02', title: 'Setup', desc: 'Our team configures and customizes the AI tools to match your brand and requirements.' },
            { step: '03', title: 'Integration', desc: 'We seamlessly integrate AI solutions into your existing creative pipeline.' },
            { step: '04', title: 'Optimization', desc: 'We continuously refine performance and enhance capabilities for better results.' },
          ].map((item, i) => (
            <div key={i} className="process-step">
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">The Best AI Creation Tools, at the Right Price</h2>
          <p className="section-subtitle">Choose a plan that fits your creative needs and start creating with AI</p>
        </div>

        <div className="billing-toggle">
          <button className={billingPeriod === 'monthly' ? 'active' : ''} onClick={() => setBillingPeriod('monthly')}>Monthly</button>
          <button className={billingPeriod === 'annually' ? 'active' : ''} onClick={() => setBillingPeriod('annually')}>Annually<span className="save-badge">Save 20%</span></button>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="pricing-name">Starter</h3>
              <div className="pricing-price"><span className="price">{billingPeriod === 'monthly' ? '$29' : '$23'}</span><span className="period">/month</span></div>
              <p className="pricing-desc">Perfect for individuals starting with AI creation.</p>
            </div>
            <a href="#" className="pricing-btn btn-secondary">Get started</a>
            <div className="pricing-features">
              <p className="features-title">What's Included:</p>
              {['100 image generations', '10 video generations', '5 music generations', 'Email support', 'Basic templates'].map((f, i) => (
                <div key={i} className="pricing-feature"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>{f}</span></div>
              ))}
            </div>
          </div>

          <div className="pricing-card popular">
            <span className="popular-badge">Popular</span>
            <div className="pricing-header">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="pricing-name">Professional</h3>
              <div className="pricing-price"><span className="price">{billingPeriod === 'monthly' ? '$79' : '$63'}</span><span className="period">/month</span></div>
              <p className="pricing-desc">For creators who need more power and flexibility.</p>
            </div>
            <a href="#" className="pricing-btn btn-primary">Choose this plan</a>
            <div className="pricing-features">
              <p className="features-title">What's Included:</p>
              {['Unlimited images', '100 video generations', '50 music generations', 'Priority support', 'Advanced templates', 'API access'].map((f, i) => (
                <div key={i} className="pricing-feature"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>{f}</span></div>
              ))}
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="pricing-name">Enterprise</h3>
              <div className="pricing-price"><span className="price">Custom</span></div>
              <p className="pricing-desc">For teams and businesses with custom needs.</p>
            </div>
            <a href="#" className="pricing-btn btn-secondary">Contact us</a>
            <div className="pricing-features">
              <p className="features-title">What's Included:</p>
              {['Everything in Pro', 'Custom AI models', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'Team collaboration'].map((f, i) => (
                <div key={i} className="pricing-feature"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>{f}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Why Creators Love IMA Studio</h2>
          <p className="section-subtitle">Real creators, real results with AI-powered creation.</p>
        </div>
        <div className="testimonials-grid">
          {[
            { quote: "IMA Studio transformed my creative workflow. What used to take hours now takes minutes. The quality is incredible!", author: "Sarah Chen", role: "Digital Artist" },
            { quote: "The video generation feature is a game-changer for my social media content. I can create engaging posts in seconds.", author: "Marcus Johnson", role: "Content Creator" },
            { quote: "As a marketer, IMA Studio helps me create visuals for campaigns faster than ever. It's like having a design team 24/7.", author: "Emily Rodriguez", role: "Marketing Director" },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">{[...Array(5)].map((_, j) => <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"/></svg>)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.author[0]}</div>
                <div className="author-info"><p className="author-name">{t.author}</p><p className="author-role">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-header">
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">We've Got the Answers You're Looking For</h2>
          <p className="section-subtitle">Quick answers to your AI creation questions.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFAQ === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                <span>{faq.q}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="faq-icon"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let AI do the Work so you can Create Faster</h2>
          <p className="cta-subtitle">Start Creating Today and Transform Your Workflow</p>
          <a href="#" className="btn-primary btn-large cta-btn">
            <span>Start Creating Free</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>IMA Studio</span>
            </a>
            <p className="footer-desc">IMA Studio – Create Smarter, Design Faster, and Scale Your Vision.</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 IMA Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
