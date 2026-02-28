# Brand Guidelines Template

Use this template to create brand guidelines for each brand in the multi-brand architecture.

## Brand Overview

**Brand Name:** [Brand Name]  
**Tagline:** [Brand Tagline]  
**Mission:** [Brand Mission Statement]  
**Target Audience:** [Description of target audience]  
**Brand Personality:** [Key personality traits: e.g., Professional, Playful, Luxurious, etc.]

## Visual Identity

### Logo

**Primary Logo**
- File location: `assets/logos/[brand-name]/primary/`
- Usage: Main logo for most applications
- Clear space: [Specify minimum clear space]
- Minimum size: [Specify minimum dimensions]

**Secondary Logo**
- File location: `assets/logos/[brand-name]/secondary/`
- Usage: [When to use secondary logo]

**Logo Variations**
- Full color (on white background)
- White (on dark backgrounds)
- Black (on light backgrounds)
- Icon/mark only (square format)

**Logo Don'ts**
- ❌ Don't distort or stretch the logo
- ❌ Don't rotate the logo
- ❌ Don't change logo colors
- ❌ Don't add effects (shadows, outlines, etc.)
- ❌ Don't place on busy backgrounds

### Color Palette

**Primary Colors**

| Color Name | Hex Code | RGB | CMYK | Usage |
|------------|----------|-----|------|-------|
| Brand Primary | #000000 | 0,0,0 | 0,0,0,100 | Headlines, buttons, key elements |
| Brand Secondary | #FFFFFF | 255,255,255 | 0,0,0,0 | Backgrounds, text on dark |
| Accent Color | #FF6600 | 255,102,0 | 0,60,100,0 | CTAs, highlights |

**Secondary Colors**

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Text Primary | #333333 | Body text |
| Text Secondary | #666666 | Supporting text |
| Border/Lines | #CCCCCC | Dividers, borders |
| Background | #F4F4F4 | Section backgrounds |

**Color Usage Guidelines**
- Use primary colors for 70% of the design
- Use secondary colors for 20% of the design
- Use accent colors for 10% of the design (CTAs, highlights)
- Ensure sufficient contrast for accessibility (WCAG AA minimum)

### Typography

**Primary Font**
- **Font Name:** [Font Family]
- **Weights:** Light (300), Regular (400), Bold (700)
- **Usage:** Headlines, body copy, UI elements
- **Fallback:** [System font stack]

Example:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Heading Hierarchy**

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48px | Bold | 1.2 | Page titles |
| H2 | 36px | Bold | 1.3 | Section headers |
| H3 | 28px | Bold | 1.4 | Subsection headers |
| H4 | 24px | Semi-bold | 1.4 | Minor headers |
| H5 | 20px | Semi-bold | 1.5 | Card titles |
| H6 | 18px | Semi-bold | 1.5 | Small headers |

