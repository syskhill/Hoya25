<script lang="ts">
    import { goto } from '$app/navigation';
    export let filename: string;
    let errorMessage = '';

    async function checkFile() {
        try {
            const response = await fetch('/api/check-uploads');
            const data = await response.json();
            if (data.hasFiles) {
                goto('/results');
            } else {
                errorMessage = 'Please upload a file.';
            }
        } catch (error) {
            errorMessage = 'Error checking uploads folder.';
        }
    }
</script>

<button on:click={checkFile}>Check Results</button>

{#if errorMessage}
    <p>{errorMessage}</p>
{/if}