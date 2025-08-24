# PrioritizeAI - Intelligent Feature Prioritization

PrioritizeAI is a Next.js application designed to help product managers and teams intelligently prioritize features. It combines a user-friendly interface with the power of generative AI to streamline the product roadmap planning process.

This starter project is built with modern web technologies to provide a fast, responsive, and professional user experience.

## Key Features

-   **Kanban Board:** Visualize your product roadmap with an interactive Kanban board for `Backlog`, `In Progress`, and `Completed` features.
-   **Prioritization Matrix:** A powerful scatter plot that maps features based on their **Impact vs. Effort**, helping you identify:
    -   **Quick Wins:** High Impact, Low Effort
    -   **Major Projects:** High Impact, High Effort
    -   **Fill-ins:** Low Impact, Low Effort
    -   **Reconsider:** Low Impact, High Effort
-   **AI-Powered Suggestions:** Leverage Genkit and Google's Gemini models to analyze customer feedback, market trends, and competitor data to generate new feature ideas.
-   **Responsive Design:** The application is fully responsive and works beautifully on both desktop and mobile devices.
-   **Modern Tech Stack:**
    -   [Next.js](https://nextjs.org/) (with App Router)
    -   [React](https://react.dev/)
    -   [TypeScript](https://www.typescriptlang.org/)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [ShadCN UI](https://ui.shadcn.com/) for beautiful, accessible components.
    -   [Genkit](https://firebase.google.com/docs/genkit) for generative AI features.
    -   [Recharts](https://recharts.org/) for data visualization.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm

### Running the Development Server

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the Next.js development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## How to Use

1.  **Dashboard (`/`):**
    -   View all features organized by status on the Kanban board.
    -   Click the `+ New Feature` button to open a form and add a new feature to the backlog.
    -   Edit existing features by clicking the vertical ellipsis on a feature card.
    -   Use the menu to move features between columns.

2.  **Matrix (`/matrix`):**
    -   Analyze your features in the Impact vs. Effort matrix.
    -   Scores are automatically calculated based on the data you provide for each feature.
    -   Hover over a point to see the feature's name, impact, and effort scores.

3.  **AI Suggestions (`/suggestions`):**
    -   Input data from various sources like customer feedback, market research, and competitor analysis into the provided text areas.
    -   Click "Generate Suggestions" to have the AI analyze the data and propose new, prioritized feature ideas.

4.  **Settings (`/settings`):**
    -   Configure application settings, such as toggling between light and dark themes.

## Performance Architecture

This application is built with a focus on performance by leveraging the **Next.js App Router**.

-   **Server-Side Rendering (SSR):** Pages are pre-rendered on the server, which means the browser receives fully formed HTML. This leads to very fast initial page loads and excellent SEO.
-   **Server Components by Default:** Most components in this application are React Server Components. They run exclusively on the server, fetching data and rendering HTML without sending any JavaScript to the client. This drastically reduces the client-side bundle size.
-   **Minimal Client-Side JavaScript:** Client Components (`'use client'`) are used only when absolutely necessary for interactivity (e.g., forms, buttons, and components that use React hooks like `useState` or `useEffect`). This "opt-in" approach to client-side interactivity keeps the application lightweight and fast.
-   **Instant Navigation:** Navigating between pages is nearly instantaneous thanks to the `next/link` component, which pre-fetches page data in the background. Since most pages are rendered on the server, navigation feels seamless without the "loading" state common in traditional single-page applications.

The previously reported issue of 3-5 minute loading times between tabs has been resolved by this architectural shift from a fully client-side rendered app to a server-rendered one.
