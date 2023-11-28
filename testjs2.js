window.onload = function() {
    // Get the saved values from the local storage
    var savedFeedback1 = localStorage.getItem('feedback1');
    var savedFeedback2 = localStorage.getItem('feedback2');

    // Display the saved values in the <p> elements
    document.getElementById('feedback-user-text1').innerText = savedFeedback1;
    document.getElementById('feedback-user-text2').innerText = savedFeedback2;
    console.log(savedFeedback1);
    localStorage.clear()
};