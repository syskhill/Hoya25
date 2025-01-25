import filetype

def read_file(filePath):
    with open(filePath, 'r') as file:
        fileContents = file.read()
        
        fileSize = len(fileContents)
        
        for b in fileContents:
            print("Byte: ", hex(ord(b)))
        
        return fileSize