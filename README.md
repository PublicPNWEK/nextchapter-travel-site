# nextchapter-travel-site

This repository contains a **full-stack web application** for **Next Chapter Travel** - a luxury travel agency specializing in curated travel experiences.

## 🌟 Overview

**Next Chapter Travel** is a comprehensive travel management system featuring:
- 🔐 User authentication and customer accounts
- 📅 Booking management system
- 🎯 Agent dashboard for travel specialists
- 💾 Persistent caching with Redis
- 🔌 Extensible integration framework
- 📱 Responsive design for all devices

## 🏗️ Architecture

### Multi-Site Structure

### Multi-Site Structure

The application consists of two distinct frontend experiences:

- **Root Site (/)** - Cinematic luxury travel website
  - The root directory contains a cinematic travel website with video backgrounds. Pages include:
    - `index.html` – Home page with a full‑screen video hero, introducing journeys of unforgettable luxury.
    - `trips.html` – Destinations page with slow‑motion montage.
    - `about.html` – About page with lifestyle footage.
    - `testimonials.html` – Testimonials page with soft atmospheric video.
    - `contact.html` – Contact page with elegant video and a call to action.
  - `booking.html` – NEW: Interactive booking form with backend integration
  - `account.html` – NEW: Customer account management
  - The `css/style.css` file defines reusable styles for the video hero sections, typography, buttons, and responsive breakpoints.
  - The `videos/` directory contains placeholders for your MP4 files. Replace the `.gitkeep` file with your compressed videos (8–15 seconds, 3–6 MB each) and match the file names referenced in the HTML.
  - The `images/` directory holds fallback images for mobile devices; add your own high‑quality JPGs here.

- **nextchapter/**  
  - This folder contains a separate static site built for a “Next Chapter Travel” Disney‑themed offering.  
  - Pages include:
    - `index.html` – Landing page with an animated starfield hero and trust bar.
    - `wdw.html` – Walt Disney World page.
    - `cruise.html` – Disney Cruise Line page.
    - `aulani.html` – Aulani Resort page.
    - `adventures.html` – Adventures by Disney page.
    - `international.html` – International Parks page.
    - `contact.html` – Contact page with a starfield hero and form.
  - The `css/next-style.css` file contains custom CSS for the starfield effect, navigation, and responsive design.

## How to Use

## 🎨 Customization

### Branding
### Branding
1. Update colors in CSS files (`css/style.css`, `nextchapter/css/next-style.css`)
1. Update colors in CSS files (`css/style.css`, `nextchapter/css/next-style.css`)
2. Replace videos in `videos/` directory with your branded content
3. Update text content in HTML files
4. Modify logo and branding assets

### Environment Configuration
Edit `.env` file to configure:
- Database connection
- JWT secrets
- Email settings
- External API keys

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Check security vulnerabilities
npm audit

# Lint code
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

ISC - See LICENSE file for details

## 🆘 Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check [API Documentation](API_DOCUMENTATION.md)
- Review [Backend Setup Guide](BACKEND_SETUP.md)

## 🔒 Security

For security concerns, please see [SECURITY.md](SECURITY.md).

Never commit:
- `.env` files
- API keys or secrets
- User credentials
- Production database credentials

## 📊 Status

- ✅ Backend infrastructure
- ✅ Authentication system
- ✅ Booking management
- ✅ Agent dashboard
- ✅ Customer accounts
- ✅ Caching system
- 🚧 Email notifications (planned)
- 🚧 Payment integration (planned)
- 🚧 Calendar sync (planned)

---

**Last Updated**: March 2026  
**Version**: 1.0.0  
**Maintained by**: Next Chapter Travel Development Team
