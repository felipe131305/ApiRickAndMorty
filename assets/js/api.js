const API = "https://rickandmortyapi.com/api/character";

const getApi = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API: ", error);
    });
};
const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100 bg-info cardHover">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += ' <div class="card-body">';
    html += `<h5 class="card-title styleInformation">Nombre: ${ch.name}</h5>`;
    html += `<h5 class="card-title styleInformation">Estado: ${ch.status}</h5>`;
    html += `<h5 class="card-title styleInformation">Especie: ${ch.species}</h5>`;
    html += `<h5 class="card-title styleInformation">Genero: ${ch.gender}</h5>`;
    html += `<h5 class="card-title styleInformation">Pertenece: ${ch.origin.name}</h5>`;


    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";

  html += `<li class = "page-item ${info.prev == null ? "disabled" : ""}"> <a class="page-link " onclick="getApi('${info.prev}')"> Prev</a></li>`;
  html += `<li class = "page-item ${info.next == null ? "disabled" : ""} "> <a class="page-link" onclick="getApi('${info.next}')"> Next</a></li>`;
  document.getElementById("pagination").innerHTML = html;
};

getApi(API);
