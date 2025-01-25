import magic # library to determine file type

# Function to read file in binary
def read_file(filePath):
    
    # Finding file type via Multipurpose Internet Mail Extensions
    mime = magic.Magic(mime=True)
    fileType = mime.from_file(filePath)
    
    # Try-Except block to catch corruption
    try:
        # If file is readable
        with open(filePath, 'rb') as file:
            fileContents = file.read()
            fileSize = len(fileContents)
            
    # If file is corrupted or not found
    except Exception:
        return None, None, None
    
    hexContents = ''

    # Converting file contents from ascii to hex
    for b in fileContents:
        hexVal = hex(ord(chr(b)))[2::]
        
        # Standardizing hex values to 2 characters
        if len(hexVal) == 1:
            hexVal = '0' + hexVal

        hexContents += hexVal + ' '

    hexContents = hexContents[0:24]
    # Returning values
    return fileType, fileSize, hexContents