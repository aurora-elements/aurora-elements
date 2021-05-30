export function spoUriConverter(
    apiUrl: string,
    uri: string
)  {
    let url:string = uri.replace('spo://space/', `${apiUrl + '/scope/'}`);

    if(uri === undefined) {
        return '';
    }

    return url;
}