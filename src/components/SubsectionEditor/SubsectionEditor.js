import React, { Component } from 'react';
import itemList from "../itemList/itemList";
import DetailEditor from "../DetailEditor/DetailEditor";

const DetailsList = itemList(DetailEditor, "Detail");

class SubsectionEditor extends Component {
	constructor(props) {
		super(props);
		this.setDetails = this.setDetails.bind(this);
	}

	render() {
		const {heading, subheading, details} = this.props.item;
		return (
			<div className={this.props.className + " SubsectionEditor"}>
				<input type="text" placeholder="Subsection Heading" value={heading} onChange={(e) => this.props.onChange({heading: e.target.value})}/>
				<input type="text" placeholder="Subsection Subheading" value={subheading} onChange={(e) => this.props.onChange({subheading: e.target.value})}/>
				<DetailsList items={details} onChange={this.setDetails} listName="Details" />
			</div>
		);
	}

	setDetails(newDetails) {
		this.props.onChange(Object.assign(
			this.props.item,
			{details: newDetails}
		));
	}

	static makeNewWithID(id) {
		return ({
			id: id,
			heading: "",
			subheading: "",
			details: []
		});
	}
}

export default SubsectionEditor;
