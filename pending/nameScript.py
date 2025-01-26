import os
import json
import shutil

UPLOAD_FOLDER = './uploads'
PENDING_FOLDER = './pending'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PENDING_FOLDER, exist_ok=True)

def upload_file(file_path):
    if not os.path.isfile(file_path):
        return {'error': 'File does not exist'}, 400

    file_name = os.path.basename(file_path)

    # Save the file to the upload folder
    dest_path = os.path.join(UPLOAD_FOLDER, file_name)
    shutil.copy(file_path, dest_path)

    # After uploading the file, create the pending JSON
    pending_data = {
        "file_name": file_name,
        "status": "pending"
    }

    # Save this data in a single pending JSON file
    pending_json_path = os.path.join(PENDING_FOLDER, "pending.json")
    with open(pending_json_path, 'w') as json_file:
        json.dump(pending_data, json_file, indent=4)

    return {'message': 'File uploaded and pending JSON created', 'file_name': file_name}, 200

# Example usage
file_path = 'path_to_your_file'
response, status_code = upload_file(file_path)
print(response)
