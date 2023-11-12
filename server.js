const express = require("express");
const app = express();
const port = 4000;
const path = require("path");

// public 디렉토리를 정적 파일 제공 디렉토리로 설정
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // public 디렉토리 내에 있는 index.html 파일을 서빙
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/css/index.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "public", "css", "index.css"));
});

app.get("/css/board.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "public", "css", "board.css"));
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다.:${port}`);
});
