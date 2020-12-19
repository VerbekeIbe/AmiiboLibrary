



let getAPI = async () => {
    const ENDPOINT = `https://www.amiiboapi.com/api/amiibo`;
    
    const request = await fetch(`${ENDPOINT}`);

    const data = await request.json();

    console.log(data);

    };



    document.addEventListener('DOMContentLoaded', function() {
        getAPI();
        console.log("DOM LOAD COMPLETE")
    });
