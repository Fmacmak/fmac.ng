<div align="center">
    <a href="https://fmac.ng"><h1 align="center">fmac.ng</h1></a>

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com?ref=fmac.ng).

</div>

<br/>

## Running Locally


```sh-session
git clone https://github.com/fmac/fmac.ng.git
cd fmac.ng
```


Create a `.env` file similar to [`.env.example`](https://github.com/fmac/fmac.ng/blob/main/.env.example).

Then install dependencies and run the development server:
```sh-session
pnpm install
pnpm dev
```


Deployment notes

https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages


Build and preview your application locally
To ensure that your application is being built in a manner that is fully compatible with Cloudflare Pages, before deploying it, or whenever you are comfortable checking the correctness of the application during your development process, you will want to build and preview it locally using Cloudflare's workerd JavaScript runtime.

Do this by running:

pnpm dlx @cloudflare/next-on-pages

And preview your project by running:

pnpm dlx wrangler pages dev .vercel/output/static
