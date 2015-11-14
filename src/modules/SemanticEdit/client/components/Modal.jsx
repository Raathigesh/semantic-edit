import React, {
	PropTypes
} from 'react'

import Ace from 'react-ace';
import brace from 'brace';
import html from 'brace/mode/html'
import monokai from 'brace/theme/tomorrow'

class Modal extends React.Component {

static propTypes = {
	html : React.PropTypes.string
}

 show = () => {
	 $('.ui.modal').modal('show');
 }

	render () {
		return (
			<div className="ui modal">
				<i className="close icon"></i>
				<div className="header">
					React Compliant JSX
				</div>
				<div className="image content">
					<div className="description">
						{this.props.html}
					</div>
				</div>
				<div className="actions">
					<div className="ui positive right labeled icon button">
						Awesome
						<i className="checkmark icon"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
