import config from "../config";
import Storage from "../helpers/storage";
import fetchApi from "../helpers/fetch";

const Login = () => {
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/login.html"
  ) {
    // Only for checking if the user is logged in
    const checkSession = async () => {
      await fetchApi
        .get(`${config.apiUrl}/books`, {
          headers: {
            Authorization: Storage.get("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/";
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            Storage.remove("token");
          }
        });
    };
    checkSession();

    const formLogin = document.getElementById("form-login");

    const onSubmit = async (e) => {
      e.preventDefault();

      const username = e.target[0].value;
      const password = e.target[1].value;

      await fetchApi({
        url: `${config.apiUrl}/auth/do-login`,
        method: "POST",
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            // console.log(res);
            Storage.set("token", res.data.data.token);
            window.location.replace("/");
          }
        })
        .catch((err) => {
          window.alert(err.message ?? "Something went wrong");
        });
    };

    formLogin.addEventListener("submit", onSubmit);
  }
};

export default Login;
