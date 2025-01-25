import exifread # library for reading EXIF data from images
from PIL import Image # library for image processing

# Reading EXIF data from image
def get_image_properties(filePath):
    
    # Variables
    imageDateTaken = None
    cameraMake = None
    cameraModel = None
    dimensions = None
    
    # Opening image in binary mode
    try: 
        with open(filePath, 'rb') as image:
            tags = exifread.process_file(image)
            
    # Catching image corruption
    except Exception:
        return imageDateTaken, cameraMake, cameraModel, dimensions
    
    # Parsing EXIF data
    if 'EXIF DateTimeOriginal' in tags:
        imageDateTaken = tags['EXIF DateTimeOriginal'].values
        
    # Parsing camera make
    if 'Image Make' in tags:    
        cameraMake = tags['Image Make'].values 
        
    # Parsing camera model
    if 'Image Model' in tags:
        cameraModel = tags['Image Model'].values

    # Parsing image dimensions
    image = Image.open(filePath)
    width, height = image.size
    dimensions = str(width) + 'x' + str(height)
    
    # Returning values
    return imageDateTaken, cameraMake, cameraModel, dimensions
    