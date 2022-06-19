import DaftarResto from '../views/pages/daftar-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': DaftarResto,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
