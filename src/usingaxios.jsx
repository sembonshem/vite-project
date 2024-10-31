import { axios } from "axios";

// /* The commented section in the code is explaining the key differences between using Axios and the
fetch API in JavaScript React for making HTTP requests. It highlights three main points: */
Key Differences with Axios
// Response Handling: fetch only rejects a promise on network errors, 
// meaning it won’t reject on HTTP status codes (like 404 or 500). 
// You need to check the response.ok status to handle errors explicitly. 
// Axios, on the other hand, automatically rejects requests that fall outside the 2xx range.
// Config and Features: Axios comes with built-in support for advanced features like request cancelation, 
// timeouts, and automatic JSON transformation, which can be added manually in fetch but requires more work.
// Ease of Customization: Axios allows setting up interceptors for requests and responses, 
// which can be very useful for handling authentication tokens or logging.

const axios = new Axios({
  baseURL: "https://jsonplaceholder.typicode.com",
});
const appUrl = "https://jsonplaceholder.typicode.com/posts";
axios.get(appUrl).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
const getPosts = async () => {
  const response = await axios.get(appUrl);
  console.log(response);
};

const getPosts = async () => {
  const response = await axios.get(appUrl);
  console.log(response);
};
const postData = async () => {
  const response = await axios.post(appUrl, {
    title: "foo",
    body: "bar",
    userId: 1,
  });
  console.log(response);
};
