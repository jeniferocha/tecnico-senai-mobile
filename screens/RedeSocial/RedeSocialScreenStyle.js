import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#D2B4DE",
    height: 65,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  feed: {
    backgroundColor: "#D5D5D5",
    flex: 1,
    width: "100%",
  },
  textoPerfil: {
    fontSize: 16,
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "#F2F2F2",
    marginBottom: 30,
    padding: 4,
  },
  inputMensagem: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#F2F2F2",
    marginBottom: 30,
    padding: 4,
  },

  textoInputs: {
    fontSize: 16,
  },
  botao: {
    borderWidth: 1,
    borderRadius: 8,
    width: "50%",

    backgroundColor: "#D2B4DE",
    padding: 10,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
