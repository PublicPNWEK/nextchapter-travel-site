# Multi-Brand Assets Repository - Index

Quick navigation guide for all assets and documentation in this repository.

## 🚀 Quick Start

**New here?** Start with the [Quick Start Guide](documentation/guides/quick-start.md)

**Need a template?** Jump to [Templates](#templates)

**Looking for brand assets?** See [Assets](#assets)

## 📋 Repository Structure

```
multi-brand-assets/
├── templates/          → Reusable content templates
├── assets/            → Visual assets (logos, icons, images)
├── documentation/     → Guides, references, brand guidelines
├── scripts/          → Automation and processing tools
└── README.md         → Main overview (you are here!)
```

## 📝 Templates

### Email Templates
**Location:** `templates/email/`  
**Documentation:** [Email README](templates/email/README.md)

Available templates:
- [Basic Email Template](templates/email/email-template-basic.html) - General purpose email structure
- *(Add more templates as created)*

**Quick links:**
- [Variable Reference](documentation/references/variable-reference.md#email-template-variables)
- [Best Practices](templates/email/README.md#best-practices)

### Social Media Templates
**Location:** `templates/social_media/`  
**Documentation:** [Social Media README](templates/social_media/README.md)

Platform guides:
- Twitter/X templates
- Instagram captions and stories
- LinkedIn posts
- Cross-platform templates

**Quick links:**
- [Platform Specifications](templates/social_media/README.md#best-practices)
- [Hashtag Strategy](templates/social_media/README.md#hashtag-strategy)

### Web Components
**Location:** `templates/web/`

Coming soon:
- Navigation components
- Hero sections
- Footer components
- Form templates

### Presentations
**Location:** `templates/presentations/`

Coming soon:
- Pitch deck templates
- Training presentation outlines
- Client presentation structures

## 🎨 Assets

### Logos
**Location:** `assets/logos/`  
**Documentation:** [Assets README](assets/README.md#logos)

Organized by brand, with formats:
- SVG (web use)
- PNG (presentations)
- PDF (print)

**Usage guidelines:** [Logo Usage](assets/README.md#logo-usage)

### Icons
**Location:** `assets/icons/`  
**Documentation:** [Assets README](assets/README.md#icons)

Categories:
- UI icons
- Social media icons
- Product icons
- Custom branded icons

### Images
**Location:** `assets/images/`  
**Documentation:** [Assets README](assets/README.md#images)

Types:
- Hero images
- Product photography
- Lifestyle imagery
- Background patterns

## 📚 Documentation

### Guides
**Location:** `documentation/guides/`

Available guides:
- [Quick Start Guide](documentation/guides/quick-start.md) - Get started quickly
- *(Add more guides as created)*

### References
**Location:** `documentation/references/`

Reference materials:
- [Variable Reference](documentation/references/variable-reference.md) - Complete variable documentation
- *(Add more references as created)*

### Brand Guidelines
**Location:** `documentation/brand_guidelines/`

Brand documentation:
- [Brand Guidelines Template](documentation/brand_guidelines/brand-guidelines-template.md) - Template for creating brand guides
- *(Add brand-specific guidelines as created)*

## ⚙️ Scripts

**Location:** `scripts/`  
**Documentation:** [Scripts README](scripts/README.md)

Script categories:
- Image processing and optimization
- Template compilation
- Validation tools
- Deployment automation

## 🔍 Finding What You Need

### By Task

**I need to create an email:**
1. Copy `templates/email/email-template-basic.html`
2. Reference [Variable Reference](documentation/references/variable-reference.md#email-template-variables)
3. Follow [Email Best Practices](templates/email/README.md#best-practices)
4. Test with email testing tools

**I need a social media post:**
1. Browse `templates/social_media/`
2. Check [Platform Specifications](templates/social_media/README.md#best-practices)
3. Use [Variable Reference](documentation/references/variable-reference.md#social-media-variables)

**I need brand assets:**
1. Navigate to `assets/logos/[brand-name]/`
2. Review [Usage Guidelines](assets/README.md#logo-usage)
3. Choose appropriate format (SVG/PNG/PDF)

**I need to understand brand standards:**
1. Check `documentation/brand_guidelines/[brand-name]/`
2. Review color palettes and typography
3. Follow voice and tone guidelines

### By Brand

**Next Chapter Travel:**
- Website: [Root directory HTML files]
- Style: `css/style.css`
- Images: `images/`
- Videos: `videos/`

**ONE STACK (1Commerce LLC):**
- Affiliate templates: `onestack-affiliate/email-templates/`
- Social templates: `onestack-affiliate/social-media/`
- Documentation: `onestack-affiliate/README.md`

*(Add new brands as they're created)*

### By File Type

**HTML Templates:**
- `templates/email/*.html`
- `templates/web/*.html`

**Markdown Documentation:**
- `documentation/**/*.md`
- `templates/**/README.md`

**Images:**
- `assets/images/`
- `assets/logos/`
- `assets/icons/`

**Scripts:**
- `scripts/**/*.{sh,js,py}`

## 🎯 Common Tasks

### Creating a New Email Template

```bash
# 1. Copy base template
cp templates/email/email-template-basic.html my-new-email.html

# 2. Update variables (see variable reference)
# Edit my-new-email.html

# 3. Test the template
# Use email testing service like Litmus or Email on Acid
```

### Optimizing Images

```bash
# Navigate to scripts directory
cd scripts/

# Run optimization script (when available)
./image-processing/optimize.sh ../assets/images/
```

### Adding a New Brand

1. Create brand assets directory: `assets/logos/[brand-name]/`
2. Create brand guidelines: `documentation/brand_guidelines/[brand-name].md`
3. Add brand templates to relevant template directories
4. Update this index with brand information

## 📖 Learning Path

### For New Team Members

1. **Day 1:** Read [Quick Start Guide](documentation/guides/quick-start.md)
2. **Day 2:** Review brand guidelines for your brand
3. **Day 3:** Practice with a sample template
4. **Week 1:** Create your first real template
5. **Ongoing:** Refer to [Variable Reference](documentation/references/variable-reference.md) as needed

### For Developers

1. Review template structure in `templates/`
2. Understand variable system in [Variable Reference](documentation/references/variable-reference.md)
3. Explore automation scripts in `scripts/`
4. Set up local development environment
5. Contribute improvements via pull requests

### For Designers

1. Review brand guidelines in `documentation/brand_guidelines/`
2. Access brand assets in `assets/`
3. Understand design specifications for each platform
4. Create new assets following guidelines
5. Submit new assets via pull requests

### For Content Creators

1. Browse available templates in `templates/`
2. Learn variable substitution from examples
3. Review voice and tone in brand guidelines
4. Create content using templates
5. Test before publishing

## 🔗 External Resources

### Design Tools
- [Canva](https://www.canva.com/) - Social media graphics
- [Figma](https://www.figma.com/) - UI design and prototyping
- [Adobe Creative Cloud](https://www.adobe.com/) - Professional design suite

### Email Testing
- [Litmus](https://www.litmus.com/) - Email design and testing
- [Email on Acid](https://www.emailonacid.com/) - Email client testing
- [Can I Email](https://www.caniemail.com/) - CSS support reference

### Optimization Tools
- [TinyPNG](https://tinypng.com/) - Image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- [ImageOptim](https://imageoptim.com/) - Mac image optimizer

### Validation
- [W3C Markup Validator](https://validator.w3.org/) - HTML validation
- [WAVE](https://wave.webaim.org/) - Accessibility checker
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast

## 📞 Support

### Getting Help

**For quick questions:**
- Check relevant README files first
- Search through documentation
- Review existing examples

**For issues or bugs:**
- Create a GitHub issue with appropriate label
- Include steps to reproduce
- Attach relevant files or screenshots

**For new requests:**
- Submit a feature request issue
- Describe the use case
- Provide examples if possible

**For urgent matters:**
- Contact the multi-brand asset team directly
- Email: [Team email]
- Slack: [Channel name]

## 🔄 Updates and Maintenance

**This index is updated:**
- When new templates are added
- When documentation changes
- When brands are added or updated
- Quarterly during routine maintenance

**Last updated:** February 2026  
**Version:** 1.0  
**Maintained by:** Multi-Brand Asset Team

## 🤝 Contributing

We welcome contributions! Please:

1. Follow existing patterns and conventions
2. Update documentation for your changes
3. Test thoroughly before submitting
4. Create pull requests with clear descriptions
5. Review the main README for contribution guidelines

---

**Quick Links:**
- [Main README](README.md)
- [Quick Start Guide](documentation/guides/quick-start.md)
- [Variable Reference](documentation/references/variable-reference.md)
- [All Templates](templates/)
- [All Assets](assets/)
- [All Documentation](documentation/)
