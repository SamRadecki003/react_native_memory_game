import React, { useState } from "react";
// import Card from "./Card";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

//card data
const cardsArray = [
  {
    name: "soccer",
    img: "",
    id: 1,
    faceUp: false,
  },
  {
    name: "tennis",
    img: "",
    id: 2,
    faceUp: false,
  },
  // {
  //   name: "basketball",
  //   img: "",
  //   id: 3,
  // },
  // {
  //   name: "butterfly",
  //   img: "",
  //   id: 4,
  // },
  // {
  //   name: "cat",
  //   img: "",
  //   id: 5,
  // },
  // {
  //   name: "dog",
  //   img: "",
  //   id: 6,
  // },
  // {
  //   name: "golf",
  //   img: "",
  //   id: 7,
  // },
  // {
  //   name: "hockey",
  //   img: "",
  //   id: 8,
  // },
  // {
  //   name: "volleyball",
  //   img: "",
  //   id: 9,
  // },
  // {
  //   name: "zzz",
  //   img: "",
  //   id: 10,
  // },
  // {
  //   name: "sandwhich",
  //   img: "",
  //   id: 11,
  // },
  // {
  //   name: "love",
  //   img: "",
  //   id: 12,
  // },
  {
    name: "soccer",
    img: "",
    id: 13,
    faceUp: false,
  },
  {
    name: "tennis",
    img: "",
    id: 14,
    faceUp: false,
  },
  // {
  //   name: "basketball",
  //   img: "",
  //   id: 15,
  // },
  // {
  //   name: "butterfly",
  //   img: "",
  //   id: 16,
  // },
  // {
  //   name: "cat",
  //   img: "",
  //   id: 17,
  // },
  // {
  //   name: "dog",
  //   img: "",
  //   id: 18,
  // },
  // {
  //   name: "golf",
  //   img: "",
  //   id: 19,
  // },
  // {
  //   name: "hockey",
  //   img: "",
  //   id: 20,
  // },
  // {
  //   name: "volleyball",
  //   img: "",
  //   id: 21,
  // },
  // {
  //   name: "zzz",
  //   img: "",
  //   id: 22,
  // },
  // {
  //   name: "sandwhich",
  //   img: "",
  //   id: 23,
  // },
  // {
  //   name: "love",
  //   img: "",
  //   id: 24,
  // },
];

class Board extends React.Component {
  constructor() {
    super();
    const deck = cardsArray.sort(() => 0.75 - Math.random()); //randonly sorts them

    this.state = {
      deck: deck,
      firstCard: null,
    };
  }

  render() {
    const flipCardTo = (item) => {
      this.setState({
        deck: this.state.deck.map((card) => {
          if (card.id === item.id) {
            item.faceUp = !item.faceUp;
            return card;
          } else {
            return card;
          }
        }),
      });
    };

    const flip = (item) => {
      if (this.state.firstCard === null) {
        console.log("item in flip function", item);
        console.log("---------------------");
        console.log("this.state,firstCard", this.state.firstCard);
        this.setState({ firstCard: item });
        console.log("---------------------");
        console.log("firstCard changed to....?", this.state.firstCard);
      } else {
        console.log("went into else statement");
      }
    };

    const renderItem = ({ item }) => (
      <TouchableWithoutFeedback onPress={() => flipCardTo(item)}>
        <View>
          {item.faceUp ? (
            <View>
              {/* <Image source={require("")} /> */}
              <Text style={styles.card}>{item.name}</Text>
            </View>
          ) : (
            <Text style={styles.card}>???</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    );

    const deck = this.state.deck;
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          keyExtractor={(key) => key.id}
          data={deck}
          renderItem={renderItem}
        />
      </View>
    );
  }
}
export default Board;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
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
