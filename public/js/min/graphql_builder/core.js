// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.core');
goog.require('cljs.core');
goog.require('graphql_builder.util');
goog.require('graphql_builder.generators.operation');
goog.require('graphql_builder.generators.field');
goog.require('graphql_builder.generators.fragment_spread');
goog.require('graphql_builder.generators.fragment');
goog.require('graphql_builder.generators.inline_fragment');
goog.require('graphql_builder.generators.composed_query');
goog.require('cuerdas.core');
goog.require('clojure.string');
graphql_builder.core.node_type__GT_key = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation-definition","operation-definition",460508190),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"fragment-definition","fragment-definition",-615825491),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null);
graphql_builder.core.generated__GT_graphql = (function graphql_builder$core$generated__GT_graphql(generated){
return graphql_builder.util.nl_join.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.vals,cljs.core.vals.call(null,generated)))));
});
graphql_builder.core.node_name = (function graphql_builder$core$node_name(node){
var G__15553 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node);
var G__15553__$1 = (((G__15553 instanceof cljs.core.Keyword))?G__15553.fqn:null);
switch (G__15553__$1) {
case "operation-definition":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8916__auto__ = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-type","operation-type",-1537902982),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.gensym.call(null,"operation");
}
})())].join('');

break;
case "fragment-definition":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.gensym.call(null,"fragment");
}
})())].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15553__$1)].join('')));

}
});
graphql_builder.core.collect_deps_dispatch = (function graphql_builder$core$collect_deps_dispatch(node){
var G__15555 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node);
var G__15555__$1 = (((G__15555 instanceof cljs.core.Keyword))?G__15555.fqn:null);
switch (G__15555__$1) {
case "fragment-spread":
return graphql_builder.generators.fragment_spread.collect_deps;

break;
default:
return ((function (G__15555,G__15555__$1){
return (function (visitor,parent_deps,node__$1){
return cljs.core.apply.call(null,cljs.core.concat,visitor.call(null,parent_deps,new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node__$1)));
});
;})(G__15555,G__15555__$1))

}
});
graphql_builder.core.collect_deps_visit_node = (function graphql_builder$core$collect_deps_visit_node(visitor,deps,node){
var collect_deps = graphql_builder.core.collect_deps_dispatch.call(null,node);
return collect_deps.call(null,visitor,deps,node);
});
graphql_builder.core.collect_deps_visit_nodes = (function graphql_builder$core$collect_deps_visit_nodes(deps,coll){
if(cljs.core.seq.call(null,coll)){
var collected_deps = cljs.core.map.call(null,(function (p1__15557_SHARP_){
return graphql_builder.core.collect_deps_visit_node.call(null,graphql_builder.core.collect_deps_visit_nodes,deps,p1__15557_SHARP_);
}),coll);
return collected_deps;
} else {
return null;
}
});
graphql_builder.core.generate_dispatch = (function graphql_builder$core$generate_dispatch(node){
var G__15558 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node);
var G__15558__$1 = (((G__15558 instanceof cljs.core.Keyword))?G__15558.fqn:null);
switch (G__15558__$1) {
case "operation-definition":
return graphql_builder.generators.operation.generate;

break;
case "fragment-definition":
return graphql_builder.generators.fragment.generate;

break;
case "field":
return graphql_builder.generators.field.generate;

break;
case "fragment-spread":
return graphql_builder.generators.fragment_spread.generate;

break;
case "inline-fragment":
return graphql_builder.generators.inline_fragment.generate;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15558__$1)].join('')));

}
});
graphql_builder.core.generate_visit_node = (function graphql_builder$core$generate_visit_node(visitor,deps,config,indent_level,node){
var generate = graphql_builder.core.generate_dispatch.call(null,node);
return generate.call(null,visitor,deps,config,indent_level,node);
});
graphql_builder.core.generate_visit_nodes = (function graphql_builder$core$generate_visit_nodes(deps,config,indent_level,coll){
if(cljs.core.seq.call(null,coll)){
return cljs.core.map.call(null,(function (node){
return graphql_builder.core.generate_visit_node.call(null,graphql_builder.core.generate_visit_nodes,deps,config,indent_level,node);
}),coll);
} else {
return null;
}
});
graphql_builder.core.get_with_nested_deps = (function graphql_builder$core$get_with_nested_deps(fragments,deps){
return cljs.core.reduce.call(null,(function (acc,dep){
return cljs.core.set.call(null,cljs.core.concat.call(null,acc,graphql_builder.core.get_with_nested_deps.call(null,fragments,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,fragments,dep)))));
}),cljs.core.set.call(null,deps),deps);
});
graphql_builder.core.realize_deps = (function graphql_builder$core$realize_deps(fragments,deps){
var with_nested_deps = graphql_builder.core.get_with_nested_deps.call(null,fragments,deps);
return cljs.core.reduce.call(null,((function (with_nested_deps){
return (function (acc,f){
return cljs.core.assoc.call(null,acc,f,cljs.core.get.call(null,fragments,f));
});})(with_nested_deps))
,cljs.core.PersistentArrayMap.EMPTY,with_nested_deps);
});
graphql_builder.core.generate_node = (function graphql_builder$core$generate_node(config,fragments,node){
var deps = cljs.core.set.call(null,graphql_builder.core.collect_deps_visit_node.call(null,graphql_builder.core.collect_deps_visit_nodes,cljs.core.PersistentVector.EMPTY,node));
var realized_deps = graphql_builder.core.realize_deps.call(null,fragments,deps);
var query = ((new cljs.core.Keyword(null,"generate?","generate?",2041884034).cljs$core$IFn$_invoke$arity$1(config) === false)?cljs.core.PersistentVector.EMPTY:graphql_builder.core.generate_visit_node.call(null,graphql_builder.core.generate_visit_nodes,realized_deps,config,(0),node));
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"query","query",-1288509510),graphql_builder.util.nl_join.call(null,cljs.core.flatten.call(null,query)),new cljs.core.Keyword(null,"deps","deps",1883360319),realized_deps);
});
graphql_builder.core.generate = (function graphql_builder$core$generate(var_args){
var G__15561 = arguments.length;
switch (G__15561) {
case 1:
return graphql_builder.core.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return graphql_builder.core.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

graphql_builder.core.generate.cljs$core$IFn$_invoke$arity$1 = (function (parsed_statement){
return graphql_builder.core.generate.call(null,parsed_statement,cljs.core.PersistentArrayMap.EMPTY);
});

graphql_builder.core.generate.cljs$core$IFn$_invoke$arity$2 = (function (parsed_statement,config){
var nodes = cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,parsed_statement));
var fragment_definitions = new cljs.core.Keyword(null,"fragment-definitions","fragment-definitions",-1908642072).cljs$core$IFn$_invoke$arity$1(parsed_statement);
var fragments = cljs.core.reduce.call(null,((function (nodes,fragment_definitions){
return (function (acc,f){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f),cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"deps","deps",1883360319),graphql_builder.core.collect_deps_visit_node.call(null,graphql_builder.core.collect_deps_visit_nodes,cljs.core.PersistentVector.EMPTY,f)));
});})(nodes,fragment_definitions))
,cljs.core.PersistentArrayMap.EMPTY,fragment_definitions);
return cljs.core.reduce.call(null,((function (nodes,fragment_definitions,fragments){
return (function (acc,node){
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_builder.core.node_type__GT_key.call(null,new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node)),graphql_builder.core.node_name.call(null,node)], null),graphql_builder.core.generate_node.call(null,config,fragments,node));
});})(nodes,fragment_definitions,fragments))
,cljs.core.PersistentArrayMap.EMPTY,nodes);
});

