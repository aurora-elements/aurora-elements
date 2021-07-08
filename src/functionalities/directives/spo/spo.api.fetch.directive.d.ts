declare function get(apiUrl: string, credentials: string, token: string, username: string, password: string): Promise<any>;
declare function create(apiUrl: string, credentials: string, token: string, username: string, password: string): Promise<any>;
declare function update(apiUrl: string, credentials: string, token: string, username: string, password: string): Promise<any>;
declare function remove(apiUrl: string, credentials: string, token: string, username: string, password: string): Promise<any>;
declare const _default: {
    get: typeof get;
    create: typeof create;
    update: typeof update;
    remove: typeof remove;
};
export default _default;
//# sourceMappingURL=spo.api.fetch.directive.d.ts.map