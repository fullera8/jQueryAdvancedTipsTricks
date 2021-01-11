var dataService = function () {
    var urlBase = 'http://localhost:38129/api/customers',

    authenticate = function (authToken) {

    },

    getCustomers = function () {
        //Don't do anything with the data, immediatly return the promise, then decide what to do with it in 
        // getCustomers(). Now function just gets data, doesn't know what to do with it and can be reused
        return $.getJSON(urlBase)
    },

    //promise update
    updateCustomer = function (cust) {
        return $.ajax({
            url: urlBase + '/' + cust.ID,
            data: cust,
            type: 'PUT'
        });
    },

    getCustomer = function (id) {
        return $.getJSON(urlBase + '/' + id);
    },

    getCustomerJSONP = function (id) {
        return $.getJSON(urlBase + '/' + id + '?callback=?');
    },

    insertCustomer = function (cust) {
        return $.ajax({
            url: urlBase,
            data: cust,
            type: 'POST'
        });
    },

    deleteCustomer = function (id) {
        return $.ajax({
            url: urlBase + '/' + id,
            type: 'DELETE'
        });
    },

    getOrders = function (id) {
        return $.getJSON(urlBase + '/' + id + '/orders');
    };

    return {
        authenticate: authenticate,
        getCustomers: getCustomers, //wires up api call
        updateCustomer: updateCustomer, //wires up api call
        getCustomer: getCustomer,
        getCustomerJSONP: getCustomerJSONP,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders
    };
}();