graphql_builder.core.generate.cljs$lang$maxFixedArity = 2;

graphql_builder.core.build_operation_query = (function graphql_builder$core$build_operation_query(config,op,fragments){
var fragment_queries = cljs.core.map.call(null,(function (p__15563){
var vec__15564 = p__15563;
var dep = cljs.core.nth.call(null,vec__15564,(0),null);
var _ = cljs.core.nth.call(null,vec__15564,(1),null);
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,fragments,dep));
}),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(op));
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline-fragments","inline-fragments",-1716232695).cljs$core$IFn$_invoke$arity$1(config))){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(op);
} else {
return graphql_builder.util.nl_join.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(op)], null),fragment_queries));
}
});
graphql_builder.core.make_operation_fn = (function graphql_builder$core$make_operation_fn(config,name,op,fragments){
return (function() {
var graphql_builder$core$make_operation_fn_$_op_fn = null;
var graphql_builder$core$make_operation_fn_$_op_fn__0 = (function (){
return graphql_builder$core$make_operation_fn_$_op_fn.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var graphql_builder$core$make_operation_fn_$_op_fn__1 = (function (vars){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operationName","operationName",1942403622),name,new cljs.core.Keyword(null,"query","query",-1288509510),graphql_builder.core.build_operation_query.call(null,config,op,fragments),new cljs.core.Keyword(null,"variables","variables",1563680814),graphql_builder.util.variables__GT_graphql.call(null,vars)], null),new cljs.core.Keyword(null,"unpack","unpack",-2027067542),cljs.core.identity], null);
});
graphql_builder$core$make_operation_fn_$_op_fn = function(vars){
switch(arguments.length){
case 0:
return graphql_builder$core$make_operation_fn_$_op_fn__0.call(this);
case 1:
return graphql_builder$core$make_operation_fn_$_op_fn__1.call(this,vars);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
graphql_builder$core$make_operation_fn_$_op_fn.cljs$core$IFn$_invoke$arity$0 = graphql_builder$core$make_operation_fn_$_op_fn__0;
graphql_builder$core$make_operation_fn_$_op_fn.cljs$core$IFn$_invoke$arity$1 = graphql_builder$core$make_operation_fn_$_op_fn__1;
return graphql_builder$core$make_operation_fn_$_op_fn;
})()
});
graphql_builder.core.query_map = (function graphql_builder$core$query_map(var_args){
var G__15568 = arguments.length;
switch (G__15568) {
case 1:
return graphql_builder.core.query_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return graphql_builder.core.query_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

graphql_builder.core.query_map.cljs$core$IFn$_invoke$arity$1 = (function (parsed_statement){
return graphql_builder.core.query_map.call(null,parsed_statement,cljs.core.PersistentArrayMap.EMPTY);
});

graphql_builder.core.query_map.cljs$core$IFn$_invoke$arity$2 = (function (parsed_statement,config){
var nodes = graphql_builder.core.generate.call(null,parsed_statement,config);
var fragments = new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(nodes);
return cljs.core.reduce.call(null,((function (nodes,fragments){
return (function (acc,p__15569){
var vec__15570 = p__15569;
var name = cljs.core.nth.call(null,vec__15570,(0),null);
var op = cljs.core.nth.call(null,vec__15570,(1),null);
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.get_in.call(null,op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"operation-type","operation-type",-1537902982),new cljs.core.Keyword(null,"type","type",1174270348)], null))),cljs.core.keyword.call(null,cuerdas.core.kebab.call(null,name))], null),graphql_builder.core.make_operation_fn.call(null,config,name,op,fragments));
});})(nodes,fragments))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(nodes));
});

graphql_builder.core.query_map.cljs$lang$maxFixedArity = 2;

graphql_builder.core.composed_query = (function graphql_builder$core$composed_query(parsed_statement,queries){
var nodes = graphql_builder.core.generate.call(null,parsed_statement,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generate?","generate?",2041884034),false], null));
return graphql_builder.generators.composed_query.generate.call(null,graphql_builder.core.generate_visit_nodes,queries,nodes);
});
