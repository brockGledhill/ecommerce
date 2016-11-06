-- Admin can add/update/remove product on site.
-- Admin can add/update/remove product in admin cart.
-- Admin can add/update/remove customer profile.
-- Admin can add/update/remove product in customer cart.
-- Admin can add/update/remove customer order.
CREATE TABLE admin (
  admin_ID                 INTEGER PRIMARY KEY NOT NULL,
  customer_ID              SERIAL FOREIGN KEY NOT NULL,
  customer_order_ID 			 SERIAL FOREIGN KEY NOT NULL,
);

Customer can add/update/remove personal profile.
Customer can add/update/remove product from cart.
Customer can add/update/remove product from order checkout.

CREATE TABLE customer (
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
  customer_countr 		     VARCHAR(40) NOT NULL,
  customer_register_date   TIMESTAMP,
  customer_cart_ID         SERIAL FOREIGN KEY NOT NULL
);

CREATE TABLE order (
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
  customer_countr 		     VARCHAR(40) NOT NULL,
  customer_register_date   TIMESTAMP,
  customer_order_ID 			 SERIAL FOREIGN KEY NOT NULL,
  customer_cart_ID         SERIAL FOREIGN KEY NOT NULL
);
