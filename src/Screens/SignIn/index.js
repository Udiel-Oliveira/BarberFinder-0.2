import React, {useState} from 'react';
import {
  Container,
  NameLogo,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  LogoContainer,
  Saudacao,
  NameLogin,
} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const [emailFild, setEmailFild] = useState('karalho@karalho');
  const [senhaFild, setSenhaFild] = useState('');

  return (
    <Container>
      <LogoContainer>
        <BarberLogo width="10%" color="#000000" />
        <NameLogo font-size="15px">BarBerFinder</NameLogo>
      </LogoContainer>

      <InputArea>
        <Saudacao>Bem Vindo</Saudacao>
        <NameLogin>Email</NameLogin>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailFild}
          onChangeText={t => setEmailFild(t)}
        />
        <NameLogin>Senha</NameLogin>
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite suas Senha"
          value={senhaFild}
          onChangeText={t => setSenhaFild(t)}
          senha={true}
        />
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
