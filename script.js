// Get You API Key from yor openai account an put it here
const API_KEY = "";

async function sendMessage() {
  let value = document.getElementById("request-input").value;
  let params = {
    model: "gpt-4.1",
    input: value,
  };
  let headers = {
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    let response = await axios.post(
      "https://api.openai.com/v1/responses",
      params,
      {
        headers: headers,
      }
    );
    /** 
     * console.log(response.data.output[0].content[0].text);
     * this console log line is for debugging
     * uncomment it if you want to to the result in the console log in browsers
     * */ 
    let reply = response.data.output[0].content[0].text;
    document.getElementById("response-card").innerHTML = reply;
  } catch (error) {
    /**
     *  console.log(error.response.data.error.message); 
     *  this console log line is for debugging
     *  uncomment it if you want to to the result in the console log in browser
     * */ 
    let reply = error.response.data.error.message;
    document.getElementById("response-card").innerHTML = reply;
  }
}
