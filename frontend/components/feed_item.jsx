import React from "react";
import {withRouter} from "react-router";
import Modal from "react-modal";

class FeedItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      ModalOpen: false,
    };
  }

  closeModal() {
    this.setState({ ModalOpen: false });
  }

  openModal() {
    this.setState({ ModalOpen: true });
  }


  render() {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.7)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : '75px',
        left            : '150px',
        right           : '150px',
        bottom          : '75px',
        border          : '2px solid #000',
        boxShadow       : '0 0 10px #909090',
        padding         : '25px',
        zIndex          : 11,
        display         : 'flex',
        flexDirection   : 'column',
        justifyContent  : 'center',
        backgroundColor : '#faf6e8'
      }
    };

    const imgsrc = (this.props.feed.picture) ? this.props.feed.picture : "";

    return (
      <div className="feed-item-container">
        <img src={imgsrc}/>
        <a href="#"
          onClick={this.openModal}>
          {this.props.feed.title}</a>
        <div>{this.props.feed.body}</div>
        <div>{this.props.feed.appName}</div>

        <Modal

          isOpen={this.state.ModalOpen}
          onRequestClose={this.closeModal}
          style={style} >

          <div>modal for feed content</div>

        </Modal>
      </div>
    );
  }
}

export default withRouter(FeedItem);
