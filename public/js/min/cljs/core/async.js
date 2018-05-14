// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17868 = arguments.length;
switch (G__17868) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17869 = (function (f,blockable,meta17870){
this.f = f;
this.blockable = blockable;
this.meta17870 = meta17870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17871,meta17870__$1){
var self__ = this;
var _17871__$1 = this;
return (new cljs.core.async.t_cljs$core$async17869(self__.f,self__.blockable,meta17870__$1));
});

cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17871){
var self__ = this;
var _17871__$1 = this;
return self__.meta17870;
});

cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17870","meta17870",1419649701,null)], null);
});

cljs.core.async.t_cljs$core$async17869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17869";

cljs.core.async.t_cljs$core$async17869.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async17869");
});

cljs.core.async.__GT_t_cljs$core$async17869 = (function cljs$core$async$__GT_t_cljs$core$async17869(f__$1,blockable__$1,meta17870){
return (new cljs.core.async.t_cljs$core$async17869(f__$1,blockable__$1,meta17870));
});

}

return (new cljs.core.async.t_cljs$core$async17869(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17875 = arguments.length;
switch (G__17875) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17881 = arguments.length;
switch (G__17881) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17883 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17883);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17883,ret){
return (function (){
return fn1.call(null,val_17883);
});})(val_17883,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17885 = arguments.length;
switch (G__17885) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9961__auto___17887 = n;
var x_17888 = (0);
while(true){
if((x_17888 < n__9961__auto___17887)){
(a[x_17888] = (0));

var G__17889 = (x_17888 + (1));
x_17888 = G__17889;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17890 = (i + (1));
i = G__17890;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17891 = (function (flag,meta17892){
this.flag = flag;
this.meta17892 = meta17892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17893,meta17892__$1){
var self__ = this;
var _17893__$1 = this;
return (new cljs.core.async.t_cljs$core$async17891(self__.flag,meta17892__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17893){
var self__ = this;
var _17893__$1 = this;
return self__.meta17892;
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17892","meta17892",1965797379,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17891";

cljs.core.async.t_cljs$core$async17891.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async17891");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17891 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17891(flag__$1,meta17892){
return (new cljs.core.async.t_cljs$core$async17891(flag__$1,meta17892));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17891(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17894 = (function (flag,cb,meta17895){
this.flag = flag;
this.cb = cb;
this.meta17895 = meta17895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17896,meta17895__$1){
var self__ = this;
var _17896__$1 = this;
return (new cljs.core.async.t_cljs$core$async17894(self__.flag,self__.cb,meta17895__$1));
});

cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17896){
var self__ = this;
var _17896__$1 = this;
return self__.meta17895;
});

cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17895","meta17895",1713294307,null)], null);
});

cljs.core.async.t_cljs$core$async17894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17894";

cljs.core.async.t_cljs$core$async17894.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async17894");
});

cljs.core.async.__GT_t_cljs$core$async17894 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17894(flag__$1,cb__$1,meta17895){
return (new cljs.core.async.t_cljs$core$async17894(flag__$1,cb__$1,meta17895));
});

}

