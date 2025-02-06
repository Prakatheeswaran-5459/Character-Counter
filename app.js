
function updateCounter() {
    let textArea = document.getElementById("message");
    let charCount = document.getElementById("charCount");
    let warningMessage = document.getElementById("warningMessage");

    let maxLength = 200;
    let currentLength = textArea.value.length;
    let remaining = maxLength - currentLength;

    charCount.textContent = `${currentLength}/${maxLength} characters`;

    // Show warning messages
    if (remaining === 0) {
        warningMessage.textContent = "Character limit reached!";
        warningMessage.style.color = "red";
    } else if (remaining <= 20) {
        warningMessage.textContent = `Warning: Only ${remaining} characters left!`;
        warningMessage.style.color = "orange";
    } else {
        warningMessage.textContent = "";
    }
}