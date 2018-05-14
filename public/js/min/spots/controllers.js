// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.controllers');
goog.require('cljs.core');
goog.require('spots.forms');
goog.require('spots.controllers.image_upload');
goog.require('spots.controllers.clipart');
goog.require('keechma.toolbox.forms.controller');
goog.require('keechma.toolbox.forms.mount_controller');
goog.require('spots.controllers.modal');
goog.require('spots.controllers.init');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('spots.datasources');
goog.require('spots.edb');
spots.controllers.controllers = keechma.toolbox.dataloader.controller.register.call(null,keechma.toolbox.forms.mount_controller.register.call(null,keechma.toolbox.forms.controller.register.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image-upload","image-upload",-1506272457),spots.controllers.image_upload.controller,new cljs.core.Keyword(null,"clipart","clipart",-2064250491),spots.controllers.clipart.controller,new cljs.core.Keyword(null,"modal","modal",-1031880850),spots.controllers.modal.controller,new cljs.core.Keyword(null,"init","init",-1875481434),spots.controllers.init.controller], null),spots.forms.forms),spots.forms.forms_params),spots.datasources.datasources,spots.edb.edb_schema);
