<!--
	README project-specific bản tiếng Việt
	- Thay thế nội dung mặc định Create React App
	- Mô tả ngắn, cách chạy json-server, endpoints, và notes dev
-->

# My App — Cửa hàng trang sức (React)

Mô tả ngắn
Một ứng dụng web cửa hàng trang sức nhỏ được xây dựng bằng React. Ứng dụng dùng React Router cho điều hướng, Redux Toolkit cho quản lý state, axios để gọi API, và `json-server` làm fake API với dữ liệu mẫu ở `src/db.json`.

## Tech stack

- React (Create React App)
- React Router v6
- Redux Toolkit + react-redux
- axios
- json-server (fake API)
- Bootstrap, react-bootstrap
- react-icons, aos (animation)

## Yêu cầu

- Node.js (>= 14) và npm

## Cài đặt

Mở terminal tại thư mục dự án (chứa `package.json`), sau đó:

```bash
npm install
```

## Chạy ứng dụng (frontend) và fake API (json-server)

1. Chạy json-server (phục vụ `src/db.json`) trên port 3000:

```bash
npx json-server --watch src/db.json --port 3000
```

2. Ở terminal khác, chạy frontend:

```bash
# Nếu port 3000 đã bị chiếm (ví dụ json-server), đặt biến môi trường để chạy React trên port khác:
PORT=3001 npm start
# Hoặc chỉ cần
npm start
# CRA sẽ gợi ý port khác nếu 3000 đang bận.
```

Gợi ý: bạn có thể thêm script npm cho json-server (ví dụ `"api": "json-server --watch src/db.json --port 3000"`) để tiện thao tác.

## Endpoints chính (từ `src/db.json`)

- GET/POST/PUT/DELETE /products_ring
- GET/POST/PUT/DELETE /products_earring
- GET/POST/PUT/DELETE /products_necklace
- GET/POST/PUT/DELETE /products_bracelet
- GET/POST/PUT/DELETE /products_accessory
- GET/POST/PUT/DELETE /products_collection
- GET/POST/PUT/DELETE /comments
- GET/POST /login

> Lưu ý: `axiosApi` được cấu hình với `baseURL: http://localhost:3000/`, vì vậy json-server cần chạy trên port 3000 để khớp mặc định này.

## Cấu trúc thư mục (những file/ thư mục quan trọng)

- `src/index.js` — entry, bọc `App` bằng `Provider` (redux), `BrowserRouter` và `ToggleProvider` (context).
- `src/App.js` — layout chính (Header, NavLayout, Router, Footer).
- `src/routes/index.js` — định nghĩa các route chính.
- `src/pages/` — các trang (HomePage, ProductList, Register, Login, ...).
- `src/layouts/` — header, footer, nav, shop layout.
- `src/api/axiosApi.js` — axios instance (interceptor trả `response.data`).
- `src/api/*Api.js` — wrapper gọi API (getAll, get, add, update, remover).
- `src/redux/slice.js`, `src/redux/actionThunk.js`, `src/redux/store.js` — Redux slice và thunk.
- `src/db.json` — dữ liệu giả lập cho json-server.

## Ghi chú dành cho developer (vấn đề biết trước & đề xuất)

- `axiosApi` có response interceptor trả `response.data` — component khi dùng `axiosApi.get()` sẽ nhận dữ liệu đã giải nén.
- Ở `src/App.js` có chỗ gọi `axios.get(" http://localhost:3000/products_ring")` (có khoảng trắng đầu chuỗi URL) — cần xóa khoảng trắng đó để tránh lỗi.
- `src/redux/slice.js`: `initialState = { ringList: [] }` nhưng reducer `addRing` và `deleteRing` hiện thao tác lên `state.value` (không tồn tại). Nếu dùng `addRing`/`deleteRing` cần cập nhật reducer cho phù hợp.
- `src/redux/actionThunk.js` sử dụng `fetch` thay vì `axiosApi`. Có thể chuẩn hóa dùng `axiosApi` hoặc `createAsyncThunk` của Toolkit.
- Nếu muốn phát triển nhanh, thêm script npm:
  - `"api": "json-server --watch src/db.json --port 3000"`
  - dùng `concurrently` để chạy đồng thời `"api"` và `"start"` (tùy chọn).

## Scripts đề xuất (thêm vào `package.json`)

```json
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"test": "react-scripts test",
	"eject": "react-scripts eject",
	"api": "json-server --watch src/db.json --port 3000",
	"dev": "concurrently \"npm run api\" \"PORT=3001 npm start\""
}
```

Lưu ý: `concurrently` cần `npm install --save-dev concurrently`.

## Cách đóng góp

- Fork repo -> tạo feature branch -> pull request.
- Ghi rõ thay đổi, test đã chạy.

## Liên hệ / License

- Thêm thông tin liên hệ hoặc loại license nếu cần.

---

Tài liệu này cung cấp hướng dẫn cơ bản để chạy và phát triển ứng dụng. Nếu bạn muốn, tôi có thể (tự động) thêm script `api` vào `package.json` hoặc tạo script `dev` với `concurrently`.
