sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("home.kpmg.exercise4.controller.List", {

		onInit: function () {

		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("details", {

				eventPath: window.encodeURIComponent(oItem.getBindingContext()
					.getPath()
					.substr(1))
			});
		}

	});

});