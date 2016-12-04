UPDATE cart
SET cart_product_quantity=$1, cart_product_price=cart_product_quantity*product_price, cart_total_price=SUM(cart_product_price)
