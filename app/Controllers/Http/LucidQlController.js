'use strict';
const Customer = use('App/Models/Customer');
const Order = use('App/Models/Order');
const Employee = use('App/Models/Employee');
const Invoice = use('App/Models/Invoice');
const Promise = require('bluebird')
const classes = {
	__proto__: null, // to avoid people being able to pass something like `toString`
	Customer,
	Order,
	Employee,
	Invoice
};

class LucidQlController {
	async query({ request }) {
		var query = request.all();
		var baseTable = Object.keys(query)[0];

		var queryOptions = query[baseTable];
		var baseQuery = classes[baseTable].query();

		if (queryOptions.hasOwnProperty('fields')) {
			for (var f of queryOptions.fields) {
				baseQuery.select(`${f}`);
			}
		}

		if (queryOptions.hasOwnProperty('where')) {
			for (var w of queryOptions.where) {
        if(w.op === "=="){
          baseQuery.where(`${w.field}`, `${w.value}`);
        }
        if(w.op === "!=" || w.op === "<>" || w.op === "<" || w.op === ">"){
          baseQuery.where(`${w.field}`, `${w.op}`, `${w.value}`);
        }
        if(w.op === "null"){
          baseQuery.whereNull(`${w.field}`)
        }
        if(w.op === "notNull"){
          baseQuery.whereNotNull(`${w.field}`)
        }
        
			}
		}
    
		if (queryOptions.hasOwnProperty('with')) {
		  await Promise.each(queryOptions.with, (w)=>{
        return baseQuery.with(`${w.table}`, (builder) => {
          if (w.hasOwnProperty('fields')) {
            builder.select(w.fields);
          }
  
          if (w.hasOwnProperty('where')) {
            for (var v of w.where) {
              builder.where(`${Object.keys(v)[0]}`, `${Object.values(v)[0]}`);
            }
          }
        }).fetch();
      })
		}

		return await baseQuery.fetch();
	}
}

module.exports = LucidQlController;
