import API_ENDPOINT from '../globals/api-endpoint';

class RestoDBSource {
  static async daftarResto() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoDBSource;
