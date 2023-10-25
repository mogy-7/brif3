   // Get the button and content element by their IDs
   const toggleButton = document.getElementById('icon');
   const content = document.getElementById('show');

   // Add a click event listener to the button
   toggleButton.addEventListener('click', function() {
     // Toggle the 'toggle-class' on the content element
     content.classList.toggle('toggle-class');
   });