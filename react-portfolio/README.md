# Iozeey Portfolio - React Version

This is a React conversion of the original static HTML portfolio website for Zeeshan Ahmad (Iozeey).

## 🚀 Features

- **Responsive Design**: Fully responsive portfolio website built with React and TypeScript
- **Modern UI**: Clean, professional design with smooth animations
- **Blog Integration**: Blog section with dark mode toggle
- **Project Showcase**: Interactive project gallery with lightbox functionality
- **Skills Visualization**: Interactive skills chart
- **Contact Information**: Easy access to contact details and CV download

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **React Router** for navigation
- **Bootstrap** for responsive layout
- **jQuery** and plugins for animations and interactions
- **Lightbox2** for project image galleries
- **Font Awesome** for icons
- **Owl Carousel** for hero slider

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── HeroSection.tsx      # Hero/banner section
│   ├── AboutSection.tsx     # About me section
│   ├── SkillsSection.tsx    # Skills visualization
│   ├── ServicesSection.tsx  # Services offered
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── CounterSection.tsx   # Statistics counters
│   └── BlogIndex.tsx        # Blog listing component
├── pages/
│   ├── HomePage.tsx         # Main portfolio page
│   └── BlogPage.tsx         # Blog page
├── App.tsx                  # Main app component
└── App.css                  # Global styles
```

## 🎯 Key Features

### Homepage
- Hero section with career introduction
- About section with personal information and interests
- Skills chart showing technical expertise
- Services showcase
- Project portfolio with lightbox galleries
- Statistics counters

### Blog
- Blog index with categories
- Dark mode toggle functionality
- Links to various technical articles and tutorials

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory
```bash
cd react-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Customization

### Adding New Projects
Edit `src/components/ProjectsSection.tsx` and add new project objects to the `projects` array.

### Updating Skills
Modify the `skills` array in `src/components/SkillsSection.tsx`.

### Changing Services
Update the `services` array in `src/components/ServicesSection.tsx`.

### Blog Posts
Blog content is served from the `public/blog/` directory and maintains the original structure.

## 🎨 Styling

The project uses a combination of:
- Original CSS files (imported from `public/css/`)
- Bootstrap for grid system and components
- Custom React component styles

## 📞 Contact

- **Email**: asif.zshan@gmail.com
- **Phone**: +44 7774 261608

## 🔄 Migration Notes

This React version maintains:
- ✅ All original functionality
- ✅ Original design and styling
- ✅ Blog structure and content
- ✅ Project galleries and lightbox functionality
- ✅ Responsive behavior
- ✅ SEO-friendly structure

### Improvements in React Version:
- Better component organization
- TypeScript for type safety
- Modern React patterns and hooks
- Improved maintainability
- Better development experience
