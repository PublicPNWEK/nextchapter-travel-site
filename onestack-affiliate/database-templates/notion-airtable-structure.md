# ONE STACK Affiliate Program - Notion Database Structure

This document provides the complete structure for tracking affiliates using Notion. You can also adapt this structure for Airtable (see section at the end).

---

## Database 1: Affiliates

### Purpose
Master database for tracking all affiliate partners, their status, and performance metrics.

### Database Type
Table (default view), with additional views: Board (by Status), Calendar (by Next Touchpoint), Gallery (by Platform)

### Properties

#### Basic Information
1. **Name** (Title)
   - Type: Title
   - Description: Full name of the affiliate

2. **Handle** (Text)
   - Type: Text
   - Description: Primary social media handle (e.g., @username)
   - Example: @devbuilder, @techcreator

3. **Email** (Email)
   - Type: Email
   - Description: Contact email address

4. **Primary Platform** (Select)
   - Type: Select
   - Options:
     - YouTube
     - Instagram
     - Twitter/X
     - TikTok
     - Blog
     - LinkedIn
     - Other
   - Description: Main platform where affiliate promotes

5. **Audience Size** (Number)
   - Type: Number
   - Format: Number with commas
   - Description: Total followers/subscribers on primary platform

#### Affiliate Status
6. **Status** (Select)
   - Type: Select
   - Options:
     - 🟡 Lead (interested but not yet applied)
     - 🔵 Invited (application sent, awaiting acceptance)
     - 🟢 Active (accepted, currently promoting)
     - 🟠 Paused (temporarily inactive)
     - ⚫ Inactive (churned or removed)
   - Description: Current status in affiliate lifecycle

7. **Tier** (Select)
   - Type: Select
   - Options:
     - Starter (20%)
     - Builder (25%)
     - Pro (28%)
     - Elite (30%)
   - Description: Commission tier based on monthly performance

#### Affiliate Links & Codes
8. **Affiliate Link** (URL)
   - Type: URL
   - Description: Personal tracking link (e.g., onestack.com/af/username)

9. **Discount Code** (Text)
   - Type: Text
   - Description: Personal discount code for audience
   - Example: DEVJOHN, STACKSARAH

10. **UTM Campaign** (Text)
    - Type: Text
    - Description: Primary UTM campaign identifier
    - Example: affiliate_q1_2026

#### Important Dates
11. **Onboarded Date** (Date)
    - Type: Date
    - Description: Date when affiliate officially joined program

12. **Last Contact** (Date)
    - Type: Date
    - Description: Most recent communication date (email, call, DM)

13. **Next Touchpoint** (Date)
    - Type: Date
    - Description: Scheduled next check-in date

#### Performance Metrics (Current Month)
14. **Month Clicks** (Number)
    - Type: Number
    - Description: Total clicks on affiliate link this month
    - Note: Can be a rollup from Performance database

15. **Month Orders** (Number)
    - Type: Number
    - Description: Number of orders this month

16. **Month Revenue** (Number)
    - Type: Number
    - Format: Dollar (USD)
    - Description: Total revenue generated this month

17. **Month Commission** (Number)
    - Type: Number
    - Format: Dollar (USD)
    - Description: Commission earned this month

#### Lifetime Metrics
18. **Total Revenue** (Number)
    - Type: Number
    - Format: Dollar (USD)
    - Description: All-time revenue generated

19. **Total Commission Paid** (Number)
    - Type: Number
    - Format: Dollar (USD)
    - Description: Total commission paid to date

#### Relationship & Notes
20. **Performance Records** (Relation)
    - Type: Relation
    - Related to: Performance database
    - Description: Links to all performance records for this affiliate

21. **Notes** (Text)
    - Type: Text (Long text)
    - Description: Internal notes, conversation history, special arrangements

22. **Kit Shipped** (Checkbox)
    - Type: Checkbox
    - Description: Whether starter kit has been sent

23. **Sample Request** (Text)
    - Type: Text
    - Description: Notes on any sample or additional kit requests

---

## Database 2: Performance

### Purpose
Track detailed performance metrics by date and channel for each affiliate.

### Database Type
Table with filters and views by date range, affiliate, and channel.

### Properties

1. **Record ID** (Title)
   - Type: Title
   - Auto-generate: "[Affiliate Name] - [Date]"
   - Example: "John Dev - Feb 2026"

