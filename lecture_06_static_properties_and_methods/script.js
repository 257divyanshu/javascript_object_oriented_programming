// example demonstrating use of static methods for configuration purposes
// class Config{
//     static userName = "userName";
//     static dbPassword = "secretPassword";
//     static apiToken = "secretToken"
// }
// // since applications generally have one fixed configuration
// // we don't need to create multiple instances of this Config class
// console.log(Config.userName);
// console.log(Config.apiToken);
// console.log(Config.dbPassword);

// ------------------------------------------------------------------------------

// example demonstrating use of static methods for creating utility functions
class User{
    // id; // normal property
    static id = 1; // static property
    static cache = {
        1: "one",
    };
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }
    normalCheckCache(){
        // console.log(this.cache); // will log undefined // because the instance doesn't have any property named cache
        console.log(User.cache); // this will work
    }
    static checkCache(){
        console.log(this.cache);
    }
    static hasInCache(){
        // console.log(this.cache); // we can access static properties inside static methods using the this keyword
        this.checkCache(); // this also works the similar way
    }
    static compareByAge(user1,user2){
        return user1.age - user2.age;
    }
    static compareByIncome(user1,user2){
        return user1.income - user2.income;
    }
    static { // static block // runs only once when a static method is called // second call of a staic method won't run this
        console.log("static block");
    }
}
const user1 = new User("Divyanshu",23,5000)
// const user2 = new User("Deepak",24,1000)
// const user3 = new User("Chinu",22,7000)
// // console.log(user1);
// // console.log(user2);
// // console.log(user3);

// // - we want to sort the users age wise
// // const users = [user1,user2,user3];
// // console.log(users);
// // users.sort((a,b)=>a.age-b.age);
// // - sort() function modifies the original array in place and also returns the sorted array
// // console.log(users);

// // now we will use a static method to do the sorting work
// // const users = [user1,user2,user3];
// // users.sort(User.compareByAge);
// // console.log(users);

// // sorting by income
// // const users = [user1,user2,user3];
// // users.sort(User.compareByIncome);
// // console.log(users);

// // now, we want a functionality that assigns an id to every uses, also the id should increment for every new user
// // don't create an id variable outside the class and keep incrementing it inside the constructor function
// console.log(user1);
// console.log(user2);
// console.log(user3);

User.hasInCache();
// User.hasInCache();
User.checkCache();

// user1.normalCheckCache();

// Math.random()
// in the Math class
// random is a static method
// it is an example of utility function
// similarly in case of Object.hasOwnProperty(), the Object Class has a static method named hasOwnProperty


// ------------------------------------------------------------------------------

// to use static properties and methods, we don't need to create instances of classes
// static methods are used for configuration purposes, caching purposes, utility functions
// static properties and methods are associated to the class itself