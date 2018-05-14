// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.util.gql_api');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('keechma.toolbox.ajax');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('oops.core');
spots.util.gql_api.wrap_request = (function spots$util$gql_api$wrap_request(data){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),data], null)], null);
});
spots.util.gql_api.gql_endpoint = (cljs.core.truth_(goog.DEBUG)?"http://0.0.0.0:3000/graphql":"https://spotsnyc-order-staging.herokuapp.com/graphql");
spots.util.gql_api.add_authentication_header = (function spots$util$gql_api$add_authentication_header(headers,token){
if(cljs.core.truth_(token)){
return cljs.core.assoc.call(null,headers,new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),["jwt ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
} else {
return headers;
}
});
spots.util.gql_api.extract_gql_error = (function spots$util$gql_api$extract_gql_error(error){
return cljs.core.get_in.call(null,error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payload","payload",-383036092)], null)).data;
});
spots.util.gql_api.gql_results_handler = (function spots$util$gql_api$gql_results_handler(unpack){
return (function (p__24851){
var map__24852 = p__24851;
var map__24852__$1 = ((((!((map__24852 == null)))?((((map__24852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852):map__24852);
var data = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errors)){
throw cljs.core.ex_info.call(null,"GraphQLError",errors);
} else {
return unpack.call(null,data);
}
});
});
spots.util.gql_api.gql_req = (function spots$util$gql_api$gql_req(var_args){
var G__24855 = arguments.length;
switch (G__24855) {
case 1:
return spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$1 = (function (query_fn){
return spots.util.gql_api.gql_req.call(null,query_fn,cljs.core.PersistentArrayMap.EMPTY,null);
});

spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$2 = (function (query_fn,variables){
return spots.util.gql_api.gql_req.call(null,query_fn,variables,null);
});

spots.util.gql_api.gql_req.cljs$core$IFn$_invoke$arity$3 = (function (query_fn,variables,token){
var map__24856 = query_fn.call(null,variables);
var map__24856__$1 = ((((!((map__24856 == null)))?((((map__24856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24856):map__24856);
var graphql = cljs.core.get.call(null,map__24856__$1,new cljs.core.Keyword(null,"graphql","graphql",-218428840));
var unpack = cljs.core.get.call(null,map__24856__$1,new cljs.core.Keyword(null,"unpack","unpack",-2027067542));
return promesa.core.map.call(null,spots.util.gql_api.gql_results_handler.call(null,unpack),keechma.toolbox.ajax.POST.call(null,spots.util.gql_api.gql_endpoint,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),graphql,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"headers","headers",-835030129),spots.util.gql_api.add_authentication_header.call(null,cljs.core.PersistentArrayMap.EMPTY,token)], null)));
});

spots.util.gql_api.gql_req.cljs$lang$maxFixedArity = 3;

spots.util.gql_api.gql_loader = (function spots$util$gql_api$gql_loader(reqs){
return cljs.core.map.call(null,(function (req){
var temp__5457__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5457__auto__)){
var params = temp__5457__auto__;
var map__24859 = params;
var map__24859__$1 = ((((!((map__24859 == null)))?((((map__24859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24859):map__24859);
var query_fn = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var variables = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var token = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return spots.util.gql_api.gql_req.call(null,query_fn,(function (){var or__8916__auto__ = variables;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),token);
} else {
return null;
}
}),reqs);
});
spots.util.gql_api.ss_e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"cupcakes",new cljs.core.Keyword(null,"messages","messages",345434482),null,new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"messages","messages",345434482),null,new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"colorId",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is missing","no such color exists"], null),new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"fontId",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is missing","no such font exists"], null),new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"firstLine",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is missing"], null),new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"secondLine",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is missing"], null),new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"key","key",-1516042587),"thirdLine",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is missing"], null),new cljs.core.Keyword(null,"suberrors","suberrors",-635945827),null], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"valid","valid",155614240),false], null)], null)], null);
spots.util.gql_api.process_server_side_errors = (function spots$util$gql_api$process_server_side_errors(var_args){
var G__24862 = arguments.length;
switch (G__24862) {
case 1:
return spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$1 = (function (errors){
return spots.util.gql_api.process_server_side_errors.call(null,errors,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$2 = (function (errors,path){
return spots.util.gql_api.process_server_side_errors.call(null,errors,path,cljs.core.PersistentArrayMap.EMPTY);
});

spots.util.gql_api.process_server_side_errors.cljs$core$IFn$_invoke$arity$3 = (function (errors,path,formatted_errors){
if(cljs.core.seq.call(null,errors)){
return cljs.core.reduce.call(null,(function (acc,e){
var path_part = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e);
}
})();
var full_path = cljs.core.conj.call(null,path,((typeof path_part === 'string')?cljs.core.keyword.call(null,path_part):path_part));
return spots.util.gql_api.process_server_side_errors.call(null,new cljs.core.Keyword(null,"suberrors","suberrors",-635945827).cljs$core$IFn$_invoke$arity$1(e),full_path,cljs.core.assoc_in.call(null,acc,full_path,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(e)));
}),formatted_errors,errors);
} else {
return formatted_errors;
}
});

spots.util.gql_api.process_server_side_errors.cljs$lang$maxFixedArity = 3;

spots.util.gql_api.wrap_validation = (function spots$util$gql_api$wrap_validation(req){
return promesa.core.map.call(null,(function (res){
var valid_QMARK_ = cljs.core.get_in.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.Keyword(null,"valid","valid",155614240)], null));
if(cljs.core.truth_(valid_QMARK_)){
return res;
} else {
throw cljs.core.ex_info.call(null,"Validation Failed",spots.util.gql_api.process_server_side_errors.call(null,cljs.core.get_in.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))));
}
}),req);
});
