SELECT product_name, product_description, product_price, product_image_URL
From products
WHERE product_id = $1;
