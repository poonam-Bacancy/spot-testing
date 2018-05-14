// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.spinner');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('spots.stylesheets.colors');
spots.ui.components.spinner.render_line = (function spots$ui$components$spinner$render_line(opacities,color,i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[(40),(5),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (30)))," 50 50) translate(0 -30)"].join(''),color,(7),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.get.call(null,opacities,i)], null),46.5,(5),(20)])], null);
});
spots.ui.components.spinner.generate_opacities = (function spots$ui$components$spinner$generate_opacities(current){
var opacities = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (i){
return (0.083333333 * ((12) - i));
}),cljs.core.range.call(null,(0),(12))));
var vec__27093 = cljs.core.split_at.call(null,((12) - current),opacities);
var left = cljs.core.nth.call(null,vec__27093,(0),null);
var right = cljs.core.nth.call(null,vec__27093,(1),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,right,left));
});
spots.ui.components.spinner.next_idx = (function spots$ui$components$spinner$next_idx(idx){
if(cljs.core._EQ_.call(null,idx,(11))){
return (0);
} else {
return (idx + (1));
}
});
spots.ui.components.spinner.spinner = (function spots$ui$components$spinner$spinner(dim,color){
var current_idx = reagent.core.atom.call(null,(0));
return ((function (current_idx){
return (function (){
var opacities = spots.ui.components.spinner.generate_opacities.call(null,cljs.core.deref.call(null,current_idx));
setTimeout(((function (opacities,current_idx){
return (function (){
return cljs.core.reset_BANG_.call(null,current_idx,spots.ui.components.spinner.next_idx.call(null,cljs.core.deref.call(null,current_idx)));
});})(opacities,current_idx))
,(40));

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.spin.ml0-5","svg.spin.ml0-5",-144611438),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim),"px"].join(''),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 100",new cljs.core.Keyword(null,"preserve-aspect-ratio","preserve-aspect-ratio",-1746347963),"xMidYMid"], null)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,spots.ui.components.spinner.render_line,opacities,color),cljs.core.range.call(null,(0),(12)))));
});
;})(current_idx))
});
spots.ui.components.spinner.small_white_spinner = (function spots$ui$components$spinner$small_white_spinner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.spinner.spinner,(30),"white"], null);
});
spots.ui.components.spinner.small_blue_spinner = (function spots$ui$components$spinner$small_blue_spinner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.spinner.spinner,(60),new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors)], null);
});
