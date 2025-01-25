<script lang="ts">
    let file: File | null = null;
    let fileInput: HTMLInputElement | null = null;

    const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.files.length) {
            const droppedFiles = dataTransfer.files;
            file = droppedFiles[0];
            console.log('File dropped:', file.name);
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
            console.log('File selected:', file.name);
        }
    };

    const triggerFileInputClick = () => {
        if (fileInput) {
            fileInput.click();
        }
    };
</script>

<style>
    .drop-zone {
        width: 300px;
        height: 200px;
        border: 2px dashed #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 20px auto;
        cursor: pointer;
    }
    .drop-zone input {
        display: none;
    }
</style>

<div class="drop-zone" role="button" tabindex="0" on:drop={handleDrop} on:dragover={handleDragOver} on:click={triggerFileInputClick} on:keydown={(event) => event.key === 'Enter' && triggerFileInputClick()}>
    <p>Drag & Drop to Upload File</p>
    <input bind:this={fileInput} type="file" on:change={handleFileInput}>
</div>