import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2A878F",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 80,
      gap: 5,
    },
    textoH1: {
      color: "#000",
      fontSize: 24,
    },
    inputs: {
      borderWidth: 1,
      borderRadius: 8,
      width: 150,
      height: 30,
      backgroundColor: "#FFCB9A",
      padding: 4,
    },
    botao: {
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "#FFC0CB",
      padding: 10,
    },
    textobotao: {},
    linha: {
      flexDirection: "row",
      gap: 2,
    },
  });

  export default styles;