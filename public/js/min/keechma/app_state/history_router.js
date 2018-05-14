// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var main_handler = ((function (handlers){
return (function (_){
var seq__27677 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__27678 = null;
var count__27679 = (0);
var i__27680 = (0);
while(true){
if((i__27680 < count__27679)){
var h = cljs.core._nth.call(null,chunk__27678,i__27680);
h.call(null,location.href);

var G__27685 = seq__27677;
var G__27686 = chunk__27678;
var G__27687 = count__27679;
var G__27688 = (i__27680 + (1));
seq__27677 = G__27685;
chunk__27678 = G__27686;
count__27679 = G__27687;
i__27680 = G__27688;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27677);
if(temp__5457__auto__){
var seq__27677__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27677__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__27677__$1);
var G__27689 = cljs.core.chunk_rest.call(null,seq__27677__$1);
var G__27690 = c__9847__auto__;
var G__27691 = cljs.core.count.call(null,c__9847__auto__);
var G__27692 = (0);
seq__27677 = G__27689;
chunk__27678 = G__27690;
count__27679 = G__27691;
i__27680 = G__27692;
continue;
} else {
var h = cljs.core.first.call(null,seq__27677__$1);
h.call(null,location.href);

var G__27693 = cljs.core.next.call(null,seq__27677__$1);
var G__27694 = null;
var G__27695 = (0);
var G__27696 = (0);
seq__27677 = G__27693;
chunk__27678 = G__27694;
count__27679 = G__27695;
i__27680 = G__27696;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers))
;
var bind_main_handler = ((function (handlers,main_handler){
return (function (){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,handlers)))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler))
;
var unbind_main_handler = ((function (handlers,main_handler,bind_main_handler){
return (function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,handlers)) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler,bind_main_handler))
;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers-count","handlers-count",70073577),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,handlers));
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"bind","bind",-113428417),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,cljs.core.conj,handler);

return bind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"unbind","unbind",716905720),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (h){
return cljs.core.filter.call(null,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (p1__27676_SHARP_){
return cljs.core.not_EQ_.call(null,handler,p1__27676_SHARP_);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,h);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
);

return unbind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"go","go",-146946655),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.pushState(null,"",href);

