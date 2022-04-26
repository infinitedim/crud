import config from "../config";
import Storage from "../helpers/storage";
import fetchApi from "../helpers/fetch";

const Home = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const getBooks = async () => {
      await fetchApi
        .get(`${config.apiUrl}/books?limit=10&offset=0`, {
          headers: {
            Authorization: Storage.get("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Storage.set("books", res.data.data);
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            Storage.clear();
            window.location.replace("/login");
          }
        });
    };

    getBooks();
  }
};

export default Home;
