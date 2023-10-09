import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {   
   flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9A826",
  },
  estiloBotao: {
    borderWidth: 1,
    borderRadius: 8,
    width: "50%",
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },

  header: {
    backgroundColor: "#242746",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "#FFFFFB",
    fontSize: 23,
    padding: 8,
  },
});

export default styles;
