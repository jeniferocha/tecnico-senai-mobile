import Feather from "@expo/vector-icons/Feather";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./TestComponentsScreenStyle";

export default function TestComponents() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.header1}>
        <Text style={styles.textoheader}>Conversor de base</Text>
        <View style={styles.header2}>
          <TouchableOpacity style={styles.estiloBotao} onPress>
            <Text style={styles.textoBotaoHeader}>RESET</Text>
          </TouchableOpacity>
          <Feather name="more-vertical" size={25} color="#F2F2F2" />
        </View>
      </View>

      <View style={styles.header3}>
        <TouchableOpacity style={styles.estiloBotao} onPress>
          <Text style={styles.textoBotaoHeader}>BASES COMUNS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.estiloBotao} onPress>
          <Text style={styles.textoBotaoHeader}>TODAS AS BASES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CampoConversor(props) {
  return (
    <View style={styles.bodyView}>
      <View style={styles.bodyTexto}>
        <Text>{props.name}</Text>
      </View>
      <TextInput style={styles.bodyInput} placeholder={props.placeholder} />
    </View>
  );
}

function Body() {
  return (
    <View style={styles.body}>
      <CampoConversor name={"BIN"} placeholder={"BASE 2"} />
      <CampoConversor name={"OCT"} placeholder={"BASE 8"} />
      <CampoConversor name={"DEC"} placeholder={"BASE 10"} />
      <CampoConversor name={"HEX"} placeholder={"BASE 16"} />
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <FontAwesome name="truck" size={30} color="#F2F2F2" />
      <Text style={styles.textofooter}> PROPAGANDA </Text>
      <FontAwesome name="gamepad" size={30} color="#F2F2F2" />
    </View>
  );
}
