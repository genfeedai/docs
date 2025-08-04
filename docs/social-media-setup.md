---
sidebar_position: 5
---

# Social Media Setup Guide

Connect your social media accounts to GenFeed.ai and start publishing AI-generated content directly to your platforms.

## Supported Platforms

GenFeed.ai supports publishing to:

- **YouTube** - Videos, Shorts
- **TikTok** - Short-form videos
- **Instagram** - Posts, Reels, Stories
- **Twitter/X** - Posts with media
- **LinkedIn** - Professional content
- **Facebook** - Posts, Videos

## Connecting Your Accounts

### Step 1: Navigate to Accounts

1. Click on **Accounts** in the main navigation
2. Click **Add Account** or the **+** button
3. Select the platform you want to connect

### Step 2: Authorize Access

Each platform has its own authorization process:

#### YouTube
1. Click **Connect YouTube**
2. Sign in with your Google account
3. Grant GenFeed.ai permission to:
   - Upload videos
   - Manage your channel
   - View analytics
4. Select the channel to connect

#### TikTok
1. Click **Connect TikTok**
2. Log in to your TikTok account
3. Authorize GenFeed.ai to post on your behalf
4. Confirm the connection

#### Instagram
1. Click **Connect Instagram**
2. Log in through Facebook (Instagram Business required)
3. Select your Instagram Business account
4. Grant necessary permissions

### Step 3: Configure Account Settings

After connecting, customize each account:

1. **Display Name**: How the account appears in GenFeed.ai
2. **Default Hashtags**: Automatically added to posts
3. **Publishing Schedule**: Set preferred posting times
4. **Content Preferences**: Choose content types to publish

## Publishing Content

### Direct Publishing

1. Generate or select content from your library
2. Click **Publish** or **Share**
3. Select target accounts
4. Customize for each platform:
   - Add platform-specific captions
   - Include relevant hashtags
   - Set visibility options
5. Click **Publish Now** or **Schedule**

### Scheduled Publishing

1. In the publish modal, click **Schedule**
2. Select date and time for each platform
3. GenFeed.ai optimizes timing for engagement
4. View scheduled posts in **Publications**

### Bulk Publishing

1. Select multiple assets in your library
2. Click **Bulk Actions** → **Publish**
3. Choose accounts and scheduling options
4. Set a publishing cadence (e.g., 1 per day)

## Platform-Specific Features

### YouTube

- **Video Optimization**: Automatic thumbnail generation
- **SEO**: Title and description suggestions
- **Monetization**: Ad settings configuration
- **Analytics**: View performance metrics

### TikTok

- **Trends**: Incorporate trending sounds and hashtags
- **Effects**: Apply TikTok-native effects
- **Engagement**: Track views and interactions
- **Best Times**: AI-suggested posting times

### Instagram

- **Multi-Format**: Posts, Reels, Stories, IGTV
- **Shopping**: Tag products (if enabled)
- **Insights**: Detailed engagement analytics
- **Cross-Posting**: Share to Facebook simultaneously

## Content Optimization

### Platform Requirements

Each platform has specific requirements:

| Platform | Video Length | Aspect Ratio | Resolution | File Size |
|----------|-------------|--------------|------------|-----------|
| YouTube | Up to 12 hours | 16:9 | Up to 4K | 128GB |
| YouTube Shorts | 60 seconds | 9:16 | 1080p | 100MB |
| TikTok | 10 minutes | 9:16 | 1080p | 287MB |
| Instagram Reels | 90 seconds | 9:16 | 1080p | 100MB |
| Instagram Posts | - | 1:1, 4:5 | 1080p | 30MB |

### Auto-Formatting

GenFeed.ai automatically:
- Resizes content for each platform
- Adjusts aspect ratios
- Optimizes file sizes
- Maintains quality

### Caption Templates

Create reusable caption templates:

1. Go to **Settings** → **Templates**
2. Create templates with variables:
   - `{title}` - Content title
   - `{description}` - AI-generated description
   - `{hashtags}` - Platform-optimized tags
   - `{link}` - Your website/product link

Example template:
```
🎬 {title}

{description}

🔗 {link}
.
.
.
{hashtags}
```

## Analytics & Insights

### Performance Tracking

Monitor your content performance:

1. Navigate to **Analytics**
2. Filter by:
   - Platform
   - Content type
   - Date range
   - Engagement metrics

### Key Metrics

- **Reach**: Total unique viewers
- **Engagement**: Likes, comments, shares
- **Watch Time**: Video retention
- **Click-Through Rate**: Link clicks
- **Growth**: Follower changes

### Optimization Tips

Based on analytics, GenFeed.ai suggests:
- Best posting times
- High-performing content types
- Trending topics in your niche
- Hashtag effectiveness

## Best Practices

### Content Strategy

1. **Consistency**: Post regularly using scheduling
2. **Quality**: Use high-tier models for hero content
3. **Variety**: Mix content types and styles
4. **Engagement**: Respond to comments promptly

### Platform-Specific Tips

**YouTube**
- Upload in 4K when possible
- Create custom thumbnails
- Use detailed descriptions
- Add chapters for long videos

**TikTok**
- Post during peak hours (6-10am, 7-11pm)
- Use trending sounds
- Keep videos under 30 seconds
- Engage with comments

**Instagram**
- Use all 30 hashtags
- Post Reels for maximum reach
- Share Stories daily
- Use location tags

### Compliance

Ensure your content follows:
- Platform community guidelines
- Copyright regulations
- Disclosure requirements (for sponsored content)
- Local laws and regulations

## Troubleshooting

### Connection Issues

**"Account disconnected"**
- Re-authorize the account
- Check platform permissions
- Update authentication tokens

**"Publishing failed"**
- Verify content meets platform requirements
- Check account standing
- Review error messages

### Common Errors

1. **File too large**: Use compression settings
2. **Invalid format**: Check supported formats
3. **Rate limited**: Reduce posting frequency
4. **Permissions denied**: Re-authenticate account

## Advanced Features

### API Publishing

Developers can publish via API:
```javascript
POST /api/publications
{
  "assetId": "asset_123",
  "accounts": ["youtube_abc", "tiktok_xyz"],
  "schedule": "2024-01-15T10:00:00Z",
  "captions": {
    "youtube": "Full YouTube description...",
    "tiktok": "Short TikTok caption..."
  }
}
```

### Webhook Notifications

Set up webhooks for:
- Publishing success/failure
- Engagement milestones
- Account issues
- Analytics updates

### Multi-Account Management

For agencies and teams:
- Organize accounts by client
- Set team permissions
- Track per-account metrics
- Bulk account operations

## Security & Privacy

### Data Protection

- OAuth 2.0 authentication
- Encrypted token storage
- No password storage
- Regular security audits

### Permissions

GenFeed.ai only requests necessary permissions:
- Post content
- View analytics
- Manage comments (optional)

We never:
- Access private messages
- Change account settings
- Delete existing content
- Share your data

## Getting Help

- **Documentation**: Check platform-specific guides
- **Support**: support@genfeed.ai
- **Status Page**: status.genfeed.ai
- **Community**: Join our Discord

Start growing your social media presence with AI-powered content today!