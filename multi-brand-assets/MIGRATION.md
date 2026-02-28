# Migration Guide: Integrating Existing Content

This guide explains how to integrate existing content (like the ONE STACK affiliate program) into the new multi-brand-assets structure.

## Overview

The repository now has two organizational patterns:
1. **Legacy structure**: Project-specific directories (e.g., `onestack-affiliate/`)
2. **New structure**: Centralized multi-brand assets (`multi-brand-assets/`)

This guide helps you decide when to use each and how to migrate content.

## When to Use Each Structure

### Use Legacy Structure When:
- Content is project-specific and won't be reused
- Project has unique, non-template structure
- Keeping everything together makes more sense
- Already established and working well

**Examples:**
- `onestack-affiliate/` - Complete affiliate program package
- `nextchapter/` - Specific website implementation

### Use Multi-Brand Structure When:
- Creating reusable templates
- Sharing assets across brands
- Building component libraries
- Establishing brand guidelines
- Creating documentation for multiple uses

**Examples:**
- Email template used by multiple brands
- Shared logo files
- Common social media templates
- Universal brand guidelines

## Integration Strategies

### Strategy 1: Reference Existing Content

Keep existing content where it is, but reference it from multi-brand-assets:

**Example: ONE STACK Email Templates**

In `multi-brand-assets/templates/email/README.md`:
```markdown
## Brand-Specific Templates

### ONE STACK Affiliate Program
Complete email template package for affiliate onboarding:
- Location: `/onestack-affiliate/email-templates/`
- Documentation: `/onestack-affiliate/README.md`
- Variables: `/onestack-affiliate/VARIABLES.md`
```

**Pros:**
- No file movement required
- Preserves existing structure
- Quick to implement

**Cons:**
- Maintains duplication
- Less centralized

### Strategy 2: Soft Migration (Recommended)

Copy reusable templates to multi-brand-assets while keeping originals:

**Steps:**

1. **Identify Reusable Templates**
   ```bash
   # Review existing templates
   ls onestack-affiliate/email-templates/
   ```

2. **Copy to New Structure**
   ```bash
   # Copy email templates
   cp onestack-affiliate/email-templates/*.html \
      multi-brand-assets/templates/email/onestack/
   
   # Create brand-specific directory if needed
   mkdir -p multi-brand-assets/templates/email/onestack
   ```

3. **Create Brand Guidelines**
   ```bash
   # Create ONE STACK brand guide
   cp multi-brand-assets/documentation/brand_guidelines/brand-guidelines-template.md \
      multi-brand-assets/documentation/brand_guidelines/onestack.md
   
   # Edit with ONE STACK specific info
   ```

4. **Update Documentation**
   - Add ONE STACK to multi-brand-assets/README.md
   - Cross-reference between structures
   - Update INDEX.md with locations

**Pros:**
- Provides central access
- Maintains backward compatibility
- Gradual transition

**Cons:**
- Some duplication
- Requires maintaining both

### Strategy 3: Hard Migration

Move content entirely to new structure:

**Steps:**

1. **Move Templates**
   ```bash
   mv onestack-affiliate/email-templates/*.html \
      multi-brand-assets/templates/email/
   ```

2. **Move Documentation**
   ```bash
   mv onestack-affiliate/VARIABLES.md \
      multi-brand-assets/documentation/references/onestack-variables.md
   ```

3. **Create Redirects**
   In `onestack-affiliate/README.md`:
   ```markdown
   # ONE STACK Affiliate Program
   
   **Note:** Email templates have moved to the centralized repository:
   - Templates: `../multi-brand-assets/templates/email/`
   - Variables: `../multi-brand-assets/documentation/references/onestack-variables.md`
   
   [See new location →](../multi-brand-assets/)
   ```

4. **Update All Links**

**Pros:**
- Complete centralization
- No duplication
- Single source of truth

**Cons:**
- Breaks existing links
- Requires thorough testing
- More disruptive change

## Recommended Approach

### For This Repository

**Phase 1: Document References (Immediate)**
- Add ONE STACK to multi-brand-assets README
- Create cross-references
- Document both structures in INDEX.md

**Phase 2: Copy Reusable Parts (Short-term)**
- Copy generic templates to multi-brand-assets
- Create ONE STACK brand guidelines
- Leave project-specific content in place

**Phase 3: Consolidate (Long-term)**
- As new templates are created, use multi-brand structure
- Gradually migrate when updating existing templates
- Deprecate duplicates over time

## Example Integration: ONE STACK

