# ONE STACK Affiliate Program - Quick Reference Index

Quick access guide to all templates and documentation in this package.

---

## 📧 Email Templates (HTML)

### Day 0: Welcome Email
**File**: `email-templates/1-welcome-day0.html`  
**When**: Immediately upon affiliate acceptance  
**Purpose**: Introduce program, provide credentials, set expectations  
**Key Features**:
- Welcome message and program benefits
- Quick-start details (link, code, commission rate)
- 3 steps to first sale
- CTA button to download affiliate kit
- Support contact information

**Variables**: first_name, affiliate_link, discount_code, commission_rate, unsubscribe_url

---

### Day 2: Quick Wins Template
**File**: `email-templates/2-quick-wins-day2.html`  
**When**: 2 days after acceptance  
**Purpose**: Get first post live with plug-and-play template  
**Key Features**:
- Motivational message to post within 24 hours
- Ready-to-copy social media post template
- Simple instructions
- Support offer

**Variables**: first_name, discount_code, discount_percent, affiliate_link, unsubscribe_url

---

### Day 30: Month 1 Recap
**File**: `email-templates/3-month1-recap-day30.html`  
**When**: 30 days after acceptance, then monthly  
**Purpose**: Show performance and motivate tier upgrade  
**Key Features**:
- Month 1 performance stats box
- Next tier target calculation
- 3-point action plan
- Offer for personalized plan

**Variables**: first_name, clicks_month, orders_month, revenue_month, commission_month, tier_gap, next_tier_name, next_tier_rate, unsubscribe_url

---

## 📱 Social Media Templates (Markdown)

**File**: `social-media/social-media-templates.md`

### Twitter / X Posts (3 templates)
1. **Launch Tweet** - Product announcement
2. **Founder Angle** - Philosophy/positioning
3. **Affiliate Recruitment** - Call for affiliates

### Instagram / LinkedIn Captions (4 templates)
1. **Desk Setup Post** - Product showcase with benefits
2. **Affiliate Invite** - Professional recruitment
3. **Product Review** - In-depth 5-item breakdown
4. **Unboxing Post** - First impressions format

**Includes**: Usage notes, best practices, content mix recommendations

---

## 🎬 Slide Deck Outline

**File**: `slide-deck/affiliate-recruitment-deck-outline.md`

### 10-Slide Structure
1. Cover - Branding and tagline
2. Who We Are - Company background
3. What is ONE STACK - Product overview
4. Why Your Audience Cares - Problem/solution
5. Commission & Tiers - Earnings potential
6. Content Examples - Top-performing posts
7. Support Provided - Resources and help
8. Next Steps - Application process
9. Application & Contact - QR code and info
10. Q&A - Closing slide

**Includes**: Design guidelines, presentation tips, export recommendations

---

## 🎥 Video Script

**File**: `video-scripts/affiliate-onboarding-video-script.md`

### 2-3 Minute Script with Timestamps
- **0:00-0:15** Hook
- **0:15-0:45** What ONE STACK is
- **0:45-1:30** Commission structure
- **1:30-2:30** How to start (3 steps)
- **2:30-3:00** Best practices
- **3:00-3:30** Close and CTA

**Includes**: Pre/post-production checklists, graphics specs, presenter notes, shorter/longer variants

---

## 📊 Database Templates

**File**: `database-templates/notion-airtable-structure.md`

### Database 1: Affiliates (23 properties)
- Basic info (name, handle, email, platform, audience)
- Status tracking (Lead, Invited, Active, Paused, Inactive)
- Tier management (Starter, Builder, Pro, Elite)
- Links and codes
- Performance metrics (monthly & lifetime)
- Relationship management

### Database 2: Performance (16 properties)
- Affiliate relation
- Date and period tracking
- Multi-channel metrics
- Traffic, conversion, revenue data
- Content tracking

### Database 3: Payouts (9 properties)
- Payment tracking
- Method and status
- Invoice storage

**Includes**: Suggested views, formulas, CSV import instructions, Airtable adaptations

---

## 📖 Documentation Files

### README.md
**File**: `README.md`  
**Purpose**: Main documentation and overview  
**Contents**:
- Directory structure explanation
- Quick overview of all templates
- Template variable lists
- Quick start guide for managers and affiliates
- Implementation checklist
- Technical requirements
- Success metrics
- Version history

---

### VARIABLES.md
**File**: `VARIABLES.md`  
**Purpose**: Complete variable reference guide  
**Contents**:
- All template variables with descriptions and examples
- ESP-specific syntax conversions (Mailchimp, SendGrid, etc.)
- Database field mappings (Notion & Airtable)
- Calculated variable formulas
- Default values
- Formatting guidelines
- Test data sets
- Security notes
- Troubleshooting

---

### IMPLEMENTATION.md
**File**: `IMPLEMENTATION.md`  
**Purpose**: Step-by-step launch guide  
**Contents**:
- Phase 1: Pre-Launch Setup (Week 1)
  - Email system setup
  - Database configuration
  - Content asset preparation
  - Video production
  - Slide deck creation
- Phase 2: Soft Launch (Week 2)
  - Pilot program with 3-5 affiliates
  - Feedback collection and iteration
- Phase 3: Automation Setup (Week 3)
  - Email automation flows
  - Dashboard integration
