// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.payment');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('forms.validator');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
goog.require('spots.domain.stripe');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('spots.domain.cupcake_design');
goog.require('oops.core');
spots.forms.payment.validator = forms.validator.validator.call(null,cljs.core.PersistentArrayMap.EMPTY);
spots.forms.payment.assoc_stripe_token = (function spots$forms$payment$assoc_stripe_token(card,form_data){
return promesa.core.promise.call(null,(function (resolve,reject){
var target_obj_27141 = (function (){var target_obj_27145 = spots.domain.stripe.stripe_client;
var _STAR_runtime_state_STAR_27149 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27145,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27147 = [target_obj_27145,(function (){var next_obj_27148 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27145,(0),"createToken",true))?(target_obj_27145["createToken"]):null);
return next_obj_27148;
})()];
var fn_27146 = (call_info_27147[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27146,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27146 == null))){
return fn_27146.call((call_info_27147[(0)]),card);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27149;
}})();
var _STAR_runtime_state_STAR_27150 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27141,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27143 = [target_obj_27141,(function (){var next_obj_27144 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27141,(0),"then",true))?(target_obj_27141["then"]):null);
return next_obj_27144;
})()];
var fn_27142 = (call_info_27143[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27142,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27142 == null))){
return fn_27142.call((call_info_27143[(0)]),((function (call_info_27143,fn_27142,_STAR_runtime_state_STAR_27150,target_obj_27141){
return (function (result){
var error_message = (function (){var target_obj_27151 = result;
var _STAR_runtime_state_STAR_27154 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27151,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27152 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27151,(1),"error",true))?(target_obj_27151["error"]):null);
if(!((next_obj_27152 == null))){
var next_obj_27153 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27152,(1),"message",true))?(next_obj_27152["message"]):null);
if(!((next_obj_27153 == null))){
return next_obj_27153;
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27154;
}})();
if(cljs.core.truth_(error_message)){
return reject.call(null,cljs.core.ex_info.call(null,error_message,cljs.core.PersistentArrayMap.EMPTY));
} else {
return resolve.call(null,cljs.core.assoc.call(null,form_data,new cljs.core.Keyword(null,"stripe-token","stripe-token",-2083260199),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,(function (){var target_obj_27155 = result;
var _STAR_runtime_state_STAR_27157 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27155,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27156 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27155,(0),"token",true))?(target_obj_27155["token"]):null);
return next_obj_27156;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27157;
}})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))));
}
});})(call_info_27143,fn_27142,_STAR_runtime_state_STAR_27150,target_obj_27141))
);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27150;
}}));
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
spots.forms.payment.PaymentForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.payment.PaymentForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.payment.PaymentForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27159,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27163 = k27159;
var G__27163__$1 = (((G__27163 instanceof cljs.core.Keyword))?G__27163.fqn:null);
switch (G__27163__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27159,else__9607__auto__);

}
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.payment.PaymentForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27158){
var self__ = this;
var G__27158__$1 = this;
return (new cljs.core.RecordIter((0),G__27158__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.payment.PaymentForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.payment.PaymentForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1921875732 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27160,other27161){
var self__ = this;
var this27160__$1 = this;
return (!((other27161 == null))) && ((this27160__$1.constructor === other27161.constructor)) && (cljs.core._EQ_.call(null,this27160__$1.validator,other27161.validator)) && (cljs.core._EQ_.call(null,this27160__$1.__extmap,other27161.__extmap));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.payment.PaymentForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27158){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27164 = cljs.core.keyword_identical_QMARK_;
var expr__27165 = k__9612__auto__;
if(cljs.core.truth_(pred__27164.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27165))){
return (new spots.forms.payment.PaymentForm(G__27158,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.payment.PaymentForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27158),null));
}
});

spots.forms.payment.PaymentForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27158){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.payment.PaymentForm(self__.validator,G__27158,self__.__extmap,self__.__hash));
});

spots.forms.payment.PaymentForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.payment.PaymentForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.payment.PaymentForm.cljs$lang$type = true;

spots.forms.payment.PaymentForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.payment/PaymentForm");
});

spots.forms.payment.PaymentForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.payment/PaymentForm");
});

spots.forms.payment.__GT_PaymentForm = (function spots$forms$payment$__GT_PaymentForm(validator){
return (new spots.forms.payment.PaymentForm(validator,null,null,null));
});

spots.forms.payment.map__GT_PaymentForm = (function spots$forms$payment$map__GT_PaymentForm(G__27162){
return (new spots.forms.payment.PaymentForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27162),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27162,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.payment.PaymentForm,(function (this$,app_db,form_props){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null));
}));
spots.forms.payment.validate_and_create_order = (function spots$forms$payment$validate_and_create_order(data,total_price){
var clean_data = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data),new cljs.core.Keyword(null,"cardHoldersName","cardHoldersName",-1132515274)),new cljs.core.Keyword(null,"stripe-card","stripe-card",1655943658)),new cljs.core.Keyword(null,"cc-errors","cc-errors",1203340949));
return promesa.core.map.call(null,((function (clean_data){
return (function (_){
return spots.util.gql_api.gql_req.call(null,spots.gql.create_order_m,spots.util.gql_api.wrap_request.call(null,clean_data));
});})(clean_data))
,spots.util.gql_api.wrap_validation.call(null,spots.util.gql_api.gql_req.call(null,spots.gql.validate_order_payment_m,spots.util.gql_api.wrap_request.call(null,clean_data))));
});
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.payment.PaymentForm,(function (_,app_db,___$1,data){
var total_price = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489),new cljs.core.Keyword(null,"total","total",1916810418)], null));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (total_price){
return (function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(assoc-stripe-token (:stripe-card data) data)",new cljs.core.Keyword(null,"val","val",128701612),spots.forms.payment.assoc_stripe_token.call(null,new cljs.core.Keyword(null,"stripe-card","stripe-card",1655943658).cljs$core$IFn$_invoke$arity$1(data),data)], null);
});})(total_price))
,((function (total_price){
return (function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(validate-and-create-order value total-price)",new cljs.core.Keyword(null,"val","val",128701612),spots.forms.payment.validate_and_create_order.call(null,value,total_price)], null);
});})(total_price))
], null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (total_price){
return (function (value,app_db__$1,___$2,error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"nil",new cljs.core.Keyword(null,"val","val",128701612),null], null);
});})(total_price))
], null)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_error,spots.forms.payment.PaymentForm,(function (this$,app_db,form_props,data,error){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.payment.PaymentForm,(function (this$,app_db,form_props,data){
var res = new cljs.core.Keyword(null,"createOrder","createOrder",-1271084841).cljs$core$IFn$_invoke$arity$1(data);
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n (:valid res)\n (pipeline!\n  [value app-db]\n  (pp/commit! (assoc-in app-db [:kv :show-paid-modal] true))))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(res))?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,form_data){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :show-paid-modal] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110)], null),true))], null);
});})(res,form_data))
], null)], null)):null)], null);
});})(res,form_data))
], null)], null));
}));
spots.forms.payment.constructor$ = (function spots$forms$payment$constructor(){
return spots.forms.payment.__GT_PaymentForm.call(null,spots.forms.payment.validator);
});
