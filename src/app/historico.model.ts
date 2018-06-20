export class Historico {
    date: string;
    eventID: string;
    status: string;
    comments: string;
    

    constructor (date:string , eventID: string,
                 status: string, comments: string)
    {
        this.date = date;
        this.eventID= eventID;
        this.status = status;
        this.comments = comments;
    }
}