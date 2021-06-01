async function request(
    apiUrl: string, 
    credentials: string, 
    token: string,
    username: string, 
    password: string, 
    method = 'GET'
    ) {

  const options:any = {
    method,
    headers: {
        'Authorization': credentials === 'basic' ? `Basic ${btoa(username + ':' + password)}` : `Bearer ${token}`,
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

function get(
    apiUrl: string,
    credentials: string, 
    token: string,
    username: string, 
    password: string, 
    ) {
    return request(
        apiUrl, 
        credentials, 
        token,
        username, 
        password);
}

function create(
    apiUrl: string,
    credentials: string, 
    token: string,
    username: string, 
    password: string,
    ) {
    return request(
        apiUrl, 
        credentials, 
        token,
        username, 
        password,
        'POST');
}

function update(
    apiUrl: string,
    credentials: string, 
    token: string,
    username: string, 
    password: string,
    ) {
    return request(
        apiUrl, 
        credentials, 
        token,
        username, 
        password,
        'PUT');
}

function remove(
    apiUrl: string,
    credentials: string, 
    token: string,
    username: string, 
    password: string,
    ) {
    return request(
        apiUrl, 
        credentials, 
        token,
        username, 
        password,
        'DELETE');
}

export default {
    get,
    create,
    update,
    remove
}