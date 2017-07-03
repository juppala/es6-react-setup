import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Button, ButtonToolbar} from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div>
        <Alert>Hello</Alert>
      <Button>HI <Heart /> Jagadish!</Button>

      </div>
    )
    // return React.createElement('h1', null, 'Hello Guys');
  }
}


const Heart = () => <span className="glyphicon glyphicon-heart"></span>


ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
