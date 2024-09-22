//Task Zero

//initialization of Employees this was given on the assignment page

//const employees = [

//{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
//{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    
//{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    
//{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
//];

//Task one

console.log("Task one"); //add for better console readability

const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
        
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
        
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
        
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] },

    { name: 'Jessie', shifts:[{ day:"Saturday", hours: 10}, {day: "Sunday", hours: 8 }] }
        
    ];

    console.log("Employee Data:",employees);

    //Task Two

    console.log("Task Two"); //add for better console readability

    function displayEmployeeShifts(employees, name) {
        employees.forEach(employee => {
            if (employee.name === name) {
                console.log('${employee.name}'); //the '' makes it work?
                employee.shifts.forEach(shift => {
                    console.log(`Assigned Shifts: ${shift.day}, Hours Worked: ${shift.hours}`);
                });
            }
        });
    }

//displaying employee shift data
displayEmployeeShifts(employees, "John");
displayEmployeeShifts(employees, "Sara");
displayEmployeeShifts(employees, "David");
displayEmployeeShifts(employees, "Emily");
displayEmployeeShifts(employees, "Jessie");

//Task Three

console.log("Task Three"); //added for better console readability

   function assignShift(employeeName, day, hours){
        for(let employee of employees){
            if(employee.name === employeeName){
                const currentShift = employee.shifts.find (shift => shift.day ===day);
                if (currentShift){
                    console.log(`${employeeName} Already scheduled for ${day}`);
                    return; }
                    employee.shifts.push({day,hours});
                        console.log(`${employeeName} Schdule update for ${day} ${hours} hrs`);
                            return;
             }};
        }

        //testing the function
assignShift("John", "Saturday", 8);
assignShift("Sara", "Saturday", 8);
assignShift("David", "Saturday", 8);
assignShift("Emily", "Saturday", 8);
assignShift("Jessie", "Saturday", 8);
console.log("Weekly Schedule:", employees);