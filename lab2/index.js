// npm i ejs

const express = require("express");

var multer = require("multer");
//khai báo sử dụng multer
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

//
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
// data
var listProduct = [
  {
    id: 1,
    title: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "anh1.jpg",
  },
  {
    id: 2,
    title: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "anh2.jpg",
  },
  {
    id: 3,
    title: "VFast Book",
    price: 1000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "anh3.jpg",
  },
];

//router
app.get("/", (req, res) => {
  var today = new Date();
  currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      console.log(`Error: ${currentDay}`);
  }
  res.render("home", { kindOfDay: day, products: listProduct }); 
});

app.get("/shop", (req, res) => {
  res.render("shop", { products: listProduct });
});
app.get("/detail/:spID", (req, res) => {
  var thutu = req.params.spID;
  var sp = listProduct[thutu];
  res.render("detail", { thutu: thutu, sp: sp });
});

// Route để thêm mới sản phẩm
app.get("/addnew",(req,res)=>{
  res.render("addnew");
  })

  app.post('/addnew', upload.single('productImage'),(req, res) => {
    //lấy dữ liệu từ form sau khi upload anh
    const file = req.file
    let title=req.body.productName;
    let price=req.body.price;
    let description=req.body.description;
    let nameImage=file.filename;
    //Thêm vào mảng json 1 cuối sách mới
    listProduct.push({
      id: listProduct.length + 1,
    title:title,
    price:price,
    description:description,
    imageURL:nameImage,
    })
    //chuyển về trang sản phẩm
    res.redirect('/shop');
    });

///////////
app.listen(port, () => {
  console.log(`Ứng dụng chạy trên cổng ${port}`);
});
