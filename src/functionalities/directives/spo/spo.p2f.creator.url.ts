export function spoP2fCreatorUrl(
    creatorUrl: string = 'https://creator.page2flip.devdock.space.one/wizard/hotspot-editor-standalone/1?p=', 
    apiUrl: string,
    scopeKey: string,
    id: number
)  {
    let encodeURI = encodeURIComponent(`${apiUrl}/scope/${scopeKey}/asset/${id}/format/p2fdocument/content/`);
    let url = `${creatorUrl}${encodeURI}`;

    if(creatorUrl === undefined || scopeKey === undefined || id === undefined) {
        return '';
    }

    return url;
}