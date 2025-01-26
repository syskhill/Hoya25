from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Get the path to the results directory
results_dir = os.path.join(os.path.dirname(__file__), 'results')

@app.route('/api/results', methods=['GET'])
def get_results():
    # Get list of all JSON files in results directory
    try:
        json_files = [f for f in os.listdir(results_dir) if f.endswith('.json')]
    except FileNotFoundError:
        return jsonify({"error": "Results directory not found"}), 404

    # Read and parse all JSON files
    results = []
    for json_file in json_files:
        file_path = os.path.join(results_dir, json_file)
        with open(file_path, 'r') as f:
            try:
                data = json.load(f)
                results.append({
                    "filename": json_file,
                    "content": data
                })
            except json.JSONDecodeError:
                continue
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)