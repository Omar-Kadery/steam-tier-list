<script>
    // @ts-nocheck

    import Tier from "../../../components/Tier.svelte";
    import { onMount } from "svelte";
    import InitZone from "../../../components/InitZone.svelte";

    export let data;

    let items;
    let steamid = data.id;

    onMount(async () => {
        fetch(
            "http://134.209.72.209:2375/games?" +
                new URLSearchParams({
                    steamid,
                }),
            {
                method: "GET",
            },
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                items = [];
                for (let i = 0; i < data.response.games.length; i++) {
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
