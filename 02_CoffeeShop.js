// Create a constructor CoffeeShop, which has three properties:
// ● name : a string (basically, of the shop)
// ● menu : an array of items (of object type), with each item containing the item (name of
// the item), type (whether food or a drink) and price.
// ● orders : an empty array
// and seven methods:
// ● addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu. Otherwise, return "This item is currently unavailable!"

// ● fulfillOrder: if the orders array is not empty, return "The {item} is ready!".
// If the orders array is empty, return "All orders have been fulfilled!"
// ● listOrders: returns the list of orders taken, otherwise, an empty array.
// ● dueAmount: returns the total amount due for the orders taken.
// ● cheapestItem: returns the name of the cheapest item on the menu.
// ● drinksOnly: returns only the item names of type drink from the menu.
// ● foodOnly: returns only the item names of type food from the menu.
// IMPORTANT:
// Orders are fulfilled in a FIFO (first-in, first-out) order.
// Notes:
// You can create another constructor for menu items.


class CoffeeShop {
    constructor(name = "", menu, orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }

    addOrder(order) {
        const item = this.menu.items.find(item => item.name === order.name && item.type === order.type);
        if (item !== undefined) {
            this.orders.push(item);
            return "Order added!"
        } else {
            throw new Error("This item is currently unavailable!");
        }
    }
    fulfillOrder() {
        const length = this.orders.length;
        if (length !== 0) {
            const item = this.orders.pop();
            return "The" + JSON.stringify(item) + " is ready!"
        } else {
            return "All orders have been fulfilled!"
        }
    }
    listOrders() {
        return this.orders;
    }

    dueAmount() {
        let amount = 0;
        for (let i = 0; i < this.orders.length; i++) {
            amount += this.orders[i].price;
        }
        return amount;
    }
    cheapestItem() {
        let cheapestItem = this.menu.items[0];
        for (let i = 0; i < this.menu.length; i++) {
            if (cheapestItem.price > this.menu.items[i].price) {
                cheapestItem = this.menu.items[i];
            }
        }
        return cheapestItem;
    }
    drinksOnly() {
        this.menu.items.filter(item => item.type === "drink")
    }
    foodOnly() {
        this.menu.items.filter(function (item) {
            return item.type === "food";
        })
    }
}


class Item {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Menu {
    constructor(items) {
        this.items = items;
    }
}

class Order {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}


let items = [new Item("iced coffee", "drink", 1500), new Item("steak", "food", 5000)];
let menu = new Menu(items);
let coffeshop = new CoffeeShop("Coffee", menu, [])


console.log(coffeshop.addOrder(new Order("iced coffee", "drink"))) //➞ "Order added!"
console.log(coffeshop.listOrders()) //➞ [  ]
console.log(coffeshop.dueAmount()) //➞ 2.17
console.log(coffeshop.fulfillOrder()) //➞ "The cinnamon roll is ready!"
console.log(coffeshop.listOrders()) //➞[]
console.log(coffeshop.cheapestItem()) //➞ "lemonade"
console.log(coffeshop.drinksOnly()) //➞["orange juice", "lemonade", "cranberry juice",
console.log(coffeshop.foodOnly()) //["tuna sandwich", "ham and cheese sandwich", "bacon
