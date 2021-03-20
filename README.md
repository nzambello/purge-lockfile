# purge-lockfile

[![npm version](https://img.shields.io/github/package-json/v/nzambello/purge-lockfile)](https://www.npmjs.com/package/purge-lockfile)
![Node.js CI](https://github.com/nzambello/purge-lockfile/workflows/test/badge.svg?branch=master)

Strips [yarn](https://yarnpkg.com) lockfile by a pattern.

## Usage

```bash
npx purge-lockfile@latest PATTERN
```

### Example

In [test](./test) directory, you can find test lockfiles.

The use case is that you have to strip every entry to make a clean install/reinstall.
