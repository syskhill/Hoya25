# Developing a python application
# FileMaven/Glitchspot

from reader import read_file
from clock import get_file_datetime
from imager import get_image_properties
from scheduler import schedule_pending_tasks, clear_pending_task
from jsonifier import create_result, create_result_image, create_corrupted_result

# Metadata dictionary
metadata = ['Name', 'Size', 'Type', 'Date accessed', 'Date created', 'Date modify', 'Date taken', 'Camera make', 'Camera model', 'Dimensions']

# Relative paths
directoryPath = './pending/'
uploadPath = './uploads/'

def __main__():
    
    # Check for pending tasks
    pendingTasks = schedule_pending_tasks(directoryPath)
    
    # Iterate over pending tasks
    for task in pendingTasks:
        fileName = str(task)
        filePath = (uploadPath + fileName)
    
        # Read file
        fileType, fileSize, hexContents = read_file(filePath)
    
        # Debug print
        print('File type: ' + str(fileType))
        print('File size: ' + str(fileSize) + ' bytes')
        print('Hex contents: ' + str(hexContents))
    
        # Check for corruption
        if fileType is None or fileSize is None or hexContents is None:
            create_corrupted_result(fileName.split('.')[0])
            clear_pending_task(directoryPath, fileName.split('.')[0])
            continue
    
        # Determing file access, create, and modify dates
        fileAccessDate, fileCreateDate, fileModifyDate = get_file_datetime(filePath)
    
        # Debug print
        print('File access date: ' + str(fileAccessDate))
        print('File create date: ' + str(fileCreateDate))
        print('File modify date: ' + str(fileModifyDate))
    
        if fileType[0:5] == 'image':
            # Get image properties
            imageDateTaken, cameraMake, cameraModel, dimensions = get_image_properties(filePath)
        
            # Debug print
            print('Image date taken: ' + str(imageDateTaken))
            print('Camera make: ' + str(cameraMake))
            print('Camera model: ' + str(cameraModel))
            print('Dimensions: ' + str(dimensions))
            
            # Compile metadata
            create_result_image(fileName.split('.')[0], fileSize, fileType, fileAccessDate, fileCreateDate, fileModifyDate, imageDateTaken, cameraMake, cameraModel, dimensions)
        else:
            print("File is not an image.")
            
            # Compile metadata
            create_result(fileName.split('.')[0], fileSize, fileType, fileAccessDate, fileCreateDate, fileModifyDate)

        # Clear pending task
        clear_pending_task(directoryPath, fileName.split('.')[0])
        
    return

__main__()