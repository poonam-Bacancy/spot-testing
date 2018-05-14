// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.app_state');
goog.require('spots.controllers');
goog.require('spots.ui');
goog.require('spots.subscriptions');
goog.require('spots.stylesheets.core');
goog.require('keechma.toolbox.css.core');
spots.core.app_definition = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"components","components",-1073188942),spots.ui.ui,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),spots.controllers.controllers,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),spots.subscriptions.subscriptions,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app"),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"user-info"], null)], null),":page"], null)], null);
if(typeof spots.core.running_app !== 'undefined'){
} else {
spots.core.running_app = cljs.core.atom.call(null,null);
}
spots.core.start_app_BANG_ = (function spots$core$start_app_BANG_(){
cljs.core.reset_BANG_.call(null,spots.core.running_app,keechma.app_state.start_BANG_.call(null,spots.core.app_definition));

return keechma.toolbox.css.core.update_page_css.call(null,spots.stylesheets.core.stylesheet.call(null));
});
spots.core.dev_setup = (function spots$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
spots.core.reload = (function spots$core$reload(){
var current = cljs.core.deref.call(null,spots.core.running_app);
if(cljs.core.truth_(current)){
return keechma.app_state.stop_BANG_.call(null,current,spots.core.start_app_BANG_);
} else {
return spots.core.start_app_BANG_.call(null);
}
});
spots.core.main = (function spots$core$main(){
spots.core.dev_setup.call(null);

return spots.core.start_app_BANG_.call(null);
});
goog.exportSymbol('spots.core.main', spots.core.main);
