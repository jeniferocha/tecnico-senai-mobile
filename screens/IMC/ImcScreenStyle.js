import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeaea",
    alignItems: "center",
    paddingTop: 10,
  },
  viewImagem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  imagem: {
    width: 360,
    height: 230,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 180,
    padding: 8,
  },
  textoInput: {
    fontSize: 16,
  },
  botao: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D2B4DE",
    marginTop: 8,
  },
  textoBotao: {
    fontSize: 18,
    textAlign:"center",
  },
  textoResultado: {
    fontSize: 18,
    textAlign:"center",
    marginTop: 8,
  },
});

export default styles;
