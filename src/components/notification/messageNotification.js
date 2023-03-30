import React from "react";
import { notification } from "antd";
import { SuccessIcon, WarningIcon } from "./messageNotificationStyledComponent";

notification.config({
  top: 100,
  duration: 2,
});
const openNotification = (message, type) => {
  notification.open({
    message: message,
    icon: type === "success" ? <SuccessIcon /> : <WarningIcon />,
  });
};

export default openNotification;
