const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일(HTML, CSS 등)을 제공하기 위한 설정
app.use(express.static(path.join(__dirname)));

// 기본 경로('/')로 접속했을 때 index.html 파일을 보여줌
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버를 실행하고 3000번 포트에서 대기
app.listen(port, () => {
    console.log(`---------------------------------------------------`);
    console.log(`[서버 구동 성공] 로또 생성기가 실행되었습니다.`);
    console.log(`인터넷 주소창에 http://localhost:3000 을 입력하세요.`);
    console.log(`---------------------------------------------------`);
});