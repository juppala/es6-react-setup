import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponet => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0};
  }
  update() {
    this.setState({val: this.state.val + 1});
  }
  componentWillMount() {
    console.log('will mount');
  }
  render() {
    return <InnerComponet
      update={this.update}
      {...this.props}
      {...this.state} />
  }
  componentDidMount() {
    console.log('mounted');
  }
}

const Button = (props) => <button onClick={props.update}>
  {props.txt} - {props.val}
</button>

const Label = (props) => <label onMouseMove={props.update}>
  {props.txt} - {props.val}
</label>


let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class ReactMixin extends React.Component {

  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    )
  }

}

ReactMixin.defaultProps = {txt: 'button'}

ReactDOM.render(
  <ReactMixin />,
  document.getElementById('react-mixin')
)
export default ReactMixin
