'use strict';

hrApp.factory('CommonResourcesFactory', function() {
        var baseUrl = "http://localhost:8080/app/mvc/";
        return {
            findAllDepartmentsUrl: baseUrl + "departments/all",
            findAllEmployeesUrl: baseUrl + "employees/all",
            findAllJobsUrl: baseUrl + "jobs/all",
            findAllLocationsUrl: baseUrl + "locations/all",
            findOneDepartmentUrl: baseUrl + "departments/one",
            findOneEmployeeUrl: baseUrl + "employees/one",
            findOneJobUrl: baseUrl + "jobs/one",
            findOneLocationUrl: baseUrl + "locations/one",
            deleteDepartmentUrl: baseUrl + "departments/one",
            deleteEmployeeUrl: baseUrl + "employees/one",
            deleteJobUrl: baseUrl + "jobs/one",
            deleteLocationUrl: baseUrl + "locations/one",
            addDepartmentUrl: baseUrl + "departments/one",
            addEmployeeUrl: baseUrl + "employees/one",
            addJobUrl: baseUrl + "jobs/one",
            addLocationUrl: baseUrl + "locations/one",
            editDepartmentUrl: baseUrl + "departments/one",
            editEmployeeUrl: baseUrl + "employees/one",
            editJobUrl: baseUrl + "jobs/one",
            editLocationUrl: baseUrl + "locations/one"
        };
    }
);