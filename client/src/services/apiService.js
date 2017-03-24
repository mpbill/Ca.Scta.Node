/**
 * Created by mpbil on 3/14/2017.
 */
import settings from 'settings';
import axios from 'axios';

function joinUrls(one, two) {
  if(one && one[one.length-1] === '/') one = one.slice(0, one.length-2);
  if(two && two[0] === '/') two = two.slice(1);
  return `${one}/${two}`;
}

function mangleConfig(config) {
  if(typeof config !== 'object')
    config = {};
  return { ...config, withCredentials: true }
}

function checkForAuthError(error) {
  if(error && error.response && error.response.status === 401) {
    return;
  }
  throw error;
}

export default {
  get: (url, data, config) => axios.get(joinUrls(settings.EndPoint, url), mangleConfig(config)).catch(checkForAuthError),
  post: (url, data, config) => axios.post(joinUrls(settings.EndPoint, url), data, mangleConfig(config)).catch(checkForAuthError),
  put: (url, data, config) => axios.put(joinUrls(settings.EndPoint, url), data, mangleConfig(config)).catch(checkForAuthError),
  delete: (url, data, config) => axios.delete(joinUrls(settings.EndPoint, url), mangleConfig(config)).catch(checkForAuthError),
  uploadFile: (url, file, progressCallback) => {
    const formData = new FormData();
    formData.append(file.name, file);
    return axios.post(joinUrls(settings.EndPoint, url), formData, mangleConfig({ onUploadProgress: progressCallback})).catch(checkForAuthError);
  },
  absoluteUrl: (relative) => joinUrls(settings.EndPoint, relative),
};
