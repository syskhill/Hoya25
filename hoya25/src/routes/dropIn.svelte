<script lang="ts">
    let file: File | null = null;
    let fileInput: HTMLInputElement | null = null;
    let fileName: string | null = null;

    const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.files.length) {
            const droppedFiles = dataTransfer.files;
            file = droppedFiles[0];
            fileName = file.name;
            console.log('File dropped:', file.name);
            uploadFile(file);
        }
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    const handleFileInput = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input && input.files && input.files.length) {
            const selectedFiles = input.files;
            file = selectedFiles[0];
            fileName = file.name;
            console.log('File selected:', file.name);
            uploadFile(file);
        }
    };

    const triggerFileInputClick = () => {
        if (fileInput) {
            fileInput.click();
        }
    };

    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        // Simulate file upload
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('File uploaded:', file.name);
    };
</script>

<style>
    .drop-zone {
        width: 300px;
        height: 200px;
        border: 10px groove #C7B171;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 5rem;
        cursor: pointer;
        background-color: white;
        color: #363B5B;
        font-size: 1.75rem;
    }
    .drop-zone input {
        display: none;
    }
    .drop-zone:hover{
        background-color: #C7B171;
        border-color: white;
        color: white;
    }
    .file-name {
        
        font-size: 1.5rem;
        color: #363B5B;
        text-align: center;
        align-items:center;
        justify-content: center;
        display: flex;
        max-width: 90%;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0, 10px;
    }
</style>

<div class="drop-zone" role="button" tabindex="0" on:drop={handleDrop} on:dragover={handleDragOver} on:click={triggerFileInputClick} on:keydown={(event) => { if (event.key === 'Enter' || event.key === ' ') triggerFileInputClick(); }}>
    <input type="file" bind:this={fileInput} on:change={handleFileInput} style="display: none;" />
    {#if fileName}
        <div class="file-name">{fileName}</div>
    {:else}
        <div><p>Drag & Drop <br> ⇪ <br>to Upload File</p></div>
    {/if}
</div>