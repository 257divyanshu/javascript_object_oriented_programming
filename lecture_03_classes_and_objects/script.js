// 📍 declarations and expressions
// just like we have function declarations and function expressions
// we also have class declarations and class expressions
// class BankAccount {}; // a class declaration
// let BankAccount = class {}; // a class expression

// 📍 hoisting doesn't work for classes
// if we try to make an object from a class before defining that class then we will get :
// Uncaught ReferenceError: Cannot access 'BankAccount' before initialization

// 📍 hoisting works for normal functions
// greet(); // works because of hoisting
// function greet(){
//     console.log("hare krishna");
// }

// -----------------------------------------------------------------------------

// 📍 class and object examples

// class BankAccount{

//     // before we made the constructor function :
//     // customerName; // we'll receive it's value
//     // // either we can keep accountNumber empty for now
//     // accountNumber;
//     // // or we can assign it it's value right now
//     // // accountNumber = Date.now();
//     // balance = 0; // default value is 0


//     constructor(customerName,balance=0){
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }
//     // because we have made a constructor function now, we can comment those three lines off

//     deposit(depositBalance){ // function keyword isn't needed here
//         this.balance += depositBalance;
//     };

//     withdraw(withdrawBalance){
//         this.balance -= withdrawBalance;
//     };

// };
// // const bankAccount1 = new BankAccount("Divyanshu Sahu",30000);
// const bankAccount1 = new BankAccount("Divyanshu Sahu");
// console.log(bankAccount1);
// bankAccount1.deposit(30000);
// bankAccount1.withdraw(10000);
// console.log(bankAccount1);
// // the syntax of class doesn't have ()
// // where we can receive the arguments
// // for receiving arguments, we have a special method named constructor

// -----------------------------------------------------------------------------

// classes are syntactic sugar
// under the hook javascript uses constructor functions only
// classes were introduced in es6