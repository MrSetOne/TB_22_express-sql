# TB_22_express-sql

<!-- CREATE TABLE IF NOT EXISTS products_has_categories (
  id INT NOT NULL AUTO_INCREMENT,
  products_id INT NOT NULL,
  categories_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_products_has_categories_products
    FOREIGN KEY (products_id)
    REFERENCES products (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_products_has_categories_categories
    FOREIGN KEY (categories_id)
    REFERENCES categories (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE) -->