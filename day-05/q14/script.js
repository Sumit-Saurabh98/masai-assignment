function evaluateEmployees(employees) {
    const filtered = employees.filter(emp => emp.tasksCompleted > 5);

    const evaluated = filtered.map(emp => {
      let performance = "Needs Improvement";
      if (emp.rating > 4.5) {
        performance = "Excellent";
      } else if (emp.rating >= 3 && emp.rating <= 4.5) {
        performance = "Good";
      }
      return {
        name: emp.name,
        performance
      };
    });
  
    const performancePriority = {
      "Excellent": 3,
      "Good": 2,
      "Needs Improvement": 1
    };
  
    const sorted = evaluated.sort(
      (a, b) => performancePriority[b.performance] - performancePriority[a.performance]
    );
  
    return sorted;
  }
  