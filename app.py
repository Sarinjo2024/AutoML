from flask import Flask, request, jsonify
from flask_cors import CORS
import netron
import os
import threading

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

netron_thread = None

@app.route('/api/view_model', methods=['GET'])
def view_model():
    global netron_thread
    model_path = os.path.join('models', 'your_model.onnx')
    
    if netron_thread is None:
        netron_thread = threading.Thread(target=netron.start, args=(model_path,), kwargs={'port': 8081, 'browse': False})
        netron_thread.start()

    return jsonify({'message': 'Model viewer started', 'url': 'http://localhost:8081'})

@app.route('/api/retrain', methods=['POST'])
def retrain():
    data = request.json
    learning_rate = data.get('learning_rate')
    batch_size = data.get('batch_size')
    # Add code to retrain your model using the provided parameters
    print(f'Retraining with learning rate: {learning_rate} and batch size: {batch_size}')
    return jsonify({'message': f'Model retrained with learning rate: {learning_rate} and batch size: {batch_size}'})

if __name__ == '__main__':
    app.run(port=5000)
