import { TailSpin } from 'react-loader-spinner';
import { SpinerContainer } from './Loader.styled';

const Loader = () => {
  return (
    <SpinerContainer>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        margin="0 auto"
      />
    </SpinerContainer>
  );
};

export default Loader;
