import {Component} from 'react';
import ReactMixin from 'react-mixin';

import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal';

import Ace from 'react-ace';
import brace from 'brace';
import html from 'brace/mode/html'
import monokai from 'brace/theme/tomorrow'

var pretty = require('pretty');

export default class SemanticEditMain extends Component {

	state = {
		html: "",
		jsx: "",
		isJsxMode: false,
		editorHeight: 0
	}

	componentDidMount  = () => {
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	resize = () => {
		var viewportHeight = this.getViewPortHeight();

		this.setState({
			html: this.state.html,
			jsx: this.state.jsx,
			isJsxMode: this.state.isJsxMode,
			editorHeight: viewportHeight
		});
	}

	createMarkup = () => {
		return {__html: this.state.html};
	}

	getViewPortHeight = () => {
		return window.innerHeight - 88;
	}

	onChange = (newValue) => {
		if(this.state.isJsxMode) {
				newValue = newValue.replace(/className=/g, 'class=');
		}

		var jsx = newValue.replace(/class=/g, 'className=');

		this.setState({
			html: newValue,
			jsx: jsx,
			isJsxMode: false,
			editorHeight: this.state.editorHeight
		});
	}

	toggleMarkup = () => {
		this.setState({
			html: this.state.html,
			jsx: this.state.jsx,
			isJsxMode: !this.state.isJsxMode,
			editorHeight: this.state.editorHeight
		});
	}

	beautify = () => {
		let prettified = pretty(this.state.html);
		this.setState({
			html: prettified,
			jsx: this.state.jsx,
			isJsxMode: this.state.isJsxMode,
			editorHeight: this.state.editorHeight
		});
	}

	render () {
		return (
			<body>
				<Header isJsxMode={this.state.isJsxMode} reactOnClick={this.toggleMarkup} onBeautify={this.beautify}/>
				<div className="ui two column doubling grid">
					<div className="column">
						<Ace
							value={this.state.isJsxMode ? this.state.jsx : this.state.html}
							mode="html"
							width="100%"
							height={`${this.state.editorHeight}`}
							theme="tomorrow"
							fontSize={14}
							onChange={this.onChange}
						/>
					</div>
					<div className="column">
						<div dangerouslySetInnerHTML={this.createMarkup()}/>
					</div>
				</div>
				<Footer/>
			</body>
		);
	}
}
