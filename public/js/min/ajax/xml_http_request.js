// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24252,handler){
var map__24253 = p__24252;
var map__24253__$1 = ((((!((map__24253 == null)))?((((map__24253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24253):map__24253);
var uri = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24253,map__24253__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24251_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__24251_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__24253,map__24253__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___24265 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___24265)){
var response_type_24266 = temp__5457__auto___24265;
this$__$1.responseType = cljs.core.name.call(null,response_type_24266);
} else {
}

var seq__24255_24267 = cljs.core.seq.call(null,headers);
var chunk__24256_24268 = null;
var count__24257_24269 = (0);
var i__24258_24270 = (0);
while(true){
if((i__24258_24270 < count__24257_24269)){
var vec__24259_24271 = cljs.core._nth.call(null,chunk__24256_24268,i__24258_24270);
var k_24272 = cljs.core.nth.call(null,vec__24259_24271,(0),null);
var v_24273 = cljs.core.nth.call(null,vec__24259_24271,(1),null);
this$__$1.setRequestHeader(k_24272,v_24273);

var G__24274 = seq__24255_24267;
var G__24275 = chunk__24256_24268;
var G__24276 = count__24257_24269;
var G__24277 = (i__24258_24270 + (1));
seq__24255_24267 = G__24274;
chunk__24256_24268 = G__24275;
count__24257_24269 = G__24276;
i__24258_24270 = G__24277;
continue;
} else {
var temp__5457__auto___24278 = cljs.core.seq.call(null,seq__24255_24267);
if(temp__5457__auto___24278){
var seq__24255_24279__$1 = temp__5457__auto___24278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24255_24279__$1)){
var c__9847__auto___24280 = cljs.core.chunk_first.call(null,seq__24255_24279__$1);
var G__24281 = cljs.core.chunk_rest.call(null,seq__24255_24279__$1);
var G__24282 = c__9847__auto___24280;
var G__24283 = cljs.core.count.call(null,c__9847__auto___24280);
var G__24284 = (0);
seq__24255_24267 = G__24281;
chunk__24256_24268 = G__24282;
count__24257_24269 = G__24283;
i__24258_24270 = G__24284;
continue;
} else {
var vec__24262_24285 = cljs.core.first.call(null,seq__24255_24279__$1);
var k_24286 = cljs.core.nth.call(null,vec__24262_24285,(0),null);
var v_24287 = cljs.core.nth.call(null,vec__24262_24285,(1),null);
this$__$1.setRequestHeader(k_24286,v_24287);

var G__24288 = cljs.core.next.call(null,seq__24255_24279__$1);
var G__24289 = null;
var G__24290 = (0);
var G__24291 = (0);
seq__24255_24267 = G__24288;
chunk__24256_24268 = G__24289;
count__24257_24269 = G__24290;
i__24258_24270 = G__24291;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8916__auto__ = body;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
