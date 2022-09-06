export default function getLeaderBoard() {
  return fetch(
    "https://space-flight-aafd6-default-rtdb.europe-west1.firebasedatabase.app/scores.json"
  )
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
