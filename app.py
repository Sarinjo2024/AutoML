from flask import Flask, request, jsonify
from flask_cors import CORS
import netron
import os
import threading

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

netron_thread = None

def start_netron(model_path):
    try:
        netron.start(model_path, address=('0.0.0.0', 8081), browse=False)
    except Exception as e:
        print(f"Error starting Netron: {e}")
        
@app.route('/api/import_model', methods=['POST'])
def import_model():
    if 'modelFile' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['modelFile']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    # Save the uploaded file to a specific directory (adjust path as needed)
    file.save(os.path.join('uploaded_models', file.filename))

    return jsonify({'message': 'Model uploaded successfully'})

if __name__ == '__main__':
    app.run(port=5000)
@app.route('/api/view_model', methods=['GET'])
def view_model():
    global netron_thread
    model_path = os.path.join('models', 'your_model.onnx')
    
    # Print model path and directory contents for debugging
    print(f"Contents of models directory: {os.listdir('models')}")
    print(f"Model path: {model_path}")
    
    if netron_thread is None:
        netron_thread = threading.Thread(target=start_netron, args=(model_path,))
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
