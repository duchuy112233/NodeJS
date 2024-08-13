const express = require('express');
const app = express();
const port = 3000;

///////////
app.use(express.urlencoded({ extended: true }));

const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

app.get('/', (req, res) => {
    let list = '<h2>Danh sách nhà khoa học<ul>';
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list += '</ul></h2>';
    list += '<a href="/add-inventor"><button>Thêm mới</button></a>';
    res.send(list);
});

app.get('/inventor/:id', (req, res) => {
    let id = req.params.id;
    let inventor = inventors.find(e => e.id == id);
    let info = `<h2>Thông tin chi tiết nhà khoa học: 
        Full name: ${inventor.first} ${inventor.last}, 
        Year: ${inventor.year}, 
        Passed: ${inventor.passed}</h2>`;
    res.send(info);
});

/////////// ADD
app.get('/add-inventor', (req, res) => {
    res.send(`<h1>Thêm Nhà Khoa Học</h1>
    <form action="/inventor" method="POST">
        <input type="text" name="first" placeholder="First name">
        <input type="text" name="last" placeholder="Last name"><br>
        <input type="number" name="year" placeholder="Year">
        <input type="number" name="passed" placeholder="Pass"><br>
        <button type="submit">Thêm</button>
    </form>`);
});

app.post('/inventor', (req, res) => {
    const { first, last, year, passed } = req.body;
    const id = inventors.length + 1;
    inventors.push({ id, first, last, year: parseInt(year), passed: parseInt(passed) });
    res.send(`<p>Đã thêm nhà khoa học mới: ${first} ${last}</p>`);
});





///////////
app.listen(port, () => {
    console.log(`Ứng dụng chạy trên cổng ${port}`);
});
