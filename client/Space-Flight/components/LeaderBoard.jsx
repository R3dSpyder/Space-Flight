import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LeaderBoard() {
  const [userData, setUserData] = useState([]);
  const [signedInUser, setSignedInUser] = useState({});

  useEffect(() => {
    setUserData(
      [
        { userName: "Sam", highScore: 50 },
        { userName: "Philomena", highScore: 120 },
        { userName: "Penny", highScore: 51 },
        { userName: "Jenny", highScore: 121 },
        { userName: "Phill", highScore: 52 },
        { userName: "Karen", highScore: 122 },
        { userName: "James", highScore: 53 },
        { userName: "Darren", highScore: 123 },
        { userName: "George", highScore: 54 },
        { userName: "Phoebe", highScore: 124 },
      ]
        .sort((user1, user2) => user1.highScore - user2.highScore)
        .reverse()
    );
    setSignedInUser({ userName: "Penny", highScore: 51 });
  }, []);

  return (
    <View>
      <View style={styles.header}>
<<<<<<< HEAD
        <View>Leaderboard</View>
        <View style={styles.userScore}>
          <View style={styles.userScoreItems}>4th</View>
          <View style={styles.userScoreItems}>icon</View>
          <View style={styles.userScoreItems}>{signedInUser.highScore}</View>
        </View>
      </View>
=======
        <Text>Leaderboard</Text>
        <View style={styles.userScore}>
          <Text style={styles.userScoreItems}>4th</Text>
          <Text style={styles.userScoreItems}>icon</Text>
          <Text style={styles.userScoreItems}>{signedInUser.highScore}</Text>
        </View>
      </View>

>>>>>>> 888118f1e634e47126c8846ae8ffaa04e3d5c171
      <View>
        {userData.map((user, index) => {
          return (
            <View
<<<<<<< HEAD
=======
              key={index}
>>>>>>> 888118f1e634e47126c8846ae8ffaa04e3d5c171
              style={[
                styles.allUsersScore,
                index % 2 === 0 ? styles.evenRowColor : styles.oddRowColor,
              ]}
            >
<<<<<<< HEAD
              <View>{index}</View>
              <View>{user.userName}</View>
              <View>{user.highScore}</View>
=======
              <Text>{index}</Text>
              <Text>{user.userName}</Text>
              <Text>{user.highScore}</Text>
>>>>>>> 888118f1e634e47126c8846ae8ffaa04e3d5c171
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    height: "20vh",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userScore: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  allUsersScore: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: "10px",
  },
  oddRowColor: {
    backgroundColor: "lightgray",
  },
  evenRowColor: {
    backgroundColor: "white",
<<<<<<< HEAD
  },

  // userScoreItems: {
  //   padding: "0 30px",
  //   flex: "2",
  // },
=======
  }, // userScoreItems: { //   padding: "0 30px", //   flex: "2", // },
>>>>>>> 888118f1e634e47126c8846ae8ffaa04e3d5c171
});
