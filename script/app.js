

const showAmiibos = (data) => {
    //name
    //image
    //Series

    data.amiibo.forEach((amiiboObject) =>{
        const img = document.createElement("img");
        img.src = amiiboObject.image;
        
        document.body.appendChild(img);
    
    });

};



let getAPI = async () => {
    const ENDPOINT = `https://www.amiiboapi.com/api/amiibo`;
    
    const request = await fetch(`${ENDPOINT}`);

    const data = await request.json();

    console.log(data);

    //show Amiibo's
    
    // showAmiibos(data);
};



    document.addEventListener('DOMContentLoaded', function() {
        getAPI();
        console.log("DOM LOAD COMPLETE")
    });
