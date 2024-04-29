import axios from "axios";

const handleError = async (error: any) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
  }
  if (error.code === "ERR_NETWORK") {
    console.log(error);
    window.location.href = "/error";
  }
};

export const postMethod = async (url: string, entity: any) => {
  let response;

  await axios
    .post(url, entity)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });

  return response;
};

export const getMethod = async (url: string) => {
  let response;

  await axios
    .get(url)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });

  return response;
};

export const getMethodWithParams = async (url: string, params: any) => {
  let response;

  await axios
    .get(url, { params })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });

  return response;
};

export const putMethod = async (url: string, entity: any) => {
  let response;

  await axios
    .put(url, entity)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });

  return response;
};

export const deleteMethod = async (url: string) => {
  let response;

  await axios
    .delete(url)
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });

  return response;
};
