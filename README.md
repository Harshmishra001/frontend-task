# FakeStore E-commerce Frontend

A Next.js application that displays products from the FakeStore API with an eye-friendly UI design.



## Project Overview

This project is a frontend e-commerce application built with Next.js and TypeScript. It fetches product data from the [FakeStore API](https://fakestoreapi.com/products) and displays it in a responsive, eye-friendly user interface.

### Features

- Product Listing Page: Displays all products in a responsive grid
- Product Detail Page: Shows detailed information about a specific product
- Responsive Design: Works on mobile, tablet, and desktop
- Error Handling: Gracefully handles API failures
- Loading States: Shows loading skeletons while fetching data

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: FakeStore API

## Project Structure

- `src/app`: Contains the main pages of the application
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and API calls
- `src/types`: TypeScript type definitions

## Data Fetching Strategy

This project uses Next.js Server Components for data fetching. The benefits of this approach include:

1. **Server-side rendering**: Improves SEO and initial page load performance
2. **Reduced client-side JavaScript**: Better performance on low-end devices
3. **Automatic caching**: Next.js handles caching of fetch requests

## Installation and Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Bonus Features Implemented

- **Filtering products by category**: Users can filter products by selecting a category
- **Sorting products**: Products can be sorted by price (ascending/descending) or title (A-Z, Z-A)
- **Search functionality**: Users can search for products by title or description
- **Pagination**: Products are paginated for better user experience
- **Loading skeletons**: Provides visual feedback during data loading
- **Eye-friendly UI**: Uses a teal color scheme that's easy on the eyes with proper contrast
- **Responsive design**: Fully responsive on all screen sizes
- **Accessibility features**: Proper focus states, semantic HTML, and screen reader support
- **Smooth animations**: Subtle animations for a more engaging user experience
- **Custom scrollbar**: Enhanced scrollbar for better user experience

## UI Design Choices

- **Color Scheme**: Used a teal-based color palette that's easy on the eyes and provides good contrast
- **Typography**: Used the Inter font for better readability
- **Card Design**: Product cards have subtle hover effects and clear information hierarchy
- **Spacing**: Consistent spacing throughout the application for better visual rhythm
- **Loading States**: Skeleton loaders that match the actual content layout
- **Error States**: User-friendly error messages with retry functionality
