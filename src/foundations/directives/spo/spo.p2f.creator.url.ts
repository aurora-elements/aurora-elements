// https://creator.page2flip.devdock.space.one/wizard/hotspot-editor-standalone/1?p=https:%2F%2Fkreativburschen.customer.space.one%2Fapi%2Fscope%2Fwolfenbuettlerschaufenster%2Fasset%2F3231%2Fformat%2Fp2fdocument%2Fcontent%2F

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