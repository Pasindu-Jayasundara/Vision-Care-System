# Vision Care System

A modern web application for managing vision care services and patient information using React, GraphQL, and Supabase.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup Steps](#setup-steps)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Vision Care System is a comprehensive web-based platform designed to manage vision care services, patient records, and appointments. The application leverages modern technologies to provide a responsive and user-friendly experience.

## Tech Stack

### Frontend
- **React 19.2** - UI library for building interactive components
- **Vite 7.2** - Lightning-fast build tool and development server
- **TailwindCSS 4.1** - Utility-first CSS framework for styling
- **Ant Design (antd) 6.2** - UI component library

### Backend & Services
- **Supabase** - Open-source Firebase alternative for database and authentication
- **GraphQL** - Query language for APIs
- **Apollo Client 4.1** - GraphQL client for managing remote data

### Routing
- **React Router 7.13** - Client-side routing

### Development Tools
- **ESLint 9.39** - Code quality and linting
- **TypeScript** - Type safety for React components

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **Supabase Account** - [Create Account](https://supabase.com/)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Vision-Care-System.git
cd Vision-Care-System
```

### Step 2: Install Dependencies

```bash
npm install
```

Or if you prefer using yarn:

```bash
yarn install
```

## Setup Steps

### Step 1: Environment Configuration

1. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

2. Configure your Supabase credentials in `.env.local`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GRAPHQL_ENDPOINT=your_graphql_endpoint
```

### Step 2: Supabase Configuration

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or use an existing one
3. Navigate to **Settings > API** to get your:
   - Project URL
   - Public API Key (anon key)
4. Set up your database schema and tables as needed
5. Enable authentication methods (Email/Password, OAuth, etc.)

### Step 3: GraphQL Setup

1. Configure your GraphQL endpoint in the Supabase dashboard or use a third-party GraphQL service
2. Update `src/client/supabase-grphql-apollo.client.js` with your endpoint
3. Set up Apollo Client configuration for your GraphQL queries and mutations

### Step 4: Verify Installation

```bash
npm run lint
```

This will check for any linting errors in your code.

## Configuration

### Tailwind CSS

TailwindCSS is configured via the Vite plugin. Customize styles in your component files or create a `tailwind.config.js` file if needed:

```javascript
// tailwind.config.js (if needed)
export default {
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### ESLint

ESLint configuration is in `eslint.config.js`. Adjust rules as needed for your project standards.

### Vite Configuration

The Vite configuration is in `vite.config.js` and includes React and TailwindCSS plugins.

## Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Vision-Care-System/
├── public/                    # Static assets
│   └── sample.txt
├── src/
│   ├── components/            # Reusable React components
│   ├── context/               # React Context API
│   │   └── Auth.context.tsx   # Authentication context
│   ├── pages/                 # Page components
│   │   ├── Dashboard.page.jsx
│   │   ├── ForgetPassword.page.jsx
│   │   └── Login.page.jsx
│   ├── const/                 # Constants
│   │   └── text.js
│   ├── client/                # API clients
│   │   └── supabase-grphql-apollo.client.js
│   ├── assets/                # Images and media
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Application entry point
│   └── main.css               # Global styles
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

## Available Scripts

### `npm run dev`
Starts the development server with hot module replacement. Access at `http://localhost:5173`.

### `npm run build`
Creates an optimized production build in the `dist/` directory.

### `npm run preview`
Previews the production build locally before deployment.

### `npm run lint`
Runs ESLint to check code quality and consistency.

## Development Guidelines

### Code Style

- Follow the ESLint configuration specified in `eslint.config.js`
- Use meaningful variable and function names
- Keep components focused and single-responsibility
- Use functional components with React hooks

### Component Structure

- Store reusable components in `src/components/`
- Page-level components should be in `src/pages/`
- Keep business logic in context providers or custom hooks

### State Management

- Use React Context API for global state (see `src/context/Auth.context.tsx`)
- Use Apollo Client for GraphQL state management
- Use local component state for UI-specific state

### Styling

- Utilize TailwindCSS utility classes for styling
- Avoid inline styles when possible
- Use Ant Design components for consistent UI elements

### Git Workflow

1. Create a new branch for each feature: `git checkout -b feature/your-feature-name`
2. Commit changes with clear messages: `git commit -m "Add feature description"`
3. Push to the repository: `git push origin feature/your-feature-name`
4. Create a Pull Request with a detailed description

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors

Ensure all dependencies are installed:

```bash
npm install
```

Clear the node_modules and reinstall if issues persist:

```bash
rm -r node_modules package-lock.json
npm install
```

### Supabase Connection Issues

- Verify your `.env.local` credentials
- Check that your Supabase project is active
- Ensure your API keys have the correct permissions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

---

**Last Updated:** January 2026

Happy coding! 🚀
