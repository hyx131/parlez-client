import React, { useState, useContext, useEffect } from "react";
import pic from "../../../src/assets/img/Image-1.png";
import "./UserProfile.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import { socket } from "../../server_api";
import { ProfileContext, ChatViewContext } from "../../Context";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const SideList = side => {
  const classes = useStyles();
  const { masterState } = useContext(ChatViewContext);
  const { profileState, dispatchProfile } = useContext(ProfileContext);
  const [changeName, setChangeName] = useState("");
  const [changeAvatar, setChangeAvatar] = useState("");
  const [changeStatus, setChangeStatus] = useState("");

  const onChangeName = e => {
    setChangeName(e.target.value);
  };

  const onChangeAvatar = e => {
    setChangeAvatar(e.target.value);
  };

  const onChangeStatus = e => {
    setChangeStatus(e.target.value);
  };

  const nameHandler = () => {
    console.log("masterState INFORMATIONNNNNNNNNN~N~N~~~", masterState.userId);
    socket.emit("change name", {
      creatorUserId: masterState.userId,
      username: changeName
    });
  };

  useEffect(() => {
    socket.on("updated username data", data => {
      dispatchProfile({ type: "UPDATED_USERNAME", data });
      console.log("CHECKING FRONT END FOR RECEIVING DATA BACK", data);
      console.log(
        "CHECKING FRONT END FOR RECEIVING DATA.username BACK",
        data.username
      );
    });
  }, []);

  const urlHandler = () => {
    //set name here
  };

  const statusHandler = () => {
    //set name here
  };

  return (
    <div className="sideDrawerBox" role="presentation">
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="testGrid"
        >
          <img alt="anchen" src={pic} className="bigAvatarBox" />
        </Grid>
      </div>
      <div className="profileInfoBox">
        <h5 className="profileName">{profileState.username}</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Edit Name"
            value={changeName}
            onChange={onChangeName}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button
            color="secondary"
            aria-label="edit"
            className="fab"
            onClick={nameHandler}
          >
            <EditIcon />
          </button>
        </div>
        <h5 className="profileName">Change Avatar</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="URL"
            value={changeAvatar}
            onChange={onChangeAvatar}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button
            color="secondary"
            aria-label="edit"
            className="fab"
            onClick={urlHandler}
          >
            <EditIcon />
          </button>
        </div>

        <h5 className="profileName">Update Status</h5>
        <div className="editProfileContent">
          <TextField
            id="standard-number"
            label="Status"
            value={changeStatus}
            onChange={onChangeStatus}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <button
            color="secondary"
            aria-label="edit"
            className="fab"
            onClick={statusHandler}
          >
            <EditIcon className="editBtnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideList;
