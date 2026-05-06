# Full-Stack Developer Portfolio

A premium, interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- **Modern UI/UX**: Premium aesthetics with glassmorphism and smooth animations.
- **Interactive Skills Section**: Dynamic skill chips with hover effects.
- **Projects Showcase**: Section to highlight your work.
- **Responsive Design**: Optimized for desktop experiences (with mobile warning).
- **Vercel Analytics & Speed Insights**: Integrated for performance monitoring.

## Requirements

### Local Development
- **Node.js**: v18 or later (v24 recommended)
- **npm**: v9 or later

### Dependencies
All dependencies are listed in `package.json`. Major libraries used:
- `next`: React Framework
- `framer-motion`: For animations
- `lucide-react`: For icons
- `tailwindcss`: For styling
- `@react-three/fiber` & `three`: For 3D elements (Spline integration)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment

### Vercel
1. Push this repository to GitHub.
2. Link the repository to a new project in Vercel.
3. Vercel will automatically detect the Next.js framework and deploy using the `next build` command.