var seq__27681 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__27682 = null;
var count__27683 = (0);
var i__27684 = (0);
while(true){
if((i__27684 < count__27683)){
var h = cljs.core._nth.call(null,chunk__27682,i__27684);
h.call(null,href);

var G__27697 = seq__27681;
var G__27698 = chunk__27682;
var G__27699 = count__27683;
var G__27700 = (i__27684 + (1));
seq__27681 = G__27697;
chunk__27682 = G__27698;
count__27683 = G__27699;
i__27684 = G__27700;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27681);
if(temp__5457__auto__){
var seq__27681__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27681__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__27681__$1);
var G__27701 = cljs.core.chunk_rest.call(null,seq__27681__$1);
var G__27702 = c__9847__auto__;
var G__27703 = cljs.core.count.call(null,c__9847__auto__);
var G__27704 = (0);
seq__27681 = G__27701;
chunk__27682 = G__27702;
count__27683 = G__27703;
i__27684 = G__27704;
continue;
} else {
var h = cljs.core.first.call(null,seq__27681__$1);
h.call(null,href);

var G__27705 = cljs.core.next.call(null,seq__27681__$1);
var G__27706 = null;
var G__27707 = (0);
var G__27708 = (0);
seq__27681 = G__27705;
chunk__27682 = G__27706;
count__27683 = G__27707;
i__27684 = G__27708;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
], null);
});
keechma.app_state.history_router.urlchange_dispatcher = keechma.app_state.history_router.make_urlchange_dispatcher.call(null);
keechma.app_state.history_router.url_prefix = (function keechma$app_state$history_router$url_prefix(base_href){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix.call(null,base_href);
return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,url,cljs.core.count.call(null,prefix),cljs.core.count.call(null,url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__8904__auto__ = el.href;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.call(null,"a",clojure.string.lower_case.call(null,el.tagName));
} else {
return and__8904__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_.call(null,current_el))){
return current_el;
} else {
var temp__5457__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__27709 = parent;
current_el = G__27709;
continue;
} else {
return null;
}
}
break;
}
});
keechma.app_state.history_router.current_target_self_QMARK_ = (function keechma$app_state$history_router$current_target_self_QMARK_(el){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.target);
});
keechma.app_state.history_router.left_button_clicked_QMARK_ = (function keechma$app_state$history_router$left_button_clicked_QMARK_(e){
return cljs.core._EQ_.call(null,(0),e.button);
});
keechma.app_state.history_router.mod_key_pressed_QMARK_ = (function keechma$app_state$history_router$mod_key_pressed_QMARK_(e){
var or__8916__auto__ = e.altKey;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
var or__8916__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__8916__auto____$1)){
return or__8916__auto____$1;
} else {
var or__8916__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__8916__auto____$2)){
return or__8916__auto____$2;
} else {
return e.metaKey;
}
}
}
});
keechma.app_state.history_router.link_has_prefixed_url_QMARK_ = (function keechma$app_state$history_router$link_has_prefixed_url_QMARK_(el,base_href){
return clojure.string.starts_with_QMARK_.call(null,el.href,keechma.app_state.history_router.url_prefix.call(null,base_href));
});
keechma.app_state.history_router.same_href_QMARK_ = (function keechma$app_state$history_router$same_href_QMARK_(el){
return cljs.core._EQ_.call(null,el.href,location.href);
});
keechma.app_state.history_router.should_href_pass_through_QMARK_ = (function keechma$app_state$history_router$should_href_pass_through_QMARK_(href){
var vec__27710 = clojure.string.split.call(null,location.href,/#/);
var current = cljs.core.nth.call(null,vec__27710,(0),null);
var current_hash = cljs.core.nth.call(null,vec__27710,(1),null);
var vec__27713 = clojure.string.split.call(null,href,/#/);
var next = cljs.core.nth.call(null,vec__27713,(0),null);
var next_hash = cljs.core.nth.call(null,vec__27713,(1),null);
return (cljs.core._EQ_.call(null,current,next)) && (cljs.core.not_EQ_.call(null,current_hash,next_hash));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,routes,params)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),"/"].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
}
});
keechma.app_state.history_router.process_base_href = (function keechma$app_state$history_router$process_base_href(base_href){
return keechma.app_state.history_router.add_leading_slash.call(null,keechma.app_state.history_router.add_trailing_slash.call(null,base_href));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.history_router.HistoryRouter = (function (routes,routes_chan,base_href,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.base_href = base_href;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27717,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27721 = k27717;
var G__27721__$1 = (((G__27721 instanceof cljs.core.Keyword))?G__27721.fqn:null);
switch (G__27721__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "base-href":
return self__.base_href;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27717,else__9607__auto__);

}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27716){
var self__ = this;
var G__27716__$1 = this;
return (new cljs.core.RecordIter((0),G__27716__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (href){
return cljs.core.async.put_BANG_.call(null,self__.routes_chan,router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,href,self__.base_href)));
});})(this$__$1))
;
new cljs.core.Keyword(null,"bind","bind",-113428417).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,handler);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,location.href,self__.base_href)));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863),handler);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"unbind","unbind",716905720).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"go","go",-146946655).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params))].join(''));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = ((function (this$__$1){
return (function (e){
var temp__5457__auto__ = keechma.app_state.history_router.link_el.call(null,e.target);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
var href = el.href;
if(cljs.core.truth_((function (){var and__8904__auto__ = keechma.app_state.history_router.current_target_self_QMARK_.call(null,el);
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = keechma.app_state.history_router.left_button_clicked_QMARK_.call(null,e);
if(cljs.core.truth_(and__8904__auto____$1)){
var and__8904__auto____$2 = cljs.core.not.call(null,keechma.app_state.history_router.mod_key_pressed_QMARK_.call(null,e));
if(and__8904__auto____$2){
return keechma.app_state.history_router.link_has_prefixed_url_QMARK_.call(null,el,self__.base_href);
} else {
return and__8904__auto____$2;
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
if(cljs.core.truth_(keechma.app_state.history_router.should_href_pass_through_QMARK_.call(null,href))){
return null;
} else {
new cljs.core.Keyword(null,"go","go",-146946655).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,href);

e.preventDefault();

return e.stopPropagation();
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1))
;
return ((function (click_handler,this$__$1){
return (function() { 
var G__27726__delegate = function (children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),children);
};
var G__27726 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27727__i = 0, G__27727__a = new Array(arguments.length -  0);
while (G__27727__i < G__27727__a.length) {G__27727__a[G__27727__i] = arguments[G__27727__i + 0]; ++G__27727__i;}
  children = new cljs.core.IndexedSeq(G__27727__a,0,null);
} 
return G__27726__delegate.call(this,children);};
G__27726.cljs$lang$maxFixedArity = 0;
G__27726.cljs$lang$applyTo = (function (arglist__27728){
var children = cljs.core.seq(arglist__27728);
return G__27726__delegate(children);
});
G__27726.cljs$core$IFn$_invoke$arity$variadic = G__27726__delegate;
return G__27726;
})()
;
;})(click_handler,this$__$1))
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-402337099 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27718,other27719){
var self__ = this;
var this27718__$1 = this;
return (!((other27719 == null))) && ((this27718__$1.constructor === other27719.constructor)) && (cljs.core._EQ_.call(null,this27718__$1.routes,other27719.routes)) && (cljs.core._EQ_.call(null,this27718__$1.routes_chan,other27719.routes_chan)) && (cljs.core._EQ_.call(null,this27718__$1.base_href,other27719.base_href)) && (cljs.core._EQ_.call(null,this27718__$1.app_db,other27719.app_db)) && (cljs.core._EQ_.call(null,this27718__$1.__extmap,other27719.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"base-href","base-href",564187357),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27716){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27722 = cljs.core.keyword_identical_QMARK_;
var expr__27723 = k__9612__auto__;
if(cljs.core.truth_(pred__27722.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__27723))){
return (new keechma.app_state.history_router.HistoryRouter(G__27716,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27722.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__27723))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__27716,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27722.call(null,new cljs.core.Keyword(null,"base-href","base-href",564187357),expr__27723))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__27716,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27722.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__27723))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__27716,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27716),null));
}
}
}
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27716){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__27716,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"base-href","base-href",-2090248412,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true;

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__27720){
return (new keechma.app_state.history_router.HistoryRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__27720),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__27720),new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(G__27720),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__27720),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27720,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302))),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.history_router.__GT_HistoryRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,base_href,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});
