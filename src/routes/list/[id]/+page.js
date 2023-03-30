import { error } from '@sveltejs/kit';
import * as api from "../../../constants/api.json";
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    // let items;
    // let url = new URL("https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?format=json&include_appinfo=true");
    // let urlParams = new URLSearchParams(url.search);
    // urlParams.append("key", api.key);
    // urlParams.append("steamid", params.id);


    // async () => {
    //     await fetch(
    //       url,
    //       {
    //         method: "GET",
    //       }
    //     )
    //       .then(function (response) {
    //         return response.json();
    //       })
    //       .then(function (data) {
    //         items = [];
    //         for (let i = 0; i < data.response.games.length; i++) {
    //           items.push({
    //             id: Number(data.response.games[i].appid),
    //             name: data.response.games[i].name,
    //           });
    //         }
    //       });
    //   }
    
    // console.log(items);
    if(params.id){
        return {id:params.id, /**items */};
    }
    else {
        throw error(404, 'Not found');
    }
    
    
}