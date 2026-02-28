# Variable Reference

This document provides a comprehensive reference for all variables used across templates in the multi-brand asset repository.

## Overview

Variables use the Jinja2-style syntax: `{{ variable_name }}`

Some variables support defaults: `{{ variable_name | default:"fallback_value" }}`

## Common Variables

These variables are used across multiple template types:

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ first_name }}` | String | Recipient's first name | "Sarah" |
| `{{ last_name }}` | String | Recipient's last name | "Johnson" |
| `{{ full_name }}` | String | Recipient's full name | "Sarah Johnson" |
| `{{ email }}` | Email | Recipient's email address | "sarah@example.com" |
| `{{ company_name }}` | String | Brand or company name | "ACME Corp" |
| `{{ brand_name }}` | String | Specific brand name | "ONE STACK" |
| `{{ year }}` | Number | Current year | "2026" |
| `{{ date }}` | Date | Current date | "2026-02-28" |

## Email Template Variables

### User Information
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ first_name }}` | User's first name | "John" |
| `{{ email }}` | User's email | "john@example.com" |
| `{{ user_id }}` | Unique user identifier | "user_12345" |
| `{{ username }}` | User's username | "johndoe" |

### Company/Brand
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ company_name }}` | Full company name | "ACME Corporation" |
| `{{ company_address }}` | Physical address | "123 Main St, Portland, OR" |
| `{{ support_email }}` | Support contact email | "support@example.com" |
| `{{ website_url }}` | Main website URL | "https://example.com" |

### Transactional
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ order_number }}` | Order ID | "ORD-2026-00123" |
| `{{ order_total }}` | Total order amount | "$149.99" |
| `{{ tracking_number }}` | Shipping tracking | "1Z999AA1012345" |
| `{{ invoice_url }}` | Link to invoice | "https://..." |

### Marketing
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ discount_code }}` | Promotional code | "SAVE20" |
| `{{ discount_amount }}` | Discount percentage/amount | "20%" |
| `{{ offer_expires }}` | Expiration date | "March 31, 2026" |
| `{{ cta_url }}` | Call-to-action link | "https://..." |

### Footer
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ unsubscribe_url }}` | Unsubscribe link | "https://..." |
| `{{ preference_url }}` | Email preferences | "https://..." |
| `{{ privacy_url }}` | Privacy policy | "https://..." |
| `{{ terms_url }}` | Terms of service | "https://..." |

## Social Media Variables

### Basic Info
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ product_name }}` | Product being promoted | "Premium Toolkit" |
| `{{ product_price }}` | Product price | "$99" |
| `{{ url }}` | Short link | "bit.ly/..." |
| `{{ handle }}` | Brand social handle | "@acmecorp" |

### Campaign
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ campaign_name }}` | Campaign identifier | "Spring Sale 2026" |
| `{{ hashtags }}` | Relevant hashtags | "#sale #spring" |
| `{{ cta }}` | Call to action | "Shop Now" |
| `{{ discount_code }}` | Promo code | "SPRING20" |

### Content
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ headline }}` | Post headline/hook | "Save 20% Today!" |
| `{{ description }}` | Product description | "Premium quality..." |
| `{{ features }}` | Key features list | "Durable, Stylish..." |
| `{{ testimonial }}` | Customer quote | "Best purchase ever!" |

## Web Component Variables

### Navigation
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ logo_url }}` | Path to logo | "/assets/logo.svg" |
| `{{ nav_items }}` | Navigation menu items | Array of objects |
| `{{ current_page }}` | Active page identifier | "home" |

### Content
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ page_title }}` | Page title | "Welcome to ACME" |
| `{{ meta_description }}` | SEO description | "Your source for..." |
| `{{ hero_image }}` | Hero image URL | "/images/hero.jpg" |
| `{{ hero_heading }}` | Main heading | "Transform Your..." |

### Forms
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ form_action }}` | Form submission URL | "/api/submit" |
| `{{ form_method }}` | HTTP method | "POST" |
| `{{ csrf_token }}` | Security token | "abc123..." |

## Presentation Variables

### Cover Slide
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ presentation_title }}` | Main title | "Q4 Results" |
| `{{ presenter_name }}` | Presenter | "Jane Doe" |
| `{{ presentation_date }}` | Date | "February 28, 2026" |
| `{{ company_logo }}` | Logo path | "assets/logo.png" |

### Content Slides
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ slide_title }}` | Slide heading | "Key Metrics" |
| `{{ slide_number }}` | Slide number | "5" |
| `{{ total_slides }}` | Total slides | "25" |

