var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    connectionString = 'postgres://postgres:1234@localhost/ecommerce';
//maybe do express-session and passport and passport-facebook?

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../frontEnd'));

var massiveInstance = massive.connectSync({
    connectionString: connectionString
});

app.set('db', massiveInstance);

//Controllers\\
var adminCtrl = require('./controllers/adminCtrl'),
    productCtrl = require('./controllers/productCtrl'),
    cartCtrl = require('./controllers/cartCtrl'),
    customerCtrl = require('./controllers/customerCtrl'),
    orderCtrl = require('./controllers/orderCtrl');

//GET\\
app.get('/api/admin', adminCtrl.getAllAdmins);
app.get('/api/admin/:id', adminCtrl.getAdmin);

app.get('/api/products', productCtrl.getAllProducts);
app.get('/api/products/:id', productCtrl.getProduct);

app.get('/api/customers', customerCtrl.getAllCustomers);
app.get('/api/customers/:id', customerCtrl.getCustomer);

app.get('/api/cart', cartCtrl.getCart);

app.get('/api/orders', orderCtrl.getAllOrders);
app.get('/api/orders/:id', orderCtrl.getOrder);

//POST\\
app.post('/api/adimn', adminCtrl.createAdmin);
app.post('/api/products', productCtrl.createProduct);
// app.post('/api/cart', cartCtrl.addToCart);
app.post('/api/customers', customerCtrl.createCustomer);
app.post('/api/orders', orderCtrl.createOrder);

//PUT\\
app.put('api/admin', adminCtrl.updateAdmin);
app.put('/api/products', productCtrl.updateProduct);
app.put('/api/cart', cartCtrl.updateCart);
app.put('/api/customers', customerCtrl.updateCustomer);

//DELETE\\
app.delete('/api/admin', adminCtrl.deleteAdmin);
app.delete('/api/products/:id', productCtrl.deleteProduct);
app.delete('/api/customers', customerCtrl.deleteCustomer);

//Port\\
app.listen(8000, function() {
    console.log('I pity 8000 fools!');
});
