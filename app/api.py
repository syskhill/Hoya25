import os
import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

RESULTS_FOLDER = 'results'  # Folder where the test results are stored
os.makedirs(RESULTS_FOLDER, exist_ok=True)  # Ensure the folder exists

@app.route('/api/results', methods=['GET'])
def get_results():
    # Get a list of all JSON files in the results folder
    json_files = [f for f in os.listdir(RESULTS_FOLDER) if f.endswith('.json')]

    # Read each JSON file and parse the content
    results = {}
    for file_name in json_files:
        file_path = os.path.join(RESULTS_FOLDER, file_name)
        with open(file_path, 'r') as file:
            results[file_name] = json.load(file)

    # Return the results as a JSON response
    return jsonify(results), 200


@app.route('/api/results/<file_name>', methods=['GET'])
def get_result_by_name(file_name):
    # Validate file name to prevent path traversal attacks
    if not file_name.endswith('.json'):
        return jsonify({'error': 'Invalid file type'}), 400

    file_path = os.path.join(RESULTS_FOLDER, file_name)
    if not os.path.exists(file_path):
        return jsonify({'error': 'File not found'}), 404

    with open(file_path, 'r') as file:
        result = json.load(file)
    return jsonify(result), 200


if __name__ == '__main__':
    app.run(debug=True)

