import React, { Component } from 'react';

class ContactEditor extends Component {
	render() {
		const {text, link} = this.props.item;
		return (
			<div className={this.props.className + " ContactEditor"}>
				<input type="text" placeholder="Contact Text" value={text} onChange={(e) => this.props.onChange({text: e.target.value})}/>
				<input type="text" placeholder="Contact Link" value={link} onChange={(e) => this.props.onChange({link: e.target.value})}/>
			</div>
		);
	}

	static makeNewWithID(id) {
		return ({
			id: id,
			text: "",
			link: "",
		});
	}
}

export default ContactEditor;
