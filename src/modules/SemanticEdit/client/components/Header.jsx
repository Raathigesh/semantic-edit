import {Component, PropTypes} from 'react'

class Header extends Component {
	static propTypes = {
		reactOnClick: React.PropTypes.func,
		onBeautify: React.PropTypes.func
	}
	render () {
		return (
			<div className="ui fixed inverted menu">
				<div className="ui container">
					<a href="#" className="header item">
						Semantic Edit
					</a>
					<a href="#" onClick={this.props.reactOnClick} className="item">{ this.props.isJsxMode ? 'Show Html' : 'Show JSX'}</a>
					<a href="#" onClick={this.props.onBeautify} className="item">Beautify</a>
				</div>
			</div>
		);
	}
}

export default Header;
