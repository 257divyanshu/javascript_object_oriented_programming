// 📍 example
// creating a constructor function :
function BankAccount(customerName,balance=0){ // naming convention : use PascalCase for constructor functions
    // adding properties : 
    this.customerName = customerName; // customerName is a property
    this.accountNumber = Date.now(); // we'll generate unique account number // accountNumber is a property
    this.balance = balance; // balance is a property
    // adding methods : 
    this.deposit = function(depositAmount){
        this.balance += depositAmount;
    }
    this.withdraw = function(withdrawAmount){
        this.balance -= withdrawAmount;
    }

}

// creating objects : 
// let myBankAccount1 = new BankAccount("Divyanshu Sahu",30000);
// let myBankAccount2 = new BankAccount("Chinu Sahu"); // 0 balance account
// logging those object : 
// console.log(myBankAccount1);
// console.log(myBankAccount2);
// checking type of those object : 
// console.log(typeof(myBankAccount1)); // object
// accessing those properties : 
// console.log(myBankAccount1.customerName);
// console.log(myBankAccount1.balance);
// console.log(myBankAccount1.accountNumber);
// modifying the value of a property : 
// myBankAccount1.balance = 10000;
// console.log(myBankAccount1.balance);
// checking the deposit function and withdraw function :
// myBankAccount1.deposit(30000);
// console.log(myBankAccount1.balance);
// myBankAccount1.withdraw(10000);
// console.log(myBankAccount1.balance);

// 
const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector('#balance');
accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value,+balance.value);
    accounts.push(account);
    console.log(accounts);
})
const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector('#amount');
depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // my way
    // for(let account of accounts){
    //     if(account.accountNumber == accountNumber.value){
    //         account.deposit(+amount.value);
    //         console.log(account);
    //     }
    //     else{
    //         console.log("no account with account number :",accountNumber.value);
    //     }
    // }
    // sir's way
    const account = accounts.find((account)=>account.accountNumber == +accountNumber.value);
    account.deposit(+amount.value);
    console.log(account);
})

// classes are syntactic sugar
// behind the scenes constructor functions are used
// to create an object we use the new keyword and then the name of the constructor function and then ()
// an object is an instance of a class

// 📍 about object oriented programming 
// object oriented programming is a programming paradigm
// other programming paradigms : functional and procedural
// paradigms -> styles