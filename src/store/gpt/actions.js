import axios from 'axios'
const API_KEY='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'
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