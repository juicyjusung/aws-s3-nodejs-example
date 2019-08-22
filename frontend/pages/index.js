import { Upload, Button, Icon } from 'antd';

const Home = () => {
  return (
    <Upload
      action='http://localhost:3001/image'
    >
      <Button>
        <Icon type="upload"/> Click to Upload
      </Button>
    </Upload>
  );
};

export default Home;
