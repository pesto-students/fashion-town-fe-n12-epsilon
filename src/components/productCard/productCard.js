import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Card, Skeleton, Image, Carousel } from "antd";
import { BrandText, TitleText, PriceText } from "./productCardStyledComponents";

function ProductCard(props) {
  const { isLoading, productData } = props;

  const carousel = useRef();
  const [autoPlayFlag, setAutoPlayFlag] = useState(false);

  const handleAutoPlay = () => {
    setAutoPlayFlag(!autoPlayFlag);
  };

  return (
    <Link to={`/product/${productData.product_id}`}>
    <Card 
      onMouseOver={handleAutoPlay}
      onMouseOut={handleAutoPlay}
      loading={isLoading}
      bodyStyle={{ width: 200, padding: "5px" }}
      cover={
        <Carousel ref={carousel} autoplay={autoPlayFlag} autoplaySpeed={1000}>
          {productData.images.map((image, index) => {
            return (
              <div key={index}>
                {index === 0 ? (
                  <Image
                    preview={false}
                    width={200}
                    src={image}
                    placeholder={<Skeleton active={true} />}
                  />
                ) : (
                  <Image preview={false} width={200} src={image} />
                )}
              </div>
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
