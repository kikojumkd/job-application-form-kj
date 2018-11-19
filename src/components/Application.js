import React, { Component } from 'react';

class Application extends Component {
  render() {
  return (
    <div className="post">
      <h2 className="post_title">Applicant name: {this.props.application.name}</h2>
      <p className="post_message"><b>Email:</b> {this.props.application.email}</p>
      <p className="post_message"><b>Address:</b> {this.props.application.address}, {this.props.application.country}</p>
      <p className="post_message"><b>Phone number:</b> {this.props.application.phone}</p>
      <p className="post_message"><b>Message:</b> {this.props.application.message}</p>
      <p className="post_message"><b>Position:</b> {this.props.application.position}</p>
    </div>
  );
 }
}
export default Application;