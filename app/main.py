# Developing a python application
# FileMaven/Glitchspot

from reader import read_file  # Replace with the actual function name

# Variables
fileName = None
fileSize = None
fileType = None
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
    
    fileSize = read_file(filePath)
    print(fileSize)
    return

__main__()