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

import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import SignInput from '../../components/SignInput';

/*1:29:26*/

import BarberLogo from '../../assets/Logo-black.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import NomeIcon from '../../assets/nome.svg';
import {Alert} from 'react-native';

export default () => {
  const navigation = useNavigation();

  const [nameFild, setNameFild] = useState('');
  const [emailFild, setEmailFild] = useState('');
  const [senhaFild, setSenhaFild] = useState('');
  const clickCadastrese = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  const clickLogin = async () => {
    if (nameFild != '' && emailFild != '' && senhaFild != '') {
      let res = await Api.signUp(nameFild, emailFild, senhaFild);
      if (res.token) {
        Alert.alert('Deu Certo!');
      } else {
        Alert.alert('Erro: ' + res.error);
      }
    } else {
      Alert.alert('Preencha os campos');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <BarberLogo width="10%" color="#000000" />
        <NameLogo font-size="15px">BarBerFinder</NameLogo>
      </LogoContainer>

      <InputArea>
        <Saudacao>Bem Vindo</Saudacao>
        <NameLogin>Nome</NameLogin>
        <SignInput
          IconSvg={NomeIcon}
          placeholder="Digite seu Nome"
          value={nameFild}
          onChangeText={t => setNameFild(t)}
        />
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
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={clickCadastrese}>
        <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
