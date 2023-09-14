class Person
    properties,
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor extends Person
    properties,
        name,
        teaches,
    constructor,
        Professor(name, teaches),
    methods,
        grade(paper),
        introduceSelf(),

walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

class Student extends Person
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
        canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'

if (student.year > 1) {
    // allow the student into the class
  }

  if (student.canStudyArchery()) {
    // allow the student into the class
  }