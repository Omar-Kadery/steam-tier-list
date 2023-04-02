<script>
  let steamid = "";
</script>

<div class="home">
  <input
    type="text"
    placeholder="Enter Steam ID"
    bind:value={steamid}
    class="id-input"
  />
  <a href={`/list/${steamid}`} class="submit-link">Submit</a>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 15em;
    margin-top: 40vh;
  }

  .id-input {
    font-size: 30px;
    padding: 25px;
  }
  .submit-link {
    font: bold 30px Arial;
    text-decoration: none;
    background-color: #3c3636;
    color: #e7d7d7;
    padding: 2px 6px 2px 6px;
    padding: 15px;
    border-radius: 10px;
  }
</style>
