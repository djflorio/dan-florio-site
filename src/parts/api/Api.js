import axios from 'axios';

let backendHost = "http://api.danflorio.com/wp-json/wp/v2/";
const hostname = window && window.location && window.location.hostname;

/*if (hostname === 'danflorio.com') {
  backendHost = "http://www.danflorio.com/api/wp-json/wp/v2/";
} else {
  backendHost = "http://localhost/dfloapi/wp-json/wp/v2/";
}*/

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