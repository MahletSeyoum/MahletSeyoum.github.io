// question # 1
console.log()
let count=(function (){

    let count =0;
    const add =function (n){
        count+=n;
    }
    const reset=function(n){
        count=0;
    }

    return {
        theAdd: add,
        thereset: reset
    };
    })();


//question #2 In the definition of the add() function in the code for the question 1, 
//identify the “free” variable. Also write down a definition of what “free” variables are.
console.log(count);
var add =(function(){
    var counter=0;
    return function(){
       return counter+=1;
    }
})();

// answer:free variables: are variables that are neither locally declared nor passed 
// as parameter. in the above add() function the variable "count" is free vaiable 
// since it not declared inside the inner function but it's being used there.



// Question #3
let make_adder={
    incr: function(inc){console.log(add());}
}
make_adder.incr(5);
let incr5=make_adder.incr.bind(null);
incr5(5);console.log(add(5));
make_adder.incr(5);
let incr7=make_adder.incr.bind(null);
incr5(7);console.log(add(7));



// question #4: What simple modification to the JavaScript file can remove all the names from the 
// Global namespace?
// answer: IIFE: declaring and immediately calling an anonymous function at the same time
// can avoid name space /name collisions and collisions



//question #5
let emp= (function(){
    let name="mike";
    let age=30;
    let salary=1000000;
    function getName(){
        return name;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function setName(name2){
      emp.name=name;
    }
    function setAge(age){
       emp.age=age;
    }
    function setSalary(salary2){
       emp.salary=salary;
    }
return{
    emp1:name,age,salary,
    gn:getName,
    sn:setName,
    ga:getAge,
    sa:setAge,
    gs:getSalary,
    ss:setSalary

};

})();
console.log(emp);
emp.gn();
emp.ga();

//question #6
let employee= (function(){
    let name="mike";
    let age=30;
    let salary=1000000;
    let address="1000 N st 52557";
    function setAddress(address){
        return address;
    }
    function getAddress(){
        employee.address1=address;
    }
    function getName(){
        return name;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function setName(name2){
        employee.name=name;
    }
    function setAge(age){
        employee.age=age;
    }
    function setSalary(salary2){
        employee.salary=salary;
    }

return{
   address1:address,
   sa:setAddress,
    ga:getAddress
};

})();
console.log(employee);
employee.sa();
employee.ga();