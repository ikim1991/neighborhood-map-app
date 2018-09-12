const api = "https://api.foursquare.com";
const clientID = "JGDFCGN035Z0AAXPLQ01HKRKK2PHSCHRFQKGBCZ10QEZ1LLI";
const clientSecret = "FVCJNUIU1NUB5Q4NPCM0IETMPBA2AZPURHM4DWPD3CUMUKKD"

export const get = (venue_ID) =>
  fetch(`${api}/v2/venues/${venue_ID}?client_id=${clientID}&client_secret=${clientSecret}&v=20180323`)
    .then(res => res.json())
    .then(data => {
      if (data.meta.code === 429) {
        console.log("API Quota Exceeded")
        return;
      } else if (data.meta.code === 400) {
        console.log("Error API Not Found")
        return;
      } else if (data.meta.code === 200) {
        console.log("API Successful", data)
        return data;
      }
    })
    .catch(err => console.log("Failed to Load API", err))
