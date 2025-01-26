import json

# Variables to store result directory path
resultPath = './results/'

# Function to create a corrupted result JSON file
def create_corrupted_result(Name):
    
    result = {
        'Name': Name,
        'Size': None,
        'Type': None,
        'Date accessed': None,
        'Date created': None,
        'Date modify': None,
        'Date taken': None,
        'Camera make': None,
        'Camera model': None,
        'Dimensions': None
    }
    
    with open(resultPath + Name + '.json', 'w') as jsonFile:
        json.dump(result, jsonFile)
        
    return

# Function to create a result JSON file
def create_result(Name, Size, Type, DateAccessed, DateCreated, DateModify):
    
    result = {
        'Name': Name,
        'Size': Size,
        'Type': Type,
        'Date accessed': str(DateAccessed),
        'Date created': str(DateCreated),
        'Date modify': str(DateModify)
    }
    
    with open(resultPath + Name + '.json', 'w') as jsonFile:
        json.dump(result, jsonFile)
        
    return

# Function to create a result JSON file for images
def create_result_image(Name, Size, Type, DateAccessed, DateCreated, DateModify, DateTaken, CameraMake, CameraModel, Dimensions):
    
    result = {
        'Name': Name,
        'Size': Size,
        'Type': Type,
        'Date accessed': str(DateAccessed),
        'Date created': str(DateCreated),
        'Date modify': str(DateModify),
        'Date taken': str(DateTaken),
        'Camera make': CameraMake,
        'Camera model': CameraModel,
        'Dimensions': Dimensions
    }
    
    with open(resultPath + Name + '.json', 'w') as jsonFile:
        json.dump(result, jsonFile)

    return

