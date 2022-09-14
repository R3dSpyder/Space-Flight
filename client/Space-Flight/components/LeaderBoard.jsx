import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getLeaderBoard } from "../api";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

export default function LeaderBoard() {
  const [userData, setUserData] = useState([]);
  const [signedInUser, setSignedInUser] = useState({});

  useEffect(() => {
    getLeaderBoard().then((data) => {
      const keys = Object.values(data);

      setUserData(keys);
    });

    // .sort((user1, user2) => user1.highScore - user2.highScore)
    // .reverse()

    setSignedInUser({ userName: "Penny", highScore: 51 });
  }, []);

  return (
    <ScrollView>
      <Row>
        <Col numRows={1}>
          <View>
            <Text style={{ fontSize: 50 }}>Leaderboard</Text>
          </View>
        </Col>
      </Row>

      <Row>
        <View style={styles.legend}>
          <Col numRows={2}>
            <Text style={styles.userScoreItems}>Place</Text>
          </Col>
          <Col numRows={2}>
            <Text style={styles.userScoreItems}>Username</Text>
          </Col>
          <Col numRows={2}>
            <Text style={styles.userScoreItems}>Score</Text>
          </Col>
        </View>
      </Row>
      <Row>
        <View>
          {userData.map((user, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.dataPlane,
                  index % 2 === 0 ? styles.evenRowColor : styles.oddRowColor,
                ]}
              >
                <Col numRows={3}>
                  <Text>{index + 1}</Text>
                </Col>
                <Col numRows={3}>
                  <Text>{user.username}</Text>
                </Col>
                <Col numRows={3}>
                  <Text>{user.score}</Text>
                </Col>
              </View>
            );
          })}
        </View>
      </Row>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  legend: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // justifyContent:"space-around"
  },
  dataPlane: {
    display: "flex",
    marginHorizontal: 10,
    justifyContent: "flex-start",
    width: "95%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  oddRowColor: {
    backgroundColor: "lightgray",
  },
  evenRowColor: {
    backgroundColor: "white",
  }, // userScoreItems: { //   padding: "0 30px", //   flex: "2", // },

  "1col": {
    display: "flex",
    width: 100,
    backgroundColor: "orange",
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  "2col": {
    display: "flex",
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "thistle",
    flex: 2,
  },
  "3col": {
    borderWidth: 1,
    borderColor: "thistle",
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
