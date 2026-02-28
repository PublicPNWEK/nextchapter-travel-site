# ONE STACK Affiliate Program - Content & Templates

This directory contains all the templates, scripts, and documentation needed to launch and manage the ONE STACK affiliate program for 1Commerce LLC.

## 📁 Directory Structure

```
onestack-affiliate/
├── email-templates/          # HTML email templates
├── social-media/            # Social media post templates
├── slide-deck/              # Slide deck outlines for presentations
├── video-scripts/           # Video onboarding scripts
├── database-templates/      # Notion/Airtable database structures
└── README.md               # This file
```

## 📧 Email Templates

Location: `email-templates/`

Three HTML email templates using table-based layout, inline styles, and email-safe fonts:

1. **1-welcome-day0.html** - Affiliate welcome email sent immediately upon signup
   - Introduces the program
   - Lists benefits (20-25% commission, discount code, asset library, priority access)
   - Provides quick-start details
   - 3 steps to first sale
   - CTA to download affiliate kit

2. **2-quick-wins-day2.html** - Quick wins template sent 2 days after signup
   - Plug-and-play social media post template
   - Designed to get first post live within 24 hours
   - Ready-to-copy caption for Instagram, X, or LinkedIn

3. **3-month1-recap-day30.html** - Month 1 performance recap sent after 30 days
   - Performance stats (clicks, orders, revenue, commission)
   - Next tier target and gap
   - 3-point action plan for next month
   - Invitation to request personalized strategy

### Email Template Variables

All templates use these placeholder variables:
- `{{ first_name }}` - Affiliate's first name
- `{{ affiliate_link }}` - Personal tracking link
- `{{ discount_code }}` - Personal discount code
- `{{ commission_rate }}` - Current commission percentage
- `{{ unsubscribe_url }}` - Unsubscribe link

Month 1 recap additional variables:
- `{{ clicks_month }}` - Monthly clicks
- `{{ orders_month }}` - Monthly orders
- `{{ revenue_month }}` - Monthly revenue
- `{{ commission_month }}` - Monthly commission earned
- `{{ tier_gap }}` - Amount to next tier
- `{{ next_tier_name }}` - Name of next tier
- `{{ next_tier_rate }}` - Commission rate of next tier

## 📱 Social Media Templates

Location: `social-media/social-media-templates.md`

Ready-to-use copy for Twitter/X, Instagram, and LinkedIn:

### Twitter / X (3 variants)
- Launch announcement
- Founder angle (product philosophy)
- Affiliate recruitment call

### Instagram / LinkedIn (4 variants)
- Desk setup post with product list
- Affiliate recruitment invite
- Product review post
- Unboxing post

All templates include:
- Variable placeholders for customization
- Suggested hashtags
- Usage notes and best practices
- Content mix recommendations (60% product-in-use, 25% lifestyle, 15% features)

## 🎬 Slide Deck Outline

Location: `slide-deck/affiliate-recruitment-deck-outline.md`

Complete 10-slide presentation outline for affiliate recruitment calls:

1. Cover - Program branding and tagline
2. Who We Are - 1Commerce LLC background
3. What is ONE STACK - Product overview
4. Why Your Audience Cares - Problem/solution format
5. Commission & Tier Structure - Earnings table with examples
6. Content Examples - Screenshots of top-performing posts
7. Support You Provide - Asset library, tracking, content ideas, support
8. Next Steps & Timing - Application process timeline
9. Application & Contact - QR code and contact information
10. Q&A - Clean closing slide

Includes:
- Design guidelines (color palette, typography, images)
- Presentation tips
- Export format recommendations
- Optional appendix resources

## 🎥 Video Script

Location: `video-scripts/affiliate-onboarding-video-script.md`

Complete 2-3 minute video script for Loom/YouTube onboarding video:

### Script Sections (with timestamps)
- **Hook** (0:00-0:15) - Attention grabber
- **Section 1** (0:15-0:45) - What ONE STACK is
- **Section 2** (0:45-1:30) - Commission structure and earnings
- **Section 3** (1:30-2:30) - How to start (3 steps)
- **Section 4** (2:30-3:00) - Best practice tips
- **Close** (3:00-3:30) - Call to action and contact info

Includes:
- Pre-production checklist
- Post-production requirements
- Graphics and overlay specifications
- Export settings
- Distribution plan
- YouTube optimization details
- Optional shorter (60s) and longer (5min) variants
- Presenter notes (tone, body language, pacing)

## 📊 Database Templates

Location: `database-templates/notion-airtable-structure.md`

Complete database structure for Notion or Airtable to manage affiliate program:

