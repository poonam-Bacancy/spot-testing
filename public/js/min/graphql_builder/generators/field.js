// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.field');
goog.require('cljs.core');
goog.require('graphql_builder.util');
goog.require('clojure.string');
goog.require('graphql_builder.generators.shared');
graphql_builder.generators.field.field_name = (function graphql_builder$generators$field$field_name(node){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node);
var field_name = new cljs.core.Keyword(null,"field-name","field-name",1300687948).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)].join('');
} else {
return field_name;
}
});
graphql_builder.generators.field.generate = (function graphql_builder$generators$field$generate(visitor,deps,config,indent_level,node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.util.indent.call(null,indent_level,graphql_builder.generators.field.field_name.call(null,node))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.directives.call(null,node,config)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.node_arguments.call(null,node,config)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.open_block.call(null,node))].join(''),visitor.call(null,deps,config,(indent_level + (1)),new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node)),graphql_builder.generators.shared.close_block.call(null,node,indent_level)], null);
});
