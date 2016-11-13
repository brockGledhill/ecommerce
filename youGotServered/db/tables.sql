-- Admin can add/update/remove product on site.
-- Admin can add/update/remove product in admin cart.
-- Admin can add/update/remove customer profile.
-- Admin can add/update/remove product in customer cart.
-- Admin can add/update/remove customer order.
-- Admin can access payment_ID info.
CREATE TABLE admin (
  admin_ID                 INTEGER PRIMARY KEY NOT NULL,
  admin_name               VARCHAR(50) NOT NULL,
  admin_password           VARCHAR(20) NOT NULL,
  payment_ID               INTEGER REFERENCES payment NOT NULL,
  customer_ID              INTEGER REFERENCES customers NOT NULL,
  product_ID               INTEGER REFERENCES products NOT NULL,
  order_ID 			           INTEGER REFERENCES order_checkout NOT NULL,
  cart_ID                  INTEGER REFERENCES cart NOT NULL,
  confirmation_ID          INTEGER REFERENCES order_confirmation NOT NULL
);

CREATE TABLE products (
  product_ID               SERIAL PRIMARY KEY NOT NULL,
  product_name             VARCHAR(100) NOT NULL,
  product_description      VARCHAR(250) NOT NULL,
  product_image_URL        VARCHAR(300),
  product_price            VARCHAR(20) NOT NULL
);

-- Customer can create account through Facebook.
-- Customer can add/update/remove personal account.
-- Customer can add/update/remove product from cart.
-- Customer can add/update/remove product from order checkout.
CREATE TABLE customers (
  customer_ID 		         SERIAL PRIMARY KEY NOT NULL,
  customer_first_name 	   VARCHAR(40) NOT NULL,
  customer_last_name	     VARCHAR(40) NOT NULL,
  customer_password	       VARCHAR(40) NOT NULL,
  customer_facebook        VARCHAR(40),
  customer_email		       VARCHAR(80) NOT NULL,
  customer_phone		       VARCHAR(20),
  customer_address		     VARCHAR(80) NOT NULL,
  customer_city		         VARCHAR(40)  NOT NULL,
  customer_state		       VARCHAR(40) NOT NULL,
  customer_zip		         VARCHAR(12) NOT NULL,
  customer_country 		     VARCHAR(40) NOT NULL,
  customer_register_date   TIMESTAMP
);

-- Customer can choose to pay with paypal, apple pay, etc...
-- Customer can add/update/remove credit card info.
CREATE TABLE payment (
  payment_ID               SERIAL PRIMARY KEY NOT NULL,
  paypal                   VARCHAR(40) NOT NULL,
  card_name                VARCHAR(40) NOT NULL,
  card_number              VARCHAR(40) NOT NULL,
  card_expiration          VARCHAR(40) NOT NULL,
  card_security            VARCHAR(40) NOT NULL,
  customer_ID              INTEGER REFERENCES customers NOT NULL
);

-- Cart will grab the customer_ID.
-- Cart will grab product_ID and info to display.
-- Customer can change cart quantity of product.
CREATE TABLE cart (
  cart_ID                  SERIAL PRIMARY KEY NOT NULL,
  cart_product_quantity    INTEGER NOT NULL,
  cart_product_price       VARCHAR(40) NOT NULL,
  cart_total_price         VARCHAR(40) NOT NULL,
  customer_ID              INTEGER REFERENCES customers NOT NULL,
  product_ID               INTEGER REFERENCES products NOT NULL
);

-- Order will grab customer_ID, cart_ID, product_ID and display necessary info.
-- Customer will be able to select their customer_ID info as billing/shipping info.
-- Customer can choose to put in different billing/shipping info and saves as 'order_"info"'.
-- Customer can choose saved payment method.
CREATE TABLE orders (
  order_ID 		                   SERIAL PRIMARY KEY NOT NULL,
  order_first_name 	             VARCHAR(40) NOT NULL,
  order_last_name	               VARCHAR(40) NOT NULL,
  order_email		                 VARCHAR(80) NOT NULL,
  order_phone		                 VARCHAR(20),
  order_address		               VARCHAR(80) NOT NULL,
  order_city		                 VARCHAR(40)  NOT NULL,
  order_state		                 VARCHAR(40) NOT NULL,
  order_zip		                   VARCHAR(12) NOT NULL,
  order_country		               VARCHAR(40) NOT NULL,
  customer_ID                    INTEGER REFERENCES customers NOT NULL,
  product_ID                     INTEGER REFERENCES products NOT NULL,
  cart_ID                        INTEGER REFERENCES cart NOT NULL
);

CREATE TABLE order_confirmation (
  confirmation_ID                SERIAL PRIMARY KEY NOT NULL,
  order_ID 		                   INTEGER REFERENCES order_checkout NOT NULL,
  customer_ID                    INTEGER REFERENCES customers NOT NULL,
  product_ID                     INTEGER REFERENCES products NOT NULL
);
