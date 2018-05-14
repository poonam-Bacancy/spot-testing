// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.css.core');
goog.require('cljs.core');
goog.require('garden.core');
if(typeof keechma.toolbox.css.core.component_styles !== 'undefined'){
} else {
keechma.toolbox.css.core.component_styles = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
keechma.toolbox.css.core.register_component_styles = (function keechma$toolbox$css$core$register_component_styles(class$,styles){
if(!(cljs.core.empty_QMARK_.call(null,styles))){
var styles__$1 = ((!(cljs.core.vector_QMARK_.call(null,styles)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles);
return cljs.core.swap_BANG_.call(null,keechma.toolbox.css.core.component_styles,cljs.core.conj,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null),styles__$1));
} else {
return null;
}
});
/**
 * Injects a style tag with the id 'injected-css' into the page's head tag
 * Returns generated style tag
 */
keechma.toolbox.css.core.generate_and_inject_style_tag = (function keechma$toolbox$css$core$generate_and_inject_style_tag(){
var page_head = document.head;
var style_tag = document.createElement("style");
style_tag.setAttribute("id","injected-css");

return page_head.appendChild(style_tag);
});
/**
 * Updates #injected-css with provided argument (should be some CSS string 
 * -- e.g. output from garden's css fn) If page does not have #injected-css then
 * will create it via call to generate-and-inject-style-tag
 */
keechma.toolbox.css.core.update_page_css = (function keechma$toolbox$css$core$update_page_css(stylesheet){
var style_tag_selector = "#injected-css";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?keechma.toolbox.css.core.generate_and_inject_style_tag.call(null):style_tag_query);
return (style_tag["innerHTML"] = garden.core.css.call(null,stylesheet));
});
