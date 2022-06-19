import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <h4>Your Liked Resto</h4>
      <div id="coba-ah" class="resto-katalog">
      </div> 
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await FavoriteRestoIdb.getAllResto();
    console.log('Like di render');
    console.log(restos);
    const restoContainer = document.querySelector('#coba-ah');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
