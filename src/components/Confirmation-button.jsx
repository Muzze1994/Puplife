import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types';

class ConfirmationBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgree = (e) => {
    console.log("Yes");
    this.handleClose();
    this.props.myFunction(e);
  };
  handleDisagree = () => {
    console.log("No");
    this.handleClose();
    
  };
  render() {
    return (
      <div>
        {/* Button to trigger the opening of the dialog */}
        <button className="btn-light"  onClick={this.handleClickOpen}>{this.props.message}</button>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* Dialog with title and description*/}
          <DialogTitle id="alert-dialog-title">
            {this.props.dialogTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.dialogDescr}
            </DialogContentText>
          </DialogContent>
          {/* Buttons that are displayed when dialog is displayed*/}
          <DialogActions>
            <button onClick={this.handleDisagree} color="primary">
              {this.props.disagree}
            </button>
            <button onClick={this.handleAgree} id={this.props.id} autoFocus> 
            {this.props.agree}
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ConfirmationBtn.propTypes = {
  agree: PropTypes.string,
  disagree: PropTypes.string,
  message: PropTypes.string,
  dialogTitle: PropTypes.string,
  dialogDescr: PropTypes.string,
  handleClick: PropTypes.func
}


export default ConfirmationBtn;
