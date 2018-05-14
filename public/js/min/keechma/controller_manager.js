// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
goog.require('keechma.reporter');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(var_args){
var G__27978 = arguments.length;
switch (G__27978) {
case 4:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4 = (function (reporter,controller,command_name,args){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name,args,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name))?keechma.reporter.cmd_info.call(null):null));
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5 = (function (reporter,controller,command_name,args,origin){
var cmd_info = keechma.reporter.with_origin.call(null,origin);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name)){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name], null),args,origin,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),command_name], null),cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
} else {
reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});

keechma.controller_manager.send_command_to.cljs$lang$maxFixedArity = 5;

keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args,cmd_info){
var vec__27980 = command_name;
var controller_name = cljs.core.nth.call(null,vec__27980,(0),null);
var command_name__$1 = cljs.core.nth.call(null,vec__27980,(1),null);
var controller = cljs.core.get.call(null,controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name__$1,command_args,cmd_info);
} else {
throw cljs.core.ex_info.call(null,"Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controller","controller",2013778659),controller_name,new cljs.core.Keyword(null,"command","command",-894540724),command_name__$1,new cljs.core.Keyword(null,"args","args",1315556576),command_args], null));
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
return cljs.core.reduce.call(null,((function (running_controllers){
return (function (acc,p__27983){
var vec__27984 = p__27983;
var k = cljs.core.nth.call(null,vec__27984,(0),null);
var v = cljs.core.nth.call(null,vec__27984,(1),null);
return cljs.core.assoc.call(null,acc,k,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v));
});})(running_controllers))
,cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set.call(null,cljs.core.keys.call(null,running_controllers));
return cljs.core.reduce.call(null,((function (plan,running_controller_keys_set){
return (function (acc,p__27987){
var vec__27988 = p__27987;
var topic = cljs.core.nth.call(null,vec__27988,(0),null);
var controller = cljs.core.nth.call(null,vec__27988,(1),null);
var map__27991 = acc;
var map__27991__$1 = ((((!((map__27991 == null)))?((((map__27991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27991):map__27991);
var stop = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var new_params = keechma.controller.params.call(null,controller,route_params);
var running_controller = cljs.core.get.call(null,running_controllers,topic);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,running_controller))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.assoc.call(null,wake,topic,new_params));
} else {
if(((prev_params == null)) && ((new_params == null))){
return acc;
} else {
if(((prev_params == null)) && (!((new_params == null)))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if((!((prev_params == null))) && ((new_params == null))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(cljs.core._EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.conj.call(null,route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
});})(plan,running_controller_keys_set))
,plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,stop__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__27993 = s;
var topic = cljs.core.nth.call(null,vec__27993,(0),null);
var params = cljs.core.nth.call(null,vec__27993,(1),null);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.get.call(null,running_controllers,topic);
var _ = reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
var new_app_db = keechma.util.dissoc_in.call(null,keechma.controller.stop.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller));

var G__27996 = cljs.core.rest.call(null,stop__$1);
var G__27997 = new_app_db;
stop__$1 = G__27996;
app_db__$1 = G__27997;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_or_wake_controllers = (function keechma$controller_manager$apply_start_or_wake_controllers(action,reporter_action,app_db,reporter,controllers,commands_chan,get_running,start_or_wake){
var start_or_wake__$1 = start_or_wake;
var app_db__$1 = app_db;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,start_or_wake__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__27998 = s;
var topic = cljs.core.nth.call(null,vec__27998,(0),null);
var params = cljs.core.nth.call(null,vec__27998,(1),null);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,reporter_action], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keecmha","lifecycle","keecmha/lifecycle",-422790813),reporter_action], null),params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic));
var new_app_db = cljs.core.assoc_in.call(null,action.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
var G__28001 = cljs.core.rest.call(null,start_or_wake__$1);
var G__28002 = new_app_db;
start_or_wake__$1 = G__28001;
app_db__$1 = G__28002;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.start,new cljs.core.Keyword(null,"start","start",-355208981));
keechma.controller_manager.apply_wake_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.wake,new cljs.core.Keyword(null,"wake","wake",1262361182));
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__28003 = cljs.core.seq.call(null,start);
var chunk__28004 = null;
var count__28005 = (0);
var i__28006 = (0);
while(true){
if((i__28006 < count__28005)){
var vec__28007 = cljs.core._nth.call(null,chunk__28004,i__28006);
var topic = cljs.core.nth.call(null,vec__28007,(0),null);
var _ = cljs.core.nth.call(null,vec__28007,(1),null);
var controller_28013 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_28013,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_28013),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_28013));

var G__28014 = seq__28003;
var G__28015 = chunk__28004;
var G__28016 = count__28005;
var G__28017 = (i__28006 + (1));
seq__28003 = G__28014;
chunk__28004 = G__28015;
count__28005 = G__28016;
i__28006 = G__28017;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28003);
if(temp__5457__auto__){
var seq__28003__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28003__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__28003__$1);
var G__28018 = cljs.core.chunk_rest.call(null,seq__28003__$1);
var G__28019 = c__9847__auto__;
var G__28020 = cljs.core.count.call(null,c__9847__auto__);
var G__28021 = (0);
seq__28003 = G__28018;
chunk__28004 = G__28019;
count__28005 = G__28020;
i__28006 = G__28021;
continue;
} else {
var vec__28010 = cljs.core.first.call(null,seq__28003__$1);
var topic = cljs.core.nth.call(null,vec__28010,(0),null);
var _ = cljs.core.nth.call(null,vec__28010,(1),null);
var controller_28022 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_28022,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_28022),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_28022));

var G__28023 = cljs.core.next.call(null,seq__28003__$1);
var G__28024 = null;
var G__28025 = (0);
var G__28026 = (0);
seq__28003 = G__28023;
chunk__28004 = G__28024;
count__28005 = G__28025;
i__28006 = G__28026;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__28027 = cljs.core.seq.call(null,route_changed);
var chunk__28028 = null;
var count__28029 = (0);
var i__28030 = (0);
while(true){
if((i__28030 < count__28029)){
var topic = cljs.core._nth.call(null,chunk__28028,i__28030);
var controller_28031 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_28031,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__28032 = seq__28027;
var G__28033 = chunk__28028;
var G__28034 = count__28029;
var G__28035 = (i__28030 + (1));
seq__28027 = G__28032;
chunk__28028 = G__28033;
count__28029 = G__28034;
i__28030 = G__28035;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28027);
if(temp__5457__auto__){
var seq__28027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28027__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__28027__$1);
var G__28036 = cljs.core.chunk_rest.call(null,seq__28027__$1);
var G__28037 = c__9847__auto__;
var G__28038 = cljs.core.count.call(null,c__9847__auto__);
var G__28039 = (0);
seq__28027 = G__28036;
chunk__28028 = G__28037;
count__28029 = G__28038;
i__28030 = G__28039;
continue;
} else {
var topic = cljs.core.first.call(null,seq__28027__$1);
var controller_28040 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_28040,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);

var G__28041 = cljs.core.next.call(null,seq__28027__$1);
var G__28042 = null;
var G__28043 = (0);
var G__28044 = (0);
seq__28027 = G__28041;
chunk__28028 = G__28042;
count__28029 = G__28043;
i__28030 = G__28044;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
reporter.call(null,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var app_db_28047 = cljs.core.deref.call(null,app_db_atom);
var execution_plan_28048 = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.get_in.call(null,app_db_28047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)),controllers);
var map__28045_28049 = execution_plan_28048;
var map__28045_28050__$1 = ((((!((map__28045_28049 == null)))?((((map__28045_28049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28045_28049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28045_28049):map__28045_28049);
var stop_28051 = cljs.core.get.call(null,map__28045_28050__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_28052 = cljs.core.get.call(null,map__28045_28050__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake_28053 = cljs.core.get.call(null,map__28045_28050__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed_28054 = cljs.core.get.call(null,map__28045_28050__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var get_running_28055 = ((function (app_db_28047,execution_plan_28048,map__28045_28049,map__28045_28050__$1,stop_28051,start_28052,wake_28053,route_changed_28054){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db_28047,execution_plan_28048,map__28045_28049,map__28045_28050__$1,stop_28051,start_28052,wake_28053,route_changed_28054))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_wake_controllers.call(null,keechma.controller_manager.apply_start_controllers.call(null,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.assoc.call(null,app_db_28047,new cljs.core.Keyword(null,"route","route",329891309),route_params),reporter,stop_28051),reporter,controllers,commands_chan,get_running_28055,start_28052),reporter,controllers,commands_chan,get_running_28055,wake_28053));

keechma.controller_manager.call_handler_on_started_controllers.call(null,app_db_atom,reporter,cljs.core.concat.call(null,start_28052,wake_28053));

keechma.controller_manager.send_route_changed_to_surviving_controllers.call(null,app_db_atom,reporter,route_changed_28054,route_params);

return reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),keechma.controller_manager.report_running_controllers.call(null,app_db_atom),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.call(null);
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var vec__28056 = s;
var topic = cljs.core.nth.call(null,vec__28056,(0),null);
var _ = cljs.core.nth.call(null,vec__28056,(1),null);
var controller = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"ssr-handler","ssr-handler",1473540493)], null),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var ret_val = keechma.controller.ssr_handler.call(null,controller,app_db_atom,((function (wait_count,start__$1,vec__28056,topic,_,controller,s,temp__5455__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,wait_chan,true);
});})(wait_count,start__$1,vec__28056,topic,_,controller,s,temp__5455__auto__,wait_chan))
,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.call(null,keechma.controller.not_implemented,ret_val)){
var G__28096 = wait_count;
var G__28097 = cljs.core.rest.call(null,start__$1);
wait_count = G__28096;
start__$1 = G__28097;
continue;
} else {
var G__28098 = (wait_count + (1));
var G__28099 = cljs.core.rest.call(null,start__$1);
wait_count = G__28098;
start__$1 = G__28099;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,wait_chan,wait_count){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,wait_chan,wait_count){
return (function (state_28078){
var state_val_28079 = (state_28078[(1)]);
if((state_val_28079 === (7))){
var inst_28066 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28066)){
var statearr_28080_28100 = state_28078__$1;
(statearr_28080_28100[(1)] = (8));

} else {
var statearr_28081_28101 = state_28078__$1;
(statearr_28081_28101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (1))){
var inst_28059 = wait_count;
var state_28078__$1 = (function (){var statearr_28082 = state_28078;
(statearr_28082[(7)] = inst_28059);

return statearr_28082;
})();
var statearr_28083_28102 = state_28078__$1;
(statearr_28083_28102[(2)] = null);

(statearr_28083_28102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (4))){
var inst_28063 = ssr_handler_done_cb.call(null);
var state_28078__$1 = state_28078;
var statearr_28084_28103 = state_28078__$1;
(statearr_28084_28103[(2)] = inst_28063);

(statearr_28084_28103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (6))){
var inst_28074 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28085_28104 = state_28078__$1;
(statearr_28085_28104[(2)] = inst_28074);

(statearr_28085_28104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (3))){
var inst_28076 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28078__$1,inst_28076);
} else {
if((state_val_28079 === (2))){
var inst_28059 = (state_28078[(7)]);
var inst_28061 = cljs.core._EQ_.call(null,(0),inst_28059);
var state_28078__$1 = state_28078;
if(inst_28061){
var statearr_28086_28105 = state_28078__$1;
(statearr_28086_28105[(1)] = (4));

} else {
var statearr_28087_28106 = state_28078__$1;
(statearr_28087_28106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (9))){
var state_28078__$1 = state_28078;
var statearr_28088_28107 = state_28078__$1;
(statearr_28088_28107[(2)] = null);

(statearr_28088_28107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (5))){
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(7),wait_chan);
} else {
if((state_val_28079 === (10))){
var inst_28072 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28089_28108 = state_28078__$1;
(statearr_28089_28108[(2)] = inst_28072);

(statearr_28089_28108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (8))){
var inst_28059 = (state_28078[(7)]);
var inst_28068 = (inst_28059 - (1));
var inst_28059__$1 = inst_28068;
var state_28078__$1 = (function (){var statearr_28090 = state_28078;
(statearr_28090[(7)] = inst_28059__$1);

return statearr_28090;
})();
var statearr_28091_28109 = state_28078__$1;
(statearr_28091_28109[(2)] = null);

(statearr_28091_28109[(1)] = (2));


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
});})(c__17808__auto__,wait_chan,wait_count))
;
return ((function (switch__17718__auto__,c__17808__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____0 = (function (){
var statearr_28092 = [null,null,null,null,null,null,null,null];
(statearr_28092[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__);

(statearr_28092[(1)] = (1));

return statearr_28092;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____1 = (function (state_28078){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28093){if((e28093 instanceof Object)){
var ex__17722__auto__ = e28093;
var statearr_28094_28110 = state_28078;
(statearr_28094_28110[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28111 = state_28078;
state_28078 = G__28111;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__ = function(state_28078){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____1.call(this,state_28078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,wait_chan,wait_count))
})();
var state__17810__auto__ = (function (){var statearr_28095 = f__17809__auto__.call(null);
(statearr_28095[(6)] = c__17808__auto__);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,wait_chan,wait_count))
);

return c__17808__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref.call(null,app_db_atom);
var route_params = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__28112 = execution_plan;
var map__28112__$1 = ((((!((map__28112 == null)))?((((map__28112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28112):map__28112);
var start = cljs.core.get.call(null,map__28112__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var get_running = ((function (app_db,route_params,execution_plan,map__28112,map__28112__$1,start){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db,route_params,execution_plan,map__28112,map__28112__$1,start))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running){
return (function (){
cljs.core.async.close_BANG_.call(null,commands_chan);

return done_cb.call(null);
});})(app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,start));

var c__17808__auto___28151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (1))){
var state_28137__$1 = state_28137;
var statearr_28139_28152 = state_28137__$1;
(statearr_28139_28152[(2)] = null);

(statearr_28139_28152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (2))){
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(4),commands_chan);
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (4))){
var inst_28116 = (state_28137[(7)]);
var inst_28116__$1 = (state_28137[(2)]);
var state_28137__$1 = (function (){var statearr_28140 = state_28137;
(statearr_28140[(7)] = inst_28116__$1);

return statearr_28140;
})();
if(cljs.core.truth_(inst_28116__$1)){
var statearr_28141_28153 = state_28137__$1;
(statearr_28141_28153[(1)] = (5));

} else {
var statearr_28142_28154 = state_28137__$1;
(statearr_28142_28154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (5))){
var inst_28116 = (state_28137[(7)]);
var inst_28121 = cljs.core.nth.call(null,inst_28116,(0),null);
var inst_28122 = cljs.core.nth.call(null,inst_28116,(1),null);
var inst_28123 = cljs.core.nth.call(null,inst_28116,(2),null);
var inst_28124 = cljs.core.deref.call(null,app_db_atom);
var inst_28125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28126 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_28127 = (new cljs.core.PersistentVector(null,2,(5),inst_28125,inst_28126,null));
var inst_28128 = cljs.core.get_in.call(null,inst_28124,inst_28127);
var inst_28129 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_28128,inst_28121,inst_28122,inst_28123);
var state_28137__$1 = (function (){var statearr_28143 = state_28137;
(statearr_28143[(8)] = inst_28129);

return statearr_28143;
})();
var statearr_28144_28155 = state_28137__$1;
(statearr_28144_28155[(2)] = null);

(statearr_28144_28155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (6))){
var state_28137__$1 = state_28137;
var statearr_28145_28156 = state_28137__$1;
(statearr_28145_28156[(2)] = null);

(statearr_28145_28156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (7))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28146_28157 = state_28137__$1;
(statearr_28146_28157[(2)] = inst_28133);

(statearr_28146_28157[(1)] = (3));


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
});})(c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb))
;
return ((function (switch__17718__auto__,c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__17719__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__17719__auto____0 = (function (){
var statearr_28147 = [null,null,null,null,null,null,null,null,null];
(statearr_28147[(0)] = keechma$controller_manager$start_ssr_$_state_machine__17719__auto__);

(statearr_28147[(1)] = (1));

return statearr_28147;
});
var keechma$controller_manager$start_ssr_$_state_machine__17719__auto____1 = (function (state_28137){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28148){if((e28148 instanceof Object)){
var ex__17722__auto__ = e28148;
var statearr_28149_28158 = state_28137;
(statearr_28149_28158[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28159 = state_28137;
state_28137 = G__28159;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__17719__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__17719__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_ssr_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__17719__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__17719__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb))
})();
var state__17810__auto__ = (function (){var statearr_28150 = f__17809__auto__.call(null);
(statearr_28150[(6)] = c__17808__auto___28151);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto___28151,app_db,route_params,execution_plan,map__28112,map__28112__$1,start,get_running,ssr_handler_done_cb))
);


return keechma.controller_manager.call_ssr_handler_on_started_controllers.call(null,app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,commands_chan,app_db_atom,controllers,reporter){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.reduce.call(null,(function (acc,p__28160){
var vec__28161 = p__28160;
var k = cljs.core.nth.call(null,vec__28161,(0),null);
var _ = cljs.core.nth.call(null,vec__28161,(1),null);
return cljs.core.conj.call(null,acc,k);
}),cljs.core.PersistentVector.EMPTY,controllers),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller_manager.apply_route_change.call(null,reporter,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.call(null);
var stop_command_block = cljs.core.async.chan.call(null);
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,stop_route_block,stop_command_block){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,stop_route_block,stop_command_block){
return (function (state_28196){
var state_val_28197 = (state_28196[(1)]);
if((state_val_28197 === (7))){
var inst_28179 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28179)){
var statearr_28198_28283 = state_28196__$1;
(statearr_28198_28283[(1)] = (8));

} else {
var statearr_28199_28284 = state_28196__$1;
(statearr_28199_28284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (1))){
var state_28196__$1 = state_28196;
var statearr_28200_28285 = state_28196__$1;
(statearr_28200_28285[(2)] = null);

(statearr_28200_28285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (4))){
var inst_28175 = (state_28196[(7)]);
var inst_28172 = (state_28196[(2)]);
var inst_28173 = cljs.core.nth.call(null,inst_28172,(0),null);
var inst_28174 = cljs.core.nth.call(null,inst_28172,(1),null);
var inst_28175__$1 = cljs.core.not_EQ_.call(null,inst_28174,stop_route_block);
var state_28196__$1 = (function (){var statearr_28201 = state_28196;
(statearr_28201[(7)] = inst_28175__$1);

(statearr_28201[(8)] = inst_28173);

return statearr_28201;
})();
if(inst_28175__$1){
var statearr_28202_28286 = state_28196__$1;
(statearr_28202_28286[(1)] = (5));

} else {
var statearr_28203_28287 = state_28196__$1;
(statearr_28203_28287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (13))){
var inst_28188 = (state_28196[(2)]);
var state_28196__$1 = (function (){var statearr_28204 = state_28196;
(statearr_28204[(9)] = inst_28188);

return statearr_28204;
})();
var statearr_28205_28288 = state_28196__$1;
(statearr_28205_28288[(2)] = null);

(statearr_28205_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (6))){
var inst_28175 = (state_28196[(7)]);
var state_28196__$1 = state_28196;
var statearr_28206_28289 = state_28196__$1;
(statearr_28206_28289[(2)] = inst_28175);

(statearr_28206_28289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (3))){
var inst_28194 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28196__$1,inst_28194);
} else {
if((state_val_28197 === (12))){
var state_28196__$1 = state_28196;
var statearr_28207_28290 = state_28196__$1;
(statearr_28207_28290[(2)] = null);

(statearr_28207_28290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (2))){
var inst_28168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28169 = [stop_route_block,route_chan];
var inst_28170 = (new cljs.core.PersistentVector(null,2,(5),inst_28168,inst_28169,null));
var state_28196__$1 = state_28196;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28196__$1,(4),inst_28170);
} else {
if((state_val_28197 === (11))){
var inst_28173 = (state_28196[(8)]);
var inst_28185 = keechma.controller_manager.apply_route_change.call(null,reporter,inst_28173,app_db_atom,commands_chan,controllers);
var state_28196__$1 = state_28196;
var statearr_28208_28291 = state_28196__$1;
(statearr_28208_28291[(2)] = inst_28185);

(statearr_28208_28291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (9))){
var state_28196__$1 = state_28196;
var statearr_28209_28292 = state_28196__$1;
(statearr_28209_28292[(2)] = null);

(statearr_28209_28292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (5))){
var inst_28173 = (state_28196[(8)]);
var state_28196__$1 = state_28196;
var statearr_28210_28293 = state_28196__$1;
(statearr_28210_28293[(2)] = inst_28173);

(statearr_28210_28293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (10))){
var inst_28192 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28211_28294 = state_28196__$1;
(statearr_28211_28294[(2)] = inst_28192);

(statearr_28211_28294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (8))){
var inst_28173 = (state_28196[(8)]);
var inst_28181 = cljs.core.deref.call(null,app_db_atom);
var inst_28182 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(inst_28181);
var inst_28183 = cljs.core.not_EQ_.call(null,inst_28173,inst_28182);
var state_28196__$1 = state_28196;
if(inst_28183){
var statearr_28212_28295 = state_28196__$1;
(statearr_28212_28295[(1)] = (11));

} else {
var statearr_28213_28296 = state_28196__$1;
(statearr_28213_28296[(1)] = (12));

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
});})(c__17808__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__17718__auto__,c__17808__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__17719__auto__ = null;
var keechma$controller_manager$start_$_state_machine__17719__auto____0 = (function (){
var statearr_28214 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28214[(0)] = keechma$controller_manager$start_$_state_machine__17719__auto__);

(statearr_28214[(1)] = (1));

return statearr_28214;
});
var keechma$controller_manager$start_$_state_machine__17719__auto____1 = (function (state_28196){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object)){
var ex__17722__auto__ = e28215;
var statearr_28216_28297 = state_28196;
(statearr_28216_28297[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28298 = state_28196;
state_28196 = G__28298;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__17719__auto__ = function(state_28196){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__17719__auto____1.call(this,state_28196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__17719__auto____0;
keechma$controller_manager$start_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__17719__auto____1;
return keechma$controller_manager$start_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,stop_route_block,stop_command_block))
})();
var state__17810__auto__ = (function (){var statearr_28217 = f__17809__auto__.call(null);
(statearr_28217[(6)] = c__17808__auto__);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,stop_route_block,stop_command_block))
);

return c__17808__auto__;
})(),(function (){var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,stop_route_block,stop_command_block){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,stop_route_block,stop_command_block){
return (function (state_28256){
var state_val_28257 = (state_28256[(1)]);
if((state_val_28257 === (7))){
var inst_28252 = (state_28256[(2)]);
var state_28256__$1 = state_28256;
var statearr_28258_28299 = state_28256__$1;
(statearr_28258_28299[(2)] = inst_28252);

(statearr_28258_28299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (1))){
var state_28256__$1 = state_28256;
var statearr_28259_28300 = state_28256__$1;
(statearr_28259_28300[(2)] = null);

(statearr_28259_28300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (4))){
var inst_28226 = (state_28256[(2)]);
var inst_28227 = cljs.core.nth.call(null,inst_28226,(0),null);
var inst_28228 = cljs.core.nth.call(null,inst_28226,(1),null);
var inst_28229 = cljs.core._EQ_.call(null,inst_28228,stop_command_block);
var state_28256__$1 = (function (){var statearr_28260 = state_28256;
(statearr_28260[(7)] = inst_28227);

return statearr_28260;
})();
if(inst_28229){
var statearr_28261_28301 = state_28256__$1;
(statearr_28261_28301[(1)] = (5));

} else {
var statearr_28262_28302 = state_28256__$1;
(statearr_28262_28302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (6))){
var inst_28227 = (state_28256[(7)]);
var inst_28235 = (state_28256[(8)]);
var inst_28235__$1 = cljs.core.nth.call(null,inst_28227,(0),null);
var inst_28236 = cljs.core.nth.call(null,inst_28227,(1),null);
var inst_28237 = cljs.core.nth.call(null,inst_28227,(2),null);
var inst_28238 = cljs.core.deref.call(null,app_db_atom);
var inst_28239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28240 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_28241 = (new cljs.core.PersistentVector(null,2,(5),inst_28239,inst_28240,null));
var inst_28242 = cljs.core.get_in.call(null,inst_28238,inst_28241);
var inst_28243 = (inst_28235__$1 == null);
var inst_28244 = cljs.core.not.call(null,inst_28243);
var state_28256__$1 = (function (){var statearr_28263 = state_28256;
(statearr_28263[(9)] = inst_28237);

(statearr_28263[(8)] = inst_28235__$1);

(statearr_28263[(10)] = inst_28242);

(statearr_28263[(11)] = inst_28236);

return statearr_28263;
})();
if(inst_28244){
var statearr_28264_28303 = state_28256__$1;
(statearr_28264_28303[(1)] = (8));

} else {
var statearr_28265_28304 = state_28256__$1;
(statearr_28265_28304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (3))){
var inst_28254 = (state_28256[(2)]);
var state_28256__$1 = state_28256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28256__$1,inst_28254);
} else {
if((state_val_28257 === (2))){
var inst_28222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28223 = [stop_command_block,commands_chan];
var inst_28224 = (new cljs.core.PersistentVector(null,2,(5),inst_28222,inst_28223,null));
var state_28256__$1 = state_28256;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28256__$1,(4),inst_28224);
} else {
if((state_val_28257 === (9))){
var state_28256__$1 = state_28256;
var statearr_28266_28305 = state_28256__$1;
(statearr_28266_28305[(2)] = null);

(statearr_28266_28305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (5))){
var state_28256__$1 = state_28256;
var statearr_28267_28306 = state_28256__$1;
(statearr_28267_28306[(2)] = null);

(statearr_28267_28306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (10))){
var inst_28249 = (state_28256[(2)]);
var state_28256__$1 = (function (){var statearr_28268 = state_28256;
(statearr_28268[(12)] = inst_28249);

return statearr_28268;
})();
var statearr_28269_28307 = state_28256__$1;
(statearr_28269_28307[(2)] = null);

(statearr_28269_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28257 === (8))){
var inst_28237 = (state_28256[(9)]);
var inst_28235 = (state_28256[(8)]);
var inst_28242 = (state_28256[(10)]);
var inst_28236 = (state_28256[(11)]);
var inst_28246 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_28242,inst_28235,inst_28236,inst_28237);
var state_28256__$1 = state_28256;
var statearr_28270_28308 = state_28256__$1;
(statearr_28270_28308[(2)] = inst_28246);

(statearr_28270_28308[(1)] = (10));


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
});})(c__17808__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__17718__auto__,c__17808__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__17719__auto__ = null;
var keechma$controller_manager$start_$_state_machine__17719__auto____0 = (function (){
var statearr_28271 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28271[(0)] = keechma$controller_manager$start_$_state_machine__17719__auto__);

(statearr_28271[(1)] = (1));

return statearr_28271;
});
var keechma$controller_manager$start_$_state_machine__17719__auto____1 = (function (state_28256){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28272){if((e28272 instanceof Object)){
var ex__17722__auto__ = e28272;
var statearr_28273_28309 = state_28256;
(statearr_28273_28309[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28310 = state_28256;
state_28256 = G__28310;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__17719__auto__ = function(state_28256){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__17719__auto____1.call(this,state_28256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__17719__auto____0;
keechma$controller_manager$start_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__17719__auto____1;
return keechma$controller_manager$start_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,stop_route_block,stop_command_block))
})();
var state__17810__auto__ = (function (){var statearr_28274 = f__17809__auto__.call(null);
(statearr_28274[(6)] = c__17808__auto__);

return statearr_28274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,stop_route_block,stop_command_block))
);

return c__17808__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),running_chans,new cljs.core.Keyword(null,"stop","stop",-2140911342),((function (stop_route_block,stop_command_block,running_chans){
return (function (){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controllers__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
cljs.core.async.close_BANG_.call(null,stop_route_block);

cljs.core.async.close_BANG_.call(null,stop_command_block);

var seq__28275_28311 = cljs.core.seq.call(null,running_chans);
var chunk__28276_28312 = null;
var count__28277_28313 = (0);
var i__28278_28314 = (0);
while(true){
if((i__28278_28314 < count__28277_28313)){
var running_28315 = cljs.core._nth.call(null,chunk__28276_28312,i__28278_28314);
cljs.core.async.close_BANG_.call(null,running_28315);

var G__28316 = seq__28275_28311;
var G__28317 = chunk__28276_28312;
var G__28318 = count__28277_28313;
var G__28319 = (i__28278_28314 + (1));
seq__28275_28311 = G__28316;
chunk__28276_28312 = G__28317;
count__28277_28313 = G__28318;
i__28278_28314 = G__28319;
continue;
} else {
var temp__5457__auto___28320 = cljs.core.seq.call(null,seq__28275_28311);
if(temp__5457__auto___28320){
var seq__28275_28321__$1 = temp__5457__auto___28320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28275_28321__$1)){
var c__9847__auto___28322 = cljs.core.chunk_first.call(null,seq__28275_28321__$1);
var G__28323 = cljs.core.chunk_rest.call(null,seq__28275_28321__$1);
var G__28324 = c__9847__auto___28322;
var G__28325 = cljs.core.count.call(null,c__9847__auto___28322);
var G__28326 = (0);
seq__28275_28311 = G__28323;
chunk__28276_28312 = G__28324;
count__28277_28313 = G__28325;
i__28278_28314 = G__28326;
continue;
} else {
var running_28327 = cljs.core.first.call(null,seq__28275_28321__$1);
cljs.core.async.close_BANG_.call(null,running_28327);

var G__28328 = cljs.core.next.call(null,seq__28275_28321__$1);
var G__28329 = null;
var G__28330 = (0);
var G__28331 = (0);
seq__28275_28311 = G__28328;
chunk__28276_28312 = G__28329;
count__28277_28313 = G__28330;
i__28278_28314 = G__28331;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.deref.call(null,app_db_atom),reporter,cljs.core.reduce.call(null,((function (controllers__$1,stop_route_block,stop_command_block,running_chans){
return (function (acc,p__28279){
var vec__28280 = p__28279;
var key = cljs.core.nth.call(null,vec__28280,(0),null);
var controller = cljs.core.nth.call(null,vec__28280,(1),null);
return cljs.core.assoc.call(null,acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(controllers__$1,stop_route_block,stop_command_block,running_chans))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
});})(stop_route_block,stop_command_block,running_chans))
], null);
});
