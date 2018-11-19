import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobApplicationForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.getName.value;
		const email = this.getEmail.value;
		const phone = this.getPhone.value;
		const country = this.getCountry.value;
		const address = this.getAddress.value;
		const message = this.getMessage.value;
		const position = this.getPosition.value;
		const data = {
			id: new Date(),
			name,
			email,
			phone,
			country,
			address,
			message,
			position
		};

		this.props.dispatch({
			type: 'ADD_POST',
			data
		});

		this.getName.value = '';
		this.getEmail.value = '';
		this.getPhone.value = '';
		this.getCountry.value = '';
		this.getAddress.value = '';
		this.getMessage.value = '';
		this.getPosition.value = '';

	}

	render() {
		return (
			<div className="post-container">
				<form className="form" onSubmit={this.handleSubmit}>
					<label>Full Name &nbsp;</label>
					<input required type="text" ref={(input) => this.getName = input} placeholder="Enter your full name" /><br />
					<label>Email &nbsp;</label>
					<input required type="email" ref={(input) => this.getEmail = input} placeholder="Enter your email" /><br />
					<label>Phone number &nbsp;</label>
					<input required type="number" ref={(input) => this.getPhone = input} placeholder="Enter your phone number" /><br />
					<label>Country &nbsp;</label>
					<input required type="text" ref={(input) => this.getCountry = input} placeholder="Enter your country" /><br />
					<label>Address &nbsp;</label>
					<input required type="text" ref={(input) => this.getAddress = input} placeholder="Enter your address" /><br />
					<label>Say something about you</label><br />
					<textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter message" /><br />
					<label>Position</label>
					<select ref={(input) => this.getPosition = input}>
						<option value="software engineer 1">Software Engineer 1</option>
						<option value="software engineer 2">Software Engineer 2</option>
						<option value="other">Other</option>
					</select><br /><br />
   					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default connect()(JobApplicationForm);