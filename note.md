Các thuật ngữ:

- npm init -y
- npm i express: Cài đặt express
- npm i -D nodemon : Cài đặt nodemon
- Update package.json: add type module, add script
- npm i dotenv: Cài đặt thư viện lấy biến môi trường
- npm i mongoose

# Create file: .env

`PORT = 8000`
`DB_URL = mongodb://127.0.0.1:27017/db_movies`

# 1. Thêm “type”: “module” , trong package.json như file dưới đây để chuyển từ require sang import module

{
  "name": "node_typescript",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "type": "module",
  "scripts": {
    "start": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.18.3",
    "mongoose": "^8.2.2"
  }
}

