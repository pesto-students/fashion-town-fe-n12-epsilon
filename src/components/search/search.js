import React from 'react'
import { Input } from "antd";
function search() {
    return (
        <Input.Group>
            <Input.Search size="large"
              allowClear
              style={{ width: "100%",borderRadius:"10px"}}
              placeholder='Search...'
            />
          </Input.Group>
    )
}

export default search
