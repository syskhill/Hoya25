from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__)

RESULTS_FOLDER = './results'

# Endpoint to send a specific JSON file from the results folder
@app.route('/api/results/<filename>', methods=['GET'])
def get_result_file(filename):
    # Check if the file is a valid JSON file
    if filename.endswith('.json'):
        file_path = os.path.join(RESULTS_FOLDER, filename)

        # Check if the file exists
        if os.path.exists(file_path):
            # Send the JSON file directly
            response = send_from_directory(RESULTS_FOLDER, filename, as_attachment=False, mimetype='application/json')

            # After sending the file, delete it
            os.remove(file_path)

            return response
        else:
            return jsonify({"error": "File not found"}), 404
    else:
        return jsonify({"error": "Not a JSON file"}), 400

if __name__ == '__main__':
    app.run(debug=True)



