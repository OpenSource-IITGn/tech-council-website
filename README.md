# Technical Council Wesbite 2022 | IIT Gandhinagar

TLDR of the official documentation.

### Basic
Everything starts in `pages/_app.js` and `pages/index.js`.

### Routes
Each `route ["/Home", "/Internships", etc]` has a different folder under pages. Under each folder we have the main page as index.js.

### Commons and Constants
All reusable components are stored under `src/Common` folder.
All constants such as primary and secondary color, route names are stored under `src/Constants`.
Please note that the colors are defined as css variables under `styles/globals.css`. Do not hard code any color as it may rain down hell on us in case we need to change the color scheme of the site. If you do see any hard coded css variable, do report it and change it on your own. In case the color you need to use is not mentioned in the globals.css file, bring it to my notice. We may either get the color changed in the design, if not you are free to add the color on your own.

### Styles
The styles here are unique. The `globals.css` file contains css that are followed throughout the website.
Page specific styles are written as `Page.module.css` (eg. Home.module.css). The styles of common components go under `styles/Common/Components.module.css`


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
