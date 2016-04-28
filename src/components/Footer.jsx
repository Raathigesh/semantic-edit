import React, {Component, PropTypes} from 'react'

export default class Footer extends Component {
	render () {
		return (
			<div className="ui inverted vertical footer segment">
				<div className="ui center aligned container">
					<div className="ui horizontal inverted small divided link list">
						SemanticEdit v1.0 | Made with JavaScript and love by<a className="item" href="https://twitter.com/Raathigeshan">@Raathigesh</a>
					{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
