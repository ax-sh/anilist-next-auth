# Anilist Oauth2 Provider for `next-auth`

# Install Using 

npm
```shell
   npm i https://github.com/ax-sh/anilist-next-auth
```

pnpm
```shell
   pnpm i https://github.com/ax-sh/anilist-next-auth
```


[//]: # ()
[//]: # (> If you’re new to TypeScript and React, checkout [this handy cheatsheet]&#40;https://github.com/sw-yx/react-typescript-cheatsheet/&#41;)

[//]: # ()
[//]: # (## Commands)

[//]: # ()
[//]: # (TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based]&#40;https://parceljs.org&#41; playground for it inside `/example`.)

[//]: # ()
[//]: # (The recommended workflow is to run TSDX in one terminal:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm start # or yarn start)

[//]: # (```)

[//]: # ()
[//]: # (This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.)

[//]: # ()
[//]: # (Then run the example inside another:)

[//]: # ()
[//]: # (```bash)

[//]: # (cd example)

[//]: # (npm i # or yarn to install dependencies)

[//]: # (npm start # or yarn start)

[//]: # (```)

[//]: # ()
[//]: # (The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing]&#40;https://parceljs.org/module_resolution.html#aliases&#41;.)

[//]: # ()
[//]: # (To do a one-off build, use `npm run build` or `yarn build`.)

[//]: # ()
[//]: # (To run tests, use `npm test` or `yarn test`.)

[//]: # ()
[//]: # (## Configuration)

[//]: # ()
[//]: # (Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.)

[//]: # ()
[//]: # (### Jest)

[//]: # ()
[//]: # (Jest tests are set up to run with `npm test` or `yarn test`.)

[//]: # ()
[//]: # (### Bundle analysis)

[//]: # ()
[//]: # (Calculates the real cost of your library using [size-limit]&#40;https://github.com/ai/size-limit&#41; with `npm run size` and visulize it with `npm run analyze`.)

[//]: # ()
[//]: # (#### Setup Files)

[//]: # ()
[//]: # (This is the folder structure we set up for you:)

[//]: # ()
[//]: # (```txt)

[//]: # (/example)

[//]: # (  index.html)

[//]: # (  index.tsx       # test your component here in a demo app)

[//]: # (  package.json)

[//]: # (  tsconfig.json)

[//]: # (/src)

[//]: # (  index.tsx       # EDIT THIS)

[//]: # (/test)

[//]: # (  anilist-provider.test.tsx   # EDIT THIS)

[//]: # (.gitignore)

[//]: # (package.json)

[//]: # (README.md         # EDIT THIS)

[//]: # (tsconfig.json)

[//]: # (```)

[//]: # ()
[//]: # (#### React Testing Library)

[//]: # ()
[//]: # (We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.)

[//]: # ()
[//]: # (### Rollup)

[//]: # ()
[//]: # (TSDX uses [Rollup]&#40;https://rollupjs.org&#41; as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations]&#40;#optimizations&#41; for details.)

[//]: # ()
[//]: # (### TypeScript)

[//]: # ()
[//]: # (`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.)

[//]: # ()
[//]: # (## Continuous Integration)

[//]: # ()
[//]: # (### GitHub Actions)

[//]: # ()
[//]: # (Two actions are added by default:)

[//]: # ()
[//]: # (- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix)

[//]: # (- `size` which comments cost comparison of your library on every pull request using [`size-limit`]&#40;https://github.com/ai/size-limit&#41;)

[//]: # ()
[//]: # (## Optimizations)

[//]: # ()
[//]: # (Please see the main `tsdx` [optimizations docs]&#40;https://github.com/palmerhq/tsdx#optimizations&#41;. In particular, know that you can take advantage of development-only optimizations:)

[//]: # ()
[//]: # (```js)

[//]: # (// ./types/index.d.ts)

[//]: # (declare var __DEV__: boolean;)

[//]: # ()
[//]: # (// inside your code...)

[//]: # (if &#40;__DEV__&#41; {)

[//]: # (  console.log&#40;'foo'&#41;;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (You can also choose to install and use [invariant]&#40;https://github.com/palmerhq/tsdx#invariant&#41; and [warning]&#40;https://github.com/palmerhq/tsdx#warning&#41; functions.)

[//]: # ()
[//]: # (## Module Formats)

[//]: # ()
[//]: # (CJS, ESModules, and UMD module formats are supported.)

[//]: # ()
[//]: # (The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.)

[//]: # ()
[//]: # (## Deploying the Example Playground)

[//]: # ()
[//]: # (The Playground is just a simple [Parcel]&#40;https://parceljs.org&#41; app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for **manually** deploying with the Netlify CLI &#40;`npm i -g netlify-cli`&#41;:)

[//]: # ()
[//]: # (```bash)

[//]: # (cd example # if not already in the example folder)

[//]: # (npm run build # builds to dist)

[//]: # (netlify deploy # deploy the dist folder)

[//]: # (```)

[//]: # ()
[//]: # (Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:)

[//]: # ()
[//]: # (```bash)

[//]: # (netlify init)

[//]: # (# build command: yarn build && cd example && yarn && yarn build)

[//]: # (# directory to deploy: example/dist)

[//]: # (# pick yes for netlify.toml)

[//]: # (```)

[//]: # ()
[//]: # (## Named Exports)

[//]: # ()
[//]: # (Per Palmer Group guidelines, [always use named exports.]&#40;https://github.com/palmerhq/typescript#exports&#41; Code split inside your React app instead of your React library.)

[//]: # ()
[//]: # (## Including Styles)

[//]: # ()
[//]: # (There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.)

[//]: # ()
[//]: # (For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.)

[//]: # ()
[//]: # (## Publishing to NPM)

[//]: # ()
[//]: # (We recommend using [np]&#40;https://github.com/sindresorhus/np&#41;.)

[//]: # ()
[//]: # (## Usage with Lerna)

[//]: # ()
[//]: # (When creating a new package with TSDX within a project set up with Lerna, you might encounter a `Cannot resolve dependency` error when trying to run the `example` project. To fix that you will need to make changes to the `package.json` file _inside the `example` directory_.)

[//]: # ()
[//]: # (The problem is that due to the nature of how dependencies are installed in Lerna projects, the aliases in the example project's `package.json` might not point to the right place, as those dependencies might have been installed in the root of your Lerna project.)

[//]: # ()
[//]: # (Change the `alias` to point to where those packages are actually installed. This depends on the directory structure of your Lerna project, so the actual path might be different from the diff below.)

[//]: # ()
[//]: # (```diff)

[//]: # (   "alias": {)

[//]: # (-    "react": "../node_modules/react",)

[//]: # (-    "react-dom": "../node_modules/react-dom")

[//]: # (+    "react": "../../../node_modules/react",)

[//]: # (+    "react-dom": "../../../node_modules/react-dom")

[//]: # (   },)

[//]: # (```)

[//]: # ()
[//]: # (An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.]&#40;https://github.com/palmerhq/tsdx/issues/64&#41;)
