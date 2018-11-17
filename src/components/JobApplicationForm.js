import React, { Component } from 'react';

class JobApplicationForm extends Component {
	render() {
		return (
			<div>
				<h1>Job Application Form</h1>
				<form>
					<label>Full Name &nbsp;</label>
					<input required type="text" placeholder="Enter your full name" /><br />
					<label>Email &nbsp;</label>
					<input required type="email" placeholder="Enter your email" /><br />
					<label>Phone number &nbsp;</label>
					<input required type="number" placeholder="Enter your phone number" /><br />
					<label>Country &nbsp;</label>
					<input required type="text" placeholder="Enter your country" /><br />
					<label>Address &nbsp;</label>
					<input required type="text" placeholder="Enter your address" /><br />
					<label>Say something about you</label>
					<textarea required rows="5" cols="28" placeholder="Enter Post" /><br /><br />
   					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default JobApplicationForm;