import React from 'react';
import ReactDOM from 'react-dom';

class ReactLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1});
  }
  componentWillMount() {
    console.log('mounting');
    this.setState({m: 3});
  }
  render() {
    console.log('rendering');
    return (
      <button onClick={this.update}>
      { this.state.val * this.state.m }
    </button>
    )
  }
  componentDidMount() {
    console.log('mounted');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {
    console.log('bye');
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<ReactLifeCycle />, document.getElementById('mount-count'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('mount-count'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="mount-count"></div>
      </div>
    )
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('react-lifecycle')
)
export default Wrapper
