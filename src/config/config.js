import { image } from "../assets/images/fallbackImage";

const config = {};
config.themeColor = "#FF7F3F";
config.googleAuthApi = process.env.REACT_APP_GOOGLE_AUTH_API;
config.serverUrl = "https://fashion-town-server.herokuapp.com/";
config.maxCartSize = 15;
config.sizeArray = ["s", "m", "l"];
config.deliveryCharge = 50;
config.fallbackImage = image;
config.googleCloudUrl =
  "https://firebasestorage.googleapis.com/v0/b/fashion-town.appspot.com/o/";
config.itemsPerPage = 25;
export default config;
