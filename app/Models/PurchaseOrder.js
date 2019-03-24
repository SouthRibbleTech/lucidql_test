'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PurchaseOrder extends Model {
	table() {
		return 'purchase_orders';
	}

	supplier() {
		return this.belongsTo('App/Models/Supplier');
	}

	employee() {
		return this.belongsTo('App/Models/Employee', 'created_by', 'id');
	}

	status() {
		return this.belongsTo('App/Models/PurchaseOrderStatus', 'status_id', 'id');
	}
}

module.exports = PurchaseOrder;
