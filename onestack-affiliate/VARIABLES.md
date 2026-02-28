# ONE STACK Affiliate Program - Variable Reference Guide

This document lists all template variables used across email templates, social media posts, and other content. Use this as a reference when implementing the templates in your email service provider or content management system.

---

## Email Template Variables

### Common Variables (All Email Templates)

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ first_name }}` | String | Affiliate's first name | "John" |
| `{{ affiliate_link }}` | URL | Personal tracking link | "https://onestack.com/af/johndoe" |
| `{{ discount_code }}` | String | Personal discount code | "STACKJOHN" |
| `{{ commission_rate }}` | Number | Current commission percentage | "25" |
| `{{ unsubscribe_url }}` | URL | Unsubscribe link | "https://onestack.com/unsubscribe/xyz" |

### Welcome Email Only (1-welcome-day0.html)

All common variables above apply.

### Quick Wins Email Only (2-quick-wins-day2.html)

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ discount_percent }}` | Number | Discount percentage for code | "15" |

### Month 1 Recap Email Only (3-month1-recap-day30.html)

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ clicks_month }}` | Number | Total clicks this month | "247" |
| `{{ orders_month }}` | Number | Number of orders this month | "12" |
| `{{ revenue_month }}` | Number | Revenue generated (no $ symbol) | "2,150" |
| `{{ commission_month }}` | Number | Commission earned (no $ symbol) | "537.50" |
| `{{ tier_gap }}` | Number | Amount to next tier (no $ symbol) | "350" |
| `{{ next_tier_name }}` | String | Name of next commission tier | "Builder" or "Pro" |
| `{{ next_tier_rate }}` | Number | Commission rate of next tier | "28" |

---

## Social Media Template Variables

### Twitter / X Templates

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ short_url }}` | URL | Shortened affiliate link | "onestack.co/af/john" |
| `{{ affiliate_landing_url }}` | URL | Affiliate signup page | "onestack.com/affiliates/apply" |

### Instagram / LinkedIn Templates

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `{{ coupon_code }}` | String | Personal discount code | "STACKJOHN" |
| `{{ coupon_percent }}` | Number | Discount percentage | "15" |
| `{{ short_url }}` | URL | Shortened affiliate link | "onestack.co/af/john" |

---

## Variable Naming Conventions

### Email Service Provider Syntax

Different ESPs use different syntax for variables. Here are common conversions:

#### Mailchimp
- `{{ first_name }}` → `*|FNAME|*`
- `{{ affiliate_link }}` → `*|AFFILIATE_LINK|*`

#### SendGrid
- `{{ first_name }}` → `{{first_name}}`
- `{{ affiliate_link }}` → `{{affiliate_link}}`

#### HubSpot
- `{{ first_name }}` → `{{ contact.firstname }}`
- `{{ affiliate_link }}` → `{{ contact.affiliate_link }}`

#### Klaviyo
- `{{ first_name }}` → `{{ person.first_name }}`
- `{{ affiliate_link }}` → `{{ person|lookup:'affiliate_link' }}`

#### ConvertKit
- `{{ first_name }}` → `{{ subscriber.first_name }}`
- `{{ affiliate_link }}` → `{{ subscriber.affiliate_link }}`

---

## Database Field Mappings

### For Notion Database

| Template Variable | Notion Property | Property Type |
|-------------------|-----------------|---------------|
| `{{ first_name }}` | Name (extract first name) | Title |
| `{{ affiliate_link }}` | Affiliate Link | URL |
| `{{ discount_code }}` | Discount Code | Text |
| `{{ commission_rate }}` | Tier (convert to %) | Select |
| `{{ clicks_month }}` | Month Clicks | Number |
| `{{ orders_month }}` | Month Orders | Number |
| `{{ revenue_month }}` | Month Revenue | Number |
| `{{ commission_month }}` | Month Commission | Number |

### For Airtable Base

| Template Variable | Airtable Field | Field Type |
|-------------------|----------------|------------|
| `{{ first_name }}` | First Name | Single line text |
| `{{ affiliate_link }}` | Affiliate Link | URL |
| `{{ discount_code }}` | Discount Code | Single line text |
| `{{ commission_rate }}` | Commission Rate | Number (%) |
| `{{ clicks_month }}` | Month Clicks | Number |
| `{{ orders_month }}` | Month Orders | Number |
| `{{ revenue_month }}` | Month Revenue | Currency |
| `{{ commission_month }}` | Month Commission | Currency |

---

## Calculated Variables

Some variables need to be calculated from database values:

### Commission Rate from Tier
```
Starter → 20%
Builder → 25%
Pro → 28%
Elite → 30%
```

### Tier Gap Calculation
```
tier_gap = next_tier_threshold - current_month_revenue

Examples:
- If revenue = $350 and next tier is Builder ($500): gap = $150
- If revenue = $1,800 and next tier is Pro ($2,000): gap = $200
```

### Next Tier Name Logic
```
IF current_tier = "Starter" THEN next_tier_name = "Builder"
IF current_tier = "Builder" THEN next_tier_name = "Pro"
IF current_tier = "Pro" THEN next_tier_name = "Elite"
IF current_tier = "Elite" THEN next_tier_name = "Elite" (already at top)
```

---

## Default Values

When a variable has no value, use these defaults:

| Variable | Default Value | Note |
|----------|---------------|------|
| `{{ first_name }}` | "there" | Generic greeting |
| `{{ commission_rate }}` | "20" | Starting tier |
| `{{ discount_percent }}` | "15" | Standard discount |
| `{{ clicks_month }}` | "0" | New affiliates |
| `{{ orders_month }}` | "0" | New affiliates |
| `{{ revenue_month }}` | "0.00" | New affiliates |
| `{{ commission_month }}` | "0.00" | New affiliates |
| `{{ tier_gap }}` | "500" | Gap to first tier (Builder) |
| `{{ next_tier_name }}` | "Builder" | First upgrade tier |
| `{{ next_tier_rate }}` | "25" | Builder tier rate |

