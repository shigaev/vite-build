let requestURL = 'http://localhost:8080/data.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

function result() {
    const jsonHtml = document.querySelector('.json');

    request.onload = setTimeout(() => {
        let superHeroes = request.response;

        if (jsonHtml) {
            jsonHtml.innerHTML = superHeroes.members.map(function(item) {
                return `
                    <li>${item.name}</li>
            `;
            }).join('');
        }
    }, 2000);

    if (jsonHtml) {
        return jsonHtml.innerHTML = `
                Download...
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `;
    }
}

export { result };