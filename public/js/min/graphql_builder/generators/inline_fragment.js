// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.inline_fragment');
goog.require('cljs.core');
goog.require('graphql_builder.util');
goog.require('clojure.string');
goog.require('graphql_builder.generators.shared');
graphql_builder.generators.inline_fragment.has_children_QMARK_ = (function graphql_builder$generators$inline_fragment$has_children_QMARK_(node){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node)));
});
graphql_builder.generators.inline_fragment.fragment_name = (function graphql_builder$generators$inline_fragment$fragment_name(node,config){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.fragment_type_name.call(null,node)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.directives.call(null,node,config))].join('');
});
graphql_builder.generators.inline_fragment.open_block = (function graphql_builder$generators$inline_fragment$open_block(node){
if(cljs.core.truth_(graphql_builder.generators.inline_fragment.has_children_QMARK_.call(null,node))){
return " {";
} else {
return null;
}
});
graphql_builder.generators.inline_fragment.close_block = (function graphql_builder$generators$inline_fragment$close_block(node,indent_level){
if(cljs.core.truth_(graphql_builder.generators.inline_fragment.has_children_QMARK_.call(null,node))){
return graphql_builder.util.indent.call(null,indent_level,"}");
} else {
return null;
}
});
graphql_builder.generators.inline_fragment.generate = (function graphql_builder$generators$inline_fragment$generate(visitor,deps,config,indent_level,node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.util.indent.call(null,indent_level,graphql_builder.generators.inline_fragment.fragment_name.call(null,node,config))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.inline_fragment.open_block.call(null,node))].join(''),visitor.call(null,deps,config,(indent_level + (1)),new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node)),graphql_builder.generators.inline_fragment.close_block.call(null,node,indent_level)], null);
});