return (new cljs.core.async.t_cljs$core$async17894(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17897_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17897_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17898_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17898_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8916__auto__ = wport;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17899 = (i + (1));
i = G__17899;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8916__auto__ = ret;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8904__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___17905 = arguments.length;
var i__10185__auto___17906 = (0);
while(true){
if((i__10185__auto___17906 < len__10184__auto___17905)){
args__10191__auto__.push((arguments[i__10185__auto___17906]));

var G__17907 = (i__10185__auto___17906 + (1));
i__10185__auto___17906 = G__17907;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17902){
var map__17903 = p__17902;
var map__17903__$1 = ((((!((map__17903 == null)))?((((map__17903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17903):map__17903);
var opts = map__17903__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17900){
var G__17901 = cljs.core.first.call(null,seq17900);
var seq17900__$1 = cljs.core.next.call(null,seq17900);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17901,seq17900__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17909 = arguments.length;
switch (G__17909) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17808__auto___17955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___17955){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___17955){
return (function (state_17933){
var state_val_17934 = (state_17933[(1)]);
if((state_val_17934 === (7))){
var inst_17929 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17935_17956 = state_17933__$1;
(statearr_17935_17956[(2)] = inst_17929);

(statearr_17935_17956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (1))){
var state_17933__$1 = state_17933;
var statearr_17936_17957 = state_17933__$1;
(statearr_17936_17957[(2)] = null);

(statearr_17936_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (4))){
var inst_17912 = (state_17933[(7)]);
var inst_17912__$1 = (state_17933[(2)]);
var inst_17913 = (inst_17912__$1 == null);
var state_17933__$1 = (function (){var statearr_17937 = state_17933;
(statearr_17937[(7)] = inst_17912__$1);

return statearr_17937;
})();
if(cljs.core.truth_(inst_17913)){
var statearr_17938_17958 = state_17933__$1;
(statearr_17938_17958[(1)] = (5));

} else {
var statearr_17939_17959 = state_17933__$1;
(statearr_17939_17959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (13))){
var state_17933__$1 = state_17933;
var statearr_17940_17960 = state_17933__$1;
(statearr_17940_17960[(2)] = null);

(statearr_17940_17960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (6))){
var inst_17912 = (state_17933[(7)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17933__$1,(11),to,inst_17912);
} else {
if((state_val_17934 === (3))){
var inst_17931 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17933__$1,inst_17931);
} else {
if((state_val_17934 === (12))){
var state_17933__$1 = state_17933;
var statearr_17941_17961 = state_17933__$1;
(statearr_17941_17961[(2)] = null);

(statearr_17941_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (2))){
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17933__$1,(4),from);
} else {
if((state_val_17934 === (11))){
var inst_17922 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
if(cljs.core.truth_(inst_17922)){
var statearr_17942_17962 = state_17933__$1;
(statearr_17942_17962[(1)] = (12));

} else {
var statearr_17943_17963 = state_17933__$1;
(statearr_17943_17963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (9))){
var state_17933__$1 = state_17933;
var statearr_17944_17964 = state_17933__$1;
(statearr_17944_17964[(2)] = null);

(statearr_17944_17964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (5))){
var state_17933__$1 = state_17933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17945_17965 = state_17933__$1;
(statearr_17945_17965[(1)] = (8));

} else {
var statearr_17946_17966 = state_17933__$1;
(statearr_17946_17966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (14))){
var inst_17927 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17947_17967 = state_17933__$1;
(statearr_17947_17967[(2)] = inst_17927);

(statearr_17947_17967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (10))){
var inst_17919 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17948_17968 = state_17933__$1;
(statearr_17948_17968[(2)] = inst_17919);

(statearr_17948_17968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (8))){
var inst_17916 = cljs.core.async.close_BANG_.call(null,to);
var state_17933__$1 = state_17933;
var statearr_17949_17969 = state_17933__$1;
(statearr_17949_17969[(2)] = inst_17916);

(statearr_17949_17969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___17955))
;
return ((function (switch__17718__auto__,c__17808__auto___17955){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_17950 = [null,null,null,null,null,null,null,null];
(statearr_17950[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_17950[(1)] = (1));

return statearr_17950;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_17933){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_17933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e17951){if((e17951 instanceof Object)){
var ex__17722__auto__ = e17951;
var statearr_17952_17970 = state_17933;
(statearr_17952_17970[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17971 = state_17933;
state_17933 = G__17971;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_17933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_17933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___17955))
})();
var state__17810__auto__ = (function (){var statearr_17953 = f__17809__auto__.call(null);
(statearr_17953[(6)] = c__17808__auto___17955);

return statearr_17953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___17955))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17972){
var vec__17973 = p__17972;
var v = cljs.core.nth.call(null,vec__17973,(0),null);
var p = cljs.core.nth.call(null,vec__17973,(1),null);
var job = vec__17973;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17808__auto___18144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results){
return (function (state_17980){
var state_val_17981 = (state_17980[(1)]);
if((state_val_17981 === (1))){
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17980__$1,(2),res,v);
} else {
if((state_val_17981 === (2))){
var inst_17977 = (state_17980[(2)]);
var inst_17978 = cljs.core.async.close_BANG_.call(null,res);
var state_17980__$1 = (function (){var statearr_17982 = state_17980;
(statearr_17982[(7)] = inst_17977);

return statearr_17982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17980__$1,inst_17978);
} else {
return null;
}
}
});})(c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results))
;
return ((function (switch__17718__auto__,c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_17983 = [null,null,null,null,null,null,null,null];
(statearr_17983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__);

(statearr_17983[(1)] = (1));

return statearr_17983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1 = (function (state_17980){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_17980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e17984){if((e17984 instanceof Object)){
var ex__17722__auto__ = e17984;
var statearr_17985_18145 = state_17980;
(statearr_17985_18145[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18146 = state_17980;
state_17980 = G__18146;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = function(state_17980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1.call(this,state_17980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results))
})();
var state__17810__auto__ = (function (){var statearr_17986 = f__17809__auto__.call(null);
(statearr_17986[(6)] = c__17808__auto___18144);

return statearr_17986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___18144,res,vec__17973,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17987){
var vec__17988 = p__17987;
var v = cljs.core.nth.call(null,vec__17988,(0),null);
var p = cljs.core.nth.call(null,vec__17988,(1),null);
var job = vec__17988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9961__auto___18147 = n;
var __18148 = (0);
while(true){
if((__18148 < n__9961__auto___18147)){
var G__17991_18149 = type;
var G__17991_18150__$1 = (((G__17991_18149 instanceof cljs.core.Keyword))?G__17991_18149.fqn:null);
switch (G__17991_18150__$1) {
case "compute":
var c__17808__auto___18152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18148,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (__18148,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function (state_18004){
var state_val_18005 = (state_18004[(1)]);
if((state_val_18005 === (1))){
var state_18004__$1 = state_18004;
var statearr_18006_18153 = state_18004__$1;
(statearr_18006_18153[(2)] = null);

(statearr_18006_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (2))){
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18004__$1,(4),jobs);
} else {
if((state_val_18005 === (3))){
var inst_18002 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18004__$1,inst_18002);
} else {
if((state_val_18005 === (4))){
var inst_17994 = (state_18004[(2)]);
var inst_17995 = process.call(null,inst_17994);
var state_18004__$1 = state_18004;
if(cljs.core.truth_(inst_17995)){
var statearr_18007_18154 = state_18004__$1;
(statearr_18007_18154[(1)] = (5));

} else {
var statearr_18008_18155 = state_18004__$1;
(statearr_18008_18155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (5))){
var state_18004__$1 = state_18004;
var statearr_18009_18156 = state_18004__$1;
(statearr_18009_18156[(2)] = null);

(statearr_18009_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (6))){
var state_18004__$1 = state_18004;
var statearr_18010_18157 = state_18004__$1;
(statearr_18010_18157[(2)] = null);

(statearr_18010_18157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (7))){
var inst_18000 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18011_18158 = state_18004__$1;
(statearr_18011_18158[(2)] = inst_18000);

(statearr_18011_18158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18148,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
;
return ((function (__18148,switch__17718__auto__,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_18012 = [null,null,null,null,null,null,null];
(statearr_18012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__);

(statearr_18012[(1)] = (1));

return statearr_18012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1 = (function (state_18004){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18013){if((e18013 instanceof Object)){
var ex__17722__auto__ = e18013;
var statearr_18014_18159 = state_18004;
(statearr_18014_18159[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18160 = state_18004;
state_18004 = G__18160;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = function(state_18004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1.call(this,state_18004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__;
})()
;})(__18148,switch__17718__auto__,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
})();
var state__17810__auto__ = (function (){var statearr_18015 = f__17809__auto__.call(null);
(statearr_18015[(6)] = c__17808__auto___18152);

return statearr_18015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(__18148,c__17808__auto___18152,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
);


break;
case "async":
var c__17808__auto___18161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18148,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (__18148,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function (state_18028){
var state_val_18029 = (state_18028[(1)]);
if((state_val_18029 === (1))){
var state_18028__$1 = state_18028;
var statearr_18030_18162 = state_18028__$1;
(statearr_18030_18162[(2)] = null);

(statearr_18030_18162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (2))){
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18028__$1,(4),jobs);
} else {
if((state_val_18029 === (3))){
var inst_18026 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18028__$1,inst_18026);
} else {
if((state_val_18029 === (4))){
var inst_18018 = (state_18028[(2)]);
var inst_18019 = async.call(null,inst_18018);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_18019)){
var statearr_18031_18163 = state_18028__$1;
(statearr_18031_18163[(1)] = (5));

} else {
var statearr_18032_18164 = state_18028__$1;
(statearr_18032_18164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (5))){
var state_18028__$1 = state_18028;
var statearr_18033_18165 = state_18028__$1;
(statearr_18033_18165[(2)] = null);

(statearr_18033_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (6))){
var state_18028__$1 = state_18028;
var statearr_18034_18166 = state_18028__$1;
(statearr_18034_18166[(2)] = null);

(statearr_18034_18166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (7))){
var inst_18024 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18035_18167 = state_18028__$1;
(statearr_18035_18167[(2)] = inst_18024);

(statearr_18035_18167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18148,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
;
return ((function (__18148,switch__17718__auto__,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_18036 = [null,null,null,null,null,null,null];
(statearr_18036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__);

(statearr_18036[(1)] = (1));

return statearr_18036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1 = (function (state_18028){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18037){if((e18037 instanceof Object)){
var ex__17722__auto__ = e18037;
var statearr_18038_18168 = state_18028;
(statearr_18038_18168[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18169 = state_18028;
state_18028 = G__18169;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = function(state_18028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1.call(this,state_18028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__;
})()
;})(__18148,switch__17718__auto__,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
})();
var state__17810__auto__ = (function (){var statearr_18039 = f__17809__auto__.call(null);
(statearr_18039[(6)] = c__17808__auto___18161);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(__18148,c__17808__auto___18161,G__17991_18149,G__17991_18150__$1,n__9961__auto___18147,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17991_18150__$1)].join('')));

}

var G__18170 = (__18148 + (1));
__18148 = G__18170;
continue;
} else {
}
break;
}

var c__17808__auto___18171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___18171,jobs,results,process,async){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___18171,jobs,results,process,async){
return (function (state_18061){
var state_val_18062 = (state_18061[(1)]);
if((state_val_18062 === (1))){
var state_18061__$1 = state_18061;
var statearr_18063_18172 = state_18061__$1;
(statearr_18063_18172[(2)] = null);

(statearr_18063_18172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18062 === (2))){
var state_18061__$1 = state_18061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18061__$1,(4),from);
} else {
if((state_val_18062 === (3))){
var inst_18059 = (state_18061[(2)]);
var state_18061__$1 = state_18061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18061__$1,inst_18059);
} else {
if((state_val_18062 === (4))){
var inst_18042 = (state_18061[(7)]);
var inst_18042__$1 = (state_18061[(2)]);
var inst_18043 = (inst_18042__$1 == null);
var state_18061__$1 = (function (){var statearr_18064 = state_18061;
(statearr_18064[(7)] = inst_18042__$1);

return statearr_18064;
})();
if(cljs.core.truth_(inst_18043)){
var statearr_18065_18173 = state_18061__$1;
(statearr_18065_18173[(1)] = (5));

} else {
var statearr_18066_18174 = state_18061__$1;
(statearr_18066_18174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18062 === (5))){
var inst_18045 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18061__$1 = state_18061;
var statearr_18067_18175 = state_18061__$1;
(statearr_18067_18175[(2)] = inst_18045);

(statearr_18067_18175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18062 === (6))){
var inst_18047 = (state_18061[(8)]);
var inst_18042 = (state_18061[(7)]);
var inst_18047__$1 = cljs.core.async.chan.call(null,(1));
var inst_18048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18049 = [inst_18042,inst_18047__$1];
var inst_18050 = (new cljs.core.PersistentVector(null,2,(5),inst_18048,inst_18049,null));
var state_18061__$1 = (function (){var statearr_18068 = state_18061;
(statearr_18068[(8)] = inst_18047__$1);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18061__$1,(8),jobs,inst_18050);
} else {
if((state_val_18062 === (7))){
var inst_18057 = (state_18061[(2)]);
var state_18061__$1 = state_18061;
var statearr_18069_18176 = state_18061__$1;
(statearr_18069_18176[(2)] = inst_18057);

(statearr_18069_18176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18062 === (8))){
var inst_18047 = (state_18061[(8)]);
var inst_18052 = (state_18061[(2)]);
var state_18061__$1 = (function (){var statearr_18070 = state_18061;
(statearr_18070[(9)] = inst_18052);

return statearr_18070;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18061__$1,(9),results,inst_18047);
} else {
if((state_val_18062 === (9))){
var inst_18054 = (state_18061[(2)]);
var state_18061__$1 = (function (){var statearr_18071 = state_18061;
(statearr_18071[(10)] = inst_18054);

return statearr_18071;
})();
var statearr_18072_18177 = state_18061__$1;
(statearr_18072_18177[(2)] = null);

(statearr_18072_18177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___18171,jobs,results,process,async))
;
return ((function (switch__17718__auto__,c__17808__auto___18171,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1 = (function (state_18061){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18074){if((e18074 instanceof Object)){
var ex__17722__auto__ = e18074;
var statearr_18075_18178 = state_18061;
(statearr_18075_18178[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18179 = state_18061;
state_18061 = G__18179;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = function(state_18061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1.call(this,state_18061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___18171,jobs,results,process,async))
})();
var state__17810__auto__ = (function (){var statearr_18076 = f__17809__auto__.call(null);
(statearr_18076[(6)] = c__17808__auto___18171);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___18171,jobs,results,process,async))
);


var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,jobs,results,process,async){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,jobs,results,process,async){
return (function (state_18114){
var state_val_18115 = (state_18114[(1)]);
if((state_val_18115 === (7))){
var inst_18110 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18116_18180 = state_18114__$1;
(statearr_18116_18180[(2)] = inst_18110);

(statearr_18116_18180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (20))){
var state_18114__$1 = state_18114;
var statearr_18117_18181 = state_18114__$1;
(statearr_18117_18181[(2)] = null);

(statearr_18117_18181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (1))){
var state_18114__$1 = state_18114;
var statearr_18118_18182 = state_18114__$1;
(statearr_18118_18182[(2)] = null);

(statearr_18118_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (4))){
var inst_18079 = (state_18114[(7)]);
var inst_18079__$1 = (state_18114[(2)]);
var inst_18080 = (inst_18079__$1 == null);
var state_18114__$1 = (function (){var statearr_18119 = state_18114;
(statearr_18119[(7)] = inst_18079__$1);

return statearr_18119;
})();
if(cljs.core.truth_(inst_18080)){
var statearr_18120_18183 = state_18114__$1;
(statearr_18120_18183[(1)] = (5));

} else {
var statearr_18121_18184 = state_18114__$1;
(statearr_18121_18184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (15))){
var inst_18092 = (state_18114[(8)]);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18114__$1,(18),to,inst_18092);
} else {
if((state_val_18115 === (21))){
var inst_18105 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18122_18185 = state_18114__$1;
(statearr_18122_18185[(2)] = inst_18105);

(statearr_18122_18185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (13))){
var inst_18107 = (state_18114[(2)]);
var state_18114__$1 = (function (){var statearr_18123 = state_18114;
(statearr_18123[(9)] = inst_18107);

return statearr_18123;
})();
var statearr_18124_18186 = state_18114__$1;
(statearr_18124_18186[(2)] = null);

(statearr_18124_18186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (6))){
var inst_18079 = (state_18114[(7)]);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18114__$1,(11),inst_18079);
} else {
if((state_val_18115 === (17))){
var inst_18100 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
if(cljs.core.truth_(inst_18100)){
var statearr_18125_18187 = state_18114__$1;
(statearr_18125_18187[(1)] = (19));

} else {
var statearr_18126_18188 = state_18114__$1;
(statearr_18126_18188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (3))){
var inst_18112 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18114__$1,inst_18112);
} else {
if((state_val_18115 === (12))){
var inst_18089 = (state_18114[(10)]);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18114__$1,(14),inst_18089);
} else {
if((state_val_18115 === (2))){
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18114__$1,(4),results);
} else {
if((state_val_18115 === (19))){
var state_18114__$1 = state_18114;
var statearr_18127_18189 = state_18114__$1;
(statearr_18127_18189[(2)] = null);

(statearr_18127_18189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (11))){
var inst_18089 = (state_18114[(2)]);
var state_18114__$1 = (function (){var statearr_18128 = state_18114;
(statearr_18128[(10)] = inst_18089);

return statearr_18128;
})();
var statearr_18129_18190 = state_18114__$1;
(statearr_18129_18190[(2)] = null);

(statearr_18129_18190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (9))){
var state_18114__$1 = state_18114;
var statearr_18130_18191 = state_18114__$1;
(statearr_18130_18191[(2)] = null);

(statearr_18130_18191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (5))){
var state_18114__$1 = state_18114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18131_18192 = state_18114__$1;
(statearr_18131_18192[(1)] = (8));

} else {
var statearr_18132_18193 = state_18114__$1;
(statearr_18132_18193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (14))){
var inst_18094 = (state_18114[(11)]);
var inst_18092 = (state_18114[(8)]);
var inst_18092__$1 = (state_18114[(2)]);
var inst_18093 = (inst_18092__$1 == null);
var inst_18094__$1 = cljs.core.not.call(null,inst_18093);
var state_18114__$1 = (function (){var statearr_18133 = state_18114;
(statearr_18133[(11)] = inst_18094__$1);

(statearr_18133[(8)] = inst_18092__$1);

return statearr_18133;
})();
if(inst_18094__$1){
var statearr_18134_18194 = state_18114__$1;
(statearr_18134_18194[(1)] = (15));

} else {
var statearr_18135_18195 = state_18114__$1;
(statearr_18135_18195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (16))){
var inst_18094 = (state_18114[(11)]);
var state_18114__$1 = state_18114;
var statearr_18136_18196 = state_18114__$1;
(statearr_18136_18196[(2)] = inst_18094);

(statearr_18136_18196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (10))){
var inst_18086 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18137_18197 = state_18114__$1;
(statearr_18137_18197[(2)] = inst_18086);

(statearr_18137_18197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (18))){
var inst_18097 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18138_18198 = state_18114__$1;
(statearr_18138_18198[(2)] = inst_18097);

(statearr_18138_18198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18115 === (8))){
var inst_18083 = cljs.core.async.close_BANG_.call(null,to);
var state_18114__$1 = state_18114;
var statearr_18139_18199 = state_18114__$1;
(statearr_18139_18199[(2)] = inst_18083);

(statearr_18139_18199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__,jobs,results,process,async))
;
return ((function (switch__17718__auto__,c__17808__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_18140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__);

(statearr_18140[(1)] = (1));

return statearr_18140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1 = (function (state_18114){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18141){if((e18141 instanceof Object)){
var ex__17722__auto__ = e18141;
var statearr_18142_18200 = state_18114;
(statearr_18142_18200[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_18114;
state_18114 = G__18201;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__ = function(state_18114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1.call(this,state_18114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,jobs,results,process,async))
})();
var state__17810__auto__ = (function (){var statearr_18143 = f__17809__auto__.call(null);
(statearr_18143[(6)] = c__17808__auto__);

return statearr_18143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,jobs,results,process,async))
);

return c__17808__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18203 = arguments.length;
switch (G__18203) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18206 = arguments.length;
switch (G__18206) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18209 = arguments.length;
switch (G__18209) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17808__auto___18258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___18258,tc,fc){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___18258,tc,fc){
return (function (state_18235){
var state_val_18236 = (state_18235[(1)]);
if((state_val_18236 === (7))){
var inst_18231 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
var statearr_18237_18259 = state_18235__$1;
(statearr_18237_18259[(2)] = inst_18231);

(statearr_18237_18259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (1))){
var state_18235__$1 = state_18235;
var statearr_18238_18260 = state_18235__$1;
(statearr_18238_18260[(2)] = null);

(statearr_18238_18260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (4))){
var inst_18212 = (state_18235[(7)]);
var inst_18212__$1 = (state_18235[(2)]);
var inst_18213 = (inst_18212__$1 == null);
var state_18235__$1 = (function (){var statearr_18239 = state_18235;
(statearr_18239[(7)] = inst_18212__$1);

return statearr_18239;
})();
if(cljs.core.truth_(inst_18213)){
var statearr_18240_18261 = state_18235__$1;
(statearr_18240_18261[(1)] = (5));

} else {
var statearr_18241_18262 = state_18235__$1;
(statearr_18241_18262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (13))){
var state_18235__$1 = state_18235;
var statearr_18242_18263 = state_18235__$1;
(statearr_18242_18263[(2)] = null);

(statearr_18242_18263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (6))){
var inst_18212 = (state_18235[(7)]);
var inst_18218 = p.call(null,inst_18212);
var state_18235__$1 = state_18235;
if(cljs.core.truth_(inst_18218)){
var statearr_18243_18264 = state_18235__$1;
(statearr_18243_18264[(1)] = (9));

} else {
var statearr_18244_18265 = state_18235__$1;
(statearr_18244_18265[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (3))){
var inst_18233 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18235__$1,inst_18233);
} else {
if((state_val_18236 === (12))){
var state_18235__$1 = state_18235;
var statearr_18245_18266 = state_18235__$1;
(statearr_18245_18266[(2)] = null);

(statearr_18245_18266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (2))){
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18235__$1,(4),ch);
} else {
if((state_val_18236 === (11))){
var inst_18212 = (state_18235[(7)]);
var inst_18222 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18235__$1,(8),inst_18222,inst_18212);
} else {
if((state_val_18236 === (9))){
var state_18235__$1 = state_18235;
var statearr_18246_18267 = state_18235__$1;
(statearr_18246_18267[(2)] = tc);

(statearr_18246_18267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (5))){
var inst_18215 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18216 = cljs.core.async.close_BANG_.call(null,fc);
var state_18235__$1 = (function (){var statearr_18247 = state_18235;
(statearr_18247[(8)] = inst_18215);

return statearr_18247;
})();
var statearr_18248_18268 = state_18235__$1;
(statearr_18248_18268[(2)] = inst_18216);

(statearr_18248_18268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (14))){
var inst_18229 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
var statearr_18249_18269 = state_18235__$1;
(statearr_18249_18269[(2)] = inst_18229);

(statearr_18249_18269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (10))){
var state_18235__$1 = state_18235;
var statearr_18250_18270 = state_18235__$1;
(statearr_18250_18270[(2)] = fc);

(statearr_18250_18270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18236 === (8))){
var inst_18224 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
if(cljs.core.truth_(inst_18224)){
var statearr_18251_18271 = state_18235__$1;
(statearr_18251_18271[(1)] = (12));

} else {
var statearr_18252_18272 = state_18235__$1;
(statearr_18252_18272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___18258,tc,fc))
;
return ((function (switch__17718__auto__,c__17808__auto___18258,tc,fc){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_18253 = [null,null,null,null,null,null,null,null,null];
(statearr_18253[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_18253[(1)] = (1));

return statearr_18253;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_18235){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18254){if((e18254 instanceof Object)){
var ex__17722__auto__ = e18254;
var statearr_18255_18273 = state_18235;
(statearr_18255_18273[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_18235;
state_18235 = G__18274;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_18235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_18235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___18258,tc,fc))
})();
var state__17810__auto__ = (function (){var statearr_18256 = f__17809__auto__.call(null);
(statearr_18256[(6)] = c__17808__auto___18258);

return statearr_18256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___18258,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_18295){
var state_val_18296 = (state_18295[(1)]);
if((state_val_18296 === (7))){
var inst_18291 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
var statearr_18297_18315 = state_18295__$1;
(statearr_18297_18315[(2)] = inst_18291);

(statearr_18297_18315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (1))){
var inst_18275 = init;
var state_18295__$1 = (function (){var statearr_18298 = state_18295;
(statearr_18298[(7)] = inst_18275);

return statearr_18298;
})();
var statearr_18299_18316 = state_18295__$1;
(statearr_18299_18316[(2)] = null);

(statearr_18299_18316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (4))){
var inst_18278 = (state_18295[(8)]);
var inst_18278__$1 = (state_18295[(2)]);
var inst_18279 = (inst_18278__$1 == null);
var state_18295__$1 = (function (){var statearr_18300 = state_18295;
(statearr_18300[(8)] = inst_18278__$1);

return statearr_18300;
})();
if(cljs.core.truth_(inst_18279)){
var statearr_18301_18317 = state_18295__$1;
(statearr_18301_18317[(1)] = (5));

} else {
var statearr_18302_18318 = state_18295__$1;
(statearr_18302_18318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (6))){
var inst_18278 = (state_18295[(8)]);
var inst_18282 = (state_18295[(9)]);
var inst_18275 = (state_18295[(7)]);
var inst_18282__$1 = f.call(null,inst_18275,inst_18278);
var inst_18283 = cljs.core.reduced_QMARK_.call(null,inst_18282__$1);
var state_18295__$1 = (function (){var statearr_18303 = state_18295;
(statearr_18303[(9)] = inst_18282__$1);

return statearr_18303;
})();
if(inst_18283){
var statearr_18304_18319 = state_18295__$1;
(statearr_18304_18319[(1)] = (8));

} else {
var statearr_18305_18320 = state_18295__$1;
(statearr_18305_18320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (3))){
var inst_18293 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18295__$1,inst_18293);
} else {
if((state_val_18296 === (2))){
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18295__$1,(4),ch);
} else {
if((state_val_18296 === (9))){
var inst_18282 = (state_18295[(9)]);
var inst_18275 = inst_18282;
var state_18295__$1 = (function (){var statearr_18306 = state_18295;
(statearr_18306[(7)] = inst_18275);

return statearr_18306;
})();
var statearr_18307_18321 = state_18295__$1;
(statearr_18307_18321[(2)] = null);

(statearr_18307_18321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (5))){
var inst_18275 = (state_18295[(7)]);
var state_18295__$1 = state_18295;
var statearr_18308_18322 = state_18295__$1;
(statearr_18308_18322[(2)] = inst_18275);

(statearr_18308_18322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (10))){
var inst_18289 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
var statearr_18309_18323 = state_18295__$1;
(statearr_18309_18323[(2)] = inst_18289);

(statearr_18309_18323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (8))){
var inst_18282 = (state_18295[(9)]);
var inst_18285 = cljs.core.deref.call(null,inst_18282);
var state_18295__$1 = state_18295;
var statearr_18310_18324 = state_18295__$1;
(statearr_18310_18324[(2)] = inst_18285);

(statearr_18310_18324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17719__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17719__auto____0 = (function (){
var statearr_18311 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18311[(0)] = cljs$core$async$reduce_$_state_machine__17719__auto__);

(statearr_18311[(1)] = (1));

return statearr_18311;
});
var cljs$core$async$reduce_$_state_machine__17719__auto____1 = (function (state_18295){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18312){if((e18312 instanceof Object)){
var ex__17722__auto__ = e18312;
var statearr_18313_18325 = state_18295;
(statearr_18313_18325[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18326 = state_18295;
state_18295 = G__18326;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17719__auto__ = function(state_18295){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17719__auto____1.call(this,state_18295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17719__auto____0;
cljs$core$async$reduce_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17719__auto____1;
return cljs$core$async$reduce_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_18314 = f__17809__auto__.call(null);
(statearr_18314[(6)] = c__17808__auto__);

return statearr_18314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18328 = arguments.length;
switch (G__18328) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_18353){
var state_val_18354 = (state_18353[(1)]);
if((state_val_18354 === (7))){
var inst_18335 = (state_18353[(2)]);
var state_18353__$1 = state_18353;
var statearr_18355_18376 = state_18353__$1;
(statearr_18355_18376[(2)] = inst_18335);

(statearr_18355_18376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (1))){
var inst_18329 = cljs.core.seq.call(null,coll);
var inst_18330 = inst_18329;
var state_18353__$1 = (function (){var statearr_18356 = state_18353;
(statearr_18356[(7)] = inst_18330);

return statearr_18356;
})();
var statearr_18357_18377 = state_18353__$1;
(statearr_18357_18377[(2)] = null);

(statearr_18357_18377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (4))){
var inst_18330 = (state_18353[(7)]);
var inst_18333 = cljs.core.first.call(null,inst_18330);
var state_18353__$1 = state_18353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18353__$1,(7),ch,inst_18333);
} else {
if((state_val_18354 === (13))){
var inst_18347 = (state_18353[(2)]);
var state_18353__$1 = state_18353;
var statearr_18358_18378 = state_18353__$1;
(statearr_18358_18378[(2)] = inst_18347);

(statearr_18358_18378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (6))){
var inst_18338 = (state_18353[(2)]);
var state_18353__$1 = state_18353;
if(cljs.core.truth_(inst_18338)){
var statearr_18359_18379 = state_18353__$1;
(statearr_18359_18379[(1)] = (8));

} else {
var statearr_18360_18380 = state_18353__$1;
(statearr_18360_18380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (3))){
var inst_18351 = (state_18353[(2)]);
var state_18353__$1 = state_18353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18353__$1,inst_18351);
} else {
if((state_val_18354 === (12))){
var state_18353__$1 = state_18353;
var statearr_18361_18381 = state_18353__$1;
(statearr_18361_18381[(2)] = null);

(statearr_18361_18381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (2))){
var inst_18330 = (state_18353[(7)]);
var state_18353__$1 = state_18353;
if(cljs.core.truth_(inst_18330)){
var statearr_18362_18382 = state_18353__$1;
(statearr_18362_18382[(1)] = (4));

} else {
var statearr_18363_18383 = state_18353__$1;
(statearr_18363_18383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (11))){
var inst_18344 = cljs.core.async.close_BANG_.call(null,ch);
var state_18353__$1 = state_18353;
var statearr_18364_18384 = state_18353__$1;
(statearr_18364_18384[(2)] = inst_18344);

(statearr_18364_18384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (9))){
var state_18353__$1 = state_18353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18365_18385 = state_18353__$1;
(statearr_18365_18385[(1)] = (11));

} else {
var statearr_18366_18386 = state_18353__$1;
(statearr_18366_18386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (5))){
var inst_18330 = (state_18353[(7)]);
var state_18353__$1 = state_18353;
var statearr_18367_18387 = state_18353__$1;
(statearr_18367_18387[(2)] = inst_18330);

(statearr_18367_18387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (10))){
var inst_18349 = (state_18353[(2)]);
var state_18353__$1 = state_18353;
var statearr_18368_18388 = state_18353__$1;
(statearr_18368_18388[(2)] = inst_18349);

(statearr_18368_18388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18354 === (8))){
var inst_18330 = (state_18353[(7)]);
var inst_18340 = cljs.core.next.call(null,inst_18330);
var inst_18330__$1 = inst_18340;
var state_18353__$1 = (function (){var statearr_18369 = state_18353;
(statearr_18369[(7)] = inst_18330__$1);

return statearr_18369;
})();
var statearr_18370_18389 = state_18353__$1;
(statearr_18370_18389[(2)] = null);

(statearr_18370_18389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_18371 = [null,null,null,null,null,null,null,null];
(statearr_18371[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_18371[(1)] = (1));

return statearr_18371;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_18353){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18372){if((e18372 instanceof Object)){
var ex__17722__auto__ = e18372;
var statearr_18373_18390 = state_18353;
(statearr_18373_18390[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18391 = state_18353;
state_18353 = G__18391;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_18353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_18353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_18374 = f__17809__auto__.call(null);
(statearr_18374[(6)] = c__17808__auto__);

return statearr_18374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9649__auto__ = (((_ == null))?null:_);
var m__9650__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,_);
} else {
var m__9650__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9650__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m);
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18392 = (function (ch,cs,meta18393){
this.ch = ch;
this.cs = cs;
this.meta18393 = meta18393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18394,meta18393__$1){
var self__ = this;
var _18394__$1 = this;
return (new cljs.core.async.t_cljs$core$async18392(self__.ch,self__.cs,meta18393__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18394){
var self__ = this;
var _18394__$1 = this;
return self__.meta18393;
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18393","meta18393",-1868573474,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18392";

cljs.core.async.t_cljs$core$async18392.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async18392");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18392 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18392(ch__$1,cs__$1,meta18393){
return (new cljs.core.async.t_cljs$core$async18392(ch__$1,cs__$1,meta18393));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18392(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17808__auto___18614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___18614,cs,m,dchan,dctr,done){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___18614,cs,m,dchan,dctr,done){
return (function (state_18529){
var state_val_18530 = (state_18529[(1)]);
if((state_val_18530 === (7))){
var inst_18525 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18531_18615 = state_18529__$1;
(statearr_18531_18615[(2)] = inst_18525);

(statearr_18531_18615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (20))){
var inst_18428 = (state_18529[(7)]);
var inst_18440 = cljs.core.first.call(null,inst_18428);
var inst_18441 = cljs.core.nth.call(null,inst_18440,(0),null);
var inst_18442 = cljs.core.nth.call(null,inst_18440,(1),null);
var state_18529__$1 = (function (){var statearr_18532 = state_18529;
(statearr_18532[(8)] = inst_18441);

return statearr_18532;
})();
if(cljs.core.truth_(inst_18442)){
var statearr_18533_18616 = state_18529__$1;
(statearr_18533_18616[(1)] = (22));

} else {
var statearr_18534_18617 = state_18529__$1;
(statearr_18534_18617[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (27))){
var inst_18477 = (state_18529[(9)]);
var inst_18472 = (state_18529[(10)]);
var inst_18397 = (state_18529[(11)]);
var inst_18470 = (state_18529[(12)]);
var inst_18477__$1 = cljs.core._nth.call(null,inst_18470,inst_18472);
var inst_18478 = cljs.core.async.put_BANG_.call(null,inst_18477__$1,inst_18397,done);
var state_18529__$1 = (function (){var statearr_18535 = state_18529;
(statearr_18535[(9)] = inst_18477__$1);

return statearr_18535;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18536_18618 = state_18529__$1;
(statearr_18536_18618[(1)] = (30));

} else {
var statearr_18537_18619 = state_18529__$1;
(statearr_18537_18619[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (1))){
var state_18529__$1 = state_18529;
var statearr_18538_18620 = state_18529__$1;
(statearr_18538_18620[(2)] = null);

(statearr_18538_18620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (24))){
var inst_18428 = (state_18529[(7)]);
var inst_18447 = (state_18529[(2)]);
var inst_18448 = cljs.core.next.call(null,inst_18428);
var inst_18406 = inst_18448;
var inst_18407 = null;
var inst_18408 = (0);
var inst_18409 = (0);
var state_18529__$1 = (function (){var statearr_18539 = state_18529;
(statearr_18539[(13)] = inst_18408);

(statearr_18539[(14)] = inst_18447);

(statearr_18539[(15)] = inst_18406);

(statearr_18539[(16)] = inst_18409);

(statearr_18539[(17)] = inst_18407);

return statearr_18539;
})();
var statearr_18540_18621 = state_18529__$1;
(statearr_18540_18621[(2)] = null);

(statearr_18540_18621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (39))){
var state_18529__$1 = state_18529;
var statearr_18544_18622 = state_18529__$1;
(statearr_18544_18622[(2)] = null);

(statearr_18544_18622[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (4))){
var inst_18397 = (state_18529[(11)]);
var inst_18397__$1 = (state_18529[(2)]);
var inst_18398 = (inst_18397__$1 == null);
var state_18529__$1 = (function (){var statearr_18545 = state_18529;
(statearr_18545[(11)] = inst_18397__$1);

return statearr_18545;
})();
if(cljs.core.truth_(inst_18398)){
var statearr_18546_18623 = state_18529__$1;
(statearr_18546_18623[(1)] = (5));

} else {
var statearr_18547_18624 = state_18529__$1;
(statearr_18547_18624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (15))){
var inst_18408 = (state_18529[(13)]);
var inst_18406 = (state_18529[(15)]);
var inst_18409 = (state_18529[(16)]);
var inst_18407 = (state_18529[(17)]);
var inst_18424 = (state_18529[(2)]);
var inst_18425 = (inst_18409 + (1));
var tmp18541 = inst_18408;
var tmp18542 = inst_18406;
var tmp18543 = inst_18407;
var inst_18406__$1 = tmp18542;
var inst_18407__$1 = tmp18543;
var inst_18408__$1 = tmp18541;
var inst_18409__$1 = inst_18425;
var state_18529__$1 = (function (){var statearr_18548 = state_18529;
(statearr_18548[(13)] = inst_18408__$1);

(statearr_18548[(15)] = inst_18406__$1);

(statearr_18548[(18)] = inst_18424);

(statearr_18548[(16)] = inst_18409__$1);

(statearr_18548[(17)] = inst_18407__$1);

return statearr_18548;
})();
var statearr_18549_18625 = state_18529__$1;
(statearr_18549_18625[(2)] = null);

(statearr_18549_18625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (21))){
var inst_18451 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18553_18626 = state_18529__$1;
(statearr_18553_18626[(2)] = inst_18451);

(statearr_18553_18626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (31))){
var inst_18477 = (state_18529[(9)]);
var inst_18481 = done.call(null,null);
var inst_18482 = cljs.core.async.untap_STAR_.call(null,m,inst_18477);
var state_18529__$1 = (function (){var statearr_18554 = state_18529;
(statearr_18554[(19)] = inst_18481);

return statearr_18554;
})();
var statearr_18555_18627 = state_18529__$1;
(statearr_18555_18627[(2)] = inst_18482);

(statearr_18555_18627[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (32))){
var inst_18469 = (state_18529[(20)]);
var inst_18471 = (state_18529[(21)]);
var inst_18472 = (state_18529[(10)]);
var inst_18470 = (state_18529[(12)]);
var inst_18484 = (state_18529[(2)]);
var inst_18485 = (inst_18472 + (1));
var tmp18550 = inst_18469;
var tmp18551 = inst_18471;
var tmp18552 = inst_18470;
var inst_18469__$1 = tmp18550;
var inst_18470__$1 = tmp18552;
var inst_18471__$1 = tmp18551;
var inst_18472__$1 = inst_18485;
var state_18529__$1 = (function (){var statearr_18556 = state_18529;
(statearr_18556[(22)] = inst_18484);

(statearr_18556[(20)] = inst_18469__$1);

(statearr_18556[(21)] = inst_18471__$1);

(statearr_18556[(10)] = inst_18472__$1);

(statearr_18556[(12)] = inst_18470__$1);

return statearr_18556;
})();
var statearr_18557_18628 = state_18529__$1;
(statearr_18557_18628[(2)] = null);

(statearr_18557_18628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (40))){
var inst_18497 = (state_18529[(23)]);
var inst_18501 = done.call(null,null);
var inst_18502 = cljs.core.async.untap_STAR_.call(null,m,inst_18497);
var state_18529__$1 = (function (){var statearr_18558 = state_18529;
(statearr_18558[(24)] = inst_18501);

return statearr_18558;
})();
var statearr_18559_18629 = state_18529__$1;
(statearr_18559_18629[(2)] = inst_18502);

(statearr_18559_18629[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (33))){
var inst_18488 = (state_18529[(25)]);
var inst_18490 = cljs.core.chunked_seq_QMARK_.call(null,inst_18488);
var state_18529__$1 = state_18529;
if(inst_18490){
var statearr_18560_18630 = state_18529__$1;
(statearr_18560_18630[(1)] = (36));

} else {
var statearr_18561_18631 = state_18529__$1;
(statearr_18561_18631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (13))){
var inst_18418 = (state_18529[(26)]);
var inst_18421 = cljs.core.async.close_BANG_.call(null,inst_18418);
var state_18529__$1 = state_18529;
var statearr_18562_18632 = state_18529__$1;
(statearr_18562_18632[(2)] = inst_18421);

(statearr_18562_18632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (22))){
var inst_18441 = (state_18529[(8)]);
var inst_18444 = cljs.core.async.close_BANG_.call(null,inst_18441);
var state_18529__$1 = state_18529;
var statearr_18563_18633 = state_18529__$1;
(statearr_18563_18633[(2)] = inst_18444);

(statearr_18563_18633[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (36))){
var inst_18488 = (state_18529[(25)]);
var inst_18492 = cljs.core.chunk_first.call(null,inst_18488);
var inst_18493 = cljs.core.chunk_rest.call(null,inst_18488);
var inst_18494 = cljs.core.count.call(null,inst_18492);
var inst_18469 = inst_18493;
var inst_18470 = inst_18492;
var inst_18471 = inst_18494;
var inst_18472 = (0);
var state_18529__$1 = (function (){var statearr_18564 = state_18529;
(statearr_18564[(20)] = inst_18469);

(statearr_18564[(21)] = inst_18471);

(statearr_18564[(10)] = inst_18472);

(statearr_18564[(12)] = inst_18470);

return statearr_18564;
})();
var statearr_18565_18634 = state_18529__$1;
(statearr_18565_18634[(2)] = null);

(statearr_18565_18634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (41))){
var inst_18488 = (state_18529[(25)]);
var inst_18504 = (state_18529[(2)]);
var inst_18505 = cljs.core.next.call(null,inst_18488);
var inst_18469 = inst_18505;
var inst_18470 = null;
var inst_18471 = (0);
var inst_18472 = (0);
var state_18529__$1 = (function (){var statearr_18566 = state_18529;
(statearr_18566[(20)] = inst_18469);

(statearr_18566[(21)] = inst_18471);

(statearr_18566[(10)] = inst_18472);

(statearr_18566[(12)] = inst_18470);

(statearr_18566[(27)] = inst_18504);

return statearr_18566;
})();
var statearr_18567_18635 = state_18529__$1;
(statearr_18567_18635[(2)] = null);

(statearr_18567_18635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (43))){
var state_18529__$1 = state_18529;
var statearr_18568_18636 = state_18529__$1;
(statearr_18568_18636[(2)] = null);

(statearr_18568_18636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (29))){
var inst_18513 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18569_18637 = state_18529__$1;
(statearr_18569_18637[(2)] = inst_18513);

(statearr_18569_18637[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (44))){
var inst_18522 = (state_18529[(2)]);
var state_18529__$1 = (function (){var statearr_18570 = state_18529;
(statearr_18570[(28)] = inst_18522);

return statearr_18570;
})();
var statearr_18571_18638 = state_18529__$1;
(statearr_18571_18638[(2)] = null);

(statearr_18571_18638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (6))){
var inst_18461 = (state_18529[(29)]);
var inst_18460 = cljs.core.deref.call(null,cs);
var inst_18461__$1 = cljs.core.keys.call(null,inst_18460);
var inst_18462 = cljs.core.count.call(null,inst_18461__$1);
var inst_18463 = cljs.core.reset_BANG_.call(null,dctr,inst_18462);
var inst_18468 = cljs.core.seq.call(null,inst_18461__$1);
var inst_18469 = inst_18468;
var inst_18470 = null;
var inst_18471 = (0);
var inst_18472 = (0);
var state_18529__$1 = (function (){var statearr_18572 = state_18529;
(statearr_18572[(20)] = inst_18469);

(statearr_18572[(29)] = inst_18461__$1);

(statearr_18572[(21)] = inst_18471);

(statearr_18572[(10)] = inst_18472);

(statearr_18572[(30)] = inst_18463);

(statearr_18572[(12)] = inst_18470);

return statearr_18572;
})();
var statearr_18573_18639 = state_18529__$1;
(statearr_18573_18639[(2)] = null);

(statearr_18573_18639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (28))){
var inst_18469 = (state_18529[(20)]);
var inst_18488 = (state_18529[(25)]);
var inst_18488__$1 = cljs.core.seq.call(null,inst_18469);
var state_18529__$1 = (function (){var statearr_18574 = state_18529;
(statearr_18574[(25)] = inst_18488__$1);

return statearr_18574;
})();
if(inst_18488__$1){
var statearr_18575_18640 = state_18529__$1;
(statearr_18575_18640[(1)] = (33));

} else {
var statearr_18576_18641 = state_18529__$1;
(statearr_18576_18641[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (25))){
var inst_18471 = (state_18529[(21)]);
var inst_18472 = (state_18529[(10)]);
var inst_18474 = (inst_18472 < inst_18471);
var inst_18475 = inst_18474;
var state_18529__$1 = state_18529;
if(cljs.core.truth_(inst_18475)){
var statearr_18577_18642 = state_18529__$1;
(statearr_18577_18642[(1)] = (27));

} else {
var statearr_18578_18643 = state_18529__$1;
(statearr_18578_18643[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (34))){
var state_18529__$1 = state_18529;
var statearr_18579_18644 = state_18529__$1;
(statearr_18579_18644[(2)] = null);

(statearr_18579_18644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (17))){
var state_18529__$1 = state_18529;
var statearr_18580_18645 = state_18529__$1;
(statearr_18580_18645[(2)] = null);

(statearr_18580_18645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (3))){
var inst_18527 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18529__$1,inst_18527);
} else {
if((state_val_18530 === (12))){
var inst_18456 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18581_18646 = state_18529__$1;
(statearr_18581_18646[(2)] = inst_18456);

(statearr_18581_18646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (2))){
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18529__$1,(4),ch);
} else {
if((state_val_18530 === (23))){
var state_18529__$1 = state_18529;
var statearr_18582_18647 = state_18529__$1;
(statearr_18582_18647[(2)] = null);

(statearr_18582_18647[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (35))){
var inst_18511 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18583_18648 = state_18529__$1;
(statearr_18583_18648[(2)] = inst_18511);

(statearr_18583_18648[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (19))){
var inst_18428 = (state_18529[(7)]);
var inst_18432 = cljs.core.chunk_first.call(null,inst_18428);
var inst_18433 = cljs.core.chunk_rest.call(null,inst_18428);
var inst_18434 = cljs.core.count.call(null,inst_18432);
var inst_18406 = inst_18433;
var inst_18407 = inst_18432;
var inst_18408 = inst_18434;
var inst_18409 = (0);
var state_18529__$1 = (function (){var statearr_18584 = state_18529;
(statearr_18584[(13)] = inst_18408);

(statearr_18584[(15)] = inst_18406);

(statearr_18584[(16)] = inst_18409);

(statearr_18584[(17)] = inst_18407);

return statearr_18584;
})();
var statearr_18585_18649 = state_18529__$1;
(statearr_18585_18649[(2)] = null);

(statearr_18585_18649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (11))){
var inst_18406 = (state_18529[(15)]);
var inst_18428 = (state_18529[(7)]);
var inst_18428__$1 = cljs.core.seq.call(null,inst_18406);
var state_18529__$1 = (function (){var statearr_18586 = state_18529;
(statearr_18586[(7)] = inst_18428__$1);

return statearr_18586;
})();
if(inst_18428__$1){
var statearr_18587_18650 = state_18529__$1;
(statearr_18587_18650[(1)] = (16));

} else {
var statearr_18588_18651 = state_18529__$1;
(statearr_18588_18651[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (9))){
var inst_18458 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18589_18652 = state_18529__$1;
(statearr_18589_18652[(2)] = inst_18458);

(statearr_18589_18652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (5))){
var inst_18404 = cljs.core.deref.call(null,cs);
var inst_18405 = cljs.core.seq.call(null,inst_18404);
var inst_18406 = inst_18405;
var inst_18407 = null;
var inst_18408 = (0);
var inst_18409 = (0);
var state_18529__$1 = (function (){var statearr_18590 = state_18529;
(statearr_18590[(13)] = inst_18408);

(statearr_18590[(15)] = inst_18406);

(statearr_18590[(16)] = inst_18409);

(statearr_18590[(17)] = inst_18407);

return statearr_18590;
})();
var statearr_18591_18653 = state_18529__$1;
(statearr_18591_18653[(2)] = null);

(statearr_18591_18653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (14))){
var state_18529__$1 = state_18529;
var statearr_18592_18654 = state_18529__$1;
(statearr_18592_18654[(2)] = null);

(statearr_18592_18654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (45))){
var inst_18519 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18593_18655 = state_18529__$1;
(statearr_18593_18655[(2)] = inst_18519);

(statearr_18593_18655[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (26))){
var inst_18461 = (state_18529[(29)]);
var inst_18515 = (state_18529[(2)]);
var inst_18516 = cljs.core.seq.call(null,inst_18461);
var state_18529__$1 = (function (){var statearr_18594 = state_18529;
(statearr_18594[(31)] = inst_18515);

return statearr_18594;
})();
if(inst_18516){
var statearr_18595_18656 = state_18529__$1;
(statearr_18595_18656[(1)] = (42));

} else {
var statearr_18596_18657 = state_18529__$1;
(statearr_18596_18657[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (16))){
var inst_18428 = (state_18529[(7)]);
var inst_18430 = cljs.core.chunked_seq_QMARK_.call(null,inst_18428);
var state_18529__$1 = state_18529;
if(inst_18430){
var statearr_18597_18658 = state_18529__$1;
(statearr_18597_18658[(1)] = (19));

} else {
var statearr_18598_18659 = state_18529__$1;
(statearr_18598_18659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (38))){
var inst_18508 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18599_18660 = state_18529__$1;
(statearr_18599_18660[(2)] = inst_18508);

(statearr_18599_18660[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (30))){
var state_18529__$1 = state_18529;
var statearr_18600_18661 = state_18529__$1;
(statearr_18600_18661[(2)] = null);

(statearr_18600_18661[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (10))){
var inst_18409 = (state_18529[(16)]);
var inst_18407 = (state_18529[(17)]);
var inst_18417 = cljs.core._nth.call(null,inst_18407,inst_18409);
var inst_18418 = cljs.core.nth.call(null,inst_18417,(0),null);
var inst_18419 = cljs.core.nth.call(null,inst_18417,(1),null);
var state_18529__$1 = (function (){var statearr_18601 = state_18529;
(statearr_18601[(26)] = inst_18418);

return statearr_18601;
})();
if(cljs.core.truth_(inst_18419)){
var statearr_18602_18662 = state_18529__$1;
(statearr_18602_18662[(1)] = (13));

} else {
var statearr_18603_18663 = state_18529__$1;
(statearr_18603_18663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (18))){
var inst_18454 = (state_18529[(2)]);
var state_18529__$1 = state_18529;
var statearr_18604_18664 = state_18529__$1;
(statearr_18604_18664[(2)] = inst_18454);

(statearr_18604_18664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (42))){
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18529__$1,(45),dchan);
} else {
if((state_val_18530 === (37))){
var inst_18488 = (state_18529[(25)]);
var inst_18497 = (state_18529[(23)]);
var inst_18397 = (state_18529[(11)]);
var inst_18497__$1 = cljs.core.first.call(null,inst_18488);
var inst_18498 = cljs.core.async.put_BANG_.call(null,inst_18497__$1,inst_18397,done);
var state_18529__$1 = (function (){var statearr_18605 = state_18529;
(statearr_18605[(23)] = inst_18497__$1);

return statearr_18605;
})();
if(cljs.core.truth_(inst_18498)){
var statearr_18606_18665 = state_18529__$1;
(statearr_18606_18665[(1)] = (39));

} else {
var statearr_18607_18666 = state_18529__$1;
(statearr_18607_18666[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18530 === (8))){
var inst_18408 = (state_18529[(13)]);
var inst_18409 = (state_18529[(16)]);
var inst_18411 = (inst_18409 < inst_18408);
var inst_18412 = inst_18411;
var state_18529__$1 = state_18529;
if(cljs.core.truth_(inst_18412)){
var statearr_18608_18667 = state_18529__$1;
(statearr_18608_18667[(1)] = (10));

} else {
var statearr_18609_18668 = state_18529__$1;
(statearr_18609_18668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___18614,cs,m,dchan,dctr,done))
;
return ((function (switch__17718__auto__,c__17808__auto___18614,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17719__auto__ = null;
var cljs$core$async$mult_$_state_machine__17719__auto____0 = (function (){
var statearr_18610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18610[(0)] = cljs$core$async$mult_$_state_machine__17719__auto__);

(statearr_18610[(1)] = (1));

return statearr_18610;
});
var cljs$core$async$mult_$_state_machine__17719__auto____1 = (function (state_18529){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18611){if((e18611 instanceof Object)){
var ex__17722__auto__ = e18611;
var statearr_18612_18669 = state_18529;
(statearr_18612_18669[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_18529;
state_18529 = G__18670;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17719__auto__ = function(state_18529){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17719__auto____1.call(this,state_18529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17719__auto____0;
cljs$core$async$mult_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17719__auto____1;
return cljs$core$async$mult_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___18614,cs,m,dchan,dctr,done))
})();
var state__17810__auto__ = (function (){var statearr_18613 = f__17809__auto__.call(null);
(statearr_18613[(6)] = c__17808__auto___18614);

return statearr_18613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___18614,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18672 = arguments.length;
switch (G__18672) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m);
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,state_map);
} else {
var m__9650__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,mode);
} else {
var m__9650__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___18684 = arguments.length;
var i__10185__auto___18685 = (0);
while(true){
if((i__10185__auto___18685 < len__10184__auto___18684)){
args__10191__auto__.push((arguments[i__10185__auto___18685]));

var G__18686 = (i__10185__auto___18685 + (1));
i__10185__auto___18685 = G__18686;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((3) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10192__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18678){
var map__18679 = p__18678;
var map__18679__$1 = ((((!((map__18679 == null)))?((((map__18679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18679):map__18679);
var opts = map__18679__$1;
var statearr_18681_18687 = state;
(statearr_18681_18687[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__18679,map__18679__$1,opts){
return (function (val){
var statearr_18682_18688 = state;
(statearr_18682_18688[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18679,map__18679__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18683_18689 = state;
(statearr_18683_18689[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18674){
var G__18675 = cljs.core.first.call(null,seq18674);
var seq18674__$1 = cljs.core.next.call(null,seq18674);
var G__18676 = cljs.core.first.call(null,seq18674__$1);
var seq18674__$2 = cljs.core.next.call(null,seq18674__$1);
var G__18677 = cljs.core.first.call(null,seq18674__$2);
var seq18674__$3 = cljs.core.next.call(null,seq18674__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18675,G__18676,G__18677,seq18674__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18690 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18691){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18691 = meta18691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18692,meta18691__$1){
var self__ = this;
var _18692__$1 = this;
return (new cljs.core.async.t_cljs$core$async18690(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18691__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18692){
var self__ = this;
var _18692__$1 = this;
return self__.meta18691;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18691","meta18691",-1552105983,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18690";

cljs.core.async.t_cljs$core$async18690.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async18690");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18690 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18690(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18691){
return (new cljs.core.async.t_cljs$core$async18690(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18691));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18690(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17808__auto___18854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18794){
var state_val_18795 = (state_18794[(1)]);
if((state_val_18795 === (7))){
var inst_18709 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18796_18855 = state_18794__$1;
(statearr_18796_18855[(2)] = inst_18709);

(statearr_18796_18855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (20))){
var inst_18721 = (state_18794[(7)]);
var state_18794__$1 = state_18794;
var statearr_18797_18856 = state_18794__$1;
(statearr_18797_18856[(2)] = inst_18721);

(statearr_18797_18856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (27))){
var state_18794__$1 = state_18794;
var statearr_18798_18857 = state_18794__$1;
(statearr_18798_18857[(2)] = null);

(statearr_18798_18857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (1))){
var inst_18696 = (state_18794[(8)]);
var inst_18696__$1 = calc_state.call(null);
var inst_18698 = (inst_18696__$1 == null);
var inst_18699 = cljs.core.not.call(null,inst_18698);
var state_18794__$1 = (function (){var statearr_18799 = state_18794;
(statearr_18799[(8)] = inst_18696__$1);

return statearr_18799;
})();
if(inst_18699){
var statearr_18800_18858 = state_18794__$1;
(statearr_18800_18858[(1)] = (2));

} else {
var statearr_18801_18859 = state_18794__$1;
(statearr_18801_18859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (24))){
var inst_18768 = (state_18794[(9)]);
var inst_18745 = (state_18794[(10)]);
var inst_18754 = (state_18794[(11)]);
var inst_18768__$1 = inst_18745.call(null,inst_18754);
var state_18794__$1 = (function (){var statearr_18802 = state_18794;
(statearr_18802[(9)] = inst_18768__$1);

return statearr_18802;
})();
if(cljs.core.truth_(inst_18768__$1)){
var statearr_18803_18860 = state_18794__$1;
(statearr_18803_18860[(1)] = (29));

} else {
var statearr_18804_18861 = state_18794__$1;
(statearr_18804_18861[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (4))){
var inst_18712 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18712)){
var statearr_18805_18862 = state_18794__$1;
(statearr_18805_18862[(1)] = (8));

} else {
var statearr_18806_18863 = state_18794__$1;
(statearr_18806_18863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (15))){
var inst_18739 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18739)){
var statearr_18807_18864 = state_18794__$1;
(statearr_18807_18864[(1)] = (19));

} else {
var statearr_18808_18865 = state_18794__$1;
(statearr_18808_18865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (21))){
var inst_18744 = (state_18794[(12)]);
var inst_18744__$1 = (state_18794[(2)]);
var inst_18745 = cljs.core.get.call(null,inst_18744__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18746 = cljs.core.get.call(null,inst_18744__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18747 = cljs.core.get.call(null,inst_18744__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18794__$1 = (function (){var statearr_18809 = state_18794;
(statearr_18809[(12)] = inst_18744__$1);

(statearr_18809[(10)] = inst_18745);

(statearr_18809[(13)] = inst_18746);

return statearr_18809;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18794__$1,(22),inst_18747);
} else {
if((state_val_18795 === (31))){
var inst_18776 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18776)){
var statearr_18810_18866 = state_18794__$1;
(statearr_18810_18866[(1)] = (32));

} else {
var statearr_18811_18867 = state_18794__$1;
(statearr_18811_18867[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (32))){
var inst_18753 = (state_18794[(14)]);
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18794__$1,(35),out,inst_18753);
} else {
if((state_val_18795 === (33))){
var inst_18744 = (state_18794[(12)]);
var inst_18721 = inst_18744;
var state_18794__$1 = (function (){var statearr_18812 = state_18794;
(statearr_18812[(7)] = inst_18721);

return statearr_18812;
})();
var statearr_18813_18868 = state_18794__$1;
(statearr_18813_18868[(2)] = null);

(statearr_18813_18868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (13))){
var inst_18721 = (state_18794[(7)]);
var inst_18728 = inst_18721.cljs$lang$protocol_mask$partition0$;
var inst_18729 = (inst_18728 & (64));
var inst_18730 = inst_18721.cljs$core$ISeq$;
var inst_18731 = (cljs.core.PROTOCOL_SENTINEL === inst_18730);
var inst_18732 = (inst_18729) || (inst_18731);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18732)){
var statearr_18814_18869 = state_18794__$1;
(statearr_18814_18869[(1)] = (16));

} else {
var statearr_18815_18870 = state_18794__$1;
(statearr_18815_18870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (22))){
var inst_18753 = (state_18794[(14)]);
var inst_18754 = (state_18794[(11)]);
var inst_18752 = (state_18794[(2)]);
var inst_18753__$1 = cljs.core.nth.call(null,inst_18752,(0),null);
var inst_18754__$1 = cljs.core.nth.call(null,inst_18752,(1),null);
var inst_18755 = (inst_18753__$1 == null);
var inst_18756 = cljs.core._EQ_.call(null,inst_18754__$1,change);
var inst_18757 = (inst_18755) || (inst_18756);
var state_18794__$1 = (function (){var statearr_18816 = state_18794;
(statearr_18816[(14)] = inst_18753__$1);

(statearr_18816[(11)] = inst_18754__$1);

return statearr_18816;
})();
if(cljs.core.truth_(inst_18757)){
var statearr_18817_18871 = state_18794__$1;
(statearr_18817_18871[(1)] = (23));

} else {
var statearr_18818_18872 = state_18794__$1;
(statearr_18818_18872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (36))){
var inst_18744 = (state_18794[(12)]);
var inst_18721 = inst_18744;
var state_18794__$1 = (function (){var statearr_18819 = state_18794;
(statearr_18819[(7)] = inst_18721);

return statearr_18819;
})();
var statearr_18820_18873 = state_18794__$1;
(statearr_18820_18873[(2)] = null);

(statearr_18820_18873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (29))){
var inst_18768 = (state_18794[(9)]);
var state_18794__$1 = state_18794;
var statearr_18821_18874 = state_18794__$1;
(statearr_18821_18874[(2)] = inst_18768);

(statearr_18821_18874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (6))){
var state_18794__$1 = state_18794;
var statearr_18822_18875 = state_18794__$1;
(statearr_18822_18875[(2)] = false);

(statearr_18822_18875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (28))){
var inst_18764 = (state_18794[(2)]);
var inst_18765 = calc_state.call(null);
var inst_18721 = inst_18765;
var state_18794__$1 = (function (){var statearr_18823 = state_18794;
(statearr_18823[(15)] = inst_18764);

(statearr_18823[(7)] = inst_18721);

return statearr_18823;
})();
var statearr_18824_18876 = state_18794__$1;
(statearr_18824_18876[(2)] = null);

(statearr_18824_18876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (25))){
var inst_18790 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18825_18877 = state_18794__$1;
(statearr_18825_18877[(2)] = inst_18790);

(statearr_18825_18877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (34))){
var inst_18788 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18826_18878 = state_18794__$1;
(statearr_18826_18878[(2)] = inst_18788);

(statearr_18826_18878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (17))){
var state_18794__$1 = state_18794;
var statearr_18827_18879 = state_18794__$1;
(statearr_18827_18879[(2)] = false);

(statearr_18827_18879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (3))){
var state_18794__$1 = state_18794;
var statearr_18828_18880 = state_18794__$1;
(statearr_18828_18880[(2)] = false);

(statearr_18828_18880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (12))){
var inst_18792 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18794__$1,inst_18792);
} else {
if((state_val_18795 === (2))){
var inst_18696 = (state_18794[(8)]);
var inst_18701 = inst_18696.cljs$lang$protocol_mask$partition0$;
var inst_18702 = (inst_18701 & (64));
var inst_18703 = inst_18696.cljs$core$ISeq$;
var inst_18704 = (cljs.core.PROTOCOL_SENTINEL === inst_18703);
var inst_18705 = (inst_18702) || (inst_18704);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18705)){
var statearr_18829_18881 = state_18794__$1;
(statearr_18829_18881[(1)] = (5));

} else {
var statearr_18830_18882 = state_18794__$1;
(statearr_18830_18882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (23))){
var inst_18753 = (state_18794[(14)]);
var inst_18759 = (inst_18753 == null);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18759)){
var statearr_18831_18883 = state_18794__$1;
(statearr_18831_18883[(1)] = (26));

} else {
var statearr_18832_18884 = state_18794__$1;
(statearr_18832_18884[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (35))){
var inst_18779 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18779)){
var statearr_18833_18885 = state_18794__$1;
(statearr_18833_18885[(1)] = (36));

} else {
var statearr_18834_18886 = state_18794__$1;
(statearr_18834_18886[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (19))){
var inst_18721 = (state_18794[(7)]);
var inst_18741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18721);
var state_18794__$1 = state_18794;
var statearr_18835_18887 = state_18794__$1;
(statearr_18835_18887[(2)] = inst_18741);

(statearr_18835_18887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (11))){
var inst_18721 = (state_18794[(7)]);
var inst_18725 = (inst_18721 == null);
var inst_18726 = cljs.core.not.call(null,inst_18725);
var state_18794__$1 = state_18794;
if(inst_18726){
var statearr_18836_18888 = state_18794__$1;
(statearr_18836_18888[(1)] = (13));

} else {
var statearr_18837_18889 = state_18794__$1;
(statearr_18837_18889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (9))){
var inst_18696 = (state_18794[(8)]);
var state_18794__$1 = state_18794;
var statearr_18838_18890 = state_18794__$1;
(statearr_18838_18890[(2)] = inst_18696);

(statearr_18838_18890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (5))){
var state_18794__$1 = state_18794;
var statearr_18839_18891 = state_18794__$1;
(statearr_18839_18891[(2)] = true);

(statearr_18839_18891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (14))){
var state_18794__$1 = state_18794;
var statearr_18840_18892 = state_18794__$1;
(statearr_18840_18892[(2)] = false);

(statearr_18840_18892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (26))){
var inst_18754 = (state_18794[(11)]);
var inst_18761 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18754);
var state_18794__$1 = state_18794;
var statearr_18841_18893 = state_18794__$1;
(statearr_18841_18893[(2)] = inst_18761);

(statearr_18841_18893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (16))){
var state_18794__$1 = state_18794;
var statearr_18842_18894 = state_18794__$1;
(statearr_18842_18894[(2)] = true);

(statearr_18842_18894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (38))){
var inst_18784 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18843_18895 = state_18794__$1;
(statearr_18843_18895[(2)] = inst_18784);

(statearr_18843_18895[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (30))){
var inst_18745 = (state_18794[(10)]);
var inst_18746 = (state_18794[(13)]);
var inst_18754 = (state_18794[(11)]);
var inst_18771 = cljs.core.empty_QMARK_.call(null,inst_18745);
var inst_18772 = inst_18746.call(null,inst_18754);
var inst_18773 = cljs.core.not.call(null,inst_18772);
var inst_18774 = (inst_18771) && (inst_18773);
var state_18794__$1 = state_18794;
var statearr_18844_18896 = state_18794__$1;
(statearr_18844_18896[(2)] = inst_18774);

(statearr_18844_18896[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (10))){
var inst_18696 = (state_18794[(8)]);
var inst_18717 = (state_18794[(2)]);
var inst_18718 = cljs.core.get.call(null,inst_18717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18719 = cljs.core.get.call(null,inst_18717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18720 = cljs.core.get.call(null,inst_18717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18721 = inst_18696;
var state_18794__$1 = (function (){var statearr_18845 = state_18794;
(statearr_18845[(16)] = inst_18718);

(statearr_18845[(17)] = inst_18719);

(statearr_18845[(7)] = inst_18721);

(statearr_18845[(18)] = inst_18720);

return statearr_18845;
})();
var statearr_18846_18897 = state_18794__$1;
(statearr_18846_18897[(2)] = null);

(statearr_18846_18897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (18))){
var inst_18736 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18847_18898 = state_18794__$1;
(statearr_18847_18898[(2)] = inst_18736);

(statearr_18847_18898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (37))){
var state_18794__$1 = state_18794;
var statearr_18848_18899 = state_18794__$1;
(statearr_18848_18899[(2)] = null);

(statearr_18848_18899[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (8))){
var inst_18696 = (state_18794[(8)]);
var inst_18714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18696);
var state_18794__$1 = state_18794;
var statearr_18849_18900 = state_18794__$1;
(statearr_18849_18900[(2)] = inst_18714);

(statearr_18849_18900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17718__auto__,c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17719__auto__ = null;
var cljs$core$async$mix_$_state_machine__17719__auto____0 = (function (){
var statearr_18850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18850[(0)] = cljs$core$async$mix_$_state_machine__17719__auto__);

(statearr_18850[(1)] = (1));

return statearr_18850;
});
var cljs$core$async$mix_$_state_machine__17719__auto____1 = (function (state_18794){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e18851){if((e18851 instanceof Object)){
var ex__17722__auto__ = e18851;
var statearr_18852_18901 = state_18794;
(statearr_18852_18901[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_18794;
state_18794 = G__18902;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17719__auto__ = function(state_18794){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17719__auto____1.call(this,state_18794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17719__auto____0;
cljs$core$async$mix_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17719__auto____1;
return cljs$core$async$mix_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17810__auto__ = (function (){var statearr_18853 = f__17809__auto__.call(null);
(statearr_18853[(6)] = c__17808__auto___18854);

return statearr_18853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___18854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9650__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18904 = arguments.length;
switch (G__18904) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18908 = arguments.length;
switch (G__18908) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8916__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8916__auto__,mults){
return (function (p1__18906_SHARP_){
if(cljs.core.truth_(p1__18906_SHARP_.call(null,topic))){
return p1__18906_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18906_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8916__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18909 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18910){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18910 = meta18910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18911,meta18910__$1){
var self__ = this;
var _18911__$1 = this;
return (new cljs.core.async.t_cljs$core$async18909(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18910__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18911){
var self__ = this;
var _18911__$1 = this;
return self__.meta18910;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18910","meta18910",1507611101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18909";

cljs.core.async.t_cljs$core$async18909.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async18909");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18909 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18909(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18910){
return (new cljs.core.async.t_cljs$core$async18909(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18910));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18909(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17808__auto___19029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19029,mults,ensure_mult,p){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19029,mults,ensure_mult,p){
return (function (state_18983){
var state_val_18984 = (state_18983[(1)]);
if((state_val_18984 === (7))){
var inst_18979 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18985_19030 = state_18983__$1;
(statearr_18985_19030[(2)] = inst_18979);

(statearr_18985_19030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (20))){
var state_18983__$1 = state_18983;
var statearr_18986_19031 = state_18983__$1;
(statearr_18986_19031[(2)] = null);

(statearr_18986_19031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (1))){
var state_18983__$1 = state_18983;
var statearr_18987_19032 = state_18983__$1;
(statearr_18987_19032[(2)] = null);

(statearr_18987_19032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (24))){
var inst_18962 = (state_18983[(7)]);
var inst_18971 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18962);
var state_18983__$1 = state_18983;
var statearr_18988_19033 = state_18983__$1;
(statearr_18988_19033[(2)] = inst_18971);

(statearr_18988_19033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (4))){
var inst_18914 = (state_18983[(8)]);
var inst_18914__$1 = (state_18983[(2)]);
var inst_18915 = (inst_18914__$1 == null);
var state_18983__$1 = (function (){var statearr_18989 = state_18983;
(statearr_18989[(8)] = inst_18914__$1);

return statearr_18989;
})();
if(cljs.core.truth_(inst_18915)){
var statearr_18990_19034 = state_18983__$1;
(statearr_18990_19034[(1)] = (5));

} else {
var statearr_18991_19035 = state_18983__$1;
(statearr_18991_19035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (15))){
var inst_18956 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18992_19036 = state_18983__$1;
(statearr_18992_19036[(2)] = inst_18956);

(statearr_18992_19036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (21))){
var inst_18976 = (state_18983[(2)]);
var state_18983__$1 = (function (){var statearr_18993 = state_18983;
(statearr_18993[(9)] = inst_18976);

return statearr_18993;
})();
var statearr_18994_19037 = state_18983__$1;
(statearr_18994_19037[(2)] = null);

(statearr_18994_19037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (13))){
var inst_18938 = (state_18983[(10)]);
var inst_18940 = cljs.core.chunked_seq_QMARK_.call(null,inst_18938);
var state_18983__$1 = state_18983;
if(inst_18940){
var statearr_18995_19038 = state_18983__$1;
(statearr_18995_19038[(1)] = (16));

} else {
var statearr_18996_19039 = state_18983__$1;
(statearr_18996_19039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (22))){
var inst_18968 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18968)){
var statearr_18997_19040 = state_18983__$1;
(statearr_18997_19040[(1)] = (23));

} else {
var statearr_18998_19041 = state_18983__$1;
(statearr_18998_19041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (6))){
var inst_18914 = (state_18983[(8)]);
var inst_18964 = (state_18983[(11)]);
var inst_18962 = (state_18983[(7)]);
var inst_18962__$1 = topic_fn.call(null,inst_18914);
var inst_18963 = cljs.core.deref.call(null,mults);
var inst_18964__$1 = cljs.core.get.call(null,inst_18963,inst_18962__$1);
var state_18983__$1 = (function (){var statearr_18999 = state_18983;
(statearr_18999[(11)] = inst_18964__$1);

(statearr_18999[(7)] = inst_18962__$1);

return statearr_18999;
})();
if(cljs.core.truth_(inst_18964__$1)){
var statearr_19000_19042 = state_18983__$1;
(statearr_19000_19042[(1)] = (19));

} else {
var statearr_19001_19043 = state_18983__$1;
(statearr_19001_19043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (25))){
var inst_18973 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_19002_19044 = state_18983__$1;
(statearr_19002_19044[(2)] = inst_18973);

(statearr_19002_19044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (17))){
var inst_18938 = (state_18983[(10)]);
var inst_18947 = cljs.core.first.call(null,inst_18938);
var inst_18948 = cljs.core.async.muxch_STAR_.call(null,inst_18947);
var inst_18949 = cljs.core.async.close_BANG_.call(null,inst_18948);
var inst_18950 = cljs.core.next.call(null,inst_18938);
var inst_18924 = inst_18950;
var inst_18925 = null;
var inst_18926 = (0);
var inst_18927 = (0);
var state_18983__$1 = (function (){var statearr_19003 = state_18983;
(statearr_19003[(12)] = inst_18926);

(statearr_19003[(13)] = inst_18924);

(statearr_19003[(14)] = inst_18925);

(statearr_19003[(15)] = inst_18927);

(statearr_19003[(16)] = inst_18949);

return statearr_19003;
})();
var statearr_19004_19045 = state_18983__$1;
(statearr_19004_19045[(2)] = null);

(statearr_19004_19045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (3))){
var inst_18981 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18983__$1,inst_18981);
} else {
if((state_val_18984 === (12))){
var inst_18958 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_19005_19046 = state_18983__$1;
(statearr_19005_19046[(2)] = inst_18958);

(statearr_19005_19046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (2))){
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18983__$1,(4),ch);
} else {
if((state_val_18984 === (23))){
var state_18983__$1 = state_18983;
var statearr_19006_19047 = state_18983__$1;
(statearr_19006_19047[(2)] = null);

(statearr_19006_19047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (19))){
var inst_18914 = (state_18983[(8)]);
var inst_18964 = (state_18983[(11)]);
var inst_18966 = cljs.core.async.muxch_STAR_.call(null,inst_18964);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18983__$1,(22),inst_18966,inst_18914);
} else {
if((state_val_18984 === (11))){
var inst_18924 = (state_18983[(13)]);
var inst_18938 = (state_18983[(10)]);
var inst_18938__$1 = cljs.core.seq.call(null,inst_18924);
var state_18983__$1 = (function (){var statearr_19007 = state_18983;
(statearr_19007[(10)] = inst_18938__$1);

return statearr_19007;
})();
if(inst_18938__$1){
var statearr_19008_19048 = state_18983__$1;
(statearr_19008_19048[(1)] = (13));

} else {
var statearr_19009_19049 = state_18983__$1;
(statearr_19009_19049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (9))){
var inst_18960 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_19010_19050 = state_18983__$1;
(statearr_19010_19050[(2)] = inst_18960);

(statearr_19010_19050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (5))){
var inst_18921 = cljs.core.deref.call(null,mults);
var inst_18922 = cljs.core.vals.call(null,inst_18921);
var inst_18923 = cljs.core.seq.call(null,inst_18922);
var inst_18924 = inst_18923;
var inst_18925 = null;
var inst_18926 = (0);
var inst_18927 = (0);
var state_18983__$1 = (function (){var statearr_19011 = state_18983;
(statearr_19011[(12)] = inst_18926);

(statearr_19011[(13)] = inst_18924);

(statearr_19011[(14)] = inst_18925);

(statearr_19011[(15)] = inst_18927);

return statearr_19011;
})();
var statearr_19012_19051 = state_18983__$1;
(statearr_19012_19051[(2)] = null);

(statearr_19012_19051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (14))){
var state_18983__$1 = state_18983;
var statearr_19016_19052 = state_18983__$1;
(statearr_19016_19052[(2)] = null);

(statearr_19016_19052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (16))){
var inst_18938 = (state_18983[(10)]);
var inst_18942 = cljs.core.chunk_first.call(null,inst_18938);
var inst_18943 = cljs.core.chunk_rest.call(null,inst_18938);
var inst_18944 = cljs.core.count.call(null,inst_18942);
var inst_18924 = inst_18943;
var inst_18925 = inst_18942;
var inst_18926 = inst_18944;
var inst_18927 = (0);
var state_18983__$1 = (function (){var statearr_19017 = state_18983;
(statearr_19017[(12)] = inst_18926);

(statearr_19017[(13)] = inst_18924);

(statearr_19017[(14)] = inst_18925);

(statearr_19017[(15)] = inst_18927);

return statearr_19017;
})();
var statearr_19018_19053 = state_18983__$1;
(statearr_19018_19053[(2)] = null);

(statearr_19018_19053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (10))){
var inst_18926 = (state_18983[(12)]);
var inst_18924 = (state_18983[(13)]);
var inst_18925 = (state_18983[(14)]);
var inst_18927 = (state_18983[(15)]);
var inst_18932 = cljs.core._nth.call(null,inst_18925,inst_18927);
var inst_18933 = cljs.core.async.muxch_STAR_.call(null,inst_18932);
var inst_18934 = cljs.core.async.close_BANG_.call(null,inst_18933);
var inst_18935 = (inst_18927 + (1));
var tmp19013 = inst_18926;
var tmp19014 = inst_18924;
var tmp19015 = inst_18925;
var inst_18924__$1 = tmp19014;
var inst_18925__$1 = tmp19015;
var inst_18926__$1 = tmp19013;
var inst_18927__$1 = inst_18935;
var state_18983__$1 = (function (){var statearr_19019 = state_18983;
(statearr_19019[(12)] = inst_18926__$1);

(statearr_19019[(13)] = inst_18924__$1);

(statearr_19019[(14)] = inst_18925__$1);

(statearr_19019[(15)] = inst_18927__$1);

(statearr_19019[(17)] = inst_18934);

return statearr_19019;
})();
var statearr_19020_19054 = state_18983__$1;
(statearr_19020_19054[(2)] = null);

(statearr_19020_19054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (18))){
var inst_18953 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_19021_19055 = state_18983__$1;
(statearr_19021_19055[(2)] = inst_18953);

(statearr_19021_19055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (8))){
var inst_18926 = (state_18983[(12)]);
var inst_18927 = (state_18983[(15)]);
var inst_18929 = (inst_18927 < inst_18926);
var inst_18930 = inst_18929;
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18930)){
var statearr_19022_19056 = state_18983__$1;
(statearr_19022_19056[(1)] = (10));

} else {
var statearr_19023_19057 = state_18983__$1;
(statearr_19023_19057[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19029,mults,ensure_mult,p))
;
return ((function (switch__17718__auto__,c__17808__auto___19029,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19024[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_18983){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_18983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19025){if((e19025 instanceof Object)){
var ex__17722__auto__ = e19025;
var statearr_19026_19058 = state_18983;
(statearr_19026_19058[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19059 = state_18983;
state_18983 = G__19059;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19029,mults,ensure_mult,p))
})();
var state__17810__auto__ = (function (){var statearr_19027 = f__17809__auto__.call(null);
(statearr_19027[(6)] = c__17808__auto___19029);

return statearr_19027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19029,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19061 = arguments.length;
switch (G__19061) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19064 = arguments.length;
switch (G__19064) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19067 = arguments.length;
switch (G__19067) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__17808__auto___19134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19106){
var state_val_19107 = (state_19106[(1)]);
if((state_val_19107 === (7))){
var state_19106__$1 = state_19106;
var statearr_19108_19135 = state_19106__$1;
(statearr_19108_19135[(2)] = null);

(statearr_19108_19135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (1))){
var state_19106__$1 = state_19106;
var statearr_19109_19136 = state_19106__$1;
(statearr_19109_19136[(2)] = null);

(statearr_19109_19136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (4))){
var inst_19070 = (state_19106[(7)]);
var inst_19072 = (inst_19070 < cnt);
var state_19106__$1 = state_19106;
if(cljs.core.truth_(inst_19072)){
var statearr_19110_19137 = state_19106__$1;
(statearr_19110_19137[(1)] = (6));

} else {
var statearr_19111_19138 = state_19106__$1;
(statearr_19111_19138[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (15))){
var inst_19102 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19112_19139 = state_19106__$1;
(statearr_19112_19139[(2)] = inst_19102);

(statearr_19112_19139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (13))){
var inst_19095 = cljs.core.async.close_BANG_.call(null,out);
var state_19106__$1 = state_19106;
var statearr_19113_19140 = state_19106__$1;
(statearr_19113_19140[(2)] = inst_19095);

(statearr_19113_19140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (6))){
var state_19106__$1 = state_19106;
var statearr_19114_19141 = state_19106__$1;
(statearr_19114_19141[(2)] = null);

(statearr_19114_19141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (3))){
var inst_19104 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19106__$1,inst_19104);
} else {
if((state_val_19107 === (12))){
var inst_19092 = (state_19106[(8)]);
var inst_19092__$1 = (state_19106[(2)]);
var inst_19093 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19092__$1);
var state_19106__$1 = (function (){var statearr_19115 = state_19106;
(statearr_19115[(8)] = inst_19092__$1);

return statearr_19115;
})();
if(cljs.core.truth_(inst_19093)){
var statearr_19116_19142 = state_19106__$1;
(statearr_19116_19142[(1)] = (13));

} else {
var statearr_19117_19143 = state_19106__$1;
(statearr_19117_19143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (2))){
var inst_19069 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19070 = (0);
var state_19106__$1 = (function (){var statearr_19118 = state_19106;
(statearr_19118[(9)] = inst_19069);

(statearr_19118[(7)] = inst_19070);

return statearr_19118;
})();
var statearr_19119_19144 = state_19106__$1;
(statearr_19119_19144[(2)] = null);

(statearr_19119_19144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (11))){
var inst_19070 = (state_19106[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19106,(10),Object,null,(9));
var inst_19079 = chs__$1.call(null,inst_19070);
var inst_19080 = done.call(null,inst_19070);
var inst_19081 = cljs.core.async.take_BANG_.call(null,inst_19079,inst_19080);
var state_19106__$1 = state_19106;
var statearr_19120_19145 = state_19106__$1;
(statearr_19120_19145[(2)] = inst_19081);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (9))){
var inst_19070 = (state_19106[(7)]);
var inst_19083 = (state_19106[(2)]);
var inst_19084 = (inst_19070 + (1));
var inst_19070__$1 = inst_19084;
var state_19106__$1 = (function (){var statearr_19121 = state_19106;
(statearr_19121[(7)] = inst_19070__$1);

(statearr_19121[(10)] = inst_19083);

return statearr_19121;
})();
var statearr_19122_19146 = state_19106__$1;
(statearr_19122_19146[(2)] = null);

(statearr_19122_19146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (5))){
var inst_19090 = (state_19106[(2)]);
var state_19106__$1 = (function (){var statearr_19123 = state_19106;
(statearr_19123[(11)] = inst_19090);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19106__$1,(12),dchan);
} else {
if((state_val_19107 === (14))){
var inst_19092 = (state_19106[(8)]);
var inst_19097 = cljs.core.apply.call(null,f,inst_19092);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19106__$1,(16),out,inst_19097);
} else {
if((state_val_19107 === (16))){
var inst_19099 = (state_19106[(2)]);
var state_19106__$1 = (function (){var statearr_19124 = state_19106;
(statearr_19124[(12)] = inst_19099);

return statearr_19124;
})();
var statearr_19125_19147 = state_19106__$1;
(statearr_19125_19147[(2)] = null);

(statearr_19125_19147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (10))){
var inst_19074 = (state_19106[(2)]);
var inst_19075 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19106__$1 = (function (){var statearr_19126 = state_19106;
(statearr_19126[(13)] = inst_19074);

return statearr_19126;
})();
var statearr_19127_19148 = state_19106__$1;
(statearr_19127_19148[(2)] = inst_19075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (8))){
var inst_19088 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19128_19149 = state_19106__$1;
(statearr_19128_19149[(2)] = inst_19088);

(statearr_19128_19149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17718__auto__,c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19129[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19129[(1)] = (1));

return statearr_19129;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19106){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19130){if((e19130 instanceof Object)){
var ex__17722__auto__ = e19130;
var statearr_19131_19150 = state_19106;
(statearr_19131_19150[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19106;
state_19106 = G__19151;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17810__auto__ = (function (){var statearr_19132 = f__17809__auto__.call(null);
(statearr_19132[(6)] = c__17808__auto___19134);

return statearr_19132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19134,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19154 = arguments.length;
switch (G__19154) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19208,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19208,out){
return (function (state_19186){
var state_val_19187 = (state_19186[(1)]);
if((state_val_19187 === (7))){
var inst_19165 = (state_19186[(7)]);
var inst_19166 = (state_19186[(8)]);
var inst_19165__$1 = (state_19186[(2)]);
var inst_19166__$1 = cljs.core.nth.call(null,inst_19165__$1,(0),null);
var inst_19167 = cljs.core.nth.call(null,inst_19165__$1,(1),null);
var inst_19168 = (inst_19166__$1 == null);
var state_19186__$1 = (function (){var statearr_19188 = state_19186;
(statearr_19188[(9)] = inst_19167);

(statearr_19188[(7)] = inst_19165__$1);

(statearr_19188[(8)] = inst_19166__$1);

return statearr_19188;
})();
if(cljs.core.truth_(inst_19168)){
var statearr_19189_19209 = state_19186__$1;
(statearr_19189_19209[(1)] = (8));

} else {
var statearr_19190_19210 = state_19186__$1;
(statearr_19190_19210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (1))){
var inst_19155 = cljs.core.vec.call(null,chs);
var inst_19156 = inst_19155;
var state_19186__$1 = (function (){var statearr_19191 = state_19186;
(statearr_19191[(10)] = inst_19156);

return statearr_19191;
})();
var statearr_19192_19211 = state_19186__$1;
(statearr_19192_19211[(2)] = null);

(statearr_19192_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (4))){
var inst_19156 = (state_19186[(10)]);
var state_19186__$1 = state_19186;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19186__$1,(7),inst_19156);
} else {
if((state_val_19187 === (6))){
var inst_19182 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
var statearr_19193_19212 = state_19186__$1;
(statearr_19193_19212[(2)] = inst_19182);

(statearr_19193_19212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (3))){
var inst_19184 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19186__$1,inst_19184);
} else {
if((state_val_19187 === (2))){
var inst_19156 = (state_19186[(10)]);
var inst_19158 = cljs.core.count.call(null,inst_19156);
var inst_19159 = (inst_19158 > (0));
var state_19186__$1 = state_19186;
if(cljs.core.truth_(inst_19159)){
var statearr_19195_19213 = state_19186__$1;
(statearr_19195_19213[(1)] = (4));

} else {
var statearr_19196_19214 = state_19186__$1;
(statearr_19196_19214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (11))){
var inst_19156 = (state_19186[(10)]);
var inst_19175 = (state_19186[(2)]);
var tmp19194 = inst_19156;
var inst_19156__$1 = tmp19194;
var state_19186__$1 = (function (){var statearr_19197 = state_19186;
(statearr_19197[(11)] = inst_19175);

(statearr_19197[(10)] = inst_19156__$1);

return statearr_19197;
})();
var statearr_19198_19215 = state_19186__$1;
(statearr_19198_19215[(2)] = null);

(statearr_19198_19215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (9))){
var inst_19166 = (state_19186[(8)]);
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19186__$1,(11),out,inst_19166);
} else {
if((state_val_19187 === (5))){
var inst_19180 = cljs.core.async.close_BANG_.call(null,out);
var state_19186__$1 = state_19186;
var statearr_19199_19216 = state_19186__$1;
(statearr_19199_19216[(2)] = inst_19180);

(statearr_19199_19216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (10))){
var inst_19178 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
var statearr_19200_19217 = state_19186__$1;
(statearr_19200_19217[(2)] = inst_19178);

(statearr_19200_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (8))){
var inst_19167 = (state_19186[(9)]);
var inst_19165 = (state_19186[(7)]);
var inst_19166 = (state_19186[(8)]);
var inst_19156 = (state_19186[(10)]);
var inst_19170 = (function (){var cs = inst_19156;
var vec__19161 = inst_19165;
var v = inst_19166;
var c = inst_19167;
return ((function (cs,vec__19161,v,c,inst_19167,inst_19165,inst_19166,inst_19156,state_val_19187,c__17808__auto___19208,out){
return (function (p1__19152_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19152_SHARP_);
});
;})(cs,vec__19161,v,c,inst_19167,inst_19165,inst_19166,inst_19156,state_val_19187,c__17808__auto___19208,out))
})();
var inst_19171 = cljs.core.filterv.call(null,inst_19170,inst_19156);
var inst_19156__$1 = inst_19171;
var state_19186__$1 = (function (){var statearr_19201 = state_19186;
(statearr_19201[(10)] = inst_19156__$1);

return statearr_19201;
})();
var statearr_19202_19218 = state_19186__$1;
(statearr_19202_19218[(2)] = null);

(statearr_19202_19218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19208,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19208,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19203[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19203[(1)] = (1));

return statearr_19203;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19186){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19204){if((e19204 instanceof Object)){
var ex__17722__auto__ = e19204;
var statearr_19205_19219 = state_19186;
(statearr_19205_19219[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19220 = state_19186;
state_19186 = G__19220;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19208,out))
})();
var state__17810__auto__ = (function (){var statearr_19206 = f__17809__auto__.call(null);
(statearr_19206[(6)] = c__17808__auto___19208);

return statearr_19206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19208,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19222 = arguments.length;
switch (G__19222) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19267,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19267,out){
return (function (state_19246){
var state_val_19247 = (state_19246[(1)]);
if((state_val_19247 === (7))){
var inst_19228 = (state_19246[(7)]);
var inst_19228__$1 = (state_19246[(2)]);
var inst_19229 = (inst_19228__$1 == null);
var inst_19230 = cljs.core.not.call(null,inst_19229);
var state_19246__$1 = (function (){var statearr_19248 = state_19246;
(statearr_19248[(7)] = inst_19228__$1);

return statearr_19248;
})();
if(inst_19230){
var statearr_19249_19268 = state_19246__$1;
(statearr_19249_19268[(1)] = (8));

} else {
var statearr_19250_19269 = state_19246__$1;
(statearr_19250_19269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (1))){
var inst_19223 = (0);
var state_19246__$1 = (function (){var statearr_19251 = state_19246;
(statearr_19251[(8)] = inst_19223);

return statearr_19251;
})();
var statearr_19252_19270 = state_19246__$1;
(statearr_19252_19270[(2)] = null);

(statearr_19252_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (4))){
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19246__$1,(7),ch);
} else {
if((state_val_19247 === (6))){
var inst_19241 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19253_19271 = state_19246__$1;
(statearr_19253_19271[(2)] = inst_19241);

(statearr_19253_19271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (3))){
var inst_19243 = (state_19246[(2)]);
var inst_19244 = cljs.core.async.close_BANG_.call(null,out);
var state_19246__$1 = (function (){var statearr_19254 = state_19246;
(statearr_19254[(9)] = inst_19243);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19246__$1,inst_19244);
} else {
if((state_val_19247 === (2))){
var inst_19223 = (state_19246[(8)]);
var inst_19225 = (inst_19223 < n);
var state_19246__$1 = state_19246;
if(cljs.core.truth_(inst_19225)){
var statearr_19255_19272 = state_19246__$1;
(statearr_19255_19272[(1)] = (4));

} else {
var statearr_19256_19273 = state_19246__$1;
(statearr_19256_19273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (11))){
var inst_19223 = (state_19246[(8)]);
var inst_19233 = (state_19246[(2)]);
var inst_19234 = (inst_19223 + (1));
var inst_19223__$1 = inst_19234;
var state_19246__$1 = (function (){var statearr_19257 = state_19246;
(statearr_19257[(8)] = inst_19223__$1);

(statearr_19257[(10)] = inst_19233);

return statearr_19257;
})();
var statearr_19258_19274 = state_19246__$1;
(statearr_19258_19274[(2)] = null);

(statearr_19258_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (9))){
var state_19246__$1 = state_19246;
var statearr_19259_19275 = state_19246__$1;
(statearr_19259_19275[(2)] = null);

(statearr_19259_19275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (5))){
var state_19246__$1 = state_19246;
var statearr_19260_19276 = state_19246__$1;
(statearr_19260_19276[(2)] = null);

(statearr_19260_19276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (10))){
var inst_19238 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19261_19277 = state_19246__$1;
(statearr_19261_19277[(2)] = inst_19238);

(statearr_19261_19277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (8))){
var inst_19228 = (state_19246[(7)]);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19246__$1,(11),out,inst_19228);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19267,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19267,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19262[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19262[(1)] = (1));

return statearr_19262;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19246){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19263){if((e19263 instanceof Object)){
var ex__17722__auto__ = e19263;
var statearr_19264_19278 = state_19246;
(statearr_19264_19278[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19279 = state_19246;
state_19246 = G__19279;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19267,out))
})();
var state__17810__auto__ = (function (){var statearr_19265 = f__17809__auto__.call(null);
(statearr_19265[(6)] = c__17808__auto___19267);

return statearr_19265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19267,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19281 = (function (f,ch,meta19282){
this.f = f;
this.ch = ch;
this.meta19282 = meta19282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19283,meta19282__$1){
var self__ = this;
var _19283__$1 = this;
return (new cljs.core.async.t_cljs$core$async19281(self__.f,self__.ch,meta19282__$1));
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19283){
var self__ = this;
var _19283__$1 = this;
return self__.meta19282;
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19284 = (function (f,ch,meta19282,_,fn1,meta19285){
this.f = f;
this.ch = ch;
this.meta19282 = meta19282;
this._ = _;
this.fn1 = fn1;
this.meta19285 = meta19285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19286,meta19285__$1){
var self__ = this;
var _19286__$1 = this;
return (new cljs.core.async.t_cljs$core$async19284(self__.f,self__.ch,self__.meta19282,self__._,self__.fn1,meta19285__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19286){
var self__ = this;
var _19286__$1 = this;
return self__.meta19285;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19280_SHARP_){
return f1.call(null,(((p1__19280_SHARP_ == null))?null:self__.f.call(null,p1__19280_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19282","meta19282",-640987294,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19281","cljs.core.async/t_cljs$core$async19281",370977310,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19285","meta19285",1796257949,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19284";

cljs.core.async.t_cljs$core$async19284.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async19284");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19284 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19284(f__$1,ch__$1,meta19282__$1,___$2,fn1__$1,meta19285){
return (new cljs.core.async.t_cljs$core$async19284(f__$1,ch__$1,meta19282__$1,___$2,fn1__$1,meta19285));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19284(self__.f,self__.ch,self__.meta19282,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8904__auto__ = ret;
if(cljs.core.truth_(and__8904__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8904__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19282","meta19282",-640987294,null)], null);
});

cljs.core.async.t_cljs$core$async19281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19281";

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async19281");
});

cljs.core.async.__GT_t_cljs$core$async19281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19281(f__$1,ch__$1,meta19282){
return (new cljs.core.async.t_cljs$core$async19281(f__$1,ch__$1,meta19282));
});

}

return (new cljs.core.async.t_cljs$core$async19281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19287 = (function (f,ch,meta19288){
this.f = f;
this.ch = ch;
this.meta19288 = meta19288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19289,meta19288__$1){
var self__ = this;
var _19289__$1 = this;
return (new cljs.core.async.t_cljs$core$async19287(self__.f,self__.ch,meta19288__$1));
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19289){
var self__ = this;
var _19289__$1 = this;
return self__.meta19288;
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19288","meta19288",-480208350,null)], null);
});

cljs.core.async.t_cljs$core$async19287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19287";

cljs.core.async.t_cljs$core$async19287.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async19287");
});

cljs.core.async.__GT_t_cljs$core$async19287 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19287(f__$1,ch__$1,meta19288){
return (new cljs.core.async.t_cljs$core$async19287(f__$1,ch__$1,meta19288));
});

}

return (new cljs.core.async.t_cljs$core$async19287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19290 = (function (p,ch,meta19291){
this.p = p;
this.ch = ch;
this.meta19291 = meta19291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19292,meta19291__$1){
var self__ = this;
var _19292__$1 = this;
return (new cljs.core.async.t_cljs$core$async19290(self__.p,self__.ch,meta19291__$1));
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19292){
var self__ = this;
var _19292__$1 = this;
return self__.meta19291;
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19291","meta19291",-1045955319,null)], null);
});

cljs.core.async.t_cljs$core$async19290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19290";

cljs.core.async.t_cljs$core$async19290.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async19290");
});

cljs.core.async.__GT_t_cljs$core$async19290 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19290(p__$1,ch__$1,meta19291){
return (new cljs.core.async.t_cljs$core$async19290(p__$1,ch__$1,meta19291));
});

}

return (new cljs.core.async.t_cljs$core$async19290(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19294 = arguments.length;
switch (G__19294) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19334,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19334,out){
return (function (state_19315){
var state_val_19316 = (state_19315[(1)]);
if((state_val_19316 === (7))){
var inst_19311 = (state_19315[(2)]);
var state_19315__$1 = state_19315;
var statearr_19317_19335 = state_19315__$1;
(statearr_19317_19335[(2)] = inst_19311);

(statearr_19317_19335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (1))){
var state_19315__$1 = state_19315;
var statearr_19318_19336 = state_19315__$1;
(statearr_19318_19336[(2)] = null);

(statearr_19318_19336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (4))){
var inst_19297 = (state_19315[(7)]);
var inst_19297__$1 = (state_19315[(2)]);
var inst_19298 = (inst_19297__$1 == null);
var state_19315__$1 = (function (){var statearr_19319 = state_19315;
(statearr_19319[(7)] = inst_19297__$1);

return statearr_19319;
})();
if(cljs.core.truth_(inst_19298)){
var statearr_19320_19337 = state_19315__$1;
(statearr_19320_19337[(1)] = (5));

} else {
var statearr_19321_19338 = state_19315__$1;
(statearr_19321_19338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (6))){
var inst_19297 = (state_19315[(7)]);
var inst_19302 = p.call(null,inst_19297);
var state_19315__$1 = state_19315;
if(cljs.core.truth_(inst_19302)){
var statearr_19322_19339 = state_19315__$1;
(statearr_19322_19339[(1)] = (8));

} else {
var statearr_19323_19340 = state_19315__$1;
(statearr_19323_19340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (3))){
var inst_19313 = (state_19315[(2)]);
var state_19315__$1 = state_19315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19315__$1,inst_19313);
} else {
if((state_val_19316 === (2))){
var state_19315__$1 = state_19315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19315__$1,(4),ch);
} else {
if((state_val_19316 === (11))){
var inst_19305 = (state_19315[(2)]);
var state_19315__$1 = state_19315;
var statearr_19324_19341 = state_19315__$1;
(statearr_19324_19341[(2)] = inst_19305);

(statearr_19324_19341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (9))){
var state_19315__$1 = state_19315;
var statearr_19325_19342 = state_19315__$1;
(statearr_19325_19342[(2)] = null);

(statearr_19325_19342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (5))){
var inst_19300 = cljs.core.async.close_BANG_.call(null,out);
var state_19315__$1 = state_19315;
var statearr_19326_19343 = state_19315__$1;
(statearr_19326_19343[(2)] = inst_19300);

(statearr_19326_19343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (10))){
var inst_19308 = (state_19315[(2)]);
var state_19315__$1 = (function (){var statearr_19327 = state_19315;
(statearr_19327[(8)] = inst_19308);

return statearr_19327;
})();
var statearr_19328_19344 = state_19315__$1;
(statearr_19328_19344[(2)] = null);

(statearr_19328_19344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19316 === (8))){
var inst_19297 = (state_19315[(7)]);
var state_19315__$1 = state_19315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19315__$1,(11),out,inst_19297);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19334,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19334,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19329 = [null,null,null,null,null,null,null,null,null];
(statearr_19329[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19329[(1)] = (1));

return statearr_19329;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19315){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19330){if((e19330 instanceof Object)){
var ex__17722__auto__ = e19330;
var statearr_19331_19345 = state_19315;
(statearr_19331_19345[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19346 = state_19315;
state_19315 = G__19346;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19334,out))
})();
var state__17810__auto__ = (function (){var statearr_19332 = f__17809__auto__.call(null);
(statearr_19332[(6)] = c__17808__auto___19334);

return statearr_19332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19334,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19348 = arguments.length;
switch (G__19348) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_19411){
var state_val_19412 = (state_19411[(1)]);
if((state_val_19412 === (7))){
var inst_19407 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19413_19451 = state_19411__$1;
(statearr_19413_19451[(2)] = inst_19407);

(statearr_19413_19451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (20))){
var inst_19377 = (state_19411[(7)]);
var inst_19388 = (state_19411[(2)]);
var inst_19389 = cljs.core.next.call(null,inst_19377);
var inst_19363 = inst_19389;
var inst_19364 = null;
var inst_19365 = (0);
var inst_19366 = (0);
var state_19411__$1 = (function (){var statearr_19414 = state_19411;
(statearr_19414[(8)] = inst_19364);

(statearr_19414[(9)] = inst_19366);

(statearr_19414[(10)] = inst_19365);

(statearr_19414[(11)] = inst_19363);

(statearr_19414[(12)] = inst_19388);

return statearr_19414;
})();
var statearr_19415_19452 = state_19411__$1;
(statearr_19415_19452[(2)] = null);

(statearr_19415_19452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (1))){
var state_19411__$1 = state_19411;
var statearr_19416_19453 = state_19411__$1;
(statearr_19416_19453[(2)] = null);

(statearr_19416_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (4))){
var inst_19352 = (state_19411[(13)]);
var inst_19352__$1 = (state_19411[(2)]);
var inst_19353 = (inst_19352__$1 == null);
var state_19411__$1 = (function (){var statearr_19417 = state_19411;
(statearr_19417[(13)] = inst_19352__$1);

return statearr_19417;
})();
if(cljs.core.truth_(inst_19353)){
var statearr_19418_19454 = state_19411__$1;
(statearr_19418_19454[(1)] = (5));

} else {
var statearr_19419_19455 = state_19411__$1;
(statearr_19419_19455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (15))){
var state_19411__$1 = state_19411;
var statearr_19423_19456 = state_19411__$1;
(statearr_19423_19456[(2)] = null);

(statearr_19423_19456[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (21))){
var state_19411__$1 = state_19411;
var statearr_19424_19457 = state_19411__$1;
(statearr_19424_19457[(2)] = null);

(statearr_19424_19457[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (13))){
var inst_19364 = (state_19411[(8)]);
var inst_19366 = (state_19411[(9)]);
var inst_19365 = (state_19411[(10)]);
var inst_19363 = (state_19411[(11)]);
var inst_19373 = (state_19411[(2)]);
var inst_19374 = (inst_19366 + (1));
var tmp19420 = inst_19364;
var tmp19421 = inst_19365;
var tmp19422 = inst_19363;
var inst_19363__$1 = tmp19422;
var inst_19364__$1 = tmp19420;
var inst_19365__$1 = tmp19421;
var inst_19366__$1 = inst_19374;
var state_19411__$1 = (function (){var statearr_19425 = state_19411;
(statearr_19425[(8)] = inst_19364__$1);

(statearr_19425[(14)] = inst_19373);

(statearr_19425[(9)] = inst_19366__$1);

(statearr_19425[(10)] = inst_19365__$1);

(statearr_19425[(11)] = inst_19363__$1);

return statearr_19425;
})();
var statearr_19426_19458 = state_19411__$1;
(statearr_19426_19458[(2)] = null);

(statearr_19426_19458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (22))){
var state_19411__$1 = state_19411;
var statearr_19427_19459 = state_19411__$1;
(statearr_19427_19459[(2)] = null);

(statearr_19427_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (6))){
var inst_19352 = (state_19411[(13)]);
var inst_19361 = f.call(null,inst_19352);
var inst_19362 = cljs.core.seq.call(null,inst_19361);
var inst_19363 = inst_19362;
var inst_19364 = null;
var inst_19365 = (0);
var inst_19366 = (0);
var state_19411__$1 = (function (){var statearr_19428 = state_19411;
(statearr_19428[(8)] = inst_19364);

(statearr_19428[(9)] = inst_19366);

(statearr_19428[(10)] = inst_19365);

(statearr_19428[(11)] = inst_19363);

return statearr_19428;
})();
var statearr_19429_19460 = state_19411__$1;
(statearr_19429_19460[(2)] = null);

(statearr_19429_19460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (17))){
var inst_19377 = (state_19411[(7)]);
var inst_19381 = cljs.core.chunk_first.call(null,inst_19377);
var inst_19382 = cljs.core.chunk_rest.call(null,inst_19377);
var inst_19383 = cljs.core.count.call(null,inst_19381);
var inst_19363 = inst_19382;
var inst_19364 = inst_19381;
var inst_19365 = inst_19383;
var inst_19366 = (0);
var state_19411__$1 = (function (){var statearr_19430 = state_19411;
(statearr_19430[(8)] = inst_19364);

(statearr_19430[(9)] = inst_19366);

(statearr_19430[(10)] = inst_19365);

(statearr_19430[(11)] = inst_19363);

return statearr_19430;
})();
var statearr_19431_19461 = state_19411__$1;
(statearr_19431_19461[(2)] = null);

(statearr_19431_19461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (3))){
var inst_19409 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19411__$1,inst_19409);
} else {
if((state_val_19412 === (12))){
var inst_19397 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19432_19462 = state_19411__$1;
(statearr_19432_19462[(2)] = inst_19397);

(statearr_19432_19462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (2))){
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19411__$1,(4),in$);
} else {
if((state_val_19412 === (23))){
var inst_19405 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19433_19463 = state_19411__$1;
(statearr_19433_19463[(2)] = inst_19405);

(statearr_19433_19463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (19))){
var inst_19392 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19434_19464 = state_19411__$1;
(statearr_19434_19464[(2)] = inst_19392);

(statearr_19434_19464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (11))){
var inst_19377 = (state_19411[(7)]);
var inst_19363 = (state_19411[(11)]);
var inst_19377__$1 = cljs.core.seq.call(null,inst_19363);
var state_19411__$1 = (function (){var statearr_19435 = state_19411;
(statearr_19435[(7)] = inst_19377__$1);

return statearr_19435;
})();
if(inst_19377__$1){
var statearr_19436_19465 = state_19411__$1;
(statearr_19436_19465[(1)] = (14));

} else {
var statearr_19437_19466 = state_19411__$1;
(statearr_19437_19466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (9))){
var inst_19399 = (state_19411[(2)]);
var inst_19400 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19411__$1 = (function (){var statearr_19438 = state_19411;
(statearr_19438[(15)] = inst_19399);

return statearr_19438;
})();
if(cljs.core.truth_(inst_19400)){
var statearr_19439_19467 = state_19411__$1;
(statearr_19439_19467[(1)] = (21));

} else {
var statearr_19440_19468 = state_19411__$1;
(statearr_19440_19468[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (5))){
var inst_19355 = cljs.core.async.close_BANG_.call(null,out);
var state_19411__$1 = state_19411;
var statearr_19441_19469 = state_19411__$1;
(statearr_19441_19469[(2)] = inst_19355);

(statearr_19441_19469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (14))){
var inst_19377 = (state_19411[(7)]);
var inst_19379 = cljs.core.chunked_seq_QMARK_.call(null,inst_19377);
var state_19411__$1 = state_19411;
if(inst_19379){
var statearr_19442_19470 = state_19411__$1;
(statearr_19442_19470[(1)] = (17));

} else {
var statearr_19443_19471 = state_19411__$1;
(statearr_19443_19471[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (16))){
var inst_19395 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19444_19472 = state_19411__$1;
(statearr_19444_19472[(2)] = inst_19395);

(statearr_19444_19472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (10))){
var inst_19364 = (state_19411[(8)]);
var inst_19366 = (state_19411[(9)]);
var inst_19371 = cljs.core._nth.call(null,inst_19364,inst_19366);
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19411__$1,(13),out,inst_19371);
} else {
if((state_val_19412 === (18))){
var inst_19377 = (state_19411[(7)]);
var inst_19386 = cljs.core.first.call(null,inst_19377);
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19411__$1,(20),out,inst_19386);
} else {
if((state_val_19412 === (8))){
var inst_19366 = (state_19411[(9)]);
var inst_19365 = (state_19411[(10)]);
var inst_19368 = (inst_19366 < inst_19365);
var inst_19369 = inst_19368;
var state_19411__$1 = state_19411;
if(cljs.core.truth_(inst_19369)){
var statearr_19445_19473 = state_19411__$1;
(statearr_19445_19473[(1)] = (10));

} else {
var statearr_19446_19474 = state_19411__$1;
(statearr_19446_19474[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____0 = (function (){
var statearr_19447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19447[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__);

(statearr_19447[(1)] = (1));

return statearr_19447;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____1 = (function (state_19411){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19448){if((e19448 instanceof Object)){
var ex__17722__auto__ = e19448;
var statearr_19449_19475 = state_19411;
(statearr_19449_19475[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19476 = state_19411;
state_19411 = G__19476;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__ = function(state_19411){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____1.call(this,state_19411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17719__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_19450 = f__17809__auto__.call(null);
(statearr_19450[(6)] = c__17808__auto__);

return statearr_19450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19478 = arguments.length;
switch (G__19478) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19481 = arguments.length;
switch (G__19481) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19484 = arguments.length;
switch (G__19484) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19531,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19531,out){
return (function (state_19508){
var state_val_19509 = (state_19508[(1)]);
if((state_val_19509 === (7))){
var inst_19503 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
var statearr_19510_19532 = state_19508__$1;
(statearr_19510_19532[(2)] = inst_19503);

(statearr_19510_19532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (1))){
var inst_19485 = null;
var state_19508__$1 = (function (){var statearr_19511 = state_19508;
(statearr_19511[(7)] = inst_19485);

return statearr_19511;
})();
var statearr_19512_19533 = state_19508__$1;
(statearr_19512_19533[(2)] = null);

(statearr_19512_19533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (4))){
var inst_19488 = (state_19508[(8)]);
var inst_19488__$1 = (state_19508[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var inst_19490 = cljs.core.not.call(null,inst_19489);
var state_19508__$1 = (function (){var statearr_19513 = state_19508;
(statearr_19513[(8)] = inst_19488__$1);

return statearr_19513;
})();
if(inst_19490){
var statearr_19514_19534 = state_19508__$1;
(statearr_19514_19534[(1)] = (5));

} else {
var statearr_19515_19535 = state_19508__$1;
(statearr_19515_19535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (6))){
var state_19508__$1 = state_19508;
var statearr_19516_19536 = state_19508__$1;
(statearr_19516_19536[(2)] = null);

(statearr_19516_19536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (3))){
var inst_19505 = (state_19508[(2)]);
var inst_19506 = cljs.core.async.close_BANG_.call(null,out);
var state_19508__$1 = (function (){var statearr_19517 = state_19508;
(statearr_19517[(9)] = inst_19505);

return statearr_19517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19508__$1,inst_19506);
} else {
if((state_val_19509 === (2))){
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19508__$1,(4),ch);
} else {
if((state_val_19509 === (11))){
var inst_19488 = (state_19508[(8)]);
var inst_19497 = (state_19508[(2)]);
var inst_19485 = inst_19488;
var state_19508__$1 = (function (){var statearr_19518 = state_19508;
(statearr_19518[(7)] = inst_19485);

(statearr_19518[(10)] = inst_19497);

return statearr_19518;
})();
var statearr_19519_19537 = state_19508__$1;
(statearr_19519_19537[(2)] = null);

(statearr_19519_19537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (9))){
var inst_19488 = (state_19508[(8)]);
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19508__$1,(11),out,inst_19488);
} else {
if((state_val_19509 === (5))){
var inst_19485 = (state_19508[(7)]);
var inst_19488 = (state_19508[(8)]);
var inst_19492 = cljs.core._EQ_.call(null,inst_19488,inst_19485);
var state_19508__$1 = state_19508;
if(inst_19492){
var statearr_19521_19538 = state_19508__$1;
(statearr_19521_19538[(1)] = (8));

} else {
var statearr_19522_19539 = state_19508__$1;
(statearr_19522_19539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (10))){
var inst_19500 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
var statearr_19523_19540 = state_19508__$1;
(statearr_19523_19540[(2)] = inst_19500);

(statearr_19523_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (8))){
var inst_19485 = (state_19508[(7)]);
var tmp19520 = inst_19485;
var inst_19485__$1 = tmp19520;
var state_19508__$1 = (function (){var statearr_19524 = state_19508;
(statearr_19524[(7)] = inst_19485__$1);

return statearr_19524;
})();
var statearr_19525_19541 = state_19508__$1;
(statearr_19525_19541[(2)] = null);

(statearr_19525_19541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19531,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19531,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19526[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19526[(1)] = (1));

return statearr_19526;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19508){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19527){if((e19527 instanceof Object)){
var ex__17722__auto__ = e19527;
var statearr_19528_19542 = state_19508;
(statearr_19528_19542[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19543 = state_19508;
state_19508 = G__19543;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19531,out))
})();
var state__17810__auto__ = (function (){var statearr_19529 = f__17809__auto__.call(null);
(statearr_19529[(6)] = c__17808__auto___19531);

return statearr_19529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19531,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19545 = arguments.length;
switch (G__19545) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19611,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19611,out){
return (function (state_19583){
var state_val_19584 = (state_19583[(1)]);
if((state_val_19584 === (7))){
var inst_19579 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19585_19612 = state_19583__$1;
(statearr_19585_19612[(2)] = inst_19579);

(statearr_19585_19612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (1))){
var inst_19546 = (new Array(n));
var inst_19547 = inst_19546;
var inst_19548 = (0);
var state_19583__$1 = (function (){var statearr_19586 = state_19583;
(statearr_19586[(7)] = inst_19548);

(statearr_19586[(8)] = inst_19547);

return statearr_19586;
})();
var statearr_19587_19613 = state_19583__$1;
(statearr_19587_19613[(2)] = null);

(statearr_19587_19613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (4))){
var inst_19551 = (state_19583[(9)]);
var inst_19551__$1 = (state_19583[(2)]);
var inst_19552 = (inst_19551__$1 == null);
var inst_19553 = cljs.core.not.call(null,inst_19552);
var state_19583__$1 = (function (){var statearr_19588 = state_19583;
(statearr_19588[(9)] = inst_19551__$1);

return statearr_19588;
})();
if(inst_19553){
var statearr_19589_19614 = state_19583__$1;
(statearr_19589_19614[(1)] = (5));

} else {
var statearr_19590_19615 = state_19583__$1;
(statearr_19590_19615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (15))){
var inst_19573 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19591_19616 = state_19583__$1;
(statearr_19591_19616[(2)] = inst_19573);

(statearr_19591_19616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (13))){
var state_19583__$1 = state_19583;
var statearr_19592_19617 = state_19583__$1;
(statearr_19592_19617[(2)] = null);

(statearr_19592_19617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (6))){
var inst_19548 = (state_19583[(7)]);
var inst_19569 = (inst_19548 > (0));
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19569)){
var statearr_19593_19618 = state_19583__$1;
(statearr_19593_19618[(1)] = (12));

} else {
var statearr_19594_19619 = state_19583__$1;
(statearr_19594_19619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (3))){
var inst_19581 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19583__$1,inst_19581);
} else {
if((state_val_19584 === (12))){
var inst_19547 = (state_19583[(8)]);
var inst_19571 = cljs.core.vec.call(null,inst_19547);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19583__$1,(15),out,inst_19571);
} else {
if((state_val_19584 === (2))){
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19583__$1,(4),ch);
} else {
if((state_val_19584 === (11))){
var inst_19563 = (state_19583[(2)]);
var inst_19564 = (new Array(n));
var inst_19547 = inst_19564;
var inst_19548 = (0);
var state_19583__$1 = (function (){var statearr_19595 = state_19583;
(statearr_19595[(7)] = inst_19548);

(statearr_19595[(10)] = inst_19563);

(statearr_19595[(8)] = inst_19547);

return statearr_19595;
})();
var statearr_19596_19620 = state_19583__$1;
(statearr_19596_19620[(2)] = null);

(statearr_19596_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (9))){
var inst_19547 = (state_19583[(8)]);
var inst_19561 = cljs.core.vec.call(null,inst_19547);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19583__$1,(11),out,inst_19561);
} else {
if((state_val_19584 === (5))){
var inst_19548 = (state_19583[(7)]);
var inst_19556 = (state_19583[(11)]);
var inst_19551 = (state_19583[(9)]);
var inst_19547 = (state_19583[(8)]);
var inst_19555 = (inst_19547[inst_19548] = inst_19551);
var inst_19556__$1 = (inst_19548 + (1));
var inst_19557 = (inst_19556__$1 < n);
var state_19583__$1 = (function (){var statearr_19597 = state_19583;
(statearr_19597[(11)] = inst_19556__$1);

(statearr_19597[(12)] = inst_19555);

return statearr_19597;
})();
if(cljs.core.truth_(inst_19557)){
var statearr_19598_19621 = state_19583__$1;
(statearr_19598_19621[(1)] = (8));

} else {
var statearr_19599_19622 = state_19583__$1;
(statearr_19599_19622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (14))){
var inst_19576 = (state_19583[(2)]);
var inst_19577 = cljs.core.async.close_BANG_.call(null,out);
var state_19583__$1 = (function (){var statearr_19601 = state_19583;
(statearr_19601[(13)] = inst_19576);

return statearr_19601;
})();
var statearr_19602_19623 = state_19583__$1;
(statearr_19602_19623[(2)] = inst_19577);

(statearr_19602_19623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (10))){
var inst_19567 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19603_19624 = state_19583__$1;
(statearr_19603_19624[(2)] = inst_19567);

(statearr_19603_19624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (8))){
var inst_19556 = (state_19583[(11)]);
var inst_19547 = (state_19583[(8)]);
var tmp19600 = inst_19547;
var inst_19547__$1 = tmp19600;
var inst_19548 = inst_19556;
var state_19583__$1 = (function (){var statearr_19604 = state_19583;
(statearr_19604[(7)] = inst_19548);

(statearr_19604[(8)] = inst_19547__$1);

return statearr_19604;
})();
var statearr_19605_19625 = state_19583__$1;
(statearr_19605_19625[(2)] = null);

(statearr_19605_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19611,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19611,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19583){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19607){if((e19607 instanceof Object)){
var ex__17722__auto__ = e19607;
var statearr_19608_19626 = state_19583;
(statearr_19608_19626[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19627 = state_19583;
state_19583 = G__19627;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19611,out))
})();
var state__17810__auto__ = (function (){var statearr_19609 = f__17809__auto__.call(null);
(statearr_19609[(6)] = c__17808__auto___19611);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19611,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19629 = arguments.length;
switch (G__19629) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17808__auto___19699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___19699,out){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___19699,out){
return (function (state_19671){
var state_val_19672 = (state_19671[(1)]);
if((state_val_19672 === (7))){
var inst_19667 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19673_19700 = state_19671__$1;
(statearr_19673_19700[(2)] = inst_19667);

(statearr_19673_19700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (1))){
var inst_19630 = [];
var inst_19631 = inst_19630;
var inst_19632 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19671__$1 = (function (){var statearr_19674 = state_19671;
(statearr_19674[(7)] = inst_19631);

(statearr_19674[(8)] = inst_19632);

return statearr_19674;
})();
var statearr_19675_19701 = state_19671__$1;
(statearr_19675_19701[(2)] = null);

(statearr_19675_19701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (4))){
var inst_19635 = (state_19671[(9)]);
var inst_19635__$1 = (state_19671[(2)]);
var inst_19636 = (inst_19635__$1 == null);
var inst_19637 = cljs.core.not.call(null,inst_19636);
var state_19671__$1 = (function (){var statearr_19676 = state_19671;
(statearr_19676[(9)] = inst_19635__$1);

return statearr_19676;
})();
if(inst_19637){
var statearr_19677_19702 = state_19671__$1;
(statearr_19677_19702[(1)] = (5));

} else {
var statearr_19678_19703 = state_19671__$1;
(statearr_19678_19703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (15))){
var inst_19661 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19679_19704 = state_19671__$1;
(statearr_19679_19704[(2)] = inst_19661);

(statearr_19679_19704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (13))){
var state_19671__$1 = state_19671;
var statearr_19680_19705 = state_19671__$1;
(statearr_19680_19705[(2)] = null);

(statearr_19680_19705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (6))){
var inst_19631 = (state_19671[(7)]);
var inst_19656 = inst_19631.length;
var inst_19657 = (inst_19656 > (0));
var state_19671__$1 = state_19671;
if(cljs.core.truth_(inst_19657)){
var statearr_19681_19706 = state_19671__$1;
(statearr_19681_19706[(1)] = (12));

} else {
var statearr_19682_19707 = state_19671__$1;
(statearr_19682_19707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (3))){
var inst_19669 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19671__$1,inst_19669);
} else {
if((state_val_19672 === (12))){
var inst_19631 = (state_19671[(7)]);
var inst_19659 = cljs.core.vec.call(null,inst_19631);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19671__$1,(15),out,inst_19659);
} else {
if((state_val_19672 === (2))){
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19671__$1,(4),ch);
} else {
if((state_val_19672 === (11))){
var inst_19635 = (state_19671[(9)]);
var inst_19639 = (state_19671[(10)]);
var inst_19649 = (state_19671[(2)]);
var inst_19650 = [];
var inst_19651 = inst_19650.push(inst_19635);
var inst_19631 = inst_19650;
var inst_19632 = inst_19639;
var state_19671__$1 = (function (){var statearr_19683 = state_19671;
(statearr_19683[(7)] = inst_19631);

(statearr_19683[(11)] = inst_19649);

(statearr_19683[(8)] = inst_19632);

(statearr_19683[(12)] = inst_19651);

return statearr_19683;
})();
var statearr_19684_19708 = state_19671__$1;
(statearr_19684_19708[(2)] = null);

(statearr_19684_19708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (9))){
var inst_19631 = (state_19671[(7)]);
var inst_19647 = cljs.core.vec.call(null,inst_19631);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19671__$1,(11),out,inst_19647);
} else {
if((state_val_19672 === (5))){
var inst_19632 = (state_19671[(8)]);
var inst_19635 = (state_19671[(9)]);
var inst_19639 = (state_19671[(10)]);
var inst_19639__$1 = f.call(null,inst_19635);
var inst_19640 = cljs.core._EQ_.call(null,inst_19639__$1,inst_19632);
var inst_19641 = cljs.core.keyword_identical_QMARK_.call(null,inst_19632,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19642 = (inst_19640) || (inst_19641);
var state_19671__$1 = (function (){var statearr_19685 = state_19671;
(statearr_19685[(10)] = inst_19639__$1);

return statearr_19685;
})();
if(cljs.core.truth_(inst_19642)){
var statearr_19686_19709 = state_19671__$1;
(statearr_19686_19709[(1)] = (8));

} else {
var statearr_19687_19710 = state_19671__$1;
(statearr_19687_19710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (14))){
var inst_19664 = (state_19671[(2)]);
var inst_19665 = cljs.core.async.close_BANG_.call(null,out);
var state_19671__$1 = (function (){var statearr_19689 = state_19671;
(statearr_19689[(13)] = inst_19664);

return statearr_19689;
})();
var statearr_19690_19711 = state_19671__$1;
(statearr_19690_19711[(2)] = inst_19665);

(statearr_19690_19711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (10))){
var inst_19654 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19691_19712 = state_19671__$1;
(statearr_19691_19712[(2)] = inst_19654);

(statearr_19691_19712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (8))){
var inst_19631 = (state_19671[(7)]);
var inst_19635 = (state_19671[(9)]);
var inst_19639 = (state_19671[(10)]);
var inst_19644 = inst_19631.push(inst_19635);
var tmp19688 = inst_19631;
var inst_19631__$1 = tmp19688;
var inst_19632 = inst_19639;
var state_19671__$1 = (function (){var statearr_19692 = state_19671;
(statearr_19692[(7)] = inst_19631__$1);

(statearr_19692[(8)] = inst_19632);

(statearr_19692[(14)] = inst_19644);

return statearr_19692;
})();
var statearr_19693_19713 = state_19671__$1;
(statearr_19693_19713[(2)] = null);

(statearr_19693_19713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto___19699,out))
;
return ((function (switch__17718__auto__,c__17808__auto___19699,out){
return (function() {
var cljs$core$async$state_machine__17719__auto__ = null;
var cljs$core$async$state_machine__17719__auto____0 = (function (){
var statearr_19694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19694[(0)] = cljs$core$async$state_machine__17719__auto__);

(statearr_19694[(1)] = (1));

return statearr_19694;
});
var cljs$core$async$state_machine__17719__auto____1 = (function (state_19671){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_19671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e19695){if((e19695 instanceof Object)){
var ex__17722__auto__ = e19695;
var statearr_19696_19714 = state_19671;
(statearr_19696_19714[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19715 = state_19671;
state_19671 = G__19715;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
cljs$core$async$state_machine__17719__auto__ = function(state_19671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17719__auto____1.call(this,state_19671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17719__auto____0;
cljs$core$async$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17719__auto____1;
return cljs$core$async$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___19699,out))
})();
var state__17810__auto__ = (function (){var statearr_19697 = f__17809__auto__.call(null);
(statearr_19697[(6)] = c__17808__auto___19699);

return statearr_19697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___19699,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

