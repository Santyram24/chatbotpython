from flask import Flask, render_template, request
from nltk.chat.util import Chat, reflections
import pairs

app = Flask(__name__)

def initialize_chatbot():
    chat = Chat(pairs.pairs, reflections)
    return chat

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.form['user_message']
    chat = initialize_chatbot()
    response = chat.respond(user_message)
    return {'response': response}

if __name__ == '__main__':
    app.run(debug=True)
