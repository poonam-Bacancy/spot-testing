// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.modules.position');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden_basscss.util');
garden_basscss.modules.position.z_indices = (function garden_basscss$modules$position$z_indices(){
return new cljs.core.Keyword(null,"z-indices","z-indices",503110018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
});
garden_basscss.modules.position.stylesheet = (function garden_basscss$modules$position$stylesheet(){
var z = garden_basscss.modules.position.z_indices.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden_basscss.util.gen_list.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relative","relative",1663328389,null),new cljs.core.Symbol(null,"absolute","absolute",-999049291,null),new cljs.core.Symbol(null,"fixed","fixed",1078527169,null)], null)),cljs.core.map.call(null,((function (z){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-0"].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([v,(0)])], null);
});})(z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"left","left",1241415590,null)], null)),cljs.core.map.call(null,((function (z){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".z",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.get.call(null,z,v)], null)], null);
});})(z))
,cljs.core.range.call(null,(1),(5)))], null);
});
