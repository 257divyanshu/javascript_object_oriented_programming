// --------------------------------------------------------------------------------------------------

// example : inheritance in classes

class BankAccount{
    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.balance = balance;
        this.accoountNumber = Date.now();
    }
    deposit(depositAmount){
        this.balance += depositAmount
    }
    withdraw(withdrawAmount){
        this.balance -= withdrawAmount
    }
}
class CurrentAccount extends BankAccount{
    transactionLimit = 50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }
    takeBusinessLoan(loanAmount){
        console.log(`taking business loan of ${loanAmount}`);
    }
}
class SavingsAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName,balance=0){
        super(customerName,balance);        
    }
    takePersonalLoan(loanAmount){
        console.log(`taking personal loan of ${loanAmount}`);
    }
}


const savingsBankAccount1 = new SavingsAccount("Divyanshu Sahu",100000);
const currentBankAccount1 = new CurrentAccount("Divyanshu Sahu",100000);

// console.log(savingsBankAccount1);
// savingsBankAccount1.deposit(10000);
// savingsBankAccount1.withdraw(5000);
// savingsBankAccount1.takePersonalLoan(20000);
console.log(savingsBankAccount1);
// const currentBankAccount1 = new CurrentAccount("Divyanshu Sahu",100000);
// console.log(currentBankAccount1);
// currentBankAccount1.deposit(10000);
// currentBankAccount1.withdraw(5000);
// currentBankAccount1.takeBusinessLoan(20000);
console.log(currentBankAccount1);

// --------------------------------------------------------------------------------------------------

// example : inheritance in constructor functions

// function BankAccount(customerName,balance=0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (depositAmount) {  // we cannot use arrow functions here
//     this.balance += depositAmount;
// };

// BankAccount.prototype.withdraw = function (withdrawAmount) {
//     this.balance -= withdrawAmount;
// };

// // const bankAccount1 = new BankAccount("Divyanshu Sahu",100000);
// // console.log(bankAccount1);

// function CurrentAccount(customerName,balance){
//     BankAccount.call(this,customerName,balance); // this is called constructor linking // for inheriting the properties from the BankAccount class
//     this.transactionLimit = 50000;
// }
// CurrentAccount.prototype = Object.create(BankAccount.prototype); // inheriting the prototype
// CurrentAccount.prototype.takeBusinessLoan = function (loanAmount) {
//     console.log(`taking business loan of ${loanAmount}`);
// }

// function SavingsAccount(customerName,balance){
//     BankAccount.call(this,customerName,balance);
//     this.transactionLimit = 10000;
// }
// SavingsAccount.prototype = Object.create(BankAccount.prototype);
// SavingsAccount.prototype.takePersonalLoan = function (loanAmount) {
//     console.log(`taking personal loan of ${loanAmount}`);
// }

// const savingsBankAccount1 = new SavingsAccount("Divyanshu Sahu",100000);
// // console.log(savingsBankAccount1);
// savingsBankAccount1.deposit(10000);
// savingsBankAccount1.withdraw(5000);
// savingsBankAccount1.takePersonalLoan(20000);
// // console.log(savingsBankAccount1);
// const currentBankAccount1 = new CurrentAccount("Divyanshu Sahu",100000);
// // console.log(currentBankAccount1);
// currentBankAccount1.deposit(10000);
// currentBankAccount1.withdraw(5000);
// currentBankAccount1.takeBusinessLoan(20000);
// // console.log(currentBankAccount1);

// // so in caes of constructor functions
// // first, we do constructor linking to inherit the properites
// // then, we inherit the prototype

// --------------------------------------------------------------------------------------------------

// dry principle - do not repeat yourself