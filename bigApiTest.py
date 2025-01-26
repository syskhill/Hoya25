from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for simplicity

# Set up the uploads folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Path to the backend directory
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')      # Path to the uploads folder
os.makedirs(UPLOAD_FOLDER, exist_ok=True)             # Ensure the folder exists
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    print(f"Saving file to: {file_path}")  # Debug print to verify file path
    file.save(file_path)
    return jsonify({'message': 'File uploaded successfully', 'file_path': file_path})

@app.route('/api/check', methods=['POST'])
def check_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Perform your file checking logic here
    # For example, you can read the file and perform some checks
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    print(f"Checking file: {file_path}")  # Debug print to verify file path

    # Example check: file size
    file_size = os.path.getsize(file_path)
    if file_size > 1024 * 1024:  # 1 MB size limit
        return jsonify({'error': 'File is too large'}), 400

    return jsonify({'message': 'File checked successfully', 'file_path': file_path})

@app.route('/api/upload-status', methods=['GET'])
def upload_status():
    folder = app.config['UPLOAD_FOLDER']
    print(f"Checking uploads folder: {folder}")  # Debug log
    if not os.path.exists(folder):
        return jsonify({'error': 'Uploads folder does not exist'}), 400

    files = os.listdir(folder)
    print(f"Files in uploads folder: {files}")  # Debug log
    if len(files) == 0:
        return jsonify({'files': []}), 200

    return jsonify({'files': files}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)