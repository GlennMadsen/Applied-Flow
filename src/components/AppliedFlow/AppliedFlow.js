import React, { Component } from 'react';
import ResumeEditor from "../ResumeEditor/ResumeEditor";
import ResumePreviewer from "../ResumePreviewer/ResumePreviewer";

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

		this.onResumeChange = this.onResumeChange.bind(this);
		this.onMaskChange = this.onMaskChange.bind(this);
	}

	render() {
		return ([
			<ResumeEditor key="ResumeEditor" resume={this.state.resume} onChange={this.onResumeChange} className="card" />,
			<ResumePreviewer key="ResumePreviewer" resume={this.state.resume} className="card" />
		]);
	}

	onResumeChange(newResume) {
		this.setState(() => ({
			resume: newResume
		}));
	}

	onMaskChange(newMask) {
		this.setState(() => ({
			mask: newMask
		}));
	}

	static generateID() {
		return Math.floor(Math.random() * (1000000000 - -1000000000 + 1)) + -1000000000;
	}
}

export default AppliedFlow;
