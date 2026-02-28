# Email Templates

This directory contains reusable HTML email templates that can be adapted for different brands and campaigns.

## Template Categories

### Welcome Emails
- New user onboarding
- Account activation
- Welcome series

### Transactional Emails
- Order confirmations
- Shipping notifications
- Password resets
- Account updates

### Promotional Emails
- Product launches
- Special offers
- Seasonal campaigns
- Event invitations

## Template Structure

All email templates should follow these guidelines:

### HTML Structure
- Use table-based layouts for maximum email client compatibility
- Include inline CSS styles (no external stylesheets)
- Use email-safe fonts (system font stacks)
- Max-width: 600px for optimal mobile rendering
- Include proper DOCTYPE and meta tags

### Variables
Templates use Jinja2-style variable syntax:
```html
{{ variable_name }}
{{ variable_name | default:"fallback_value" }}
```

### Common Variables
- `{{ first_name }}` - Recipient's first name
- `{{ email }}` - Recipient's email address
- `{{ company_name }}` - Brand/company name
- `{{ unsubscribe_url }}` - Unsubscribe link
- `{{ year }}` - Current year

## Best Practices

1. **Test Across Clients**: Test templates in Gmail, Outlook, Apple Mail, etc.
2. **Mobile First**: Ensure responsive design for mobile devices
3. **Alt Text**: Include alt text for all images
4. **Plain Text**: Provide a plain-text version alongside HTML
5. **Accessibility**: Use semantic HTML and proper ARIA labels

## Usage

1. Copy the template file
2. Replace variable placeholders with actual values
3. Customize colors and branding
4. Test thoroughly before sending
5. Validate HTML with email testing tools

## Resources

- [Email on Acid](https://www.emailonacid.com/) - Email testing
- [Litmus](https://www.litmus.com/) - Email design and testing
- [Can I Email](https://www.caniemail.com/) - CSS support reference
