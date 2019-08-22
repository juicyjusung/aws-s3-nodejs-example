const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true,
}));

AWS.config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: '버킷명',
    key(req, file, cb) {
      cb(null, `origin/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024 },
});

app.post('/image', upload.array('file'), (req, res) => {
  console.log('req.files : ', req.files);
  return res.json(req.files);
});

app.get('/', (req, res) => {
  return res.send('hello');
});

app.listen('3001', () => {
  console.log(`server is running on 3000 port`);
});
