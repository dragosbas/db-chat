# Chat Interface Application

## Overview
This is a modern chat interface application built with React, TypeScript, and Vite. It features a three-column layout with navigation, chat list, and chat details/video preview functionality.

## Project Structure

### Core Components

1. **Main Layout (`ChatLayout.tsx`)**
   - Main container component
   - Manages the three-column layout
   - Handles state for selected chat partners
   - Integrates with message service for data fetching

2. **Navigation (`MainSidebar.tsx`)**
   - Left sidebar navigation
   - Platform connection status
   - Account management options
   - Collapsible menu with smooth transitions

3. **Chat Partners List (`ChatPartnersList.tsx`)**
   - Middle column showing chat conversations
   - Separates favorites/locked chats
   - Displays message previews and interaction metrics
   - Custom scrolling with shadcn/ui ScrollArea

4. **Chat Area (`ChatArea.tsx`)**
   - Main chat interface with message history
   - User profile information in header
   - Message input functionality
   - Video preview widget
   - Subtitles history section

### Services

1. **Message Service (`messageService.ts`)**
   - Handles API communication for messages
   - Fetches chat history and updates
   - Base URL: `dchat-backend.azurewebsites.net/api/v1`

2. **Platform Service (`platformService.ts`)**
   - Manages platform connections
   - Handles platform status updates
   - Mock data implementation for development

3. **Chat Service (`chatService.ts`)**
   - Manages chat partner data
   - Handles chat updates and status
   - Mock implementation for development

### Types and Interfaces (`types.ts`)

- `Platform`: Platform connection details
- `UserProfile`: User information structure
- `ChatPartner`: Chat participant information
- Message and interaction metrics types

## Technologies Used

### Core Framework
- React 18
- TypeScript
- Vite (for build and development)

### UI Components and Styling
- Tailwind CSS for styling
- shadcn/ui component library
- Lucide React for icons
- Custom theme with dark mode support

### State Management and Data Fetching
- TanStack Query (React Query) for API data management
- React Context for global state
- React Router for navigation

### Development Tools
- ESLint for code quality
- TypeScript for type safety
- Vite plugins for development experience

## Features

1. **Platform Integration**
   - Multi-platform chat support
   - Platform connection status
   - Individual platform management

2. **Chat Management**
   - Favorites/pinned conversations
   - Message history
   - Interaction metrics (likes, shares, follows)
   - Real-time updates

3. **Media Support**
   - Video preview functionality
   - Subtitles history tracking
   - Message attachments

4. **User Experience**
   - Responsive design
   - Custom scrollbars
   - Smooth transitions
   - Dark theme support

## Project Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Development Guidelines

1. **Component Structure**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling
   - Follow shadcn/ui patterns

2. **Styling**
   - Use Tailwind CSS classes
   - Follow dark theme compatibility
   - Maintain responsive design
   - Use shadcn/ui components when possible

3. **State Management**
   - Use React Query for API data
   - Implement proper loading states
   - Handle error scenarios
   - Maintain clean data flow

## Contributing

1. Follow TypeScript best practices
2. Maintain consistent code formatting
3. Write meaningful commit messages
4. Test thoroughly before submitting changes

## License
This project is private and confidential. All rights reserved.