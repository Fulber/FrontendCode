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
    myTable += '<tr class="info"><td>' +mostFrequentName() +'</td><td>' +uniqueNames()
        + '</td><td>'+'</td><td>' +averageSalary() +'</td></tr></table>';

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

function mostFrequentName() {
    var array = {};
    var maxCount = 0;
    var maxName;

    for (var i in employeeList) {

        array[employeeList[i].firstName] = (array[employeeList[i].firstName] || 0) + 1;
        if (array[employeeList[i].firstName] > maxCount) {
            maxCount = array[employeeList[i].firstName];
            maxName = employeeList[i].firstName;
        }
    }
    return maxName;
}

function uniqueNames() {
    var array = {};
    var count = 0;

    for (var i in employeeList) {

        if (array[employeeList[i].lastName] == undefined) {
            array[employeeList[i].lastName] = 0;
            count++;
        }
    }
    return count;
}

function averageSalary() {
    var sum = 0;

    for (var i in employeeList) {
        sum += employeeList[i].salary;
    }
    return sum / employeeList.length;
}

function compare1(x, y) {
    if (x.firstName < y.firstName)
        return -1;
    if (x.firstName > y.firstName)
        return 1;
    return 0;
}

function compare2(x, y) {
    if (x.lastName < y.lastName)
        return -1;
    if (x.lastName > y.lastName)
        return 1;
    return 0;
}

function compare3(x, y) {
    if (x.phone < y.phone)
        return -1;
    if (x.phone > y.phone)
        return 1;
    return 0;
}

function compare4(x, y) {
    if (x.salary < y.salary)
        return -1;
    if (x.salary > y.salary)
        return 1;
    return 0;
}

function sortBy() {
    var selectValue = document.getElementById("sortselect").value;

    switch(selectValue) {
        case "1": employeeList.sort(compare1);
                break;
        case "2": employeeList.sort(compare2);
                break;
        case "3": employeeList.sort(compare3);
            break;
        case "4": employeeList.sort(compare4);
            break;
    }
    showList();
}

function filterTable() {
    var copyList = employeeList;
    var filterValue = document.getElementById("filtervalue").value;

    employeeList = employeeList.filter(function(elem) {
        return elem.firstName  == filterValue || elem.lastName == filterValue ||
            elem.phone == filterValue || elem.salary == filterValue;
    });
    showList();
    employeeList = copyList;
}