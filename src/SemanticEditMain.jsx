import React, { Component } from 'react';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx';

import Ace from 'react-ace';
import brace from 'brace';
import html from 'brace/mode/html'
import monokai from 'brace/theme/tomorrow'

import pretty from 'pretty';

export default class SemanticEditMain extends Component {

	constructor() {
		super();
		this.resize = this.resize.bind(this);
		this.createMarkup = this.createMarkup.bind(this);
		this.getViewPortHeight = this.getViewPortHeight.bind(this);
		this.encodeToShare = this.encodeToShare.bind(this);
		this.onChange = this.onChange.bind(this);
		this.toggleMarkup = this.toggleMarkup.bind(this);
		this.share = this.share.bind(this);
		this.beautify = this.beautify.bind(this);
		this.state = {
			html: "",
			jsx: "",
			isJsxMode: false,
			editorHeight: 0
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.resize);
		window.addEventListener("beforeunload", this.alertExistHandler);
		this.resize();


		var initialHtml = decodeURIComponent(window.location.href.split('/#src=')[1] || '');

		this.setState({
			html: initialHtml,
			jsx: this.state.jsx,
			isJsxMode: this.state.isJsxMode,
			editorHeight: this.state.editorHeight
		}, this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("beforeunload", this.alertExistHandler)
	}

	alertExistHandler(event){
		event.preventDefault();
		return event.returnValue = 'Are you sure you want to close?'; // currently newer version of chrome and other browsers deosn't support customized string so returning a string or empty string won't be of much impact
	}

	resize() {
		var viewportHeight = this.getViewPortHeight();

		this.setState({
			html: this.state.html,
			jsx: this.state.jsx,
			isJsxMode: this.state.isJsxMode,
			editorHeight: viewportHeight
		});
	}

	createMarkup() {
		return { __html: this.state.html };
	}

	getViewPortHeight() {
		return window.innerHeight - 88;
	}

	onChange(newValue) {
		if (this.state.isJsxMode) {
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

	toggleMarkup() {
		this.setState({
			html: this.state.html,
			jsx: this.state.jsx,
			isJsxMode: !this.state.isJsxMode,
			editorHeight: this.state.editorHeight
		});
	}

	beautify() {
		let prettyHtml = pretty(this.state.html);
		let prettyJsx = pretty(this.state.jsx);

		this.setState({
			html: prettyHtml,
			jsx: prettyJsx,
			isJsxMode: this.state.isJsxMode,
			editorHeight: this.state.editorHeight
		});
	}

	share() {
		this.refs.modal.show();
	}

	encodeToShare() {
		var encodedSource = encodeURIComponent(this.state.html);
		var trimmedLocation = window.location.href.replace(/#$/, '');
		return trimmedLocation + '#src=' + encodedSource;
	}

	render() {
		return (
			<body>
				<Header isJsxMode={this.state.isJsxMode} reactOnClick={this.toggleMarkup} onBeautify={this.beautify} onShare={this.share} />
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
						<div dangerouslySetInnerHTML={this.createMarkup()} />
					</div>
				</div>
				<Footer>
					<Modal ref="modal" html={this.encodeToShare()} />
				</Footer>
			</body>
		);
	}
}
