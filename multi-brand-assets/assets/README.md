# Brand Assets

This directory contains shared visual assets that maintain consistency across all brands.

## Structure

### Logos (`logos/`)
Official brand logos in multiple formats and variations.

**Formats Available:**
- **SVG** - Scalable vector format (preferred for web)
- **PNG** - Raster format with transparency (high-resolution)
- **PDF** - Print-ready format
- **JPG** - For backgrounds where transparency isn't needed

**Logo Variations:**
- Primary logo (full color)
- Secondary logo (alternate lockup)
- White logo (for dark backgrounds)
- Black logo (for light backgrounds)
- Icon/mark only (square format)
- Wordmark only (text-based)

### Icons (`icons/`)
Consistent icon sets used across platforms and materials.

**Categories:**
- UI icons (navigation, actions, indicators)
- Social media icons
- Product category icons
- Service/feature icons
- Custom branded icons

**Formats:**
- SVG (preferred, scalable)
- PNG (16px, 32px, 64px, 128px, 256px)
- Icon fonts (if applicable)

### Images (`images/`)
Stock photos, illustrations, and background graphics.

**Categories:**
- Hero images (full-width banners)
- Product photography
- Lifestyle imagery
- Background patterns/textures
- Illustrations
- Team photos
- Office/location photos

## Usage Guidelines

### Logo Usage

**Do:**
- Use official logo files only
- Maintain minimum clear space (equal to the height of the logo)
- Use on approved background colors
- Ensure sufficient contrast for readability
- Scale proportionally

**Don't:**
- Distort, stretch, or rotate the logo
- Change logo colors outside approved palette
- Add effects (shadows, glows, etc.)
- Place logo on busy backgrounds
- Recreate or modify the logo

### Icon Usage

**Best Practices:**
- Use icons consistently throughout a project
- Maintain uniform size and style
- Ensure adequate contrast with background
- Include alt text for accessibility
- Use SVG format when possible for crisp rendering

### Image Usage

**Guidelines:**
- Use high-resolution images (minimum 72 DPI for web, 300 DPI for print)
- Optimize for web (compress without visible quality loss)
- Include proper alt text for accessibility
- Use images that align with brand values and messaging
- Credit photographers/sources as required

## File Organization

```
assets/
├── logos/
│   ├── brand-name/
│   │   ├── primary/
│   │   ├── secondary/
│   │   ├── white/
│   │   ├── black/
│   │   └── icon/
│   └── README.md
├── icons/
│   ├── ui/
│   ├── social/
│   ├── product/
│   └── README.md
└── images/
    ├── hero/
    ├── products/
    ├── lifestyle/
    └── README.md
```

## Asset Specifications

### Web Assets
- **Format:** SVG (preferred), PNG, JPG
- **Resolution:** 2x retina (@2x files)
- **Optimization:** Compress and optimize for web
- **Max file size:** 200KB for hero images, 50KB for icons

### Print Assets
- **Format:** PDF, PNG (high-res)
- **Resolution:** 300 DPI minimum
- **Color mode:** CMYK for print, RGB for digital

### Social Media Assets
- **Profile images:** 400x400px minimum
- **Cover photos:** Platform-specific dimensions
- **Post graphics:** See social media README for specs

## Adding New Assets

1. **Prepare Files**
   - Create all required formats
   - Optimize for web/print as appropriate
   - Use consistent naming conventions

2. **Organization**
   - Place in appropriate subdirectory
   - Create brand-specific folders if needed
   - Include source files if applicable

3. **Documentation**
   - Update this README
   - Note any usage restrictions
   - Include metadata (creator, date, license)

4. **Quality Check**
   - Verify all formats render correctly
   - Check file sizes are optimized
   - Ensure alignment with brand guidelines

## Asset Licensing

All assets in this directory are:
- [Specify license type: proprietary, CC, etc.]
- [Note any usage restrictions]
- [Attribution requirements]

## Need Custom Assets?

For custom asset creation:
1. Submit a request via [process/system]
2. Provide detailed specifications
3. Reference existing assets for style
4. Allow [X] business days for delivery

## Asset Updates

Assets are reviewed and updated:
- **Frequency:** Quarterly or as needed
- **Process:** Submit update request or PR
- **Archive:** Old versions moved to archive folder
