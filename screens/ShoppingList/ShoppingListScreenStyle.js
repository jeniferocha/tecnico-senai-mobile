import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76D7C4",
    alignItems: "center",
    paddingTop: 10,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    padding: 8,
    backgroundColor: "#F0F2F3",
  },
  botaoAdicionar: {
    borderWidth: 1,
    padding: 10,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#D2B4DE",
  },
  textoBotaoAdicionar: {
    fontSize: 18,
    textAlign: "center",
    color: "#2E3B4F",
  },
  checkbox: {
    padding: 14,
    margin: 10,
  },
  viewItemList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 20,
  },
  textoItemList: {
    fontSize: 22,
    color: "#2E3B4F",
    alignItems: "center",
    justifyContent: "center",  
    padding: 8,
  },
  botaoRemover: {
    borderWidth: 1,
    padding: 10,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#D2B4DE",
  },
  textoBotaoRemover: {
    fontSize: 18,
    textAlign: "center",
    color: "#2E3B4F",
  },
  textosInformativos: {
    fontSize: 18,
    paddingTop: 8,
    color:"#2E3B4F",
  },
});

export default styles;