- Phase 4: Public Launch (Week 4)
  - Application page
  - Recruitment campaign
  - Application processing
- Phase 5: Ongoing Management
  - Weekly tasks
  - Monthly processes
  - Quarterly reviews
- Success metrics
- Troubleshooting guide
- Resource checklist

---

## 🔍 Quick Search

### I need to...

**Set up email templates**
→ Go to `IMPLEMENTATION.md` Phase 1, Day 1-2  
→ Use templates in `email-templates/`  
→ Reference variables in `VARIABLES.md`

**Customize social media posts**
→ Open `social-media/social-media-templates.md`  
→ Choose template and replace variables

**Prepare for recruitment call**
→ Follow outline in `slide-deck/affiliate-recruitment-deck-outline.md`  
→ Add your own images and data

**Record onboarding video**
→ Follow script in `video-scripts/affiliate-onboarding-video-script.md`  
→ Check pre-production requirements

**Set up tracking database**
→ Follow structure in `database-templates/notion-airtable-structure.md`  
→ Choose Notion or Airtable

**Understand template variables**
→ Reference `VARIABLES.md` for complete list  
→ Find ESP-specific syntax conversions

**Plan the launch**
→ Follow `IMPLEMENTATION.md` phase by phase  
→ Use checklists to track progress

**Find specific template**
→ Use this index to locate quickly  
→ Check README.md for descriptions

---

## 📏 Template Statistics

| Category | Files | Description |
|----------|-------|-------------|
| Email Templates | 3 HTML files | Table-based, inline styles, mobile-responsive |
| Social Templates | 7 templates | Twitter/X (3) + Instagram/LinkedIn (4) |
| Slide Deck | 10 slides | Complete presentation outline |
| Video Script | 6 sections | Timestamped with production notes |
| Databases | 3 structures | Affiliates, Performance, Payouts |
| Documentation | 3 guides | README, VARIABLES, IMPLEMENTATION |

**Total Content**: 10 files, 1,439+ lines of code and documentation

---

## 🎯 Usage by Role

### Marketing Manager
Primary files:
1. `README.md` - Overview
2. `IMPLEMENTATION.md` - Launch plan
3. `social-media/social-media-templates.md` - Post templates

### Developer/Technical Lead
Primary files:
1. `VARIABLES.md` - Variable mappings
2. `database-templates/notion-airtable-structure.md` - Database schema
3. Email template HTML files - Integration reference

### Affiliate Manager
Primary files:
1. `database-templates/notion-airtable-structure.md` - Daily tool
2. `IMPLEMENTATION.md` Phase 5 - Ongoing tasks
3. `slide-deck/affiliate-recruitment-deck-outline.md` - Calls

### Content Creator
Primary files:
1. `social-media/social-media-templates.md` - Post templates
2. `video-scripts/affiliate-onboarding-video-script.md` - Video guide
3. `slide-deck/affiliate-recruitment-deck-outline.md` - Presentation

### Affiliate (End User)
Primary files:
1. Welcome email (they receive)
2. Onboarding video (they watch)
3. Asset library (they download)
4. Social templates (they adapt)

---

## 📂 File Tree

```
onestack-affiliate/
├── README.md                          # Main documentation (9.4 KB)
├── VARIABLES.md                       # Variable reference (11 KB)
├── IMPLEMENTATION.md                  # Launch guide (13 KB)
├── email-templates/
│   ├── 1-welcome-day0.html           # Day 0 welcome email
│   ├── 2-quick-wins-day2.html        # Day 2 quick wins
│   └── 3-month1-recap-day30.html     # Day 30 performance recap
├── social-media/
│   └── social-media-templates.md      # 7 social post templates
├── slide-deck/
│   └── affiliate-recruitment-deck-outline.md  # 10-slide presentation
├── video-scripts/
│   └── affiliate-onboarding-video-script.md   # 2-3 min video script
└── database-templates/
    └── notion-airtable-structure.md   # Database schemas (3 tables)
```

---

## ✅ Implementation Checklist

Use this quick checklist to track your progress:

- [ ] Read README.md
- [ ] Review all email templates
- [ ] Customize social media templates
- [ ] Choose database platform (Notion or Airtable)
- [ ] Select email service provider
- [ ] Map variables to your system (see VARIABLES.md)
- [ ] Set up databases
- [ ] Import email templates
- [ ] Create automation flows
- [ ] Prepare product photos for asset library
- [ ] Record onboarding video
- [ ] Create recruitment slide deck
- [ ] Test full affiliate flow
- [ ] Run pilot with 3-5 affiliates
- [ ] Collect feedback and iterate
- [ ] Launch publicly
- [ ] Establish ongoing management routine

---

## 🆘 Need Help?

**General Questions**  
Start with: `README.md`

**Technical Implementation**  
Refer to: `IMPLEMENTATION.md` and `VARIABLES.md`

**Template Customization**  
Individual template files have inline comments

**Database Setup**  
Step-by-step in: `database-templates/notion-airtable-structure.md`

**Contact**  
Email: keith@1commercesolutions.shop  
Website: 1CommerceSolutions.shop

---

**Version**: 1.0  
**Last Updated**: February 2026  
**Created by**: 1Commerce LLC for ONE STACK Affiliate Program
