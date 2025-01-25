<script>
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      console.log(data);
    }
  
    fetchData();
</script>