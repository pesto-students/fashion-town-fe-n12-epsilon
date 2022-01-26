import React from 'react'
import { Row,Col,Image } from 'antd';


function ProductImages({productDetails}) {
    return (
        <Col xs={24} sm={24} md={12} lg={12}>
            <Row>
              {productDetails.images.map((image, index) => {
                return (
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ padding: 2 }}
                    key={index}
                  >
                    <Image src={image} width={"100%"} />
                  </Col>
                );
              })}
            </Row>
          </Col>
    )
}

export default ProductImages