2. **Affiliate** (Relation)
   - Type: Relation
   - Related to: Affiliates database
   - Description: Links to affiliate record

3. **Date** (Date)
   - Type: Date
   - Description: Performance period (typically start of month for monthly reports)

4. **Period Type** (Select)
   - Type: Select
   - Options:
     - Daily
     - Weekly
     - Monthly
     - Quarterly
   - Description: Type of reporting period

5. **Channel** (Multi-select)
   - Type: Multi-select
   - Options:
     - Instagram
     - YouTube
     - Twitter/X
     - TikTok
     - Blog
     - LinkedIn
     - Email
     - Other
   - Description: Platforms where traffic originated

#### Traffic Metrics
6. **Clicks** (Number)
   - Type: Number
   - Description: Total clicks on affiliate link

7. **Unique Visitors** (Number)
   - Type: Number
   - Description: Unique visitors from affiliate link

#### Conversion Metrics
8. **Orders** (Number)
   - Type: Number
   - Description: Number of completed orders

9. **Conversion Rate** (Formula)
   - Type: Formula
   - Formula: `if(prop("Clicks") > 0, prop("Orders") / prop("Clicks") * 100, 0)`
   - Format: Percent
   - Description: Auto-calculated conversion rate

#### Revenue Metrics
10. **Revenue** (Number)
    - Type: Number
    - Format: Dollar (USD)
    - Description: Total revenue from orders

11. **Average Order Value** (Formula)
    - Type: Formula
    - Formula: `if(prop("Orders") > 0, prop("Revenue") / prop("Orders"), 0)`
    - Format: Dollar
    - Description: Auto-calculated average order value

12. **Commission Rate** (Number)
    - Type: Number
    - Format: Percent
    - Description: Commission rate applied for this period

13. **Commission** (Formula)
    - Type: Formula
    - Formula: `prop("Revenue") * prop("Commission Rate") / 100`
    - Format: Dollar
    - Description: Auto-calculated commission amount

#### Content Tracking
14. **Top Content URL** (URL)
    - Type: URL
    - Description: Link to best-performing content piece

15. **Content Type** (Select)
    - Type: Select
    - Options:
     - Desk Setup
     - Unboxing
     - Review
     - Tutorial
     - Story/Reel
     - Twitter Thread
     - Blog Post
     - Video
   - Description: Type of content that drove traffic

16. **Notes** (Text)
    - Type: Text (Long text)
    - Description: Performance observations, insights, anomalies

---

## Database 3: Payouts (Optional)

### Purpose
Track commission payouts to affiliates.

### Properties

1. **Payout ID** (Title)
   - Type: Title
   - Auto-generate: "Payout - [Affiliate] - [Period]"
   - Example: "Payout - John Dev - Jan 2026"

2. **Affiliate** (Relation)
   - Type: Relation
   - Related to: Affiliates database

3. **Period** (Date)
   - Type: Date
   - Description: Month/period being paid for

4. **Amount** (Number)
   - Type: Number
   - Format: Dollar (USD)
   - Description: Payout amount

5. **Method** (Select)
   - Type: Select
   - Options:
     - PayPal
     - Bank Transfer
     - Venmo
     - Check
     - Store Credit
   - Description: Payment method used

6. **Paid?** (Checkbox)
   - Type: Checkbox
   - Description: Whether payout has been processed

7. **Payment Date** (Date)
   - Type: Date
   - Description: Actual date payment was sent

8. **Invoice/Receipt** (Files)
   - Type: Files & media
   - Description: Upload invoice or receipt

9. **Notes** (Text)
   - Type: Text
   - Description: Any payout-related notes

---

## Suggested Views

### For Affiliates Database

#### 1. Active Dashboard (Table)
- Filter: Status = "Active"
- Sort: By Month Revenue (descending)
- Group: By Tier
- Show: Name, Handle, Platform, Month Revenue, Month Commission, Next Touchpoint

#### 2. Status Board (Board)
- Group by: Status
- Card preview: Name, Platform, Audience Size, Last Contact
- Useful for: Managing affiliate pipeline

#### 3. Upcoming Touchpoints (Calendar)
- Calendar by: Next Touchpoint
- Filter: Status = "Active" OR Status = "Invited"
- Useful for: Planning outreach

#### 4. Top Performers (Gallery)
- Filter: Status = "Active"
- Sort: By Total Revenue (descending)
- Card cover: Profile photo (if added)
- Card properties: Total Revenue, Total Commission, Tier

