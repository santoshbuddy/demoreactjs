import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: "paper"
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
   console.log("scroll dialog::",this.props.rowData);
    let linkName;
    if (this.props.rowData !== undefined)
      linkName = this.props.rowData.rowData[0];
    else linkName = this.props.linkName;
    return (
      <div>
        <a href="#" onClick={this.handleClickOpen("paper")}>
          {linkName}
        </a>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title"> {linkName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ScrollDialog;
