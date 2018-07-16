import axios from 'axios';

let backendHost = "http://api.danflorio.com/wp-json/wp/v2/";

export const getProjects = (callback) => {
  const url = backendHost + "projects?_embed";
  axios.get(url)
    .then(res => {
      callback("success", res);
    })
    .catch(err => {
      callback("error", err);
    });
}