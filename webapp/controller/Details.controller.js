sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";
	return Controller.extend("home.kpmg.exercise4.controller.Details", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("details")
				.attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView()
				.bindElement({
					path: "/" + window.decodeURIComponent(oEvent.getParameter(
							"arguments")
						.eventPath)

				});
		}
	});
});