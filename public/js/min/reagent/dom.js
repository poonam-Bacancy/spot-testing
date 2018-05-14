// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_dom$index');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_19953 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_dom$index.render(comp.call(null),container,((function (_STAR_always_update_STAR_19953){
return (function (){
var _STAR_always_update_STAR_19954 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19954;
}});})(_STAR_always_update_STAR_19953))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19953;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__19956 = arguments.length;
switch (G__19956) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__19958_19962 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__19959_19963 = null;
var count__19960_19964 = (0);
var i__19961_19965 = (0);
while(true){
if((i__19961_19965 < count__19960_19964)){
var v_19966 = cljs.core._nth.call(null,chunk__19959_19963,i__19961_19965);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19966);

var G__19967 = seq__19958_19962;
var G__19968 = chunk__19959_19963;
var G__19969 = count__19960_19964;
var G__19970 = (i__19961_19965 + (1));
seq__19958_19962 = G__19967;
chunk__19959_19963 = G__19968;
count__19960_19964 = G__19969;
i__19961_19965 = G__19970;
continue;
} else {
var temp__5457__auto___19971 = cljs.core.seq.call(null,seq__19958_19962);
if(temp__5457__auto___19971){
var seq__19958_19972__$1 = temp__5457__auto___19971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19958_19972__$1)){
var c__9847__auto___19973 = cljs.core.chunk_first.call(null,seq__19958_19972__$1);
var G__19974 = cljs.core.chunk_rest.call(null,seq__19958_19972__$1);
var G__19975 = c__9847__auto___19973;
var G__19976 = cljs.core.count.call(null,c__9847__auto___19973);
var G__19977 = (0);
seq__19958_19962 = G__19974;
chunk__19959_19963 = G__19975;
count__19960_19964 = G__19976;
i__19961_19965 = G__19977;
continue;
} else {
var v_19978 = cljs.core.first.call(null,seq__19958_19972__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19978);

var G__19979 = cljs.core.next.call(null,seq__19958_19972__$1);
var G__19980 = null;
var G__19981 = (0);
var G__19982 = (0);
seq__19958_19962 = G__19979;
chunk__19959_19963 = G__19980;
count__19960_19964 = G__19981;
i__19961_19965 = G__19982;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
