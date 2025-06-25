# React + Vite + Tailwind CSS

A modern React application built with Vite and styled with Tailwind CSS.

## 🚀 Tech Stack

- **React** v19.1.0 - The latest version of React
- **Vite** v6.3.5 - Fast build tool and development server
- **Tailwind CSS** v4.1.10 - Latest utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

The project has already been set up with all dependencies installed. If you need to reinstall:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 Tailwind CSS Configuration

Tailwind CSS is configured with:

- **Config file**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`
- **Content paths**: Includes all HTML, JS, TS, JSX, and TSX files

The main CSS file (`src/index.css`) includes the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ✨ Features

- ⚡ Lightning fast development with Vite HMR
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔧 Modern React with hooks
- 📱 Responsive design
- 🌈 Gradient backgrounds and modern styling
- ✨ Smooth animations and transitions

## 📁 Project Structure

```
react-vite-tailwind/
├── src/
│   ├── App.jsx          # Main App component with Tailwind styling
│   ├── index.css        # Global styles with Tailwind directives
│   └── main.jsx         # React entry point
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

Enjoy building with React, Vite, and Tailwind CSS! 🎉
