import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6e9f1",
    alignItems: "center",
    paddingTop: 30,    
  },
  textoCabecalho: {
    fontSize: 24,
    color: "#3c4f6d",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 230,
    padding: 8,
    marginBottom: 10,
    },
  textoInput: {
    textAlign:"center",
    fontSize: 16,
    color: "#3c4f6d"
  },
  botao: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#3c4f6d",
    
    marginTop: 8,
  },
  textoBotao: {
    fontSize: 18,
    textAlign: "center",
    color: "#f6e9f1",
  },
  textoResultado: {
    fontSize: 18,
    textAlign:"center",
    marginTop: 8,
  },
});

export default styles;
