import axios from 'axios'
import key from './CREDENTIAL_KEY';

export default function weather(city) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.hgbrasil.com/weather/?format=json-cors&city_name=${city}&key=${process.env.REACT_APP_HGBRASIL_KEY}`)
      .then((resp) => {
        resolve(resp)
      })

      .catch((error) => {
        reject(error)
      })
  })
}