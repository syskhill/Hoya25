# Developing a python application
# File Metadata Analyzer

# File type Y
# File size Y
# Binary hash(?) Yesn't
# Type changes Y
# Timestamps Y
# Descrepencies between metadata and file data
# Corrupted files Y
# Past corruption(?) N
# Last access/damage Y
# Specific data based on filetype N

# File Type: 
#   Contents: Compare to metadata
#   Metadata: Changes, Other stuff
#   Binary: Corruption, Hash, File Type

# Magic number dictionary:
# magicNum = {'FFD8FFE0':'JPEG', '89504E47':'PNG','47494638':'GIF', '25504446':'PDF', '494433':'MP3', 'FFFB':'MP3', '66747970':'MP4', '504B0304':'ZIP', 'D0CF11E0':'DOC', '4D5A':'EXE', '424D':'BMP'}

import os
import filetype
import exifread
import win32com.client
from PIL import Image
from pathlib import Path

# Get file and filename from frontend
# To-do...

# Variables for corruption
fileCorruptedError = False

# Variables for filetype
fileType = None
fileTypeError = False

# Variables for filesize
fileSize = None
fileSizeError = False

# Variables for access time
fileAccessDate = None
fileAccessError = False

# Variables for creation time
fileCreateDate = None
fileCreateError = False

# Variables for modification time
fileModifyDate = None
fileModifyError = False

# Variables for images
imageDateTaken = None
cameraMake = None
cameraModel = None
dimensions = None

# Metadata dictionary
metadata = ['Name', 'Size', 'Item type', 'Date modified', 'Date created', 'Date accessed', 'Date taken', 'Camera model', 'Dimensions', 'Camera maker']

# Reading binary of file
def read_file(filename):
    # Try-Except block to catch corruption
    try:
        with open(filename, 'rb') as file:
            fileContents = file.read()
    
            # Determining size of file
            fileSize = fileContents.count()
            if fileSize is None:
                fileSizeError = True

            # Determining type of file
            fileType = filetype.guess(fileContents)
            if fileType is None:
                fileTypeError = True

    except Exception:
        fileCorruptedError = True
        # Send message to frontend
        # To-do...
    return
        
def get_file_datetime(filename):
    
    stat_info = os.stat(filename)
    
    fileAccessDate = stat_info.st_atime
    if fileAccessDate is None:
        fileAccessError = True

    fileCreateDate = stat_info.st_birthtime
    if fileCreateDate is None:
        fileCreateError = True
        
    fileModifyDate = stat_info.st_mtime
    if fileModifyDate is None:
        fileModifyError = True

    return

def get_image_properties(filename):
    
    with open(filename, 'rb') as image:
        tags = exifread.process_file(image)        
    
    if 'EXIF DateTimeOriginal' in tags:
        imageDateTaken = tags['EXIF DateTimeOriginal'].values
    else:
        imageDateTaken = None
    
    if 'Image Make' in tags:
        cameraMake = tags['Image Make'].values
    else:
        cameraMake = None
    
    image = Image.open(filename)
    width, height = image.size
    dimensions = str(width) + 'x' + str(height)
    
    if 'Image Model' in tags:
        cameraModel = tags['Image Model'].values
    else:
        cameraModel = None

# Finding file metadata using win32
def get_file_metadata(path, filename, metadata):
    sh = win32com.client.gencache.EnsureDispatch('Shell.Application', 0)
    ns = sh.NameSpace(path)
    
    file_metadata = dict()
    item = ns.ParseName(str(filename))
    for ind, attribute in enumerate(metadata):
        attr_value = ns.GetDetailsOf(item, ind)
        if attr_value:
            file_metadata[attribute] = attr_value

    return file_metadata

def compile_metadata(fileName, fileSize, fileType, fileModifyDate, fileCreateDate, fileAccessDate, imageDateTaken, cameraModel, dimensions, cameraMake):
    data = {'Name': fileName, 'Size': fileSize, 'Item type': fileType, 'Date modified': fileModifyDate, 'Date created': fileCreateDate, 'Date accessed': fileAccessDate, 'Date taken': imageDateTaken, 'Camera model': cameraModel, 'Dimensions': dimensions, 'Camera maker': cameraMake}
    
    return data

def compare_metadata(metadata, data):
    for key in metadata:
        if metadata[key] == data[key]:
            return
            # Share successful comparison with frontend
        else:
            # send discrepencies to frontend
            # To-do...
            return
    # send comparison to frontend
    # To-do...
    return

def __main__():
    fileName = 'V_notes.txt'
    read_file(fileName)
    get_file_datetime(fileName)
    
    if fileType == 'JPEG' or fileType == 'PNG':
        get_image_properties(fileName)
    
    get_file_metadata(f"uploads\{fileName}", fileName, metadata)
    compiledData = compile_metadata(fileName, fileSize, fileType, fileModifyDate, fileCreateDate, fileAccessDate, imageDateTaken, cameraModel, dimensions, cameraMake)
    compare_metadata(metadata, compiledData)