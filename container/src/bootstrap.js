import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("Container");

mountProducts(document.getElementById("products-container"));
mountCart(document.getElementById("cart-container"));
