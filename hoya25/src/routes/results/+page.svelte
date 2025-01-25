<script>
  // Placeholder for backend data
  let safetyScore = "85"; // Example safety score
  let tests = [
    { name: "Test 1", passed: true },
    { name: "Test 2", passed: false },
    { name: "Test 3", passed: true }
  ];

  // Commented out API call to backend
  // async function fetchData() {
  //   const response = await fetch('/api/results');
  //   const data = await response.json();
  //   safetyScore = data.safetyScore;
  //   tests = data.tests;
  // }
  // fetchData();
</script>

<style>
  .container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #333;
  }
  p {
    font-size: 1.2em;
    color: #555;
  }
  h2 {
    margin-top: 20px;
    color: #444;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .home-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .home-button:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  <h1>Results</h1>
  <p>Safety Score: {safetyScore}</p>
  
  <h2>Checklist</h2>
  <ul>
    {#each tests as test}
      <li>{test.name}: {test.passed ? 'Passed' : 'Failed'}</li>
    {/each}
  </ul>
  
  <button class="home-button" on:click={() => window.location.href = '/'}>Home</button>
</div>