### For Performance Database

#### 1. Monthly Report (Table)
- Filter: Period Type = "Monthly"
- Sort: Date (descending)
- Group: By Affiliate
- Show: All metrics

#### 2. Best Content (Gallery)
- Sort: By Orders (descending)
- Filter: Orders > 0
- Card cover: Content Type
- Card properties: Orders, Revenue, Top Content URL

---

## Importing Data

### From ONE_STACK_UTM_Tracking_Master.csv
If you have a UTM tracking CSV, you can import it as a separate database and link it to Performance:

1. Create new database: "Campaigns" or "Links"
2. Import CSV with columns:
   - utm_source
   - utm_medium
   - utm_campaign
   - utm_term
   - utm_content
3. Add relation to Affiliates database
4. Link UTM campaigns to affiliate records

---

## Formulas Reference

### In Affiliates Database

**Commission Tier Progress** (Formula):
```
if(prop("Month Revenue") >= 5000, "Elite ✅", 
  if(prop("Month Revenue") >= 2000, "Pro ✅", 
    if(prop("Month Revenue") >= 500, "Builder ✅", 
      "Starter (" + format(round((prop("Month Revenue") / 500) * 100)) + "% to Builder)"
    )
  )
)
```

**Days Since Last Contact** (Formula):
```
if(empty(prop("Last Contact")), 
  "Never contacted", 
  format(dateBetween(now(), prop("Last Contact"), "days")) + " days ago"
)
```

### In Performance Database

**Performance Score** (Formula) - Combines multiple metrics:
```
(prop("Orders") * 10) + (prop("Clicks") * 0.1) + (prop("Revenue") / 10)
```

---

## Automation Ideas (if using Notion API or Zapier)

1. **New Affiliate Welcome**
   - Trigger: New record added with Status = "Invited"
   - Action: Send welcome email, create onboarding tasks

2. **Monthly Performance Email**
   - Trigger: Every 1st of month
   - Action: Generate and email performance report to each active affiliate

3. **Touchpoint Reminder**
   - Trigger: Next Touchpoint date is today
   - Action: Send Slack/email reminder to team

4. **Tier Upgrade Notification**
   - Trigger: Month Revenue crosses tier threshold
   - Action: Update Tier, send congratulations email

---

## Tips for Use

1. **Weekly Review**: Set aside time each week to update Last Contact dates and add Notes
2. **Monthly Process**: 
   - Export Performance data
   - Calculate commissions
   - Create Payout records
   - Schedule next touchpoints
3. **Keep It Current**: Outdated data is worse than no data—make updates a habit
4. **Use Templates**: Create page templates for onboarding checklists, strategy call notes, etc.

---

# Airtable Base Structure (Alternative to Notion)

If using Airtable instead of Notion, the structure is nearly identical with these adaptations:

## Table 1: Affiliates
- Same fields as Notion "Affiliates" database
- Use Airtable's native field types:
  - Single Line Text → Text
  - Email → Email
  - Single Select → Single select
  - Number → Number
  - Link to another record → Linked record (to Performance table)

## Table 2: Performance  
- Same fields as Notion "Performance" database
- Formula fields use Airtable formula syntax (similar to Excel)

## Table 3: Links / Campaigns
- Import ONE_STACK_UTM_Tracking_Master.csv directly
- Fields: utm_source, utm_medium, utm_campaign, utm_term, utm_content, short_url
- Link to Affiliates table via affiliate_id or handle

## Table 4: Payouts
- Same as Notion structure above

## Airtable Advantages
- Better CSV import handling
- More robust API for integrations
- Better collaboration for teams
- Native forms for affiliate applications

## Import Steps for Airtable
1. Create new base: "ONE STACK Affiliates"
2. Import CSV as "Links" table
3. Create other tables manually or duplicate from template
4. Set up linked records between tables
5. Create views and filters as needed
6. Set up automations (paid plan feature)

---

## Template Checklist

When setting up either Notion or Airtable:
- [ ] Create all databases/tables
- [ ] Set up field types and options correctly
- [ ] Create relations/linked records between databases
- [ ] Build suggested views
- [ ] Test formulas and calculations
- [ ] Import any existing data
- [ ] Create automations (if available)
- [ ] Set up team permissions
- [ ] Document any custom processes
- [ ] Train team on how to use system
