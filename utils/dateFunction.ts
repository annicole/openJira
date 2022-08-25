import {formatDistanceToNow} from 'date-fns'

export const getFormatDistanceNow = (date:number) =>{
    const fromNow = formatDistanceToNow(date);

    return fromNow;
}