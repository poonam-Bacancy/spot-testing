// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('entitydb.util');
goog.require('cljs.core');
entitydb.util.passthrough_item = (function entitydb$util$passthrough_item(item){
return item;
});
entitydb.util.add_empty_layout = (function entitydb$util$add_empty_layout(db,entity_kw){
if((entity_kw.call(null,db) == null)){
return cljs.core.assoc.call(null,db,entity_kw,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-many","c-many",745949041),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return db;
}
});
entitydb.util.ensure_layout = (function entitydb$util$ensure_layout(dbal_fn){
return (function() { 
var G__15578__delegate = function (schema,db,entity_kw,args){
var db_with_layout = entitydb.util.add_empty_layout.call(null,db,entity_kw);
return cljs.core.apply.call(null,dbal_fn,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,db_with_layout,entity_kw], null),args));
};
var G__15578 = function (schema,db,entity_kw,var_args){
var args = null;
if (arguments.length > 3) {
var G__15579__i = 0, G__15579__a = new Array(arguments.length -  3);
while (G__15579__i < G__15579__a.length) {G__15579__a[G__15579__i] = arguments[G__15579__i + 3]; ++G__15579__i;}
  args = new cljs.core.IndexedSeq(G__15579__a,0,null);
} 
return G__15578__delegate.call(this,schema,db,entity_kw,args);};
G__15578.cljs$lang$maxFixedArity = 3;
G__15578.cljs$lang$applyTo = (function (arglist__15580){
var schema = cljs.core.first(arglist__15580);
arglist__15580 = cljs.core.next(arglist__15580);
var db = cljs.core.first(arglist__15580);
arglist__15580 = cljs.core.next(arglist__15580);
var entity_kw = cljs.core.first(arglist__15580);
var args = cljs.core.rest(arglist__15580);
return G__15578__delegate(schema,db,entity_kw,args);
});
G__15578.cljs$core$IFn$_invoke$arity$variadic = G__15578__delegate;
return G__15578;
})()
;
});
entitydb.util.call_middleware = (function entitydb$util$call_middleware(get_or_set,schema,entity_kw,item){
var middlewares = (function (){var or__8916__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),get_or_set], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.util.passthrough_item], null);
}
})();
var pipeline = cljs.core.apply.call(null,cljs.core.comp,middlewares);
return pipeline.call(null,item);
});
entitydb.util.call_middleware_set = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"set","set",304602554));
entitydb.util.call_middleware_get = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"get","get",1683182755));
entitydb.util.get_id_fn = (function entitydb$util$get_id_fn(schema,entity_kw){
var or__8916__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092);
}
});
entitydb.util.get_item_id = (function entitydb$util$get_item_id(schema,entity_kw,item){
var id_fn = entitydb.util.get_id_fn.call(null,schema,entity_kw);
return id_fn.call(null,item);
});
entitydb.util.get_meta_id = (function entitydb$util$get_meta_id(entity_kw,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id], null);
});
entitydb.util.update_values = (function entitydb$util$update_values(var_args){
var args__10191__auto__ = [];
var len__10184__auto___15588 = arguments.length;
var i__10185__auto___15589 = (0);
while(true){
if((i__10185__auto___15589 < len__10184__auto___15588)){
args__10191__auto__.push((arguments[i__10185__auto___15589]));

var G__15590 = (i__10185__auto___15589 + (1));
i__10185__auto___15589 = G__15590;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((2) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((2)),(0),null)):null);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10192__auto__);
});

entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__15584){
var vec__15585 = p__15584;
var k = cljs.core.nth.call(null,vec__15585,(0),null);
var v = cljs.core.nth.call(null,vec__15585,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

entitydb.util.update_values.cljs$lang$maxFixedArity = (2);

entitydb.util.update_values.cljs$lang$applyTo = (function (seq15581){
var G__15582 = cljs.core.first.call(null,seq15581);
var seq15581__$1 = cljs.core.next.call(null,seq15581);
var G__15583 = cljs.core.first.call(null,seq15581__$1);
var seq15581__$2 = cljs.core.next.call(null,seq15581__$1);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__15582,G__15583,seq15581__$2);
});

