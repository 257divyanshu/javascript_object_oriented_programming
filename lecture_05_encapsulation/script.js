class BankAccount{
    #balance = 0; // necessary for making the balance a private member, skipping this will throw : Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
    constructor(customerName,balance=0){
        this.customerName = customerName;
        // this.balance = balance;
        // this._balance = balance;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }
    deposit(depositAmount){
        // this.balance += depositAmount
        // this._balance += depositAmount
        this.#balance += depositAmount
    }
    withdraw(withdrawAmount){
        // this.balance -= withdrawAmount
        // this._balance -= withdrawAmount
        this.#balance -= withdrawAmount
    }
    // setBalance(newBalance){ // setter using normal methods // old way
    //     if(!isNaN(newBalance)){
    //         // this.balance = newBalance;
    //         this.#balance = newBalance;
    //     }
    // }
    // getBalance(){ // getter using normal methods // old way
    //     // return this.balance;
    //     return this.#balance;
    // }
    set balance(newBalance){
        if(!isNaN(newBalance)){
            this.#balance = newBalance;
        }
    }
    get balance(){
        return this.#balance;
    }
}
class CurrentAccount extends BankAccount{
    constructor(customerName,balance=0){
        super(customerName,balance);
        this.transactionLimit = 50000;
        // console.log("creating an object from CurrentAccount class");
        // console.log(this.#balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
    }
    // calculateInterest(amount){
    #calculateInterest(amount){
        console.log("calculating interest");
    }
    takeBusinessLoan(loanAmount){
        // this.calculateInterest(loanAmount);
        this.#calculateInterest(loanAmount);
        console.log(`taking business loan of ${loanAmount}`);
    }
}
const currentBankAccount1 = new CurrentAccount('Divyanshu Sahu',100000);
// console.log(currentBankAccount1);
// currentBankAccount1.balance = 1000; // this is the probelm! // balance shouldn't be accessible here
// currentBankAccount1._balance = 1000; // that underscore doesn't provided any protection, it's just a convention
// console.log(currentBankAccount1);

// the concept of private member specifier can solve this issue
// earlier, when this concept wasn't rolled out
// developers used to follow a convention
// of starting private member with a _
// like using _balance instead of balance
// but this was just a convention
// we could still change the balance

// If you're writing simple JavaScript (ES6 and above): Version 1 is totally fine and widely compatible, you can skip those declarations at the top
// If you prefer more structured code, or you’re using TypeScript or modern JS features, go with Version 2, you can keep those declaration at the top

// In JavaScript, to make a class property private, you need to use the # syntax, and it must be declared outside the constructor (i.e., at the top of the class body)

// we can access private properties within the methods of the class
// but we cannot access them outside the class

// testing the setters and getters build using normal methods
// currentBankAccount1.setBalance(200000);
// currentBankAccount1.setBalance("abc");
// console.log(currentBankAccount1);
// console.log(currentBankAccount1.getBalance());

// testing the setters and getters build using
// console.log(currentBankAccount1.balance);
// currentBankAccount1.balance = 300000;
// console.log(currentBankAccount1.balance);

// private properties cannot be accessed inside the subclasses or children classes

// see the calculatingInterest() method inside the CurrentAccount class
// we are calling it inside the takeBusinessLoan() method of the CurrentAccount class
// currentBankAccount1.takeBusinessLoan(3000);
// currentBankAccount1.calculateInterest(3000);

// we don't want to expose the calculateInterest() function outside the class
// so we'll make it a private method

// we used getters and setter to access and modify the private properties