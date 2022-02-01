import config from "./config"
const links = {}
links.home= "/"
links.address = "address"
links.signIn = "signIn"
links.signUp = "signUp"
links.shop = "shop"
links.sell = "sell"
links.checkout = "checkout"
links.orderHistory = "orderHistory"
links.product= "product"
links.menSection = `?idealFor=Men&productCategory=Clothing&page=1&itemCount=${config.itemsPerPage}`;
links.womenSection = `?idealFor=Women&productCategory=Clothing&page=1&itemCount=${config.itemsPerPage}`;
links.accessoriesSection = `?productCategory=Accessories&page=1&itemCount=${config.itemsPerPage}`;
links.livingSections = `?productCategory=Home&page=1&itemCount=${config.itemsPerPage}`;
links.freshArrivals= "freshArrivals"
export default links