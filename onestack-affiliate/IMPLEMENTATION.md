# ONE STACK Affiliate Program - Implementation Guide

This guide walks you through implementing the ONE STACK affiliate program content step-by-step.

---

## Phase 1: Pre-Launch Setup (Week 1)

### Day 1-2: Email System Setup

**Goal**: Get email templates ready to send

1. **Choose Your Email Service Provider (ESP)**
   - Recommended: Mailchimp, SendGrid, ConvertKit, or Klaviyo
   - Required features: HTML templates, merge tags, automation

2. **Import Email Templates**
   ```
   onestack-affiliate/email-templates/
   ├── 1-welcome-day0.html
   ├── 2-quick-wins-day2.html
   └── 3-month1-recap-day30.html
   ```

3. **Configure Variables**
   - Refer to `VARIABLES.md` for your ESP's syntax
   - Map template variables to your database fields
   - Set default values for all variables

4. **Test Email Rendering**
   - Send test emails to yourself
   - Check on desktop clients (Gmail, Outlook, Apple Mail)
   - Check on mobile (iOS Mail, Gmail app)
   - Verify all links work
   - Confirm variables populate correctly

### Day 3: Database Setup

**Goal**: Create affiliate tracking system

1. **Choose Your Platform**
   - Option A: Notion (easier, good for small teams)
   - Option B: Airtable (more powerful, better for scale)

2. **Create Databases**
   - Follow structure in `database-templates/notion-airtable-structure.md`
   - Set up all three databases:
     - Affiliates
     - Performance
     - Payouts

3. **Configure Properties**
   - Add all fields with correct types
   - Set up select options (Status, Tier, Platform, etc.)
   - Create formulas for auto-calculations

4. **Create Views**
   - Active Dashboard (filtered table)
   - Status Board (kanban view)
   - Upcoming Touchpoints (calendar)
   - Top Performers (sorted gallery)

### Day 4-5: Content Asset Preparation

**Goal**: Have content ready for affiliates

1. **Product Photography**
   - Hire photographer or shoot in-house
   - Needed shots:
     - Individual products on white background (5 images)
     - Desk setup with products (3-5 images)
     - Lifestyle shots (person using products) (3-5 images)
     - Close-up details (leather texture, branding) (3-5 images)

2. **Social Media Templates**
   - Customize templates in `social-media/social-media-templates.md`
   - Add your brand voice
   - Create branded graphics versions (Canva templates)

3. **Asset Library**
   - Create shared folder (Google Drive, Dropbox, or Notion)
   - Organize by type:
     ```
     Affiliate Assets/
     ├── Product Photos/
     ├── Lifestyle Images/
     ├── Social Templates/
     ├── Brand Guidelines/
     └── Video B-Roll/
     ```

### Day 6: Video Production

**Goal**: Record onboarding video

1. **Prepare Environment**
   - Clean desk with ONE STACK products visible
   - Good lighting (natural or ring light)
   - Clear audio (test microphone)

2. **Record Video**
   - Follow script in `video-scripts/affiliate-onboarding-video-script.md`
   - Record in segments (easier to edit)
   - Do multiple takes of key sections

3. **Edit Video**
   - Add text overlays (commission tiers, 3 steps, etc.)
   - Include lower-third with name/title
   - Add subtle background music
   - Export as 1080p MP4

4. **Upload & Distribute**
   - Upload to YouTube as unlisted video
   - Add to affiliate dashboard
   - Include link in welcome email

### Day 7: Slide Deck Creation

**Goal**: Have recruitment deck ready

1. **Build Presentation**
   - Use outline in `slide-deck/affiliate-recruitment-deck-outline.md`
   - Choose platform: Google Slides, Keynote, or PowerPoint
   - Follow design guidelines (black/white theme, clean layout)

2. **Add Visuals**
   - Product photos from asset library
   - Commission tier table/chart
   - Screenshot examples of content
   - QR code for application page

3. **Export Formats**
   - PDF for emailing ahead
   - Editable format for live presentations
   - Print version (if doing in-person meetings)

---

## Phase 2: Soft Launch (Week 2)

### Pilot with 3-5 Affiliates

**Goal**: Test the entire flow before full launch

1. **Select Pilot Affiliates**
   - 2-3 existing customers who love the product
   - 1-2 creators in your network
   - Diverse platforms (YouTube, Instagram, Twitter)

