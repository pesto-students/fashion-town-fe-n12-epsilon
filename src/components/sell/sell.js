import React, { useState } from "react";
import { Form, Select } from "antd";
import { getStorage, ref, uploadString } from "firebase/storage";
import {
  SellNowContainer,
  SellNowInput,
  ProductDetailsWrapper,
  NextButton,
} from "./sellStyledComponent";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import openNotification from "../notification/messageNotification";
import Title from "antd/lib/typography/Title";
import UploadImage from "./upload";
import { ADD_PRODUCT_MUTATION } from "../../graphQlQueries/addProductQuery";
import config from "../../config/config";
import links from "config/routeLinks";

const { Option } = Select;

function Sell() {
  const [fileList, setFileList] = useState([]);
  const storage = getStorage();
  const navigate = useNavigate();
  const [addNewProduct] = useMutation(ADD_PRODUCT_MUTATION);

  /**
   *
   * @returns cloud image link
   */
  const uploadImagesAndGetImageUrl = () => {
    return new Promise((resolve, reject) => {
      const imageUrlArray = [];
      try {
        fileList.forEach(async (imageFile) => {
          const storageRef = ref(storage, imageFile.name);
          const base64Image = imageFile.thumbUrl;
          const snapShot = await uploadString(
            storageRef,
            base64Image,
            "data_url"
          );
          const imageUrl =
            config.googleCloudUrl + snapShot.metadata.fullPath + "?alt=media";
          imageUrlArray.push(imageUrl);
        });
        resolve(imageUrlArray);
      } catch (error) {
        reject(error);
      }
    });
  };

  const addBodyAndImages = async (formData) => {
    try {
      // const imageUrlArray = await uploadImagesAndGetImageUrl();
      const { brand, title, product_details } = formData;
      formData["body"] = `${brand}, ${title}, ${product_details}`;
      formData["images"] = ["load fallback image"]; //imageUrlArray;  Upload Image to be implemented In phase 2
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (formData) => {
    // if (fileList.length === 0) {
    //   openNotification("Please upload images");
    //   return;
    // }
    await addBodyAndImages(formData);
    console.log(formData);
    await addNewProduct({ variables: { ...formData } });
    openNotification("Product added", "success");
    navigate(links.home)
  };

  const onFinishFailed = async (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SellNowContainer>
      <ProductDetailsWrapper>
        <Title level={4}>Product Details</Title>
        <Form
          name="basic"
          size="large"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand name",
              },
            ]}
          >
            <SellNowInput placeholder="Product brand" />
          </Form.Item>

          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input product title",
              },
            ]}
          >
            <SellNowInput placeholder="Product title" />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: "Please input product price",
              },
            ]}
          >
            <SellNowInput placeholder="Price in INR" type={"number"} />
          </Form.Item>
          <Form.Item
            name="product_details"
            rules={[
              {
                required: true,
                message: "Please input product details",
              },
            ]}
          >
            <SellNowInput placeholder="Product Details" />
          </Form.Item>
          <Form.Item
            name="product_category"
            initialValue="Clothing"
            rules={[
              {
                message: "Please input product category",
              },
            ]}
          >
            <Select defaultValue="Clothing">
              <Option value="Clothing">Clothing</Option>
              <Option value="Accessories">Accessories</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dominant_color"
            rules={[
              {
                message: "Please input product color",
              },
            ]}
          >
            <SellNowInput placeholder="Product Color" />
          </Form.Item>
          <Form.Item
            name="ideal_for"
            initialValue="Men"
            rules={[
              {
                message: "Please select ideal for",
              },
            ]}
          >
            <Select defaultValue="Unisex">
              <Option value="Unisex">Unisex</Option>
              <Option value="Men">Men</Option>
              <Option value="Women">Women</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="size_fit"
            rules={[
              {
                message: "Please input size & fit",
              },
            ]}
          >
            <SellNowInput placeholder="Size & fit" />
          </Form.Item>
          <Form.Item
            name="care_instructions"
            rules={[
              {
                message: "Please input care instructions",
              },
            ]}
          >
            <SellNowInput placeholder="Care instructions" />
            {/* </Form.Item>
          <UploadImage fileList={fileList} setFileList={setFileList} />

          <Form.Item> */}
            <NextButton htmlType="submit">CONTINUE</NextButton>
          </Form.Item>
        </Form>
      </ProductDetailsWrapper>
    </SellNowContainer>
  );
}

export default Sell;
