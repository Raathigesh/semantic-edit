import React, { Component, PropTypes } from 'react';
import SemanticEditMain from './SemanticEditMain.jsx';
import ReactDOM from 'react-dom';

export default class SemanticEdit extends Component {
  render() {
    return (
      <div>
        <SemanticEditMain />
      </div>
    );
  }
}

SemanticEdit.propTypes = {
	children: PropTypes.any.isRequired
}

ReactDOM.render(<SemanticEdit/>, document.querySelector("#myApp"));
