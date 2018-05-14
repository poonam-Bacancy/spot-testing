// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$create_react_class$index');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$react$react');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__19860 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__19861 = (i + (1));
m = G__19860;
i = G__19861;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5459__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5459__auto__;
return reagent.impl.component.extract_props.call(null,v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,module$Users$tibor$Work$Projects$spots_frontend$node_modules$react$react.Children.toArray((p["children"])));
} else {
var v = temp__5459__auto__;
return reagent.impl.component.extract_children.call(null,v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__19863 = c;
var G__19863__$1 = (((G__19863 == null))?null:G__19863.prototype);
if((G__19863__$1 == null)){
return null;
} else {
return (G__19863__$1["reagentRender"]);
}
})() == null)));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__19865 = c;
var G__19865__$1 = (((G__19865 == null))?null:G__19865.prototype);
if((G__19865__$1 == null)){
return null;
} else {
return (G__19865__$1["render"]);
}
})() == null)));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
if(typeof reagent.impl.component.as_element !== 'undefined'){
} else {
reagent.impl.component.as_element = null;
}
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = null;
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__19866 = n;
switch (G__19866) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__19868__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__19868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19869__i = 0, G__19869__a = new Array(arguments.length -  0);
while (G__19869__i < G__19869__a.length) {G__19869__a[G__19869__i] = arguments[G__19869__i + 0]; ++G__19869__i;}
  args = new cljs.core.IndexedSeq(G__19869__a,0,null);
} 
return G__19868__delegate.call(this,args);};
G__19868.cljs$lang$maxFixedArity = 0;
G__19868.cljs$lang$applyTo = (function (arglist__19870){
var args = cljs.core.seq(arglist__19870);
return G__19868__delegate(args);
});
G__19868.cljs$core$IFn$_invoke$arity$variadic = G__19868__delegate;
return G__19868;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__19871 = c;
c = G__19871;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_19872 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{return reagent.impl.component.wrap_render.call(null,c);

}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_19872;
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__19873 = key;
var G__19873__$1 = (((G__19873 instanceof cljs.core.Keyword))?G__19873.fqn:null);
switch (G__19873__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__19873,G__19873__$1))

break;
case "componentWillReceiveProps":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__19873,G__19873__$1))

break;
case "shouldComponentUpdate":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__8916__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__8916__auto__){
return or__8916__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = ((old_argv == null)) || ((new_argv == null));
if((f == null)){
return (noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv));
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__19873,G__19873__$1))

break;
case "componentWillUpdate":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__19873,G__19873__$1))

break;
case "componentDidUpdate":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__19873,G__19873__$1))

break;
case "componentWillMount":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__19873,G__19873__$1))

break;
case "componentDidMount":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__19873,G__19873__$1))

break;
case "componentWillUnmount":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__19874_19876 = (c["cljsRatom"]);
if((G__19874_19876 == null)){
} else {
reagent.ratom.dispose_BANG_.call(null,G__19874_19876);
}

reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__19873,G__19873__$1))

break;
case "componentDidCatch":
return ((function (G__19873,G__19873__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__19873,G__19873__$1))

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__8904__auto__ = wrap;
if(cljs.core.truth_(and__8904__auto__)){
return f;
} else {
return and__8904__auto__;
}
})())){
} else {
}

var or__8916__auto__ = wrap;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){


var render_fun = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__8916__auto__ = render_fun;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8916__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__19877 = name;
switch (G__19877) {
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__19879 = o;
(G__19879[cljs.core.name.call(null,k)] = v);

return G__19879;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){

return module$Users$tibor$Work$Projects$spots_frontend$node_modules$create_react_class$index(reagent.impl.component.cljsify.call(null,body));
});
reagent.impl.component.fiber_component_path = (function reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__19880 = fiber;
var G__19880__$1 = (((G__19880 == null))?null:(G__19880["type"]));
if((G__19880__$1 == null)){
return null;
} else {
return (G__19880__$1["displayName"]);
}
})();
var parent = (function (){var G__19881 = fiber;
if((G__19881 == null)){
return null;
} else {
return (G__19881["return"]);
}
})();
var path = (function (){var G__19882 = parent;
var G__19882__$1 = (((G__19882 == null))?null:reagent.impl.component.fiber_component_path.call(null,G__19882));
if((G__19882__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19882__$1)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var temp__5455__auto__ = (function (){var G__19883 = c;
if((G__19883 == null)){
return null;
} else {
return (G__19883["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var fiber = temp__5455__auto__;
return reagent.impl.component.fiber_component_path.call(null,fiber);
} else {
var elem = (function (){var G__19884 = (function (){var or__8916__auto__ = (function (){var G__19886 = c;
if((G__19886 == null)){
return null;
} else {
return (G__19886["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return c;
}
})();
if((G__19884 == null)){
return null;
} else {
return (G__19884["_currentElement"]);
}
})();
var name = (function (){var G__19887 = elem;
var G__19887__$1 = (((G__19887 == null))?null:(G__19887["type"]));
if((G__19887__$1 == null)){
return null;
} else {
return (G__19887__$1["displayName"]);
}
})();
var path = (function (){var G__19888 = elem;
var G__19888__$1 = (((G__19888 == null))?null:(G__19888["_owner"]));
var G__19888__$2 = (((G__19888__$1 == null))?null:reagent.impl.component.component_path.call(null,G__19888__$1));
if((G__19888__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19888__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
return "";

});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){


if(reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class.call(null,withrender);
return reagent.impl.component.cache_react_class.call(null,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__5459__auto__ = reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5459__auto__ == null)){
return reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return reagent.impl.component.as_class.call(null,comp);
}
});
