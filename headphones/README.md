# Headphones Responsive Webpage

## Overview

This project implements a fully responsive, accessible, and visually consistent webpage for a headphones product site, developed purely with HTML and CSS — without any external CSS frameworks or JavaScript. The webpage adapts seamlessly across mobile, tablet, and desktop screen sizes, maintaining the design fidelity as provided in the Figma files.

## Features

- **Responsive Design:**  
  The layout adjusts fluidly using CSS media queries to match three device categories:
  - Mobile (screen width ≤ 480px)
  - Tablet (screen width between 481px and 768px)
  - Desktop (screen width > 768px)

- **Accessibility:**  
  Semantic HTML tags and ARIA roles have been employed to ensure content is accessible to screen readers and assistive technologies.

- **Custom Fonts:**  
  The design uses Source Sans Pro and Spin Cycle OT fonts for typographic consistency, sourced locally without relying on CDN.

- **Design Fidelity:**  
  All visual elements, colors, spacings, and interactions such as hover and active states strictly follow the provided Figma design specifications:
  - Link hover/active color: `#FF6565`
  - Button hover/active opacity: `0.9`
  - Maximum content width constrained to 1000px and centered.

- **Clean and Maintainable Code:**  
  The CSS is organized with comments and structured for scalability, ensuring clarity and easy maintenance.

## Project Structure

headphones/
│
├── index.html # Main webpage file
├── styles.css # CSS styles for responsiveness and design
├── fonts/ # Local font files (Source Sans Pro & Spin Cycle OT)
└── README.md # Project documentation

**Development Notes**
No JavaScript was used in this project, emphasizing pure HTML and CSS capabilities.

Media queries were crafted mobile-first to optimize performance and progressive enhancement.

Float values from the design were rounded where appropriate to ensure pixel-perfect layout without rendering inconsistencies.

The maximum content width of 1000px ensures readability on large screens while keeping the layout centered.

Interactive elements such as links and buttons respond visually to user actions, enhancing UX without scripts.

**Acknowledgments**
Special thanks to the ALX curriculum and Figma community for providing comprehensive design assets and learning materials that inspired this project.
