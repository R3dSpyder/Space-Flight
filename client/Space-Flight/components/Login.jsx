import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signInUser } from "../../../server/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const signIn = () => {
    signInUser(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/invalid-email") {
          setError("Please enter an email!");
        } else if (errorCode === "auth/internal-error") {
          setError("Please enter a valid email and password!");
        } else if (errorCode === "auth/wrong-password") {
          setError("Please check your email and password!");
        } else setError(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Log In Here!</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        keyboardType="text"
      />
      <br></br>
      <Button style={styles.button} onPress={() => signIn()} title="Log In" />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: "15px",
    fontSize: "14px",
    border: "2px solid orange",
    borderRadius: "5px",
    margin: "5px",
  },
  title: {
    padding: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  button: {
    padding: "50px",
  },
  error: {
    padding: "15px",
    color: "red",
    fontWeight: "bold",
  },
});
