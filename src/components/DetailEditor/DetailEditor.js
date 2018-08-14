import React, { Component } from 'react';

class DetailEditor extends Component {
	render() {
		const {text} = this.props.item;
		return (
			<div className={this.props.className + " DetailEditor"}>
				<textarea type="text" placeholder="Details" value={text} onChange={(e) => this.props.onChange({text: e.target.value})}/>
			</div>
		);
	}

	static makeNewWithID(id) {
		return ({
			id: id,
			text: ""
		});
	}
}

export default DetailEditor;
