# Custom Express Server example

NOTE: this app forked from: https://github.com/vercel/next.js/tree/canary/examples/custom-server-express

server.js file updated.

since we are using middleware, including `hostname` and `port` in this line:

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev: ENVIRONMENT === 'development', hostname, port: PORT })


this example app deployed to Vercel here:

https://custom-server-express-nine.vercel.app/

note the above is app is a production environment. 

![example-app-local](https://user-images.githubusercontent.com/8107812/155028588-2981b15a-bd1d-482c-9a58-759b138a6194.png)

![example-app-production](https://user-images.githubusercontent.com/8107812/155028603-fa4666ee-98f5-469c-b768-b511e280606a.png)

//

README from Next.js below:

Most of the time the default Next.js server will be enough but there are times you'll want to run your own server to integrate into an existing application. Next.js provides [a custom server api](https://nextjs.org/docs/advanced-features/custom-server).

Because the Next.js server is a Node.js module you can combine it with any other part of the Node.js ecosystem. In this case we are using express.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/custom-server-express?runScript=dev)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example custom-server-express custom-server-express-app
# or
yarn create next-app --example custom-server-express custom-server-express-app
```
