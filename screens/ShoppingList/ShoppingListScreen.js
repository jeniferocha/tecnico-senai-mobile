import styles from "./ShoppingListScreenStyle";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";

export default function ShoppingList() {
  const [itensLista, setItensLista] = useState([]);

  function addItemList(item) {
    setItensLista([item, ...itensLista]);
  }

  function removeItemList(posicao) {
    itensLista.splice(posicao, 1);
    setItensLista([...itensLista]);
  }

  function marcarCompradoItemList(posicao) {
    const itensAtualizados = itensLista.map((item, index) => {
      if (index == posicao) {
        return { ...item, comprado: !item.comprado };
      } else {
        return item;
      }
    });
    setItensLista(itensAtualizados);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textosInformativos}>Total de itens na lista: {itensLista.length}</Text>
      <Text style={styles.textosInformativos}>Total de itens comprados: {itensLista.filter((i) => i.comprado).length}</Text>
      <AddItem onAddItem={addItemList} />
      <ScrollView>
        {itensLista.map((item, index) => {
          return (
            <ItemList 
              itemCompra={item} 
              posicao={index}
              onRemoverItem={removeItemList}
              onMarcarCompradoItem={marcarCompradoItemList}
            />
          );
        })}
        {itensLista.length == 0 && <Text style={styles.textosInformativos}>Lista vazia</Text>}
      </ScrollView>
    </View>
  );
}

function AddItem(props) {
  const [entradaInput, setEntradaInput] = useState("");

  function onAdd() {
    props.onAddItem({ descricao: entradaInput, comprado: false });
    setEntradaInput("");
  }

  return (
    <View style={styles.view}>
      <TextInput style={styles.input} value={entradaInput} onChangeText={setEntradaInput} placeholder="Adicionar item" />
      <TouchableOpacity style={styles.botaoAdicionar} onPress={onAdd}>
        <Text style={styles.textoBotaoAdicionar}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

function ItemList(props) {
  function onRemover() {
    props.onRemoverItem(props.posicao);
  }

  function onMarcarComprado() {
    props.onMarcarCompradoItem(props.posicao);
  }
  return (
    <View style={styles.viewItemList}>
      <Checkbox
        style={styles.checkbox}
        value={props.itemCompra.comprado}
        onValueChange={onMarcarComprado}
        color={props.itemCompra.comprado ? "#D2B4DE" : undefined}
      />
      <Text style={styles.textoItemList}>{props.itemCompra.descricao}</Text>
      <TouchableOpacity style={styles.botaoRemover} onPress={onRemover}>
        <Text style={styles.textoBotaoRemover}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
