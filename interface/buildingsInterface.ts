export interface RowInterface {
    companyName: string,
    isPreferred: boolean,
    id: string,
    name: string,
    companyId: string,
    timeZoneShift: number,
    description: string,
    path: string,
    contacts: string,
    station: string,
    address: string,
    city: string,
    latitude: number,
    longitude: number,
    isFavorite: boolean,
    index: number,
    code: string,
    whitelistEnabled: boolean
}

export interface BuildingsInterface {
    rows: RowInterface[],
    totalCount: number
}