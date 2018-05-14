// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.recipient');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.edb');
goog.require('forms.validator');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('clojure.string');
goog.require('spots.domain.cupcake_design');
goog.require('spots.domain.form_helpers');
goog.require('oops.core');
goog.require('spots.util.helpers');
spots.forms.recipient.moment = (function spots$forms$recipient$moment(var_args){
var G__27101 = arguments.length;
switch (G__27101) {
case 1:
return spots.forms.recipient.moment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spots.forms.recipient.moment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spots.forms.recipient.moment.cljs$core$IFn$_invoke$arity$1 = (function (date_str){
return spots.forms.recipient.moment.call(null,date_str,null);
});

spots.forms.recipient.moment.cljs$core$IFn$_invoke$arity$2 = (function (date_str,fmt){
return moment(date_str,fmt);
});

spots.forms.recipient.moment.cljs$lang$maxFixedArity = 2;

spots.forms.recipient.address_part_not_empty_QMARK_ = (function spots$forms$recipient$address_part_not_empty_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core.not_EQ_.call(null,"pickup",shipping_method)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return true;
}
});
spots.forms.recipient.is_delivery_QMARK_ = (function spots$forms$recipient$is_delivery_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core._EQ_.call(null,"manhattan_delivery",shipping_method)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return true;
}
});
spots.forms.recipient.pickup_fields_not_empty_QMARK_ = (function spots$forms$recipient$pickup_fields_not_empty_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core._EQ_.call(null,"pickup",shipping_method)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return true;
}
});
spots.forms.recipient.phone_part_not_empty_QMARK_ = (function spots$forms$recipient$phone_part_not_empty_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core.not_EQ_.call(null,"pickup",shipping_method)){
var and__8904__auto__ = spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
if(cljs.core.truth_(and__8904__auto__)){
return spots.forms.validators.phone_QMARK_.call(null,value,form_data,path);
} else {
return and__8904__auto__;
}
} else {
return true;
}
});
spots.forms.recipient.doorman_part_not_empty_QMARK_ = (function spots$forms$recipient$doorman_part_not_empty_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
var building_type = new cljs.core.Keyword(null,"buildingTypeId","buildingTypeId",937877519).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core._EQ_.call(null,"manhattan_delivery",shipping_method)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return true;
}
});
spots.forms.recipient.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"orderType","orderType",-1327411288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"deliveryWindow","deliveryWindow",-536355900),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.recipient.is_delivery_QMARK_], null)], null),new cljs.core.Keyword(null,"recipientName","recipientName",-2050589830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.recipient.address_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"recipientPhoneNumber","recipientPhoneNumber",-840846021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone","phone",-763596057),spots.forms.recipient.phone_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"buildingTypeId","buildingTypeId",937877519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.recipient.address_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.recipient.pickup_fields_not_empty_QMARK_], null)], null)], null));
spots.forms.recipient.date_format = "YYYY-MM-DD HH:mm";
spots.forms.recipient.format_date = (function spots$forms$recipient$format_date(date,time,format){
var date_time = spots.forms.recipient.moment.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)].join(''),"MM-DD-YYYY HH:mm");
var target_obj_27103 = date_time;
var _STAR_runtime_state_STAR_27107 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27103,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27105 = [target_obj_27103,(function (){var next_obj_27106 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27103,(0),"format",true))?(target_obj_27103["format"]):null);
return next_obj_27106;
})()];
var fn_27104 = (call_info_27105[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27104,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27104 == null))){
return fn_27104.call((call_info_27105[(0)]),format);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27107;
}});
spots.forms.recipient.format_date_without_time = (function spots$forms$recipient$format_date_without_time(date,format){
var date_time = spots.forms.recipient.moment.call(null,date,"MM-DD-YYYY HH:mm");
var target_obj_27108 = date_time;
var _STAR_runtime_state_STAR_27112 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27108,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27110 = [target_obj_27108,(function (){var next_obj_27111 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27108,(0),"format",true))?(target_obj_27108["format"]):null);
return next_obj_27111;
})()];
var fn_27109 = (call_info_27110[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27109,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27109 == null))){
return fn_27109.call((call_info_27110[(0)]),format);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27112;
}});
spots.forms.recipient.set_pickup_time = (function spots$forms$recipient$set_pickup_time(data,date,time){
var time__$1 = cljs.core.subs.call(null,time,(0),(cljs.core.count.call(null,time) - (2)));
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848),spots.forms.recipient.format_date.call(null,date,time__$1,spots.forms.recipient.date_format)),new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730)),new cljs.core.Keyword(null,"deliveryWindow","deliveryWindow",-536355900)),new cljs.core.Keyword(null,"deliveryStartingAt","deliveryStartingAt",1593559470)),new cljs.core.Keyword(null,"deliveryEndingAt","deliveryEndingAt",-671283924));
});
spots.forms.recipient.set_delivery_times = (function spots$forms$recipient$set_delivery_times(data,date,time){
var start_time = ((cljs.core._EQ_.call(null,"9:30AM - 12:30PM",time))?"09:30":"12:30");
var end_time = ((cljs.core._EQ_.call(null,"9:30AM - 12:30PM",time))?"12:30":"15:30");
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"deliveryStartingAt","deliveryStartingAt",1593559470),spots.forms.recipient.format_date.call(null,date,start_time,spots.forms.recipient.date_format)),new cljs.core.Keyword(null,"deliveryEndingAt","deliveryEndingAt",-671283924),spots.forms.recipient.format_date.call(null,date,end_time,spots.forms.recipient.date_format)),new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730)),new cljs.core.Keyword(null,"deliveryWindow","deliveryWindow",-536355900)),new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848));
});
spots.forms.recipient.set_shipping_times = (function spots$forms$recipient$set_shipping_times(data,date){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"deliveryStartingAt","deliveryStartingAt",1593559470),spots.forms.recipient.format_date_without_time.call(null,date,spots.forms.recipient.date_format)),new cljs.core.Keyword(null,"deliveryEndingAt","deliveryEndingAt",-671283924),spots.forms.recipient.format_date_without_time.call(null,date,spots.forms.recipient.date_format)),new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730)),new cljs.core.Keyword(null,"deliveryWindow","deliveryWindow",-536355900)),new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848));
});
spots.forms.recipient.prepare_shipping_method = (function spots$forms$recipient$prepare_shipping_method(data){
var shipping_date = new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730).cljs$core$IFn$_invoke$arity$1(data);
var pickup_time = new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848).cljs$core$IFn$_invoke$arity$1(data);
var delivery_window = new cljs.core.Keyword(null,"deliveryWindow","deliveryWindow",-536355900).cljs$core$IFn$_invoke$arity$1(data);
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(data);
var G__27113 = shipping_method;
switch (G__27113) {
case "pickup":
return spots.forms.recipient.set_pickup_time.call(null,data,shipping_date,pickup_time);

break;
case "shipping":
return spots.forms.recipient.set_shipping_times.call(null,data,shipping_date);

break;
default:
return spots.forms.recipient.set_delivery_times.call(null,data,shipping_date,delivery_window);

}
});
spots.forms.recipient.gift_message_processor = (function spots$forms$recipient$gift_message_processor(app_db,form_props,form_state,path,value){
var trimmed_value = (function (){var or__8916__auto__ = value;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})();
return cljs.core.assoc_in.call(null,form_state,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),path),cljs.core.subs.call(null,trimmed_value,(0),(function (){var x__9275__auto__ = cljs.core.count.call(null,trimmed_value);
var y__9276__auto__ = (160);
return ((x__9275__auto__ < y__9276__auto__) ? x__9275__auto__ : y__9276__auto__);
})()));
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
spots.forms.recipient.RecipientForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.recipient.RecipientForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27116,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27120 = k27116;
var G__27120__$1 = (((G__27120 instanceof cljs.core.Keyword))?G__27120.fqn:null);
switch (G__27120__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27116,else__9607__auto__);

}
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.recipient.RecipientForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27115){
var self__ = this;
var G__27115__$1 = this;
return (new cljs.core.RecordIter((0),G__27115__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.recipient.RecipientForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-653979569 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27117,other27118){
var self__ = this;
var this27117__$1 = this;
return (!((other27118 == null))) && ((this27117__$1.constructor === other27118.constructor)) && (cljs.core._EQ_.call(null,this27117__$1.validator,other27118.validator)) && (cljs.core._EQ_.call(null,this27117__$1.__extmap,other27118.__extmap));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.recipient.RecipientForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27115){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27121 = cljs.core.keyword_identical_QMARK_;
var expr__27122 = k__9612__auto__;
if(cljs.core.truth_(pred__27121.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27122))){
return (new spots.forms.recipient.RecipientForm(G__27115,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.recipient.RecipientForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27115),null));
}
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27115){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.recipient.RecipientForm(self__.validator,G__27115,self__.__extmap,self__.__hash));
});

