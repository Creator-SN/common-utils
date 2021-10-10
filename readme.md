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
import { DomUtil, CookieUtil, NotificationUtil, SystemUtil } from '@creator-sn/common-utils';
```

### RandomUtil

```js
RandomUtil.password();

RandomUtil.uuid();
```

### DOMUtil

```js
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
