// import { useDispatch } from "react-redux";

// export const dispatch = useDispatch()

// // Создаем экземпляр axios
// export const $axios = axios.create();

// function handleLogout() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   dispatch(logout());
//   navigate("/login");
// }

// // Интерсептор для запросов
// $axios.interceptors.request.use((config) => {
//   config.baseURL = "https://designhub-akrq.onrender.com";
//   const tokens = JSON.parse(localStorage.getItem("authToken"));
//   if (tokens) {
//     config.headers.Authorization = `Bearer ${tokens.token}`;
//   }
//   return config;
// });

// // Интерсептор для ответов
// $axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 403 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       const tokens = JSON.parse(localStorage.getItem("authToken"));
//       if (tokens) {
//         try {
//           // Попробуем обновить токен
//           const { data } = await $axios.post("/refresh-token/", {
//             refresh: tokens.refreshToken,
//           });

//           // Сохраняем новый токен
//           localStorage.setItem(
//             "authToken",
//             JSON.stringify({ ...tokens, token: data.token })
//           );

//           // Повторяем оригинальный запрос с новым токеном
//           return $axios(originalRequest);
//         } catch (refreshError) {
//           // Если обновление токена не удалось, выполняем логаут
//           handleLogout();
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );
