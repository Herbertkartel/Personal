document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;

    var student = {
        name: name,
        age: age,
        grade: grade
    };

    addStudent(student);
    clearForm();
});

function addStudent(student) {
    // Make a POST request to the backend API to add the student
    // Replace the API_URL with the actual URL of your backend API endpoint
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayStudent(data.student);
        }
    })
    .catch(error => console.error(error));
}

function displayStudent(student) {
    var studentsList = document.getElementById('students');
    var listItem = document.createElement('li');
    listItem.textContent = student.name + ' (Age: ' + student.age + ', Grade: ' + student.grade + ')';
    studentsList.appendChild(listItem);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
}
