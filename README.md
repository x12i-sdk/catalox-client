# @x12i/catalox-client usage example

HTTP client for Catalox API.

This consuming application demonstrates **read application catalogs with a token-bound http client fixture** using the published npm package, pinned to `6.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Read catalog objects through a configured HTTP client.
- Bind a token or context before issuing a scoped catalog operation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/catalox-client)
- [Implementation monorepo](https://github.com/x12i/catalox)
- [Reviewed package source](https://github.com/x12i/catalox/tree/38c5ff583f1d77dfbbd884935a858236c20f5ea7/packages/http/client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
