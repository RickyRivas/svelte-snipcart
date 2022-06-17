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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../../chunks/index-1259f1f6.js");
var import_stores_d1750714 = require("../../../chunks/stores-d1750714.js");
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-1m9pt9k{padding:1em}.full-card.svelte-1m9pt9k{width:100%;max-width:1000px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin:auto}img.svelte-1m9pt9k{width:400px}button.svelte-1m9pt9k{width:100px;height:30px;color:white;background-color:orangered;text-decoration:none;display:flex;justify-content:center;align-items:center;border:none;margin:0.5em}")();
const css = {
  code: "section.svelte-1m9pt9k{padding:1em}.full-card.svelte-1m9pt9k{width:100%;max-width:1000px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin:auto}img.svelte-1m9pt9k{width:400px}button.svelte-1m9pt9k{width:100px;height:30px;color:white;background-color:orangered;text-decoration:none;display:flex;justify-content:center;align-items:center;border:none;margin:0.5em}",
  map: null
};
async function load({ params }) {
  const id = params.id;
  const foundProd = import_stores_d1750714.p.find((prod) => prod.id == id);
  return { props: { product: foundProd } };
}
const U5Bidu5D = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$result.css.add(css);
  return `<section class="${"svelte-1m9pt9k"}"><div class="${"full-card svelte-1m9pt9k"}"><img${(0, import_index_1259f1f6.a)("src", product.imageUrl, 0)} alt="${""}" class="${"svelte-1m9pt9k"}">
		<div><h1>${(0, import_index_1259f1f6.e)(product.name)}</h1>
			<h2>Price: <span>${(0, import_index_1259f1f6.e)(product.price)}</span></h2>
			<p>${(0, import_index_1259f1f6.e)(product.description)}</p>
			<button class="${"snipcart-add-item svelte-1m9pt9k"}"${(0, import_index_1259f1f6.a)("data-item-id", product.id, 0)}${(0, import_index_1259f1f6.a)("data-item-price", product.price, 0)}${(0, import_index_1259f1f6.a)("data-item-description", product.description, 0)}${(0, import_index_1259f1f6.a)("data-item-image", product.imageUrl, 0)}${(0, import_index_1259f1f6.a)("data-item-name", product.name, 0)}>Add me to cart</button></div></div>
</section>`;
});
