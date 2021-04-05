export interface Network {
    id: string;
    description: string;
    clock: number;
    readOnly: true;
    config: NetworkConfig;
    description: string
    rulesSource: string
    permissions: PermissionsMap
    ownerId: string
    readOnly: true
    capabilitiesByName: any;
    tagsByName: any
}

interface PermissionsMap {
    // "00000000-0000-0000-0000-000000000000": OrderedMap { "a": true, "d": true, "m": true, "r": true }
}
interface NetworkConfig {
    id: string;
    creationTime: integer;

}
