// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('oops.messages');
goog.require('cljs.core');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if(typeof oops.messages.runtime_message !== 'undefined'){
} else {
oops.messages.runtime_message = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"oops.messages","runtime-message"),((function (method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__){
return (function() { 
var G__20991__delegate = function (type,_){
return type;
};
var G__20991 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__20992__i = 0, G__20992__a = new Array(arguments.length -  1);
while (G__20992__i < G__20992__a.length) {G__20992__a[G__20992__i] = arguments[G__20992__i + 1]; ++G__20992__i;}
  _ = new cljs.core.IndexedSeq(G__20992__a,0,null);
} 
return G__20991__delegate.call(this,type,_);};
G__20991.cljs$lang$maxFixedArity = 1;
G__20991.cljs$lang$applyTo = (function (arglist__20993){
var type = cljs.core.first(arglist__20993);
var _ = cljs.core.rest(arglist__20993);
return G__20991__delegate(type,_);
});
G__20991.cljs$core$IFn$_invoke$arity$variadic = G__20991__delegate;
return G__20991;
})()
;})(method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__,hierarchy__9975__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__20994 = info;
var map__20994__$1 = ((((!((map__20994 == null)))?((((map__20994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20994):map__20994);
var flavor = cljs.core.get.call(null,map__20994__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.call(null,map__20994__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_.call(null,path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__20996 = info;
var map__20996__$1 = ((((!((map__20996 == null)))?((((map__20996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20996):map__20996);
var soft_QMARK_ = cljs.core.get.call(null,map__20996__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.call(null,map__20996__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.call(null,map__20996__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_.call(null,path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__20998 = info;
var map__20998__$1 = ((((!((map__20998 == null)))?((((map__20998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20998):map__20998);
var key = cljs.core.get.call(null,map__20998__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__20998__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return oops.messages.post_process_message.call(null,"Invalid selector");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected empty selector"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected punching selector (\"!\" makes sense only with oset!)"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected soft selector (\"?\" does not make sense with oset!)"].join(''));
}));
