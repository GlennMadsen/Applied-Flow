import React, { Component } from 'react';

class ResumePreviewer extends Component {
	render() {
		const {name, contacts, sections} = this.props.resume;
		return (
			<article className={this.props.className + " ResumePreviewer"} >
				<header id="cardTitle"><h1>Preview</h1></header>
				<h1>{name}</h1>
				<ol>
					{contacts.map((contact) =>
						<li key={contact.id}>
							{contact.text + " "}
							{contact.link &&
								<a href={contact.link}>[ {contact.link} ]</a>
							}
						</li>
					)}
				</ol>
				{sections.map((section) =>
					<section key={section.id}>
						<h2>{section.heading}</h2>
						{section.subsections.map((subsection) =>
							<section key={subsection.id}>
								<h3>{subsection.heading}</h3>
								<h4>{subsection.subheading}</h4>
								<ol>
									{subsection.details.map((detail) =>
										<li key={detail.id}>{detail.text}</li>
									)}
								</ol>
							</section>
						)}
					</section>
				)}
			</article>
		);
	}
}

export default ResumePreviewer;
