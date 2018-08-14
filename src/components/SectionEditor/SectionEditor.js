import React, { Component } from 'react';
import itemList from "../itemList/itemList";
import SubsectionEditor from "../SubsectionEditor/SubsectionEditor";

const SubsectionsList = itemList(SubsectionEditor, "Subsection");

class SectionEditor extends Component {
	constructor(props) {
		super(props);
		this.setSubsections = this.setSubsections.bind(this);
	}

	render() {
		const {heading, subsections} = this.props.item;
		return (
			<div className={this.props.className + " SectionEditor"}>
				<input type="text" placeholder="Section Heading" value={heading} onChange={(e) => this.props.onChange({heading: e.target.value})} />
				<SubsectionsList items={subsections} onChange={this.setSubsections} listName="Subsections" />
			</div>
		);
	}

	setSubsections(newSubsections) {
		this.props.onChange(Object.assign(
			this.props.item,
			{subsections: newSubsections}
		));
	}

	static makeNewWithID(id) {
		return ({
			id: id,
			heading : "",
			subsections : []
		});
	}
}

export default SectionEditor;
