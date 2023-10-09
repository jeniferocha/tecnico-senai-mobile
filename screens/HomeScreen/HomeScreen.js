import React from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import SCREENS from "../../constants/screens";
import styles from "./HomeScreenStyle";

const MENU = [
  {
    tela: SCREENS.SHOPPING_LIST,
    textoBotao: "Lista de Compras",
  },
  {
    tela: SCREENS.SPLIT_ACCOUNT,
    textoBotao: "Dividir Conta",
  },
  {
    tela: SCREENS.TEMPERATURE_CONVERTER,
    textoBotao: "Conversor de temperatura",
  },
  {
    tela: SCREENS.IMC,
    textoBotao: "IMC",
  },
  {
    tela: SCREENS.UNIT_CONVERTER,
    textoBotao: "Conversor de unidade",
  },
  {
    tela: SCREENS.STORYTELLER,
    textoBotao: "Storyteller",
  },
  {
    tela: SCREENS.REDE_SOCIAL,
    textoBotao: "Rede Social",
  },
  {
    tela: SCREENS.TEST_COMPONENTS,
    textoBotao: "Teste Componentes",
  },
  {
    tela: SCREENS.CRUD,
    textoBotao: "Crud",
  },
  {
    tela: SCREENS.FORTUNE_COOKIE,
    textoBotao: "Biscoito da Sorte",
  },
];

const HomeScreen = ({ navigation }) => {
  const MenuItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate(item.tela)}>
        <Text style={styles.title}>{item.textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={MENU} renderItem={MenuItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default HomeScreen;
