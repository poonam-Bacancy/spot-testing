// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.message');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.ui');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.stylesheets.colors');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.modals');
goog.require('spots.domain.cupcake_design');
goog.require('spots.util.gql_api');
goog.require('oops.core');
goog.require('spots.ui.components.svg_preview');
goog.require('spots.util.helpers');
spots.ui.components.message.render_three_line_options = (function spots$ui$components$message$render_three_line_options(helpers,form_state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-12","div.col.col-12",307867302),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr3","div.inline-block.mr3",-1892374914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Flat Text",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),false], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Curved",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First line",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"firstLine","firstLine",-51539625)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Second line",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Third line",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214)], null)], null)], null);
});
spots.ui.components.message.render_single_line_options = (function spots$ui$components$message$render_single_line_options(helpers,form_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-12","div.col.col-12",307867302),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr2","div.inline-block.mr2",479144107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Small",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"textSize","textSize",524775797),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),"small"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr2","div.inline-block.mr2",479144107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Medium",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"textSize","textSize",524775797),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Large",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"textSize","textSize",524775797),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your text",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124)], null)], null)], null);
});
spots.ui.components.message.render = (function spots$ui$components$message$render(ctx){
var id = cljs.core.get_in.call(null,keechma.toolbox.ui.route_GT_.call(null,ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"design-message","design-message",-641954377),id], null);
var form_state = cljs.core.deref.call(null,keechma.toolbox.forms.helpers.form_state.call(null,ctx,form_props));
var helpers = keechma.toolbox.forms.helpers.make_component_helpers.call(null,ctx,form_props);
var font = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"font","font",-1506159249));
var colors = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"colors","colors",1157174732));
var three_line_QMARK_ = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"threeLine","threeLine",203582880));
var first_line = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"firstLine","firstLine",-51539625));
var second_line = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124));
var third_line = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214));
var curved = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"curved","curved",1164242293));
var text_size = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"textSize","textSize",524775797));
var font_list = cljs.core.map.call(null,((function (id,form_props,form_state,helpers,font,colors,three_line_QMARK_,first_line,second_line,third_line,curved,text_size){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null);
});})(id,form_props,form_state,helpers,font,colors,three_line_QMARK_,first_line,second_line,third_line,curved,text_size))
,font);
var colors_list = cljs.core.map.call(null,((function (id,form_props,form_state,helpers,font,colors,three_line_QMARK_,first_line,second_line,third_line,curved,text_size,font_list){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null);
});})(id,form_props,form_state,helpers,font,colors,three_line_QMARK_,first_line,second_line,third_line,curved,text_size,font_list))
,colors);
var font_id = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"fontId","fontId",-474874285));
var font_family = spots.util.helpers.get_font_name.call(null,font_id,font);
var color_id = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"colorId","colorId",935519260));
var color = spots.util.helpers.get_color_hex.call(null,color_id,colors);
var map__27829 = helpers;
var map__27829__$1 = ((((!((map__27829 == null)))?((((map__27829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27829):map__27829);
var set_value = cljs.core.get.call(null,map__27829__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var submit = cljs.core.get.call(null,map__27829__$1,new cljs.core.Keyword(null,"submit","submit",-49315317));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.flex.flex-column","form.flex.flex-column",1435514763),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex.justify-between.items-center","div.clearfix.flex.justify-between.items-center",-1185884846),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-5","div.col.col-5",1078562827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.caps","h3.caps",1424740072),"Choose a style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-12","div.col.col-12",307867302),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr3","div.inline-block.mr3",-1892374914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Three Line Text",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"threeLine","threeLine",203582880),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Single Line Text",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"threeLine","threeLine",203582880),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"value","value",305978217),false], null)], null)], null)], null),(cljs.core.truth_(three_line_QMARK_)?spots.ui.components.message.render_three_line_options.call(null,helpers,form_state):spots.ui.components.message.render_single_line_options.call(null,helpers,form_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex.justify-around","div.clearfix.flex.justify-around",-2070585678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-5.inline-block.mr1","div.col.col-5.inline-block.mr1",1424930280),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.dropdown_input,ctx,form_state,form_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"fontId","fontId",-474874285),new cljs.core.Keyword(null,"label","label",1718410804),"Font",new cljs.core.Keyword(null,"values","values",372645556),font_list], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-7.inline-block","div.col.col-7.inline-block",782180655),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.dropdown_input,ctx,form_state,form_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"colorId","colorId",935519260),new cljs.core.Keyword(null,"label","label",1718410804),"Color",new cljs.core.Keyword(null,"values","values",372645556),colors_list], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-5.flex","div.col.col-5.flex",876358291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row-reverse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._message_design_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle.flex.items-center.justify-around","div.circle.flex.items-center.justify-around",-1630304926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.svg_preview.render,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"three-line?","three-line?",-169415760),three_line_QMARK_,new cljs.core.Keyword(null,"curved","curved",1164242293),curved,new cljs.core.Keyword(null,"first-line","first-line",285094849),first_line,new cljs.core.Keyword(null,"text-size","text-size",-945618309),text_size,new cljs.core.Keyword(null,"second-line","second-line",1744640763),second_line,new cljs.core.Keyword(null,"third-line","third-line",-558463853),third_line,new cljs.core.Keyword(null,"font-family","font-family",-667419874),font_family,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.mt2.c-gray-l.center.z4.flex.justify-center","footer.mt2.c-gray-l.center.z4.flex.justify-center",-248760427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,"Add Message"], null)], null)], null);
});
spots.ui.components.message.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.components.message.render,new cljs.core.Keyword(null,"topic","topic",-1960480691),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"colors","colors",1157174732)], null)], null));