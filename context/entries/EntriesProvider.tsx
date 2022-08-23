import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import {v4 as uuidv4} from 'uuid'

export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface Props{
    children:any;
}


export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addEntry = (description:string) =>{
        const newEntry :Entry ={
            _id:uuidv4(),
            description:'',
            creatAt: Date.now(),
            status:'pending'
        }
        dispatch({type:'[Entries] Add-Entry',payload:newEntry})
    }

    const updateEntry = (entry:Entry)=>{
        dispatch({type:'[Entries] ENTRY-Updated',payload:entry})
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addEntry,
            updateEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};  