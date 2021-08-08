export default function promiseSample() {
  const url = 'https://api.github.com/users/atzzCokeK'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile) => {
      if (profile) {
        console.log(profile)
      }
    })
    .catch((error) => console.error(error))
}
