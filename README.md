# MERN Test Frontend

A pixel-perfect Next.js + Tailwind CSS implementation of the APURA Figma design, demonstrating design-to-code skills, responsiveness, animations, and Razorpay integration.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Technologies](#technologies)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Approach & Trade-offs](#approach--trade-offs)
* [Animations & Interactions](#animations--interactions)
* [License](#license)

---

## Demo

[View the live demo on Vercel](https://your-vercel-url.vercel.app)

## Features

* Pixel-perfect layout matching Figma design on desktop and iPhone 13 Mini
* Responsive design: mobile, tablet, desktop
* Tailwind CSS for utility-first styling
* Framer Motion animations on all sections
* Razorpay test integration with dynamic `order_id`
* Modular components for maintainability

## Technologies

* Next.js (v14+)
* React (v18+)
* Tailwind CSS (v3+)
* Framer Motion (v10+)
* Heroicons (v2)

## Prerequisites

* Node.js (v18+)
* npm or yarn

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/mayankrsagar/merntest.git
   cd merntest
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Approach & Trade-offs

* **Next.js** chosen for rapid setup, SSR capabilities, and file-based routing.
* **Tailwind CSS** for atomic styling and easy responsive utilities.
* **Framer Motion** for lightweight, declarative animations.
* **Trade-off**: Scoped each section into its own component, which increases file count but improves readability and reusability.

## Animations & Interactions

* Header fades in and nav links scale on hover.
* Hero section items stagger into view.
* Buttons include hover and tap feedback via Framer Motion.

## License

MIT © Mayank Sagar;
