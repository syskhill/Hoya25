# Developing a python application
# FileMaven/Glitchspot

from reader import read_file
from clock import get_file_datetime

# Variables
filePath = None
fileType = None
fileSize = None
hexContents = None
fileAccessDate = None
fileCreateDate = None
fileModifyDate = None
imageDateTaken = None
cameraMake = None
cameraModel = None
dimensions = None

def __main__():
    # Get file path from frontend
    # To-do...
    
    # Manually assign filename (temporary)
    filePath = './uploads/V_notes.txt'
    
    # Read file
    fileType, fileSize, hexContents = read_file(filePath)
    
    # Debug print
    print('File type: ' + fileType)
    print('File size: ' + str(fileSize) + ' bytes')
    print('Hex contents: ' + hexContents)
    
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
    
    return

__main__()