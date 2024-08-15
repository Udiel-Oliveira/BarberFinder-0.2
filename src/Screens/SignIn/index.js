import React from 'react';
import {
  Container,
  NameLogo,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

import BarberLogo from '../../assets/Logo-black.svg';

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" heith="160px" color="#000000" />
      <NameLogo width="100%" font-size="35px">
        BarBerFinder
      </NameLogo>

      <InputArea>
        <CustomButton>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Não tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
