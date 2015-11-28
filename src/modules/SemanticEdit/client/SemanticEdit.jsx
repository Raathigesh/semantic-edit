import { Component, PropTypes } from 'react';

export default class SemanticEdit extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    require('./css/TodoApp.import.css');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
