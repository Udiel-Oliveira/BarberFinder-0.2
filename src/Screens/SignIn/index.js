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
import {useNavigation} from '@react-navigation/native';
import SignInput from '../../components/SignInput';

/*1:29:26*/

import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const navigation = useNavigation();

  const [emailFild, setEmailFild] = useState('karalho@karalho');
  const [senhaFild, setSenhaFild] = useState('');
  const clickCadastrese = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const clickLogin = () => {
    navigation.navigate('');
  };

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
          placeholder="Digite sua Senha"
          value={senhaFild}
          onChangeText={t => setSenhaFild(t)}
          senha={true}
        />
        <CustomButton onPress={clickLogin}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={clickCadastrese}>
        <SignMessageButtonText>Não tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