2. **Manual Onboarding**
   - Send welcome email (use template, fill manually)
   - Schedule 1-on-1 calls to walk through
   - Get feedback on:
     - Email clarity
     - Dashboard usability
     - Asset library helpfulness
     - Video effectiveness

3. **Track Results**
   - Create records in Performance database
   - Note time to first post
   - Track early conversions
   - Document questions/confusion

4. **Iterate**
   - Update templates based on feedback
   - Improve asset library
   - Clarify confusing parts
   - Fix any broken links or processes

---

## Phase 3: Automation Setup (Week 3)

### Day 1-3: Email Automation

1. **Create Automation Flows**

   **Flow 1: Welcome Series**
   - Trigger: New affiliate status = "Active"
   - Email 1: Welcome (Day 0) - `1-welcome-day0.html`
   - Email 2: Quick Wins (Day 2) - `2-quick-wins-day2.html`

   **Flow 2: Monthly Recap**
   - Trigger: 30 days after activation, then monthly
   - Email: Month Recap - `3-month1-recap-day30.html`
   - Requires: Monthly performance data update

2. **Test Automations**
   - Create test affiliate record
   - Verify trigger fires correctly
   - Check timing (Day 0, Day 2, Day 30)
   - Confirm variables populate

### Day 4-5: Affiliate Dashboard

1. **Build or Configure Dashboard**
   - Option A: Use existing affiliate platform (e.g., Refersion, Impact)
   - Option B: Build custom on your site
   - Option C: Use Shopify affiliate app

2. **Required Dashboard Features**
   - Login/authentication
   - Display affiliate link and code
   - Show real-time stats (clicks, orders, earnings)
   - Asset library download access
   - Commission history

3. **Link Dashboard to Database**
   - API integration (if using Notion/Airtable)
   - Auto-update stats daily
   - Sync tier upgrades

---

## Phase 4: Public Launch (Week 4)

### Day 1: Application Page

1. **Create Signup Form**
   - Fields needed:
     - Full Name
     - Email
     - Primary Platform
     - Platform Handle
     - Audience Size
     - Brief description of audience
     - Why you want to join
   - Make form in Typeform, Google Forms, or custom

2. **Link Form to Database**
   - Auto-create record in Affiliates database
   - Set initial Status = "Lead" or "Invited"
   - Send notification to team for review

### Day 2-3: Recruitment Campaign

1. **Announce on Your Channels**
   - Email list: "Introducing ONE STACK Affiliate Program"
   - Social media: Use recruitment post templates
   - Website: Add banner or popup

2. **Reach Out Directly**
   - List 20-30 ideal affiliates
   - Personal DMs or emails
   - Mention specific reason they're a good fit
   - Include application link

3. **Share in Communities**
   - Developer communities (Dev.to, Hacker News)
   - Creator Discord servers
   - LinkedIn groups
   - Twitter/X threads

### Day 4-7: Process Applications

1. **Review Applicants Daily**
   - Check audience fit (are they builders/creators?)
   - Verify follower counts
   - Review content quality
   - Look for engagement rate

2. **Approve or Decline**
   - Approve: Change Status to "Active"
     - Welcome email auto-sends
     - Create affiliate link and code
     - Add to dashboard
     - Ship starter kit (if applicable)
   - Decline: Send polite rejection
     - Offer to reconsider in future
     - Suggest other ways to support

3. **First Week Support**
   - Monitor for first posts
   - Reply to questions quickly
   - Offer strategy calls
   - Share top-performing content examples

---

## Phase 5: Ongoing Management

### Weekly Tasks

**Monday: Review Performance**
- Check previous week's stats in database
- Identify top performers (send congratulations)
- Notice inactive affiliates (send check-in)
- Update Next Touchpoint dates

**Wednesday: Content Creation**
- Find and save best affiliate content
- Create "Affiliate Spotlight" for social media
- Update asset library with new photos
- Send content ideas to affiliates

**Friday: Outreach**
- Schedule next week's touchpoint calls
- Reply to affiliate emails
- Update recruitment materials
- Review and approve new applications

### Monthly Tasks

**Week 1: Performance Reporting**
- Export data from Performance database
- Calculate all commissions
- Send Month 1 Recap emails (automated)
- Update tiers for qualified affiliates

**Week 2: Payouts**
- Create Payout records
- Process payments (PayPal, transfers, etc.)
- Mark as Paid in database
- Send payment confirmation emails

