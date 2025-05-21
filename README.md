# Next.js GraphQL Starter

A modern, production-ready starter template for building web applications with Next.js and Apollo GraphQL.

## Features

- **Next.js 15+** - Latest Next.js features including the App Router
- **GraphQL with Apollo Client** - Configured Apollo Client for efficient data fetching
- **TypeScript** - Type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Configured for Next.js and React
- **Modern JavaScript** - Using the latest ES6+ features

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/next-graphql-starter.git
   cd next-graphql-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure
```
next-graphql-starter/ ├── app/ # Next.js App Router ├── components/ # React components ├── lib/ # Utility functions and Apollo client setup ├── public/ # Static assets ├── styles/ # Global styles ├── .eslintrc.json # ESLint configuration ├── next.config.js # Next.js configuration ├── package.json # Project dependencies and scripts └── tsconfig.json # TypeScript configuration
``` 

## GraphQL Integration

This starter uses Apollo Client for GraphQL operations. The client is set up in `lib/apollo-client.ts`.

Example query:
```
typescript import { gql, useQuery } from '@apollo/client';
const GET_DATA = gql` query GetData { // Your query here }`;
function MyComponent() { const { loading, error, data } = useQuery(GET_DATA);
// Component logic }
``` 

## Customization

This starter is designed to be a foundation. Feel free to:
- Add authentication
- Configure environment variables
- Set up testing libraries
- Add state management solutions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.