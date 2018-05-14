// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.user_info');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('forms.validator');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('spots.domain.cupcake_design');
goog.require('promesa.core');
goog.require('spots.domain.form_helpers');
goog.require('clojure.string');
spots.forms.user_info.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fullName","fullName",-202600044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),spots.forms.validators.email_QMARK_], null)], null),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone","phone",-763596057),spots.forms.validators.phone_QMARK_], null)], null)], null));

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
spots.forms.user_info.UserInfoForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.user_info.UserInfoForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27788,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27792 = k27788;
var G__27792__$1 = (((G__27792 instanceof cljs.core.Keyword))?G__27792.fqn:null);
switch (G__27792__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27788,else__9607__auto__);

}
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.user-info.UserInfoForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27787){
var self__ = this;
var G__27787__$1 = this;
return (new cljs.core.RecordIter((0),G__27787__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.user_info.UserInfoForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (2023895925 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27789,other27790){
var self__ = this;
var this27789__$1 = this;
return (!((other27790 == null))) && ((this27789__$1.constructor === other27790.constructor)) && (cljs.core._EQ_.call(null,this27789__$1.validator,other27790.validator)) && (cljs.core._EQ_.call(null,this27789__$1.__extmap,other27790.__extmap));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.user_info.UserInfoForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27787){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27793 = cljs.core.keyword_identical_QMARK_;
var expr__27794 = k__9612__auto__;
if(cljs.core.truth_(pred__27793.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27794))){
return (new spots.forms.user_info.UserInfoForm(G__27787,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.user_info.UserInfoForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27787),null));
}
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27787){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.user_info.UserInfoForm(self__.validator,G__27787,self__.__extmap,self__.__hash));
});

spots.forms.user_info.UserInfoForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.user_info.UserInfoForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.user_info.UserInfoForm.cljs$lang$type = true;

spots.forms.user_info.UserInfoForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.user-info/UserInfoForm");
});

spots.forms.user_info.UserInfoForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.user-info/UserInfoForm");
});

spots.forms.user_info.__GT_UserInfoForm = (function spots$forms$user_info$__GT_UserInfoForm(validator){
return (new spots.forms.user_info.UserInfoForm(validator,null,null,null));
});

spots.forms.user_info.map__GT_UserInfoForm = (function spots$forms$user_info$map__GT_UserInfoForm(G__27791){
return (new spots.forms.user_info.UserInfoForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27791),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27791,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.format_attr_with,spots.forms.user_info.UserInfoForm,(function (this$,path){
var G__27797 = path;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908)], null),G__27797)){
return spots.domain.form_helpers.format_phone;
} else {
return null;

}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.user_info.UserInfoForm,(function (this$,app_db,form_props){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.user_info.UserInfoForm,(function (_,app_db,___$1,data){
return spots.util.gql_api.wrap_validation.call(null,spots.util.gql_api.gql_req.call(null,spots.gql.validate_order_personal_information_m,spots.util.gql_api.wrap_request.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data))));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_error,spots.forms.user_info.UserInfoForm,(function (this$,app_db,form_props,data,error){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.user_info.UserInfoForm,(function (this$,app_db,form_props,data){
var res = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(data);
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n (:valid res)\n (pipeline!\n  [value app-db]\n  (pp/commit! (assoc-in app-db [:kv :order-form] form-data))\n  (pp/send-command!\n   [forms-core/id-key :mount-form]\n   [:order-info :form])\n  (pp/commit! (assoc-in app-db [:kv :form-progress :order-info] true))\n  (pp/redirect! {:page \"order-info\"})))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(res))?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,form_data){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :order-form] form-data))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null),form_data))], null);
});})(res,form_data))
,((function (res,form_data){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [forms-core/id-key :mount-form] [:order-info :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-info","order-info",1576812499),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(res,form_data))
,((function (res,form_data){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :form-progress :order-info] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543),new cljs.core.Keyword(null,"order-info","order-info",1576812499)], null),true))], null);
});})(res,form_data))
,((function (res,form_data){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! {:page \"order-info\"})",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"order-info"], null))], null);
});})(res,form_data))
], null)], null)):null)], null);
});})(res,form_data))
], null)], null));
}));
spots.forms.user_info.constructor$ = (function spots$forms$user_info$constructor(){
return spots.forms.user_info.__GT_UserInfoForm.call(null,spots.forms.user_info.validator);
});
