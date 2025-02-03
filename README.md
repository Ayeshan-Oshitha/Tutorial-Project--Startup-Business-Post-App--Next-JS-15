# Startup Business App

This project is a Next.js web application for a startup business platform, integrating various modern tools and techniques for optimized performance, security, and scalability.

## Features

### 1. **Sanity CMS**
   - **Groq Queries**: Utilizes Groq (Graph-Relational Object Queries) for querying data from Sanity CMS, enabling flexible, powerful data fetching.
   - **Live Content API**: Bypasses Next.js caching to fetch real-time content directly, ensuring that the latest updates are displayed to users.

### 2. **Next.js Caching**
   - Implemented Next.js caching strategies to enhance performance by reusing data across sessions and reducing redundant network requests.

### 3. **Server-Only (NPM Package)**
   - This package is used to restrict specific functionalities exclusively to server environments, enhancing security by preventing access from the client side.

### 4. **Data Revalidation with `unstable_after`**
   - The `unstable_after` function allows tasks to be scheduled for execution after the response (or prerendering) is completed. This is useful for performing non-blocking tasks, such as logging, analytics, or background updates, without delaying the page load.

### 5. **Suspense (React 18+)**
   - Implements `Suspense`, a feature introduced in React 18, to manage asynchronous data loading for smooth and responsive user experience.

### 6. **React Server Actions**
   - Utilizes React Server Actions to handle server-side logic efficiently, minimizing client-side load and improving both security and performance.

### 7. **Rendering Techniques**
   - **Partial Pre-Rendering with ISR**: Used Incremental Static Regeneration (ISR) for pages that don’t require real-time data, allowing content updates without full re-deployment.
   - **Server-Side Rendering (SSR)**: Key pages use SSR to keep critical content fresh and SEO-friendly, especially useful for the main content and views.

### 8. **NextAuth (GitHub Authentication)**
   - NextAuth provides secure authentication, enabling users to log in with their GitHub credentials.

### 9. **Form Management and Validation**
   - **useActionState (Reach Hook)**: Employed for form management, ensuring efficient state handling in form interactions.
   - **Zod**: Utilized Zod for robust schema-based validation, ensuring form inputs meet defined formats before submission.

### 10. **Error Handling and Performance Monitoring**
   - **Sentry**: Integrated for error tracking and performance monitoring, allowing us to measure app performance and identify potential issues in real-time.

### 11. **Data Fetching Strategies**
   - **Parallel and Sequential Data Fetching**: Optimized data retrieval using parallel fetching where dependencies are minimal and sequential fetching where data needs to be loaded in specific order.

## Visit the Project
[Visit the live project here](https://ycdirectory-startup-business-website.vercel.app/)

## ScreenShots

![YC Directory 1](https://github.com/user-attachments/assets/2ea6050b-489d-4337-ba4d-9cd7fef75970)

<hr/>

![YC Directory 2](https://github.com/user-attachments/assets/7af4a6ee-9081-4532-8700-c47a83b143f3)

<hr/>

![YC Directory 3](https://github.com/user-attachments/assets/828b2367-96e5-4e15-8fea-c75f5eeec04e)

<hr/>

![YC Directory 4](https://github.com/user-attachments/assets/4eb7a7a3-f3d2-4d1f-82ff-81eea1f4bd5d)

<hr/>

![YC Directory 5](https://github.com/user-attachments/assets/d8d4c90a-6a0d-406a-bf6d-08a30b73bb17)

<hr/>







