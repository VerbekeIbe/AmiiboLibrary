const showAmiibos = (data) => {
  const main = document.querySelector("main");
  //name
  //image
  //Series

  data.amiibo.forEach((amiiboObject) => {
    const name = amiiboObject.name;
    const series = amiiboObject.amiiboSeries;
    const imagepath = amiiboObject.image;

    const amiiboEl = document.createElement("div");

    amiiboEl.innerHTML = `<div class="c-amiibo">
        <div class="c-amiibo-img">
        <img src="${imagepath}" alt="Amiibo image"/>
        </div>
        <div class="c-amiibo--info">
            <h3>${name}</h3>
            <h4>${series}</h4>
        </div>
    </div>`;

    main.appendChild(amiiboEl);
  });
};

let getAPI = async () => {
  const ENDPOINT = `https://www.amiiboapi.com/api/amiibo`;

  const request = await fetch(`${ENDPOINT}`);

  const data = await request.json();

  console.log(data);

  //show Amiibo's
  showAmiibos(data);
};

document.addEventListener("DOMContentLoaded", function () {
  getAPI();
  console.log("DOM LOAD COMPLETE");
});
