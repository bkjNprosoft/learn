# Javascript Push API 사용 예제

Javascript Push API를 사용하여 모바일 및 PC(windows)에 푸시 알람 기능에 대한 예제입니다.

자세한 내용은 [MDN Push API](https://developer.mozilla.org/ko/docs/Web/API/Push_API)을 참고하시길 바랍니다.

모바일로 로컬 호스트 접속을 위해 [ngrok](https://www.npmjs.com/package/ngrok) 패키지를 이용합니다. https 임시 주소를 발행하여 포트 포워딩을 통해 로컬 호스트에 접속할 수 있도록 도와주는 패키지 입니다.

## 패키지 설치

`npm install -g ngrok`

`npm install`

## 실행

nodejs 실행

`npm start`

(필수 아님) 로컬 호스트 주소의 모바일 접속을 위해 아래 명령어를 입력해줍니다.
7274는 포트 번호 입니다. `./bin/www` 파일에서 변경이 가능합니다.

`ngrok http 7274`