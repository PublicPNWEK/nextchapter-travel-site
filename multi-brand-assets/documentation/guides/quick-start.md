# Quick Start Guide

Welcome to the Multi-Brand Asset Repository! This guide will help you get started quickly.

## What You'll Learn

- How to find and use templates
- How to customize assets for your brand
- Basic workflow for common tasks
- Where to get help

## Prerequisites

- Access to this repository
- Basic knowledge of HTML/CSS (for web templates)
- Familiarity with your brand guidelines
- Text editor or IDE

## Step 1: Choose Your Template

Navigate to the appropriate templates directory:

- **Email campaigns**: `templates/email/`
- **Social media posts**: `templates/social_media/`
- **Website components**: `templates/web/`
- **Presentations**: `templates/presentations/`

## Step 2: Copy the Template

Don't edit templates directly! Always work with copies:

```bash
# Example: Copy an email template
cp templates/email/welcome-template.html my-project/welcome-email.html
```

## Step 3: Customize Variables

Templates use variable placeholders like `{{ variable_name }}`. Replace these with your content:

### Example: Email Template

**Before:**
```html
<h1>Welcome, {{ first_name }}!</h1>
<p>Thanks for joining {{ company_name }}.</p>
```

**After:**
```html
<h1>Welcome, Sarah!</h1>
<p>Thanks for joining ACME Corp.</p>
```

## Step 4: Update Brand Elements

Customize colors, fonts, and styling to match your brand:

1. Review your brand guidelines in `documentation/brand_guidelines/`
2. Update color codes in the template
3. Replace logos with your brand's logo from `assets/logos/`
4. Adjust fonts to match your brand typography

## Step 5: Test Your Changes

Before using your customized template:

### For Email Templates
- Test in multiple email clients (Gmail, Outlook, Apple Mail)
- Check mobile rendering
- Verify all links work
- Send test emails to yourself

### For Social Media Templates
- Check character counts
- Preview images at actual dimensions
- Verify hashtags are relevant
- Test on the target platform

### For Web Components
- Test in multiple browsers
- Check responsive behavior
- Validate HTML/CSS
- Test accessibility

## Step 6: Deploy or Publish

Once tested, you're ready to use your template:

- **Emails**: Upload to your email service provider (ESP)
- **Social Media**: Schedule or post directly
- **Web**: Integrate into your website
- **Presentations**: Export to your preferred format

## Common Tasks

### Task: Create a Welcome Email

1. Copy `templates/email/welcome-template.html`
2. Replace `{{ first_name }}`, `{{ company_name }}`, etc.
3. Update colors to match brand (see `documentation/references/color-palette.md`)
4. Replace logo with yours from `assets/logos/your-brand/`
5. Test in Litmus or Email on Acid
6. Upload to your ESP

### Task: Create a Social Media Post

1. Choose template from `templates/social_media/`
2. Copy caption template
3. Replace variables with your content
4. Download matching image template from `assets/images/`
5. Customize in Canva or Photoshop
6. Schedule post

### Task: Find Your Brand Logo

1. Navigate to `assets/logos/`
2. Find your brand folder
3. Choose appropriate format:
   - SVG for web use
   - PNG for presentations
   - PDF for print materials
4. Check usage guidelines in `assets/README.md`

## Understanding the Structure

### Directory Layout

```
multi-brand-assets/
├── templates/          # Start here for content templates
├── assets/            # Logos, icons, images
├── documentation/     # Guides and references
└── scripts/          # Automation tools
```

### File Naming Conventions

- Templates: `template-name-v1.html`
- Assets: `brand-name-logo-primary.svg`
- Documentation: `guide-name.md`

All lowercase, hyphen-separated.

## Next Steps

### Dive Deeper

- **Brand Guidelines**: Read `documentation/brand_guidelines/` to understand brand standards
- **Advanced Techniques**: Check `documentation/guides/` for detailed tutorials
- **Variable Reference**: See `documentation/references/` for complete variable lists
- **Automation**: Explore `scripts/` for productivity tools

### Get Help

- **Documentation**: Most answers are in `documentation/`
- **Issues**: Create an issue for bugs or missing features
- **Team**: Contact the multi-brand asset team
- **Examples**: Look at existing implementations for inspiration

## Tips for Success

1. **Always work with copies** - Never edit templates directly
2. **Follow brand guidelines** - Consistency is key across brands
3. **Test thoroughly** - Better to catch issues before publishing
4. **Document changes** - Keep notes on customizations you make
5. **Ask questions** - The team is here to help

## Checklist for First-Time Users

- [ ] Clone or access the repository
- [ ] Review the main README
- [ ] Identify the templates you need
- [ ] Locate your brand assets
- [ ] Read relevant brand guidelines
- [ ] Copy a template and customize it
- [ ] Test your customization
- [ ] Save your work in your project folder

## Resources

- **Main README**: `multi-brand-assets/README.md`
- **Template READMEs**: In each template directory
- **Brand Guidelines**: `documentation/brand_guidelines/`
- **Variable Reference**: `documentation/references/variable-reference.md`

## Feedback

Help us improve this guide:
- Submit issues for unclear instructions
- Suggest additional examples
- Share your success stories
- Contribute improvements via pull request

---

**Need immediate help?** Start with the [FAQ](faq.md) or create an issue with the `help-wanted` label.
