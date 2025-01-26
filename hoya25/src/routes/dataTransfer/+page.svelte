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
        background-color: #363B5B;
        color: white;
        padding: 1rem;
        filter: drop-shadow(0px 0px 5px currentColor);
        box-shadow: 0 20px 32px 0 rgba(0,0,0,0.37);
        backdrop-filter: blur(10px);
        border-bottom: 5px solid #C7B171;
        border-style: double;
    }
    .navbar h1{
        color: white;
    font-size: 2.5rem;
    font-weight:200;
    font-style:oblique;
    padding: 0 2rem;
}

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 700px;
        width: 1000px;
        margin: 75px auto;
        flex-direction: column;
        background-color: #363B5B;
        border-radius: 20px;
        border: 5px solid #C7B171;
        box-shadow: 0 20px 32px 0 rgba(0,0,0,0.37);
        backdrop-filter: blur(10px);
    }
    .container h2{
        color: #C7B171;
        font-size: 1.8rem;
        font-weight:50;
        padding: 0 2rem;
        margin: 1rem;
    }
    .container p{
        color: white;
        font-size: 1.15rem;
        font-weight:70;
        padding: 0 2rem;
        align-items: center;
        text-align: center;
        margin: 0.5rem;
        font-family:Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    }
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

h1 {
	color: #363B5B;
	font-family: Hiragino Sans GB, Arial, sans-serif;;
	font-size: 6rem;
    font-weight: 1000;
	filter: drop-shadow(0px 0px 5px currentColor);
	
	&::after {
		content: '';
		display: inline-block;
		width: .2em;
		height: .7em;
		background-color: currentColor;
		margin-left: .1em;
		animation: blink 1s linear infinite forwards;
		vertical-align: baseline;
	}
}

@keyframes blink {
	0% {
		visibility: visible;
	}
	
	50% {
		visibility: visible;
	}
	
	51% {
		visibility: hidden;
	}
	
	100% {
		visibility: hidden;
	}

}

.bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/assets/bgdesign.png');
        background-size: cover;
        background-position: center;
        z-index: 0;
    }
</style>


<div class="navbar">
    <h1> fileMaven </h1>
</div>

<div class="bg"></div>

<div class="container">
    <h2>Purpose</h2>
    <p>
        This website allows you to upload a file and check its contents for any discrepancies.</p>
    <p>You will receive a score and an explanation for any issues found within the file.
    </p>

    <DropIn />
</div>
