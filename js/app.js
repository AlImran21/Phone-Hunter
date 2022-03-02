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
              <Button class="exp-btn" onclick="loadBrandDetail('${brand.slug}')">Explore</Button>
            </div>
          </div>
        `;
        searchResult.appendChild (div);
    });
}

const loadBrandDetail = brandId => {
    console.log (brandId);
    const url = `https://openapi.programming-hero.com/api/phone/${brandId}`
    fetch (url)
    .then (res => res.json ())
    .then (json => displayBrandDetail (json.data))
}

const displayBrandDetail = brand => {
    console.log (brand);
    const phoneDetails = document.getElementById ('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${brand.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${brand.name}</h5>
      <p class="card-text">${brand.releaseDate}</p>
      <p class="card-text Mainfeatures-font">Mainfeatures:</p>
      <p class="card-text">Chipset: ${brand.mainFeatures.chipSet}</p>
      <p class="card-text">Displaysize: ${brand.mainFeatures.displaySize}</p>
      <p class="card-text">Merory: ${brand.mainFeatures.memory}</p>
      <p class="card-text sensors-font">Sensors:</p>
      <p class="card-text">${brand.mainFeatures.sensors[0]}</p>
      <p class="card-text">${brand.mainFeatures.sensors[1]}</p>
      <p class="card-text">${brand.mainFeatures.sensors[2]}</p>
      <p class="card-text">${brand.mainFeatures.sensors[3]}</p>
      <p class="card-text">${brand.mainFeatures.sensors[4]}</p>
      <p class="card-text">${brand.mainFeatures.sensors[5]}</p>
      <p class="card-text others-font">Others:</p>
      <p class="card-text">Bluetooth: ${brand.others.Bluetooth}</p>
      <p class="card-text">GPS: ${brand.others.GPS}</p>
      <p class="card-text">NFC: ${brand.others.NFC}</p>
      <p class="card-text">Radio: ${brand.others.Radio}</p>
      <p class="card-text">USB: ${brand.others.USB}</p>
      <p class="card-text">WALAN: ${brand.others.WLAN}</p>
    </div>
    `;
    phoneDetails.appendChild(div);
}
