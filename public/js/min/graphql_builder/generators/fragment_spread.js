// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.fragment_spread');
goog.require('cljs.core');
goog.require('graphql_builder.util');
goog.require('graphql_builder.generators.shared');
graphql_builder.generators.fragment_spread.collect_deps = (function graphql_builder$generators$fragment_spread$collect_deps(visitor,parent_deps,node){
return cljs.core.conj.call(null,parent_deps,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node));
});
graphql_builder.generators.fragment_spread.generate = (function graphql_builder$generators$fragment_spread$generate(visitor,deps,config,indent_level,node){
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline-fragments","inline-fragments",-1716232695).cljs$core$IFn$_invoke$arity$1(config))){
var fragment = cljs.core.get.call(null,deps,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node));
return visitor.call(null,deps,config,indent_level,new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(fragment));
} else {
return graphql_builder.util.indent.call(null,indent_level,["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.directives.call(null,node,config))].join(''));
}
});
