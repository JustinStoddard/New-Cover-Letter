var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.addToList = function() {
    var list =   document.getElementById("people");
    var li = document.createElement('li');
    li.innerHTML = this.firstName + ", " + this.lastName;
    list.appendChild(li);  
  }
  
  Person.prototype.logPerson = function() {
    console.log(this.firstName + " " + this.lastName + " created");
  }
  
  function addPerson() {
    var input1 = document.getElementById('first_name');
    var input2 = document.getElementById('last_name');
    var person = new Person(input1.value, input2.value);
    person.addToList();
    person.logPerson();
    input1.value = null;
    input2.value = null;
  }

