const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const PORT = 3000;
const axios = require("axios");
const jsonFile = require("jsonfile");

app.use(express.json());
app.use("/", express.static("./source"));

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/source/about.html');
});

// 서버 실행
app.listen(PORT, () => {
	console.log(`Enmirynet이 ${PORT}에서 정상 실행중입니다.`);
});

