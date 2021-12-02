import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  iconStyle: {
    minWidth: 100,
    minHeight: 100
  }
});

function DesignIcon(props) {
  const styles = useStyles();
  const StatusImage = props.statusImage;
  console.log("StatusImage", StatusImage);
  return (
    <div>
      <StatusImage className={styles.iconStyle} />
    </div>
  );
}

DesignIcon.propTypes = {
  statusImage: PropTypes.element
};

export default DesignIcon;
