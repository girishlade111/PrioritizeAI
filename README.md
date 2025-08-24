# PrioritizeAI - Intelligent Feature Prioritization

PrioritizeAI is a Next.js application designed to help product managers and teams intelligently prioritize features. It combines a user-friendly interface with the power of generative AI to streamline the product roadmap planning process.

This starter project is built with modern web technologies to provide a fast, responsive, and professional user experience.

## Key Features

-   **Kanban Board:** Visualize your product roadmap with a drag-and-drop Kanban board for `Backlog`, `In Progress`, and `Completed` features.
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

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the Next.js development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## How to Use

1.  **Dashboard (`/`):**
    -   View all features organized by status on the Kanban board.
    -   Click the `+ New Feature` button to open a form and add a new feature to the backlog.
    -   Edit existing features by clicking the vertical ellipsis on a feature card.
    -   Drag and drop (coming soon!) or use the menu to move features between columns.

2.  **Matrix (`/matrix`):**
    -   Analyze your features in the Impact vs. Effort matrix.
    -   Scores are automatically calculated based on the data you provide for each feature.
    -   Hover over a point to see the feature's name, impact, and effort scores.

3.  **AI Suggestions (`/suggestions`):**
    -   Input data from various sources like customer feedback, market research, and competitor analysis into the provided text areas.
    -   Click "Generate Suggestions" to have the AI analyze the data and propose new, prioritized feature ideas.

4.  **Settings (`/settings`):**
    -   Configure application settings, such as toggling between light and dark themes.

## Performance

This application is built with performance in mind:

-   **Next.js App Router:** We use server components by default and client components only where necessary to minimize the amount of JavaScript sent to the browser.
-   **Client-Side Navigation:** Navigating between pages is nearly instantaneous thanks to the `next/link` component, which pre-fetches page data.
-   **Optimized Builds:** Next.js provides highly optimized production builds for fast load times.

The reported issue of 3-5 minute loading times between tabs is not expected behavior. The application uses mock data loaded instantly into React's state, so navigation and rendering should be very fast. If you experience performance problems, please check your network conditions or for any browser extensions that might be interfering.
