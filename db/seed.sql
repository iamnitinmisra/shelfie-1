DROP TABLE IF EXISTS product;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, 
    img_url TEXT, 
    price NUMERIC NOT NULL
);

INSERT INTO product 
(name, image_url, price)
VALUES
('shoes','https://get.pxhere.com/photo/shoe-leather-photography-glass-boot-leg-black-shoe-lace-close-up-footwear-macro-photography-55674.jpg' , 800.56),
('pants','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-691910437-1-1551118905.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*' ,56.45),
('jacket','https://assets.overland.com/is/image/overlandsheepskin/23801-lgg2-av4315?$style%2Dlg%2D2x$&id=GlIsL0&fmt=jpg&fit=constrain,1' ,239);