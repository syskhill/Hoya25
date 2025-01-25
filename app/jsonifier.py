import json

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
    
    with open(f'.results/{Name}.json', 'w') as jsonFile:
        json.dump(result, jsonFile)
        
    return

# Function to create a result JSON file
def create_result(Name, Size, Type, DateAccessed, DateCreated, DateModify):
    
    result = {
        'Name': Name,
        'Size': Size,
        'Type': Type,
        'Date accessed': DateAccessed,
        'Date created': DateCreated,
        'Date modify': DateModify
    }
    
    with open(f'.results/{Name}.json', 'w') as jsonFile:
        json.dump(result, jsonFile)
        
    return

# Function to create a result JSON file for images
def create_result_image(Name, Size, Type, DateAccessed, DateCreated, DateModify, DateTaken, CameraMake, CameraModel, Dimensions):
    
    result = {
        'Name': Name,
        'Size': Size,
        'Type': Type,
        'Date accessed': DateAccessed,
        'Date created': DateCreated,
        'Date modify': DateModify,
        'Date taken': DateTaken,
        'Camera make': CameraMake,
        'Camera model': CameraModel,
        'Dimensions': Dimensions
    }
    
    with open(f'.results/{Name}.json', 'w') as jsonFile:
        json.dump(result, jsonFile)

    return

