'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PurchaseOrderStatus extends Model {
	table() {
		return 'purchase_order_status';
	}
}

module.exports = PurchaseOrderStatus;
