async function request(
    apiUrl: string, 
    method = 'GET'
    ) {

  const options:any = {
    method,
    headers: {
        'Content-Type': 'application/json'
    }
  };

  const response = await fetch(apiUrl, options);

  if (response.status !== 200) {
    return generateErrorResponse('The server responded with an unexpected status.');
  }

  const result = await response.json();

  return result;

}

function generateErrorResponse(message: string) {
    return {
      status : 'error',
      message
    };
  }

function publicGet(apiUrl: string) {
    return request(apiUrl);
}

function publicCreate(apiUrl: string) {
    return request(apiUrl, 'POST');
}

function publicUpdate(apiUrl: string) {
    return request(apiUrl, 'PUT');
}

function publicRemove(apiUrl: string) {
    return request(apiUrl, 'DELETE');
}

export default {
    publicGet,
    publicCreate,
    publicUpdate,
    publicRemove
}