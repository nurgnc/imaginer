# IMAGINER

### :tada: <a href="https://imaginer-kappa.vercel.app/">Live Imaginer</a> :tada:

:dart: This project takes a prompt from you and transforms that word or sentence into an image using artificial intelligence. <br/> <br/>

### Technical Details

<br/>
:anchor: This project was developed with the latest version of Next.js. (Nextjs 13) <br /> <br />
:anchor: The input field takes a prompt from you and sends a request to the replicate API. It then displays the image returned from that API on the screen. <br /> <br />
:anchor: The suggestion sentences and images under the input come from a file within the project. <br /> <br />
:anchor: When you click the "copy" button under suggestion sentences or images, the input area gets filled. Upon clicking the "generate" button, a request is sent to the replicate API. <br /> <br />
:anchor: The project utilizes the Context API for state management. <br /> <br />
:anchor: Webpack uses SVGR for the icons in the footer. SVGR (SVG React) is a library used to transform SVG files into React components. This enables easier integration of SVG files into React applications. <br /> <br />
:anchor: To generate an image, we make a request to the replicate API. However, this API has a daily limit, and to prevent excessive requests, rate limiting is implemented using the `express-slow-down` and `express-rate-limit` packages. I've set specific periods and limit values for those periods. Additionally, I've created a value to track whether the request is made from the same API. If a user exceeds the rate limit, an error will be encountered. <br /> <br />
:anchor: As long as the user doesn't exceed the rate limit, they will see a loading indicator from the moment they generate the image until the API responds. Once the API returns the image URL, the image is displayed under the input field. <br /> <br />

### Technologies 
:rocket: NextJS 13 <br/> <br />
:rocket: React <br/> <br />
:rocket: Context API <br/> <br />
:rocket: Replicate API <br/> <br />
:rocket: Express Rate Limit <br/> <br />
:rocket: Express Slow Down <br/> <br />
:rocket: Sass <br/> <br />
:rocket: Next Font <br/> <br />
:rocket: SVGR Webpack <br/> <br />




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