**Week 3: Strategy Calls**
- Schedule calls with top 10 performers
- Offer personalized advice
- Get feedback on program
- Discuss upcoming campaigns

**Week 4: Recruitment**
- Evaluate need for new affiliates
- Launch mini recruitment campaign
- Update slide deck with latest stats
- Refresh content in asset library

### Quarterly Reviews

**Every 3 Months**
- Analyze overall program performance
- Calculate average earnings per affiliate
- Review tier structure (are thresholds right?)
- Survey affiliates for feedback
- Update templates and content
- Plan next quarter's campaigns

---

## Success Metrics to Track

### Application Stage
- Application volume per week
- Acceptance rate (%)
- Time from application to decision

### Onboarding Stage
- Time from acceptance to first post (target: <7 days)
- Asset library download rate (target: >80%)
- Video view completion rate (target: >70%)

### Performance Stage
- Active affiliate retention (Month 2, Month 6)
- Average commission per affiliate
- Top 10% vs. bottom 50% performance gap
- Clicks, orders, revenue (total and per affiliate)

### Content Stage
- Posts per affiliate per month
- Best-performing content types
- Platform distribution (which works best?)
- Conversion rate by content type

---

## Troubleshooting Common Issues

### Issue: Affiliates not posting
**Solutions**:
- Send personalized check-in email
- Offer 1-on-1 strategy call
- Share easy templates
- Create posting challenges with prizes
- Send reminder about commission potential

### Issue: Low conversion rates
**Solutions**:
- Review affiliate content quality
- Check if discount code is compelling enough
- Ensure product pages are optimized
- Test different CTAs in templates
- Provide better content examples

### Issue: Too many applications
**Solutions**:
- Raise minimum audience size requirement
- Make application more detailed (filters casual interest)
- Move to waitlist system
- Focus on quality over quantity

### Issue: Database getting messy
**Solutions**:
- Set weekly data hygiene routine
- Create automation to archive inactive affiliates
- Use consistent naming conventions
- Train team on proper data entry

---

## Resource Checklist

Before you start, make sure you have:

### Tools & Services
- [ ] Email service provider account
- [ ] Notion or Airtable workspace
- [ ] Domain for short URLs (e.g., onestack.co)
- [ ] Video hosting (YouTube or Vimeo)
- [ ] File storage (Google Drive or Dropbox)
- [ ] Payment processor (PayPal Business, Stripe)

### Content Ready
- [ ] Product photos (10-20 high-quality images)
- [ ] Email templates uploaded to ESP
- [ ] Social media templates customized
- [ ] Onboarding video recorded and uploaded
- [ ] Recruitment slide deck created
- [ ] Asset library organized and accessible

### Systems Configured
- [ ] Affiliate database created
- [ ] Email automations set up and tested
- [ ] Affiliate dashboard live
- [ ] Application form created
- [ ] Short link/tracking system ready

### Legal & Admin
- [ ] Affiliate terms & conditions written
- [ ] Privacy policy updated
- [ ] Tax forms prepared (if needed)
- [ ] Payment process documented
- [ ] Support email/system set up

---

## Quick Reference: File Locations

| Resource | Location |
|----------|----------|
| Email Templates | `onestack-affiliate/email-templates/` |
| Social Templates | `onestack-affiliate/social-media/social-media-templates.md` |
| Slide Deck Outline | `onestack-affiliate/slide-deck/affiliate-recruitment-deck-outline.md` |
| Video Script | `onestack-affiliate/video-scripts/affiliate-onboarding-video-script.md` |
| Database Structure | `onestack-affiliate/database-templates/notion-airtable-structure.md` |
| Variable Reference | `onestack-affiliate/VARIABLES.md` |
| Main Documentation | `onestack-affiliate/README.md` |

---

## Next Steps

1. ✅ Review all templates and documentation
2. ⬜ Choose your tools (ESP, database, dashboard)
3. ⬜ Follow Phase 1 checklist (Week 1)
4. ⬜ Run pilot with 3-5 affiliates (Week 2)
5. ⬜ Set up automations (Week 3)
6. ⬜ Launch publicly (Week 4)
7. ⬜ Establish ongoing management routine

---

**Questions?**  
Email: keith@1commercesolutions.shop  
Website: 1CommerceSolutions.shop

**Good luck with your launch!** 🚀
