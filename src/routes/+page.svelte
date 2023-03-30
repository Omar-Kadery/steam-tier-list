<script>
  let steamid = "";
</script>

<div class="home">
  <input type="text" placeholder="Enter Steam ID" bind:value={steamid} />
  <a href={`/list/${steamid}`}>Submit</a>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
