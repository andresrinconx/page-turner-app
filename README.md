# Page Turner

Page Turner is a mobile application designed to help users track their reading habits and maintain consistent reading schedules. The app allows users to catalog books, set reading goals, receive reminders, and gain insights into their reading patterns.

## Features

- Book cataloging and management  
- Reading reminders and notifications  
- User authentication  
- Reading insights and statistics  
- Customizable notification preferences  

## Architecture

The application follows a layered architecture with clear separation of concerns:

- **Frontend Layer**: Handles UI rendering and user interactions  
- **Data Management Layer**: Manages state, data fetching, and local storage  
- **Backend Services**: Provides authentication, database storage, and notifications  
- **Build System**: Automates testing, building, and deployment  

## Technologies

Page Turner is built using the following key technologies:

- **Frontend Framework**: React Native, Expo  
- **State Management**: React Query, React Context  
- **Routing**: Expo Router  
- **Backend Services**: Supabase (Auth, Database, Storage)  
- **Notifications**: Expo Notifications  
- **Form Handling**: React Hook Form, Zod  
- **Storage**: Async Storage, Secure Store  
- **UI Components**: Custom component library  
- **CI/CD**: GitHub Actions, Expo Application Services  

## Key Dependencies

- `expo` (^53.0.7)  
- `expo-router` (~5.0.5)  
- `@supabase/supabase-js` (^2.49.1)  
- `@tanstack/react-query` (^5.67.1)  
- `react-hook-form` (^7.54.2)  
- `expo-notifications` (~0.31.1)  
- `expo-secure-store` (~14.2.3)  
- `react-native` (0.79.2)  

## Authentication

The application uses Supabase Authentication for user management. The authentication flow handles session persistence, login, registration, and session validation.

## Data Management

The app uses a combination of React Query for server state management and React Context for application state. Data is stored in Supabase (remote) and device storage (local).

## Build and Deployment

The CI/CD pipeline automates testing, building, and deployment of the application. It is configured using GitHub Actions and Expo Application Services.
