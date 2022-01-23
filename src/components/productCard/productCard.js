import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Card, Image, Carousel } from "antd";
import { BrandText, TitleText, PriceText } from "./productCardStyledComponents";
import config from "../../config/config";
import links from "../../config/routeLinks";

function ProductCard(props) {
  const { isLoading, productData } = props;

  const carousel = useRef();
  const [autoPlayFlag, setAutoPlayFlag] = useState(false);

  const handleAutoPlay = () => {
    setAutoPlayFlag(!autoPlayFlag);
  };

  return (
    <Link to={`/${links.product}/${productData.product_id}`}>
      <Card
        onMouseOver={handleAutoPlay}
        onMouseOut={handleAutoPlay}
        loading={isLoading}
        bodyStyle={{ width: 200, padding: "5px" }}
        cover={
          <Carousel ref={carousel} autoplay={autoPlayFlag} autoplaySpeed={1000}>
            {productData.images.map((image) => {
              return (
                <Image
                  preview={false}
                  width={200}
                  src={image}
                  fallback={config.fallbackImage}
                />
              );
            })}
          </Carousel>
        }
      >
        <BrandText>{productData.brand}</BrandText>
        <TitleText>{productData.title}</TitleText>
        <PriceText>Rs. {productData.price}</PriceText>
      </Card>
    </Link>
  );
}

export default ProductCard;
