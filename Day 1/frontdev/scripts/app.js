/**
 * Created by user on 23.06.2016.
 */
var employeeList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class="table table-hover"><tr><th>First Name</th>' +
        '<th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th></tr>';

    for(var i in employeeList) {
        myTable += '<tr><td>' +employeeList[i].firstName+ '</td><td>'
            +employeeList[i].lastName+ '</td><td>'
            +employeeList[i].phone+ '</td><td>'
            +employeeList[i].salary+ '</td><td>'
            +'<button type="button" onclick="viewRow(' +i +')" class="btn btn-default">Vizualizare</button></td>'
            +'<td><button type="button" onclick="deleteRow(' +i +')" class="btn btn-default">Stergere</button> </td></tr>';
    }
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function showSalary() {
    var salaryTotal = 0;

    for (var i in employeeList) {
        salaryTotal += employeeList[i].salary;
    }
    document.getElementById('salarytotal').innerHTML = salaryTotal;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firsName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseInt(document.getElementById("salary").value);

    employeeList.push(new Employee(firsName, lastName, phone, salary));
    showList();
    showSalary();
}

function deleteLast() {

    employeeList.pop();
    showList();
    showSalary();
}

function viewRow(index) {

    alert("First Name: " +employeeList[index].firstName +"\n"
        + "Last Name: " +employeeList[index].lastName +"\n"
        + "Phone: " +employeeList[index].phone +"\n"
        + "Salary: " +employeeList[index].salary + "\n");
}

function deleteRow(index) {

    employeeList.splice(index, 1);
    showList();
    showSalary();
}