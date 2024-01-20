const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const PORT = 3000;
const axios = require("axios");
const jsonFile = require("jsonfile");

app.use(express.json());
app.use("/", express.static("./source"));

app.get('/developers', (req, res) => {
	app.use("/", express.static("./source/_developers"));
	res.sendFile(__dirname + '/source/_developers/index.html');
});

// 서버 실행
app.listen(PORT, () => {
	console.log(`Enmirynet이 ${PORT}에서 정상 실행중입니다.`);
});