## Affiliate Program Variables

(Specific to ONE STACK affiliate program)

### Affiliate Info
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ affiliate_link }}` | Personal tracking link | "onestack.com/af/john" |
| `{{ discount_code }}` | Personal discount code | "STACKJOHN" |
| `{{ commission_rate }}` | Commission percentage | "25" |
| `{{ affiliate_id }}` | Unique ID | "AFF-12345" |

### Performance
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ clicks_month }}` | Monthly clicks | "247" |
| `{{ orders_month }}` | Monthly orders | "12" |
| `{{ revenue_month }}` | Monthly revenue | "2,150.00" |
| `{{ commission_month }}` | Commission earned | "537.50" |

### Tier Progress
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ current_tier }}` | Current tier name | "Builder" |
| `{{ next_tier_name }}` | Next tier | "Pro" |
| `{{ tier_gap }}` | Amount to next tier | "350" |
| `{{ next_tier_rate }}` | Next commission rate | "28" |

## Variable Modifiers

### Default Values
Provide a fallback if variable is empty:
```
{{ first_name | default:"there" }}
```

### Formatting
Apply formatting to variables:
```
{{ price | currency }}          → "$99.99"
{{ date | date:"F j, Y" }}     → "February 28, 2026"
{{ text | upper }}              → "UPPERCASE"
{{ text | lower }}              → "lowercase"
{{ text | title }}              → "Title Case"
```

### Filters
Transform variable values:
```
{{ url | shorten }}             → Shortened URL
{{ email | obfuscate }}         → Spam-protected email
{{ html | safe }}               → Render HTML (use carefully!)
```

## Custom Variables

When creating new templates, follow these conventions:

### Naming
- Use snake_case: `{{ user_name }}` not `{{ userName }}`
- Be descriptive: `{{ product_price }}` not `{{ price }}`
- Avoid abbreviations: `{{ description }}` not `{{ desc }}`

### Documentation
Always document new variables:
```html
<!-- Variable: {{ custom_field }}
     Type: String
     Description: Brief description of what this represents
     Example: "Sample value"
-->
```

## Best Practices

1. **Always provide defaults** for user-facing variables
2. **Validate inputs** before inserting into templates
3. **Escape HTML** to prevent injection attacks
4. **Test with edge cases** (empty values, long strings, special characters)
5. **Document clearly** what each variable expects

## Variable Validation

### Required Variables
Mark required variables in template documentation:
- ✅ Required: `{{ first_name }}`
- ⭕ Optional: `{{ middle_name }}`

### Data Types
Specify expected data types:
- **String**: Text values
- **Number**: Numeric values (integer or decimal)
- **Boolean**: true/false
- **Date**: Date values (specify format)
- **URL**: Valid URLs
- **Email**: Valid email addresses
- **Array**: List of values
- **Object**: Structured data

## Examples

### Email Example
```html
<p>Hi {{ first_name | default:"there" }},</p>
<p>Thanks for joining {{ company_name }}!</p>
<p>Your order #{{ order_number }} will ship on {{ ship_date }}.</p>
```

### Social Media Example
```
New product alert! 🚀

{{ product_name }} is here: {{ url }}

Use code {{ discount_code }} for {{ discount_amount }}% off.

{{ hashtags }}
```

### Web Component Example
```html
<nav>
  <img src="{{ logo_url }}" alt="{{ company_name }}">
  <a href="/" class="{{ current_page == 'home' ? 'active' : '' }}">Home</a>
</nav>
```

## Troubleshooting

### Variable Not Rendering
- Check spelling and case
- Ensure variable is defined in your data
- Verify template syntax is correct

### Wrong Value Displayed
- Check data source
- Verify variable mapping
- Review any applied filters

### Special Characters
- Use proper encoding (UTF-8)
- Escape HTML entities if needed
- Test with international characters

## Related Documentation

- [Email Template Guide](../guides/email-template-guide.md)
- [Social Media Guide](../guides/social-media-guide.md)
- [Brand Guidelines](../brand_guidelines/)

---

**Version**: 1.0  
**Last Updated**: February 2026  
**Maintained By**: Multi-Brand Asset Team
