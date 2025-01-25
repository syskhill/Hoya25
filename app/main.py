# Developing a python application
# FileMaven/Glitchspot

from reader import read_file
from clock import get_file_datetime
from imager import get_image_properties

# Metadata dictionary
metadata = ['Path', 'Size', 'Item type', 'Date accessed', 'Date created', 'Date modify', 'Date taken', 'Camera make', 'Camera model', 'Dimensions']

def __main__():
    # Get file path from frontend
    # To-do...
    
    # Manually assign filename (temporary)
    filePath = './uploads/Lab02.pdf'
    
    # Read file
    fileType, fileSize, hexContents = read_file(filePath)
    
    # Debug print
    print('File type: ' + str(fileType))
    print('File size: ' + str(fileSize) + ' bytes')
    print('Hex contents: ' + str(hexContents))
    
    if fileType is None or fileSize is None or hexContents is None:
        # Send error to frontend
        # File not found or corrupted
        # To-do...
        return
    
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
    else:
        print("File is not an image.")
    
    return

__main__()