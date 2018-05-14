// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('graphql_builder.generators.shared');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('graphql_builder.util');
graphql_builder.generators.shared.quote_arg = (function graphql_builder$generators$shared$quote_arg(v){
if(typeof v === 'string'){
if(cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,v),v)){
return v;
} else {
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
}
} else {
return v;
}
});
graphql_builder.generators.shared.object_default_value = (function graphql_builder$generators$shared$object_default_value(value){
return ["{ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.quote_arg.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),value)))," }"].join('');
});
graphql_builder.generators.shared.argument_value_value = (function graphql_builder$generators$shared$argument_value_value(value){
if(cljs.core.truth_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(value))){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,graphql_builder.generators.shared.quote_arg,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(value)))),"]"].join('');
} else {
if((cljs.core.vector_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"object-value","object-value",178983501),cljs.core.first.call(null,value)))){
return graphql_builder.generators.shared.object_default_value.call(null,cljs.core.last.call(null,value));
} else {
return graphql_builder.generators.shared.quote_arg.call(null,value);

}
}
});
graphql_builder.generators.shared.add_var_prefix = (function graphql_builder$generators$shared$add_var_prefix(prefix,name){
if(cljs.core.truth_(prefix)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return name;
}
});
graphql_builder.generators.shared.argument_value = (function graphql_builder$generators$shared$argument_value(argument,config){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(argument);
var variable_name = new cljs.core.Keyword(null,"variable-name","variable-name",528770100).cljs$core$IFn$_invoke$arity$1(argument);
if(cljs.core.boolean$.call(null,value)){
return graphql_builder.generators.shared.argument_value_value.call(null,value);
} else {
if(cljs.core.boolean$.call(null,variable_name)){
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.add_var_prefix.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(config),variable_name))].join('');
} else {
return null;
}
}
});
graphql_builder.generators.shared.argument_name = (function graphql_builder$generators$shared$argument_name(argument,config){
var prefix = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(config);
var name = new cljs.core.Keyword(null,"argument-name","argument-name",1768809860).cljs$core$IFn$_invoke$arity$1(argument);
return graphql_builder.generators.shared.add_var_prefix.call(null,prefix,name);
});
graphql_builder.generators.shared.node_arguments = (function graphql_builder$generators$shared$node_arguments(node,config){
var temp__5457__auto__ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5457__auto__)){
var arguments$ = temp__5457__auto__;
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (arguments$,temp__5457__auto__){
return (function (p1__15513_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"argument-name","argument-name",1768809860).cljs$core$IFn$_invoke$arity$1(p1__15513_SHARP_)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.argument_value.call(null,p1__15513_SHARP_,config))].join('');
});})(arguments$,temp__5457__auto__))
,arguments$))),")"].join('');
} else {
return null;
}
});
graphql_builder.generators.shared.directive = (function graphql_builder$generators$shared$directive(d,config){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_builder.generators.shared.node_arguments.call(null,d,config))].join('');
});
graphql_builder.generators.shared.directives = (function graphql_builder$generators$shared$directives(node,config){
var temp__5457__auto__ = new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5457__auto__)){
var ds = temp__5457__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,((function (ds,temp__5457__auto__){
return (function (d){
return graphql_builder.generators.shared.directive.call(null,d,config);
});})(ds,temp__5457__auto__))
,ds)))].join('');
} else {
return null;
}
});
graphql_builder.generators.shared.fragment_type_name = (function graphql_builder$generators$shared$fragment_type_name(node){
var temp__5457__auto__ = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-condition","type-condition",68056390),new cljs.core.Keyword(null,"type-name","type-name",1911633753)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var name = temp__5457__auto__;
return [" on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return null;
}
});
graphql_builder.generators.shared.has_children_QMARK_ = (function graphql_builder$generators$shared$has_children_QMARK_(node){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(node)));
});
graphql_builder.generators.shared.open_block = (function graphql_builder$generators$shared$open_block(node){
if(cljs.core.truth_(graphql_builder.generators.shared.has_children_QMARK_.call(null,node))){
return " {";
} else {
return null;
}
});
graphql_builder.generators.shared.close_block = (function graphql_builder$generators$shared$close_block(node,indent_level){
if(cljs.core.truth_(graphql_builder.generators.shared.has_children_QMARK_.call(null,node))){
return graphql_builder.util.indent.call(null,indent_level,"}");
} else {
return null;
}
});
