let user = {
    name: "Mike",
    age: 30
};

user.sayHi = function() {
    alert("Hello!");

};

user.sayHi(); //Hello!

// orrrrr

let user = {
// ....    
};

//first, declare
function sayHi(){
    alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

user = {
    sayHi: function(){
        alert("Hello");
    }
};

user = {
    sayHi(){
        alert("hello");
    }
};


let user = {
    name: "Mike",
    age: 30,

    sayHi(){
        //"this" is the "current object"
        alert(this.name);
    }
};
user.sayHi(); //Mike


let user = {
    name: "Mike",
    age: 30,
  
    sayHi() {
      alert(user.name); // "user" instead of "this"
    }
  
  };

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( user.name ); // leads to an error
    }
  
  };
  
  
  let admin = user;
  user = null; // overwrite to make things obvious
  
  admin.sayHi(); // TypeError: Cannot read property 'name' of null