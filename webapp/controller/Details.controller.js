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
		},
		onEdit: function () {
			this.byId("name").setEnabled(true);
			this.byId("location").setEnabled(true);
			this.byId("edit").setVisible(false);
			this.byId("save").setVisible(true);
		},
		onSave: function () {
			this.byId("name").setEnabled(false);
			this.byId("location").setEnabled(false);
			this.byId("edit").setVisible(true);
			this.byId("save").setVisible(false);
		}
	});
});