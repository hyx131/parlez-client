import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import AddFriend from "./AddFriend/AddFriend";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleMenu() {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const [addButton, setAddButton] = useState(false);

  function handleClick(event) {
    setAddButton(event.currentTarget);
  }

  function handleClose() {
    setAddButton(null);
  }

  const [modalShow, setModalShow] = React.useState(false);

  function handleModalOpen() {
    setModalShow(true);
  }

  function handleModalClose() {
    setModalShow(false);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddCircleIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={addButton}
        keepMounted
        open={Boolean(addButton)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleModalOpen} onClose={handleModalClose}>
          Add New Friends
        </MenuItem>
        <MenuItem onClick={handleClose}>Create New Chat</MenuItem>
      </Menu>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modalShow}
        onClose={handleModalClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <AddFriend />
        </div>
      </Modal>
    </div>
  );
}