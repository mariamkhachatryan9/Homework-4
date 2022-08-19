// Create a class Product with properties name, type, and price

// Create a class ShoppingCart
// ● In ShoppingCart, define a method addProduct(product)
// In ShoppingCart, define a method removeProduct(product)
// ● In ShoppingCart, define a method totalPrice(), that returns the total amount of
// the products it contains.
// ● Now let's say that, if you buy 5 products or more, you have a 10% discount. Change
// totalPrice to reflect this calculation.
// ● Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils)
// you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8
// pencils you only pay 6, etc. Change totalPrice so it considers the free items you
// get. Notice that if you buy 3 pencils you just pay for the 3 of them.
// ● Sometimes a product is sold out and has to be replaced by a new one. Add a method
// replace(productName, replacementProduct) that looks for products with
// productName and replaces them with new instances of the product like
// replacementProduct. Notice that productName is a string, and
// replacementProduct is a Product


class Product {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;

    }
}

class ShoppingCart {
    constructor(product = []) {
        this.productMap = new Map();
        if (product.length === 0) {
            return;
        }
        for (let i = 0; i < product.length; i++) {
            if (this.productMap.has(product[i])) {
                let count = this.productMap.get(product[i]);
                this.productMap.set(product[i], ++count);
            } else {
                this.productMap.set(product[i], 1);
            }
        }
    }

    addProduct(product) {
        if (this.productMap.has(product)) {
            let count = this.productMap.get(product);
            this.productMap.set(product, ++count);
        } else {
            this.productMap.set(product, 1);
        }
    }

    removeProduct(product) {
        if (this.productMap.has(product)) {
            let count = this.productMap.get(product);
            if (count > 1) {
                this.productMap.set(product, --count);
            } else {
                this.productMap.delete(product);
            }
        } else {
            throw new Error("there is not that type product");
        }
    }
    
    totalPrice() {
        let price = 0;
        let productsCount = 0;
        let products = this.productMap.keys();

        for (let i = 0; i < products.length; i++) {
            let count = this.productMap.get(products[i]);
            productsCount += count;
            price += count * products[i].price;
        }
        if (productsCount >= 5) {
            price -= price * 0.1;
        }
        for (let i = 0; i < products.length; i++) {
            let count = this.productMap.get(products[i]);
            let freeProduct = Math.floor(count / 4);
            price -= (freeProduct) * products[i].price;
        }
        return price;
    }
}

