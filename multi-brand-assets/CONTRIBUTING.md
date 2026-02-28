# Contributing to Multi-Brand Assets

Thank you for your interest in contributing to the Multi-Brand Asset Repository! This guide will help you make effective contributions.

## Table of Contents

- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Contribution Workflow](#contribution-workflow)
- [Standards and Guidelines](#standards-and-guidelines)
- [Review Process](#review-process)
- [Questions and Support](#questions-and-support)

## Getting Started

### Prerequisites

- Git installed and configured
- Access to this repository
- Familiarity with markdown and HTML/CSS (depending on contribution type)
- Understanding of the relevant brand guidelines

### First Time Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/nextchapter-travel-site.git
   cd nextchapter-travel-site/multi-brand-assets
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-contribution-name
   ```

3. **Review existing content**
   - Browse the directory structure
   - Read relevant README files
   - Check brand guidelines

## Types of Contributions

### 1. Templates

**Email Templates**
- New email campaign templates
- Variations of existing templates
- Platform-specific optimizations

**Social Media Templates**
- Post copy templates
- Image templates
- Video scripts

**Web Components**
- Reusable UI components
- Landing page sections
- Form templates

**Presentations**
- Slide deck outlines
- Pitch deck templates
- Training materials

### 2. Assets

**Logos**
- New brand logos
- Logo variations
- Updated versions

**Icons**
- Icon sets
- Individual icons
- Custom branded icons

**Images**
- Photography
- Illustrations
- Background patterns

### 3. Documentation

**Guides**
- Implementation guides
- Best practices
- Tutorials

**References**
- Technical specifications
- Variable references
- API documentation

**Brand Guidelines**
- Visual identity standards
- Voice and tone guides
- Usage examples

### 4. Scripts

**Automation**
- Image processing
- Template compilation
- Deployment scripts

**Validation**
- Quality checks
- Syntax validation
- Compliance testing

## Contribution Workflow

### Step 1: Plan Your Contribution

Before starting:
- Check if similar content already exists
- Review relevant brand guidelines
- Discuss significant changes in an issue first

### Step 2: Make Your Changes

**File Organization**
- Place files in the appropriate directory
- Follow existing naming conventions
- Include necessary documentation

**Quality Standards**
- Test templates thoroughly
- Optimize images and assets
- Validate code syntax
- Check for accessibility

**Documentation**
- Update relevant README files
- Document any new variables
- Include usage examples
- Add comments where needed

### Step 3: Test Your Changes

**For Templates:**
- Test in target platforms/clients
- Verify responsive behavior
- Check variable substitution
- Validate HTML/CSS

**For Assets:**
- Verify file formats are correct
- Check image optimization
- Test in context of use
- Ensure brand compliance

**For Documentation:**
- Read through for clarity
- Check all links work
- Verify code examples
- Test any instructions

### Step 4: Commit Your Changes

**Commit Message Format:**
```
Type: Brief description

Detailed explanation (if needed):
- What changed
- Why it changed
- Any breaking changes

Refs: #issue-number
```

**Commit Types:**
- `feat:` New feature or template
- `fix:` Bug fix or correction
- `docs:` Documentation update
- `style:` Formatting changes
- `refactor:` Code restructuring
- `test:` Test additions
- `chore:` Maintenance tasks

**Examples:**
```
feat: Add welcome email template for Brand X

- Created HTML email template with variable placeholders
- Includes mobile-responsive design
- Follows brand guidelines for Brand X

Refs: #123
```

```
docs: Update variable reference with new email fields

- Added variables for transaction emails
- Updated examples
- Fixed typos in formatting section
```

### Step 5: Submit a Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-contribution-name
   ```

2. **Create Pull Request**
   - Use descriptive title
   - Fill out PR template completely
   - Link related issues
   - Add screenshots/examples

3. **PR Description Should Include:**
   - What was added/changed
   - Why this change is needed
   - Testing performed
   - Screenshots (for visual changes)
   - Checklist of completed items

**PR Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New template
- [ ] Asset addition
- [ ] Documentation update
- [ ] Bug fix
- [ ] Other (describe)

## Checklist
- [ ] Follows style guidelines
- [ ] Self-reviewed code
- [ ] Updated documentation
- [ ] Tested thoroughly
- [ ] No breaking changes (or documented)

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Closes #issue-number
```

## Standards and Guidelines

### File Naming Conventions

**Templates:**
- Format: `template-type-description.html`
- Examples: `email-welcome-v1.html`, `social-instagram-product.md`

**Assets:**
- Format: `brand-asset-type-variant.ext`
- Examples: `acme-logo-primary.svg`, `onestack-icon-cart.png`

**Documentation:**
- Format: `topic-name.md`
- Examples: `quick-start.md`, `email-best-practices.md`

**Scripts:**
- Format: `action-description.ext`
- Examples: `optimize-images.sh`, `compile-templates.js`

### Code Style

**HTML/CSS:**
- Use 2-space indentation
- Lowercase tag names and attributes
- Include proper DOCTYPE
- Add comments for complex sections
- Inline CSS for emails
- External CSS for web components

**Markdown:**
- Use proper heading hierarchy
- Include table of contents for long docs
- Link to related documentation
- Use code blocks with language specification
- Include examples

**JavaScript/Python:**
- Follow standard style guides (Airbnb for JS, PEP 8 for Python)
- Add JSDoc/docstring comments
- Include error handling
- Write readable, maintainable code

### Variable Naming

**Format:** `{{ lowercase_with_underscores }}`

**Guidelines:**
- Be descriptive: `{{ user_first_name }}` not `{{ fn }}`
- Use namespacing: `{{ email_subject }}` not just `{{ subject }}`
- Document in variable reference
- Provide defaults when appropriate

### Accessibility

**All contributions must:**
- Meet WCAG 2.1 Level AA standards minimum
- Include proper alt text for images
- Use sufficient color contrast (4.5:1 for text)
- Support keyboard navigation
- Include semantic HTML

### Brand Compliance

**Before submitting, verify:**
- Follows brand guidelines
- Uses correct colors (hex codes)
- Uses approved fonts
- Logo usage is correct
- Voice and tone matches brand
- Meets platform specifications

## Review Process

### What to Expect

1. **Automated Checks** (if configured)
   - Linting passes
   - Tests pass
   - No merge conflicts

2. **Peer Review**
   - Code/content quality
   - Follows guidelines
   - Documentation complete
   - Tests adequate

3. **Approval Required**
   - One approval minimum
   - Two approvals for major changes
   - Brand manager approval for brand assets

### Review Timeline

- **Simple changes:** 1-2 business days
- **Template additions:** 3-5 business days
- **Major changes:** 1-2 weeks
- **Urgent fixes:** Same day if possible

### Feedback and Revisions

- Reviewers will comment on your PR
- Address feedback by pushing new commits
- Respond to comments to clarify
- Request re-review when ready

### After Approval

1. Squash commits if requested
2. Maintainer will merge PR
3. Your changes go live
4. PR is closed and branch deleted

## Questions and Support

### Before Creating an Issue

- Search existing issues
- Check documentation
- Review examples
- Read relevant READMEs

### Creating an Issue

**Use these labels:**
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Docs need improvement
- `question` - Need clarification
- `help-wanted` - Looking for contributors

**Include:**
- Clear title
- Detailed description
- Steps to reproduce (bugs)
- Expected vs actual behavior
- Screenshots if relevant
- System/browser info if applicable

### Getting Help

**For contribution questions:**
- Comment on related issue
- Ask in pull request
- Contact maintainers

**For technical help:**
- Check documentation first
- Search closed issues
- Create new issue with `question` label

**For urgent matters:**
- Email: [maintainer email]
- Slack: [channel name]
- Tag maintainers in issue

## Recognition

Contributors are recognized in several ways:

- Listed in commit history
- Mentioned in release notes
- Added to CONTRIBUTORS.md (for significant contributions)
- Thanked in issue/PR comments

## Code of Conduct

### Our Standards

**We value:**
- Respectful communication
- Constructive feedback
- Collaborative problem-solving
- Diverse perspectives

**Not tolerated:**
- Harassment or discrimination
- Unconstructive criticism
- Spam or trolling
- Violation of privacy

### Reporting Issues

If you experience or witness unacceptable behavior:
- Contact project maintainers
- Email: [conduct email]
- Report will be kept confidential

## Additional Resources

### Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [Markdown Guide](https://www.markdownguide.org/)
- [HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Internal Resources

- [Quick Start Guide](documentation/guides/quick-start.md)
- [Variable Reference](documentation/references/variable-reference.md)
- [Brand Guidelines](documentation/brand_guidelines/)
- [Repository Index](INDEX.md)

## Thank You!

Your contributions make this repository better for everyone. We appreciate your time and effort!

---

**Have questions about contributing?**  
Create an issue with the `question` label or contact the maintainers.

**Ready to contribute?**  
[View open issues](../../issues) or [create a new one](../../issues/new)!
