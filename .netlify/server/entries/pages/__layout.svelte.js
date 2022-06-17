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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
const Nav = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav><ul><li><a href="${"/"}">Go Home</a></li>
		<li><a href="${"/listing"}">View Our Listing</a></li></ul></nav>`;
});
var global = /* @__PURE__ */ (() => "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody, html {\n    width: 100%;\n\n}")();
const _layout = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${``}`, ""}

${(0, import_index_1259f1f6.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
