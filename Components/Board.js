import React, { useState } from "react";
// import Card from "./Card";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

//card data
const cardsArray = [
  {
    name: "soccer",
    img: "../assests/soccer.png",
    id: 1,
    faceUp: false,
  },
  {
    name: "tennis",
    img: "../assests/tennis.png",
    id: 2,
    faceUp: false,
  },
  // {
  //   name: "basketball",
  //   img: "../assests/basketball.png",
  //   id: 3,
  // },
  // {
  //   name: "butterfly",
  //   img: "../assests/butterfly.png",
  //   id: 4,
  // },
  // {
  //   name: "cat",
  //   img: "../assests/cat.png",
  //   id: 5,
  // },
  // {
  //   name: "dog",
  //   img: "../assests/dog.png",
  //   id: 6,
  // },
  // {
  //   name: "golf",
  //   img: "../assests/golf.png",
  //   id: 7,
  // },
  // {
  //   name: "hockey",
  //   img: "../assests/hockey.png",
  //   id: 8,
  // },
  // {
  //   name: "volleyball",
  //   img: "../assests/volleyball.png",
  //   id: 9,
  // },
  // {
  //   name: "zzz",
  //   img: "../assests/zzz.png",
  //   id: 10,
  // },
  // {
  //   name: "sandwhich",
  //   img: "../assests/sandwhich.png",
  //   id: 11,
  // },
  // {
  //   name: "love",
  //   img: "../assests/love.png",
  //   id: 12,
  // },
  {
    name: "soccer",
    img: "../assests/soccer.png",
    id: 13,
    faceUp: false,
  },
  {
    name: "tennis",
    img: "../assests/tennis.png",
    id: 14,
    faceUp: false,
  },
  // {
  //   name: "basketball",
  //   img: "../assests/basketball.png",
  //   id: 15,
  // },
  // {
  //   name: "butterfly",
  //   img: "../assests/butterfly.png",
  //   id: 16,
  // },
  // {
  //   name: "cat",
  //   img: "../assests/cat.png",
  //   id: 17,
  // },
  // {
  //   name: "dog",
  //   img: "../assests/dog.png",
  //   id: 18,
  // },
  // {
  //   name: "golf",
  //   img: "../assests/golf.png",
  //   id: 19,
  // },
  // {
  //   name: "hockey",
  //   img: "../assests/hockey.png",
  //   id: 20,
  // },
  // {
  //   name: "volleyball",
  //   img: "../assests/volleyball.png",
  //   id: 21,
  // },
  // {
  //   name: "zzz",
  //   img: "../assests/zzz.png",
  //   id: 22,
  // },
  // {
  //   name: "sandwhich",
  //   img: "../assests/sandwhich.png",
  //   id: 23,
  // },
  // {
  //   name: "love",
  //   img: "../assests/love.png",
  //   id: 24,
  // },
];

class Board extends React.Component {
  constructor() {
    super();
    const deck = cardsArray
      // .concat(cardsArray) //adds two
      .sort(() => 0.75 - Math.random()); //randonly sorts them

    this.state = {
      deck: deck,
      // faceUp: false,
      // firstCard: null,
    };
    // this.renderItem = this.renderItem.bind(this);
  }

  render() {
    const flipCardTo = (item) => {
      console.log("-------------------------"),
        console.log("item pressed", item),
        console.log("-------------------------"),
        // console.log("this.state", this.state),
        this.setState({
          deck: this.state.deck.map((card, index) => {
            // console.log("-------------------------"),
            //   console.log("card in this.state", card),
            //   console.log("-------------------------");
            if (card.id === item.id) {
              item.faceUp = !item.faceUp;
              return card;
            } else {
              return card;
            }
          }),
        });

      console.log("FLIPPED!!");
      console.log(item.faceUp);
      // this.setState({
      //   deck: this.state.deck.map((card, idex) => {
      //     if (index === item.id) {
      //       return {
      //         card: card.card,
      //         faceUp: !faceUp
      //       };
      //     }
      //   }),
      // });
    };
    const renderItem = ({ item }) => (
      //console.log("item from renderItem", item),
      <TouchableWithoutFeedback onPress={() => flipCardTo(item)}>
        <View>
          {item.faceUp ? (
            <Text style={styles.card}>
              {item.name} and {item.id}
            </Text>
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
          keyExtractor={(key) => key.id} //created the key
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
