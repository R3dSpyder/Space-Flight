const axios = require("axios");

export function getLeaderBoard(limit = 10, direction = "DESC") {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores?limit=${limit}&direction=${direction}`;

  return axios
    .get(queryString)
    .then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data.scores;
      }
    })
    .catch((err) => {
      throw new Error("Request abandoned, check path. Error:", err);
    });
}

export function getPersonalScores(user_id, limit = 10, direction = "DESC") {
  if (user_id) {
    let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores/userScores/${user_id}?limit=${limit}&direction =${direction}`;
    return axios
      .get(queryString)
      .then((response) => {
        if (response.data.error) {
          throw response.data.error;
        } else {
          return response.data.personalScores;
        }
      })
      .catch((err) => {
        throw new Error(
          "Request abandoned, check path or check user_id. Error:",
          err
        );
      });
  } else {
    throw new Error("user_id required");
  }
}

export function getUsers(username = null, limit = 10, direction = "DESC") {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/users?username=${username}&limit=${limit}&direction=${direction}`;
  return axios
    .get(queryString)
    .then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data.users;
      }
    })
    .catch((err) => {
      throw new Error("Request abandoned, check path. Error:", err);
    });
}

export function postScore(score, user_id) {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores`;
  return axios
    .post(queryString, { score: score, user_id: user_id })
    .then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data.putScore;
      }
    })
    .catch((err) => {
      throw new Error("Post failed:", err);
    });
}

export function postUser(username) {
  if (username) {
    let queryString = `https://space-flight-backend-nc.herokuapp.com/api/user`;
    return axios
      .post(queryString, { score: score, user_id: user_id })
      .then((response) => {
        if (response.data.error) {
          throw response.data.error;
        } else {
          return response.data.putUser;
        }
      })
      .catch((err) => {
        throw new Error("Post failed:", err);
      });
  } else {
    throw new Error("You need to provide a username");
  }
}
