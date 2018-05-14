// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.ajax');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('ajax.core');
keechma.toolbox.ajax.make_error_handler = (function keechma$toolbox$ajax$make_error_handler(reject){
return (function (error){
return reject.call(null,cljs.core.ex_info.call(null,"AJAX Error",error));
});
});
keechma.toolbox.ajax.promisify = (function keechma$toolbox$ajax$promisify(method){
return (function (url,opts){
return promesa.core.promise.call(null,(function (resolve,reject,on_cancel){
var r = method.call(null,url,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),resolve,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),keechma.toolbox.ajax.make_error_handler.call(null,reject)], null)));
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
return on_cancel.call(null,((function (r){
return (function (){
return ajax.core.abort.call(null,r);
});})(r))
);
} else {
return null;
}
}));
});
});
keechma.toolbox.ajax.GET = keechma.toolbox.ajax.promisify.call(null,ajax.core.GET);
keechma.toolbox.ajax.HEAD = keechma.toolbox.ajax.promisify.call(null,ajax.core.HEAD);
keechma.toolbox.ajax.POST = keechma.toolbox.ajax.promisify.call(null,ajax.core.POST);
keechma.toolbox.ajax.PUT = keechma.toolbox.ajax.promisify.call(null,ajax.core.PUT);
keechma.toolbox.ajax.DELETE = keechma.toolbox.ajax.promisify.call(null,ajax.core.DELETE);
keechma.toolbox.ajax.OPTIONS = keechma.toolbox.ajax.promisify.call(null,ajax.core.OPTIONS);
keechma.toolbox.ajax.TRACE = keechma.toolbox.ajax.promisify.call(null,ajax.core.TRACE);
keechma.toolbox.ajax.PATCH = keechma.toolbox.ajax.promisify.call(null,ajax.core.PATCH);
