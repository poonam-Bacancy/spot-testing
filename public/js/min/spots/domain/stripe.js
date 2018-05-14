// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.domain.stripe');
goog.require('cljs.core');
goog.require('oops.core');
spots.domain.stripe.Stripe = (function (){var target_obj_27131 = window;
var _STAR_runtime_state_STAR_27133 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27131,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27132 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27131,(0),"Stripe",true))?(target_obj_27131["Stripe"]):null);
return next_obj_27132;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27133;
}})();
spots.domain.stripe.stripe_client = spots.domain.stripe.Stripe.call(null,"pk_test_10XG1kA381lKP4snJ9OGm8S8");
spots.domain.stripe.stripe_elements = (function (){var target_obj_27134 = spots.domain.stripe.stripe_client;
var _STAR_runtime_state_STAR_27138 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27134,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27136 = [target_obj_27134,(function (){var next_obj_27137 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27134,(0),"elements",true))?(target_obj_27134["elements"]):null);
return next_obj_27137;
})()];
var fn_27135 = (call_info_27136[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27135,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27135 == null))){
return fn_27135.call((call_info_27136[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27138;
}})();