spots.forms.recipient.RecipientForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.recipient.RecipientForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.recipient.RecipientForm.cljs$lang$type = true;

spots.forms.recipient.RecipientForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.recipient/RecipientForm");
});

spots.forms.recipient.RecipientForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.recipient/RecipientForm");
});

spots.forms.recipient.__GT_RecipientForm = (function spots$forms$recipient$__GT_RecipientForm(validator){
return (new spots.forms.recipient.RecipientForm(validator,null,null,null));
});

spots.forms.recipient.map__GT_RecipientForm = (function spots$forms$recipient$map__GT_RecipientForm(G__27119){
return (new spots.forms.recipient.RecipientForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27119),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27119,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.recipient.RecipientForm,(function (this$,app_db,form_props){
return cljs.core.assoc.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null)),new cljs.core.Keyword(null,"doorman","doorman",1206837379),false);
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.format_attr_with,spots.forms.recipient.RecipientForm,(function (this$,path){
var G__27125 = path;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipientPhoneNumber","recipientPhoneNumber",-840846021)], null),G__27125)){
return spots.domain.form_helpers.format_phone;
} else {
return null;

}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_attr_with,spots.forms.recipient.RecipientForm,(function (this$,path){
var G__27126 = path;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"giftMessage","giftMessage",-894570989)], null),G__27126)){
return spots.forms.recipient.gift_message_processor;
} else {
return null;

}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.recipient.RecipientForm,(function (_,app_db,___$1,data){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(wrap-validation\n (gql-req\n  validate-order-information-m\n  (wrap-request\n   (-> data (strip-local-data) (prepare-shipping-method)))))",new cljs.core.Keyword(null,"val","val",128701612),spots.util.gql_api.wrap_validation.call(null,spots.util.gql_api.gql_req.call(null,spots.gql.validate_order_information_m,spots.util.gql_api.wrap_request.call(null,spots.forms.recipient.prepare_shipping_method.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data)))))], null);
})], null)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.recipient.RecipientForm,(function (this$,app_db,form_props,data){
var res = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(data);
var data__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,data__$1){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n (:valid res)\n (pipeline!\n  [value app-db]\n  (pp/commit!\n   (assoc-in app-db [:kv :order-form] (prepare-shipping-method data)))\n  (pp/send-command!\n   [forms-core/id-key :mount-form]\n   [:personalization :form])\n  (pp/commit!\n   (assoc-in app-db [:kv :form-progress :personalization] true))\n  (pp/redirect! {:page \"personalization\"})))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(res))?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\n (assoc-in app-db [:kv :order-form] (prepare-shipping-method data)))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null),spots.forms.recipient.prepare_shipping_method.call(null,data__$1)))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command!\n [forms-core/id-key :mount-form]\n [:personalization :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"personalization","personalization",-90772288),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\n (assoc-in app-db [:kv :form-progress :personalization] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543),new cljs.core.Keyword(null,"personalization","personalization",-90772288)], null),true))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! {:page \"personalization\"})",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"personalization"], null))], null);
});})(res,data__$1))
], null)], null)):null)], null);
});})(res,data__$1))
], null)], null));
}));
spots.forms.recipient.constructor$ = (function spots$forms$recipient$constructor(){
return spots.forms.recipient.__GT_RecipientForm.call(null,spots.forms.recipient.validator);
});
