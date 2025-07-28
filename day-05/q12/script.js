function processStudents(students) {
    return students
      .filter(student => student.marks > 60) 
      .sort((a, b) => b.marks - a.marks)
      .map(student => student.name);
  }
  