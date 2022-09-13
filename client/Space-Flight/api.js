import axios from "axios";

// used to get full leaderboard
export function getLeaderBoard(limit = 10, direction = "DESC") {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores?limit=${limit}&direction=${direction}`;

  try {
    return axios.get(queryString).then((response) => {
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

//used to get one persons scores by username
export function getPersonalScores(username, limit = 10, direction = "DESC") {
  if (username) {
    let queryString = `https://space-flight-backend-nc.herokuapp.com/api/scores/userScores/${user_id}?limit=${limit}&direction =${direction}`;
    try {
      return axios.get(queryString).then((response) => {
        if (response.data.error) {
          throw response.data.error;
        } else {
          return response.data.personalScores;
        }
      });
    } catch (error) {
      throw new Error(
        "Request abandoned, check path or check user_id. Error:",
        error
      );
    }
  } else {
    throw new Error("user_id required");
  }
}

//used to get a list of known users
export function getUsers(username = null, limit = 10, direction = "DESC") {
  let queryString = `https://space-flight-backend-nc.herokuapp.com/api/users?username=${username}&limit=${limit}&direction=${direction}`;

  try {
    return axios.get(queryString).then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data.users;
      }
    });
  } catch (error) {
    throw new Error("Request abandoned, check path. Error:", error);
  }
}

//used to post a score, requires to also provide username
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
      return axios.post(queryString, body, axiosConfig).then((response) => {
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

// used to make a new user in the database - without posting a score.
export function postUser(username) {
  if (username) {
    try {
      let queryString = `https://space-flight-backend-nc.herokuapp.com/api/users`;
      return axios.then((response) => {
        if (response.data.error) {
          throw response.data.error;
        } else {
          return response.data.putUser;
        }
      });
    } catch (error) {
      throw new Error("post failed:", error);
    }
  } else {
    throw new Error("You need to provide a username");
  }
}
