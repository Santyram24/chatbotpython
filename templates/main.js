const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    userInput.value = '';

    // Agregar mensaje del usuario al chat
    chatLog.innerHTML += `<p><strong>Tú:</strong> ${userMessage}</p>`;

    // Enviar mensaje al servidor para obtener una respuesta
    fetch('/chat', {
        method: 'POST',
        body: new URLSearchParams({ user_message: userMessage }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.json())
    .then(data => {
        // Agregar respuesta del chatbot al chat
        chatLog.innerHTML += `<p><strong>Chatbot:</strong> ${data.response}</p>`;
    });
});