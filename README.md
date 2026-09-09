# HeyFriends! - YouTube Growth Platform

🎬 **Unlock effortless YouTube growth with your own world-class content team.**

## 🚀 Project Overview

HeyFriends! is a high-converting platform that connects YouTube creators with dedicated content teams for scripting, editing, and thumbnail design. Built with:

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## 📋 Core Features

### 1. **High-Converting Landing Page**
- Bold value proposition: "Unlock effortless YouTube growth"
- Dynamic pricing section with 80% launch discount
- Interactive before/after portfolio showcase
- Time calculator (hours saved per month)
- Countdown timer for limited-time offer

### 2. **Frictionless Asset & Video Review Portal**
- Drag-and-drop video uploader
- Video status tracking (Scripting → Editing → Done)
- Frame-by-frame review comments
- Real-time team collaboration

### 3. **Seamless Onboarding & Content Strategy Hub**
- Automated style intake form
- Collaborative 30-day content calendar
- Team communication dashboard
- Project-specific chat threads

### 4. **Centralized Team Communication**
- Team member profiles
- Contextual messaging tied to video projects
- Role-based updates (writer, editor, designer)

### 5. **"Proof of Value" Analytics**
- Simplified metrics dashboard
- Click-Through Rate (CTR) improvements
- View count gains
- Time saved tracking

## 📊 Pricing Structure

- **Standard Plan**: $1,500/month
  - 4 videos/month
  - Professional scripting
  - Full editing & color grading
  - Custom thumbnails & titles
  - Content strategy consultation

- **Launch Offer** (80% Off): $300/month first month
  - Everything in Standard Plan
  - Priority onboarding
  - Dedicated account manager
  - 30-day guarantee

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/alvintheman703-cell/heyfriends-youtube-growth.git
cd heyfriends-youtube-growth

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── pages/
│   ├── index.tsx           # Landing page
│   ├── dashboard.tsx       # Creator hub
│   └── _app.tsx
├── components/
│   ├── Navigation.tsx      # Top nav
│   ├── Hero.tsx            # Main hero section
│   ├── PricingHero.tsx     # Pricing with countdown
│   ├── Portfolio.tsx       # Before/after showcase
│   ├── TimeCalculator.tsx  # Hours saved slider
│   ├── CTA.tsx             # Call-to-action
│   ├── Footer.tsx          # Footer
│   └── dashboard/
│       ├── Sidebar.tsx     # Dashboard nav
│       ├── TeamDashboard.tsx # Team communication
│       ├── ContentCalendar.tsx # Video calendar
│       └── VideoUploader.tsx   # Upload portal
├── styles/
│   └── globals.css         # Global styles
├── tailwind.config.js      # Tailwind config
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #1a3a3a (Dark Teal)
- **Secondary**: #ffd700 (Gold Accent)
- **Success**: #2ecc71 (Green)
- **Light**: #f5f5f5

### Typography
- Font: Inter
- Sizes: 5xl (hero), 3xl (section), 2xl (subsection), base (body)

## 🔌 API Integration Points

- Stripe for subscription management
- AWS S3 for video upload storage
- Frame.io API for video review collaboration
- Sendgrid for email notifications

## 📈 Next Steps

- [ ] Integrate Stripe checkout flow
- [ ] Build video upload backend (AWS S3 + Lambda)
- [ ] Implement Frame.io integration for video reviews
- [ ] Create admin dashboard for team management
- [ ] Add email notification system
- [ ] Deploy to production

## 📝 License

MIT

## 💬 Support

For questions, contact: support@heyfriends.io