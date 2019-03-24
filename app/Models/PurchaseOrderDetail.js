'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PurchaseOrderDetail extends Model {
	table() {
		return 'purchase_order_details';
	}

	purchaseOrder() {
		return this.belongsTo('App/Models/PurchaseOrder', 'purchase_order_id', 'id');
	}

	product() {
		return this.belongsTo('App/Models/Product');
	}

	inventoryTransactions() {
		return this.hasMany('App/Models/InventoryTransaction', 'inventory_id', 'purchase_order_id');
	}
}

module.exports = PurchaseOrderDetail;
