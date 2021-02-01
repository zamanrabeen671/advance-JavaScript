const Student = [
    {id: 21, Name: "Skip Khan"},
    {id: 30, Name: "moyori"},
    {id: 50, Name: "Dipjol"}
]
const student = Student.map(s => s.Name);
const ids = Student.filter(s => s.id > 40);
console.log(student);
console.log(ids);