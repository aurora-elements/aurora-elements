export function spoAssetThumbnail(
    apiUrl: string, 
    scopeKey: string,
    id: number, 
    height?: number, 
    width?: number
)  {
    let url = `${apiUrl}/scope/${scopeKey}/asset/${id}/thumbnail?`;

    if(apiUrl === undefined) {
        return '';
    }

    if(width && height) {
        url = `${url}height=${height}&width=${width}`;    
    }
    else if(width || height) {
        if(height) {
            url = `${url}height=${height}`;
        }
        else if(width) {
            url = `${url}width=${width}`;    
        }
    }

    return url;
}