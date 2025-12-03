import { rerenderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cartClass.js';


rerenderOrderSummary();
//renderPaymentSummary();
class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
const user1 = new User(1234, "hamxa", "gamail");
console.log(user1);
class Admin extends User{
    constructor(id , name, email, permissions){
        super(id, name, email);
        this.permissions = permissions;
    }
}
const Admin1 = new Admin(1337, "hamxa", "@gmail.com", "verifies");
class superman extends Admin{
    constructor(id , youSkills){
        super(id);
        this.yourSkilles = youSkills;
    }
}
const hero1 = new superman("1234", "spiderman");
console.log(hero1);