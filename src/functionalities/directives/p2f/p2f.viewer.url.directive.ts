export function spoP2fViewerUrl(
    apiUrl: string, 
    scopeKey: string,
    id: number
)  {
    let url = `${apiUrl}/api/scope/${scopeKey}/asset/${id}/format/p2fdocument/content/index.html#1`;

    if(apiUrl === undefined) {
        return '';
    }

    return url;
}