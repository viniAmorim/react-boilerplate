import styled from 'styled-components';

import container from '../../styles/container';
import BasePage from '../BasePage';

export const Container = styled(BasePage)`
  ${container}
  min-height: 100vh;
  width: 100%;
  align-items: center;
`;

export const Image = styled.img`
  width: 211px;
  height: 52px;
`;
