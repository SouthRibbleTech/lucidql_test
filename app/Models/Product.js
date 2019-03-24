'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
	orders() {
		return this.hasMany('App/Models/Order');
	}

	purchaseOrderLines() {
		return this.hasMany('App/Models/PurchaseOrderDetail', 'id', 'product_id');
	}
}

module.exports = Product;
