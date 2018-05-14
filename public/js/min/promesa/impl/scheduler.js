// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_.call(null,false);
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler24201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler24201 = (function (cur,done_QMARK_,cancelled,meta24202){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta24202 = meta24202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_24203,meta24202__$1){
var self__ = this;
var _24203__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24201(self__.cur,self__.done_QMARK_,self__.cancelled,meta24202__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_24203){
var self__ = this;
var _24203__$1 = this;
return self__.meta24202;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_.call(null,self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta24202","meta24202",-1417246986,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler24201.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler24201";

promesa.impl.scheduler.t_promesa$impl$scheduler24201.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler24201");
});})(cancelled))
;

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler24201 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler24201(cur__$1,done_QMARK___$1,cancelled__$1,meta24202){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24201(cur__$1,done_QMARK___$1,cancelled__$1,meta24202));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler24201(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler24204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler24204 = (function (meta24205){
this.meta24205 = meta24205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler24204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24206,meta24205__$1){
var self__ = this;
var _24206__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24204(meta24205__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler24204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24206){
var self__ = this;
var _24206__$1 = this;
return self__.meta24205;
});

promesa.impl.scheduler.t_promesa$impl$scheduler24204.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler24204.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return func.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task.call(null,cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler24204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24205","meta24205",1374526541,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler24204.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler24204.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler24204";

promesa.impl.scheduler.t_promesa$impl$scheduler24204.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler24204");
});

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler24204 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler24204(meta24205){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24204(meta24205));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler24204(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler.call(null);
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule.call(null,cljs.core.deref.call(null,promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});
