const searchPhone = () => {
    const searchField = document.getElementById ('search-field');
    const searchText = searchField.value;
    // console.log (searchText);

    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log (url);
    fetch(url)
    .then(res => res.json () )
    .then(json => displaySearchResult(json.data));
}

const displaySearchResult = data => {
    // console.log(data);
    const searchResult = document.getElementById ('search-result');
    data.forEach (brand => {
        console.log (brand);
        const div = document.createElement ('div');
        div.classList.add ('col');
        div.innerHTML = `
        <div class="card">
            <img src="${brand.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${brand.brand}</p>
              <h5 class="card-title">${brand.phone_name}</h5>
            </div>
          </div>
        `;
        searchResult.appendChild (div);
    });
}
