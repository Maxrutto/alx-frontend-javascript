export default function handleResponseFromAPI(promise) {
  const object = { status: 200, body: 'Success' };

  return promise
    .then(() => object)
    .catch(Error)
    .finally(() => console.log("Got a response from the API"))
}