---

## Formatting Guidelines

### Currency Values
- **In templates**: Use `${{ variable }}` format
- **Database**: Store as number without $ or commas
- **Display**: Add $ symbol and format with commas (e.g., $2,150.50)

Example:
- Database value: `2150.50`
- Template: `${{ revenue_month }}`
- Display: `$2,150.50`

### Numbers
- **Whole numbers**: No decimal places (clicks, orders)
- **Currency**: Always 2 decimal places
- **Percentages**: No decimal places (20%, not 20.0%)

### URLs
- **Affiliate links**: Always use HTTPS protocol
- **Short URLs**: Use consistent domain (e.g., onestack.co)
- **UTM parameters**: Include in affiliate_link if needed

### Text
- **Names**: First letter capitalized only
- **Codes**: ALL UPPERCASE for visibility
- **Tiers**: Capitalized (Starter, Builder, Pro, Elite)

---

## Testing Checklist

Before deploying templates, test with these sample values:

### Test Data Set 1: New Affiliate
```
first_name: "Alex"
affiliate_link: "https://onestack.com/af/alexdev"
discount_code: "STACKALEX"
commission_rate: "20"
clicks_month: "0"
orders_month: "0"
revenue_month: "0.00"
commission_month: "0.00"
tier_gap: "500"
next_tier_name: "Builder"
next_tier_rate: "25"
```

### Test Data Set 2: Active Affiliate
```
first_name: "Jordan"
affiliate_link: "https://onestack.com/af/jordanbuild"
discount_code: "STACKJORDAN"
commission_rate: "25"
clicks_month: "187"
orders_month: "8"
revenue_month: "1,440.00"
commission_month: "360.00"
tier_gap: "560"
next_tier_name: "Pro"
next_tier_rate: "28"
```

### Test Data Set 3: Top Performer
```
first_name: "Sam"
affiliate_link: "https://onestack.com/af/samcodes"
discount_code: "STACKSAM"
commission_rate: "30"
clicks_month: "1,245"
orders_month: "42"
revenue_month: "7,560.00"
commission_month: "2,268.00"
tier_gap: "0"
next_tier_name: "Elite"
next_tier_rate: "30"
```

---

## Security Notes

### Sensitive Variables
These variables should NEVER be included in public-facing content:
- Email addresses
- Full affiliate IDs or API keys
- Unsubscribe tokens (only in email footers)

### Safe for Public Use
These can be shared publicly:
- Discount codes (that's the point!)
- First names (when affiliate approves)
- General performance stats (with permission)

### Variable Validation
Always validate variables before inserting:
- Check for SQL injection attempts
- Sanitize HTML in text fields
- Verify URLs match expected domains
- Limit number ranges (e.g., commission 0-100%)

---

## Automation Setup

### Email Triggers

| Email | Trigger Event | Timing | Variable Source |
|-------|---------------|--------|-----------------|
| Welcome | New affiliate accepted | Immediate (Day 0) | User record |
| Quick Wins | Post-onboarding | 2 days after acceptance | User record |
| Month 1 Recap | Monthly performance | 30 days after acceptance | Performance data |

### Variable Sources

1. **User Record**: Name, email, links, codes
2. **Performance Data**: Clicks, orders, revenue, commission
3. **System Calculated**: Tier gaps, next tier info

### Update Frequency

- **Static variables**: Set once at signup (name, links, codes)
- **Performance variables**: Calculate monthly (revenue, commission)
- **Tier variables**: Update when thresholds crossed

---

## Troubleshooting

### Variable Not Displaying

1. **Check variable name**: Match exact case and spelling
2. **Verify data source**: Ensure field has value in database
3. **Test default values**: Make sure fallbacks work
4. **Review ESP syntax**: Confirm correct merge tag format

### Wrong Value Showing

1. **Check data type**: Number vs. string format
2. **Verify calculation**: Review formulas for derived values
3. **Confirm mapping**: Database field → template variable
4. **Test with sample data**: Use test values above

### Formatting Issues

1. **Currency**: Add $ symbol in template, not database
2. **Decimals**: Format numbers consistently (0 or 2 places)
3. **Commas**: Add thousands separator for large numbers
4. **URLs**: Include full https:// protocol

---

## Quick Reference: All Variables

### Alphabetical List

- `{{ affiliate_landing_url }}` - Affiliate signup page URL
- `{{ affiliate_link }}` - Personal tracking link
- `{{ clicks_month }}` - Monthly clicks
- `{{ commission_month }}` - Monthly commission earned
- `{{ commission_rate }}` - Current commission percentage
- `{{ coupon_code }}` - Personal discount code (social media)
- `{{ coupon_percent }}` - Discount percentage
- `{{ discount_code }}` - Personal discount code (email)
- `{{ discount_percent }}` - Discount percentage
- `{{ first_name }}` - Affiliate's first name
- `{{ next_tier_name }}` - Name of next commission tier
- `{{ next_tier_rate }}` - Commission rate of next tier
- `{{ orders_month }}` - Monthly orders
- `{{ revenue_month }}` - Monthly revenue
- `{{ short_url }}` - Shortened affiliate link
- `{{ tier_gap }}` - Amount to next tier
- `{{ unsubscribe_url }}` - Unsubscribe link

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Maintained by**: 1Commerce LLC
