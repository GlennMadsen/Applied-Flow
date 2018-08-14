import React, { Component } from 'react';
import itemList from "../itemList/itemList";
import ContactEditor from "../ContactEditor/ContactEditor";
import SectionEditor from "../SectionEditor/SectionEditor";

const ContactsList = itemList(ContactEditor,"Contact");
const SectionsList = itemList(SectionEditor,"Section");

class ResumeEditor extends Component {
	constructor(props) {
		super(props);

		this.setName = this.setName.bind(this);
		this.setContacts = this.setContacts.bind(this);
		this.setSections = this.setSections.bind(this);
	}

	render() {
		const {name, contacts, sections} = this.props.resume;
		return (
			<div className={this.props.className + " ResumeEditor"} >
				<header id="cardTitle"><h1>Editor</h1></header>
				<input type="text" placeholder="Applicant's Name" value={name} onChange={(e) => this.setName(e.target.value)} />
				<ContactsList items={contacts} onChange={this.setContacts} listName="Contacts" />
				<SectionsList items={sections} onChange={this.setSections} listName="Sections" />
			</div>
		);
	}

	setName(newName) {
		this.props.onChange(Object.assign(
			this.props.resume,
			{name: newName}
		));
	}

	setContacts(newContacts) {
		this.props.onChange(Object.assign(
			this.props.resume,
			{contacts: newContacts}
		));
	}

	setSections(newSections) {
		this.props.onChange(Object.assign(
			this.props.resume,
			{sections: newSections}
		));
	}
}

export default ResumeEditor;
