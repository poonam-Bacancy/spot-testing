// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.design.message');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('forms.validator');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('promesa.core');
goog.require('spots.domain.cupcake_design');
goog.require('oops.core');
goog.require('spots.edb');
goog.require('garden.core');
goog.require('garden.stylesheet');
goog.require('spots.util.helpers');
spots.forms.design.message.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),spots.forms.validators.bool_QMARK_], null)], null),new cljs.core.Keyword(null,"fontId","fontId",-474874285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"colorId","colorId",935519260),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null)], null));
spots.forms.design.message.set_text_size = (function spots$forms$design$message$set_text_size(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"threeLine","threeLine",203582880).cljs$core$IFn$_invoke$arity$1(data))){
return data;
} else {
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"textSize","textSize",524775797),(function (p1__27731_SHARP_){
var or__8916__auto__ = p1__27731_SHARP_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "small";
}
}));
}
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spots.forms.design.message.DesignMessageForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27733,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27737 = k27733;
var G__27737__$1 = (((G__27737 instanceof cljs.core.Keyword))?G__27737.fqn:null);
switch (G__27737__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27733,else__9607__auto__);

}
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.design.message.DesignMessageForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27732){
var self__ = this;
var G__27732__$1 = this;
return (new cljs.core.RecordIter((0),G__27732__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.design.message.DesignMessageForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (649499100 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27734,other27735){
var self__ = this;
var this27734__$1 = this;
return (!((other27735 == null))) && ((this27734__$1.constructor === other27735.constructor)) && (cljs.core._EQ_.call(null,this27734__$1.validator,other27735.validator)) && (cljs.core._EQ_.call(null,this27734__$1.__extmap,other27735.__extmap));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.design.message.DesignMessageForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27732){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27738 = cljs.core.keyword_identical_QMARK_;
var expr__27739 = k__9612__auto__;
if(cljs.core.truth_(pred__27738.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27739))){
return (new spots.forms.design.message.DesignMessageForm(G__27732,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.design.message.DesignMessageForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27732),null));
}
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27732){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.design.message.DesignMessageForm(self__.validator,G__27732,self__.__extmap,self__.__hash));
});

spots.forms.design.message.DesignMessageForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.design.message.DesignMessageForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.design.message.DesignMessageForm.cljs$lang$type = true;

spots.forms.design.message.DesignMessageForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.design.message/DesignMessageForm");
});

spots.forms.design.message.DesignMessageForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.design.message/DesignMessageForm");
});

spots.forms.design.message.__GT_DesignMessageForm = (function spots$forms$design$message$__GT_DesignMessageForm(validator){
return (new spots.forms.design.message.DesignMessageForm(validator,null,null,null));
});

