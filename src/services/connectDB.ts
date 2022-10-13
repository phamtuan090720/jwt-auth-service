import connectDB from "../utils/connectDB";

// tạo 1 Singleton để tạo các connect đến db
class ConnectDBService {
    private static _instance: ConnectDBService;
    private constructor() {
        connectDB();
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new ConnectDBService();
        return this._instance;
    }

}
export default ConnectDBService;
