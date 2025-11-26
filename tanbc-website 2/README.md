# TanBC Website

Official website for Tanzanians in British Columbia (TanBC) - a non-profit organization dedicated to the welfare and unity of Tanzanians living in British Columbia, Canada.

## About TanBC

Founded in 2011, TanBC brings together over 540 Tanzanian community members across British Columbia. We provide cultural events, professional networking, and community support to help Tanzanians thrive in BC.

**Our Motto:** *Pamoja Tunajenga* (Together We Build)

## Project Structure

```
tanbc-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css        # Base styles and variables
│   │   ├── animations.css  # Animation keyframes and classes
│   │   └── components/
│   │       ├── buttons.css # Button component styles
│   │       ├── cards.css   # Card component styles
│   │       └── nav.css     # Navigation styles
│   ├── js/
│   │   ├── main.js         # Main JavaScript functionality
│   │   └── utils/          # Utility functions (future)
│   └── images/             # Image assets
├── sections/               # Future HTML partials
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## Features

- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Modern UI**: Clean, modern interface with smooth animations
- **Modular CSS**: Organized stylesheets for easy maintenance
- **Accessibility**: Semantic HTML and ARIA-friendly markup
- **Performance**: Optimized assets and smooth scroll animations

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Modern JavaScript for interactivity
- **Lucide Icons**: Beautiful, consistent icon set
- **Google Fonts**: Outfit (sans-serif) and Fraunces (serif)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Running Locally

1. **Clone or download** this repository

2. **Open the project**:
   ```bash
   cd tanbc-website
   ```

3. **Option A: Open directly in browser**:
   - Simply double-click `index.html` to open in your default browser

4. **Option B: Use a local server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then navigate to `http://localhost:8000`

## Development

### File Organization

- **CSS Files**: Each CSS file has a specific purpose:
  - `main.css`: Core styles, variables, and base elements
  - `animations.css`: All keyframe animations and animation classes
  - `components/buttons.css`: Button-specific styles
  - `components/cards.css`: Card component styles
  - `components/nav.css`: Navigation-specific styles

- **JavaScript Files**:
  - `main.js`: Core functionality (smooth scroll, animations, icon initialization)

### Adding New Styles

1. Determine if the style belongs to an existing component
2. If creating a new component, add a new file in `assets/css/components/`
3. Link the new CSS file in `index.html` `<head>` section

### Adding New JavaScript Features

1. Add new functions to `assets/js/main.js`
2. For utility functions, create files in `assets/js/utils/`
3. Import/reference new scripts in `index.html` before the closing `</body>` tag

## Customization

### Colors

The website uses CSS custom properties for theming. Edit these in `assets/css/main.css`:

```css
:root {
  --bg: #FAFAF8;          /* Background */
  --bg-alt: #F5F4F0;      /* Alternate background */
  --fg: #1A1A1A;          /* Foreground text */
  --fg-muted: #6B6B6B;    /* Muted text */
  --accent: #1B7340;      /* Primary accent (green) */
  --accent-light: #E8F5EC;/* Light accent */
  --gold: #C8965D;        /* Gold accent */
  --gold-light: #FDF8F3;  /* Light gold */
  --blue: #2B6CB0;        /* Blue accent */
}
```

### Fonts

The project uses:
- **Outfit**: Modern sans-serif for body text
- **Fraunces**: Elegant serif for headings

To change fonts, update the Google Fonts link in `index.html` and the font-family rules in `assets/css/main.css`.

## Sections

The website includes the following sections:

1. **Hero**: Main banner with CTA and statistics
2. **Trusted By**: Partner organizations
3. **Community Highlights**: Featured events and activities
4. **Services**: What TanBC offers (Family Network, Consular Services, New Arrival Support)
5. **About**: Organization story and mission
6. **Photo Strip**: Animated image carousel
7. **Contact**: Membership signup form
8. **Footer**: Links and social media

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The website is optimized for performance:
- Minimal external dependencies
- CSS and JS separated for better caching
- Lazy loading animations (Intersection Observer)
- Optimized images from Unsplash CDN

## Future Enhancements

- [ ] Add backend integration for contact form
- [ ] Implement event calendar functionality
- [ ] Create member portal/dashboard
- [ ] Add blog/news section
- [ ] Implement multilingual support (English/Swahili)
- [ ] Add photo gallery with lightbox
- [ ] Create mobile navigation menu

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 TanBC. All rights reserved.

## Contact

For questions or support, please contact TanBC through:
- Email: [Add email]
- Instagram: [Add link]
- Facebook: [Add link]

---

Built with ❤️ by the TanBC community
