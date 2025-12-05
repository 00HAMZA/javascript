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
console.log(acc.getbalance());
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
console.log(user1.username);
console.log(user1.checkpassword(12));
user1.changepassword(124, 1337);