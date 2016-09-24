import React from "react";
import {withRouter} from "react-router";
import Modal from "react-modal";

class AppItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddApp = this.handleAddApp.bind(this);
    this.addDisabled = false;
  }

  componentDidMount() {
    if (this.currentUser.apps.includes(this.props.app)) {
      this.addDisabled = true;
    }
  }

  handleAddApp() {
    this.props.addSingleUserApp(this.props.app.id);

  }

// <div>this.props.app.logo</div>
// <div>this.props.app.description</div>
  render() {

    if (this.props.app) {
      return (
        <div className="app-item-container">
          <div>this.props.app.id</div>
          <div>this.props.app.name</div>
          <button className="add-plugin-button"
            onClick={this.handleAddApp}
            disabled = {this.addDisabled}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
    else {
      return (
        <div className="app-item-container">
          <div>App logo</div>
          <div>App name</div>
          <div>App description</div>
          <div onClick={this.handleAppClick}><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
        </div>
      );
    }
  }
}

export default withRouter(AppItem);
