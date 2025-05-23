function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    // this.deposit = function (depositAmount) {
    //     this.balance += depositAmount;
    // }
    // this.withdraw = function (withdrawAmount) {
    //     this.balance -= withdrawAmount;
    // }
}

// creating obejcts : 
// const bankAccount1 = new BankAccount("Divyanshu Sahu");
// const bankAccount2 = new BankAccount("Chinu Sahu");
// logging obejcts : 
// console.log(bankAccount1);
// console.log(bankAccount2);
// understanding the problem : 
// both these objects have function definitions inside them
// those function are exactly same
// those objects should share such functions
// instead of occupying extra memory for storing those functions
// this problem can be solved by prototypes
// accessing the prototype of the constructor function
// console.log(BankAccount.prototype); // logs an object with a "constructor" and a "prototype"
// but BankAccount is a function
// so how can we use . on it
// because
// in javascript functions are also objects
// adding a property to the prototype :
// BankAccount.prototype.test = "this is a test";
// console.log(BankAccount.prototype); // a new "test" key got added to the object
// about the prototype property : 
// whenever a function is made in javascript
// javascript adds a property named "prototype" to the function

BankAccount.prototype.deposit = function (depositAmount) { // we can't use arrow functions here, because arrow functions don't have their own context
    this.balance += depositAmount;
};
BankAccount.prototype.withdraw = function (withdrawAmount) {
    this.balance -= withdrawAmount;
};
const bankAccount1 = new BankAccount("Divyanshu Sahu");
// console.log(bankAccount1); // now, this doesn't have any deposit or withdray
// bankAccount1.deposit(30000); // but this worked
// bankAccount1.withdraw(10000); // and this also worked
// console.log(bankAccount1);
// those two function worked even though bankAccount1 doesn't have them
// because the prototype of the BankAccount constructor has those two functions
// also, now, those functions aren't taking redundant memory inside every object
// those functions are being inherited from the prototype of their constructor function
// the prototype of BankAccount contains two functions, that prototype has protype set to Object
// console.log(bankAccount1);
// console.log(bankAccount1.prototype); // undefined
// console.log(BankAccount.prototype);
// console.log(BankAccount.prototype.prototype); // undefined
// console.log(BankAccount.prototype.constructor); // logs the BankAccount consturctor function