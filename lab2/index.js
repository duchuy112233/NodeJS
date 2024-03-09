// npm i ejs

// const { fileLoader } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;
// Sử dụng express.urlencoded() để xử lý các yêu cầu POST
app.use(express.urlencoded({ extended: true }));

// // images
// var storage = multer.diskStorage({
//   destination: function (res, file, cb) {
//     cb(null, "./public/images");
//   },
//   filename: function (req, file, cb) {
//     cb("null", `${Date.now()}-${file.originalname} }`);
//   },
// });
// var upload = multer({storage:storage});

// //Upload images
// var storage = multer.diskStorage({
//   destination: function (res, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// function checkFileupload(req, file, cb) {
//   if (!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)) {
//     cb(new Error("Ban chi duoc upload file anh !"));
//   } else {
//     cb(null, true);
//   }
// }
// var upload = multer({ storage: storage, fileFilter: checkFileupload });
//khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");

/////
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render(`home`, { products: [] });
});

app.post("/addnew", (req, res) => {
  let productName = req.body.productName; // Lấy tên sản phẩm từ dữ liệu gửi lên
  let productImage = req.file.productImage; // Lấy đường dẫn ảnh sản phẩm từ dữ liệu gửi lên
  listProducts.push({ productName: productName, productImage: productImage }); // Thêm sản phẩm mới vào danh sách
  res.redirect(`/home`); // Chuyển hướng người dùng đến trang /home sau khi thêm sản phẩm
});

///////////
app.listen(port, () => {
  console.log(`Ứng dụng chạy trên cổng ${port}`);
});
