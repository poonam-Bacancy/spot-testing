// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.composed_query');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('graphql_builder.generators.operation');
goog.require('graphql_builder.util');
goog.require('clojure.string');
graphql_builder.generators.composed_query.query_by_name = (function graphql_builder$generators$composed_query$query_by_name(nodes,name){
var query = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),name], null));
if((query == null)){
throw cljs.core.ex_info.call(null,"The query doesn't exist",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),name], null));
} else {
}

if(cljs.core._EQ_.call(null,"mutation",cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-type","operation-type",-1537902982),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
throw cljs.core.ex_info.call(null,"The query is a mutation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),name], null));
} else {
}

return query;
});
graphql_builder.generators.composed_query.make_prefixes = (function graphql_builder$generators$composed_query$make_prefixes(queries){
return cljs.core.reduce.call(null,(function (acc,query_key){
return cljs.core.assoc.call(null,acc,query_key,cuerdas.core.pascal.call(null,cljs.core.name.call(null,query_key)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,queries));
});
graphql_builder.generators.composed_query.make_query_nodes = (function graphql_builder$generators$composed_query$make_query_nodes(nodes,queries){
return cljs.core.reduce.call(null,(function (acc,p__15530){
var vec__15531 = p__15530;
var query_key = cljs.core.nth.call(null,vec__15531,(0),null);
var name = cljs.core.nth.call(null,vec__15531,(1),null);
return cljs.core.assoc.call(null,acc,query_key,graphql_builder.generators.composed_query.query_by_name.call(null,nodes,name));
}),cljs.core.PersistentArrayMap.EMPTY,queries);
});
graphql_builder.generators.composed_query.make_composition_parts = (function graphql_builder$generators$composed_query$make_composition_parts(visitor,query_nodes,prefixes){
return cljs.core.reduce.call(null,(function (acc,p__15534){
var vec__15535 = p__15534;
var query_key = cljs.core.nth.call(null,vec__15535,(0),null);
var query = cljs.core.nth.call(null,vec__15535,(1),null);
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(query);
var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline-fragments","inline-fragments",-1716232695),true,new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.get.call(null,prefixes,query_key)], null);
var node = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(query);
return cljs.core.assoc.call(null,acc,query_key,graphql_builder.generators.operation.generate_for_composition.call(null,visitor,deps,config,(0),node));
}),cljs.core.PersistentArrayMap.EMPTY,query_nodes);
});
graphql_builder.generators.composed_query.query_variables = (function graphql_builder$generators$composed_query$query_variables(composition_parts){
var variables = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"variables","variables",1563680814),cljs.core.vals.call(null,composition_parts)));
if(cljs.core.seq.call(null,variables)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",variables)),")"].join('');
} else {
return null;
}
});
graphql_builder.generators.composed_query.make_query = (function graphql_builder$generators$composed_query$make_query(query_name,composition_parts){
return graphql_builder.util.nl_join.call(null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["query ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.composed_query.query_variables.call(null,composition_parts))," {"].join(''),cljs.core.map.call(null,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vals.call(null,composition_parts)),"}"], null)));
});
graphql_builder.generators.composed_query.namespace_var = (function graphql_builder$generators$composed_query$namespace_var(prefixes,query_key,p__15538){
var vec__15539 = p__15538;
var key = cljs.core.nth.call(null,vec__15539,(0),null);
var var$ = cljs.core.nth.call(null,vec__15539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,prefixes,query_key)),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),var$], null);
});
graphql_builder.generators.composed_query.namespace_vars = (function graphql_builder$generators$composed_query$namespace_vars(prefixes,vars){
return cljs.core.reduce.call(null,(function (acc,p__15543){
var vec__15544 = p__15543;
var query_key = cljs.core.nth.call(null,vec__15544,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__15544,(1),null);
var prepared = graphql_builder.util.variables__GT_graphql.call(null,vars__$1);
return cljs.core.merge.call(null,acc,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prepared,vec__15544,query_key,vars__$1){
return (function (p1__15542_SHARP_){
return graphql_builder.generators.composed_query.namespace_var.call(null,prefixes,query_key,p1__15542_SHARP_);
});})(prepared,vec__15544,query_key,vars__$1))
,prepared)));
}),cljs.core.PersistentArrayMap.EMPTY,vars);
});
graphql_builder.generators.composed_query.make_unpack = (function graphql_builder$generators$composed_query$make_unpack(prefixes){
return (function (data){
return cljs.core.reduce.call(null,(function (acc,p__15547){
var vec__15548 = p__15547;
var prefix_key = cljs.core.nth.call(null,vec__15548,(0),null);
var val = cljs.core.nth.call(null,vec__15548,(1),null);
var key_parts = clojure.string.split.call(null,cljs.core.name.call(null,prefix_key),/__/);
var prefix = cljs.core.first.call(null,key_parts);
var key = clojure.string.join.call(null,"__",cljs.core.rest.call(null,key_parts));
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,prefixes,prefix),key], null),val);
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
});
graphql_builder.generators.composed_query.generate = (function graphql_builder$generators$composed_query$generate(visitor,queries,nodes){
var query_name = "ComposedQuery";
var prefixes = graphql_builder.generators.composed_query.make_prefixes.call(null,queries);
var query_nodes = graphql_builder.generators.composed_query.make_query_nodes.call(null,nodes,queries);
var composition_parts = graphql_builder.generators.composed_query.make_composition_parts.call(null,visitor,query_nodes,prefixes);
var add_variables = graphql_builder.generators.composed_query.query_variables.call(null,composition_parts);
var query = graphql_builder.generators.composed_query.make_query.call(null,query_name,composition_parts);
return ((function (query_name,prefixes,query_nodes,composition_parts,add_variables,query){
return (function() {
var graphql_builder$generators$composed_query$generate_$_op_fn = null;
var graphql_builder$generators$composed_query$generate_$_op_fn__0 = (function (){
return graphql_builder$generators$composed_query$generate_$_op_fn.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var graphql_builder$generators$composed_query$generate_$_op_fn__1 = (function (vars){
var namespaced_vars = graphql_builder.generators.composed_query.namespace_vars.call(null,prefixes,vars);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operationName","operationName",1942403622),query_name,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),namespaced_vars], null),new cljs.core.Keyword(null,"unpack","unpack",-2027067542),graphql_builder.generators.composed_query.make_unpack.call(null,graphql_builder.util.reverse_map.call(null,prefixes))], null);
});
graphql_builder$generators$composed_query$generate_$_op_fn = function(vars){
switch(arguments.length){
case 0:
return graphql_builder$generators$composed_query$generate_$_op_fn__0.call(this);
case 1:
return graphql_builder$generators$composed_query$generate_$_op_fn__1.call(this,vars);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
graphql_builder$generators$composed_query$generate_$_op_fn.cljs$core$IFn$_invoke$arity$0 = graphql_builder$generators$composed_query$generate_$_op_fn__0;
graphql_builder$generators$composed_query$generate_$_op_fn.cljs$core$IFn$_invoke$arity$1 = graphql_builder$generators$composed_query$generate_$_op_fn__1;
return graphql_builder$generators$composed_query$generate_$_op_fn;
})()
;})(query_name,prefixes,query_nodes,composition_parts,add_variables,query))
});