### Database 1: Affiliates
23 properties including:
- Basic info (name, handle, email, platform, audience size)
- Status tracking (Lead, Invited, Active, Paused, Inactive)
- Tier management (Starter, Builder, Pro, Elite)
- Links and codes
- Performance metrics (monthly and lifetime)
- Relationship management (dates, notes, kit tracking)

### Database 2: Performance
16 properties including:
- Affiliate relation
- Date and period type
- Multi-channel tracking
- Traffic metrics (clicks, visitors)
- Conversion metrics (orders, rate)
- Revenue metrics (revenue, AOV, commission)
- Content tracking (URL, type)

### Database 3: Payouts (Optional)
9 properties for tracking commission payments:
- Payout amount and period
- Payment method
- Paid status and date
- Invoice/receipt storage

Also includes:
- Suggested views (dashboard, board, calendar, gallery)
- Formula examples
- Import instructions for CSV data
- Automation ideas
- Tips for ongoing management
- Airtable-specific adaptations

## 🚀 Quick Start Guide

### For Program Managers

1. **Set up email system**
   - Import HTML templates into your email service (Mailchimp, SendGrid, etc.)
   - Configure variables/merge tags
   - Set up automation triggers (Day 0, Day 2, Day 30)

2. **Prepare social media assets**
   - Review templates in `social-media/social-media-templates.md`
   - Customize with your brand voice
   - Share with affiliates via asset library

3. **Create recruitment deck**
   - Use outline in `slide-deck/`
   - Add real product photos and performance data
   - Export as PDF and Google Slides

4. **Record onboarding video**
   - Follow script in `video-scripts/`
   - Record screen demos of dashboard
   - Upload to YouTube as unlisted
   - Add to welcome email and dashboard

5. **Set up database**
   - Choose Notion or Airtable
   - Follow structure in `database-templates/`
   - Import any existing affiliate data
   - Create automations

### For Affiliates

1. **Check your welcome email** (Day 0) for:
   - Your unique affiliate link
   - Personal discount code
   - Link to asset library

2. **Use social media templates** to create your first post within 24 hours

3. **Watch the onboarding video** for a complete walkthrough

4. **Review Month 1 recap** (Day 30) to track performance and level up

## 📋 Implementation Checklist

- [ ] Review all templates and customize branding
- [ ] Set up email automation system
- [ ] Upload email templates with correct variables
- [ ] Test email deliverability and rendering
- [ ] Create slide deck for recruitment calls
- [ ] Record and upload onboarding video
- [ ] Set up Notion or Airtable database
- [ ] Import existing affiliate data (if any)
- [ ] Create asset library with product photos
- [ ] Test full affiliate signup flow
- [ ] Document any custom processes
- [ ] Train team on database usage
- [ ] Schedule first affiliate touchpoints

## 🛠️ Technical Requirements

### Email Templates
- Email service provider (ESP) that supports HTML templates
- Variable/merge tag support
- Automation capabilities
- Mobile-responsive rendering

### Social Media
- Content scheduling tool (optional: Buffer, Hootsuite, Later)
- Image editor for graphics (Canva, Figma, Adobe)

### Slide Deck
- Google Slides, Keynote, or PowerPoint
- Product photography assets
- Brand style guide

### Video
- Screen recording tool (Loom, OBS, Camtasia)
- Video editing software (optional: iMovie, Premiere, Final Cut)
- YouTube or Vimeo account

### Database
- Notion workspace (free or paid) OR
- Airtable base (free or paid)
- Zapier or Make.com for automations (optional)

## 📊 Success Metrics

Track these KPIs to measure program success:

### Email Metrics
- Open rate (target: >30%)
- Click-through rate (target: >10%)
- Time to first post after welcome email (target: <48 hours)

### Affiliate Metrics
- Application-to-acceptance rate
- Active affiliates (posting regularly)
- Average commission per affiliate
- Top 10% revenue contribution

### Content Metrics
- Posts per affiliate per month
- Content types with highest conversion
- Average order value by content type

### Retention Metrics
- Month 2 retention (affiliates still active)
- Month 6 retention
- Average affiliate lifetime value

## 🤝 Support & Contact

For questions about these templates or the affiliate program:

- **Email**: keith@1commercesolutions.shop
- **Website**: 1CommerceSolutions.shop
- **Calendar**: [Book a 30-min strategy call](https://calendly.com/skdev-1commercesolutions/30min)
- **Social**: @1CommerceLLC

## 📝 Version History

- **v1.0** (February 2026) - Initial template creation
  - 3 email templates
  - Social media copy library
  - Slide deck outline
  - Video script
  - Database structure

## 📄 License

These templates are proprietary to 1Commerce LLC and the ONE STACK affiliate program. Do not distribute or use for other programs without permission.

---

**Built in Portland, Oregon by 1Commerce LLC**  
*For builders who ship.*
