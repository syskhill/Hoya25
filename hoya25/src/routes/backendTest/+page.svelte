<script>
    import { onMount } from 'svelte';

    /** @type {{ message: string } | null} */
    let data = null;

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data = await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    });
</script>

{#if data}
    <p>{data.message}</p>
{:else}
    <p>Loading...</p>
{/if}