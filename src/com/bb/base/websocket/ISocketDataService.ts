/**
 *
 * @author 
 *
 */
interface ISocketDataService extends Object{
    
    recevieData(obj: BaseREQData) : void;

    sendData(obj: BaseREQData): void;

}
