function submitForm(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const course = document.getElementById('course').value;

  // Display form data
  const displayData = document.getElementById('displayData');
  displayData.innerHTML = `
    <h2>Enrollment Successful</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Course:</strong> ${course}</p>
  `;

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('course').value = '';
}
