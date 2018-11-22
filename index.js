//Create the following class hierarchy: ( Person > Employee > Manager ) Please add properties and methods of your choice.
function Person(fname,lname,age){
    this.name = {
        'fname':fname,
        'lname':lname
    };
    this.age = age;
}
Person.prototype.info = function(){
    console.log(`My name is ${this.name.fname} ${this.name.lname} and my age is ${this.age}`);
}
function Employee(fname,lname,age,empId,salary){
    Person.call(this,fname,lname,age);
    this.empId = empId;
    this.salary = salary || '0';
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.contructor = Employee;
Employee.prototype.work = function(){   
    console.log(`My empId is ${this.empId} and my salary is ${this.salary}`);
}
function Manager(fname,lname,age,empId,salary,task){
    Employee.call(this,fname,lname,age,empId,salary);
    this.task = task || 'No task';
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.contructor = Manager;
Manager.prototype.lead = function(){
    console.log(`My task is ${this.task}`);
}
var objPerson = new Person('Avantika','Bharti','100');
objPerson.info();
var objEmp = new Employee('Rex','Smith','29','R12',);
objEmp.info();
objEmp.work();
var objMgr = new Manager('Anne','Tennyson','24','A56','9000000',);
objMgr.info();
objMgr.work();
objMgr.lead();