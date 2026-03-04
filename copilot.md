# GitHub Copilot Instructions for Next Chapter Travel Site

## Project Overview

This is a **multi-component repository** containing:

1. **Next Chapter Travel Websites** (dual-site architecture)
   - Root cinematic luxury travel site (`/`)
   - NextChapter Disney travel site (`/nextchapter/`)
2. **Multi-Brand Assets Repository** (`/multi-brand-assets/`)
3. **ONE STACK Affiliate Program** (`/onestack-affiliate/`)

### Repository Type
Static HTML/CSS websites with no build process, no frameworks, pure vanilla web technologies.

---

## Architecture

### 1. Travel Websites (Primary)

#### Root Site (`/` - Cinematic Travel)
- **Purpose**: Luxury travel experiences with video-driven storytelling
- **Tech**: Vanilla HTML5 + CSS3
- **Design**: Full-screen video heroes with overlays
- **Pages**: `index.html`, `trips.html`, `about.html`, `testimonials.html`, `contact.html`
- **Styling**: `css/style.css`
- **Assets**: `videos/` (8-15sec MP4), `images/` (mobile fallbacks)

**Key Features**:
- Immersive video backgrounds
- Mobile fallback to high-quality JPG images
- Minimal standalone pages (no navigation)
- Typography: Playfair Display serif
- Color scheme: Gold (#c5a880) on dark overlays

#### NextChapter Site (`/nextchapter/` - Disney Travel)
- **Purpose**: Disney-themed travel planning and booking
- **Tech**: Vanilla HTML5 + CSS3 + CSS animations
- **Design**: Animated starfield effect with structured navigation
- **Pages**: `index.html`, `wdw.html`, `cruise.html`, `aulani.html`, `adventures.html`, `international.html`, `contact.html`
- **Styling**: `nextchapter/css/next-style.css`

**Key Features**:
- Animated starfield CSS effect (no JS dependencies)
- Comprehensive navigation across all pages
- Trust indicators and social proof
- Contact form with HTML5 validation
- Typography: Cormorant Garamond (headings) + Jost (body)
- Color scheme: Gold (#c7a27c) on dark background

**Important**: These two sites are **completely independent**. Changes to one should not affect the other.

### 2. Multi-Brand Assets (`/multi-brand-assets/`)

Central hub for reusable assets across multiple brands:
- `templates/`: Email, social media, web components, presentations
- `documentation/`: Guides, references, brand guidelines
- `assets/`: Logos, icons, images
- `scripts/`: Automation scripts

**Supported Brands**: Next Chapter Travel, ONE STACK

### 3. ONE STACK Affiliate Program (`/onestack-affiliate/`)

Complete affiliate program content and templates for 1Commerce LLC:
- `email-templates/`: 3 HTML email templates (welcome, quick-wins, month1-recap)
- `social-media/`: Twitter/X, Instagram, LinkedIn templates
- `slide-deck/`: 10-slide recruitment presentation outline
- `video-scripts/`: 2-3 min onboarding video script
- `database-templates/`: Notion/Airtable structure for program management

---

## Coding Standards

### HTML Requirements

#### 1. Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- REQUIRED: Security headers on ALL pages -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; form-action 'self'; media-src 'self';">
  
  <title>Page Title - Next Chapter Travel</title>
  <link rel="stylesheet" href="css/[style.css or next-style.css]">
</head>
<body>
  <!-- REQUIRED: Skip link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Page content -->
</body>
</html>
```

#### 2. Semantic HTML & ARIA (MANDATORY)
Always include:
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ARIA roles:
  - `role="banner"` on headers
  - `role="navigation"` with `aria-label="Main navigation"` on nav
  - `role="main"` or `id="main-content"` on primary content
  - `role="contentinfo"` on footers
  - `role="complementary"` for sidebars/trust bars
  - `aria-hidden="true"` for decorative elements
  - `aria-current="page"` on active navigation links
  - `aria-label` for videos and icon-only buttons
  - `aria-required="true"` on required form fields

#### 3. Security Headers (NON-NEGOTIABLE)
Every HTML page MUST include CSP headers. Adjust directives based on page needs:
- `media-src 'self'` for video pages
- `form-action 'self'` for contact pages
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` for Google Fonts

#### 4. Accessibility (WCAG 2.1 Level AA)
- **Skip links**: First element in `<body>` on every page
- **Heading hierarchy**: h1 → h2 → h3 (no skipping)
- **Form labels**: All inputs have associated `<label for="id">`
- **Alt text**: All images have descriptive `alt` attributes
- **Keyboard navigation**: All interactive elements are accessible
- **Color contrast**: Minimum 4.5:1 ratio

### CSS Standards

#### 1. File Organization
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
- Use kebab-case: `.hero-content`, `.btn-primary`
- Be descriptive: `.section-intro` not `.si`
- BEM-inspired (optional): `.hero__content`, `.btn--secondary`

#### 3. Common Classes Across Sites
- Buttons: `.btn-primary`, `.btn-secondary`, `.button`, `.cta-btn`
- Layout: `.container`, `.hero`, `.hero-content`
- Sections: `.section-intro`, `.section-callout`, `.content`
- Navigation: `.active` for current page

#### 4. Responsive Design
- Mobile-first approach
- Breakpoint: `@media (max-width: 768px)`
- Video fallback: Hide videos on mobile, show background images

### Video Guidelines

**Specifications**:
- Format: MP4 (H.264 codec)
- Duration: 8-15 seconds (looping)
- File size: 3-6 MB (compressed)
- Resolution: 1920x1080 (Full HD)

**HTML Pattern**:
```html
<video class="hero-video" autoplay muted loop playsinline preload="none" 
       aria-label="Descriptive label">
  <source src="videos/filename.mp4" type="video/mp4">
</video>
```

**Optimization** (FFmpeg):
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow \
       -c:a aac -b:a 128k -movflags +faststart output.mp4
```

### Form Handling

**Current**: Forms use `action="#"` placeholders

**Required for production**:
1. CSRF tokens: `<input type="hidden" name="csrf_token" value="...">`
2. Server-side validation (NEVER trust client-side alone)
3. Input sanitization
4. Rate limiting

**Form Pattern**:
```html
<form action="#" method="POST" novalidate aria-label="Contact form">
  <label for="email">Email:
    <input type="email" id="email" name="email" required 
           maxlength="254" aria-required="true">
  </label>
</form>
```

---

## Development Workflow

### Before Making Changes

1. **Identify the site**: Root, nextchapter, multi-brand-assets, or onestack-affiliate?
2. **Check existing patterns**: Review similar pages/files
3. **Read documentation**: CONTRIBUTING.md, SECURITY.md, ANALYSIS_REPORT.md
4. **Test locally**: Open HTML files in browser

### Making Changes

#### For Root Site (Cinematic):
- CSS: `css/style.css`
- Pattern: Video hero + overlay + centered content
- Typography: Playfair Display
- Color: Gold #c5a880

#### For NextChapter Site (Disney):
- CSS: `nextchapter/css/next-style.css`
- Pattern: Header + nav + hero (starfield or standard) + main + footer
- Typography: Cormorant Garamond + Jost
- Color: Gold #c7a27c
- Always include: Navigation with active state

#### For Multi-Brand Assets:
- Follow directory structure: `templates/`, `documentation/`, `assets/`, `scripts/`
- Use variable placeholders: `{{ variable_name }}`
- File naming: lowercase-with-hyphens

#### For ONE STACK Affiliate:
- Email templates: Table-based HTML, inline styles, email-safe fonts
- Social media: Include hashtags, usage notes, variable placeholders
- Database: Follow Notion/Airtable structure in documentation

### Adding New Pages

**Root Site**:
1. Copy structure from existing page (e.g., `trips.html`)
2. Update `<title>` and content
3. Add security headers + skip link
4. Use video hero pattern
5. Add video (8-15 sec, 3-6 MB) to `/videos/`
6. Add fallback image to `/images/`
7. Test mobile (video hides, image shows)

**NextChapter Site**:
1. Copy structure from existing page (e.g., `wdw.html`)
2. Update `<title>`, navigation active state, content
3. Add security headers + skip link + ARIA labels
4. Include full navigation
5. Update `aria-current="page"` on active nav link
6. Use `.hero.starfield` or standard `.hero`

---

## Testing Requirements

### Browser Compatibility
- Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 9+)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Space, Arrows)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (WebAIM Contrast Checker)
- [ ] Automated testing (axe DevTools, WAVE)

### Validation
- [ ] HTML: W3C Validator (https://validator.w3.org/)
- [ ] CSS: W3C CSS Validator (https://jigsaw.w3.org/css-validator/)
- [ ] Security: securityheaders.com

### Manual Checklist
- [ ] Videos load and loop correctly
- [ ] Fallback images work on mobile
- [ ] Navigation works (nextchapter site)
- [ ] Forms validate properly
- [ ] Skip links visible on focus
- [ ] Active nav states correct
- [ ] No console errors
- [ ] Responsive design works

---

## Security Best Practices

### 1. Content Security Policy
Always include CSP meta tags. Adjust as needed:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; form-action 'self'; media-src 'self';">
```

### 2. Form Security
- Use appropriate input types (`email`, `tel`, `url`)
- Set `minlength` and `maxlength` constraints
- Always implement server-side validation
- Add CSRF protection before production

### 3. Production Checklist
- [ ] HTTPS enforced
- [ ] Server-side form validation
- [ ] CSRF tokens on forms
- [ ] Rate limiting
- [ ] Security headers tested (securityheaders.com)

---

## Common Tasks

### Adding External Fonts
Current fonts:
- Root: Playfair Display (built-in)
- NextChapter: Google Fonts (Cormorant Garamond, Jost)

If adding new fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=FontName&display=swap" rel="stylesheet">
```

Update CSP: `font-src 'self' https://fonts.gstatic.com;`

### Updating Styles
- Root site: Edit `css/style.css`
- NextChapter: Edit `nextchapter/css/next-style.css`
- Multi-brand assets: Edit component-specific CSS
- Test both sites to ensure no cross-contamination

### Creating Email Templates (ONE STACK)
1. Use table-based HTML layout
2. Inline all styles
3. Use email-safe fonts (Arial, Helvetica, Georgia)
4. Include variable placeholders: `{{ variable_name }}`
5. Test with Litmus or Email on Acid
6. Ensure mobile-responsive

---

## File Structure Reference

```
nextchapter-travel-site/
├── .github/
│   └── copilot-instructions.md (detailed instructions for GitHub Copilot workspace)
├── css/
│   └── style.css (root site styles)
├── images/ (mobile fallback images)
├── videos/ (cinematic hero videos)
├── nextchapter/
│   ├── css/
│   │   └── next-style.css (nextchapter styles)
│   └── [HTML pages]
├── multi-brand-assets/
│   ├── templates/
│   ├── documentation/
│   ├── assets/
│   └── scripts/
├── onestack-affiliate/
│   ├── email-templates/
│   ├── social-media/
│   ├── slide-deck/
│   ├── video-scripts/
│   └── database-templates/
├── index.html (root home page)
├── [other root HTML pages]
├── netlify.toml (deployment config)
├── README.md (project overview)
├── CONTRIBUTING.md (code quality standards)
├── SECURITY.md (security guidelines)
├── ANALYSIS_REPORT.md (code analysis)
├── copilot.md (this file - GitHub Copilot instructions)
└── claude.md (Claude AI instructions)
```

---

## Key Principles

### 1. Minimal Changes
- Make surgical, focused changes
- Don't refactor unnecessarily
- Preserve working code

### 2. Consistency
- Match existing patterns and styles
- Use same class names and HTML structure
- Keep both sites consistent internally

### 3. Security First
- Always include security headers
- Validate all inputs (client + server)
- Never commit secrets

### 4. Accessibility Always
- WCAG 2.1 AA compliance mandatory
- Test with keyboard and screen readers
- Use semantic HTML and ARIA

### 5. Performance
- Optimize videos (3-6 MB, 8-15 sec)
- Use CSS animations over JavaScript
- Mobile-first responsive design

---

## Troubleshooting

### Videos Not Loading
1. Check file path: `videos/filename.mp4`
2. Verify file size: 3-6 MB
3. Check CSP: `media-src 'self'` present
4. Mobile: Videos hidden by design

### Styles Not Applying
1. Verify correct CSS file (root: `css/style.css`, nextchapter: `nextchapter/css/next-style.css`)
2. Check class name spelling
3. Inspect browser console
4. Clear cache

### Navigation Not Working (NextChapter)
1. Check active state: `class="active" aria-current="page"`
2. Verify ARIA label: `aria-label="Main navigation"`
3. Test keyboard (Tab key)
4. Ensure hrefs are correct

### Form Validation Issues
1. Check HTML5 attributes: `required`, `minlength`, `maxlength`, `type="email"`
2. Verify ARIA: `aria-required="true"`
3. Ensure IDs match: `<label for="id">` and `<input id="id">`
4. Note: Server-side validation NOT implemented yet

### Accessibility Errors
1. Run axe DevTools or WAVE
2. Check skip link (first element in `<body>`)
3. Verify heading hierarchy (h1 → h2 → h3)
4. Test color contrast (4.5:1 minimum)
5. Ensure all images have alt text

---

## Resources

- **W3C HTML Validator**: https://validator.w3.org/
- **W3C CSS Validator**: https://jigsaw.w3.org/css-validator/
- **WebAIM**: https://webaim.org/
- **WCAG Quick Reference**: https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/
- **Security Headers Test**: https://securityheaders.com/
- **CSP Reference**: https://content-security-policy.com/

---

## Questions?

1. Check existing documentation (README.md, CONTRIBUTING.md, SECURITY.md)
2. Search closed issues
3. Review `.github/copilot-instructions.md` for detailed workspace instructions
4. Open a new issue with your question

---

**Last Updated**: March 2026  
**Version**: 1.0  
**Maintained by**: Next Chapter Travel Development Team

---

## Summary

This is a **static multi-component repository** with:
- Two independent travel websites (vanilla HTML/CSS)
- Shared multi-brand asset library
- Complete affiliate program materials

**Core values**:
- Security: CSP headers on every page
- Accessibility: WCAG 2.1 AA compliance
- Simplicity: No frameworks, no build process
- Performance: Optimized videos and responsive design
- Consistency: Match existing patterns

**When in doubt**:
- Check similar pages for patterns
- Read CONTRIBUTING.md for standards
- Review SECURITY.md for requirements
- Test with keyboard, screen reader, and validators
- Make the smallest change that solves the problem
