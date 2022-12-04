// get function with fetch
export const get = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
