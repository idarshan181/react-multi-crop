# React-multi-crop-tool

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-multi-crop-tool.svg)](https://www.npmjs.com/package/react-multi-crop-tool) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-multi-crop-tool
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-multi-crop-tool'
import 'react-multi-crop-tool/dist/index.css'

class Example extends Component {
  render() {
    return <MultiCrops
          src={img}
          width={1000}
          coordinates={this.state.coordinates}
          onDrag={this.changeCoordinate}
          onResize={this.changeCoordinate}
          onDraw={this.changeCoordinate}
          onChange={this.changeCoordinate}
          onDelete={this.deleteCoordinate}
        />
  }
}
```

## License

MIT © [idarshan181](https://github.com/idarshan181)
