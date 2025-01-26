<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  class CheckFileButton {
    private uploadsFolder: string;

    constructor(uploadsFolder: string) {
      this.uploadsFolder = uploadsFolder;
    }

    async checkFiles() {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/upload-status?folder=/uploads');
        const data = await response.json();

        if (data.files && data.files.length > 0) {
          goto('/results');
        } else {
          alert('No files found in the uploads folder.');
        }
      } catch (error) {
        console.error('Error checking files:', error);
        alert('An error occurred while checking the uploads folder.');
      }
    }
  }

  let checkFileButton: CheckFileButton;

  onMount(() => {
    checkFileButton = new CheckFileButton('/uploads');
  });

  function handleClick() {
    checkFileButton.checkFiles();
  }
</script>

<button on:click={handleClick}>Check Files</button>

<style>
    button{
        padding: 1rem 3rem;
        cursor: pointer;
        border-radius: 40px;
        font-size: 1rem;
        background: #C7B171;
        color: white;
        margin: 3rem;
    }
    button:hover {
    background: white;
    color: #C7B171;

}
</style>