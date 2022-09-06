import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function LeaderBoard() {
  const [userData, setUserData] = useState([]);

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
  }, []);

  return (
    <View>
      {userData && console.log(userData)}
      {/* <Text>this how well you did</Text> */}
    </View>
  );
}
