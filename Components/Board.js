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
    img: require("./../assets/soccer.png"),
    id: 1,
    faceUp: false,
  },
  {
    name: "tennis",
    img: require("./../assets/tennis.png"),
    id: 2,
    faceUp: false,
  },
  {
    name: "basketball",
    img: require("./../assets/basketball.png"),
    id: 3,
  },
  {
    name: "butterfly",
    img: require("./../assets/butterfly.png"),
    id: 4,
  },
  {
    name: "cat",
    img: require("./../assets/cat.png"),
    id: 5,
  },
  {
    name: "dog",
    img: require("./../assets/dog.png"),
    id: 6,
  },
  {
    name: "golf",
    img: require("./../assets/golf.png"),
    id: 7,
  },
  {
    name: "hockey",
    img: require("./../assets/hockey.png"),
    id: 8,
  },
  {
    name: "volleyball",
    img: require("./../assets/volleyball.png"),
    id: 9,
  },
  {
    name: "zzz",
    img: require("./../assets/zzz.png"),
    id: 10,
  },
  {
    name: "sandwhich",
    img: require("./../assets/sandwhich.png"),
    id: 11,
  },
  {
    name: "love",
    img: require("./../assets/love.png"),
    id: 12,
  },
  {
    name: "soccer",
    img: require("./../assets/soccer.png"),
    id: 13,
    faceUp: false,
  },
  {
    name: "tennis",
    img: require("./../assets/tennis.png"),
    id: 14,
    faceUp: false,
  },
  {
    name: "basketball",
    img: require("./../assets/basketball.png"),
    id: 15,
  },
  {
    name: "butterfly",
    img: require("./../assets/butterfly.png"),
    id: 16,
  },
  {
    name: "cat",
    img: require("./../assets/cat.png"),
    id: 17,
  },
  {
    name: "dog",
    img: require("./../assets/dog.png"),
    id: 18,
  },
  {
    name: "golf",
    img: require("./../assets/golf.png"),
    id: 19,
  },
  {
    name: "hockey",
    img: require("./../assets/hockey.png"),
    id: 20,
  },
  {
    name: "volleyball",
    img: require("./../assets/volleyball.png"),
    id: 21,
  },
  {
    name: "zzz",
    img: require("./../assets/zzz.png"),
    id: 22,
  },
  {
    name: "sandwhich",
    img: require("./../assets/sandwhich.png"),
    id: 23,
  },
  {
    name: "love",
    img: require("./../assets/love.png"),
    id: 24,
  },
];

class Board extends React.Component {
  constructor() {
    super();
    const deck = cardsArray.sort(() => 0.75 - Math.random()); //randonly sorts them

    this.state = {
      deck: deck,
      firstCard: null,
      secondCard: null,
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
      if (this.state.firstCard === null) {
        this.setState({ firstCard: item });
      } else {
        const firstCard = this.state.firstCard;
        const secondCard = item;
        this.setState({ secondCard: item });

        if (firstCard.name === secondCard.name) {
          this.setState({ firstCard: null });
          this.setState({ secondCard: null });
          console.log("SAME!");
        } else {
          console.log(this.state);
          setTimeout(() => {
            this.setState({ firstCard: null });

            this.setState({
              deck: this.state.deck.map((card) => {
                if (card.id === firstCard.id) {
                  firstCard.faceUp = !firstCard.faceUp;
                  return card;
                } else {
                  return card;
                }
              }),
            });
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
          }, 1000);
          console.log("Diffferent");
        }
      }
    };

    const renderItem = ({ item }) => (
      <TouchableWithoutFeedback onPress={() => flipCardTo(item)}>
        <View>
          {item.faceUp ? (
            <View>
              <Image style={styles.image} source={item.img} />
            </View>
          ) : (
            <Text style={styles.card}>?</Text>
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
    fontSize: 60,
    textAlign: "center",
    marginHorizontal: 10,
    height: 90,
    width: 100,
  },
  image: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    height: 90,
    width: 100,
  },
});
