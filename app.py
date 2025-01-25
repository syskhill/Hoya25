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
import datetime
import win32com.client

# Get file and filename from frontend
fileName = 'V_notes.txt'

# Variables for corruption
fileCorruptedError = False

# Variables for filetype
fileType = ''
fileTypeError = False

# Variables for filesize
fileSize = 0
fileSizeError = False

# Variables for access time
fileAccessDate = ''
fileAccessError = False

# Variables for creation time
fileCreateDate = ''
fileCreateError = False

# Variables for modification time
fileModifyDate = ''
fileModifyError = False

# Metadata dictionary
metadata = ['Name', 'Size', 'Item type', 'Date modified', 'Date created', 'Date accessed', 'Attributes', 'Offline status', 'Availability', 'Perceived type', 'Owner', 'Kind', 'Date taken', 'Contributing artists', 'Album', 'Year', 'Genre', 'Conductors', 'Tags', 'Rating', 'Authors', 'Title', 'Subject', 'Categories', 'Comments', 'Copyright', '#', 'Length', 'Bit rate', 'Protected', 'Camera model', 'Dimensions', 'Camera maker', 'Company', 'File description', 'Masters keywords', 'Masters keywords']

# Reading binary of file
def read_file(filename):
    # Try-Except block to catch corruption
    try:
        with open(fileName, 'rb') as file:
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
        
    return

if fileCorruptedError:
    # Send message to frontend
    # To-do...
    return
        
def get_file_datetime(filename):
    
    accessTimestamp = os.path.getatime(filename)
    fileAccessDate = datetime.datetime.fromtimestamp(accessTimestamp)
    if fileAccessDate is None:
        fileAccessError = True
        
    createTimestamp = os.path.getctime(filename)
    fileCreateDate = datetime.datetime.fromtimestamp(createTimestamp)
    if fileCreateDate is None:
        fileCreateError = True
        
    modifyTimestamp = os.path.getmtime(filename)
    fileModifyDate = datetime.datetime.fromtimestamp(modifyTimestamp)
    if fileModifyDate is None:
        fileModifyError = True

    return

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

def compile_metadata(fileName, fileSize, fileType, fileModifyDate, fileCreateDate, fileAccessDate):
    return

def compare_metadata():
    return
