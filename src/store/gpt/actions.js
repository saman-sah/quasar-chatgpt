import axios from 'axios'
const API_KEY=''
const axiosreq = axios.create({
  headers: { 'Authorization': 'Bearer ' + API_KEY,
  "Content-Type": "application/json" }
});
export function getMessageAction ({ commit, state }) {
    console.log('action get message');
    let body= {
        model: "gpt-3.5-turbo",
          messages:[
            {
              role: 'user',
              content: state.userMsg
            }
          ]
    }
    axiosreq.post('https://api.openai.com/v1/chat/completions', body )
    .then(response => {
        console.log('response');
        console.log(response.data.choices[0].message.content);
        let msg= response.data.choices[0].message.content
        commit('SET_ASSISTANT_MSG', msg)
    })
}

export function getImageAction ({ commit, state }) {
  console.log('action image ');
  let body= {
    prompt: state.userPromptImage,
    n: 1,
    size: "1024x1024"
  }
  axiosreq.post('https://api.openai.com/v1/images/generations', body )
  .then(response => {
      console.log('response');
      console.log(response.data.data[0].url);
      let imgUrl= response.data.data[0].url
      commit('SET_ASSISTANT_IMG', imgUrl)
  })
}
export function getImageVariation ({ commit, state }) {
  const saman=fs.createReadStream('@/public/images/Saman.png');
  console.log(saman);

  let body= {
    image: 'public/images/Saman.png',
    n: 2,
    size: "512x512"
  }
  axiosreq.post('https://api.openai.com/v1/images/variations ', body )
  .then(response => {
      console.log('response');
      console.log(response);
      // console.log(response.data.data.url);
      // let imgUrls= response.data.data.url
      // commit('SET_URLS_VARIATIONS', imgUrls)
  })
}