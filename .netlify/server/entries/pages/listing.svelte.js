var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Listing
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
var import_stores_d1750714 = require("../../chunks/stores-d1750714.js");
var Product_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".product.svelte-1p0msis{max-width:max-content;display:flex;justify-content:center;align-items:center;flex-direction:column}.btns.svelte-1p0msis{display:flex}a.svelte-1p0msis,button.svelte-1p0msis{width:100px;height:30px;color:white;background-color:orangered;text-decoration:none;display:flex;justify-content:center;align-items:center;border:none;margin:0.5em}img.svelte-1p0msis{width:100%;max-height:400px}")();
const css$1 = {
  code: ".product.svelte-1p0msis{max-width:max-content;display:flex;justify-content:center;align-items:center;flex-direction:column}.btns.svelte-1p0msis{display:flex}a.svelte-1p0msis,button.svelte-1p0msis{width:100px;height:30px;color:white;background-color:orangered;text-decoration:none;display:flex;justify-content:center;align-items:center;border:none;margin:0.5em}img.svelte-1p0msis{width:100%;max-height:400px}",
  map: null
};
const Product = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$result.css.add(css$1);
  return `<div class="${"product  svelte-1p0msis"}"><img${(0, import_index_1259f1f6.a)("src", product.imageUrl, 0)} alt="${""}" class="${"svelte-1p0msis"}">
	<h1>${(0, import_index_1259f1f6.e)(product.name)}</h1>
	<div class="${"btns svelte-1p0msis"}"><a${(0, import_index_1259f1f6.a)("href", `/product/` + product.id, 0)} class="${"svelte-1p0msis"}">View Item</a>
		<button class="${"snipcart-add-item svelte-1p0msis"}"${(0, import_index_1259f1f6.a)("data-item-id", product.id, 0)}${(0, import_index_1259f1f6.a)("data-item-price", product.price, 0)}${(0, import_index_1259f1f6.a)("data-item-description", product.description, 0)}${(0, import_index_1259f1f6.a)("data-item-image", product.imageUrl, 0)}${(0, import_index_1259f1f6.a)("data-item-name", product.name, 0)}>Add me to cart</button></div>
</div>`;
});
var Products_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h2.svelte-zsj2aq{text-align:center}#products.svelte-zsj2aq{width:100%;display:grid;grid-gap:1em;place-items:center;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr))}")();
const css = {
  code: "h2.svelte-zsj2aq{text-align:center}#products.svelte-zsj2aq{width:100%;display:grid;grid-gap:1em;place-items:center;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr))}",
  map: null
};
const Products = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { productsList: productsList2 } = $$props;
  if ($$props.productsList === void 0 && $$bindings.productsList && productsList2 !== void 0)
    $$bindings.productsList(productsList2);
  $$result.css.add(css);
  return `<h2 class="${"svelte-zsj2aq"}">Our Products</h2>
<section id="${"products"}" class="${"svelte-zsj2aq"}">${(0, import_index_1259f1f6.b)(productsList2, (product) => {
    return `${(0, import_index_1259f1f6.v)(Product, "Product").$$render($$result, { product }, {}, {})}`;
  })}
</section>`;
});
const Listing = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_1259f1f6.v)(Products, "Products").$$render($$result, { productsList: import_stores_d1750714.p }, {}, {})}`;
});
