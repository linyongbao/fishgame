/**
 *
 * @author 
 *
 */
class BaseREQData {
    public constructor(serviceId: number = 0) {
        this.serviceId = serviceId;
	}
	
    public  cmd: number;
    public  notice:String;
    public  jsonObj:any;
    public  code: number;
    public  toUid:String;
    public  toUids:String;
    public  fromUid:String;

    public  serviceId: number = 0;

   
}
