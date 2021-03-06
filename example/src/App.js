import React from 'react'

import MultiCrops from 'react-multi-crop-tool/dist/index.modern';
import 'react-multi-crop-tool/dist/index.css'
import img from './imgs/kumamon.jpg';

class App extends React.Component {
  state = {
    coordinates: [
      {
        x: 178, y: 91, width: 158, height: 132, id: 'SJxb6YpuG',
      },
      {
        x: 436, y: 97, width: 170, height: 168, id: 'SJMZ6YTdf',
      },
    ],
  }

  changeCoordinate = (coordinate, index, coordinates) => {
    this.setState({
      coordinates,
    })
  }
  deleteCoordinate = (coordinate, index, coordinates) => {
    this.setState({
      coordinates,
    })
  }

  render() {
    return (
      <div>
        <h1>Dragging, Drawing, Resizing rectangles on the img</h1>
        <MultiCrops
          src={img}
          width={1000}
          coordinates={this.state.coordinates}
          // onDrag={this.changeCoordinate}
          // onResize={this.changeCoordinate}
          // onDraw={this.changeCoordinate}
          onChange={this.changeCoordinate}
          onDelete={this.deleteCoordinate}
        // onLoad={e => console.log(e.target.height, e.target.width)}
        />
      </div>
    )
  }
}

export default App;
