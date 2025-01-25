import requests

def check_uploads():
    url = 'http://localhost:5000/api/check-uploads'
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        if data['hasFiles']:
            print('Files are present in the uploads folder.')
        else:
            print('No files in the uploads folder. Please upload a file.')
    except requests.exceptions.RequestException as e:
        print(f'Error checking uploads folder: {e}')

if __name__ == '__main__':
    check_uploads()