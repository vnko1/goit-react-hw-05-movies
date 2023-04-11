import { TailSpin } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerContainer>
      <TailSpin
        height="80"
        width="80"
        color="teal"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        margin="0 auto"
      />
    </SpinnerContainer>
  );
};

export default Loader;
