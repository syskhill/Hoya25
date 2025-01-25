<script lang="ts">
    import DropIn from './dropIn.svelte';

    let selectedFile: File | null = null;

    async function uploadFile() {
        if (!selectedFile) {
            alert("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                alert(`File uploaded successfully: ${result.file_path}`);
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    }

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input && input.files) {
            selectedFile = input.files[0];
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    .navbar {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }
    .button {
        margin: 10px;
    }
</style>

<div class="navbar">
    <h1> insert logo-name </h1>
</div>

<div class="container">
    <h2>Purpose</h2>
    <p>
        insert the website purpose lol
    </p>
    
    <DropIn />

    <input type="file" on:change={handleFileChange} />
    <button class="button" on:click={uploadFile}>Upload File</button>
    <button class="button">Check Your File</button>
</div>