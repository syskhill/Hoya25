import os
import time
import threading
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class Watcher:
    DIRECTORY_TO_WATCH = "./uploads/"
    
    def __init__(self, callback):
        self.observer = Observer()
        self.callback = callback

    def run(self):
        event_handler = Handler(self.callback)
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=False)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except KeyboardInterrupt:
            self.observer.stop()
        self.observer.join()

class Handler(FileSystemEventHandler):
    
    def __init__(self, callback):
        self.callback = callback
        self.is_running = False

    def on_created(self, event):
        if not event.is_directory and not self.is_running:
            self.is_running = True
            threading.Thread(target=self.run_classback).start()
            
    def run_classback(self):
        self.callback()
        self.is_running = False