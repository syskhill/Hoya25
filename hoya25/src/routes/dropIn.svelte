<script lang="ts">
    import { onMount } from 'svelte';
    let file;
  
    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      const dataTransfer = event.dataTransfer;
      if (dataTransfer && dataTransfer.files.length) {
        const droppedFiles = dataTransfer.files;
        file = droppedFiles[0];
        console.log('File dropped:', file.name);
      }
    };
  
    const handleFileInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input && input.files && input.files.length) {
        const selectedFiles = input.files;
        file = selectedFiles[0];
        console.log('File selected:', file.name);
      }
    };
  
    onMount(() => {
      document.addEventListener('dragover', (e) => e.preventDefault());
    });
  </script>
  
  <div 
    class="w-full h-screen flex justify-center items-center bg-purple-500 relative" 
    on:drop={handleDrop}
    role="region" aria-label="File drop area">
    <div class="w-96 h-48 border-dashed border-4 border-white flex flex-col justify-center items-center bg-purple-400 rounded-lg shadow-lg">
      <div class="text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-12 h-12 text-white mb-2">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6zM16 10l-4-4m0 0l-4 4m4-4v12" />
        </svg>
        <p class="text-white font-medium">Drag & Drop to Upload File</p>
        <p class="text-white font-medium">OR</p>
      </div>
      <label class="cursor-pointer text-white px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
        Browse File
        <input 
          type="file" 
          class="hidden" 
          on:change={handleFileInput}>
      </label>
    </div>
  </div>
  
  <style>
    input[type="file"] {
      display: none;
    }
  </style>