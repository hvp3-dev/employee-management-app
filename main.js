const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");

let employees = JSON.parse(localStorage.getItem("employees")) || [];

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      department: document.getElementById("department").value,
      position: document.getElementById("position").value
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee added successfully!");
    form.reset();
  });
}

function displayEmployees() {
  if (!table) return;

  table.innerHTML = "";

  if (employees.length === 0) {
    table.innerHTML = `<tr><td colspan="5">No employees found 😢</td></tr>`;
    return;
  }

  employees.forEach((emp, index) => {
    table.innerHTML += `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.phone}</td>
        <td>${emp.department}</td>
        <td>
          <button onclick="viewDetails(${index})">Details</button>
          <button class="edit" onclick="editEmployee(${index})">Edit</button>
          <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function viewDetails(index) {
  const emp = employees[index];
  alert(
    `Name: ${emp.name}
Email: ${emp.email}
Phone: ${emp.phone}
Department: ${emp.department}
Position: ${emp.position}`
  );
}

function editEmployee(index) {
  alert("Edit feature coming soon!");
}

function deleteEmployee(index) {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (confirmDelete) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
  }
}

displayEmployees();