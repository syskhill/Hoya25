import os
import json
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Folders
UPLOADS_FOLDER = 'uploads'
PENDING_FOLDER = 'pending'

# Ensure both folders exist
os.makedirs(UPLOADS_FOLDER, exist_ok=True)
os.makedirs(PENDING_FOLDER, exist_ok=True)

class FileAddedHandler(FileSystemEventHandler):
    """Handles events for files added to the uploads folder."""

    def on_created(self, event):
        # Triggered when a new file is added
        if event.is_directory:
            return  # Ignore directory events

        file_path = event.src_path
        file_name = os.path.basename(file_path)
        file_name_without_extension, _ = os.path.splitext(file_name)  # Remove the extension

        # Create the JSON file in the pending folder
        json_data = {
            "name": file_name
        }
        json_file_path = os.path.join(PENDING_FOLDER, f"{file_name_without_extension}.json")

        try:
            with open(json_file_path, 'w') as json_file:
                json.dump(json_data, json_file, indent=4)
            print(f"JSON file created: {json_file_path}")
        except Exception as e:
            print(f"Error creating JSON file for {file_name}: {e}")

if __name__ == "__main__":
    # Set up the watchdog observer
    event_handler = FileAddedHandler()
    observer = Observer()
    observer.schedule(event_handler, UPLOADS_FOLDER, recursive=False)

    try:
        print(f"Monitoring folder: {UPLOADS_FOLDER}")
        observer.start()
        # Keep the script running
        while True:
            pass
    except KeyboardInterrupt:
        print("\nStopping observer...")
        observer.stop()

    observer.join()
