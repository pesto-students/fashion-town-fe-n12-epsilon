import React from 'react';
import { notification } from "antd";
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';

notification.config({
  top: 100,
  duration: 1,
});
 const openNotification = (message, type) => {
   notification.open({
     message: message,
     icon:
       type === "success" ? (
         <CheckCircleOutlined style={{ color: "green" }} />
       ) : (
         <WarningOutlined style={{ color: "red" }} />
       ),
   });
 };

export default openNotification;
