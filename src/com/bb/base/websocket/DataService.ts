/**
 *
 * @author 
 *
 */
class DataService extends BaseDataService{
   
    private serviceId:number;
	public constructor(serviceId:number) {
    	  super();
	    this.serviceId  = serviceId;
	}
	
    public recevieData(obj: BaseREQData): void {
        var event: DataEvent = new DataEvent(DataEvent.DATA_RECEIVE);
        event.data = obj;
        this.dispatchEvent(event);

    }
    
    public sendData(obj: BaseREQData): void {
        obj.serviceId = this.serviceId;
        SocketDataServiceFactory.getInstance().sendData(obj.serviceId,obj);
    }
}
