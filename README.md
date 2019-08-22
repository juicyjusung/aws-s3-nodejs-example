# AWS S3 이미지 업로드 예제 (node.js)
## 환경
### backend
- express
- multer
### frontend
- next
- react
- antd

## 설치 및 셋팅
### backend
**1. 패키지를 설치한다.**
``` bash
 cd backend && npm i 
```
**2. access key와 bucket 명 작성**
- `.env ` 파일에 발급받은 access key 작성
- `index.js` 파일에 s3 버킷명 작성

**3. backend 서버 실행**
``` js
  node index.js
```

### frontend
**1. 패키지를 설치한다.**
``` bash
  cd frontend && npm i
```

**2. front 서버 실행**
``` bash
  npm run dev
```

## 테스트
1. `http://localhost:3000 ` 접속
2. `click to upload` 누른후 파일 선택
3. S3에 정상적으로 업로드 되었나 확인

