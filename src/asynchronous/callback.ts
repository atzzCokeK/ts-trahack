export default function callbackSample() {
  const url = 'https://api.github.com/users/atzzCokeK'
  const fetchProfile = () => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((json) => {
            console.log(json)
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const profile = fetchProfile()
  console.log(profile)
}
