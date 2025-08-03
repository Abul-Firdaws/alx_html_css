# CSS Advanced - SmileSchool

## 📋 Project Overview

This project is the continuation of the **HTML Advanced** project, focusing on implementing CSS styling and responsive design for a SmileSchool website. The goal is to transform the basic HTML structure into a visually appealing and fully functional webpage that matches the provided Figma design.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Implement advanced CSS styling techniques
- Create responsive web designs that work across different devices
- Use CSS Flexbox and Grid for layout management
- Apply modern CSS properties for visual effects
- Optimize CSS for performance and maintainability
- Follow design specifications from Figma mockups
- Implement proper CSS architecture and organization

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling and animations
- **Font Awesome** - Icon library for social media and UI icons
- **Google Fonts** - Custom typography
- **Figma** - Design reference and asset extraction

## 📁 Project Structure

```
css_advanced/
├── README.md
├── index.html
├── styles.css
├── images/
│   ├── 1 (3).png
│   ├── 6.png
│   ├── 7.png
│   ├── 8.png
│   ├── Bitmap.png
│   ├── Bitmap (1).png
│   ├── Bitmap (2).png
│   ├── Bitmap (3).png
│   ├── Bitmap (4).png
│   └── smile.svg
└── assets/
    └── fonts/
```

## 🎨 Design Reference

The design specifications are available on Figma:
- **Main Design**: [Page in Figma](#)
- **Design File**: [fig file](#)
- **Assets**: [Download images](#)

> **Note**: Create a Figma account and "Duplicate to your Drafts" to access all design details.

## ✨ Features Implemented

### 1. **Responsive Navigation**
- Mobile-friendly hamburger menu
- Smooth hover transitions
- Brand logo integration

### 2. **Hero Section**
- Eye-catching call-to-action
- Professional instructor showcase
- Engaging typography and spacing

### 3. **Tutorial Cards**
- Interactive hover effects
- Star rating system
- Instructor attribution
- Duration indicators

### 4. **Testimonial Section**
- Quote styling with proper attribution
- Image and text alignment
- Professional presentation

### 5. **FAQ Section**
- Collapsible question format
- Clean, readable typography
- Intuitive user experience

### 6. **Footer**
- Social media integration
- Brand consistency
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML and CSS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/alx_html_css.git
   cd alx_html_css/css_advanced
   ```

2. **Download required images**
   - Download images from the provided link
   - Place them in the `images/` directory

3. **Open in browser**
   ```bash
   # Open index.html in your preferred browser
   open index.html
   # or
   python -m http.server 8000  # For local development server
   ```

## 💻 Development

### CSS Architecture
The project follows a modular CSS approach:

- **Reset & Base Styles** - Normalize browser defaults
- **Typography** - Font definitions and text styling
- **Layout** - Flexbox and Grid implementations
- **Components** - Reusable UI components
- **Utilities** - Helper classes for spacing, colors, etc.
- **Responsive** - Media queries for different screen sizes

### Key CSS Techniques Used

1. **Flexbox Layout**
   ```css
   .container {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ```

2. **CSS Grid**
   ```css
   .tutorial-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 2rem;
   }
   ```

3. **Custom Properties (CSS Variables)**
   ```css
   :root {
     --primary-color: #C271FF;
     --secondary-color: #071629;
     --accent-color: #FF6565;
   }
   ```

4. **Responsive Design**
   ```css
   @media (max-width: 768px) {
     .hero-section {
       flex-direction: column;
       text-align: center;
     }
   }

## 🎯 Performance Optimizations

- Optimized image formats and sizes
- Minified CSS for production
- Efficient use of CSS selectors
- Reduced HTTP requests through CSS sprites
- Progressive enhancement approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- ALX School for the project framework
- Figma design team for the beautiful mockups
- Font Awesome for the icon library
- The web development community for inspiration and best practices