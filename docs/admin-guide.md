---
sidebar_position: 1
---

# Admin Guide

This guide covers all administrative functions in GenFeed.ai, including team management, seat allocation, permissions, and account settings.

## Admin Dashboard Overview

As an admin, you have access to the Admin Dashboard where you can:
- Manage team members and seats
- Set permissions and access levels
- Monitor usage and billing
- Configure account settings
- View analytics and reports

Access the Admin Dashboard by clicking on **Settings** → **Admin Dashboard** in the main navigation.

## Managing Team Seats

### Adding New Seats

1. Navigate to **Admin Dashboard** → **Team Management**
2. Click **"Add New Seat"** button
3. Enter the team member's information:
   - Email address
   - Full name
   - Role (Admin, Editor, Viewer)
   - Department (optional)
4. Select permissions level
5. Click **"Send Invitation"**

The new team member will receive an email invitation to join your GenFeed.ai workspace.

### Seat Allocation Limits

Your seat limits depend on your subscription plan:
- **Starter**: 1 seat
- **Professional**: 5 seats
- **Business**: 20 seats
- **Enterprise**: Unlimited seats

To add more seats beyond your plan limit, you can:
- Upgrade your plan
- Purchase additional seats ($10/seat/month)

### Removing Team Members

1. Go to **Team Management**
2. Find the team member in the list
3. Click the **"..."** menu → **"Remove Access"**
4. Confirm the removal

**Note**: Removed members lose immediate access, but their generated content remains in your workspace.

## User Roles and Permissions

### Role Types

**Admin**
- Full access to all features
- Can manage team members
- Access billing and invoices
- Configure workspace settings
- View all analytics

**Editor**
- Create and edit content
- Use all AI models
- Access templates
- Export content
- View own usage stats

**Viewer**
- Read-only access
- View generated content
- Export permitted content
- Cannot create new content
- Limited analytics access

### Setting Permissions

1. Navigate to **Team Management**
2. Click on a team member's name
3. Select **"Edit Permissions"**
4. Choose from permission options:
   - Content creation
   - Template management
   - Export capabilities
   - Model access
   - Analytics viewing
5. Save changes

### Custom Permission Groups

For Business and Enterprise plans:
1. Go to **Settings** → **Permission Groups**
2. Click **"Create New Group"**
3. Name the group and set permissions
4. Assign team members to the group

## Account Settings

### Workspace Configuration

**Workspace Name and Branding**
1. Go to **Settings** → **Workspace**
2. Update workspace name
3. Upload logo (PNG or SVG, max 2MB)
4. Set brand colors

**Default Settings**
- Default AI model
- Output format preferences
- Language settings
- Time zone

### Security Settings

**Two-Factor Authentication (2FA)**
1. Navigate to **Settings** → **Security**
2. Click **"Enable 2FA"**
3. Scan QR code with authenticator app
4. Enter verification code
5. Save backup codes

**Password Policies**
- Minimum 12 characters
- Require special characters
- Force password rotation (Enterprise only)
- Session timeout settings

**IP Whitelisting** (Enterprise only)
1. Go to **Security** → **IP Whitelist**
2. Add allowed IP addresses or ranges
3. Enable whitelist enforcement

### Integration Management

**API Keys**
1. Navigate to **Settings** → **API**
2. Click **"Generate New Key"**
3. Set key permissions and expiration
4. Copy and secure the key

**Webhooks**
1. Go to **Integrations** → **Webhooks**
2. Add webhook endpoint
3. Select trigger events
4. Test connection

## Usage Monitoring

### Team Analytics Dashboard

View comprehensive usage data:
- Credits consumed by user
- Most used AI models
- Content generation trends
- Peak usage times
- Department-wise usage

### Setting Usage Alerts

1. Go to **Settings** → **Alerts**
2. Configure alert thresholds:
   - 50% credits used
   - 75% credits used
   - 90% credits used
3. Select notification recipients
4. Choose notification method (email/in-app)

### Generating Reports

1. Navigate to **Analytics** → **Reports**
2. Select report type:
   - Usage Summary
   - User Activity
   - Content Performance
   - Cost Analysis
3. Choose date range
4. Export as PDF or CSV

## Billing Management

### Viewing Invoices

1. Go to **Billing** → **Invoices**
2. View or download past invoices
3. Set up automatic invoice forwarding

### Updating Payment Methods

1. Navigate to **Billing** → **Payment Methods**
2. Add or update credit card
3. Set as default payment method
4. Remove old payment methods

### Managing Subscriptions

- View current plan details
- Upgrade or downgrade plans
- Add or remove seats
- Cancel subscription

## Best Practices for Admins

### Team Onboarding

1. **Create an onboarding checklist**
   - Account setup
   - Permission assignment
   - Training resources
   - First tasks

2. **Set up templates**
   - Create team-specific templates
   - Share prompt libraries
   - Document brand guidelines

3. **Schedule training sessions**
   - Basic platform usage
   - Advanced features
   - Best practices

### Security Management

1. **Regular audits**
   - Review user access monthly
   - Check for inactive accounts
   - Verify permission levels

2. **Access control**
   - Use principle of least privilege
   - Regular password updates
   - Monitor API usage

3. **Data governance**
   - Set content retention policies
   - Regular backups
   - Compliance monitoring

### Cost Optimization

1. **Monitor usage patterns**
   - Identify heavy users
   - Track model preferences
   - Optimize credit allocation

2. **Set budgets**
   - Department-wise limits
   - User-specific quotas
   - Alert thresholds

3. **Regular reviews**
   - Monthly usage analysis
   - Plan optimization
   - Seat utilization

## Troubleshooting Common Issues

### User Cannot Access Account
1. Verify invitation was sent
2. Check spam folders
3. Resend invitation if needed
4. Verify email address

### Permission Conflicts
1. Review role assignments
2. Check custom permissions
3. Clear cache and reload
4. Contact support if persists

### Billing Issues
1. Verify payment method
2. Check credit limit
3. Review recent charges
4. Update billing information

## Support and Resources

- **Help Center**: help.genfeed.ai
- **Admin Support**: admin-support@genfeed.ai
- **Emergency**: +1-800-GENFEED (Enterprise only)
- **Training Videos**: genfeed.ai/admin-training

For additional assistance, use the in-app chat or submit a support ticket through the Admin Dashboard.