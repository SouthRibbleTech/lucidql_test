'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class OrderDetailStatus extends Model {
	table() {
		return 'order_details_status';
	}
}

module.exports = OrderDetailStatus;
