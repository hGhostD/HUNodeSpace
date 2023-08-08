const express = require('express');
const app = express();
const port = 8756; // 您可以根据需要更改端口号

app.get('/test/:va', async (req, res) => {
    res.send(JSON.stringify({"body":req.body, "query": req.query, "header": req.headers})); // 修改此处
});

app.listen(port, () => {
    console.info("==== test.js ====");
    console.info(`后台服务器已启动,监听端口 ${port}`);
});