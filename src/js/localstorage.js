import '../sass/test.scss';

const search = document.querySelector('.search');
const list = document.querySelector('.film_list');

search.addEventListener('submit', queryApi);
queryApi();
async function queryApi(e) {
  // e.preventDefault();
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=deeaaa6f7bb1ec2c1571c017660b3676&query=dog`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => {
      const results = response.results;
      return showGallery(results);
    })
    .catch(Error => console.log(Error));
}
async function showGallery(results) {
  console.log(results);
  list.innerHTML = await renderGallery(results);
  // const cardOfList = document.querySelectorAll('.photo-card');
  // cardOfList.addEventListener('click', modalcard);
}

function renderGallery(results) {
  return results
    .map(({ original_title, backdrop_path, id }, index) => {
      return `<a href="https://api.themoviedb.org/3/movie/${id}?api_key=deeaaa6f7bb1ec2c1571c017660b3676"><div class="photo-card" width="100px">
             <img class="photo-card-image" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt=" " loading="lazy" />
          <div class="info">
            <p class="info-item">
                 <b>${original_title}</b>
          
         </div></div></a>`;
    })
    .join('');
}

function modalcard(e) {
  e.preventDefault();
  console.log('modal is working');
}

// https://api.themoviedb.org/3/movie/343611?api_key={api_key}   запит за ід
