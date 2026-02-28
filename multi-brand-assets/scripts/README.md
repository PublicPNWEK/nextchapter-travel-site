# Automation Scripts

This directory contains scripts for automating asset management, processing, and deployment tasks.

## Available Scripts

### Asset Processing
- Image optimization and compression
- Format conversion (e.g., SVG to PNG)
- Batch renaming and organization
- Metadata extraction and tagging

### Template Generation
- Email template compilation
- Variable substitution
- Multi-brand variant generation
- Preview generation

### Validation
- Template syntax validation
- Asset quality checks
- Brand guideline compliance checking
- Link and reference validation

### Deployment
- Asset deployment to CDN
- Template distribution
- Version management
- Cache invalidation

## Script Organization

```
scripts/
├── image-processing/
│   ├── optimize.sh
│   └── convert.sh
├── template-tools/
│   ├── compile.js
│   └── validate.js
├── deployment/
│   ├── deploy-cdn.sh
│   └── publish.sh
└── utilities/
    ├── batch-rename.py
    └── check-links.js
```

## Usage

### Prerequisites

Most scripts require:
- Node.js 16+ (for JavaScript scripts)
- Python 3.8+ (for Python scripts)
- Bash (for shell scripts)

Install dependencies:
```bash
npm install  # For Node.js scripts
pip install -r requirements.txt  # For Python scripts
```

### Running Scripts

**Example: Optimize Images**
```bash
./scripts/image-processing/optimize.sh ./assets/images/
```

**Example: Compile Email Template**
```bash
node scripts/template-tools/compile.js \
  --template templates/email/welcome.html \
  --data data.json \
  --output build/welcome.html
```

**Example: Validate Templates**
```bash
node scripts/template-tools/validate.js templates/email/
```

## Creating New Scripts

### Script Template

```bash
#!/bin/bash
# Script Name: script-name.sh
# Description: Brief description of what this script does
# Usage: ./script-name.sh [arguments]
# Author: Your Name
# Date: YYYY-MM-DD

set -e  # Exit on error

# Script logic here
```

### Best Practices

1. **Documentation**
   - Include header comments explaining purpose and usage
   - Add inline comments for complex logic
   - Create a separate README for complex scripts

2. **Error Handling**
   - Check for required dependencies
   - Validate input parameters
   - Provide helpful error messages
   - Exit gracefully on errors

3. **Logging**
   - Log script execution progress
   - Capture errors and warnings
   - Include timestamps in logs

4. **Idempotency**
   - Scripts should be safe to run multiple times
   - Check if operation is needed before executing
   - Clean up temporary files

5. **Configuration**
   - Use environment variables for configuration
   - Provide sensible defaults
   - Document all configuration options

## Common Scripts

### Image Optimization Script

Optimize images in a directory:

```bash
#!/bin/bash
# Optimize all images in a directory
# Usage: ./optimize-images.sh <directory>

DIR="${1:-.}"
find "$DIR" -type f \( -name "*.jpg" -o -name "*.png" \) -exec echo "Optimizing {}" \;
```

### Template Variable Substitution

Replace variables in templates:

```javascript
// compile-template.js
const fs = require('fs');

function compileTemplate(template, data) {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
    return data[key] || match;
  });
}

// Usage
const template = fs.readFileSync('template.html', 'utf8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const output = compileTemplate(template, data);
fs.writeFileSync('output.html', output);
```

## Continuous Integration

Scripts can be integrated into CI/CD pipelines:

### GitHub Actions Example

```yaml
name: Validate Assets
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate Templates
        run: node scripts/template-tools/validate.js templates/
      - name: Check Image Quality
        run: ./scripts/image-processing/check-quality.sh assets/images/
```

## Script Dependencies

Common dependencies used in scripts:

**Node.js Packages:**
- `sharp` - Image processing
- `cheerio` - HTML parsing
- `glob` - File pattern matching
- `commander` - CLI argument parsing

**Python Packages:**
- `Pillow` - Image processing
- `BeautifulSoup4` - HTML parsing
- `jinja2` - Template rendering
- `click` - CLI framework

**System Tools:**
- `imagemagick` - Image manipulation
- `jpegoptim` - JPEG optimization
- `optipng` - PNG optimization
- `svgo` - SVG optimization

## Troubleshooting

### Common Issues

**Permission Denied**
```bash
chmod +x scripts/script-name.sh
```

**Missing Dependencies**
```bash
# Check Node.js
node --version

# Check Python
python3 --version

# Install dependencies
npm install
pip install -r requirements.txt
```

**Path Issues**
- Use absolute paths or ensure working directory is correct
- Check file paths in error messages

## Contributing Scripts

When contributing new scripts:

1. Follow the script template above
2. Test thoroughly on multiple platforms if possible
3. Document all dependencies
4. Add usage examples
5. Submit via pull request

## Script Maintenance

- **Review:** Scripts are reviewed quarterly
- **Updates:** Dependencies updated regularly
- **Deprecation:** Old scripts moved to `deprecated/` folder
- **Testing:** All scripts tested before major releases

## Support

For script-related issues:
- Check this README first
- Review script comments
- Create an issue with `scripts` label
- Contact the automation team
