/**
 *
 * @author 
 *
 */
class BaseDataService extends egret.EventDispatcher implements ISocketDataService{
	public constructor() {
    	 
    	  super();
	}
    public recevieData(obj: BaseREQData) : void{
            
    
    }
    
    public sendData(obj: BaseREQData) : void{
    
        if(obj.serviceId > 0) {
            SocketDataServiceFactory.getInstance().sendData(obj.serviceId,obj);
        }
        else {
            throw new Error("obj must set serviceId");
        }
    }
}
