document.addEventListener("DOMContentLoaded", () => {
    // Load employee data from JSON file
    fetch("employeeData.json")
      .then(response => response.json())
      .then(data => {
        // Initialize gallery with the first employee
        showEmployee(data.employees[0]);
  
        // Handle navigation buttons
        document.getElementById("nav-buttons").addEventListener("click", event => {
          if (event.target.id === "prev-btn") {
            showPrevEmployee();
          } else if (event.target.id === "next-btn") {
            showNextEmployee();
          }
        });
      })
      .catch(error => {
        console.error("Error loading employee data:", error);
      });
  });
  
  function showEmployee(employee) {
    // Update employee information in the UI
    document.getElementById("employee-name").textContent = employee.name;
    document.getElementById("employee-position").textContent = `Position: ${employee.position}`;
    document.getElementById("employee-department").textContent = `Department: ${employee.department}`;
    document.getElementById("employee-experience").textContent = `Experience: ${employee.experience} years`;
  
    // Update employee image in the UI
    document.getElementById("employee-image").src = employee.image;
  }
  
  function showPrevEmployee() {
    // Implement logic to show the previous employee
    // (you need to keep track of the current index in the employee array)
  }
  
  function showNextEmployee() {
    // Implement logic to show the next employee
    // (you need to keep track of the current index in the employee array)
  }
  