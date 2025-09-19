# SurveyAid Website

A professional, modern React website for marketing the SurveyAid mobile app. Built with React, React Router, and modern CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **iPhone Mockups**: Professional iPhone frames around app screenshots for a polished look
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for fast development and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Pages

1. **Home**: Hero section with app showcase and key features
2. **Features**: Detailed feature breakdown with pricing plans
3. **About**: Company mission, story, team, and values
4. **Contact**: Contact form and FAQ section

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the NewWebsite directory:
   ```bash
   cd NewWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
NewWebsite/
├── public/
│   └── images/           # App screenshots and assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Site footer
│   │   └── PhoneFrame.jsx # iPhone mockup component
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Homepage
│   │   ├── Features.jsx # Features page
│   │   ├── About.jsx    # About page
│   │   └── Contact.jsx  # Contact page
│   ├── styles/          # CSS files
│   │   ├── index.css    # Global styles
│   │   └── App.css      # App-level styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Key Components

### PhoneFrame Component

The `PhoneFrame` component creates professional iPhone mockups around your app screenshots:

```jsx
<PhoneFrame 
  image="/images/your-screenshot.png" 
  alt="Description" 
  size="medium" // small, medium, or large
/>
```

### Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## Customization

### Colors

The main color scheme uses CSS custom properties. Key colors:
- Primary: `#667eea` (blue)
- Secondary: `#764ba2` (purple)
- Dark: `#2c3e50`
- Light backgrounds: `#f8f9ff`

### Fonts

Uses Inter font family from Google Fonts for a modern, professional look.

### Images

All app screenshots are stored in `public/images/` and automatically wrapped in iPhone frames for a professional appearance.

## Deployment

This React app can be deployed to any static hosting service:

1. **Netlify**: Connect your GitHub repository for automatic deployments
2. **Vercel**: Import your project for seamless deployment
3. **GitHub Pages**: Use the built files from the `dist` directory
4. **Traditional hosting**: Upload the `dist` directory contents to your web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images and assets
- CSS animations with hardware acceleration
- Minimal JavaScript bundle
- Fast loading times with Vite

## Contact

For questions about this website or the SurveyAid app, please use the contact form on the website or reach out through the provided Google Form link.
