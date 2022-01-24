let employees = [
    {
        name: 'John',
        salary: '400000'
    },
    {
        name: 'Elon',
        salary: "500000"
    },
    {
        name: 'Rock',
        salary: '250000'
    },
    {
        name: 'James',
        salary: '700000'
    }
]
let beforeSorting = "";
for(let em of employees){
    beforeSorting += `${em.name} - ₹${em.salary}\n`
}

document.getElementById('before-sorting').innerHTML = beforeSorting;

let sortedEmp = employees.sort((e1, e2) => {
    return e1.salary - e2.salary
});

let afterSorting =  "";
for(let em of employees){
    afterSorting += `${em.name} - ₹${em.salary}\n`
}
document.getElementById('after-sorting').innerHTML = afterSorting;