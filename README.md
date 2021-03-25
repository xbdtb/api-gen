## Install
``` shell
# npm
npm install @xbdtb/api-gen --dev

# yarn
yarn add @xbdtb/api-gen --dev
```

## Usage
### configuration
``` javascript
# config.js
module.exports = {
  api: {
    # url or file path
    schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
    serversPath: './src/services/generated',
  },
  another: {
    # url or file path
    schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
    serversPath: './src/services/generated',
    excludeServices: ['login'],
  },
};
```

### run
``` javascript
const { generateByConfig } = require('@xbdtb/api-gen');
const config = require(__dirname + '/config.js');

generateByConfig(config);
```
