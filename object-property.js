const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannnnaaaa'},
    {id: 41, name: 'Porimoniii'},
    {id: 71, name: 'Deep Jol'},

]

const studentsName = [];

for(let i =0; i<students.length; i++){
    const element = students[i];
    const name = element["name"];
    studentsName.push(name);
}

console.log(studentsName);

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
console.log(names);
console.log(ids);
console.log(bigger);