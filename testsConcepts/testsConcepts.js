import '../data/backendPractice.js';
// this keyword and stricts modes
class BankAccount{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }
    
    deposit(amount){
        this.#balance += amount;
    }
    getbalance(){
        return parseInt(this.#balance);
    }
};
const acc = new BankAccount(100);
class User{
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }
    checkpassword(input){
        return input === this.#password;
    }
    changepassword(oldpass, newpass){
        if(this.checkpassword(oldpass)){
            this.#password = newpass;
            console.log("you chaneg the password succefully !!");
        }else{
            console.log("wrogn password, cannot change");
        }
    }
}
const user1 = new  User("hamza", 1234);
class Koko{
    #privat; // private
    Public; // public
    constructor(Public, privat){
        this.Public = Public;
        this.#privat = privat;
    }
    getprivat(){
        return this.#privat;  
    }
}
const koko1 = new Koko("hamza", "password");