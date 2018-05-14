// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.modules.margin');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden_basscss.util');
garden_basscss.modules.margin.spaces = (function garden_basscss$modules$margin$spaces(){
return new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
});
garden_basscss.modules.margin.neg = (function garden_basscss$modules$margin$neg(unit){
if(cljs.core._EQ_.call(null,unit,(0))){
return (0);
} else {
var mag = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(unit);
return cljs.core.assoc.call(null,unit,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),(mag - ((2) * mag)));
}
});
garden_basscss.modules.margin.stylesheet = (function garden_basscss$modules$margin$stylesheet(){
var s = garden_basscss.modules.margin.spaces.call(null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden_basscss.util.gen_margin_padding.call(null,new cljs.core.Keyword(null,"margin","margin",-995903681)),cljs.core.map.call(null,((function (s){
return (function (p__23355){
var vec__23356 = p__23355;
var key = cljs.core.nth.call(null,vec__23356,(0),null);
var val = cljs.core.nth.call(null,vec__23356,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".mxn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden_basscss.modules.margin.neg.call(null,val),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),garden_basscss.modules.margin.neg.call(null,val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".myn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden_basscss.modules.margin.neg.call(null,val),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),garden_basscss.modules.margin.neg.call(null,val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".mn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden_basscss.modules.margin.neg.call(null,val),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),garden_basscss.modules.margin.neg.call(null,val),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden_basscss.modules.margin.neg.call(null,val),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),garden_basscss.modules.margin.neg.call(null,val)], null)], null)], null);
});})(s))
,s),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ml-auto",".ml-auto",-548540374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Symbol(null,"auto","auto",1074252035,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mr-auto",".mr-auto",-657622128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Symbol(null,"auto","auto",1074252035,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mx-auto",".mx-auto",-2071184849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Symbol(null,"auto","auto",1074252035,null),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Symbol(null,"auto","auto",1074252035,null)], null)], null)], null);
});
