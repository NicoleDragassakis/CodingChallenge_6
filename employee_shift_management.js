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
                const currentShift = employee.shifts.find (shift => shift.day ===day); //locates employee by na,e
                if (currentShift){
                    console.log(`${employeeName} Already scheduled for ${day}`); //logs error if already on the schedule
                    return; }
                    employee.shifts.push({day,hours});
                        console.log(`${employeeName} Schdule update for ${day} ${hours} hrs`); //adds new day to their schedule
                            return;
             }};
        }

        //testing the function
assignShift("John", "Saturday", 8);
assignShift("Sara", "Saturday", 8);
assignShift("David", "Saturday", 8);
assignShift("Emily", "Saturday", 8);
assignShift("Jessie", "Saturday", 8);
console.log("Weekly Schedule:", employees); //output is correct

//Task four

console.log("Task Four"); //for better console readability

function calculateTotalHours (employeeName){
let employee=employees.find(employee => employee.name === employeeName);
return employee.shifts.reduce((total,shift)=> total+shift.hours,0);
}

//to test the function
let totalHoursJohn = calculateTotalHours("John");
console.log(`Total hours for John: ${totalHoursJohn}`); //outputs 22

let totalHoursSara = calculateTotalHours("Sara");
console.log(`Total hours for Sara: ${totalHoursSara}`);//outputs 20

let totalHoursDavid = calculateTotalHours("David");
console.log(`Total hours for David: ${totalHoursDavid}`);//outputs 16

let totalHoursEmily = calculateTotalHours("Emily");
console.log(`Total hours for Emily: ${totalHoursEmily}`);//outputs 16

let totalHoursJessie = calculateTotalHours("Jessie");
console.log(`Total hours for Jessie: ${totalHoursJessie}`);//outputs 18
