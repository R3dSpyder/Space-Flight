import axios from "axios";

export function getLeaderBoard(limit = 10, direction = "DESC") {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores?limit=${limit}&direction=${direction}`;

  try {
    return axios.get(queryString).then(response => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data.scores;
      }
    });
  } catch (error) {
    throw new Error("Request abandoned, check path. Error:", error);
  }
}

export function postScore(score, username) {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const body = { score: score, username: username };
  if (score && username) {
    try {
      return axios.post(queryString, body, axiosConfig).then(response => {
        if (response.data.error) {
          throw response.data.error;
        } else {
          return response.data.putScore;
        }
      });
    } catch (error) {
      throw new Error("Post failed:", error);
    }
  } else {
    throw new Error("You have to prvide both score and username:", error);
  }
}

function getPlanets() {
  let queryString = `https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true`;
  return axios
    .get(queryString)
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
}

export const planetData = getPlanets().then(response => {
  return response.data.bodies.map(planet => {
    return planet;
  });
});
