# Copilot Instructions for Next Chapter Travel Website

## Project Overview

This is a **multi-site static website** for Next Chapter Travel, a luxury travel agency specializing in curated travel experiences. The repository contains two distinct websites with different design approaches, both built with vanilla HTML, CSS, and minimal JavaScript.

### Business Context
- **Target Audience**: Discerning women seeking luxury travel experiences
- **Primary Services**: Disney-themed travel planning and cinematic luxury travel experiences
- **Deployment**: Static sites hosted on Netlify with separate deployment strategies

---

## Architecture Overview

### Multi-Site Architecture

This repository follows a **dual-site architecture** with two independent static websites:

#### 1. Root Site (`/` - Cinematic Travel Site)
**Purpose**: Luxury travel experiences with video-driven storytelling  
**Tech Stack**: Vanilla HTML5 + CSS3  
**Design Approach**: Full-screen video heroes with overlays  
**Pages**:
- `index.html` - Home page with cinematic video hero
- `trips.html` - Destinations page with slow-motion montage
- `about.html` - About page with lifestyle footage
- `testimonials.html` - Testimonials with atmospheric video
- `contact.html` - Contact page with elegant video

**Key Characteristics**:
- Immersive video backgrounds (MP4 format, 8-15 seconds, 3-6 MB)
- Minimal navigation (standalone hero pages)
- Mobile fallback to high-quality JPG images
- Typography: Playfair Display serif font
- Color scheme: Gold (#c5a880) and white on dark overlays

#### 2. NextChapter Site (`/nextchapter/` - Disney Travel Site)
**Purpose**: Disney-themed travel planning and booking  
**Tech Stack**: Vanilla HTML5 + CSS3 + CSS animations  
**Design Approach**: Animated starfield effect with structured navigation  
**Pages**:
- `index.html` - Landing page with starfield hero and trust bar
- `wdw.html` - Walt Disney World offerings
- `cruise.html` - Disney Cruise Line
- `aulani.html` - Aulani Resort (Hawaii)
- `adventures.html` - Adventures by Disney
- `international.html` - International Disney Parks
- `contact.html` - Contact form with validation

**Key Characteristics**:
- Animated starfield CSS effect (no external dependencies)
- Comprehensive navigation across all pages
- Trust indicators and social proof
- Contact form with HTML5 validation
- Typography: Cormorant Garamond (headings) + Jost (body)
- Color scheme: Gold (#c7a27c) on dark background

### Service Boundaries

```
nextchapter-travel-site/
├── Root Site (Cinematic Luxury Travel)
│   ├── index.html, trips.html, about.html, testimonials.html, contact.html
│   ├── css/style.css
│   ├── videos/ (cinematic hero videos)
│   └── images/ (mobile fallbacks)
│
└── nextchapter/ (Disney Travel Specialization)
    ├── index.html, wdw.html, cruise.html, aulani.html, etc.
    ├── css/next-style.css
    └── Separate styling and navigation system
```

**Important**: These two sites are **independent**. Changes to one should not affect the other unless explicitly cross-cutting (e.g., security headers, accessibility patterns).

---

## Coding Standards

### HTML Standards

#### 1. Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Security headers (REQUIRED on ALL pages) -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
  <meta http-equiv="Content-Security-Policy" content="...">
  <title>Page Title - Next Chapter Travel</title>
  <link rel="stylesheet" href="css/[style.css or next-style.css]">
</head>
<body>
  <!-- Skip link for accessibility (REQUIRED) -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <!-- Content -->
</body>
</html>
```

#### 2. Semantic HTML & ARIA Requirements
- **ALWAYS use semantic HTML5 elements**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ALWAYS include ARIA roles**:
  - `role="banner"` on headers
  - `role="navigation"` with `aria-label="Main navigation"` on nav
  - `role="main"` or `id="main-content"` on primary content
  - `role="contentinfo"` on footers
  - `role="complementary"` for trust bars, sidebars
  - `aria-hidden="true"` for decorative elements (overlays, starfields)
  - `aria-current="page"` on active navigation links
  - `aria-label` for videos and icon-only buttons
  - `aria-required="true"` on required form fields

#### 3. Security Headers (NON-NEGOTIABLE)
Every HTML page MUST include these meta tags:
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; form-action 'self'; media-src 'self';">
```

**Note**: Adjust CSP directives based on page needs (e.g., `media-src` for video pages, `form-action` for contact pages).

#### 4. Accessibility Requirements (WCAG 2.1 Level AA)
- **Skip links**: Every page has a skip link to `#main-content`
- **Heading hierarchy**: Proper h1 → h2 → h3 structure (no skipping levels)
- **Form labels**: All inputs have associated `<label for="id">` elements
- **Alt text**: All images have descriptive `alt` attributes
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Color contrast**: Minimum 4.5:1 ratio for normal text

### CSS Standards

#### 1. File Organization
Follow this structure in CSS files:
```css
/* 1. Reset/Base styles */
/* 2. Skip link and accessibility */
/* 3. Layout (header, navigation, sections) */
/* 4. Typography */
/* 5. Components (buttons, forms, cards) */
/* 6. Effects (starfield, overlays) */
/* 7. Utilities */
/* 8. Responsive (media queries) */
```

#### 2. Naming Conventions
- **Class names**: Use kebab-case (`.hero-content`, `.btn-primary`)
- **Be descriptive**: `.section-intro` over `.si`
- **BEM-inspired** (optional but encouraged): `.hero__content`, `.btn--secondary`

#### 3. Common Classes Across Sites
Maintain consistency where possible:
- Buttons: `.btn-primary`, `.btn-secondary`, `.button`, `.cta-btn`
- Layout: `.container`, `.hero`, `.hero-content`
- Sections: `.section-intro`, `.section-callout`, `.content`
- Navigation: `.active` for current page

#### 4. Responsive Design
- **Mobile-first approach**: Base styles for mobile, media queries for desktop
- **Breakpoint**: `@media (max-width: 768px)` for mobile
- **Video fallback**: Hide videos on mobile, show background images

#### 5. Performance Best Practices
- Use CSS animations instead of JavaScript where possible
- Minimize use of `!important`
- Avoid deep nesting (max 3 levels)
- Use shorthand properties

### JavaScript (Minimal Usage)
- **Currently**: This is a static site with NO custom JavaScript
- **If adding JS**: Keep it vanilla (no frameworks), minimal, and progressive enhancement
- **Future considerations**: Form validation, video controls, lazy loading

---

## Development Workflow

### Before Making Changes

1. **Identify the site**: Are you working on root site or nextchapter site?
2. **Check existing patterns**: Review similar pages for consistency
3. **Read documentation**: Consult CONTRIBUTING.md and SECURITY.md
4. **Test locally**: Open HTML files in browser to verify

### Making Changes

#### For Root Site (Cinematic):
- **CSS file**: `css/style.css`
- **Pattern**: Video hero with overlay + centered content
- **Typography**: Playfair Display serif
- **Color**: Gold #c5a880

#### For NextChapter Site (Disney):
- **CSS file**: `nextchapter/css/next-style.css`
- **Pattern**: Header + nav + hero (starfield or standard) + main content + footer
- **Typography**: Cormorant Garamond (headings), Jost (body)
- **Color**: Gold #c7a27c
- **Always include**: Navigation with active state

### Video Guidelines

**Specifications**:
- Format: MP4 (H.264 codec)
- Duration: 8-15 seconds (looping)
- File size: 3-6 MB (compressed)
- Resolution: 1920x1080 (Full HD)
- Encoding: High-quality compression with `faststart` flag

**HTML Video Pattern**:
```html
<video class="hero-video" autoplay muted loop playsinline preload="none" 
       aria-label="Descriptive label">
  <source src="videos/filename.mp4" type="video/mp4">
</video>
```

**Optimization Command** (FFmpeg):
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
       -c:a aac -b:a 128k -movflags +faststart output.mp4
```

### Form Handling

**Current Implementation**: Forms use `action="#"` placeholders.

**When implementing backend**:
1. Add CSRF tokens: `<input type="hidden" name="csrf_token" value="...">`
2. Implement server-side validation (NEVER trust client-side alone)
3. Sanitize all inputs
4. Add rate limiting to prevent spam
5. Use HTTPS in production

**Form Validation Pattern**:
```html
<form action="#" method="POST" novalidate aria-label="Contact form">
  <label for="email">Email:
    <input type="email" id="email" name="email" required 
           maxlength="254" aria-required="true">
  </label>
</form>
```

---

## Security Best Practices

### 1. Content Security Policy (CSP)
- **Always include** on every HTML page
- **Adjust as needed**: Add/remove sources based on page requirements
- **Current policy**: Allows self, inline scripts/styles, Google Fonts, and data URIs

### 2. Additional Headers
- **X-Content-Type-Options**: Prevents MIME sniffing attacks
- **X-Frame-Options**: Prevents clickjacking
- **Future**: Add HSTS headers via Netlify configuration

### 3. Form Security
- Use appropriate input types (`email`, `tel`, `url`)
- Set `minlength` and `maxlength` constraints
- Always implement server-side validation
- Add CSRF protection before production

### 4. Production Checklist
- [ ] HTTPS enforced
- [ ] Server-side form validation implemented
- [ ] CSRF tokens added to forms
- [ ] Rate limiting on form submissions
- [ ] Security headers configured (use securityheaders.com to test)
- [ ] Regular security audits scheduled

### 5. Sensitive Data
- **NEVER commit**: API keys, credentials, or secrets
- **Use environment variables**: For any configuration
- **Email obfuscation**: Consider form services instead of mailto: links

---

## Testing Requirements

### Browser Compatibility
Test on:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 9+)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Space, Arrow keys)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (WebAIM Contrast Checker)
- [ ] Automated testing (axe DevTools, WAVE)

### Validation
- [ ] HTML: W3C Validator (https://validator.w3.org/)
- [ ] CSS: W3C CSS Validator (https://jigsaw.w3.org/css-validator/)
- [ ] Security headers: securityheaders.com

### Manual Testing Checklist
- [ ] All videos load and loop correctly
- [ ] Fallback images work on mobile (disable videos)
- [ ] Navigation works on all pages (nextchapter site)
- [ ] Forms validate properly
- [ ] Skip links are visible on focus
- [ ] Active navigation states are correct
- [ ] No console errors
- [ ] Responsive design works on various screen sizes

---

## Deployment

### Netlify Configuration
- **Config file**: `netlify.toml`
- **Publish directory**: `.` (root)
- **Build command**: None (static site)
- **Redirects**: All requests to index.html (SPA-style)

### Deployment Strategies

**Option 1: Single Domain**
- Root site: `example.com`
- NextChapter: `example.com/nextchapter/`

**Option 2: Separate Domains**
- Root site: `nextchaptertravel.com`
- NextChapter: `disney.nextchaptertravel.com` or separate Netlify deployment

**CDN Recommendations**:
- Host videos on dedicated CDN (Cloudflare, AWS CloudFront)
- Enable hotlink protection
- Use image optimization service

---

## Common Tasks

### Adding a New Page (Root Site)
1. Copy structure from existing page (e.g., `trips.html`)
2. Update `<title>` and content
3. Ensure security headers are present
4. Add skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>`
5. Use video hero pattern with overlay
6. Add video file to `/videos/` (8-15 sec, 3-6 MB)
7. Add fallback image to `/images/`
8. Test on mobile (video should hide, image should show)

### Adding a New Page (NextChapter Site)
1. Copy structure from existing page (e.g., `wdw.html`)
2. Update `<title>`, navigation active state, and content
3. Ensure security headers are present
4. Add skip link and ARIA labels
5. Include header with logo and full navigation
6. Update `aria-current="page"` on active nav link
7. Use `.hero.starfield` or standard `.hero` with `.hero-content`
8. Add main content with `.container`, `.section-intro`, `.section-callout`
9. Include footer with copyright

### Updating Styles
- **Root site**: Edit `css/style.css`
- **NextChapter site**: Edit `nextchapter/css/next-style.css`
- **Test both sites**: Ensure changes don't bleed across (they're independent)
- **Add comments**: Explain complex CSS (starfield effect, animations)

### Adding External Fonts
Current fonts:
- Root: Playfair Display (built-in)
- NextChapter: Google Fonts (Cormorant Garamond, Jost)

If adding new fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=FontName&display=swap" rel="stylesheet">
```

Update CSP to allow fonts: `font-src 'self' https://fonts.gstatic.com;`

---

## File Structure Reference

```
nextchapter-travel-site/
├── .github/
│   └── copilot-instructions.md (this file)
├── css/
│   └── style.css (root site styles)
├── images/
│   └── (mobile fallback images)
├── videos/
│   └── (cinematic hero videos)
├── nextchapter/
│   ├── css/
│   │   └── next-style.css (nextchapter site styles)
│   ├── index.html (landing page with starfield)
│   ├── wdw.html, cruise.html, aulani.html, etc.
│   └── contact.html (with form)
├── index.html (root home page)
├── trips.html, about.html, testimonials.html, contact.html
├── netlify.toml (deployment config)
├── README.md (project overview)
├── CONTRIBUTING.md (code quality standards)
├── SECURITY.md (security guidelines)
└── ANALYSIS_REPORT.md (code analysis findings)
```

---

## Key Principles for Future Development

### 1. Minimal Changes
- Make surgical, focused changes
- Don't refactor unnecessarily
- Preserve working code unless fixing a bug or vulnerability

### 2. Consistency
- Match existing patterns and styles
- Use the same class names, HTML structure, and ARIA patterns
- Keep both sites consistent with their own internal patterns

### 3. Security First
- Always include security headers
- Validate all inputs (client + server)
- Never commit secrets or credentials

### 4. Accessibility Always
- WCAG 2.1 Level AA compliance is mandatory
- Test with keyboard and screen readers
- Use semantic HTML and ARIA

### 5. Performance
- Optimize videos (3-6 MB, 8-15 sec)
- Use CSS animations over JavaScript
- Implement lazy loading if adding more content
- Mobile-first responsive design

### 6. Documentation
- Update README.md when adding features
- Document security changes in SECURITY.md
- Update CONTRIBUTING.md if adding new patterns

---

## Troubleshooting Common Issues

### Videos Not Loading
1. Check file path: `videos/filename.mp4`
2. Verify file size: Should be 3-6 MB
3. Check CSP: Ensure `media-src 'self'` is present
4. Test on mobile: Videos are hidden on mobile (by design)

### Styles Not Applying
1. Verify correct CSS file:
   - Root site: `css/style.css`
   - NextChapter: `nextchapter/css/next-style.css`
2. Check class name spelling (kebab-case)
3. Inspect browser console for errors
4. Clear browser cache

### Navigation Not Working (NextChapter)
1. Check active state: `class="active" aria-current="page"`
2. Verify ARIA label: `aria-label="Main navigation"`
3. Test keyboard navigation (Tab key)
4. Ensure all hrefs are correct relative paths

### Form Validation Issues
1. Check HTML5 attributes: `required`, `minlength`, `maxlength`, `type="email"`
2. Verify ARIA: `aria-required="true"`
3. Ensure IDs match: `<label for="id">` and `<input id="id">`
4. Remember: Server-side validation is NOT implemented yet (placeholder)

### Accessibility Errors
1. Run axe DevTools or WAVE
2. Check skip link: Must be first element in `<body>`
3. Verify heading hierarchy: h1 → h2 → h3 (no skipping)
4. Test color contrast: 4.5:1 minimum
5. Ensure all images have alt text

---

## Resources

- **W3C HTML Validator**: https://validator.w3.org/
- **W3C CSS Validator**: https://jigsaw.w3.org/css-validator/
- **WebAIM** (Accessibility): https://webaim.org/
- **WCAG Quick Reference**: https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/ (browser compatibility)
- **Security Headers Test**: https://securityheaders.com/
- **Content Security Policy Reference**: https://content-security-policy.com/

---

## Summary: Big Picture

**What This Codebase Is:**
A dual-site, static HTML/CSS travel website with two distinct brands and design approaches. One is cinematic and video-driven (root), the other is structured and Disney-focused (nextchapter).

**What Makes It Unique:**
- No build process, no dependencies, pure vanilla web technologies
- Strong emphasis on security headers and WCAG accessibility
- Video-first design with mobile fallbacks
- Two completely independent sites in one repository

**Your Role:**
Maintain the simplicity and elegance of this architecture. When adding features:
1. **Stay minimal** - No frameworks, no unnecessary complexity
2. **Stay secure** - Always include security headers
3. **Stay accessible** - WCAG 2.1 AA compliance is mandatory
4. **Stay consistent** - Match existing patterns within each site

**When in Doubt:**
- Check existing similar pages for patterns
- Read CONTRIBUTING.md for code standards
- Review SECURITY.md for security requirements
- Test with keyboard, screen reader, and multiple browsers
- Make the smallest change that solves the problem

---

**Last Updated**: February 2026  
**For Questions**: Refer to README.md, CONTRIBUTING.md, SECURITY.md
