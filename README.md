## Note

remix is currently hardbound to node:14 as its build target and doesn't allow you to configure esbuild (module bundler used as the base for the remix compiler) for any other target.

This template uses "patch-package" (https://github.com/ds300/patch-package) to modify the "@remix-run/dev" package to use node:18.

Patches created by patch-package are automatically and gracefully applied when you use npm(>=5) or yarn.

# Welcome to Remix!

- [Remix Docs](https://docs.remix.run)
- [Customer Dashboard](https://remix.run/dashboard)

## Development

You'll need to run two terminals (or bring in a process manager like concurrently/pm2-dev if you like):

Start the Remix development asset server

```sh
npm run dev
```

In a new tab start your express app:

```sh
npm run start:dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `server/build/`
- `public/build/`

### Using a Template

When you ran `npm init remix` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npm init remix
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
