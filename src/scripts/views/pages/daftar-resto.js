import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const DaftarResto = {
  async render() {
    return `
      <div id="coba-ah" class="resto-katalog">
      </div> 
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await RestoDbSource.daftarResto();
    const restoContainer = document.querySelector('#coba-ah');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default DaftarResto;
