'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class SalesReport extends Model {
	table() {
		return 'sales_reports';
	}
}

module.exports = SalesReport;
