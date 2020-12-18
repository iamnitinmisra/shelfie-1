INSERT INTO product 
(name, img_url, price)
VALUES
($1, $2, $3)
returning *;