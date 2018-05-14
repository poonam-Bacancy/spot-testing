// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.operation');
goog.require('cljs.core');
goog.require('graphql_builder.util');
goog.require('clojure.string');
goog.require('graphql_builder.generators.shared');
graphql_builder.generators.operation.default_value = (function graphql_builder$generators$operation$default_value(variable){
var temp__5457__auto__ = new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(variable);
if(cljs.core.truth_(temp__5457__auto__)){
var val = temp__5457__auto__;
if((cljs.core.vector_QMARK_.call(null,val)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"object-value","object-value",178983501),cljs.core.first.call(null,val)))){
return [" = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.object_default_value.call(null,cljs.core.last.call(null,val)))].join('');
} else {
return [" = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.quote_arg.call(null,val))].join('');
}
} else {
return null;
}
});
graphql_builder.generators.operation.variable_value = (function graphql_builder$generators$operation$variable_value(variable){
var type_name = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(variable)))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,variable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner-type","inner-type",-1566781660),new cljs.core.Keyword(null,"type-name","type-name",1911633753)], null))),"]"].join(''):new cljs.core.Keyword(null,"type-name","type-name",1911633753).cljs$core$IFn$_invoke$arity$1(variable));
var required_QMARK_ = new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(variable);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(required_QMARK_)?"!":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.default_value.call(null,variable))].join('');
});
graphql_builder.generators.operation.variable_name = (function graphql_builder$generators$operation$variable_name(variable,config){
var prefix = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(config);
var name = new cljs.core.Keyword(null,"variable-name","variable-name",528770100).cljs$core$IFn$_invoke$arity$1(variable);
return graphql_builder.generators.shared.add_var_prefix.call(null,prefix,name);
});
graphql_builder.generators.operation.node_variables_body = (function graphql_builder$generators$operation$node_variables_body(node,config){
var temp__5457__auto__ = new cljs.core.Keyword(null,"variable-definitions","variable-definitions",-1884961477).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5457__auto__)){
var variables = temp__5457__auto__;
return clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (variables,temp__5457__auto__){
return (function (p1__15524_SHARP_){
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.variable_name.call(null,p1__15524_SHARP_,config)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.variable_value.call(null,p1__15524_SHARP_))].join('');
});})(variables,temp__5457__auto__))
,variables));
} else {
return null;
}
});
graphql_builder.generators.operation.node_variables = (function graphql_builder$generators$operation$node_variables(node,config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"variable-definitions","variable-definitions",-1884961477).cljs$core$IFn$_invoke$arity$1(node))){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.node_variables_body.call(null,node,config)),")"].join('');
} else {
return null;
}
});
graphql_builder.generators.operation.operation_name = (function graphql_builder$generators$operation$operation_name(operation){
var map__15525 = new cljs.core.Keyword(null,"operation-type","operation-type",-1537902982).cljs$core$IFn$_invoke$arity$1(operation);
var map__15525__$1 = ((((!((map__15525 == null)))?((((map__15525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15525):map__15525);
var type = cljs.core.get.call(null,map__15525__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return type;
}
});
graphql_builder.generators.operation.add_prefix_to_selection_node = (function graphql_builder$generators$operation$add_prefix_to_selection_node(prefix,node){
var name = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"field-name","field-name",1300687948).cljs$core$IFn$_invoke$arity$1(node);
}
})();
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"name","name",1843675177),graphql_builder.generators.shared.add_var_prefix.call(null,prefix,name));
});
graphql_builder.generators.operation.children = (function graphql_builder$generators$operation$children(node,config){
var node_type = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-type","operation-type",-1537902982),new cljs.core.Keyword(null,"type","type",1174270348)], null));
var children = new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node);
var prefix = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core._EQ_.call(null,"query",node_type);
if(and__8904__auto__){
return prefix;
} else {
return and__8904__auto__;
}
})())){
return cljs.core.map.call(null,((function (node_type,children,prefix){
return (function (p1__15527_SHARP_){
return graphql_builder.generators.operation.add_prefix_to_selection_node.call(null,prefix,p1__15527_SHARP_);
});})(node_type,children,prefix))
,children);
} else {
return children;
}
});
graphql_builder.generators.operation.generate = (function graphql_builder$generators$operation$generate(visitor,deps,config,indent_level,node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_builder.util.indent.call(null,indent_level,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.operation_name.call(null,node)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.operation.node_variables.call(null,node,config))," {"].join('')),visitor.call(null,deps,config,(indent_level + (1)),graphql_builder.generators.operation.children.call(null,node,config)),graphql_builder.util.indent.call(null,indent_level,"}")], null);
});
graphql_builder.generators.operation.generate_for_composition = (function graphql_builder$generators$operation$generate_for_composition(visitor,deps,config,indent_level,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variables","variables",1563680814),graphql_builder.generators.operation.node_variables_body.call(null,node,config),new cljs.core.Keyword(null,"children","children",-940561982),visitor.call(null,deps,config,(indent_level + (1)),graphql_builder.generators.operation.children.call(null,node,config))], null);
});
