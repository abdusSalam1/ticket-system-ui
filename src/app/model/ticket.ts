export class Ticket {
    private _deliveryId : Number = 0;
    private _customerType: String = "";
    private _deliveryStatus : String = "";
    private _expectedDeliveryTime : String = "";
    private _timeToReachDestination : String = "";

    constructor(ticket:any){
        this._deliveryId = ticket.deliveryId;
        this._customerType = ticket.customerType;
        this._deliveryStatus = ticket.deliveryStatus;
        this._expectedDeliveryTime = ticket.expectedDeliveryTime;
        this._timeToReachDestination = ticket.timeToReachDestination;
    }

    public get deliveryId(){
        return this._deliveryId;
    }

    public get customerType(){
        return this._customerType;
    }

    public get deliveryStatus(){
        return this._deliveryStatus;
    }

    public get expectedDeliveryTime(){
        return this._expectedDeliveryTime;
    }

    public get timeToReachDestination(){
        return this._timeToReachDestination;
    }
}