// document.getElementById('clickableBox').addEventListener('click', function() {
//     document.getElementById('message').style.display = 'block';
// });
function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 2000); // Message will disappear after 2 seconds
}
