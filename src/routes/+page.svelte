<script>
  import Tier from "../components/Tier.svelte";
  import { onMount } from "svelte";
  import * as api from "../constants/api.json";

  let resData = [];

  onMount(async () => {
    const response = await fetch(
      api.api_url +
        new URLSearchParams({
          key: api.api_key,
          steamid: "76561198042893204",
          format: "json",
          include_appinfo: "true",
        }),
      {
        method: "GET",
      }
    );
  });

  let items = [
    { id: 11, name: "item11" },
    { id: 12, name: "item12" },
    { id: 13, name: "item13" },
    { id: 14, name: "item14" },
    { id: 15, name: "item15" },
    { id: 16, name: "item16" },
    { id: 17, name: "item17" },
  ];
  let items2 = [
    { id: 18, name: "item11" },
    { id: 19, name: "item12" },
    { id: 20, name: "item13" },
    { id: 21, name: "item14" },
    { id: 22, name: "item15" },
    { id: 23, name: "item16" },
    { id: 24, name: "item17" },
  ];
</script>

<Tier {items} />
<Tier items={items2} />
<Tier items={[{ id: 25, name: "item25" }]} />
<Tier items={[]} />
<Tier items={[]} />
<Tier items={[]} />
