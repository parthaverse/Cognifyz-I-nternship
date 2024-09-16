function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.getElementById('color-change').addEventListener('click', function() {
  document.body.style.backgroundColor = randomColor();
});



// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    displayUsers(data);  // Call a function to dynamically update the DOM
  })
  .catch(error => console.log('Error:', error));

  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    
    // Clear the list if needed
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-item');
  
      // Create elements to display user details
      const userName = document.createElement('h3');
      userName.textContent = `Name: ${user.name}`;
  
      const userEmail = document.createElement('p');
      userEmail.textContent = `Email: ${user.email}`;
  
      // Append user details to the userDiv
      userDiv.appendChild(userName);
      userDiv.appendChild(userEmail);
  
      // Append userDiv to the DOM
      userList.appendChild(userDiv);
    });
  }
  