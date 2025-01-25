<script lang="ts">
    import DropIn from './dropIn.svelte';
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

    <button class="button">Upload File</button>
    <button class="button">Check Your File</button>
</div>