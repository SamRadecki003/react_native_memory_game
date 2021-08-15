import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

// class Card extends React.Component {
//   render() {
//     console.log("this.props.cards", this.props.cards);
//     return (
//       <FlatList
//         numColumns={3}
//         keyExtractor={(key) => key.id} //created the key
//         data={this.props.cards}
//         renderItem={({ item }) => <Text style={styles.card}>{item.name}</Text>}
//       />
//     );
//   }
// }

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "pink",
    fontSize: 10,
    marginHorizontal: 10,
    height: 90,
    width: 100,
  },
});
