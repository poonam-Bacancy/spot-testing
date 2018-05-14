// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.datasources');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('keechma.toolbox.dataloader.core');
goog.require('spots.util.gql_api');
goog.require('spots.gql');
goog.require('promesa.core');
spots.datasources.gql_processor = (function spots$datasources$gql_processor(key){
return (function (data){
return cljs.core.get_in.call(null,data,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)));
});
});
spots.datasources.current_route_data = (function spots$datasources$current_route_data(route){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27596_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null)),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__27596_SHARP_));
}),new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(route)));
});
spots.datasources.cupcake_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"cupcakeTypes","cupcakeTypes",-175442773)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
if((cljs.core._EQ_.call(null,"confirmation",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route))) || (cljs.core._EQ_.call(null,"personalization",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.cupcake_types_q], null);
} else {
return null;
}
})], null);
spots.datasources.clipart_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edb","collection","edb/collection",-683266119),new cljs.core.Keyword("clipart","list","clipart/list",-83002610)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"clipart","clipart",-2064250491)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
if((cljs.core._EQ_.call(null,"confirmation",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route))) || (cljs.core._EQ_.call(null,"personalization",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.clipart_q], null);
} else {
return null;
}
})], null);
spots.datasources.font_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edb","collection","edb/collection",-683266119),new cljs.core.Keyword("font","list","font/list",762200610)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
if((cljs.core._EQ_.call(null,"confirmation",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route))) || (cljs.core._EQ_.call(null,"personalization",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.fonts_q], null);
} else {
return null;
}
})], null);
spots.datasources.color_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edb","collection","edb/collection",-683266119),new cljs.core.Keyword("colors","list","colors/list",1985819331)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
if((cljs.core._EQ_.call(null,"confirmation",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route))) || (cljs.core._EQ_.call(null,"personalization",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.colors_q], null);
} else {
return null;
}
})], null);
spots.datasources.building_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edb","collection","edb/collection",-683266119),new cljs.core.Keyword("buildings","list","buildings/list",2044045874)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"buildingTypes","buildingTypes",-1491415403)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.building_types_q], null);
})], null);
spots.datasources.industry_datasource = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edb","collection","edb/collection",-683266119),new cljs.core.Keyword("industry","list","industry/list",516533329)], null),new cljs.core.Keyword(null,"loader","loader",-462395423),spots.util.gql_api.gql_loader,new cljs.core.Keyword(null,"processor","processor",-16217796),spots.datasources.gql_processor.call(null,new cljs.core.Keyword(null,"industries","industries",-1300796770)),new cljs.core.Keyword(null,"params","params",710516235),(function (_,route,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),spots.gql.industries_q], null);
})], null);
spots.datasources.datasources = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501),spots.datasources.cupcake_datasource,new cljs.core.Keyword(null,"clipart","clipart",-2064250491),spots.datasources.clipart_datasource,new cljs.core.Keyword(null,"font","font",-1506159249),spots.datasources.font_datasource,new cljs.core.Keyword(null,"colors","colors",1157174732),spots.datasources.color_datasource,new cljs.core.Keyword(null,"buildings","buildings",-308691065),spots.datasources.building_datasource,new cljs.core.Keyword(null,"industries","industries",-1300796770),spots.datasources.industry_datasource], null);
