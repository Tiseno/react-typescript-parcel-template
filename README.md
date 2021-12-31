# Create SPA: React + Typescript + Parcel

Example project how to create a Single Page Application with React, Typescript and Parcel.

**You can find a step by step description of how I created this project skeleton at: https://carlosvin.github.io/posts/react-typescript-parcel**

## Development

```bash
yarn install
yarn serve
```
`yarn serve` will:
- build the project into the ./dist folder
- start a development server at http://localhost:1234 with [hot module replacement](https://en.parceljs.org/hmr.html)

Basically each time you save a file, you will automatically see the result at http://localhost:1234 without refreshing the page.

## Build

```bash
yarn build
```
[Parcel's default optimizations](https://en.parceljs.org/production.html#optimisations) will be applied to generated files.

Files are saved in the `dist` folder.

# Step by step project creation

You can find this section at: https://carlosvin.github.io/posts/react-typescript-parcel.
