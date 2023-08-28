import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import styles from "./PostStyle";


export function Post(props) {
  return (
    <View style={styles.container}>
      <Feather name={props.imagem} size={50} color="#D2B4DE" />
      <Text style={styles.textoPerfil}>{props.texto}</Text>
    </View>
  );
}
