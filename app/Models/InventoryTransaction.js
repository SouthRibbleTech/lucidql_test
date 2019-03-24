'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class InventoryTransaction extends Model {
	table() {
		return 'inventory_transactions';
	}
	transactionType() {
		return this.belongsTo('App/Models/InventoryTransactionType', 'transaction_type', 'id');
	}

	product() {
		return this.belongsTo('App/Models/Product');
	}

	purchaseOrder() {
		return this.belongsTo('App/Modles/PurchaseOrder', 'purchase_order_id', 'id');
	}

	customerOrder() {
		return this.belongsTo('App/Models/Order', 'customer_order_id', 'id');
	}
}

module.exports = InventoryTransaction;
