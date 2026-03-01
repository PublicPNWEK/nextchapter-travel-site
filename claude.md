# Claude AI Instructions for Next Chapter Travel Site

## Quick Reference

**Repository Type**: Multi-component static website repository  
**Primary Tech Stack**: Vanilla HTML5 + CSS3 (no frameworks, no build process)  
**WCAG Compliance**: Level AA (mandatory)  
**Security**: CSP headers required on all HTML pages  

---

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Component Breakdown](#component-breakdown)
3. [Critical Requirements](#critical-requirements)
4. [Development Guidelines](#development-guidelines)
5. [Common Patterns](#common-patterns)
6. [Testing & Validation](#testing--validation)
7. [Troubleshooting Guide](#troubleshooting-guide)

---

## Project Architecture

This repository contains **four distinct components** with different purposes and audiences:

### 1. Root Travel Site (`/` - Cinematic Luxury)
**Purpose**: Showcase luxury travel experiences  
**Audience**: Discerning women seeking premium travel  
**Design Philosophy**: Video-driven storytelling, immersive experience  
**Pages**: 5 (index, trips, about, testimonials, contact)  
**Tech**: HTML5 + CSS3, video backgrounds, no navigation between pages  

### 2. NextChapter Travel Site (`/nextchapter/` - Disney Focused)
**Purpose**: Disney-themed travel planning and booking  
**Audience**: Disney vacation seekers  
**Design Philosophy**: Structured navigation, trust indicators, starfield effect  
**Pages**: 7 (index, wdw, cruise, aulani, adventures, international, contact)  
**Tech**: HTML5 + CSS3 animations, comprehensive navigation  

### 3. Multi-Brand Assets (`/multi-brand-assets/`)
**Purpose**: Centralized asset repository for multiple brands  
**Audience**: Internal teams, designers, marketers  
**Contents**: Templates, documentation, brand assets, automation scripts  
**Brands Supported**: Next Chapter Travel, ONE STACK  

### 4. ONE STACK Affiliate Program (`/onestack-affiliate/`)
**Purpose**: Complete affiliate program toolkit for 1Commerce LLC  
**Audience**: Affiliate program managers, affiliates  
**Contents**: Email templates, social media copy, slide decks, video scripts, database structures  

---

## Component Breakdown

### Travel Websites - Technical Architecture

#### Site Independence
**CRITICAL**: Root and NextChapter sites are **completely independent**. They share no:
- CSS files
- JavaScript files
- Navigation elements
- Design patterns (beyond general web standards)

Changes to one site MUST NOT affect the other.

#### Root Site Structure
```
/
├── index.html (video hero: unforgettable luxury)
├── trips.html (slow-motion destination montage)
├── about.html (lifestyle footage)
├── testimonials.html (atmospheric testimonial video)
├── contact.html (elegant contact with CTA)
├── css/style.css
├── videos/ (MP4 files, 8-15 sec, 3-6 MB)
└── images/ (JPG fallbacks for mobile)
```

**Characteristics**:
- No navigation (standalone hero pages)
- Video overlay pattern with centered content
- Mobile: Videos hidden, fallback images shown
- Typography: Playfair Display serif font
- Colors: Gold (#c5a880), white on dark overlays

#### NextChapter Site Structure
```
/nextchapter/
├── index.html (starfield landing page)
├── wdw.html (Walt Disney World)
├── cruise.html (Disney Cruise Line)
├── aulani.html (Aulani Resort)
├── adventures.html (Adventures by Disney)
├── international.html (International Parks)
├── contact.html (contact form with validation)
└── css/next-style.css
```

**Characteristics**:
- Comprehensive navigation across all pages
- Starfield CSS animation (no external dependencies)
- Trust bar with social proof
- HTML5 form validation
- Typography: Cormorant Garamond (headings) + Jost (body)
- Colors: Gold (#c7a27c) on dark background

### Multi-Brand Assets - Structure

```
/multi-brand-assets/
├── templates/
│   ├── email/ (HTML email templates)
│   ├── social_media/ (post templates)
│   ├── web/ (UI components)
│   └── presentations/ (slide deck outlines)
├── documentation/
│   ├── guides/ (implementation guides)
│   ├── references/ (technical docs)
│   └── brand_guidelines/ (visual identity)
├── assets/
│   ├── logos/ (SVG, PNG, PDF formats)
│   ├── icons/ (UI icon set)
│   └── images/ (stock photos)
└── scripts/ (automation utilities)
```

**Key Practices**:
- Variable placeholders: `{{ variable_name }}`
- File naming: lowercase-with-hyphens
- Version numbers: `template-v2.html`
- Include README in subdirectories

### ONE STACK Affiliate - Components

```
/onestack-affiliate/
├── email-templates/
│   ├── 1-welcome-day0.html (immediate signup email)
│   ├── 2-quick-wins-day2.html (first post template)
│   └── 3-month1-recap-day30.html (performance recap)
├── social-media/
│   └── social-media-templates.md (Twitter, Instagram, LinkedIn)
├── slide-deck/
│   └── affiliate-recruitment-deck-outline.md (10 slides)
├── video-scripts/
│   └── affiliate-onboarding-video-script.md (2-3 min)
└── database-templates/
    └── notion-airtable-structure.md (3 databases)
```

**Email Variables**:
- `{{ first_name }}`, `{{ affiliate_link }}`, `{{ discount_code }}`
- `{{ commission_rate }}`, `{{ unsubscribe_url }}`
- Performance: `{{ clicks_month }}`, `{{ orders_month }}`, `{{ revenue_month }}`

---

## Critical Requirements

### Security (Non-Negotiable)

#### 1. Content Security Policy Headers
**REQUIRED on every HTML page**:
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; form-action 'self'; media-src 'self';">
```

**Adjust CSP directives based on page needs**:
- Video pages: Include `media-src 'self'`
- Contact pages: Include `form-action 'self'`
- Google Fonts: Include `style-src ... https://fonts.googleapis.com; font-src ... https://fonts.gstatic.com`

#### 2. Form Security
Current implementation uses placeholders. For production:
- **CSRF tokens**: `<input type="hidden" name="csrf_token" value="...">`
- **Server-side validation**: NEVER trust client-side validation alone
- **Input sanitization**: Clean all data before processing
- **Rate limiting**: Prevent spam and abuse

### Accessibility (WCAG 2.1 Level AA - Mandatory)

#### Required Elements on Every Page
```html
<body>
  <!-- FIRST element: Skip link -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Header with role -->
  <header role="banner">
    <!-- Header content -->
  </header>
  
  <!-- Navigation with ARIA -->
  <nav role="navigation" aria-label="Main navigation">
    <a href="page.html" class="active" aria-current="page">Current Page</a>
  </nav>
  
  <!-- Main content with ID -->
  <main role="main" id="main-content">
    <!-- Content -->
  </main>
  
  <!-- Footer with role -->
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
```

#### ARIA Requirements
- `role="banner"` on headers
- `role="navigation"` with `aria-label="Main navigation"` on nav
- `role="main"` or `id="main-content"` on primary content
- `role="contentinfo"` on footers
- `role="complementary"` for sidebars, trust bars
- `aria-hidden="true"` for decorative elements (overlays, starfields)
- `aria-current="page"` on active navigation links
- `aria-label` for videos and icon-only buttons
- `aria-required="true"` on required form fields

#### Form Accessibility
```html
<form action="#" method="POST" novalidate aria-label="Contact form">
  <label for="email">Email Address:
    <input type="email" id="email" name="email" 
           required minlength="5" maxlength="254" 
           aria-required="true">
  </label>
</form>
```

**Requirements**:
- All inputs have associated `<label for="id">`
- IDs match between labels and inputs
- Required fields have `aria-required="true"`
- Form has descriptive `aria-label`

#### Heading Hierarchy
Always follow proper heading order:
- **One h1 per page** (main heading)
- **h2 for major sections**
- **h3 for subsections** under h2
- **Never skip levels** (e.g., h1 → h3)

#### Color Contrast
- **Minimum 4.5:1 ratio** for normal text
- **Minimum 3:1 ratio** for large text (18pt+)
- Test with WebAIM Contrast Checker

---

## Development Guidelines

### HTML Best Practices

#### Document Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Security headers -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
  <meta http-equiv="Content-Security-Policy" content="...">
  
  <title>Page Title - Next Chapter Travel</title>
  <link rel="stylesheet" href="css/[style.css or next-style.css]">
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Page structure -->
  
</body>
</html>
```

#### Semantic HTML
Use semantic elements, not generic divs:
- `<header>` for page/section headers
- `<nav>` for navigation
- `<main>` for primary content
- `<article>` for self-contained content
- `<section>` for thematic groupings
- `<aside>` for tangential content
- `<footer>` for page/section footers

### CSS Best Practices

#### File Organization
```css
/* 1. Reset/Base styles */
/* 2. Skip link and accessibility */
/* 3. Layout (header, navigation, sections) */
/* 4. Typography */
/* 5. Components (buttons, forms, cards) */
/* 6. Effects (starfield, overlays, animations) */
/* 7. Utilities */
/* 8. Responsive (media queries at end) */
```

#### Naming Conventions
- **Use kebab-case**: `.hero-content`, `.btn-primary`
- **Be descriptive**: `.section-intro` not `.si`
- **BEM-inspired** (optional): `.card__title`, `.btn--secondary`

#### Common Classes
Maintain consistency:
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.button`, `.cta-btn`
- **Layout**: `.container`, `.hero`, `.hero-content`
- **Sections**: `.section-intro`, `.section-callout`, `.content`
- **Navigation**: `.active` for current page

#### Responsive Design
```css
/* Mobile-first: Base styles for mobile */
.hero {
  padding: 2rem 1rem;
}

/* Desktop: Media queries for larger screens */
@media (min-width: 769px) {
  .hero {
    padding: 4rem 2rem;
  }
}

/* Mobile video fallback */
@media (max-width: 768px) {
  .hero-video {
    display: none; /* Hide video on mobile */
  }
  .hero {
    background-image: url('../images/fallback.jpg'); /* Show image */
  }
}
```

### Video Implementation

#### Specifications
- **Format**: MP4 (H.264 codec)
- **Duration**: 8-15 seconds (looping)
- **File size**: 3-6 MB (compressed)
- **Resolution**: 1920x1080 (Full HD)
- **Encoding**: High-quality with `faststart` flag

#### HTML Pattern
```html
<video class="hero-video" autoplay muted loop playsinline preload="none" 
       aria-label="Luxury travel destination with mountains and beach">
  <source src="videos/hero-video.mp4" type="video/mp4">
</video>
```

**Attributes explained**:
- `autoplay`: Start automatically
- `muted`: Required for autoplay
- `loop`: Replay indefinitely
- `playsinline`: Prevent fullscreen on iOS
- `preload="none"`: Don't load until needed
- `aria-label`: Describe video for screen readers

#### Optimization (FFmpeg)
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
       -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**Parameters**:
- `-crf 28`: Quality (18-28, lower = better)
- `-preset slow`: Compression efficiency
- `-movflags +faststart`: Enable progressive streaming

---

## Common Patterns

### Adding a New Page (Root Site)

1. **Copy existing page** (e.g., `trips.html`)
2. **Update meta tags**:
   ```html
   <title>New Page Title - Next Chapter Travel</title>
   ```
3. **Verify security headers** are present
4. **Add skip link** (first element in `<body>`)
5. **Use video hero pattern**:
   ```html
   <section class="video-hero" role="banner">
     <video class="hero-video" autoplay muted loop playsinline preload="none" 
            aria-label="Description">
       <source src="videos/new-page-hero.mp4" type="video/mp4">
     </video>
     <div class="hero-overlay" aria-hidden="true"></div>
     <div class="hero-content" id="main-content">
       <h1>Page Heading</h1>
       <p>Descriptive text</p>
       <a href="next.html" class="btn-primary">Call to Action</a>
     </div>
   </section>
   ```
6. **Add video file** to `/videos/` (8-15 sec, 3-6 MB)
7. **Add fallback image** to `/images/`
8. **Test on mobile** (video should hide, image should show)

### Adding a New Page (NextChapter Site)

1. **Copy existing page** (e.g., `wdw.html`)
2. **Update meta tags** and title
3. **Verify security headers** + skip link
4. **Update navigation active state**:
   ```html
   <nav role="navigation" aria-label="Main navigation">
     <a href="wdw.html">Walt Disney World</a>
     <a href="cruise.html">Cruise & Rivers</a>
     <a href="new.html" class="active" aria-current="page">New Page</a>
   </nav>
   ```
5. **Choose hero style**:
   - Starfield: `<section class="hero starfield">`
   - Standard: `<section class="hero">`
6. **Add main content** with semantic structure
7. **Include footer** with copyright

### Creating Email Templates (ONE STACK)

#### Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Email Subject</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
          <!-- Email content -->
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

#### Best Practices
- **Table-based layout** (not divs)
- **Inline styles** (no external CSS)
- **Email-safe fonts**: Arial, Helvetica, Georgia, Times
- **Variable placeholders**: `{{ variable_name }}`
- **Width**: 600px max
- **Alt text** on all images
- **Test**: Litmus, Email on Acid, or multiple clients

#### Common Variables
- `{{ first_name }}` - Personalization
- `{{ affiliate_link }}` - Tracking link
- `{{ discount_code }}` - Promo code
- `{{ commission_rate }}` - Commission percentage
- `{{ unsubscribe_url }}` - Legal requirement

---

## Testing & Validation

### Browser Testing Matrix

| Browser | Versions | Platforms |
|---------|----------|-----------|
| Chrome | Last 2 | Windows, Mac, Android |
| Firefox | Last 2 | Windows, Mac |
| Safari | Last 2 | Mac, iOS 12+ |
| Edge | Last 2 | Windows |

### Accessibility Testing

#### Automated Tools
1. **axe DevTools** (Chrome/Firefox extension)
   - Install and run on each page
   - Fix all critical and serious issues
2. **WAVE** (Web Accessibility Evaluation Tool)
   - https://wave.webaim.org/
   - Check for errors and contrast issues
3. **Lighthouse** (Chrome DevTools)
   - Run accessibility audit
   - Target score: 90+

#### Manual Testing
1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Verify skip link appears on focus
   - Ensure logical tab order
   - Test Enter/Space on buttons
2. **Screen Reader Testing**
   - Windows: NVDA (free)
   - Mac: VoiceOver (built-in)
   - Test: Headings, landmarks, forms, alt text
3. **Color Contrast**
   - WebAIM Contrast Checker
   - Verify 4.5:1 minimum ratio

### HTML/CSS Validation

#### W3C HTML Validator
1. Go to https://validator.w3.org/
2. Upload file or enter URL
3. Fix all errors and warnings
4. Common issues:
   - Missing closing tags
   - Duplicate IDs
   - Invalid nesting

#### W3C CSS Validator
1. Go to https://jigsaw.w3.org/css-validator/
2. Upload CSS file or enter URL
3. Fix errors (ignore vendor prefix warnings)

### Security Testing

#### Security Headers
1. Go to https://securityheaders.com/
2. Enter site URL
3. Target grade: A or A+
4. Verify:
   - Content-Security-Policy present
   - X-Frame-Options present
   - X-Content-Type-Options present

### Manual Testing Checklist

#### Root Site
- [ ] Videos load and loop correctly
- [ ] Video overlays display properly
- [ ] Content is centered and readable
- [ ] Buttons are clickable and styled
- [ ] Mobile: Videos hidden, fallback images shown
- [ ] Skip link works and is visible on focus
- [ ] No console errors

#### NextChapter Site
- [ ] Navigation works on all pages
- [ ] Active page highlighted in nav
- [ ] Starfield animation runs smoothly
- [ ] Trust bar displays correctly
- [ ] Forms validate properly
- [ ] All links work
- [ ] Skip link works and is visible on focus
- [ ] No console errors

#### Multi-Brand Assets
- [ ] Templates contain variable placeholders
- [ ] File naming follows conventions
- [ ] Documentation is clear and complete
- [ ] Assets are properly organized

#### ONE STACK Affiliate
- [ ] Email templates render in Gmail, Outlook, Apple Mail
- [ ] Social media templates are copy-paste ready
- [ ] Variable placeholders are consistent
- [ ] Database structure is logical and complete

---

## Troubleshooting Guide

### Videos Not Loading

**Symptoms**: Black screen or broken video icon

**Checklist**:
1. ✓ File path correct? (e.g., `videos/filename.mp4`)
2. ✓ File exists in `/videos/` directory?
3. ✓ File size within limits? (3-6 MB)
4. ✓ File format correct? (MP4, H.264)
5. ✓ CSP includes `media-src 'self'`?
6. ✓ On mobile? (Videos intentionally hidden)

**Solutions**:
- Check browser console for errors
- Verify file path (case-sensitive on Linux)
- Re-encode video with FFmpeg
- Test with a known-working video

### Styles Not Applying

**Symptoms**: Page looks unstyled or partially styled

**Checklist**:
1. ✓ Correct CSS file linked?
   - Root site: `href="css/style.css"`
   - NextChapter: `href="css/next-style.css"`
2. ✓ CSS file exists at that path?
3. ✓ Class names spelled correctly?
4. ✓ Class names use kebab-case?

**Solutions**:
- Open DevTools → Network tab → verify CSS loads
- Inspect element → check computed styles
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check for typos in class names

### Navigation Not Working (NextChapter)

**Symptoms**: Active state not showing, keyboard nav broken

**Checklist**:
1. ✓ Active class on current page? `class="active"`
2. ✓ ARIA attribute present? `aria-current="page"`
3. ✓ ARIA label on nav? `aria-label="Main navigation"`
4. ✓ Links are actual `<a>` elements?

**Solutions**:
```html
<!-- Correct pattern -->
<nav role="navigation" aria-label="Main navigation">
  <a href="wdw.html" class="active" aria-current="page">Walt Disney World</a>
  <a href="cruise.html">Cruise & Rivers</a>
</nav>
```

### Form Validation Issues

**Symptoms**: Form submits without validation, errors not showing

**Checklist**:
1. ✓ HTML5 validation attributes present?
   - `required` on required fields
   - `type="email"` for email fields
   - `minlength` and `maxlength` for text
2. ✓ Labels associated with inputs?
   - `<label for="email">` matches `<input id="email">`
3. ✓ ARIA attributes present?
   - `aria-required="true"` on required fields
4. ✓ Form doesn't have `novalidate` attribute? (unless custom validation)

**Solutions**:
```html
<!-- Correct form pattern -->
<form action="#" method="POST" aria-label="Contact form">
  <label for="email">Email:
    <input type="email" id="email" name="email" 
           required minlength="5" maxlength="254" 
           aria-required="true">
  </label>
  <button type="submit">Send</button>
</form>
```

**Note**: Server-side validation NOT implemented (placeholder only).

### Accessibility Errors

**Symptoms**: axe DevTools or WAVE reports errors

**Common Issues & Solutions**:

1. **Missing skip link**
   ```html
   <!-- Add as FIRST element in <body> -->
   <a href="#main-content" class="skip-link">Skip to main content</a>
   ```

2. **Missing main landmark**
   ```html
   <!-- Add role and ID to main content -->
   <main role="main" id="main-content">
     <!-- Content -->
   </main>
   ```

3. **Heading hierarchy skip**
   ```html
   <!-- WRONG -->
   <h1>Title</h1>
   <h3>Subsection</h3> <!-- Skipped h2! -->
   
   <!-- CORRECT -->
   <h1>Title</h1>
   <h2>Section</h2>
   <h3>Subsection</h3>
   ```

4. **Low color contrast**
   - Use WebAIM Contrast Checker
   - Minimum ratio: 4.5:1
   - Adjust colors to meet standards

5. **Missing alt text**
   ```html
   <!-- WRONG -->
   <img src="photo.jpg">
   
   <!-- CORRECT -->
   <img src="photo.jpg" alt="Sunset over tropical beach">
   ```

6. **Form labels not associated**
   ```html
   <!-- WRONG -->
   <label>Email</label>
   <input type="email" name="email">
   
   <!-- CORRECT -->
   <label for="email">Email</label>
   <input type="email" id="email" name="email">
   ```

### CSP Violations

**Symptoms**: Console errors about blocked resources

**Common Errors & Solutions**:

1. **"Refused to load script"**
   - Add script source to CSP: `script-src 'self' https://example.com`

2. **"Refused to load stylesheet"**
   - Add style source to CSP: `style-src 'self' https://fonts.googleapis.com`

3. **"Refused to load font"**
   - Add font source to CSP: `font-src 'self' https://fonts.gstatic.com`

4. **"Refused to execute inline script"**
   - Remove inline scripts or add `'unsafe-inline'` to `script-src`
   - **Note**: `'unsafe-inline'` reduces security, avoid if possible

---

## Workflow Examples

### Example 1: Adding a New Disney Destination Page

**Task**: Add a new page for "Disney Paris" to the NextChapter site.

**Steps**:
1. Copy `international.html` to `paris.html`
2. Update title: `<title>Disneyland Paris - Next Chapter Travel</title>`
3. Update all navigation:
   ```html
   <nav role="navigation" aria-label="Main navigation">
     <a href="wdw.html">Walt Disney World</a>
     <a href="cruise.html">Cruise & Rivers</a>
     <a href="aulani.html">Aulani</a>
     <a href="adventures.html">Adventures</a>
     <a href="international.html">International Parks</a>
     <a href="paris.html" class="active" aria-current="page">Paris</a>
   </nav>
   ```
4. Update main content (heading, description, etc.)
5. Test keyboard navigation
6. Validate HTML with W3C validator
7. Test accessibility with axe DevTools

### Example 2: Adding a Video to Root Site

**Task**: Add a new video hero to `trips.html`.

**Steps**:
1. Optimize video with FFmpeg (3-6 MB, 8-15 sec)
2. Save to `/videos/trips-hero.mp4`
3. Update HTML:
   ```html
   <video class="hero-video" autoplay muted loop playsinline preload="none" 
          aria-label="Exotic destinations montage">
     <source src="videos/trips-hero.mp4" type="video/mp4">
   </video>
   ```
4. Add fallback image to `/images/trips-hero.jpg`
5. Update CSS for mobile fallback:
   ```css
   @media (max-width: 768px) {
     .trips .hero-video {
       display: none;
     }
     .trips .video-hero {
       background-image: url('../images/trips-hero.jpg');
     }
   }
   ```
6. Test on desktop and mobile
7. Check file loads (DevTools → Network tab)

### Example 3: Creating a New Email Template

**Task**: Create a "Welcome to ONE STACK" email for customers.

**Steps**:
1. Create file: `/onestack-affiliate/email-templates/customer-welcome.html`
2. Use table-based structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Welcome to ONE STACK</title>
   </head>
   <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
     <table width="100%" cellpadding="0" cellspacing="0" border="0">
       <tr>
         <td align="center" style="padding: 40px 0;">
           <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
             <!-- Header -->
             <tr>
               <td style="padding: 40px 40px 20px; text-align: center;">
                 <h1 style="margin: 0; color: #333; font-size: 24px;">Welcome to ONE STACK, {{ first_name }}!</h1>
               </td>
             </tr>
             <!-- Content -->
             <tr>
               <td style="padding: 20px 40px; color: #666; font-size: 16px; line-height: 1.6;">
                 <p>Thank you for your order!</p>
                 <!-- More content -->
               </td>
             </tr>
             <!-- Footer -->
             <tr>
               <td style="padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
                 <p><a href="{{ unsubscribe_url }}" style="color: #999;">Unsubscribe</a></p>
               </td>
             </tr>
           </table>
         </td>
       </tr>
     </table>
   </body>
   </html>
   ```
3. Test in multiple email clients
4. Verify all variables are present
5. Check mobile rendering

---

## Best Practices Summary

### DO ✅

- **Always** include security headers (CSP, X-Frame-Options, X-Content-Type-Options)
- **Always** add skip links as first element in `<body>`
- **Always** use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- **Always** include ARIA roles and labels
- **Always** associate form labels with inputs
- **Always** provide alt text for images
- **Always** test with keyboard and screen reader
- **Always** validate HTML and CSS
- **Always** check color contrast (4.5:1 minimum)
- **Always** optimize videos (3-6 MB, 8-15 sec)
- **Always** provide mobile fallback images for videos

### DON'T ❌

- **Never** skip heading levels (h1 → h3)
- **Never** omit security headers
- **Never** forget skip links
- **Never** use generic divs instead of semantic elements
- **Never** trust client-side validation alone
- **Never** commit secrets or credentials
- **Never** make changes that affect both travel sites simultaneously
- **Never** add JavaScript unless absolutely necessary
- **Never** use overly large video files (>6 MB)
- **Never** forget ARIA attributes on required elements

---

## Quick Command Reference

### FFmpeg Video Optimization
```bash
# Standard optimization (3-6 MB, good quality)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
       -c:a aac -b:a 128k -movflags +faststart output.mp4

# Smaller file size (lower quality)
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow \
       -c:a aac -b:a 96k -movflags +faststart output.mp4

# Better quality (larger file)
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -preset slow \
       -c:a aac -b:a 192k -movflags +faststart output.mp4
```

### Git Commands (if using)
```bash
# Status and diff
git status
git diff

# Stage and commit
git add .
git commit -m "Description of changes"

# Push
git push origin main
```

### Local Testing
```bash
# Start simple HTTP server (Python 3)
python3 -m http.server 8000

# Start simple HTTP server (Python 2)
python -m SimpleHTTPServer 8000

# Open in browser
# Navigate to: http://localhost:8000
```

---

## Resources & Links

### Validation & Testing
- **W3C HTML Validator**: https://validator.w3.org/
- **W3C CSS Validator**: https://jigsaw.w3.org/css-validator/
- **WAVE Accessibility**: https://wave.webaim.org/
- **axe DevTools**: https://www.deque.com/axe/devtools/
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Security Headers**: https://securityheaders.com/

### Documentation
- **MDN Web Docs**: https://developer.mozilla.org/
- **WCAG Quick Reference**: https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Authoring Practices**: https://www.w3.org/WAI/ARIA/apg/
- **CSP Reference**: https://content-security-policy.com/
- **Can I Use**: https://caniuse.com/ (browser compatibility)

### Project Documentation
- **README.md**: Project overview and structure
- **CONTRIBUTING.md**: Code quality standards and contribution guidelines
- **SECURITY.md**: Security implementation and best practices
- **ANALYSIS_REPORT.md**: Code analysis findings and resolutions
- **.github/copilot-instructions.md**: Detailed GitHub Copilot workspace instructions

---

## Version History

- **v1.0** (March 2026): Initial comprehensive documentation
  - Complete project architecture
  - All four component breakdowns
  - Critical requirements (security, accessibility)
  - Development guidelines and common patterns
  - Testing & validation procedures
  - Comprehensive troubleshooting guide
  - Workflow examples

---

## Summary

This repository is a **multi-component static website** with:
1. **Two independent travel sites** (cinematic luxury + Disney focus)
2. **Multi-brand asset library** (templates, docs, assets)
3. **Complete affiliate program toolkit** (emails, social, slides, videos, databases)

**Core Principles**:
- **Security First**: CSP headers on every HTML page
- **Accessibility Always**: WCAG 2.1 AA compliance mandatory
- **Simplicity**: No frameworks, no build process, vanilla web technologies
- **Performance**: Optimized videos, responsive design, mobile-first
- **Consistency**: Match existing patterns within each component

**When Unsure**:
1. Check similar pages/files for patterns
2. Read CONTRIBUTING.md for code standards
3. Review SECURITY.md for security requirements
4. Test with keyboard, screen reader, and validators
5. Make the smallest change that solves the problem

**Remember**: The two travel sites are **completely independent**. Changes to one must not affect the other.

---

**Last Updated**: March 2026  
**Maintained by**: Next Chapter Travel Development Team  
**For Claude AI**: Optimized for context window and hierarchical understanding
