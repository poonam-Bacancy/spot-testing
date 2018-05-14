// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cuerdas.core');
goog.require('clojure.walk');
graphql_builder.util.nl_join = (function graphql_builder$util$nl_join(coll){
return clojure.string.join.call(null,"\n",cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,coll)));
});
graphql_builder.util.indent = (function graphql_builder$util$indent(level,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"",cljs.core.repeat.call(null,((2) * level)," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
graphql_builder.util.combine_children = (function graphql_builder$util$combine_children(children){
return cljs.core.reduce.call(null,(function (acc,c){
var children__$1 = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var deps = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var c_deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(c);
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.call(null,children__$1,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(c)),new cljs.core.Keyword(null,"deps","deps",1883360319),(cljs.core.truth_(c_deps)?cljs.core.into.call(null,deps,c_deps):deps));
}),cljs.core.PersistentArrayMap.EMPTY,children);
});
/**
 * Recursively transforms all map keys in coll with t.
 */
graphql_builder.util.transform_keys = (function graphql_builder$util$transform_keys(t,coll){
var f = (function (p__15503){
var vec__15504 = p__15503;
var k = cljs.core.nth.call(null,vec__15504,(0),null);
var v = cljs.core.nth.call(null,vec__15504,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,((function (f){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else {
return x;
}
});})(f))
,coll);
});
graphql_builder.util.variables__GT_graphql = (function graphql_builder$util$variables__GT_graphql(vars){
return graphql_builder.util.transform_keys.call(null,cljs.core.comp.call(null,cuerdas.core.camel,cljs.core.name),vars);
});
/**
 * Reverse the keys/values of a map
 */
graphql_builder.util.reverse_map = (function graphql_builder$util$reverse_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15507){
var vec__15508 = p__15507;
var k = cljs.core.nth.call(null,vec__15508,(0),null);
var v = cljs.core.nth.call(null,vec__15508,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null);
}),m));
});
