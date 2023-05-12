import axios from 'axios'
export function getMessageAction ({ commit, state }) {
    console.log('action get message');
    const axiosreq = axios.create({
        headers: { 'Authorization': 'Bearer ' + state.API_KEY,
        "Content-Type": "application/json" }
    });
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
