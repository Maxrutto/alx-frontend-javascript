export default function handleResponseFromAPI(promise) {
  const object = { status: 200, body: 'success' };

  return promise
    .then(() => {
      return object;
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => console.log("Got a response from the API"))
}
