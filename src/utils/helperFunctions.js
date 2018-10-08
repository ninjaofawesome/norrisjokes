
// if response is JSON
const handleJSONResponse = response => {
  return response.json()
  .then(json => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      }));
    }
  });
};

// if response is XML
const handleTextResponse = response => {
  return response.text()
  .then(text => {
    if (response.ok) {
      return ;
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        err: text,
      });
    }
  });
};

// handle response and reject before parsing data
export const handleResponse = response => {
  let contentType = response.headers.get('content-type');

  if (contentType.includes('application/json')) {
    return handleJSONResponse(response);
  } else if (contentType.includes('text/html')) {
    return handleTextResponse(response);
  } else {    
    throw new Error(`Sorry, content-type ${contentType} not supported`);
  }
};