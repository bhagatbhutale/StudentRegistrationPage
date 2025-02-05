// Empty Array Create 
let students = JSON.parse(localStorage.getItem('students')) || [];

function updateStudentTable() {
  const tableBody = document.querySelector('#studentsTable tbody');
  tableBody.innerHTML = ''; 

  // Add student in table
  students.forEach((student, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.rollNo}</td>
      <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  // Save into Local storage 
  localStorage.setItem('students', JSON.stringify(students));
}

// add data in table
document.getElementById('submitButton').addEventListener('click', function () {
  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();
  const studentClass = document.getElementById('studentClass').value.trim();
  const studentRollNo = document.getElementById('studentRollNo').value.trim();

  // validate
  if (!studentId || !studentName || !studentClass || !studentRollNo) {
    alert('All fields must be filled!');
    return;
  }

  // Create new student object
  const newStudent = {
    id: studentId,
    name: studentName,
    class: studentClass,
    rollNo: studentRollNo,
  };

  // Add new student to the array
  students.push(newStudent);

  // Update the table and localStorage
  updateStudentTable();

  document.getElementById('studentId').value = '';
  document.getElementById('studentName').value = '';
  document.getElementById('studentClass').value = '';
  document.getElementById('studentRollNo').value = '';
});

// .// Function to delete student record
function deleteStudent(index) {
  students.splice(index, 1); 
  updateStudentTable(); 
}

// Edit data 
function editStudent(index) {
  const student = students[index];

  document.getElementById('studentId').value = student.id;
  document.getElementById('studentName').value = student.name;
  document.getElementById('studentClass').value = student.class;
  document.getElementById('studentRollNo').value = student.rollNo;

  // Remove the student record for editing
  deleteStudent(index);
}
updateStudentTable();



