'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class OrderDetail extends Model {
	table() {
		return 'order_details';
	}

	order() {
		return this.belongsTo('App/Models/Order');
	}

	product() {
		return this.belongsTo('App/Models/Product');
	}

	status() {
		return this.belongsTo('App/Models/OrderStatus', 'status_id', 'id');
	}
}

module.exports = OrderDetail;
