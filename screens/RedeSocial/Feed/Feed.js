import { View } from "react-native";
import { Post } from "../Post/Post";

export function Feed(propriedades) {
  return (
    <View>
      {propriedades.postagens.map((postagem, index) => (
        <Post imagem={postagem.imagem} texto={postagem.texto} key={index} />
      ))}
    </View>
  );
}
