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
.navbar i{
  color:white;
  font-family: monospace;
  
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
      margin: 2rem;
  }
  .container h3{
      color: #C7B171;
      font-size: 1.3rem;
      font-weight:50;
      padding: 0 2rem;
      margin: 0.5rem;
  }
  .container ul{
      color: white;
      font-size: 1.15rem;
      font-weight:70;
      padding: 0 2rem;
      align-items: center;
      text-align: center;
      margin: 0.5rem;
      font-family:Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }
  .container ul li{
    margin-bottom: 1rem;
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
.underline{
  text-decoration: underline;
  color: white;
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
</style>

<div class="navbar">
  <h1> fileMaven </h1>
</div>
  <div class="container"><h2>Safety Score: <i class="underline">{safetyScore}</i></h2>
  
  <h3>Checklist</h3>
  <ul>
    {#each tests as test}
      <li>{test.name} : <i> {test.passed ? 'Passed' : 'Failed'}</i> </li>
    {/each}
  </ul>
  
  <button class="home-button" on:click={() => window.location.href = '/'}>Go Back to Home</button>
</div>
