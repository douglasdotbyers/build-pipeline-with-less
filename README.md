# Build Pipeline With LESS

An asset build pipeline, which:

 - compiles LESS to CSS;
 - concatenates and minifies CSS;
 - concatenates and minifies JS;
 - serves the app locally;
 - live-reloads changes to HTML, LESS, JS;
 - facilitates synchronised browser testing.

## Setup

Ensure `node` is installed:

```bash
node --version
```

Ensure `npm` is installed:

```bash
npm --version
```

Install `gulp-cli`:

```bash
npm install -g gulp-cli
```

## Usage

Install `node_modules`:

```bash
npm install
```

...or...

```bash
yarn install
```

Run the asset build pipeline:

```bash
gulp
```

Browse to https://localhost:3000/home.html.
