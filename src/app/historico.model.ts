export class Historico {
    date: string;
    eventName: string;
    status: string;
    comments: string;
    

    constructor (date:string , eventName: string,
                 status: string, comments: string)
    {
        this.date = date;
        this.eventName = eventName;
        this.status = status;
        this.comments = comments;
    }
}