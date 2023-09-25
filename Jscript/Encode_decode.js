// Get elements from the DOM
const textInput = document.getElementById('text');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');
const resultDiv = document.getElementById('result');

// Event listeners for the encode and decode buttons
encodeButton.addEventListener('click', () => {
    const text = textInput.value;
    const encodedText = btoa(text);
    resultDiv.innerHTML = `<p>Encoded Text:</p><pre>${encodedText}</pre>`;
});

decodeButton.addEventListener('click', () => {
    const encodedText = textInput.value;
    try {
        const decodedText = atob(encodedText);
        resultDiv.innerHTML = `<p>Decoded Text:</p><pre>${decodedText}</pre>`;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: Invalid Base64 Input</p>`;
    }
});
