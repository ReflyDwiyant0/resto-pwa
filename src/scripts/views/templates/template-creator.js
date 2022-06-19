import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail-container">
    <h1>${resto.name}</h1>
    <img src="${CONFIG.IMAGE_URL}/${resto.pictureId}" alt="${resto.name}" />
    <h3>${resto.city}, ${resto.address}</h3>
    <p>${resto.description}</p>
    <strong>Makanan</strong>
    <hr>
    <ul>
      ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
    </ul>
    <strong>Minuman</strong>
    <hr>
    <ul>
      ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}
    </ul>
    <strong>Customer Review</strong>
    ${resto.customerReviews.map((review) => `<p>${review.name}: ${review.review}</p>`).join(' ')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <a href="/#/detail/${resto.id}" class="resto" tabindex="0">
    <img src="${CONFIG.IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
    <strong style="color: black;">${resto.name}</strong>
    <p style="color: black;">Rating: ${resto.rating} <br> City: ${resto.city}</p>
  </a>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
