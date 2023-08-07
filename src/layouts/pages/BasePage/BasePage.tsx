import React, { HTMLAttributes } from 'react';

import * as Styled from './styles';

export type BasePageProps = HTMLAttributes<HTMLDivElement>;

const BasePage = (props: BasePageProps) => <Styled.Container {...props} />;

export default BasePage;
