
// Array of student objects
var students = [ 
    {name: "John Doe", marks: 85, class: "10th", address: "123 Main St"},
    {name: "Jane Smith", marks: 90, class: "11th", address: "456 Elm St"},
    {name: "Tom Johnson", marks: 75, class: "9th", address: "789 Oak St"},
    {name: "Emily Davis", marks: 88, class: "12th", address: "321 Pine St"},
    {name: "Michael Brown", marks: 92, class: "10th", address: "654 Maple St"},
    {name: "Sarah Wilson", marks: 78, class: "11th", address: "987 Cedar St"},
    {name: "Daniel Lee", marks: 83, class: "9th", address: "246 Birch St"},
    {name: "Jessica Garcia", marks: 95, class: "12th", address: "135 Willow St"},
    {name: "David Martinez", marks: 80, class: "10th", address: "864 Spruce St"},
    {name: "Laura Hernandez", marks: 77, class: "11th", address: "975 Poplar St"},
    {name: "James Gonzalez", marks: 89, class: "9th", address: "423 Aspen St"},
    {name: "Elizabeth Anderson", marks: 91, class: "12th", address: "531 Sycamore St"}
];

// Function to render student cards
function renderStudents() {
    var studentCards = document.getElementById("studentCards");
    studentCards.innerHTML = "";
    students.map(function(student) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<p>StudentName: <b> ${student.name} </b></p>
                          <p>Marks: ${student.marks}</p>
                          <p>Class: ${student.class}</p>
                          <p>Address: ${student.address}</p>`;
        studentCards.appendChild(card);
    });
}

// Function to filter students by name
function filterStudents() {
    var searchValue = document.getElementById("searchBox").value.toLowerCase();
    var filteredStudents = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchValue);
    });
    students = filteredStudents;
    renderStudents();
}

// Initial rendering of student cards
renderStudents();
document.getElementById("searchButton").addEventListener("click", filterStudents);