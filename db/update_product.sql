UPDATE product
SET name = $2, image_url = $3, price = $4
WHERE id = $1
returning *;