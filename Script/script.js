// Sample data for demonstration purposes
var students = [
    { studentId: "101", name: "John Doe", age: 18, grade: 12 },
    { studentId: "102", name: "Jane Smith", age: 17, grade: 11 }
];

// Function to add a student to the table
function addStudent() {
    var studentId = document.getElementById("studentId").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    var table = document.getElementById("studentTableBody");
    var row = table.insertRow();
    row.insertCell().innerHTML = studentId;
    row.insertCell().innerHTML = name;
    row.insertCell().innerHTML = age;
    row.insertCell().innerHTML = grade;

    // Clear input fields after adding the student
    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}

// Function to display the existing students in the table
function displayStudents() {
    var table = document.getElementById("studentTableBody");
    students.forEach(function(student) {
        var row = table.insertRow();
        row.insertCell().innerHTML = student.studentId
