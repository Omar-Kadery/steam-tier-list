<script>
  import Tier from "../components/Tier.svelte";
  import { onMount } from "svelte";
  import * as api from "../constants/api.json";

  let items = [{ id: 1, name: "" }];

  onMount(async () => {
    fetch(
      api.api_url +
        new URLSearchParams({
          steamid: "76561198042893204",
        }),
      {
        method: "GET",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        items = [];
        for (let i = 0; i < /*data.response.games.length*/ 30; i++) {
          items.push({
            id: Number(data.response.games[i].appid),
            name: data.response.games[i].name,
          });
        }
      });
  });
</script>

<Tier {items} />
<Tier items={[]} />
<Tier items={[]} />
<Tier items={[]} />
<Tier items={[]} />
<Tier items={[]} />
