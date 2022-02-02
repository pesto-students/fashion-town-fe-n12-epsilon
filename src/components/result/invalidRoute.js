import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import links from "config/routeLinks";
function InvalidRoute() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={links.home}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default InvalidRoute;