spots.forms.design.message.map__GT_DesignMessageForm = (function spots$forms$design$message$map__GT_DesignMessageForm(G__27736){
return (new spots.forms.design.message.DesignMessageForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27736),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27736,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.design.message.DesignMessageForm,(function (this$,app_db,form_props){
var cupcake_design_id = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var cupcakes = cljs.core.get_in.call(null,app_db,cljs.core.conj.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)));
var cupcake_idx = spots.domain.cupcake_design.get_cupcake_idx.call(null,cupcakes,cupcake_design_id);
var data = cljs.core.get_in.call(null,app_db,cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cupcake_idx], null)));
return cljs.core.select_keys.call(null,cljs.core.assoc.call(null,spots.forms.design.message.set_text_size.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"curved","curved",1164242293),cljs.core.boolean$),new cljs.core.Keyword(null,"threeLine","threeLine",203582880),((function (cupcake_design_id,cupcakes,cupcake_idx,data){
return (function (p1__27742_SHARP_){
if((p1__27742_SHARP_ == null)){
return true;
} else {
return p1__27742_SHARP_;
}
});})(cupcake_design_id,cupcakes,cupcake_idx,data))
),new cljs.core.Keyword(null,"textSize","textSize",524775797),null)),new cljs.core.Keyword(null,"type","type",1174270348),"message"),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstLine","firstLine",-51539625),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214),new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"colorId","colorId",935519260),new cljs.core.Keyword(null,"fontId","fontId",-474874285),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"threeLine","threeLine",203582880),new cljs.core.Keyword(null,"textSize","textSize",524775797)], null));
}));
spots.forms.design.message.set_message_form_data = (function spots$forms$design$message$set_message_form_data(app_db,data){
var cupcake_design_id = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var cupcakes = cljs.core.get_in.call(null,app_db,cljs.core.conj.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)));
var cupcake_idx = spots.domain.cupcake_design.get_cupcake_idx.call(null,cupcakes,cupcake_design_id);
var cupcake_design_path = cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cupcake_idx], null));
var cupcake_design_data = cljs.core.get_in.call(null,app_db,cupcake_design_path);
return cljs.core.update_in.call(null,spots.domain.cupcake_design.clear_designs.call(null,app_db,cupcake_idx),cupcake_design_path,((function (cupcake_design_id,cupcakes,cupcake_idx,cupcake_design_path,cupcake_design_data){
return (function (p1__27743_SHARP_){
return cljs.core.merge.call(null,p1__27743_SHARP_,data);
});})(cupcake_design_id,cupcakes,cupcake_idx,cupcake_design_path,cupcake_design_data))
);
});
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.design.message.DesignMessageForm,(function (this$,app_db,form_props,data){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (set-message-form-data app-db data))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,spots.forms.design.message.set_message_form_data.call(null,app_db__$1,data))], null);
}),(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! (dissoc (get-in app-db [:route :data]) :popup))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"popup","popup",635890211)))], null);
})], null)], null));
}));
spots.forms.design.message.font_stylesheet_id = (function spots$forms$design$message$font_stylesheet_id(font_id){
return ["font-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_id)].join('');
});
spots.forms.design.message.create_font_stylesheet = (function spots$forms$design$message$create_font_stylesheet(font){
var css = ["@font-face {","\n","  font-family: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font)),"';","\n","  src: url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fileURL","fileURL",108471364).cljs$core$IFn$_invoke$arity$1(font)),");","\n","}"].join('');
var style = (function (){var target_obj_27744 = window;
var _STAR_runtime_state_STAR_27750 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27744,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27746 = (function (){var target_obj_27747 = (function (){var next_obj_27748 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27744,(0),"document",true))?(target_obj_27744["document"]):null);
return next_obj_27748;
})();
return [target_obj_27747,(function (){var next_obj_27749 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27747,(0),"createElement",true))?(target_obj_27747["createElement"]):null);
return next_obj_27749;
})()];
})();
var fn_27745 = (call_info_27746[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27745,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27745 == null))){
return fn_27745.call((call_info_27746[(0)]),"style");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27750;
}})();
var head = (function (){var target_obj_27751 = window;
var _STAR_runtime_state_STAR_27754 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27751,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27752 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27751,(0),"document",true))?(target_obj_27751["document"]):null);
var next_obj_27753 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27752,(0),"head",true))?(next_obj_27752["head"]):null);
return next_obj_27753;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27754;
}})();
var target_obj_27755_27771 = style;
var _STAR_runtime_state_STAR_27757_27772 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27755_27771,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_27756_27773 = target_obj_27755_27771;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_27756_27773,(0),"id",true)){
(parent_obj_27756_27773["id"] = cljs.core.gensym.call(null,spots.forms.design.message.font_stylesheet_id.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font))));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27757_27772;
}
var target_obj_27758_27774 = head;
var _STAR_runtime_state_STAR_27762_27775 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27758_27774,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27760_27776 = [target_obj_27758_27774,(function (){var next_obj_27761 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27758_27774,(0),"appendChild",true))?(target_obj_27758_27774["appendChild"]):null);
return next_obj_27761;
})()];
var fn_27759_27777 = (call_info_27760_27776[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27759_27777,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27759_27777 == null))){
fn_27759_27777.call((call_info_27760_27776[(0)]),style);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27762_27775;
}
var temp__5457__auto__ = (function (){var target_obj_27763 = style;
var _STAR_runtime_state_STAR_27765 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27763,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27764 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27763,(0),"sheet",true))?(target_obj_27763["sheet"]):null);
return next_obj_27764;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27765;
}})();
if(cljs.core.truth_(temp__5457__auto__)){
var sheet = temp__5457__auto__;
var target_obj_27766 = sheet;
var _STAR_runtime_state_STAR_27770 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27766,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27768 = [target_obj_27766,(function (){var next_obj_27769 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27766,(0),"insertRule",true))?(target_obj_27766["insertRule"]):null);
return next_obj_27769;
})()];
var fn_27767 = (call_info_27768[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27767,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27767 == null))){
return fn_27767.call((call_info_27768[(0)]),css,(0));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27770;
}} else {
return null;
}
});
spots.forms.design.message.set_font_id = (function spots$forms$design$message$set_font_id(app_db,form_props,form_state,path,value){
var stylesheet = (function (){var target_obj_27778 = window;
var _STAR_runtime_state_STAR_27784 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27778,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27780 = (function (){var target_obj_27781 = (function (){var next_obj_27782 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27778,(0),"document",true))?(target_obj_27778["document"]):null);
return next_obj_27782;
})();
return [target_obj_27781,(function (){var next_obj_27783 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27781,(0),"getElementById",true))?(target_obj_27781["getElementById"]):null);
return next_obj_27783;
})()];
})();
var fn_27779 = (call_info_27780[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27779,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27779 == null))){
return fn_27779.call((call_info_27780[(0)]),spots.forms.design.message.font_stylesheet_id.call(null,value));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27784;
}})();
if((stylesheet == null)){
spots.forms.design.message.create_font_stylesheet.call(null,spots.edb.get_item_by_id.call(null,app_db,new cljs.core.Keyword(null,"font","font",-1506159249),value));
} else {
}

return cljs.core.assoc_in.call(null,form_state,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),path),value);
});
spots.forms.design.message.process_svg_preview = (function spots$forms$design$message$process_svg_preview(app_db,form_props,form_state,path,value){
var new_state = cljs.core.assoc_in.call(null,form_state,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),path),value);
if(cljs.core.truth_(value)){
return cljs.core.assoc_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"textSize","textSize",524775797)], null),null);
} else {
return spots.util.helpers.dissoc_in.call(null,spots.util.helpers.dissoc_in.call(null,cljs.core.assoc_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"textSize","textSize",524775797)], null),"small"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"firstLine","firstLine",-51539625)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214)], null));
}
});
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_attr_with,spots.forms.design.message.DesignMessageForm,(function (this$,path){
if(cljs.core._EQ_.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontId","fontId",-474874285)], null))){
return spots.forms.design.message.set_font_id;
} else {
if(cljs.core._EQ_.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threeLine","threeLine",203582880)], null))){
return spots.forms.design.message.process_svg_preview;
} else {
return null;

}
}
}));
spots.forms.design.message.constructor$ = (function spots$forms$design$message$constructor(){
return spots.forms.design.message.__GT_DesignMessageForm.call(null,spots.forms.design.message.validator);
});
