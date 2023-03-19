<script>
  import Tier from "../components/Tier.svelte";
  import { onMount } from "svelte";
  import * as api from "../constants/api.json";
  import InitZone from "../components/InitZone.svelte";

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

<Tier items={[]} tierHeadingColor="#E8687B" tierHeadingLevel="S" />
<Tier items={[]} tierHeadingColor="#F19E3A" tierHeadingLevel="A" />
<Tier items={[]} tierHeadingColor="#F7D150" tierHeadingLevel="B" />
<Tier items={[]} tierHeadingColor="#FCF43B" tierHeadingLevel="C" />
<Tier items={[]} tierHeadingColor="#84FC3B" tierHeadingLevel="D" />
<Tier items={[]} tierHeadingColor="#41FEED" tierHeadingLevel="E" />
<InitZone {items} />
