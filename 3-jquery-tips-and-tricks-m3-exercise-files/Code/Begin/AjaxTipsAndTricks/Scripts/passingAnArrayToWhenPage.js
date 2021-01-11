var passingAnArrayToWhenPage = function () {
    var urlBase = "http://localhost:38129/api/customers",
        //Monitors promises and completes or fails when both are done or one has failed
        init = function () {
            var custID = 1;
            dataService.getCustomerAndOrders(custID)
            .done(function (customerData, ordersData) {
                //Process data
                var cust = customerData[0];
                var orders = ordersData[0];
                $('#customerName').html([cust.FirstName, cust.LastName].join(' '));
                $('#orderCount').html(orders.length)
            })
            .fail(function (jqXHR, textStatus, err) {
                alert(["error using $.when(): ", err].join(' '));
            });
        }

    return {
        init: init
    };
}();