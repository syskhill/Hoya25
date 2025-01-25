import os # library to parse file stats
import datetime # library to parse timestamps

# Function to get file access, create, and modify dates
def get_file_datetime(filePath):
    
    # Getting file stats
    stat_info = os.stat(filePath)
    
    # Parsing timestamps
    timestamp = stat_info.st_atime
    fileAccess = datetime.datetime.fromtimestamp(timestamp)
    timestamp = stat_info.st_birthtime
    fileCreate = datetime.datetime.fromtimestamp(timestamp)
    timestamp = stat_info.st_mtime
    fileModify = datetime.datetime.fromtimestamp(timestamp)
    
    # Returning values
    return fileAccess, fileCreate, fileModify