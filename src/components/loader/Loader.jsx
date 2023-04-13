import ContentLoader from 'react-content-loader';
import { LoaderContainer } from './Loader.styled';

const Loader = props => (
  <LoaderContainer>
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      backgroundColor="transparent"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </LoaderContainer>
);

export default Loader;
