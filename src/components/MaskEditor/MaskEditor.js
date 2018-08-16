import React, { Component } from 'react';

class MaskEditor extends Component {

	render() {
		return (
			<div className={this.props.className + " MaskEditor"} >
				<header id="cardTitle"><h1>Masker</h1></header>
				<div>
					{MaskEditor.unwrapKeyValueMap(this.props.resume, 0).map((value) =>
						<div key={value.id} className={"level-" + value.level}>
							<input id={value.id} type="checkbox" checked={this.props.mask.includes(value.id)} onChange={() => this.toggle(value.id)}/>
							<label htmlFor={value.id}>{value.description}</label>
						</div>
					)}
				</div>
			</div>
		);
	}

	toggle(id) {
		let newMask;
		if (this.props.mask.includes(id)) {
			newMask = this.props.mask;
			newMask.splice(this.props.mask.indexOf(id),1);
		} else {
			newMask = [...this.props.mask, id];
		}
		this.props.onChange(newMask);
	}

	static unwrapKeyValueMap(resume, level) {
		let emit = [];
		if (typeof resume.id === 'number') {
			let description;
			let link = typeof resume.link !== 'undefined' && resume.link !== "";
			let text = typeof resume.text !== 'undefined' && resume.text !== "";
			let heading = typeof resume.heading !== 'undefined' && resume.heading !== "";
			if (link) {
				description = resume.text + " [ " + resume.link + " ]";
			} else if (text) {
				description = resume.text;
			} else if (heading) {
				description = resume.heading;
			} else {
				description = "_________";
			}
			emit[0] = {
				id: resume.id,
				description: description,
				level: level
			}
		}
		let keys = Object.keys(resume);
		for (let i = 0; i < keys.length; i++) {
			let property = resume[keys[i]];
			if (Array.isArray(property)) {
				for (let ii = 0; ii < property.length; ii++) {
					let element = property[ii];
					emit = emit.concat(MaskEditor.unwrapKeyValueMap(element, level+1));
				}
			}
		}
		return emit;
	}
}

export default MaskEditor;
