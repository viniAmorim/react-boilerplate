import React from 'react';
import { Stack, Text } from 'ui-kit/src/components';
import logoPurple from '~/assets/logo-purple.svg';

import * as Styled from './styles';

function LoginPage() {
  return (
    <Styled.Container>
      <Stack>
        <Styled.Image src={logoPurple} />
        <Text fontColor="purple700">Login</Text>
      </Stack>
    </Styled.Container>
  );
}

export default LoginPage;
