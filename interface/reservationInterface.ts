export interface UserDetailsInterface {
    email: string,
    phone: string,
    phoneCountryCode: string,
    position: null,
    departmentName: string,
    avatar: string,
    preferredLanguage: number
}

export interface DayInterface {
    from: string,
    to: string
}

export interface ScheduleInterface {
    monday: DayInterface[],
    tuesday: DayInterface[],
    wednesday: DayInterface[],
    thursday: DayInterface[],
    friday: DayInterface[],
    saturday: DayInterface[],
    sunday: DayInterface[]
}

export interface ReservationInterface {
    userName: string,
    userDetails: UserDetailsInterface,
    workplaceName: string,
    comment: null,
    attributes: [],
    from: string,
    to: string,
    cancelationAtTime: string,
    schedule: ScheduleInterface,
    maxBookingLength: null,
    id: string,
    userId: string,
    workplaceId: string,
    workplaceType: number,
    title: string,
    status: number,
    station: string,
    address: string,
    guests: [],
    floorId: string,
    floorName: string,
    floorCode: string,
    buildingId: string,
    buildingName: string,
    buildingCode: string,
    companyCode: string,
    isCompleted: boolean,
    isFinished: boolean,
    isCancelled: boolean
}