const spoP2fCreatorBaseUrl = 'https://creator.page2flip.devdock.space.one';

export function spoP2fCreatorUrl(
    creatorUrl: string, 
    apiUrl: string,
    scopeKey: string,
    id: number
)  {
    let encodeURI = encodeURIComponent(`${apiUrl}/api/scope/${scopeKey}/asset/${id}/format/p2fdocument/content/`);

    if(creatorUrl == null) {
        creatorUrl = `${spoP2fCreatorBaseUrl}/wizard/hotspot-editor-standalone/1?p=`;
    }

    if(creatorUrl === undefined || scopeKey === undefined || id === undefined) {
        return '';
    }

    let url = `${creatorUrl}${encodeURI}`;

    return url;
}