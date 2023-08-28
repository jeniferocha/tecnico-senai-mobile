import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feed } from "./Feed/Feed";
import { Newpost } from "./NewPost/NewPost";
import styles from "./RedeSocialScreenStyle";

const POSTAGENS_INICIAIS = [
  {
    imagem: "youtube",
    texto:
      "Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj",
  },
  {
    imagem: "arrow-up-right",
    texto:
      "Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador",
  },
  {
    imagem: "cloud-off",
    texto:
      "Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife",
  },
  {
    imagem: "database",
    texto:
      "Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev",
  },
  {
    imagem: "codesandbox",
    texto:
      "Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo",
  },
  {
    imagem: "coffee",
    texto:
      "Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo",
  },
  {
    imagem: "codepen",
    texto:
      "Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante",
  },
  {
    imagem: "alert-triangle",
    texto:
      "No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo",
  },
  {
    imagem: "activity",
    texto:
      "Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech",
  },
  {
    imagem: "award",
    texto:
      "A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev",
  },
  {
    imagem: "aperture",
    texto:
      "Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador",
  },
];

export default function RedeSocial() {
  const [postagens, setPostagens] = useState(POSTAGENS_INICIAIS)
  const [conteudoFeed, setConteudoFeed] = useState(<Feed postagens={postagens}/>);

  function mostrarFeed() {
    setConteudoFeed(<Feed postagens={postagens} />);
  }
  function mostrarPerfil() {
    setConteudoFeed(<Perfil />);
  }

  function newPost() {
    setConteudoFeed(<Newpost addPostagem={setPostagens}/>);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome name="home" size={40} color="#F2F2F2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPerfil}>
          <FontAwesome name="user" size={40} color="#F2F2F2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={newPost}>
          <Feather name="file-plus" size={40} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.feed}>
        <ScrollView>{conteudoFeed}</ScrollView>
      </View>
    </View>
  );
}


function Perfil() {
  return (
    <View style={{ alignItems: "center", padding: 30 }}>
      <Feather name="user-check" size={50} color="#D2B4DE" />
      <Text style={styles.textoPerfil}>Eu sou o perfil</Text>
    </View>
  );
}


