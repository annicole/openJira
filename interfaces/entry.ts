export interface Entry {
    _id:string;
    description:string;
    creatAt:number;
    status:EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progres' | 'finished';
