// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.util');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden.util');
goog.require('garden.units');
garden_basscss.util.spaces = (function garden_basscss$util$spaces(){
return new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
});
garden_basscss.util.gen_margin_padding = (function garden_basscss$util$gen_margin_padding(type){
var s = garden_basscss.util.spaces.call(null);
var prop = cljs.core.name.call(null,type);
var prefix = cljs.core.first.call(null,prop);
return cljs.core.map.call(null,((function (s,prop,prefix){
return (function (p__23340){
var vec__23341 = p__23340;
var key = cljs.core.nth.call(null,vec__23341,(0),null);
var val = cljs.core.nth.call(null,vec__23341,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val])], null),cljs.core.map.call(null,((function (vec__23341,key,val,s,prop,prefix){
return (function (dir){
var dir_prefix = cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''),val])], null);
});})(vec__23341,key,val,s,prop,prefix))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"left","left",1241415590,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-left"].join(''),val,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-right"].join(''),val])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"y",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-top"].join(''),val,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-bottom"].join(''),val])], null)], null);
});})(s,prop,prefix))
,s);
});
garden_basscss.util.render_trbl = (function garden_basscss$util$render_trbl(trbl){
return garden.util.space_join.call(null,cljs.core.map.call(null,(function (val){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,val))){
var map__23344 = val;
var map__23344__$1 = ((((!((map__23344 == null)))?((((map__23344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23344):map__23344);
var magnitude = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}
}),trbl));
});
garden_basscss.util.gen_list = (function garden_basscss$util$gen_list(var_args){
var G__23347 = arguments.length;
switch (G__23347) {
case 2:
return garden_basscss.util.gen_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return garden_basscss.util.gen_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden_basscss.util.gen_list.cljs$core$IFn$_invoke$arity$2 = (function (type,vals){
return garden_basscss.util.gen_list.call(null,type,vals,false);
});

garden_basscss.util.gen_list.cljs$core$IFn$_invoke$arity$3 = (function (type,vals,include_prefix_QMARK_){
return cljs.core.map.call(null,(function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(include_prefix_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type)),"-"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([type,v])], null);
}),vals);
});

garden_basscss.util.gen_list.cljs$lang$maxFixedArity = 3;

