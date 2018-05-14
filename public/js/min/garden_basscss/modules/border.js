// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.modules.border');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden_basscss.util');
garden_basscss.modules.border.width = (function garden_basscss$modules$border$width(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,garden_basscss.vars.vars),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"width","width",-384071477)], null));
});
garden_basscss.modules.border.radius = (function garden_basscss$modules$border$radius(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,garden_basscss.vars.vars),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null));
});
garden_basscss.modules.border.gen_border_styles = (function garden_basscss$modules$border$gen_border_styles(){
var w = garden_basscss.modules.border.width.call(null);
return cljs.core.map.call(null,((function (w){
return (function (dir){
var dir__$1 = (((dir == null))?"":["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".border",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir__$1)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([["border",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir__$1),"-style"].join(''),"solid",["border",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir__$1),"-width"].join(''),w])], null);
});})(w))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"top","top",-215740434,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"left","left",1241415590,null)], null));
});
garden_basscss.modules.border.gen_rounded_styles = (function garden_basscss$modules$border$gen_rounded_styles(){
var r = garden_basscss.modules.border.radius.call(null);
return cljs.core.map.call(null,((function (r){
return (function (p__23361){
var vec__23362 = p__23361;
var dir = cljs.core.nth.call(null,vec__23362,(0),null);
var trbl = cljs.core.nth.call(null,vec__23362,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".rounded-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),garden_basscss.util.render_trbl.call(null,trbl)], null)], null);
});})(r))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),r,r,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),r,r], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0),(0),r], null)], null)], null));
});
garden_basscss.modules.border.stylesheet = (function garden_basscss$modules$border$stylesheet(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden_basscss.modules.border.gen_border_styles.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".border-none",".border-none",389840103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".rounded",".rounded",-1247994251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),garden_basscss.modules.border.radius.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".circle",".circle",19017888),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null),garden_basscss.modules.border.gen_rounded_styles.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".not-rounded",".not-rounded",-1326140992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0)], null)], null)], null);
});
