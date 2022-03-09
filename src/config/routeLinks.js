import config from "./config"
const queryForFirstPage = `page=1&itemCount=${config.itemsPerPage}`;
const links = {}
links.home= "/"
links.address = "address"
links.signIn = "signIn"
links.signUp = "signUp"
links.shop = "shop";
links.sell = "sell"
links.checkout = "checkout"
links.orderHistory = "orderHistory"
links.product= "product"
links.menSection = `?idealFor=Men&productCategory=Clothing&page=1&${queryForFirstPage}`;
links.womenSection = `?idealFor=Women&productCategory=Clothing&${queryForFirstPage}`;
links.accessoriesSection = `?productCategory=Accessories&${queryForFirstPage}`;
links.livingSections = `?productCategory=Home&${queryForFirstPage}`;
links.freshArrivals= "freshArrivals"
export default links