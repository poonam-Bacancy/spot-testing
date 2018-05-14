// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.svg_preview');
goog.require('cljs.core');
goog.require('spots.ui.components.message_svg');
spots.ui.components.svg_preview.svg_default_params = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"curved","curved",1164242293),false,new cljs.core.Keyword(null,"first-line","first-line",285094849),"",new cljs.core.Keyword(null,"second-line","second-line",1744640763),"",new cljs.core.Keyword(null,"third-line","third-line",-558463853),"",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Verdana",new cljs.core.Keyword(null,"color","color",1011675173),"#000000"], null);
spots.ui.components.svg_preview.render_one_line_message = (function spots$ui$components$svg_preview$render_one_line_message(params){
var map__27298 = params;
var map__27298__$1 = ((((!((map__27298 == null)))?((((map__27298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27298):map__27298);
var text_size = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"text-size","text-size",-945618309));
var second_line = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"second-line","second-line",1744640763));
var font_family = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874));
var color = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var G__27300 = text_size;
switch (G__27300) {
case "small":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.message_svg.single_line_s,second_line,font_family,color], null);

break;
case "medium":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.message_svg.single_line_m,second_line,font_family,color], null);

break;
case "large":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.message_svg.single_line_l,second_line,font_family,color], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27300)].join('')));

}
});
spots.ui.components.svg_preview.render_three_line_message = (function spots$ui$components$svg_preview$render_three_line_message(params){
var map__27302 = params;
var map__27302__$1 = ((((!((map__27302 == null)))?((((map__27302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27302):map__27302);
var curved = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"curved","curved",1164242293));
var first_line = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"first-line","first-line",285094849));
var second_line = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"second-line","second-line",1744640763));
var third_line = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"third-line","third-line",-558463853));
var font_family = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874));
var color = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if(cljs.core.truth_(curved)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.message_svg.curved_text,first_line,second_line,third_line,font_family,color], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.message_svg.flat_text,first_line,second_line,third_line,font_family,color], null);
}
});
spots.ui.components.svg_preview.render = (function spots$ui$components$svg_preview$render(svg_params){
var new_params = cljs.core.merge.call(null,spots.ui.components.svg_preview.svg_default_params,svg_params);
var map__27304 = new_params;
var map__27304__$1 = ((((!((map__27304 == null)))?((((map__27304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27304):map__27304);
var three_line_QMARK_ = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"three-line?","three-line?",-169415760));
if(cljs.core.truth_(three_line_QMARK_)){
return spots.ui.components.svg_preview.render_three_line_message.call(null,new_params);
} else {
return spots.ui.components.svg_preview.render_one_line_message.call(null,new_params);
}
});
