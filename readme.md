### Commom Utils

The Util reduces code size and helps to code quickly.

### Configuration Local NPM

.npmrc

```properties
@creator-sn:registry=https://npm.pkg.github.com
```

### Installation

1. NPM Github

```sh
yarn add @creator-sn/common-utils # npm install @creator-sn/common-utils
```

### Usage

```js
import { DomUtil, CookieUtil, NotificationUtil, SystemUtil, RandomUtil, DateUtil } from '@creator-sn/common-utils';
```

### RandomUtil

```js
// generate password
RandomUtil.password();

// generate uuid
RandomUtil.uuid();
```

### DOMUtil

```js
// download a file
DOMUtil.download(new File([new Blob()], 'test.txt'));
```

### Development

1. Serve

```sh
yarn dev
```

2. Test

```sh
yarn test
```
