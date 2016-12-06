const EXDPOINT = 'http://localhost:8888/profiles'

export function getProfiles() {
    return fetch(EXDPOINT)
    .then(res => res.json())
    .catch(err => {
        console.log(err)
    })
}