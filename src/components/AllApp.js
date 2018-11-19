import React, { Component } from 'react';

import { connect } from 'react-redux';

import Application from './Application';

class AllApp extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Applications</h1>
                {this.props.applications.map((application) => <Application key={application.id} application={application} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        applications: state
    }
}
export default connect(mapStateToProps)(AllApp);