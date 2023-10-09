import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#76D7C4",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  header1: {
    flexDirection: "row",
    gap: 110,
    padding: 5,
  },
  header2: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  header3: {
    flexDirection: "row",
    gap: 35,
    padding: 5,
  },
  textoBotaoHeader: {
    fontSize: 18,
  },
  textoheader: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },

  body: {
    backgroundColor: "#A7A7A7",
    flex: 1,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    gap: 5,
    paddingTop: 10,
  },
  bodyInput: {
    width: 240,
    height: 40,
    textAlign: "center",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  bodyView: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
  bodyTexto: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76D7C4",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: 90,
  },

  footer: {
    backgroundColor: "#F2B134",
    height: 65,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  textofooter: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});

export default styles;
