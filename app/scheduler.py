import os # library for file operations
import json # library for JSON operations

# Function to find and schedule pending tasks
def schedule_pending_tasks(directoryPath):
    
    # Find all JSON files in the directory
    pendingJson = [pos_json for pos_json in os.listdir(directoryPath) if pos_json.endswith('.json')]
    pendingTasks = []
    
    # Iterate over all JSON files
    for file in pendingJson:
        with open(directoryPath + file) as jsonFile:
            
            # Load JSON data into a list
            data = json.load(jsonFile)
            for val in data.values():
                pendingTasks.append(val)
            
    return pendingTasks

# Function to clear pending tasks
def clear_pending_task(directoryPath, fileName):
    
    # Remove completed JSON files
    os.remove(directoryPath + fileName.split('.')[0] + '.json')
    
    return

def clean_uploads(uploadPath):
    
    # Find all files in the directory
    files = [f for f in os.listdir(uploadPath)]
    
    # Iterate over all files
    for file in files:
        
        # Remove all files
        os.remove(uploadPath + file)
    
    return