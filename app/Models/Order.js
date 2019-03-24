'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Order extends Model {
	employee() {
		return this.belongsTo('App/Models/employee');
	}

	customer() {
		return this.belongsTo('App/Models/Customer');
	}

	shipper() {
		return this.belongsTo('App/Models/Shipper');
	}

	taxStatus() {
		return this.belongsTo('App/Models/OrderTaxStatus', 'tax_status_id', 'id');
	}

	status() {
		return this.belongsTo('App/Models/OrderStatus', 'status_id', 'id');
	}
}

module.exports = Order;
