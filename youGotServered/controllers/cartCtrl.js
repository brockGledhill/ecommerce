var app = require('../index.js');
var db = app.get('db');

module.exports = {
    updateCart: function(req, res) {
        var params = [req.body.cart_product_quantity];
        db.cart.add_to_cart(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Cart has been updated.');
            });
    },
    getCart: function(req, res) {
        var id = [req.params.id];
        db.cart.read_cart(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    }
};
