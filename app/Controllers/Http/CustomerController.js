'use strict';
const Customer = use('App/Models/Customer');
const edge = require('edge.js')
const moment = require('moment')
class CustomerController {
	async index({ view }) {
    edge.global('shortDate', (value)=>{
      return moment(value).format("DD MMM YYYY")
    })
    const customers = await Customer.query().where('id', 1).first()
    await customers.loadMany(['orders'])
    console.log(customers.toJSON())
		return view.render('welcome', { customers: [customers.toJSON()] });
	}
}

module.exports = CustomerController;