**Body Text**
- Size: 16px
- Line height: 1.6
- Weight: Regular (400)
- Color: Text Primary (#333333)

**Small Text**
- Size: 14px
- Line height: 1.5
- Usage: Captions, footnotes, labels

### Icons

**Style:** [Outline/Filled/Mixed]  
**Weight:** [Stroke weight, e.g., 2px]  
**Corners:** [Rounded/Sharp]  
**Size:** Multiples of 8px (16px, 24px, 32px, etc.)

**Icon Library:** `assets/icons/[brand-name]/`

### Photography

**Style Guidelines**
- [Bright/Natural/Moody/etc.] lighting
- [Authentic/Styled/Professional] aesthetic
- [Lifestyle/Product/Environmental] focus
- [Warm/Cool/Neutral] color tones

**Image Specs**
- **Web:** 72 DPI, RGB, JPG/PNG
- **Print:** 300 DPI, CMYK, PDF/TIFF
- **Optimization:** Compress without visible quality loss

**Image Library:** `assets/images/[brand-name]/`

## Voice and Tone

### Brand Voice

**Voice Characteristics:**
- [Friendly/Professional/Authoritative/etc.]
- [Casual/Formal/Conversational/etc.]
- [Playful/Serious/Inspirational/etc.]

**Writing Style:**
- [Active/Passive] voice
- [Short/Detailed] sentences
- [Simple/Technical] language
- [First person/Second person/Third person]

### Tone Variations

| Context | Tone | Example |
|---------|------|---------|
| Welcome message | Warm, friendly | "We're so glad you're here!" |
| Error message | Helpful, apologetic | "Oops! Let's fix that together." |
| Success message | Enthusiastic | "Great job! You're all set." |
| Educational | Clear, patient | "Here's how it works..." |
| Promotional | Exciting, urgent | "Don't miss out—save 20% today!" |

### Grammar and Usage

**Capitalization**
- Sentence case for headlines (preferred)
- Title Case only when required by platform
- ALL CAPS sparingly for emphasis

**Punctuation**
- Use Oxford comma
- One space after periods
- Avoid excessive exclamation points (one per message)

**Numbers**
- Spell out numbers one through nine
- Use numerals for 10 and above
- Use numerals for statistics and data

**Inclusive Language**
- Use gender-neutral terms
- Avoid jargon and acronyms
- Be mindful of cultural differences
- Use person-first language

## Content Guidelines

### Email Communication

**Subject Lines**
- 40-50 characters maximum
- Clear and action-oriented
- Avoid spam trigger words
- Test for mobile preview (25-30 characters)

**Body Content**
- Get to the point quickly
- Use short paragraphs (2-3 sentences)
- Include clear calls-to-action
- Mobile-friendly formatting

**Signature**
- Include sender name and role
- Link to support resources
- Consistent across all emails

### Social Media

**Platform-Specific Guidelines**

**Twitter/X**
- Concise and punchy (under 280 characters)
- 1-2 hashtags maximum
- Tag relevant accounts
- Use threads for longer content

**Instagram**
- Engaging captions (first 125 characters crucial)
- 5-10 relevant hashtags
- Strong visual focus
- Stories for behind-the-scenes

**LinkedIn**
- Professional tone
- Longer-form content accepted
- 3-5 hashtags
- Lead with value proposition

**Facebook**
- Conversational tone
- Mix of content types
- Community engagement focus
- Optimal length: 100-250 characters

### Web Content

**Homepage**
- Clear value proposition within 5 seconds
- Strong hero section
- Prominent CTAs
- Social proof (testimonials, stats)

**Product Pages**
- Benefit-focused headlines
- Clear features and specifications
- High-quality images
- Trust signals (reviews, guarantees)

**Blog Posts**
- SEO-optimized headlines
- Scannable formatting (headings, bullets)
- Internal and external links
- Author bio and CTA

## Accessibility

### Color Contrast
- Text contrast ratio: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- UI components: 3:1 minimum
- Test with accessibility tools

### Text
- Minimum font size: 16px for body text
- Avoid text in images when possible
- Provide alt text for all images
- Use semantic HTML headings

### Navigation
- Keyboard accessible
- Focus indicators visible
- Skip navigation links
- ARIA labels where needed

## Usage Examples

### Do's ✅

**Email Header Example**
```html
<h1 style="color: #000000; font-size: 28px; font-weight: 700;">
  Welcome to [Brand Name]!
</h1>
```

**Social Media Post Example**
```
Exciting news from [Brand Name]! 🎉

[Product announcement in 1-2 sentences]

Learn more: [link]

#BrandHashtag #Industry
```

**Button Example**
```html
<button style="background: #FF6600; color: #FFFFFF; padding: 12px 24px; border-radius: 4px;">
  Get Started
</button>
```

### Don'ts ❌

**Poor Contrast**
```html
<!-- DON'T: Light gray on white -->
<p style="color: #CCCCCC;">This text is hard to read</p>
```

**Inconsistent Voice**
```
DON'T: "Yo! Welcome to our super professional enterprise solution for synergizing your workflows!"
DO: "Welcome! Our solution helps teams work better together."
```

**Logo Misuse**
```
DON'T: Stretch logo, change colors, add effects
DO: Use official logo files unmodified
```

## Brand Asset Checklist

When creating content, ensure you have:

- [ ] Used correct logo variant
- [ ] Applied brand colors (hex codes)
- [ ] Used approved fonts
- [ ] Followed voice and tone guidelines
- [ ] Checked accessibility standards
- [ ] Optimized images appropriately
- [ ] Included required legal text (if applicable)
- [ ] Tested across devices/platforms
- [ ] Proofread for grammar and spelling

## Updates and Maintenance

**Review Schedule:** [Quarterly/Annually/As needed]  
**Owner:** [Brand Manager/Marketing Team]  
**Last Updated:** [Date]  
**Version:** [1.0]

## Questions?

For questions about brand guidelines:
- Check this document first
- Review examples in `assets/[brand-name]/`
- Contact: [Brand Manager email]
- Create an issue with `brand-guidelines` label

---

**Note:** These guidelines are living documents. Submit suggestions for improvements via pull request or issue.
