'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class InventoryTransactionType extends Model {
	table() {
		return 'inventory_transaction_types';
	}
}

module.exports = InventoryTransactionType;
