// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.util.helpers');
goog.require('cljs.core');
goog.require('spots.util.gql_api');
goog.require('clojure.string');
spots.util.helpers.get_font_name = (function spots$util$helpers$get_font_name(font_id,font){
if(cljs.core.truth_(font_id)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24866_SHARP_),font_id);
}),font)));
} else {
return "Verdana";
}
});
spots.util.helpers.get_property_name = (function spots$util$helpers$get_property_name(property_id,properties){
if(cljs.core.truth_(property_id)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24867_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24867_SHARP_),property_id);
}),properties)));
} else {
return "None";
}
});
spots.util.helpers.get_doorman_status = (function spots$util$helpers$get_doorman_status(property_id,properties){
if(cljs.core.truth_(property_id)){
return new cljs.core.Keyword(null,"askForDoorman","askForDoorman",668875537).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24868_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24868_SHARP_),property_id);
}),properties)));
} else {
return false;
}
});
spots.util.helpers.get_color_hex = (function spots$util$helpers$get_color_hex(color_id,colors){
if(cljs.core.truth_(color_id)){
return new cljs.core.Keyword(null,"hexValue","hexValue",697549400).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24869_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24869_SHARP_),color_id);
}),colors)));
} else {
return "#000000";
}
});
spots.util.helpers.get_message_params = (function spots$util$helpers$get_message_params(font_coll,color_coll,design){
var font_id = new cljs.core.Keyword(null,"fontId","fontId",-474874285).cljs$core$IFn$_invoke$arity$1(design);
var color_id = new cljs.core.Keyword(null,"colorId","colorId",935519260).cljs$core$IFn$_invoke$arity$1(design);
var text_size = new cljs.core.Keyword(null,"textSize","textSize",524775797).cljs$core$IFn$_invoke$arity$1(design);
var three_line_QMARK_ = new cljs.core.Keyword(null,"threeLine","threeLine",203582880).cljs$core$IFn$_invoke$arity$1(design);
var font_family = spots.util.helpers.get_font_name.call(null,font_id,font_coll);
var color = spots.util.helpers.get_color_hex.call(null,color_id,color_coll);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"first-line","first-line",285094849),new cljs.core.Keyword(null,"firstLine","firstLine",-51539625).cljs$core$IFn$_invoke$arity$1(design),new cljs.core.Keyword(null,"three-line?","three-line?",-169415760),three_line_QMARK_,new cljs.core.Keyword(null,"second-line","second-line",1744640763),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124).cljs$core$IFn$_invoke$arity$1(design),new cljs.core.Keyword(null,"third-line","third-line",-558463853),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214).cljs$core$IFn$_invoke$arity$1(design),new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"curved","curved",1164242293).cljs$core$IFn$_invoke$arity$1(design),new cljs.core.Keyword(null,"font-family","font-family",-667419874),font_family,new cljs.core.Keyword(null,"text-size","text-size",-945618309),text_size,new cljs.core.Keyword(null,"color","color",1011675173),color], null);
});
spots.util.helpers.generate_resource_link = cljs.core.identity;
spots.util.helpers.constants = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shipping-methods","shipping-methods",1079397901),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pickup","pickup",1997454190),"pickup",new cljs.core.Keyword(null,"manhattan_delivery","manhattan_delivery",-1673516500),"manhattan_delivery",new cljs.core.Keyword(null,"shipping","shipping",-1732817159),"shipping"], null),new cljs.core.Keyword(null,"order-count_by","order-count_by",735870146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"the-dozen","the-dozen",1447506425),"the_dozen",new cljs.core.Keyword(null,"packs-of-four","packs-of-four",2088006172),"packs_of_four"], null),new cljs.core.Keyword(null,"order-type","order-type",868788576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"personal","personal",342373220),"personal",new cljs.core.Keyword(null,"corporate","corporate",2037871850),"corporate"], null),new cljs.core.Keyword(null,"cupcake-medium-type","cupcake-medium-type",1173958200),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"image",new cljs.core.Keyword(null,"clipart","clipart",-2064250491),"clipart",new cljs.core.Keyword(null,"message","message",-406056002),"message"], null),new cljs.core.Keyword(null,"text-size","text-size",-945618309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"small","small",2133478704),"small",new cljs.core.Keyword(null,"medium","medium",-1864319384),"medium",new cljs.core.Keyword(null,"large","large",-196820544),"large"], null)], null);
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
spots.util.helpers.dissoc_in = (function spots$util$helpers$dissoc_in(m,p__24870){
var vec__24871 = p__24870;
var seq__24872 = cljs.core.seq.call(null,vec__24871);
var first__24873 = cljs.core.first.call(null,seq__24872);
var seq__24872__$1 = cljs.core.next.call(null,seq__24872);
var k = first__24873;
var ks = seq__24872__$1;
var keys = vec__24871;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = spots.util.helpers.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
