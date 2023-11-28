document.getElementById('submitter').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    try {
        // Get the current values from the input fields
        var feedback1 = document.getElementById('feedback-user1').value;
        var feedback2 = document.getElementById('feedback-user2').value;

        // Save the current values to the local storage
        localStorage.setItem('feedback1', feedback1);
        localStorage.setItem('feedback2', feedback2);
        console.log(feedback1);
    } catch (error) {
        console.error('An error occurred:', error);
    }
});