### Current Structure
```
onestack-affiliate/
├── email-templates/          # 3 HTML templates
├── social-media/            # Social post templates
├── slide-deck/              # Presentation outline
├── video-scripts/           # Video script
├── database-templates/      # Notion/Airtable schemas
└── README.md, VARIABLES.md, etc.
```

### Integration Plan

**Keep in Place:**
- Complete affiliate program package
- Project-specific documentation
- Implementation guides

**Reference from Multi-Brand:**
```markdown
# In multi-brand-assets/README.md

## Current Brands

### ONE STACK (1Commerce LLC)
Premium merchandise for builders and creators.

**Existing Content:**
- Affiliate program templates: `/onestack-affiliate/`
- Email templates: `/onestack-affiliate/email-templates/`
- Social media: `/onestack-affiliate/social-media/`

**New Content Location:**
- Reusable templates: `templates/email/onestack/`
- Brand guidelines: `documentation/brand_guidelines/onestack.md`
- Shared assets: `assets/logos/onestack/`
```

**Extract Reusable Components:**

1. **Generic Email Template**
   ```bash
   # Create generalized version of welcome email
   cp onestack-affiliate/email-templates/1-welcome-day0.html \
      multi-brand-assets/templates/email/affiliate-welcome.html
   
   # Remove ONE STACK-specific content
   # Add more generic variables
   # Document in template comments
   ```

2. **Variable Definitions**
   ```bash
   # Merge variable definitions
   cat onestack-affiliate/VARIABLES.md >> \
      multi-brand-assets/documentation/references/variable-reference.md
   
   # Organize by brand
   # Remove duplicates
   ```

3. **Brand Assets**
   ```bash
   # Create ONE STACK asset directory
   mkdir -p multi-brand-assets/assets/logos/onestack
   
   # Add logos when available
   # Create brand guideline document
   ```

## File Naming for Brand-Specific Content

### In Multi-Brand Structure

**Templates:**
```
templates/email/
├── email-template-basic.html          # Generic
├── onestack-affiliate-welcome.html    # Brand-specific
└── nextchapter-booking-confirm.html   # Brand-specific
```

**Documentation:**
```
documentation/brand_guidelines/
├── brand-guidelines-template.md       # Template
├── onestack.md                        # ONE STACK guidelines
└── nextchapter.md                     # Next Chapter guidelines
```

**Assets:**
```
assets/logos/
├── onestack/
│   ├── primary.svg
│   ├── white.svg
│   └── icon.svg
└── nextchapter/
    └── ...
```

## Transition Checklist

### Immediate Actions
- [ ] Add current brands to multi-brand-assets/README.md
- [ ] Create cross-references in documentation
- [ ] Update INDEX.md with both structures
- [ ] Document integration strategy in this file

### Short-term Actions
- [ ] Copy reusable templates to multi-brand-assets
- [ ] Create brand-specific guidelines
- [ ] Extract common variables
- [ ] Add brand assets when available

### Long-term Actions
- [ ] Use multi-brand structure for all new templates
- [ ] Gradually migrate when updating templates
- [ ] Deprecate old locations (with redirects)
- [ ] Consolidate duplicate documentation

## Best Practices

### 1. Don't Break Existing Links
- Keep original content until fully migrated
- Add redirects/references
- Update documentation gradually

### 2. Maintain Backward Compatibility
- Support both structures during transition
- Document both locations
- Give teams time to adapt

### 3. Prioritize Reusability
- Extract truly reusable components first
- Keep brand-specific content separate
- Generalize gradually, not all at once

### 4. Document Everything
- Explain where things are
- Note what's deprecated
- Provide migration paths

### 5. Test Thoroughly
- Check all links
- Verify references
- Test template functionality

## Questions to Ask

Before migrating content:

**Is this reusable across brands?**
- Yes → multi-brand-assets
- No → Keep in project directory

**Is this a template or an implementation?**
- Template → multi-brand-assets/templates/
- Implementation → Keep in project directory

**Does this benefit from centralization?**
- Yes → multi-brand-assets
- No → Keep in project directory

**Will other teams need this?**
- Yes → multi-brand-assets
- No → Keep in project directory

## Getting Help

**Questions about integration?**
- Review this guide
- Check multi-brand-assets/INDEX.md
- Create an issue with `integration` label
- Contact repository maintainers

**Need to migrate content?**
- Follow recommended approach above
- Start with soft migration
- Test thoroughly
- Update documentation

---

**Remember:** Both structures can coexist. Choose what works best for each piece of content.
