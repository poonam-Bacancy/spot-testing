// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.stylesheets.colors');
goog.require('cljs.core');
goog.require('garden.color');
spots.stylesheets.colors.colors = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"black","black",1294279647),"#000",new cljs.core.Keyword(null,"white","white",-483998618),"#fff",new cljs.core.Keyword(null,"gray","gray",1013268388),"#808181",new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825),"#C7C7C7",new cljs.core.Keyword(null,"cyan","cyan",1118839274),"#86D6F6",new cljs.core.Keyword(null,"red","red",-969428204),"#EC1C23",new cljs.core.Keyword(null,"blue","blue",-622100620),"#0FA5F5"], null);
spots.stylesheets.colors.make_color_variations = (function spots$stylesheets$colors$make_color_variations(colors){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var base_name = cljs.core.name.call(null,k);
return cljs.core.assoc.call(null,m,k,v,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_name),"-l"].join('')),garden.color.as_hex.call(null,garden.color.lighten.call(null,v,(10))),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_name),"-d"].join('')),garden.color.as_hex.call(null,garden.color.darken.call(null,v,(10))));
}),cljs.core.PersistentArrayMap.EMPTY,colors);
});
spots.stylesheets.colors.colors_with_variations = spots.stylesheets.colors.make_color_variations.call(null,spots.stylesheets.colors.colors);
spots.stylesheets.colors.transition = (function spots$stylesheets$colors$transition(prop){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,prop))," 0.10s ease-in-out"].join('');
});
spots.stylesheets.colors.gen_colors_styles = (function spots$stylesheets$colors$gen_colors_styles(class_name,prop){
return cljs.core.map.call(null,(function (p__20682){
var vec__20683 = p__20682;
var color_name = cljs.core.nth.call(null,vec__20683,(0),null);
var val = cljs.core.nth.call(null,vec__20683,(1),null);
var color_name__$1 = cljs.core.name.call(null,color_name);
var normal_class = [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_name__$1)].join('');
var hover_class = [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"-h-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_name__$1)].join('');
var darken_val = garden.color.darken.call(null,val,(10));
var lighten_val = garden.color.lighten.call(null,val,(10));
var hover = ":hover";
var make_important = ((function (color_name__$1,normal_class,hover_class,darken_val,lighten_val,hover,vec__20683,color_name,val){
return (function (p1__20681_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20681_SHARP_)," !important"].join('');
});})(color_name__$1,normal_class,hover_class,darken_val,lighten_val,hover,vec__20683,color_name,val))
;
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_class,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(normal_class),"-d"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,darken_val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(normal_class),"-l"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,lighten_val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),"-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,darken_val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),"-l",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,lighten_val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(normal_class),"-i"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,val)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(normal_class),"-d-i"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,darken_val)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(normal_class),"-l-i"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,lighten_val)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),"-i",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,val)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),"-d-i",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,darken_val)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class),"-l-i",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,make_important.call(null,lighten_val)])], null)], null);
}),spots.stylesheets.colors.colors);
});
spots.stylesheets.colors.stylesheet = (function spots$stylesheets$colors$stylesheet(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-transparent",".bg-transparent",-593368933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Symbol(null,"transparent","transparent",-433078422,null)], null)], null),spots.stylesheets.colors.gen_colors_styles.call(null,"bg",new cljs.core.Keyword(null,"background-color","background-color",570434026)),spots.stylesheets.colors.gen_colors_styles.call(null,"c",new cljs.core.Keyword(null,"color","color",1011675173)),spots.stylesheets.colors.gen_colors_styles.call(null,"bd",new cljs.core.Keyword(null,"border-color","border-color",-2059162761)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".t-c",".t-c",-1871902092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),spots.stylesheets.colors.transition.call(null,new cljs.core.Keyword(null,"color","color",1011675173))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".t-bg",".t-bg",1137189786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),spots.stylesheets.colors.transition.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".t-bd",".t-bd",-224940914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),spots.stylesheets.colors.transition.call(null,new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".uppercase",".uppercase",896133488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Symbol(null,"uppercase","uppercase",-573544847,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".line-through",".line-through",330400333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null);
});
