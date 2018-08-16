import React, { Component } from 'react';
import ResumeEditor from "../ResumeEditor/ResumeEditor";
import ResumePreviewer from "../ResumePreviewer/ResumePreviewer";
import MaskEditor from "../MaskEditor/MaskEditor";

class AppliedFlow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resume: {
				name:"",
				contacts:[],
				sections:[]
			},
			mask: []
		};

		let resumeRaw = localStorage.getItem("A~F:resume:v0");
		let maskRaw = localStorage.getItem("A~F:mask:v0");
		if (typeof resumeRaw === 'string') {
			let resume = JSON.parse(resumeRaw);
			this.state.resume = resume;
		}
		if (typeof maskRaw === 'string') {
			let mask = JSON.parse(maskRaw);
			this.state.mask = mask;
		}

		this.onResumeChange = this.onResumeChange.bind(this);
		this.onMaskChange = this.onMaskChange.bind(this);
	}

	render() {
		return ([
			<ResumeEditor key="ResumeEditor" resume={this.state.resume} onChange={this.onResumeChange} className="card" />,
			<MaskEditor key="MaskEditor" resume={this.state.resume} mask={this.state.mask} className="card" onChange={this.onMaskChange}/>,
			<ResumePreviewer key="ResumePreviewer" resume={this.state.resume} mask={this.state.mask} className="card" />,
			<div className="card" key="ExportData">
				<textarea value={this.state.importExport} onChange={(e) => this.setState({importExport:e.target.value})} />
				<button type="button" onClick={() => this.setState({importExport:JSON.stringify(this.state)})}>Export</button>
				<button type="button" onClick={() => this.setState(JSON.parse(this.state.importExport),function () {
					localStorage.setItem("A~F:resume:v0",JSON.stringify(this.state.resume));
					localStorage.setItem("A~F:mask:v0",JSON.stringify(this.state.mask));
				})}>Import</button>
			</div>
		]);
	}

	onResumeChange(newResume) {
		this.setState(() => ({
			resume: newResume
		}),function () {
			localStorage.setItem("A~F:resume:v0",JSON.stringify(newResume));
		});
	}

	onMaskChange(newMask) {
		this.setState(() => ({
			mask: newMask
		}),function () {
			localStorage.setItem("A~F:mask:v0",JSON.stringify(newMask));
		});
	}

	static generateID() {
		return Math.floor(Math.random() * (1000000000 - -1000000000 + 1)) + -1000000000;
	}
}

export default AppliedFlow;
