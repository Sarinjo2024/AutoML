from flask import Flask, request, render_template
import netron
import os
import torch
import onnx

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/view_model')
def view_model():
    model_path = os.path.join('models', 'your_model.onnx')
    netron.start(model_path, port=8081)
    return 'Model viewer started at http://localhost:8081'

@app.route('/retrain', methods=['POST'])
def retrain():
    learning_rate = request.form['learning_rate']
    batch_size = request.form['batch_size']
    # Here you would add code to retrain your model using the provided parameters
    print(f'Retraining with learning rate: {learning_rate} and batch size: {batch_size}')
    # After retraining, you can return the results
    return f'Model retrained with learning rate: {learning_rate} and batch size: {batch_size}'

if __name__ == '__main__':
    app.run(port=5000)
