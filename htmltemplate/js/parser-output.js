var entities = [{
  "id": 1,
  "typeString": "class",
  "methods": [
    {
  "name": "init(entity: NSEntityDescription, insertInto context: NSManagedObjectContext?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1426
  ],
  "name": "TestUser",
  "superClass": 1425,
  "extensions": [
    2
  ]
},{
  "id": 3,
  "typeString": "class",
  "name": "BLETestManager",
  "superClass": 1427
},{
  "id": 4,
  "typeString": "class",
  "methods": [
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateValueFor descriptor: CBDescriptor, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLETestPeripheral",
  "superClass": 1428
},{
  "id": 5,
  "typeString": "class",
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1430
  ],
  "name": "AppDelegate",
  "superClass": 1429
},{
  "id": 6,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView",
  "superClass": 1431
},{
  "id": 7,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView_Previews",
  "superClass": 1432
},{
  "id": 8,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidDisconnect(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidBecomeActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillResignActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillEnterForeground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidEnterBackground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneDelegate",
  "superClass": 1429
},{
  "id": 9,
  "typeString": "protocol",
  "methods": [
    {
  "name": "didSubscribe()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUnsubscribe(central:CBCentral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUpdateTransferStatus(index: Int, progress:Float)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEPeripheralManagerDelegate",
  "superClass": 1433
},{
  "id": 10,
  "typeString": "class",
  "properties": [
    {
  "name": "var peripheralManager: CBPeripheralManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var peripheral : ESPeripheral",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var subscribedCentral: CBCentral?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: BLEPeripheralManagerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setup()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEPeripheralManager",
  "superClass": 1434,
  "extensions": [
    11,
    12
  ]
},{
  "id": 13,
  "typeString": "protocol",
  "methods": [
    {
  "name": "updateValue(_ data: Data, for characteristic: CBMutableCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "advertise(_ enabled: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ESPeripheralManagerDelegate",
  "superClass": 1433
},{
  "id": 14,
  "typeString": "class",
  "properties": [
    {
  "name": "var peripheralUpdateDelegate : ESPeripheralManagerDelegate? lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var advertisedService : CBMutableService",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let service",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var enableStatusNotification",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var status : WearableDeviceStatus",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentFragment: Fragment",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgDict : Dictionary<Int, ECG>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var advertismentData : [String:Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let maximumFragmentLength: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let maximumMetadataLength: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let maximumECGAvailable: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let maximumECGFilesAvailable: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgCount : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgSalvoId : UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readStatusCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGDetailsCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGDetailsCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGMetadataCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGMetadataCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notifyECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notifyECGCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "loadECGCSV(index: UInt) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadECGMeta(index: UInt) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareReadECGDetailsPacket(index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGDownloadRequest(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareECGMetadataRequest(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sendECGDataPacket(uuid: UUID, fragment: UInt16)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "triggerECG(count: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "notifyECGAvailable(count: Int, reset: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "notifyECGDataFragment()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatus()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(_ workaround: String = )",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ESPeripheral",
  "superClass": 1435
},{
  "id": 15,
  "typeString": "class",
  "properties": [
    {
  "name": "let statuses : [WearableDeviceStatus]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var peripheralManager: BLEPeripheralManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transferStatusVC : TransferStatusViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var okButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var buttonCollection: [UIButton]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transferStatusView: UIView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectionStatusView: ConnectionStatusView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didReceiveMemoryWarning()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "statusButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateTransferProgress(_ progress:Float)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TransmitStatusViewController",
  "superClass": 1436,
  "extensions": [
    16
  ]
},{
  "id": 17,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillResignActive(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationDidEnterBackground(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillEnterForeground(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationDidBecomeActive(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillTerminate(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppDelegate",
  "superClass": 1429
},{
  "id": 18,
  "typeString": "class",
  "properties": [
    {
  "name": "var isConnected",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectionStatusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var colorBlockView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ConnectionStatusView",
  "superClass": 1437
},{
  "id": 19,
  "typeString": "class",
  "properties": [
    {
  "name": "var containerView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusNumberLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SimulatorStatusView",
  "superClass": 1437
},{
  "id": 21,
  "typeString": "class",
  "properties": [
    {
  "name": "let key",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var initVector: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var length: UInt8?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var associatedData: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tag: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var ciphertext: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sampleData2",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData4",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData5",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData6",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData7",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportHeader",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData1",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData2",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData3",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData4",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData5",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportDataEnd",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let dataArray: Array<Data?>",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "BLEMockData"
},{
  "id": 22,
  "typeString": "class",
  "properties": [
    {
  "name": "let key",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var deinit",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sampleDataH1",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData2",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData4",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData5",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData6",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData7",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "decryptData() -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "parsePacket(packet: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "convertTimestamp(byteArray: Array<UInt8>) -> Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "initVector: Array<UInt8>? private var length: UInt8? private var associatedData: Array<UInt8>? private var tag: Array<UInt8>? private var ciphertext: Array<UInt8>? init(someString: String?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEMockData"
},{
  "id": 24,
  "typeString": "protocol",
  "methods": [
    {
  "name": "canUpdateValue(for: CBCharacteristic) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ESMockPeripheralDelegate",
  "superClass": 1428
},{
  "id": 25,
  "typeString": "class",
  "properties": [
    {
  "name": "var enableStatusNotification",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var status : WearableDeviceStatus?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectionTimer: Timer?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgSalvoId : UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let SERVICE_DISCOVERY_INTERVAL",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let READ_INTERVAL",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let WRITE_INTERVAL",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let STATUS_UPDATE_INTERVAL",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "var _service: CBMutableService",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let service",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var advertismentData : [String:Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readStatusCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGDetailsCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGDetailsCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGMetadataCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGMetadataCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notifyECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notifyECGCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var readECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var writeECGDownloadCharacteristic: CBMutableCharacteristic",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var state: CBPeripheralState",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusUpdateTimer: Timer? override",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var services: [CBService]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var canSendWriteWithoutResponse: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "createTimer()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverServices(_ serviceUUIDs: [CBUUID]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverIncludedServices(_ includedServiceUUIDs: [CBUUID]?, for service: CBService)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverCharacteristics(_ characteristicUUIDs: [CBUUID]?, for service: CBService)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverDescriptors(for characteristic: CBCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "readValue(for characteristic: CBCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "writeValue(_ data: Data, for characteristic: CBCharacteristic, type: CBCharacteristicWriteType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setNotifyValue(_ enabled: Bool, for characteristic: CBCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "readRSSI()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "maximumWriteValueLength(for type: CBCharacteristicWriteType) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "disconnect()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(_ workaround: String = )",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ESMockPeripheral",
  "superClass": 1435
},{
  "id": 26,
  "typeString": "class",
  "properties": [
    {
  "name": "let DEVICE_SERIAL_NUMBER : String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let DEVICE_ENCRYPTION_KEY : String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var availablePeripherals: [CBMockPeripheral]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var connectedPeripherals : [CBMockPeripheral]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let RSSI : NSNumber",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let INITIALIZATION_STATE_INTERVAL : TimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let DISCOVER_INTERVAL : TimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let DISCONNECTION_INTERVAL : TimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let CONNECTION_INTERVAL : TimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "var scanTimer : Timer?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var queue : DispatchQueue",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var _isScanning : Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var _managerState : CBManagerState override",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isScanning: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var state: CBManagerState",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scanForPeripherals(withServices serviceUUIDs: [CBUUID]?, options: [String: Any]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopScan()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "connect(_ peripheral: CBPeripheral, options: [String: Any]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "retrieveConnectedPeripherals(withServices serviceUUIDs: [CBUUID]) -> [CBPeripheral]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "retrievePeripherals(withIdentifiers identifiers: [UUID]) -> [CBPeripheral]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelPeripheralConnection(_ peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(delegate: CBCentralManagerDelegate?, queue q:DispatchQueue?, options: [String: Any]?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CBMockCentralManager",
  "superClass": 1438
},{
  "id": 27,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let statusCoordinator: StatusCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let statusViewController: StatusViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var wearable: Wearable?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let minimumStateDisplayTimeInterval",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var earliestNextStateDisplayTime",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let datePairingBegan",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentStatusPairingState: MobileDeviceStatus?",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatusState(to state: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resetStateThrottleTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "timeRemainingUntilNextStateMayBeTransitionedTo() -> TimeInterval",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "concludePairing()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(bleManager: BLEManager, statusCoordinator: StatusCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PairingCoordinator",
  "superClass": 1434,
  "extensions": [
    28,
    29,
    30,
    31
  ]
},{
  "id": 32,
  "typeString": "class",
  "properties": [
    {
  "name": "let rootViewController: UINavigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeCoordinators: [TaskCoordinator]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeCoordinatorPresentationTypes: [TaskPresentation]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentTransition: UIViewControllerAnimatedTransitioning? lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tabbarController: TabBarController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let storyboard",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tbc",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusCoordinator: StatusCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let coordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairingCoordinator: PairingCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var helpCoordinator: HelpCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let coordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var database: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let encryptionKey",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let db",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataManager: ESDataManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userDataSyncManager: UserDataSyncManager!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var deviceDataSyncManager: DeviceDataSyncManager!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var ecgManager: ECGManager!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var therapyManager: TherapyReportManager!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var bleManager: BLEManager!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var notificationManager: NotificationManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let notificationManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var authManager: CognitoAuthManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let authManager",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "initAfterSignIn()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "start()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "coordinator(for task: Task) -> TaskCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rootViewControllerForCoordinator(_ coordinator: TaskCoordinator) -> UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resetWearableDevice()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logoutUser(notify: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(window: UIWindow?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppCoordinator",
  "superClass": 1434,
  "extensions": [
    33,
    34,
    35,
    36,
    37
  ]
},{
  "id": 38,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tutorial: Tutorial?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _rootViewController: UIViewController!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped(sender: AnyObject!)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    391
  ],
  "name": "TutorialCoordinator",
  "extensions": [
    39
  ]
},{
  "id": 40,
  "typeString": "enum",
  "cases": [
    {
  "name": "login case forgotPassword case newPasswordPre case newPassword case updatePasswordPre case updatePassword case passwordUpdated case confirmationCode case eula"
}
  ],
  "name": "Step"
},{
  "id": 41,
  "typeString": "class",
  "properties": [
    {
  "name": "let loginCompletion: (_ success: Bool, _ error: Error?) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let password: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let username: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(username: String, password: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoginContext"
},{
  "id": 42,
  "typeString": "class",
  "properties": [
    {
  "name": "let MIN_PASSWORD_LENGTH",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isModalTask: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let navigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentStep: Step?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var userToLoginAfterEULAIsAgreedTo: User?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let apiManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let authManager: CognitoAuthManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let notificationManager: NotificationManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var loginContext: LoginContext?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var newPasswordCompletion: ((_ success: Bool, _ error: Error?) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var recoveryContext: CognitoAuthManager.Context? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "newPassword()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "confirmationCode(email: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatePassword()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatePasswordComplete()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "show(step: Step, initialize: ((UIViewController?) -> Void)? = nil)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "viewController(for step: Step) -> UIViewController",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "eulaAccepted()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(dataManager: ESDataManager, apiManager: ESAPIManager, authManager: CognitoAuthManager, notificationManager: NotificationManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoginCoordinator",
  "superClass": 1434,
  "containedEntities": [
    40,
    41
  ],
  "extensions": [
    43,
    44,
    45,
    46,
    47,
    48,
    49
  ]
},{
  "id": 50,
  "typeString": "enum",
  "cases": [
    {
  "name": "settings case deviceHistory case ecgTransfers case textContent"
}
  ],
  "name": "Step"
},{
  "id": 51,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let navigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentStep: Step?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let apiManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let deviceDataSyncManager: DeviceDataSyncManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let ecgManager: ECGManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let authManager: CognitoAuthManager",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "show(step: Step)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "viewController(for step: Step) -> UIViewController",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(dataManager: ESDataManager, apiManager: ESAPIManager, deviceDataSyncManager: DeviceDataSyncManager, bleManager: BLEManager, ecgManager: ECGManager, authManager: CognitoAuthManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    391
  ],
  "name": "SettingsCoordinator",
  "containedEntities": [
    50
  ],
  "extensions": [
    52,
    53,
    54
  ]
},{
  "id": 55,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var helpViewController: HelpViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpCoordinator",
  "superClass": 1434,
  "extensions": [
    56
  ]
},{
  "id": 57,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var navigationController: UINavigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqViewController: FAQViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped(sender: AnyObject!)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    391
  ],
  "name": "FAQCoordinator",
  "extensions": [
    58
  ]
},{
  "id": 59,
  "typeString": "enum",
  "cases": [
    {
  "name": "welcome"
}
  ],
  "name": "Step"
},{
  "id": 60,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let navigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentStep: Step?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "show(step: Step)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "viewController(for step: Step) -> UIViewController",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "IntroCoordinator",
  "superClass": 1434,
  "containedEntities": [
    59
  ],
  "extensions": [
    61
  ]
},{
  "id": 62,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let statusViewController: StatusViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManagerProtocol",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let deviceDataSyncManager: DeviceDataSyncManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let userDataSyncManager: UserDataSyncManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentAlertError: UIAlertController?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var currentMobileDeviceError: MobileDeviceError?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let error",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusState: MobileDeviceStatus",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var previousStatusState: MobileDeviceStatus? deinit",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handlePacketReceivedNotification(notification: Notification)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "handleMobileDeviceError(notification: Notification)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "updateStatusState(to state: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reconnect(toPeripheralWithId id: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init( bleManager: BLEManager, dataManager: ESDataManagerProtocol, deviceDataSyncManager: DeviceDataSyncManager, userDataSyncManager: UserDataSyncManager )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusCoordinator",
  "superClass": 1434,
  "extensions": [
    63
  ]
},{
  "id": 64,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presentationStyle: TaskPresentation?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _viewController: TutorialViewController!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var helpCoordinator: HelpCoordinator",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped(sender: AnyObject!)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(helpCoordinator help: HelpCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    391
  ],
  "name": "TutorialMenuCoordinator",
  "extensions": [
    65
  ]
},{
  "id": 66,
  "typeString": "struct",
  "properties": [
    {
  "name": "let standardTimeout",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ServiceCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ReadCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGNotifyCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGNotifyDownloadCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGWriteDataCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGReadDetailsCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGWriteDetailsCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGReadMetadataCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGWriteMetadataCharacteristicCBUUID",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "BLEConstants"
},{
  "id": 67,
  "typeString": "struct",
  "properties": [
    {
  "name": "let Packet",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "PacketReceivedKeys"
},{
  "id": 68,
  "typeString": "struct",
  "properties": [
    {
  "name": "let Packet",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ECGDataReceivedKeys"
},{
  "id": 69,
  "typeString": "struct",
  "properties": [
    {
  "name": "let mobileDeviceStatus",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MobileDeviceStatusUpdatedKeys"
},{
  "id": 70,
  "typeString": "struct",
  "properties": [
    {
  "name": "let mobileDeviceError",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MobileDeviceErrorUpdatedKeys"
},{
  "id": 71,
  "typeString": "struct",
  "properties": [
    {
  "name": "let data",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let dataSyncId",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let status",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "DataSyncKeys"
},{
  "id": 72,
  "typeString": "struct",
  "properties": [
    {
  "name": "let allowSimulator",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "AllowSimulatorKeys"
},{
  "id": 73,
  "typeString": "struct",
  "properties": [
    {
  "name": "let PacketReceivedNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGMetaDataReceivedNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGDataReceivedNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let ECGDataAvailableNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let LogoutUserWithNotifyNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let LogoutUserWithoutNotifyNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let MobileDeviceStatusUpdatedNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let MobileDeviceErrorUpdatedNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let DeviceResetNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let DataSyncNotification",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let AllowSimulatorNotification",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "NotificationsConstants",
  "containedEntities": [
    67,
    68,
    69,
    70,
    71,
    72
  ]
},{
  "id": 74,
  "typeString": "struct",
  "properties": [
    {
  "name": "let loginRequired",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let loginFailed",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let invalidPassword",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let invalidVerificationCode",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let newPasswordRequired",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let noReachability",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let noConnectivity",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let timedOut",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let unauthorized",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let defaultValue",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "APIErrorParameters"
},{
  "id": 75,
  "typeString": "struct",
  "properties": [
    {
  "name": "let apiGatewayDomainName",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let clientId",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let clientSecret: String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let poolId",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let poolName",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var username",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "APIParameters"
},{
  "id": 76,
  "typeString": "class",
  "methods": [
    {
  "name": "subscribeKeys() -> [Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEManagerPublisher",
  "superClass": 1439
},{
  "id": 77,
  "typeString": "class",
  "methods": [
    {
  "name": "subscribeKeys() -> [Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEPeripheralPublisher",
  "superClass": 1440
},{
  "id": 78,
  "typeString": "class",
  "methods": [
    {
  "name": "subscribeKeys() -> [Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WearablePublisher",
  "superClass": 1441
},{
  "id": 79,
  "typeString": "class",
  "methods": [
    {
  "name": "subscribeKeys() -> [Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CommunicationsPublisher",
  "superClass": 1442
},{
  "id": 80,
  "typeString": "class",
  "properties": [
    {
  "name": "let BLE_TIMEOUT",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var centralManager: CBCentralManager",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dataManager: ESDataManagerProtocol",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgManager: ECGManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var therapyManager: TherapyReportManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let operationsQueue",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let centralPublisher: BLEManagerPublisher",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let peripheralPublisher: BLEPeripheralPublisher",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let wearablePublisher: WearablePublisher",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let communicationsPublisher: CommunicationsPublisher",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectedWearable: Wearable?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var scannedWearable: Wearable?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var allowConnectionToSimulatedWearable: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isReconnecting: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var state: CBManagerState",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setAllowConnection(_ notification: Notification)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "persistPeripheralID()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "connect(peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scanForPeripherals(withServices: [CBUUID]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "disconnect()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addOperationWithTimeout(_ operation: Operation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelOperations()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scanForDevices(timeoutInSeconds: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopScan()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "connect(toWearable wearable: Wearable, timeoutInSeconds: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reconnect(withIdentifier identifier: UUID, timeoutInSeconds: Int = BLEConstants.standardTimeout)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "beginReceivingUpdates(onWearable wearable: Wearable, timeoutInSeconds: Int = BLEConstants.standardTimeout) -> BLEBaseOperation",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleConnection()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleDisconnection()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleReconnection()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleStatusUpdate(data: Data?, peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleTherapyReportData(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGDetails(index: Int, data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGMetadata(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGNotification(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGDownloadData(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGDownloadUpdate(data: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGFragment(details: BLEBinaryTransferDetails)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGDetails(index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGMetadata(uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableConnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(dataManager: ESDataManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEManager",
  "superClass": 1434,
  "extensions": [
    81,
    82,
    83,
    84
  ]
},{
  "id": 85,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var requestDataIdentifier: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "APIRequestWithDataIdentifier"
},{
  "id": 86,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var dataExpires: Date",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    347
  ],
  "name": "APIRouterIdentifiable"
},{
  "id": 87,
  "typeString": "enum",
  "cases": [
    {
  "name": "synced case already_synced case not_synced"
}
  ],
  "name": "SyncStatus"
},{
  "id": 88,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "WriteDeleteResult"
},{
  "id": 89,
  "typeString": "enum",
  "cases": [
    {
  "name": "succes"
},
    {
  "name": "failure"
}
  ],
  "name": "FetchResult"
},{
  "id": 90,
  "typeString": "class",
  "properties": [
    {
  "name": "let MAXIMUM_STATUS_COUNT_STORED: UInt",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let MAXIMUM_STATUS_COUNT_DELIVERED: UInt",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var lastSuccessfulRequestDate: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var deviceNotDetectedStartTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let APIManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManagerProtocol",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let database: Database",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var requestDataIdentifierOfRequestsinProgress: Set<String>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var lastReachabilityStatus",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var mobileDeviceErrors: PriorityQueue<MobileDeviceError>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var deviceDisconnectedTimer: Timer?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var statusNotReceivedTimer: Timer?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var statusNotTransmitedTimer: Timer?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var unprotectedForMoreThanHourTimer: Timer?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var notificationManager: NotificationManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var didBecomeActiveObserver: NSObjectProtocol",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var packetReceivedObserver: NSObjectProtocol",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var deviceResetObserver: NSObjectProtocol",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "start()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stop()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deviceDiagnosticIsCurrent() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "push(wearableDeviceDiagnostic status: WearableStatusPacket)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "push(mobileDeviceStatus status: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "pushToCloud(mobileDeviceStatus s: WearableDeviceStatus)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "push(mobileDeviceError error: MobileDeviceError)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "push(ecgData data: Data, uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "push(ecgMetaData data: Data, uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "post(_ apiRouter: APIRouterIdentifiable)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "postWearableAndStatusData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "synced( apiRouterSerializable: APIRouterIdentifiable, completion: @escaping (WriteDeleteResult) -> Void )",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "getAPIRequestsToPost( completion: @escaping (FetchResult) -> Void )",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "makeRequests(_ requests: [APIRouterIdentifiable])",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "resetStatusNotReceivedTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "startStatusNotTransmittedTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "resetStatusNotTransmittedTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "startUnprotectedForMoreThanHourTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "stopUnprotectedForMoreThanHourTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "startDeviceDisconnectedTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "resetDeviceDisconnectedTimer()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "appendSuffix(id: String, suffix: String) -> String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "removeSuffix(id: String) -> String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init( APIManager: ESAPIManager, bleManager: BLEManager, dataManager: ESDataManagerProtocol, database: Database )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DeviceDataSyncManager",
  "containedEntities": [
    87,
    88,
    89
  ],
  "extensions": [
    91,
    92
  ]
},{
  "id": 93,
  "typeString": "protocol",
  "methods": [
    {
  "name": "requestECGDetails(index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGMetadata(uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGFragment(details: BLEBinaryTransferDetails)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGManagerTransferDelegate",
  "superClass": 1433
},{
  "id": 94,
  "typeString": "enum",
  "cases": [
    {
  "name": "None case Count case DetailsStart case Details case MetadataStart case Metadata case Download case Validate"
}
  ],
  "name": "State"
},{
  "id": 95,
  "typeString": "struct",
  "name": "InvalidECG"
},{
  "id": 96,
  "typeString": "class",
  "properties": [
    {
  "name": "var observer : ECGManagerTransferObserver?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var state : State",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var dataManager : ESDataManagerProtocol?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var syncManager: DeviceDataSyncManager?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var count : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var index : Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var currFragment : Fragment",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var ecgCurrentId : String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var ecgTimer : Timer?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var wearable : Wearable?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var ecgDataRecords : Dictionary<String,ECG>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgDataRecordsPending : Dictionary<String,ECG>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let MAX_ECG_ERROR : Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let MAX_ECG_TIMEOUT : Double",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var currentECG : ECG?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nextECG : ECG?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let ecg",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let ecgDetails",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let nextIndex",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "dataSynced(notification: NSNotification)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateState(error: Bool, delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleECGTimeout(delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgAvailable(count: Int, delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgRecordReceived(details: BLEBinaryTransferDetails, delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgMetadataReceived(data: Data, delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgReadyForDownload(crc32: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgPacketReceived(_ packet: Data, delegate: ECGManagerTransferDelegate)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgDirectory(uuid: UUID) throws -> URL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "locate(uuid: UUID) -> ECG?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "persist(ecg: ECG)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(dataManager: ESDataManagerProtocol, syncManager: DeviceDataSyncManager, maxError: Int = 5, maxTimeout: Double = 5.0)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGManager",
  "containedEntities": [
    94,
    95
  ],
  "extensions": [
    97
  ]
},{
  "id": 98,
  "typeString": "class",
  "properties": [
    {
  "name": "var isTherapy: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var packetArray: [String]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let APIManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var deviceSN: String",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "checkPacket(dataPacket: Data?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "therapyDataRecieved(dataPacket: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "packAndSendData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "trackTherapyData(dataPacket: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startData(data: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "endData(data: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "storeDataPackets(dataPacket: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "therapyDataRequest()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(apiManager: ESAPIManager, bleManager: BLEManager, dataManager: ESDataManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TherapyReportManager"
},{
  "id": 99,
  "typeString": "protocol",
  "methods": [
    {
  "name": "notificationManager(_ manager: NotificationManager, presentTutorial tutorial: Tutorial)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "NotificationManagerDelegate",
  "superClass": 1433
},{
  "id": 100,
  "typeString": "enum",
  "properties": [
    {
  "name": "var allCategories: Set<UNNotificationCategory>",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "category() -> UNNotificationCategory",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "removeInstructions case applicationInstructions case call911 static var allCategories"
}
  ],
  "name": "InteractiveCategory",
  "superClass": 1443
},{
  "id": 101,
  "typeString": "enum",
  "methods": [
    {
  "name": "action() -> UNNotificationAction",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "cases": [
    {
  "name": "presentRemoveInstructions case presentApplicationInstructions case ignore case call911"
}
  ],
  "name": "InteractiveAction",
  "superClass": 1443
},{
  "id": 102,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: NotificationManagerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var previousStatus: MobileDeviceStatus?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var previousError: MobileDeviceError?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notificationCenter: UNUserNotificationCenter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "promptUserForNotificationPermission()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "displayNotification(for mobileDeviceStatus: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "displayNotification(for mobileDeviceError: MobileDeviceError)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelScheduledNotifications(for mobileDeviceStatus: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelScheduledNotifications(for mobileDeviceError: MobileDeviceError)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelAllScheduledNotifications()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "localNotification(for mobileDeviceStatus: MobileDeviceStatus, shouldRepeat: Bool? = false) -> UNNotificationRequest?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "localNotification(for mobileDeviceError: MobileDeviceError, shouldRepeat: Bool? = false) -> UNNotificationRequest?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "handleNotificationInteraction(forResponse response: UNNotificationResponse)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleNotificationInteraction(forAction action: InteractiveAction)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "handleNotificationInteraction(forMobileDeviceStatus mobileDeviceStatus: MobileDeviceStatus)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "NotificationManager",
  "superClass": 1434,
  "containedEntities": [
    100,
    101
  ],
  "extensions": [
    103
  ]
},{
  "id": 104,
  "typeString": "class",
  "properties": [
    {
  "name": "let APIManager: ESAPIManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dataManager: ESDataManagerProtocol",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var database: Database",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "getUserData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateClearStatus()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init( APIManager: ESAPIManager, dataManager: ESDataManagerProtocol, database: Database )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserDataSyncManager"
},{
  "id": 105,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var user: User?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearablePeripheralId: UUID?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDevice: WearableDevice?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var allowSimulator: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "clearData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clearPairedDevice()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ESDataManagerProtocol",
  "superClass": 1433
},{
  "id": 106,
  "typeString": "class",
  "properties": [
    {
  "name": "var database: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var user: User?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let user",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let existinguser",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newUser",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var retval: User? do",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let existingUsers: [User]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearablePeripheralId: UUID?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let user",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDevice: WearableDevice?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let user",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let user",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let oldWearableDevice",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newDevice",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let device",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var allowSimulator: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userDefaults",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userDefaults",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "clearData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clearPairedDevice()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(database: Database)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    105
  ],
  "name": "ESDataManager"
},{
  "id": 107,
  "typeString": "class",
  "properties": [
    {
  "name": "let statusName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusInfo"
},{
  "id": 108,
  "typeString": "enum",
  "properties": [
    {
  "name": "let cases: [WearableDeviceStatus]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let values: [UInt8: StatusInfo]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _ok",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _era",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _eraMedium",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _mraMedium",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _mraHigh",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _removalInitiated",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _standby",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _vfvtDetected",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _treatmentGiven",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _treatmentDelayed",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _unableToTreat",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _offBody",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _shippingMode",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _pairingMode",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let _applicationMode",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "applicationMode_appliedCorrectly"
},
    {
  "name": "monitoringMode"
},
    {
  "name": "era"
},
    {
  "name": "mraMedium"
},
    {
  "name": "era_statusCheck"
},
    {
  "name": "mraHigh"
},
    {
  "name": "mraHigh_statusCheck"
},
    {
  "name": "removalMode"
},
    {
  "name": "treatmentDelayed"
},
    {
  "name": "mraMedium_statusCheck"
},
    {
  "name": "applicationMode"
},
    {
  "name": "monitoringMode_statusCheck"
},
    {
  "name": "removalMode_statusCheck"
},
    {
  "name": "applicationMode_statusCheck"
},
    {
  "name": "applicationMode_mra"
},
    {
  "name": "monitoringMode_postTherapy"
},
    {
  "name": "monitoringMode_postTherapy_statusCheck"
},
    {
  "name": "deviceDisabled_mraHigh"
},
    {
  "name": "deviceDisabled_mraHigh_statusCheck"
},
    {
  "name": "removalMode_postTherapy"
},
    {
  "name": "removalMode_postTherapy_statusCheck"
},
    {
  "name": "applicationMode_failure"
},
    {
  "name": "monitoringMode_call911"
},
    {
  "name": "shippingMode"
},
    {
  "name": "therapyGiven"
},
    {
  "name": "therapyGiven_statusCheck"
},
    {
  "name": "applicationMode_mraHigh"
},
    {
  "name": "pressDown"
},
    {
  "name": "pressDown_statusCheck"
},
    {
  "name": "unableToTreat_call911"
},
    {
  "name": "applicationMode_appliedCorrectly_statusCheck"
},
    {
  "name": "treatmentGiven_call911"
},
    {
  "name": "treatmentGiven_call911_statusCheck"
},
    {
  "name": "offBody_notification"
},
    {
  "name": "offBody_notification_statusCheck"
},
    {
  "name": "offBody"
},
    {
  "name": "offBody_statusCheck"
},
    {
  "name": "monitoringMode_postOffBody"
},
    {
  "name": "pairingMode"
}
  ],
  "name": "WearableDeviceStatus",
  "superClass": 1444,
  "containedEntities": [
    107
  ]
},{
  "id": 109,
  "typeString": "enum",
  "cases": [
    {
  "name": "serialNumber case encryptionKey case datePaired case dateRemoved"
}
  ],
  "name": "CodingKeys",
  "superClass": 1443
},{
  "id": 110,
  "typeString": "class",
  "properties": [
    {
  "name": "var id: Int64?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var serialNumber: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var encryptionKey: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var datePaired: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateRemoved: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statii : [Status]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastStatus: Status?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateOfLastStatusReceived: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "columns() -> [DatabaseColumn]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "serialNumberMatches(encryptedSerialNumberBytes: Data) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(with database: Database, maxStatusCount: UInt) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearableDeviceResponse: WearableDeviceResponse)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    235
  ],
  "name": "WearableDevice",
  "containedEntities": [
    109
  ]
},{
  "id": 111,
  "typeString": "enum",
  "cases": [
    {
  "name": "userId case agreedToLatestEULADate case lastMobileDeviceClearStatus case pairedWearableDeviceId case pairedWearableDevicePeripheralIdRaw"
}
  ],
  "name": "CodingKeys",
  "superClass": 1443
},{
  "id": 112,
  "typeString": "class",
  "properties": [
    {
  "name": "var id: Int64?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userId: String!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var agreedToLatestEULADate: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastMobileDeviceClearStatus: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDeviceId: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDevicePeripheralIdRaw: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDevicePeripheralId: UUID?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let raw",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairedWearableDevice: WearableDevice?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearableDevices: [WearableDevice]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var previouslyPairedWearableDevices: [WearableDevice]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeWearableDevices: [WearableDevice]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeWearables",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "columns() -> [DatabaseColumn]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "update(with userResponse: UserResponse)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(with database: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(userResponse: UserResponse)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    235
  ],
  "name": "User",
  "containedEntities": [
    111
  ]
},{
  "id": 113,
  "typeString": "class",
  "properties": [
    {
  "name": "var id: Int64?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var deviceId: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateReceived: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var value: UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var synced: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "autoIncrementKey() -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "columns() -> [DatabaseColumn]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(deviceId: String, dateReceived: Date, value: UInt8)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(device: WearableDevice, status: WearableDeviceStatus, timestamp: Date)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    235
  ],
  "name": "Status"
},{
  "id": 114,
  "typeString": "struct",
  "properties": [
    {
  "name": "let subtitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let resourcePath: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialPage"
},{
  "id": 115,
  "typeString": "enum",
  "cases": [
    {
  "name": "RemovalVideo case Removal case Returns case Apply case Pairing"
}
  ],
  "name": "TutorialId",
  "superClass": 1443
},{
  "id": 116,
  "typeString": "struct",
  "properties": [
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sections: [TutorialSection]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sectionHeaderTitles: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var linkedTutorials: [LinkedTutorial]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ id: TutorialId)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Tutorial",
  "extensions": [
    117
  ]
},{
  "id": 118,
  "typeString": "struct",
  "properties": [
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let coverImage: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let overview: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pages: [TutorialPage]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let callouts: [TutorialCallout?]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialSection",
  "extensions": [
    119
  ]
},{
  "id": 120,
  "typeString": "struct",
  "properties": [
    {
  "name": "var icon: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var text: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialCallout"
},{
  "id": 121,
  "typeString": "class",
  "properties": [
    {
  "name": "let uuid: UUID",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var data: Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var metadata: Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transferDetails: BLEBinaryTransferDetails?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var uploaded: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copyInto(_ data: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECG"
},{
  "id": 122,
  "typeString": "class",
  "properties": [
    {
  "name": "var index: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var offset: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sequence: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var crc32: Data",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "headerSize() -> Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "validate() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "toData(length: Int) -> (Data, Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copyInto(_ data: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(index: Int, sequence: UInt16, data: Data)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Fragment"
},{
  "id": 123,
  "typeString": "class",
  "properties": [
    {
  "name": "let index: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let uuid: UUID",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let length: UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fragments: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fragmentSize: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let packetsPerFragment: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let packetSize: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hash: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currFragment: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currSequenceNum: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bytesOffset: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transferErrors: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var packetMap: [Bool]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startTime: TimeInterval",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var stopTime: TimeInterval",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var elapsedTime: TimeInterval",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var time",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadedBytesTotal: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadedBytes: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transferRateBytesPerSecond: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let time",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "resetStartTime()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "toData() -> Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "isFragmentComplete() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(index: UInt16, uuid: UUID, length: UInt32, packetSize: UInt16, fragmentSize: UInt16, hash: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(index: UInt16, data: Data)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEBinaryTransferDetails",
  "superClass": 1445
},{
  "id": 124,
  "typeString": "enum",
  "cases": [
    {
  "name": "audio case help case settings case tutorial case tutorialMenu case phoneNumber case email"
}
  ],
  "name": "ArticleContentType",
  "superClass": 1443
},{
  "id": 125,
  "typeString": "struct",
  "properties": [
    {
  "name": "var type: ArticleContentType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resourceID: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ stringRaw: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ArticleContent"
},{
  "id": 126,
  "typeString": "class",
  "properties": [
    {
  "name": "var timestamp: Float64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var battery_voltage: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tti: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var shock_energy: UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var shock_phase1: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var shock_phase2: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var current: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var voltage_phase1: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var voltage_phase2: Float32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var salvo_id: UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var salvo_index: UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var salvo_count: UInt8",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "toData() -> Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(index: UInt8, salvo: UInt8, count: UInt8, timestamp t: TimeInterval)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGMetaData"
},{
  "id": 127,
  "typeString": "enum",
  "methods": [
    {
  "name": "sendMessage()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "customerCare"
}
  ],
  "name": "EmailAddress",
  "superClass": 1443
},{
  "id": 128,
  "typeString": "struct",
  "properties": [
    {
  "name": "let answer: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let question: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQQuestion"
},{
  "id": 129,
  "typeString": "struct",
  "properties": [
    {
  "name": "let title: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let questions: [FAQQuestion] subscript(index: Int) -> FAQQuestion",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String : Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQQuestionSection"
},{
  "id": 130,
  "typeString": "struct",
  "properties": [
    {
  "name": "let questionSections: [FAQQuestionSection] subscript(index: Int) -> FAQQuestionSection",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(path: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQ"
},{
  "id": 131,
  "typeString": "struct",
  "properties": [
    {
  "name": "let devices: [WearableDeviceResponse]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "vend(_ representation: Any) throws -> WearableDevicesResponse?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init?(dictionary: [String: Any]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    346
  ],
  "name": "WearableDevicesResponse"
},{
  "id": 132,
  "typeString": "struct",
  "properties": [
    {
  "name": "let serialNumber: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let encryptionKey: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "vend(_ representation: Any) throws -> WearableDeviceResponse?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init?(dictionary: [String: Any]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    346
  ],
  "name": "WearableDeviceResponse"
},{
  "id": 133,
  "typeString": "struct",
  "methods": [
    {
  "name": "vend(_ representation: Any) throws -> EmptyResponse?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    346
  ],
  "name": "EmptyResponse"
},{
  "id": 134,
  "typeString": "struct",
  "properties": [
    {
  "name": "let id: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "vend(_ representation: Any) throws -> UserResponse?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init?(dictionary: [String: Any]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    346
  ],
  "name": "UserResponse"
},{
  "id": 135,
  "typeString": "enum",
  "cases": [
    {
  "name": "volume case line"
}
  ],
  "name": "ImageID",
  "superClass": 1443
},{
  "id": 136,
  "typeString": "struct",
  "properties": [
    {
  "name": "var imageString: NSAttributedString",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var queryString: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ id: ImageID)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextAttachment"
},{
  "id": 137,
  "typeString": "enum",
  "cases": [
    {
  "name": "tutorial case phoneNumber"
}
  ],
  "name": "FAQLinkType"
},{
  "id": 138,
  "typeString": "struct",
  "properties": [
    {
  "name": "let searchString: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let payload: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentType: FAQLinkType",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init (searchString: String, payload: String, contentType: FAQLinkType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQContentLink"
},{
  "id": 139,
  "typeString": "struct",
  "properties": [
    {
  "name": "let presentationIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let image: UIImage",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Card"
},{
  "id": 140,
  "typeString": "class",
  "properties": [
    {
  "name": "var peripheral: CBPeripheral?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var advertisementData: [String: Any]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let advertisementData",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let manufacturingData",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var encryptedSerialNumberBytes: Data?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Wearable",
  "superClass": 1434
},{
  "id": 141,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timestamp: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiVersion: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var status: UInt8",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WearableStatusPacket"
},{
  "id": 142,
  "typeString": "struct",
  "properties": [
    {
  "name": "let VersionOffset",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let TypeOffset",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let DataLengthOffset",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let StatusOffset",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let TimestampOffset",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let TotalSize",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiVersion: UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timestamp: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var status: UInt8",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "rawByteRepresentation(data: Data) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(status: UInt8)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(data: Data, shouldCheck: Bool = true)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(byteArray: ArraySlice<UInt8>, shouldCheck: Bool = true)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    141
  ],
  "name": "StatusPacket"
},{
  "id": 143,
  "typeString": "struct",
  "properties": [
    {
  "name": "let pulseColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pulseLoopTime: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let animationDuration: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let startAlpha: Float",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init (pulseColor: UIColor, pulseLoopTime: CGFloat, animationDuration: CGFloat, startAlpha: Float)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PulseAttributes"
},{
  "id": 144,
  "typeString": "enum",
  "methods": [
    {
  "name": "getPulse() -> PulseAttributes",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "blue case green case yellow case red"
}
  ],
  "name": "PulseState",
  "superClass": 1443
},{
  "id": 145,
  "typeString": "enum",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "noError case deviceDisconnectedPending case deviceDisconnected case deviceConnectionError case networkUnavailable case unableToTransmit case bluetoothDisabled case unknownSerialNumber var description"
}
  ],
  "name": "MobileDeviceError",
  "superClass": 1446
},{
  "id": 146,
  "typeString": "enum",
  "properties": [
    {
  "name": "let needToTransmitDataAfterSeconds: TimeInterval",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let notCurrentAfterSeconds: TimeInterval",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "create(with status: WearableDeviceStatus) -> MobileDeviceStatus?",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "unknown"
},
    {
  "name": "deviceUnpaired"
},
    {
  "name": "pairingMode"
},
    {
  "name": "pairingDeviceFound"
},
    {
  "name": "pairingSuccessful"
},
    {
  "name": "pairingUnsuccessful"
},
    {
  "name": "applicationMode"
},
    {
  "name": "preparingToMonitor"
},
    {
  "name": "applicationFailed"
},
    {
  "name": "shippingMode"
},
    {
  "name": "deviceActive"
},
    {
  "name": "era"
},
    {
  "name": "mraMedium"
},
    {
  "name": "mraHigh"
},
    {
  "name": "mraUrgent"
},
    {
  "name": "removalMode"
},
    {
  "name": "deviceNotDetectedUnder60Mins"
},
    {
  "name": "deviceNotDetectedOver60Mins"
},
    {
  "name": "treatmentWasDelayed"
},
    {
  "name": "unableToDeliverTreatment_vtvf"
},
    {
  "name": "unableToDeliverTreatment"
},
    {
  "name": "treatmentWasGiven"
},
    {
  "name": "treatmentWasGivenMRAMedium"
},
    {
  "name": "treatmentWasGivenMRAHigh"
},
    {
  "name": "deviceOffBodyInitial"
},
    {
  "name": "deviceOffBody"
},
    {
  "name": "pressAndHold"
}
  ],
  "name": "MobileDeviceStatus",
  "superClass": 1443,
  "extensions": [
    230
  ]
},{
  "id": 147,
  "typeString": "struct",
  "properties": [
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let resourceID: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LinkedTutorial"
},{
  "id": 148,
  "typeString": "struct",
  "properties": [
    {
  "name": "let screenTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let htmlResourceName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ArticleAttributes"
},{
  "id": 149,
  "typeString": "enum",
  "cases": [
    {
  "name": "accessoriesSupplies case alarmsAlerts"
}
  ],
  "name": "ArticleId"
},{
  "id": 150,
  "typeString": "struct",
  "properties": [
    {
  "name": "let screenTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let htmlResourceName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ id: ArticleId)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Article"
},{
  "id": 151,
  "typeString": "struct",
  "properties": [
    {
  "name": "let storyboardName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tutorialID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let chapterIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pageIndex: Int?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init (storyboardName: String, tutorialID: String, chapterIndex: Int, pageIndex: Int?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PageContent"
},{
  "id": 152,
  "typeString": "enum",
  "methods": [
    {
  "name": "newPage(_ content: PageContent)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "page case chapterLanding case chapterEnding"
}
  ],
  "name": "pageType"
},{
  "id": 153,
  "typeString": "enum",
  "cases": [
    {
  "name": "startup case login case intro case pairing case status case help case settings case tutorialMenu case tutorial case faq"
}
  ],
  "name": "Task",
  "superClass": 1443
},{
  "id": 154,
  "typeString": "enum",
  "cases": [
    {
  "name": "tutorial case tutorialPage case article case articleHtml case custom"
}
  ],
  "name": "ContentPageType",
  "superClass": 1443
},{
  "id": 155,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var contentType: ContentPageType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContentPage"
},{
  "id": 156,
  "typeString": "struct",
  "properties": [
    {
  "name": "let contentType: ContentPageType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    155
  ],
  "name": "TutorialContentPage"
},{
  "id": 157,
  "typeString": "struct",
  "properties": [
    {
  "name": "let contentType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let data: [String: Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    155
  ],
  "name": "CustomContentPage"
},{
  "id": 158,
  "typeString": "struct",
  "properties": [
    {
  "name": "let contentType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subTitle: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let resourceName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    155
  ],
  "name": "HTMLArticleContentPage"
},{
  "id": 159,
  "typeString": "struct",
  "properties": [
    {
  "name": "let contentType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentID: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    155
  ],
  "name": "TextArticleContentPage"
},{
  "id": 160,
  "typeString": "struct",
  "properties": [
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pages: [ContentPage] subscript(index: Int) -> ContentPage",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(_ dictionary: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContentSection"
},{
  "id": 161,
  "typeString": "enum",
  "methods": [
    {
  "name": "dial()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "customerCare case emergency"
}
  ],
  "name": "PhoneNumber",
  "superClass": 1443
},{
  "id": 162,
  "typeString": "class",
  "properties": [
    {
  "name": "let uuid: UUID",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "toData() -> Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getSize() -> Int",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "getSize() -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(data: Data)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEECGRequest"
},{
  "id": 163,
  "typeString": "class",
  "properties": [
    {
  "name": "let fragment: UInt16",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "getSize() -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "toData() -> Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(uuid: UUID, fragment f: UInt16)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(data: Data)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEECGFragmentRequest",
  "superClass": 162
},{
  "id": 164,
  "typeString": "class",
  "properties": [
    {
  "name": "var index: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager, index index_: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLERequestECGDetailsOperation",
  "superClass": 173
},{
  "id": 165,
  "typeString": "enum",
  "methods": [
    {
  "name": "toErrorCode(_ error: BLEError) -> BLEErrorCode",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "blePoweredOff case connectionFailed"
},
    {
  "name": "pairingFailed case invalidSecurityKey"
}
  ],
  "name": "BLEError"
},{
  "id": 166,
  "typeString": "enum",
  "cases": [
    {
  "name": "blePoweredOff case connectionFailed case pairingFailed case invalidSecurityKey"
}
  ],
  "name": "BLEErrorCode",
  "superClass": 1446
},{
  "id": 167,
  "typeString": "protocol",
  "methods": [
    {
  "name": "scanOperation(_ scanOperation: BLEScanOperation, wearableFound: Wearable, rssi: NSNumber)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scanEnded()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEScanDelegate",
  "superClass": 1433
},{
  "id": 168,
  "typeString": "class",
  "properties": [
    {
  "name": "var scanDelegate: BLEScanDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timeoutInSeconds: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "timeExpired()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cancelScan()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(timeoutInSeconds: Int = 60, manager: BLEManager, delegate: BLEScanDelegate)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEScanOperation",
  "superClass": 173,
  "extensions": [
    169
  ]
},{
  "id": 170,
  "typeString": "class",
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(manager: BLEManager, delegate: BLEBaseDelegate? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEInitOperation",
  "superClass": 173,
  "extensions": [
    171
  ]
},{
  "id": 172,
  "typeString": "protocol",
  "methods": [
    {
  "name": "bleOperationFailed(operation: BLEBaseOperation, withError error: BLEError)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bleUpdated(state: State)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEBaseDelegate",
  "superClass": 1433,
  "extensions": [
    174
  ]
},{
  "id": 173,
  "typeString": "class",
  "properties": [
    {
  "name": "var manager: BLEManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearable: Wearable?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: BLEBaseDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requiresBLEPoweredOn",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requiresWearableConnection",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requiredServices",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requiredCharacteristics",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _finished: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isFinished: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "cancel()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateRequirements() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateServices() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateCharacteristics() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(manager: BLEManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEBaseOperation",
  "superClass": 1447,
  "extensions": [
    175
  ]
},{
  "id": 176,
  "typeString": "class",
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEReceiveUpdatesOperation",
  "superClass": 173
},{
  "id": 177,
  "typeString": "class",
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEDiscoverCharacteristicsOperation",
  "superClass": 173,
  "extensions": [
    178
  ]
},{
  "id": 179,
  "typeString": "protocol",
  "methods": [
    {
  "name": "wearableConnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEConnectDelegate",
  "superClass": 1433
},{
  "id": 180,
  "typeString": "class",
  "properties": [
    {
  "name": "var connectDelegate: BLEConnectDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "timeExpired()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, delegate: BLEConnectDelegate?, manager: BLEManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEConnectOperation",
  "superClass": 173,
  "extensions": [
    181
  ]
},{
  "id": 182,
  "typeString": "class",
  "properties": [
    {
  "name": "let uuid: UUID",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager, uuid u: UUID)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLERequestECGMetadataOperation",
  "superClass": 173
},{
  "id": 183,
  "typeString": "class",
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEDiscoverServicesOperation",
  "superClass": 173,
  "extensions": [
    184
  ]
},{
  "id": 185,
  "typeString": "class",
  "properties": [
    {
  "name": "let uuid: UUID",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fragment: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "main()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(wearable: Wearable, manager: BLEManager, uuid uuid_: UUID, fragment fragment_: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLERequestECGFragmentOperation",
  "superClass": 173
},{
  "id": 189,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DataConvertible",
  "extensions": [
    190
  ]
},{
  "id": 203,
  "typeString": "protocol",
  "methods": [
    {
  "name": "startObservingKeyboardFrameChange()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopObservingKeyboardFrameChange()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "animatateOnKeyboardWillChange(keyboardEndFrame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AnimateWithKeyboardFrameWillChangeNotificationHandler",
  "extensions": [
    204
  ]
},{
  "id": 208,
  "typeString": "struct",
  "properties": [
    {
  "name": "let identifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let session",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let databaseEncryptionKey",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "VALConstants"
},{
  "id": 216,
  "typeString": "struct",
  "properties": [
    {
  "name": "let login",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let forgotPassword",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Screen"
},{
  "id": 217,
  "typeString": "struct",
  "properties": [
    {
  "name": "let category",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let passwordResetRequested",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Event"
},{
  "id": 218,
  "typeString": "struct",
  "name": "Onboarding",
  "containedEntities": [
    216,
    217
  ]
},{
  "id": 219,
  "typeString": "struct",
  "properties": [
    {
  "name": "let intro",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let bluetoothNotOn",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "introChapter(_ chapterIndex: Int) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "status(_ status: MobileDeviceStatus) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Screen"
},{
  "id": 220,
  "typeString": "struct",
  "properties": [
    {
  "name": "let category",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let deviceSettings",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let paringComplete",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Event"
},{
  "id": 221,
  "typeString": "struct",
  "name": "Pairing",
  "containedEntities": [
    219,
    220
  ]
},{
  "id": 222,
  "typeString": "struct",
  "methods": [
    {
  "name": "status(_ status: MobileDeviceStatus) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Screen"
},{
  "id": 223,
  "typeString": "struct",
  "name": "Status",
  "containedEntities": [
    222
  ]
},{
  "id": 224,
  "typeString": "struct",
  "properties": [
    {
  "name": "let help",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let faq",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let callCustomerCare",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let feedback",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "tutorialTableOfContents(_ name: String) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "tutorialTableOfContentsModal(_ name: String) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "tutorialSectionIntro(_ name: String, section: String) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "tutorialSectionPage(_ name: String, section: String, pageIndex: Int) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "tutorialSectionCompletion(_ name: String, section: String) -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "article(_ name: String) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Screen"
},{
  "id": 225,
  "typeString": "struct",
  "name": "Help",
  "containedEntities": [
    224
  ]
},{
  "id": 226,
  "typeString": "struct",
  "properties": [
    {
  "name": "let settings",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let changePassword",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let changeEmail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let legalNotice",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let eula",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let deviceHistory",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let aboutApp",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "article(_ name: String) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Screen"
},{
  "id": 227,
  "typeString": "struct",
  "properties": [
    {
  "name": "let category",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let passwordChanged",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let emailChanged",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Event"
},{
  "id": 228,
  "typeString": "struct",
  "name": "Settings",
  "containedEntities": [
    226,
    227
  ]
},{
  "id": 229,
  "typeString": "struct",
  "properties": [
    {
  "name": "let intro",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let category",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let deviceSettings",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let paringComplete",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "status(_ status: MobileDeviceStatus) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Analytics",
  "containedEntities": [
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228
  ]
},{
  "id": 232,
  "typeString": "enum",
  "cases": [
    {
  "name": "callCustomerCare case cannotSendMail case unableToCall911 case deviceConnectionLost case bluetoothDisabled"
}
  ],
  "name": "AlertMessageID"
},{
  "id": 234,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let type: GRDBCipher.Database.ColumnType",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseColumn"
},{
  "id": 235,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var id : Int64?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "autoIncrementKey() -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "columns() -> [DatabaseColumn]",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1426
  ],
  "name": "DatabaseCodable",
  "extensions": [
    238
  ]
},{
  "id": 236,
  "typeString": "enum",
  "cases": [
    {
  "name": "withBlockInvalidState"
}
  ],
  "name": "DatabaseError",
  "extensions": [
    725,
    726,
    977
  ]
},{
  "id": 237,
  "typeString": "class",
  "properties": [
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var db : GRDBCipher.DatabaseQueue?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var currdb : GRDBCipher.Database?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "isValid() -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "with(_ block:@escaping (GRDBCipher.Database) throws -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "save(_ object: DatabaseCodable) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "save<S: Sequence>(_ objects: S) throws where S.Iterator.Element: DatabaseCodable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "createTable<T: DatabaseCodable>(_ type: T.Type) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "object<Element: DatabaseCodable>(ofType type: Element.Type, forPrimaryKey key: String) throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "objects<Element: DatabaseCodable>(_ type: Element.Type, count: UInt = 1000, keys: [String]) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "objects<Element: DatabaseCodable>(_ type: Element.Type, count: UInt = 1000, where whereStr: String? = nil, order: String? = nil, arguments: [Any]? = nil) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete<S: Sequence, Element: DatabaseCodable>(_ type: Element.Type, objects: S) throws where S.Iterator.Element: DatabaseCodable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete(_ object: DatabaseCodable) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "deleteAll<Element: DatabaseCodable>(_ type: Element.Type) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(passphrase: String?)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Database",
  "containedEntities": [
    236
  ],
  "extensions": [
    513,
    640,
    685,
    686,
    734,
    735,
    802,
    817,
    818,
    819,
    820,
    821,
    822,
    823,
    824,
    825,
    826,
    827,
    828,
    978,
    991,
    997,
    1001,
    1003,
    1008,
    1025,
    1030,
    1041,
    1046,
    1053
  ]
},{
  "id": 239,
  "typeString": "struct",
  "properties": [
    {
  "name": "var heap: Heap<T>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "peek() -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "enqueue(_ element: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dequeue() -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changePriority(index i: Int, value: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sort: @escaping (T, T) -> Bool)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PriorityQueue",
  "extensions": [
    240
  ]
},{
  "id": 241,
  "typeString": "struct",
  "properties": [
    {
  "name": "var nodes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var orderCriteria: (T, T) -> Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "configureHeap(from array: [T])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "parentIndex(ofIndex i: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "leftChildIndex(ofIndex i: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rightChildIndex(ofIndex i: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peek() -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "insert(_ value: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insert<S: Sequence>(_ sequence: S) where S.Iterator.Element == T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "replace(index i: Int, value: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove() -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(at index: Int) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "shiftUp(_ index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "shiftDown(from index: Int, until endIndex: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "shiftDown(_ index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sort: @escaping (T, T) -> Bool)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(array: [T], sort: @escaping (T, T) -> Bool)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Heap",
  "extensions": [
    242
  ]
},{
  "id": 243,
  "typeString": "class",
  "properties": [
    {
  "name": "let key",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var initVector: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var length: UInt8?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var associatedData: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tag: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var ciphertext: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "decryptData() -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "parsePacket(packet: Data?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Decryptor"
},{
  "id": 244,
  "typeString": "class",
  "methods": [
    {
  "name": "loadHTML(webView: WKWebView, htmlPath: String, cssPath: String)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "resize(webView: WKWebView, completion: @escaping (Int) -> Void)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "WebViewHTMLLoader"
},{
  "id": 245,
  "typeString": "enum",
  "cases": [
    {
  "name": "text case html"
}
  ],
  "name": "ContentType"
},{
  "id": 246,
  "typeString": "enum",
  "cases": [
    {
  "name": "help case settings case customScreenName"
}
  ],
  "name": "AnalyticsCategory"
},{
  "id": 247,
  "typeString": "struct",
  "properties": [
    {
  "name": "let screenTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bodyText: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentType: ContentType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let analyticsCategory: AnalyticsCategory?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( screenTitle: String, bodyText: String, analyticsCategory: AnalyticsCategory? = nil )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?( screenTitle: String, htmlResourceName: String, cssResourceName: String? = , bundle: Bundle = Bundle.main, analyticsCategory: AnalyticsCategory? = nil )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextDisplayViewModel",
  "containedEntities": [
    245,
    246
  ]
},{
  "id": 248,
  "typeString": "enum",
  "cases": [
    {
  "name": "alwaysVisible case onlyVisibleIfScrolledTo case alwaysVisibleAfterScrolledTo"
}
  ],
  "name": "FooterViewPresentation"
},{
  "id": 249,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var webView: WKWebView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var loadingView : UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var htmlPath: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headerViewTopConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var contentWebViewHeightLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var footerViewTopConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var footerTopView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var footerViewScrolledTo",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var footerViewPresentation",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewModel: TextDisplayViewModel?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let viewModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var footerView: UIView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let footerView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(with viewModel: TextDisplayViewModel)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "addFooterSubviewView( _ view: UIView, presentation: FooterViewPresentation = .alwaysVisibleAfterScrolledTo )",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "TextDisplayViewController",
  "superClass": 1436,
  "containedEntities": [
    248
  ],
  "extensions": [
    250,
    251,
    252
  ]
},{
  "id": 253,
  "typeString": "protocol",
  "methods": [
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "legalNoticesSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "eulaSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deviceHistorySelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "aboutSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logOutSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resetDeviceConnection()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "allowSimulator(_ allowSimulator:Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgTransfers()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SettingsViewControllerDelegate",
  "superClass": 1433
},{
  "id": 254,
  "typeString": "enum",
  "properties": [
    {
  "name": "var numberOfSections: Int",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "user case info case debug static var numberOfSections"
}
  ],
  "name": "Section",
  "superClass": 1446
},{
  "id": 255,
  "typeString": "enum",
  "properties": [
    {
  "name": "var numberOfRows: Int",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "logOut static var numberOfRows"
}
  ],
  "name": "UserRows",
  "superClass": 1446
},{
  "id": 256,
  "typeString": "enum",
  "properties": [
    {
  "name": "var numberOfRows: Int",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "legalNotices case eula case deviceHistory case about static var numberOfRows"
}
  ],
  "name": "InfoRows",
  "superClass": 1446
},{
  "id": 257,
  "typeString": "enum",
  "properties": [
    {
  "name": "var numberOfRows: Int",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "resetDeviceConnection case allowSimulator case ecgTransfers static var numberOfRows"
}
  ],
  "name": "DebugRows",
  "superClass": 1446
},{
  "id": 258,
  "typeString": "class",
  "properties": [
    {
  "name": "var tableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: SettingsViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bleManager: BLEManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var allowSimulator: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "numberOfSections(in tableView: UITableView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SettingsViewController",
  "superClass": 1436,
  "containedEntities": [
    254,
    255,
    256,
    257
  ],
  "extensions": [
    259
  ]
},{
  "id": 260,
  "typeString": "protocol",
  "methods": [
    {
  "name": "openContentPage(_ contentPage: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialViewControllerDelegate",
  "superClass": 1433
},{
  "id": 261,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var tutorialPageDelegate: TutorialPageViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialPageViewControllerProtocol",
  "superClass": 1433
},{
  "id": 262,
  "typeString": "protocol",
  "methods": [
    {
  "name": "setProgress(_ index: Int, pageIndex: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getProgress(_ index: Int) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialPageCloseButtonTapped(_ tutorialPage: TutorialPageViewControllerProtocol)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialCellTapped(_ tutorial: Tutorial)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialPageViewControllerDelegate",
  "superClass": 1433
},{
  "id": 263,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: TutorialViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isTerminated: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "onTouchPatientGuide()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "popViewController()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialViewController",
  "superClass": 272
},{
  "id": 265,
  "typeString": "protocol",
  "methods": [
    {
  "name": "introViewControllerStartButtonTapped(_: IntroViewController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "IntroViewControllerDelegate",
  "superClass": 1433
},{
  "id": 266,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: IntroViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentContainer: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var imageView: UIImageView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var titleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var contentLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "startButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "IntroViewController",
  "superClass": 1436
},{
  "id": 267,
  "typeString": "class",
  "properties": [
    {
  "name": "var tutorial : Tutorial?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var page : Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var collectionView : UICollectionView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nextButton : UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var prevButton : UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var doneButton : UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startButton : UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var loadingView : UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate : TutorialViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startPressed(_ button: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "donePressed(_ button: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nextPressed(_ button: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prevPressed(_ button: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TutorialPageViewController",
  "superClass": 1436,
  "extensions": [
    268,
    269
  ]
},{
  "id": 270,
  "typeString": "class",
  "properties": [
    {
  "name": "var id: Int?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AlertsAndAlarmsViewController",
  "superClass": 316,
  "extensions": [
    271
  ]
},{
  "id": 272,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CustomTableViewController",
  "superClass": 1448
},{
  "id": 273,
  "typeString": "protocol",
  "methods": [
    {
  "name": "contentLinkTapped(_ content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpWebViewURLExtensionDelegate"
},{
  "id": 274,
  "typeString": "protocol",
  "methods": [
    {
  "name": "webViewLinkClicked(delegate: HelpWebViewURLExtensionDelegate?, URL: URL) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpWebViewURLExtension",
  "extensions": [
    275
  ]
},{
  "id": 276,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var statusState: MobileDeviceStatus",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastSyncTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var initialConnectionTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var deviceNotDetectedTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "refreshStatus()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "currentStatusStateDismissed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "faqTapped(_ faqID: Int?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialMenuTapped(_ contentId: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "newDeviceTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bluetoothSettingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusViewControllerDelegate",
  "superClass": 1433,
  "extensions": [
    279
  ]
},{
  "id": 277,
  "typeString": "protocol",
  "methods": [
    {
  "name": "okTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deviceNotFoundRetryTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pairingUnsuccessfulRetryTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PairingStatusViewControllerDelegate",
  "superClass": 1433
},{
  "id": 278,
  "typeString": "class",
  "properties": [
    {
  "name": "var statusDelegate: StatusViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pairingDelegate: PairingStatusViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isPairing",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isVisible",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateFormatter: DateFormatter",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let dateFormatter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusPulse: StatusCircle!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headlineLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var subheadlineLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var centerIcon: UIImageView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var detailLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var button: StatusButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var moreInfoButton: StatusButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var syncStatusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorSyncStatusView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorSyncStatusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var gradientBackground: GradientView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fadeBackground: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusCircle: StatusCircle!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var buttonsWidthConstraint: NSLayoutConstraint! @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didBecomeActive(_ notification: Notification)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "statusButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "moreInfoButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "updateState(to state: MobileDeviceStatus, error: MobileDeviceError?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusViewController",
  "superClass": 1436
},{
  "id": 280,
  "typeString": "enum",
  "cases": [
    {
  "name": "Uninitialized case Transferring case Completed"
}
  ],
  "name": "TransferStatus"
},{
  "id": 281,
  "typeString": "protocol",
  "methods": [
    {
  "name": "updatedTransfer(progress: Float)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatedTransfer(status: TransferStatus)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TransferStatusDelegate"
},{
  "id": 282,
  "typeString": "class",
  "properties": [
    {
  "name": "var progressBarView : UIProgressView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progressLabel : UILabel?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatedTransfer(progress: Float)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatedTransfer(status: TransferStatus)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TransferStatusViewController",
  "superClass": 1436
},{
  "id": 283,
  "typeString": "class",
  "properties": [
    {
  "name": "var wrappedViewController : UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContainerViewController",
  "superClass": 1436
},{
  "id": 284,
  "typeString": "protocol",
  "methods": [
    {
  "name": "requestPasswordReset( email: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ForgotPasswordEmailViewControllerDelegate"
},{
  "id": 285,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: ForgotPasswordEmailViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var titleDividerView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var instructionsLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var emailTextInput: FormTextField!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: FormErrorView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var changeButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var formSubmissionHasBeenAttempted",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "changeButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate() -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "ForgotPasswordEmailViewController",
  "superClass": 1436,
  "extensions": [
    286,
    287
  ]
},{
  "id": 288,
  "typeString": "class",
  "name": "ConfirmationCodeView",
  "superClass": 1449
},{
  "id": 289,
  "typeString": "protocol",
  "methods": [
    {
  "name": "verifyConfirmationCode( email: String, code: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ConfirmationCodeViewControllerDelegate"
},{
  "id": 290,
  "typeString": "class",
  "properties": [
    {
  "name": "let CODE_LENGTH : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: ConfirmationCodeViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var titleDividerView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var instructionsLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var codeTextInput: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var codeTextInputView: ConfirmationCodeView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: FormErrorView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var changeButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var formSubmissionHasBeenAttempted",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var email : String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "onCodeViewTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "changeButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate() -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "ConfirmationCodeViewController",
  "superClass": 1436,
  "extensions": [
    291,
    292
  ]
},{
  "id": 293,
  "typeString": "class",
  "properties": [
    {
  "name": "var maskString : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var placeholder : Character",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PhoneNumberInputView",
  "superClass": 1450
},{
  "id": 294,
  "typeString": "protocol",
  "methods": [
    {
  "name": "requestPasswordReset( email: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ForgotPasswordViewControllerDelegate"
},{
  "id": 295,
  "typeString": "class",
  "properties": [
    {
  "name": "let PHONE_NUMBER_LENGTH",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: ForgotPasswordViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var titleDividerView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var instructionsLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var phoneNumberTextInput: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var phoneNumberTextInputView: PhoneNumberInputView",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: FormErrorView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var changeButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var formSubmissionHasBeenAttempted",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "onCodeViewTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "changeButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate() -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "ForgotPasswordViewController",
  "superClass": 1436,
  "extensions": [
    296,
    297
  ]
},{
  "id": 298,
  "typeString": "protocol",
  "methods": [
    {
  "name": "requestPasswordUpdate( newPassword: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestPasswordUpdate( updatePassword: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ChangePasswordViewControllerDelegate"
},{
  "id": 299,
  "typeString": "protocol",
  "methods": [
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    298
  ],
  "name": "UpdatePasswordViewControllerDelegate"
},{
  "id": 300,
  "typeString": "enum",
  "cases": [
    {
  "name": "Update case New"
}
  ],
  "name": "PasswordRequest"
},{
  "id": 301,
  "typeString": "class",
  "properties": [
    {
  "name": "var passwordRequest : PasswordRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: ChangePasswordViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var instructionsLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var passwordTextInput: FormTextField!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var passwordConfirmTextInput: FormTextField!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: FormErrorView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var changeButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var formSubmissionHasBeenAttempted",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var securePasswordInputToggleButton: FormInputSecureToggleButton? @objc",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "securePasswordInputToggleButtonTapped(_ sender: FormInputSecureToggleButton)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "changeButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate(force: Bool) -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validateField(force: Bool, field: FormTextField) -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "UpdatePasswordViewController",
  "superClass": 1436,
  "containedEntities": [
    300
  ],
  "extensions": [
    302,
    303
  ]
},{
  "id": 304,
  "typeString": "protocol",
  "methods": [
    {
  "name": "attemptLogin( username: String, password: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "forgotPasswordButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoginViewControllerDelegate"
},{
  "id": 305,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: LoginViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var versionNumberLabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var buildNumberLabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bundleName: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scrollView: UIScrollView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var titleDividerView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var emailTextInput: FormTextField!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var passwordTextInput: FormTextField!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var loginErrorLabel: FormErrorView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var forgotPasswordButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var signInButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var securePasswordInputToggleButton: FormInputSecureToggleButton?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var formSubmissionHasBeenAttempted",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addBuildVersion(bundle: String?)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyUsernameHint(hint: String) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyError(error: Error) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "securePasswordInputToggleButtonTapped(_ sender: FormInputSecureToggleButton)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "loginButtonTapped()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "forgotPasswordButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "helpButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate(inputs: [FormTextField]? = nil) -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "LoginViewController",
  "superClass": 1436,
  "extensions": [
    306,
    307,
    308
  ]
},{
  "id": 309,
  "typeString": "protocol",
  "methods": [
    {
  "name": "settingsButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "openViewController(_: UIViewController, displayContent content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpViewControllerDelegate",
  "superClass": 1433
},{
  "id": 310,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var table: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var helpLabel: KerningLabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var categories: [ContentSection]",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpViewController",
  "superClass": 1436,
  "extensions": [
    311,
    312,
    313
  ]
},{
  "id": 314,
  "typeString": "enum",
  "cases": [
    {
  "name": "question case answer"
}
  ],
  "name": "FAQCellType"
},{
  "id": 315,
  "typeString": "struct",
  "properties": [
    {
  "name": "let questionIndexPath: IndexPath",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let type: FAQCellType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let text: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( type: FAQCellType, text: String, questionIndexPath: IndexPath )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQCellViewModel",
  "superClass": 1451,
  "containedEntities": [
    314
  ]
},{
  "id": 316,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqPath: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqID: Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableView: UITableView! lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqData: [FAQQuestionSection]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let path",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqVisableCellData: [[FAQCellViewModel]]",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQViewController",
  "superClass": 1436,
  "extensions": [
    317,
    318
  ]
},{
  "id": 320,
  "typeString": "class",
  "properties": [
    {
  "name": "var loggedIn: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var customTabBarContainerView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var customTabBarStackView: UIStackView! override",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLayoutSubviews()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setViewControllers(_ viewControllers: [UIViewController]?, animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateTabBarStackViewForSelectedIndex(animated: Bool = false)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TabBarController",
  "superClass": 1452,
  "extensions": [
    321
  ]
},{
  "id": 322,
  "typeString": "class",
  "properties": [
    {
  "name": "let statuses: [Status]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let wearableDeviceId: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var requestDataIdentifier: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dataExpires: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var json : [String:Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let wearableDeviceId",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( statuses: [Status], requestDataIdentifier: String )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MobileDeviceStatusRouter",
  "superClass": 1434
},{
  "id": 323,
  "typeString": "enum",
  "properties": [
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let email), .requestPasswordReset(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let email): return [ : email ] case .updatePassword(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newPassword): return [ : newPassword ] case .user: return [:] case .validNumber: return [:] } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    347
  ],
  "cases": [
    {
  "name": "updateEmail"
},
    {
  "name": "requestPasswordReset"
},
    {
  "name": "updatePassword"
},
    {
  "name": "user case validNumber public var method"
}
  ],
  "name": "UserRouter"
},{
  "id": 324,
  "typeString": "struct",
  "properties": [
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    347
  ],
  "name": "WearableDevicesRouter"
},{
  "id": 325,
  "typeString": "class",
  "properties": [
    {
  "name": "let wearableDeviceId: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let data: Data",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let ecgId: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let type: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let timeStampValue : String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var requestDataIdentifier: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dataExpires: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var supportsSecureCoding: Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "encodePrivate(with aCoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(requestId: String, wearableDeviceId: String, data: Data, ecgId: String, type: String)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init?(coder aDecoder: NSCoder, type: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ECGDataRouterPrototype",
  "superClass": 1434
},{
  "id": 326,
  "typeString": "class",
  "properties": [
    {
  "name": "let ECG_DATA_TYPE",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(with aCoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(requestId: String, wearableDeviceId: String, data: Data, ecgId: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGDataRouter",
  "superClass": 325
},{
  "id": 327,
  "typeString": "class",
  "properties": [
    {
  "name": "let ECG_METADATA_TYPE",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(with aCoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(requestId: String, wearableDeviceId: String, data: Data, ecgId: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGMetaDataRouter",
  "superClass": 325
},{
  "id": 328,
  "typeString": "class",
  "properties": [
    {
  "name": "var timestamp: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var therapyData: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var deviceSN: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requestDataIdentifier: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dataExpires: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let json : [String:Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(data: [String], requestDataId: String, device: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TherapyReportRouter",
  "superClass": 1434
},{
  "id": 329,
  "typeString": "enum",
  "methods": [
    {
  "name": "create(for error: Error) -> ESAPIError",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "loginFailed case loginRequired case invalidPassword case invalidVerificationCode case newPasswordRequired case apiError"
}
  ],
  "name": "ESAPIError",
  "extensions": [
    330
  ]
},{
  "id": 331,
  "typeString": "class",
  "properties": [
    {
  "name": "let username : String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let password : String",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "init(username: String, password: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Context"
},{
  "id": 332,
  "typeString": "class",
  "properties": [
    {
  "name": "let MAX_RETRIES",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let AWSCognitoUserPoolsSignInProviderKey",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let region",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let clientId",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let clientSecret",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let poolId",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isUserLoggedIn : Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var passwordAuthenticationCompletion: AWSTaskComp",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var newPasswordRequiredCompletion: AWSTaskComp",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lock",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var sessionTask : AWSTask<AWSCognitoIdentityUserSession>?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var requestsToRetry: [RequestRetryComp",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var session : AWSCognitoIdentityUserSession?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let session_dispatch_queue",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var delegate : AWSCognitoIdentityInteractiveAuthenticationDelegate",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "resetSession(ifExpired: Bool)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "invalidateSession()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "signOut()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "randomAlphaNumericString(length: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "passwordRecovery(username: String, completionHandler: @escaping (_ success: Bool, _ error: Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "confirmPasswordRecovery(username: String, code: String, completionHandler: @escaping (_ success: Bool, _ error: Error?, _ context: Context) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatePassword(newPassword: String, context: Context, completionHandler: @escaping (_ success: Bool, _ error: Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatePassword(newPassword: String, oldPassword: String, completionHandler: @escaping (_ success: Bool, _ error: Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CognitoAuthManager",
  "containedEntities": [
    331
  ],
  "extensions": [
    333,
    334,
    335
  ]
},{
  "id": 336,
  "typeString": "enum",
  "methods": [
    {
  "name": "create(for error: Error) -> APIError",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "create(withNetworkError networkError: NSError, response: HTTPURLResponse?) -> APIError",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "unableToConvertRouterToURLRequest case noConnectivity case noReachability case timedOut case unauthorized case forbidden case notFound case unableToParseJSON case unableToVendObject case conflict case unknownError"
}
  ],
  "name": "APIError",
  "extensions": [
    337,
    338,
    339
  ]
},{
  "id": 340,
  "typeString": "protocol",
  "methods": [
    {
  "name": "shouldSignRequestWithURL(_ requestURL: URL) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "refreshToken(completion: @escaping ((Result<OAuth2Token>) -> Void))",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tokenWasRefreshed(newToken: OAuth2Token)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "refreshTokenFailed(error: Error)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "OAuth2HandlerDelegate"
},{
  "id": 341,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: OAuth2HandlerDelegate?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var token: OAuth2Token?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isRefreshing",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let lock",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var requestsToRetry: [RequestRetryComp",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "shouldSignRequestWithURL(_ requestURL: URL) -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "OAuth2Handler",
  "extensions": [
    342,
    343
  ]
},{
  "id": 344,
  "typeString": "protocol",
  "name": "APIManagerSessionAdapter"
},{
  "id": 345,
  "typeString": "class",
  "properties": [
    {
  "name": "var baseUrl: URL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sessionManager: SessionManager",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var reachabilityManager: NetworkReachabilityManager?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let sessionAdapter: APIManagerSessionAdapter @discardableResult",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "setAdapter(_ requestAdapter: RequestAdapter)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setRetrier(_ requestRetrier: RequestRetrier)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "request<ResponseModel: APIResponseObjectSerializable>( _ APIRouter: APIRouterComposable, serializer: DataResponseSerializer<ResponseModel>? = nil, completionHandler: @escaping (Result<ResponseModel>) -> Void ) -> Request?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "request<ResponseModel: APIResponseObjectSerializable, ResponseModel2: APIResponseObjectSerializable>( _ APIRouters: (APIRouterComposable, APIRouterComposable), serializer: (DataResponseSerializer<ResponseModel>, DataResponseSerializer<ResponseModel2>)? = nil, completionHandler: @escaping (Result<(ResponseModel, ResponseModel2)>) -> Void )",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "request<ResponseModel: APIResponseObjectSerializable, ResponseModel2: APIResponseObjectSerializable, ResponseModel3: APIResponseObjectSerializable>( _ APIRouters: (APIRouterComposable, APIRouterComposable, APIRouterComposable), serializer: (DataResponseSerializer<ResponseModel>, DataResponseSerializer<ResponseModel2>, DataResponseSerializer<ResponseModel3>)? = nil, completionHandler: @escaping (Result<(ResponseModel, ResponseModel2, ResponseModel3)>) -> Void )",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "handleFailedResponse<ResponseModel: APIResponseObjectSerializable>( request: APIRouterComposable, response: HTTPURLResponse?, data: Data?, error: Error, completionHandler: @escaping (Result<ResponseModel>) -> Void )",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "handleSuccess<ResponseModel: APIResponseObjectSerializable>( request: APIRouterComposable, response: HTTPURLResponse?, data: Data?, vendedData: ResponseModel, completionHandler: @escaping (Result<ResponseModel>) -> Void )",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "responseSerializer<ResponseModel: APIResponseObjectSerializable>() -> DataResponseSerializer<ResponseModel>",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init( baseUrlString: URL, configuration: URLSessionConfiguration = URLSessionConfiguration.default, startReachabilityManagerOnInit: Bool = true, sessionAdapter: APIManagerSessionAdapter )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "APIManager"
},{
  "id": 346,
  "typeString": "protocol",
  "methods": [
    {
  "name": "vend(_ representation: Any) throws -> Self?",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "APIResponseObjectSerializable"
},{
  "id": 347,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameterEncoding: ParameterEncoding",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    454
  ],
  "name": "APIRouterComposable",
  "extensions": [
    348
  ]
},{
  "id": 349,
  "typeString": "class",
  "properties": [
    {
  "name": "let authManager: CognitoAuthManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dataManager: ESDataManagerProtocol",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "handleFailedResponse<ResponseModel : APIResponseObjectSerializable>( request: APIRouterComposable, response: HTTPURLResponse?, data: Data?, error: Error, completionHandler: @escaping (Result<ResponseModel> ) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleSuccess<ResponseModel : APIResponseObjectSerializable>( request: APIRouterComposable, response: HTTPURLResponse?, data: Data?, vendedData: ResponseModel, completionHandler: @escaping (Result<ResponseModel>) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(authManager: CognitoAuthManager, dataManager: ESDataManagerProtocol)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ESAPIManager",
  "superClass": 345
},{
  "id": 350,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var appCoordinator: AppCoordinator?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alertWindow: UIWindow",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let win",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "setupAnalytics()",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "AppDelegate",
  "superClass": 1429
},{
  "id": 351,
  "typeString": "class",
  "properties": [
    {
  "name": "var containerView: UIView",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isAnimated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInteractive: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var transitionWasCancelled: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var presentationStyle: UIModalPresentationStyle",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var targetTransform: CGAffineTransform",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let viewControllers: [UITransitionContextViewControllerKey : UIViewController]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let views: [UITransitionContextViewKey: UIView]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let completion: TransitionComp",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "completeTransition(_ didComplete: Bool)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "viewController(forKey key: UITransitionContextViewControllerKey) -> UIViewController?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "view(forKey key: UITransitionContextViewKey) -> UIView?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "initialFrame(for vc: UIViewController) -> CGRect",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "finalFrame(for vc: UIViewController) -> CGRect",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "updateInteractiveTransition(_ percentComplete: CGFloat)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "finishInteractiveTransition()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "cancelInteractiveTransition()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "pauseInteractiveTransition()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(from: UIViewController, to: UIViewController, container: UIView, completion: TransitionCompletion?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FullScreenTransitioningContext",
  "superClass": 1434
},{
  "id": 352,
  "typeString": "class",
  "methods": [
    {
  "name": "transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "animateTransition(using transitionContext: UIViewControllerContextTransitioning)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "GenericTaskTransition",
  "superClass": 1434
},{
  "id": 353,
  "typeString": "class",
  "methods": [
    {
  "name": "animateTransition(to toViewController: UIViewController, from fromViewController: UIViewController, using containerViewController: UIViewController, duration: TimeInterval, presenting: Bool, completion: @escaping () -> Void)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "SlideUpShowTransition",
  "superClass": 1434
},{
  "id": 354,
  "typeString": "class",
  "methods": [
    {
  "name": "transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "animateTransition(using transitionContext: UIViewControllerContextTransitioning)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "InstantTaskTransition",
  "superClass": 1434
},{
  "id": 355,
  "typeString": "class",
  "properties": [
    {
  "name": "let presenting: Bool",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "animateTransition(using transitionContext: UIViewControllerContextTransitioning)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(presenting: Bool = true)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SlideDownRevealTransition",
  "superClass": 1434
},{
  "id": 356,
  "typeString": "class",
  "methods": [
    {
  "name": "hitTest(_ point: CGPoint, with event: UIEvent?) -> UIView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(frame: CGRect, textContainer: NSTextContainer?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LinkContentTextView",
  "superClass": 1453
},{
  "id": 357,
  "typeString": "class",
  "properties": [
    {
  "name": "var icon: UIImageView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var calloutText: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "loadCalloutFromNib() -> CalloutView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CalloutView",
  "superClass": 1437
},{
  "id": 358,
  "typeString": "class",
  "properties": [
    {
  "name": "var view: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentProgressView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progressWidthConstraint: NSLayoutConstraint! required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "xibSetup()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setPercent(_ percent: CGFloat)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadViewFromNib() -> UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProgressBar",
  "superClass": 1437
},{
  "id": 359,
  "typeString": "protocol",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FormTextFieldDelegate",
  "superClass": 1433
},{
  "id": 360,
  "typeString": "class",
  "properties": [
    {
  "name": "var view: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var notEmptyFieldLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var underlineView: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: UILabel!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var textField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var textFieldStackView: UIStackView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var customAccessoryView: UIView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lastCustomAccessoryView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var textColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var focusedColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var unFocusedColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var font: UIFont",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorFont: UIFont",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notEmptyFieldLabelColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var notEmptyFieldLabelFont: UIFont",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: FormTextFieldDelegate?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var shouldSubmitFormOnReturn",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var nextField: UIResponder?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var value: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var placeholder: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let attributedString",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorText: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isValid: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var intrinsicContentSize : CGSize",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let intrinsicHeight: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var defaultSize",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "becomeFirstResponder() -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "updateView()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateUnderlineView()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateNotEmptyPlaceholder(animated: Bool = false)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "textFieldDidChange(_ sender: AnyObject)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FormTextField",
  "superClass": 1437,
  "extensions": [
    361
  ]
},{
  "id": 362,
  "typeString": "class",
  "methods": [
    {
  "name": "isEmpty(index: Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rawPhoneNumber(_ value: String) -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "PhoneNumberInputField",
  "superClass": 1205
},{
  "id": 363,
  "typeString": "protocol",
  "methods": [
    {
  "name": "setValueAndIndex(_ newValue: String, index: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteValue(index: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "isEmpty(index: Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1206
  ],
  "name": "IndexedInputableField"
},{
  "id": 364,
  "typeString": "class",
  "properties": [
    {
  "name": "var maskString: String",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var placeholder: Character",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var filteredCode: String",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "let digitSet",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let items",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "insertNewField(_ index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insertText(_ text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteBackward()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "next(index: Int, forward: Bool) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateCode()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MaskedCodeInputField"
},{
  "id": 365,
  "typeString": "class",
  "properties": [
    {
  "name": "var isSecure: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "commonInit()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FormInputSecureToggleButton",
  "superClass": 1454
},{
  "id": 366,
  "typeString": "protocol",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FormErrorViewDelegate",
  "superClass": 1433
},{
  "id": 367,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: FormErrorViewDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var view: UIView!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var dismissButton: UIButton!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var errorLabel: UILabel! @objc",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var errorColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var font: UIFont",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorText: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var intrinsicContentSize : CGSize",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let intrinsicHeight: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var defaultSize",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "applyTheme()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "configureSubviews()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "dismissButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FormErrorView",
  "superClass": 1437
},{
  "id": 368,
  "typeString": "struct",
  "properties": [
    {
  "name": "let nibName",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let identifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let height: CGFloat",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Constant"
},{
  "id": 369,
  "typeString": "class",
  "properties": [
    {
  "name": "var label: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpHeaderView",
  "superClass": 1455,
  "containedEntities": [
    368
  ]
},{
  "id": 370,
  "typeString": "struct",
  "properties": [
    {
  "name": "let nibName",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let identifier",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Constant"
},{
  "id": 371,
  "typeString": "enum",
  "cases": [
    {
  "name": "down case up case right"
}
  ],
  "name": "ArrowDirection"
},{
  "id": 372,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var chapterTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nextImageView: UIImageView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var chapterTitleLabelTrailingConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bottomSeparatorViewHeightLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var chapterTitleLabelLeftLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var arrowDirection: ArrowDirection",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let degrees: Double switch arrowDirection",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let radians: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var chapterTitleLabelInset: Double",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(arrowDirection: ArrowDirection, animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "HelpContentCell",
  "superClass": 1456,
  "containedEntities": [
    370,
    371
  ]
},{
  "id": 373,
  "typeString": "struct",
  "properties": [
    {
  "name": "let nibName",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let identifier",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Constant"
},{
  "id": 374,
  "typeString": "class",
  "properties": [
    {
  "name": "var contentHeight : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faqTopic : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentWebView: WKWebView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentWebViewHeightLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getTableView() -> UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForReuseOverride()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "webView(_ webView: WKWebView, didFinish navigation: WKNavigation!)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FAQAnswerCell",
  "superClass": 1456,
  "containedEntities": [
    373
  ]
},{
  "id": 375,
  "typeString": "protocol",
  "methods": [
    {
  "name": "switchValueChanged(onOffSwitch: UISwitch)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SwitchTableViewCellDelegate",
  "superClass": 1433
},{
  "id": 376,
  "typeString": "class",
  "properties": [
    {
  "name": "var titleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var onOffSwitch: UISwitch!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: SwitchTableViewCellDelegate? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setSelected(_ selected: Bool, animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "switchValueChanged(onOffSwitch: UISwitch)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SwitchTableViewCell",
  "superClass": 1456
},{
  "id": 377,
  "typeString": "class",
  "properties": [
    {
  "name": "let nibName",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "var imageView: UIImageView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var titleLabelDeselected: KerningLabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var titleLabelSelected: KerningLabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectionIndicatorViewHeightLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: CustomTabBarButtonViewDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isSelected: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _isSelected: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "instance(for tabBarItem: UITabBarItem, delegate: CustomTabBarButtonViewDelegate) -> CustomTabBarButtonView",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "setIsSelected(_ isSelected: Bool, animated: Bool = false, completion: (() -> Void)? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "buttonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CustomTabBarButtonView",
  "superClass": 1437
},{
  "id": 378,
  "typeString": "protocol",
  "methods": [
    {
  "name": "didTap(tabBarButtonView: CustomTabBarButtonView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CustomTabBarButtonViewDelegate",
  "superClass": 1433
},{
  "id": 379,
  "typeString": "enum",
  "cases": [
    {
  "name": "light case dark"
}
  ],
  "name": "StatusButtonStyle"
},{
  "id": 380,
  "typeString": "class",
  "properties": [
    {
  "name": "var style",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusButton",
  "superClass": 1454,
  "containedEntities": [
    379
  ]
},{
  "id": 381,
  "typeString": "class",
  "properties": [
    {
  "name": "var contentHeight : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: HelpViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentWebView: WKWebView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentWebViewHeightLayoutConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getTableView() -> UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForReuse()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "webView(_ webView: WKWebView, didFinish navigation: WKNavigation!)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WebViewCell",
  "superClass": 1456
},{
  "id": 382,
  "typeString": "class",
  "properties": [
    {
  "name": "var nextState: PulseState",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var isAnimating",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var circleLayer: CAShapeLayer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let circleLayer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let circlePath",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "willResignActive(_ notification: Notification)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeState(_ newState: PulseState)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startAnimatePulse(_ pulseEnum: PulseState = .blue)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopAnimation()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusCircle",
  "superClass": 1437
},{
  "id": 383,
  "typeString": "class",
  "properties": [
    {
  "name": "var contentWebView: WKWebView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getTableView() -> UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1458
  ],
  "name": "TutorialPageCollectionViewCell",
  "superClass": 1457
},{
  "id": 384,
  "typeString": "class",
  "properties": [
    {
  "name": "var kerning: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var text: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var attributedText: NSAttributedString?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isSettingKerning: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "updateKerning()",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "KerningLabel",
  "superClass": 1459
},{
  "id": 385,
  "typeString": "class",
  "properties": [
    {
  "name": "let gradientLayer",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var topColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bottomColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var layerClass: AnyClass",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutSubviews()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "GradientView",
  "superClass": 1437
},{
  "id": 386,
  "typeString": "protocol",
  "methods": [
    {
  "name": "bluetoothCommunication(enabled: Bool) @objc optional",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "internetCommunication(enabled: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CommunicationsProtocol"
},{
  "id": 387,
  "typeString": "protocol",
  "methods": [
    {
  "name": "wearableFound(wearable: Wearable) @objc optional",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableScanEnded() @objc optional",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableError(wearable: Wearable?, error: BLEErrorCode) @objc optional",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableConnected(wearable: Wearable) @objc optional",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WearableProtocol"
},{
  "id": 388,
  "typeString": "enum",
  "cases": [
    {
  "name": "modal case modalReplace case push case replace case replaceAll"
}
  ],
  "name": "TaskPresentation"
},{
  "id": 389,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var currentTask: Task?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UINavigationController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentCoordinator: TaskCoordinator?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentCoordinatorsPresentationType: TaskPresentation?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeCoordinators: [TaskCoordinator]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var activeCoordinatorPresentationTypes: [TaskPresentation]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentTransition: UIViewControllerAnimatedTransitioning?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin( _ task: Task, with data: Any?, presentAs presentation: TaskPresentation, animated: Bool, transition: UIViewControllerAnimatedTransitioning?, completion: (() -> Void)? )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dismissCurrentModalTask( animated: Bool, completion: (() -> Void)? )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "coordinator(for task: Task) -> TaskCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rootViewControllerForCoordinator(_ coordinator: TaskCoordinator) -> UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "transition( from fromCoordinator: TaskCoordinator?, to toCoordinator: TaskCoordinator, presentAs presentation: TaskPresentation, animated: Bool, transition: UIViewControllerAnimatedTransitioning?, completion:(() -> Void)? )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dismissModalTask( forPresentation presentation: TaskPresentation, animated: Bool, completion: (() -> Void)? )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppCoordinatorProtocol",
  "superClass": 1433,
  "extensions": [
    390
  ]
},{
  "id": 391,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate: TaskCoordinatorDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rootViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TaskCoordinator",
  "superClass": 1433,
  "extensions": [
    393
  ]
},{
  "id": 392,
  "typeString": "protocol",
  "methods": [
    {
  "name": "taskCoordinator(finished taskCoordinator: TaskCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(canceled taskCoordinator: TaskCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(_ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(_ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any?, presentAs: TaskPresentation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(_ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any?, presentAs: TaskPresentation, completion: @escaping (() -> Void))",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TaskCoordinatorDelegate",
  "superClass": 1433
},{
  "id": 394,
  "typeString": "protocol",
  "methods": [
    {
  "name": "didUpdateECG(count: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUpdateECG(_: ECG)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGManagerTransferObserver",
  "superClass": 1433
},{
  "id": 395,
  "typeString": "class",
  "properties": [
    {
  "name": "let queue: OperationQueue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var data: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var task: URLSessionTask?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var private",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let taskLock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskWillPerformHTTPRedirection: ((URLSession, URLSessionTask, HTTPURLResponse, URLRequest) -> URLRequest?)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDidReceiveChallenge: ((URLSession, URLSessionTask, URLAuthenticationChallenge) -> (URLSession.AuthChallengeDisposition, URLCredential?))?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskNeedNewBodyStream: ((URLSession, URLSessionTask) -> InputStream?)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDidCompleteWithError: ((URLSession, URLSessionTask, Error?) -> Void)? @objc(URLSession:task:willPerformHTTPRedirection:newRequest:comp",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest, completionHandler: @escaping (URLRequest?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, needNewBodyStream completionHandler: @escaping (InputStream?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession(_ session: URLSession, task: URLSessionTask, didCompleteWithError error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "initialResponseTime: CFAbsoluteTime? var credential: URLCredential? var metrics: AnyObject? private var _task: URLSessionTask?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(task: URLSessionTask?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TaskDelegate",
  "superClass": 1434
},{
  "id": 396,
  "typeString": "class",
  "properties": [
    {
  "name": "var dataTask: URLSessionDataTask",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var data: Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progress: Progress",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progressHandler: (closure: Request.ProgressHandler, queue: DispatchQueue)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataStream: ((_ data: Data) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var totalBytesReceived: Int64",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var mutableData: Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var expectedContentLength: Int64?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var dataTaskDidReceiveResponse: ((URLSession, URLSessionDataTask, URLResponse) -> URLSession.ResponseDisposition)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataTaskDidBecomeDownloadTask: ((URLSession, URLSessionDataTask, URLSessionDownloadTask) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataTaskDidReceiveData: ((URLSession, URLSessionDataTask, Data) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataTaskWillCacheResponse: ((URLSession, URLSessionDataTask, CachedURLResponse) -> CachedURLResponse?)?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, didReceive response: URLResponse, completionHandler: @escaping (URLSession.ResponseDisposition) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, didBecome downloadTask: URLSessionDownloadTask)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didReceive data: Data)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, willCacheResponse proposedResponse: CachedURLResponse, completionHandler: @escaping (CachedURLResponse?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(task: URLSessionTask?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DataTaskDelegate",
  "superClass": 395
},{
  "id": 397,
  "typeString": "class",
  "properties": [
    {
  "name": "var downloadTask: URLSessionDownloadTask",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progress: Progress",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progressHandler: (closure: Request.ProgressHandler, queue: DispatchQueue)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resumeData: Data? override",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var data: Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var destination: DownloadRequest.DownloadFileDestination?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var temporaryURL: URL?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var destinationURL: URL?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fileURL: URL?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadTaskDidFinishDownloadingToURL: ((URLSession, URLSessionDownloadTask, URL) -> URL)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadTaskDidWriteData: ((URLSession, URLSessionDownloadTask, Int64, Int64, Int64) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadTaskDidResumeAtOffset: ((URLSession, URLSessionDownloadTask, Int64, Int64) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingTo location: URL)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didWriteData bytesWritten: Int64, totalBytesWritten: Int64, totalBytesExpectedToWrite: Int64)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didResumeAtOffset fileOffset: Int64, expectedTotalBytes: Int64)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(task: URLSessionTask?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DownloadTaskDelegate",
  "superClass": 395
},{
  "id": 398,
  "typeString": "class",
  "properties": [
    {
  "name": "var uploadTask: URLSessionUploadTask",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var uploadProgress: Progress",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var uploadProgressHandler: (closure: Request.ProgressHandler, queue: DispatchQueue)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDidSendBodyData: ((URLSession, URLSessionTask, Int64, Int64, Int64) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "URLSession( _ session: URLSession, task: URLSessionTask, didSendBodyData bytesSent: Int64, totalBytesSent: Int64, totalBytesExpectedToSend: Int64)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(task: URLSessionTask?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UploadTaskDelegate",
  "superClass": 396
},{
  "id": 399,
  "typeString": "struct",
  "properties": [
    {
  "name": "let crlf",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "EncodingCharacters"
},{
  "id": 400,
  "typeString": "enum",
  "cases": [
    {
  "name": "initial"
},
    {
  "name": "encapsulated"
},
    {
  "name": "final"
}
  ],
  "name": "BoundaryType"
},{
  "id": 401,
  "typeString": "struct",
  "methods": [
    {
  "name": "randomBoundary() -> String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "boundaryData(forBoundaryType boundaryType: BoundaryType, boundary: String) -> Data",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "BoundaryGenerator",
  "containedEntities": [
    400
  ]
},{
  "id": 402,
  "typeString": "class",
  "properties": [
    {
  "name": "let headers: HTTPHeaders",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bodyStream: InputStream",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bodyContentLength: UInt64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hasInitialBoundary",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hasFinalBoundary",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(headers: HTTPHeaders, bodyStream: InputStream, bodyContentLength: UInt64)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BodyPart"
},{
  "id": 403,
  "typeString": "class",
  "properties": [
    {
  "name": "var contentType: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentLength: UInt64",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var boundary: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var bodyParts: [BodyPart]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var bodyPartError: AFError?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let streamBufferSize: Int",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "append(_ data: Data, withName name: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ data: Data, withName name: String, mimeType: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ data: Data, withName name: String, fileName: String, mimeType: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ fileURL: URL, withName name: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ fileURL: URL, withName name: String, fileName: String, mimeType: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append( _ stream: InputStream, withLength length: UInt64, name: String, fileName: String, mimeType: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ stream: InputStream, withLength length: UInt64, headers: HTTPHeaders)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encode() throws -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeEncodedData(to fileURL: URL) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encode(_ bodyPart: BodyPart) throws -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "encodeHeaders(for bodyPart: BodyPart) -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "encodeBodyStream(for bodyPart: BodyPart) throws -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "write(_ bodyPart: BodyPart, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "writeInitialBoundaryData(for bodyPart: BodyPart, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "writeHeaderData(for bodyPart: BodyPart, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "writeBodyStream(for bodyPart: BodyPart, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "writeFinalBoundaryData(for bodyPart: BodyPart, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "write(_ data: Data, to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "write(_ buffer: inout [UInt8], to outputStream: OutputStream) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "mimeType(forPathExtension pathExtension: String) -> String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "contentHeaders(withName name: String, fileName: String? = nil, mimeType: String? = nil) -> [String: String]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "initialBoundaryData() -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "encapsulatedBoundaryData() -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "finalBoundaryData() -> Data",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setBodyPartError(withReason reason: AFError.MultipartEncodingFailureReason)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "MultipartFormData",
  "containedEntities": [
    399,
    400,
    401,
    402
  ]
},{
  "id": 404,
  "typeString": "enum",
  "cases": [
    {
  "name": "unknown case notReachable case reachable"
}
  ],
  "name": "NetworkReachabilityStatus"
},{
  "id": 405,
  "typeString": "enum",
  "cases": [
    {
  "name": "ethernetOrWiFi case wwan"
}
  ],
  "name": "ConnectionType"
},{
  "id": 406,
  "typeString": "class",
  "properties": [
    {
  "name": "var isReachable: Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var isReachableOnWWAN: Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var isReachableOnEthernetOrWiFi: Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var networkReachabilityStatus: NetworkReachabilityStatus",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "let flags",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var listenerQueue: DispatchQueue",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var listener: Listener?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var flags: SCNetworkReachabilityFlags?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var flags",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reachability: SCNetworkReachability",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var previousFlags: SCNetworkReachabilityFlags",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "methods": [
    {
  "name": "startListening() -> Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "stopListening()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "notifyListener(_ flags: SCNetworkReachabilityFlags)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "networkReachabilityStatusForFlags(_ flags: SCNetworkReachabilityFlags) -> NetworkReachabilityStatus",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "isNetworkReachable(with flags: SCNetworkReachabilityFlags) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(host: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(reachability: SCNetworkReachability)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "NetworkReachabilityManager",
  "containedEntities": [
    404,
    405
  ]
},{
  "id": 407,
  "typeString": "struct",
  "properties": [
    {
  "name": "let requestStartTime: CFAbsoluteTime",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "initialResponseTime: CFAbsoluteTime public let requestCompletedTime: CFAbsoluteTime public let serializationCompletedTime: CFAbsoluteTime public let latency: TimeInterval public let requestDuration: TimeInterval public let serializationDuration: TimeInterval public let totalDuration: TimeInterval public init( requestStartTime: CFAbsoluteTime = 0.0, initialResponseTime: CFAbsoluteTime = 0.0, requestCompletedTime: CFAbsoluteTime = 0.0, serializationCompletedTime: CFAbsoluteTime = 0.0)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Timeline",
  "extensions": [
    408,
    409
  ]
},{
  "id": 411,
  "typeString": "enum",
  "properties": [
    {
  "name": "var isSuccess: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isFailure: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var value: Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let value): return value case .failure: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let error): return error } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "success"
},
    {
  "name": "failure"
}
  ],
  "name": "Result",
  "extensions": [
    412,
    413,
    414
  ]
},{
  "id": 415,
  "typeString": "enum",
  "cases": [
    {
  "name": "options"
},
    {
  "name": "get"
},
    {
  "name": "head"
},
    {
  "name": "post"
},
    {
  "name": "put"
},
    {
  "name": "patch"
},
    {
  "name": "delete"
},
    {
  "name": "trace"
},
    {
  "name": "connect"
}
  ],
  "name": "HTTPMethod",
  "superClass": 1443
},{
  "id": 416,
  "typeString": "protocol",
  "methods": [
    {
  "name": "encode(_ urlRequest: URLRequestConvertible, with parameters: Parameters?) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ParameterEncoding"
},{
  "id": 417,
  "typeString": "enum",
  "cases": [
    {
  "name": "methodDependent"
},
    {
  "name": "queryString"
},
    {
  "name": "httpBody"
}
  ],
  "name": "Destination"
},{
  "id": 418,
  "typeString": "enum",
  "methods": [
    {
  "name": "encode(key: String) -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "brackets"
},
    {
  "name": "noBrackets"
}
  ],
  "name": "ArrayEncoding"
},{
  "id": 419,
  "typeString": "enum",
  "methods": [
    {
  "name": "encode(value: Bool) -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "numeric"
},
    {
  "name": "literal"
}
  ],
  "name": "BoolEncoding"
},{
  "id": 420,
  "typeString": "struct",
  "properties": [
    {
  "name": "var prettyPrinted: JSONEncoding",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let options: JSONSerialization.WritingOptions",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "encode(_ urlRequest: URLRequestConvertible, with parameters: Parameters?) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encode(_ urlRequest: URLRequestConvertible, withJSONObject jsonObject: Any? = nil) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(options: JSONSerialization.WritingOptions = [])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    416
  ],
  "name": "JSONEncoding"
},{
  "id": 421,
  "typeString": "struct",
  "properties": [
    {
  "name": "var xml: PropertyListEncoding",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var binary: PropertyListEncoding",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let format: PropertyListSerialization.PropertyListFormat",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let options: PropertyListSerialization.WriteOptions",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "encode(_ urlRequest: URLRequestConvertible, with parameters: Parameters?) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init( format: PropertyListSerialization.PropertyListFormat = .xml, options: PropertyListSerialization.WriteOptions = 0)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    416
  ],
  "name": "PropertyListEncoding"
},{
  "id": 423,
  "typeString": "enum",
  "cases": [
    {
  "name": "missingURL case jsonEncodingFailed"
},
    {
  "name": "propertyListEncodingFailed"
}
  ],
  "name": "ParameterEncodingFailureReason"
},{
  "id": 424,
  "typeString": "enum",
  "cases": [
    {
  "name": "bodyPartURLInvalid"
},
    {
  "name": "bodyPartFilenameInvalid"
},
    {
  "name": "bodyPartFileNotReachable"
},
    {
  "name": "bodyPartFileNotReachableWithError"
},
    {
  "name": "bodyPartFileIsDirectory"
},
    {
  "name": "bodyPartFileSizeNotAvailable"
},
    {
  "name": "bodyPartFileSizeQueryFailedWithError"
},
    {
  "name": "bodyPartInputStreamCreationFailed"
},
    {
  "name": "outputStreamCreationFailed"
},
    {
  "name": "outputStreamFileAlreadyExists"
},
    {
  "name": "outputStreamURLInvalid"
},
    {
  "name": "outputStreamWriteFailed"
},
    {
  "name": "inputStreamReadFailed"
}
  ],
  "name": "MultipartEncodingFailureReason"
},{
  "id": 425,
  "typeString": "enum",
  "cases": [
    {
  "name": "dataFileNil case dataFileReadFailed"
},
    {
  "name": "missingContentType"
},
    {
  "name": "unacceptableContentType"
},
    {
  "name": "unacceptableStatusCode"
}
  ],
  "name": "ResponseValidationFailureReason"
},{
  "id": 426,
  "typeString": "enum",
  "cases": [
    {
  "name": "inputDataNil case inputDataNilOrZeroLength case inputFileNil case inputFileReadFailed"
},
    {
  "name": "stringSerializationFailed"
},
    {
  "name": "jsonSerializationFailed"
},
    {
  "name": "propertyListSerializationFailed"
}
  ],
  "name": "ResponseSerializationFailureReason"
},{
  "id": 427,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidURL"
},
    {
  "name": "parameterEncodingFailed"
},
    {
  "name": "multipartEncodingFailed"
},
    {
  "name": "responseValidationFailed"
},
    {
  "name": "responseSerializationFailed"
}
  ],
  "name": "AFError",
  "containedEntities": [
    423,
    424,
    425,
    426
  ],
  "extensions": [
    430,
    431,
    432
  ]
},{
  "id": 428,
  "typeString": "struct",
  "properties": [
    {
  "name": "let error: Error",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AdaptError"
},{
  "id": 433,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "ValidationResult"
},{
  "id": 434,
  "typeString": "struct",
  "properties": [
    {
  "name": "let type: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subtype: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isWildcard: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "matches(_ mime: MIMEType) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(_ string: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MIMEType"
},{
  "id": 438,
  "typeString": "struct",
  "properties": [
    {
  "name": "let DidResume",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let DidSuspend",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let DidCancel",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let DidComplete",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "Task"
},{
  "id": 439,
  "typeString": "struct",
  "properties": [
    {
  "name": "let Task",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let ResponseData",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "Key"
},{
  "id": 441,
  "typeString": "struct",
  "properties": [
    {
  "name": "let request: URLRequest?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let response: HTTPURLResponse?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let data: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let timeline: Timeline",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _metrics: AnyObject?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( request: URLRequest?, response: HTTPURLResponse?, data: Data?, error: Error?, timeline: Timeline = Timeline(), metrics: AnyObject? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DefaultDataResponse",
  "extensions": [
    449
  ]
},{
  "id": 442,
  "typeString": "struct",
  "properties": [
    {
  "name": "let request: URLRequest?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let response: HTTPURLResponse?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let data: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let result: Result<Value>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let timeline: Timeline",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var value: Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _metrics: AnyObject?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( request: URLRequest?, response: HTTPURLResponse?, data: Data?, result: Result<Value>, timeline: Timeline = Timeline())",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DataResponse",
  "extensions": [
    446,
    450
  ]
},{
  "id": 443,
  "typeString": "struct",
  "properties": [
    {
  "name": "let request: URLRequest?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let response: HTTPURLResponse?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let temporaryURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let destinationURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let resumeData: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let timeline: Timeline",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _metrics: AnyObject?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( request: URLRequest?, response: HTTPURLResponse?, temporaryURL: URL?, destinationURL: URL?, resumeData: Data?, error: Error?, timeline: Timeline = Timeline(), metrics: AnyObject? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DefaultDownloadResponse",
  "extensions": [
    451
  ]
},{
  "id": 444,
  "typeString": "struct",
  "properties": [
    {
  "name": "let request: URLRequest?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let response: HTTPURLResponse?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let temporaryURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let destinationURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let resumeData: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let result: Result<Value>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let timeline: Timeline",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var value: Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var error: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _metrics: AnyObject?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( request: URLRequest?, response: HTTPURLResponse?, temporaryURL: URL?, destinationURL: URL?, resumeData: Data?, result: Result<Value>, timeline: Timeline = Timeline())",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DownloadResponse",
  "extensions": [
    447,
    452
  ]
},{
  "id": 445,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var _metrics: AnyObject?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "add(_ metrics: AnyObject?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Response",
  "extensions": [
    448
  ]
},{
  "id": 453,
  "typeString": "protocol",
  "methods": [
    {
  "name": "asURL() throws -> URL",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "URLConvertible"
},{
  "id": 454,
  "typeString": "protocol",
  "methods": [
    {
  "name": "asURLRequest() throws -> URLRequest",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "URLRequestConvertible",
  "extensions": [
    458
  ]
},{
  "id": 461,
  "typeString": "protocol",
  "methods": [
    {
  "name": "adapt(_ urlRequest: URLRequest) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RequestAdapter"
},{
  "id": 462,
  "typeString": "protocol",
  "methods": [
    {
  "name": "should(_ manager: SessionManager, retry request: Request, with error: Error, completion: @escaping RequestRetryCompletion)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RequestRetrier"
},{
  "id": 463,
  "typeString": "protocol",
  "methods": [
    {
  "name": "task(session: URLSession, adapter: RequestAdapter?, queue: DispatchQueue) throws -> URLSessionTask",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TaskConvertible"
},{
  "id": 464,
  "typeString": "enum",
  "cases": [
    {
  "name": "data"
},
    {
  "name": "download"
},
    {
  "name": "upload"
},
    {
  "name": "stream"
}
  ],
  "name": "RequestTask"
},{
  "id": 465,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: TaskDelegate",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var task: URLSessionTask?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "let session: URLSession",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var request: URLRequest?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var response: HTTPURLResponse?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var retryCount: UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let originalTask: TaskConvertible?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startTime: CFAbsoluteTime?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endTime: CFAbsoluteTime?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var validations: [() -> Void]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDelegate: TaskDelegate",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var taskDelegateLock",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "authenticate( user: String, password: String, persistence: URLCredential.Persistence = .forSession) -> Self",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "authenticate(usingCredential credential: URLCredential) -> Self",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "authorizationHeader(user: String, password: String) -> (key: String, value: String)?",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "resume()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "suspend()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "cancel()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init(session: URLSession, requestTask: RequestTask, error: Error? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Request",
  "containedEntities": [
    464
  ],
  "extensions": [
    435,
    475,
    476,
    483,
    486,
    489,
    492,
    495
  ]
},{
  "id": 466,
  "typeString": "struct",
  "properties": [
    {
  "name": "let urlRequest: URLRequest",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "task(session: URLSession, adapter: RequestAdapter?, queue: DispatchQueue) throws -> URLSessionTask",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    463
  ],
  "name": "Requestable"
},{
  "id": 467,
  "typeString": "class",
  "properties": [
    {
  "name": "var request: URLRequest?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let request",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progress: Progress",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataDelegate: DataTaskDelegate",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "stream(closure: ((Data) -> Void)? = nil) -> Self",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "downloadProgress(queue: DispatchQueue = DispatchQueue.main, closure: @escaping ProgressHandler) -> Self",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "name": "DataRequest",
  "superClass": 465,
  "containedEntities": [
    466
  ],
  "extensions": [
    436,
    484,
    487,
    490,
    493,
    496
  ]
},{
  "id": 468,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: UInt",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let createIntermediateDirectories",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let removePreviousFile",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: UInt)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DownloadOptions",
  "superClass": 1460
},{
  "id": 469,
  "typeString": "enum",
  "methods": [
    {
  "name": "task(session: URLSession, adapter: RequestAdapter?, queue: DispatchQueue) throws -> URLSessionTask",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    463
  ],
  "cases": [
    {
  "name": "request"
},
    {
  "name": "resumeData"
}
  ],
  "name": "Downloadable"
},{
  "id": 470,
  "typeString": "class",
  "properties": [
    {
  "name": "var request: URLRequest?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let request",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let downloadable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resumeData: Data?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var progress: Progress",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var downloadDelegate: DownloadTaskDelegate",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "cancel()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "cancel(createResumeData: Bool)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "downloadProgress(queue: DispatchQueue = DispatchQueue.main, closure: @escaping ProgressHandler) -> Self",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "suggestedDownloadDestination( for directory: FileManager.SearchPathDirectory = .documentDirectory, in domain: FileManager.SearchPathDomainMask = .userDomainMask) -> DownloadFileDestination",
  "type": "type",
  "accessLevel": "open"
}
  ],
  "cases": [
    {
  "name": "let"
}
  ],
  "name": "DownloadRequest",
  "superClass": 465,
  "containedEntities": [
    468,
    469
  ],
  "extensions": [
    437,
    485,
    488,
    491,
    494,
    497
  ]
},{
  "id": 471,
  "typeString": "enum",
  "methods": [
    {
  "name": "task(session: URLSession, adapter: RequestAdapter?, queue: DispatchQueue) throws -> URLSessionTask",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    463
  ],
  "cases": [
    {
  "name": "data"
},
    {
  "name": "file"
},
    {
  "name": "stream"
}
  ],
  "name": "Uploadable"
},{
  "id": 472,
  "typeString": "class",
  "properties": [
    {
  "name": "var request: URLRequest?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let request",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let uploadable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let urlRequest), .file(_,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let urlRequest), .stream(_,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let urlRequest): return urlRequest } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var uploadProgress: Progress",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var uploadDelegate: UploadTaskDelegate",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "uploadProgress(queue: DispatchQueue = DispatchQueue.main, closure: @escaping ProgressHandler) -> Self",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "name": "UploadRequest",
  "superClass": 467,
  "containedEntities": [
    471
  ]
},{
  "id": 473,
  "typeString": "enum",
  "methods": [
    {
  "name": "task(session: URLSession, adapter: RequestAdapter?, queue: DispatchQueue) throws -> URLSessionTask",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    463
  ],
  "cases": [
    {
  "name": "stream"
},
    {
  "name": "netService"
}
  ],
  "name": "Streamable"
},{
  "id": 474,
  "typeString": "class",
  "name": "StreamRequest",
  "superClass": 465,
  "containedEntities": [
    473
  ]
},{
  "id": 477,
  "typeString": "enum",
  "cases": [
    {
  "name": "success"
},
    {
  "name": "failure"
}
  ],
  "name": "MultipartFormDataEncodingResult"
},{
  "id": 478,
  "typeString": "class",
  "properties": [
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let defaultHTTPHeaders: HTTPHeaders",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let acceptEncoding: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let acceptLanguage",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let quality",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userAgent: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let info",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let executable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bundle",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let appVersion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let appBuild",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let osNameVersion: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let version",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let versionString",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let osName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alamofireVersion: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let afInfo",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let build",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let multipartFormDataEncodingMemoryThreshold: UInt64",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let session: URLSession",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let delegate: SessionDelegate",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var startRequestsImmediately: Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var adapter: RequestAdapter?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var retrier: RequestRetrier?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var backgroundCompletionHandler: (() -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "let queue",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "commonInit(serverTrustPolicyManager: ServerTrustPolicyManager?)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "request( _ url: URLConvertible, method: HTTPMethod = .get, parameters: Parameters? = nil, encoding: ParameterEncoding = URLEncoding.default, headers: HTTPHeaders? = nil) -> DataRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "request(_ urlRequest: URLRequestConvertible) -> DataRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "request(_ urlRequest: URLRequest?, failedWith error: Error) -> DataRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "download( _ url: URLConvertible, method: HTTPMethod = .get, parameters: Parameters? = nil, encoding: ParameterEncoding = URLEncoding.default, headers: HTTPHeaders? = nil, to destination: DownloadRequest.DownloadFileDestination? = nil) -> DownloadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "download( _ urlRequest: URLRequestConvertible, to destination: DownloadRequest.DownloadFileDestination? = nil) -> DownloadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "download( resumingWith resumeData: Data, to destination: DownloadRequest.DownloadFileDestination? = nil) -> DownloadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "download( _ downloadable: DownloadRequest.Downloadable, to destination: DownloadRequest.DownloadFileDestination?) -> DownloadRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "download( _ downloadable: DownloadRequest.Downloadable?, to destination: DownloadRequest.DownloadFileDestination?, failedWith error: Error) -> DownloadRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "upload( _ fileURL: URL, to url: URLConvertible, method: HTTPMethod = .post, headers: HTTPHeaders? = nil) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload(_ fileURL: URL, with urlRequest: URLRequestConvertible) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload( _ data: Data, to url: URLConvertible, method: HTTPMethod = .post, headers: HTTPHeaders? = nil) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload(_ data: Data, with urlRequest: URLRequestConvertible) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload( _ stream: InputStream, to url: URLConvertible, method: HTTPMethod = .post, headers: HTTPHeaders? = nil) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload(_ stream: InputStream, with urlRequest: URLRequestConvertible) -> UploadRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload( multipartFormData: @escaping (MultipartFormData) -> Void, usingThreshold encodingMemoryThreshold: UInt64 = SessionManager.multipartFormDataEncodingMemoryThreshold, to url: URLConvertible, method: HTTPMethod = .post, headers: HTTPHeaders? = nil, queue: DispatchQueue? = nil, encodingCompletion: ((MultipartFormDataEncodingResult) -> Void)?)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload( multipartFormData: @escaping (MultipartFormData) -> Void, usingThreshold encodingMemoryThreshold: UInt64 = SessionManager.multipartFormDataEncodingMemoryThreshold, with urlRequest: URLRequestConvertible, queue: DispatchQueue? = nil, encodingCompletion: ((MultipartFormDataEncodingResult) -> Void)?)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "upload(_ uploadable: UploadRequest.Uploadable) -> UploadRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "upload(_ uploadable: UploadRequest.Uploadable?, failedWith error: Error) -> UploadRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "stream(withHostName hostName: String, port: Int) -> StreamRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "stream(with netService: NetService) -> StreamRequest",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "stream(_ streamable: StreamRequest.Streamable) -> StreamRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "stream(failedWith error: Error) -> StreamRequest",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "retry(_ request: Request) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "allowRetrier(_ retrier: RequestRetrier, toRetry request: Request, with error: Error)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init( configuration: URLSessionConfiguration = URLSessionConfiguration.default, delegate: SessionDelegate = SessionDelegate(), serverTrustPolicyManager: ServerTrustPolicyManager? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?( session: URLSession, delegate: SessionDelegate, serverTrustPolicyManager: ServerTrustPolicyManager? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SessionManager",
  "containedEntities": [
    477
  ]
},{
  "id": 479,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var serializeResponse: (URLRequest?, HTTPURLResponse?, Data?, Error?) -> Result<SerializedObject>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DataResponseSerializerProtocol"
},{
  "id": 480,
  "typeString": "struct",
  "properties": [
    {
  "name": "var serializeResponse: (URLRequest?, HTTPURLResponse?, Data?, Error?) -> Result<Value>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(serializeResponse: @escaping (URLRequest?, HTTPURLResponse?, Data?, Error?) -> Result<Value>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    479
  ],
  "name": "DataResponseSerializer"
},{
  "id": 481,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var serializeResponse: (URLRequest?, HTTPURLResponse?, URL?, Error?) -> Result<SerializedObject>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DownloadResponseSerializerProtocol"
},{
  "id": 482,
  "typeString": "struct",
  "properties": [
    {
  "name": "var serializeResponse: (URLRequest?, HTTPURLResponse?, URL?, Error?) -> Result<Value>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(serializeResponse: @escaping (URLRequest?, HTTPURLResponse?, URL?, Error?) -> Result<Value>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    481
  ],
  "name": "DownloadResponseSerializer"
},{
  "id": 498,
  "typeString": "class",
  "properties": [
    {
  "name": "let policies: [String: ServerTrustPolicy]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "serverTrustPolicy(forHost host: String) -> ServerTrustPolicy?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init(policies: [String: ServerTrustPolicy])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ServerTrustPolicyManager"
},{
  "id": 499,
  "typeString": "struct",
  "properties": [
    {
  "name": "var managerKey",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "AssociatedKeys"
},{
  "id": 500,
  "typeString": "enum",
  "methods": [
    {
  "name": "certificates(in bundle: Bundle = Bundle.main) -> [SecCertificate]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "publicKeys(in bundle: Bundle = Bundle.main) -> [SecKey]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "evaluate(_ serverTrust: SecTrust, forHost host: String) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "trustIsValid(_ trust: SecTrust) -> Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "certificateData(for trust: SecTrust) -> [Data]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "certificateData(for certificates: [SecCertificate]) -> [Data]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "publicKeys(for trust: SecTrust) -> [SecKey]",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "publicKey(for certificate: SecCertificate) -> SecKey?",
  "type": "type",
  "accessLevel": "private"
}
  ],
  "cases": [
    {
  "name": "performDefaultEvaluation"
},
    {
  "name": "performRevokedEvaluation"
},
    {
  "name": "pinCertificates"
},
    {
  "name": "pinPublicKeys"
},
    {
  "name": "disableEvaluation case customEvaluation"
}
  ],
  "name": "ServerTrustPolicy"
},{
  "id": 502,
  "typeString": "class",
  "properties": [
    {
  "name": "var sessionDidBecomeInvalidWithError: ((URLSession, Error?) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var sessionDidReceiveChallenge: ((URLSession, URLAuthenticationChallenge) -> (URLSession.AuthChallengeDisposition, URLCredential?))?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var sessionDidReceiveChallengeWithCompletion: ((URLSession, URLAuthenticationChallenge, @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var sessionDidFinishEventsForBackgroundURLSession: ((URLSession) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskWillPerformHTTPRedirection: ((URLSession, URLSessionTask, HTTPURLResponse, URLRequest) -> URLRequest?)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskWillPerformHTTPRedirectionWithCompletion: ((URLSession, URLSessionTask, HTTPURLResponse, URLRequest, @escaping (URLRequest?) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskDidReceiveChallenge: ((URLSession, URLSessionTask, URLAuthenticationChallenge) -> (URLSession.AuthChallengeDisposition, URLCredential?))?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskDidReceiveChallengeWithCompletion: ((URLSession, URLSessionTask, URLAuthenticationChallenge, @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskNeedNewBodyStream: ((URLSession, URLSessionTask) -> InputStream?)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskNeedNewBodyStreamWithCompletion: ((URLSession, URLSessionTask, @escaping (InputStream?) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskDidSendBodyData: ((URLSession, URLSessionTask, Int64, Int64, Int64) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var taskDidComplete: ((URLSession, URLSessionTask, Error?) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskDidReceiveResponse: ((URLSession, URLSessionDataTask, URLResponse) -> URLSession.ResponseDisposition)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskDidReceiveResponseWithCompletion: ((URLSession, URLSessionDataTask, URLResponse, @escaping (URLSession.ResponseDisposition) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskDidBecomeDownloadTask: ((URLSession, URLSessionDataTask, URLSessionDownloadTask) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskDidReceiveData: ((URLSession, URLSessionDataTask, Data) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskWillCacheResponse: ((URLSession, URLSessionDataTask, CachedURLResponse) -> CachedURLResponse?)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var dataTaskWillCacheResponseWithCompletion: ((URLSession, URLSessionDataTask, CachedURLResponse, @escaping (CachedURLResponse?) -> Void) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var downloadTaskDidFinishDownloadingToURL: ((URLSession, URLSessionDownloadTask, URL) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var downloadTaskDidWriteData: ((URLSession, URLSessionDownloadTask, Int64, Int64, Int64) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var downloadTaskDidResumeAtOffset: ((URLSession, URLSessionDownloadTask, Int64, Int64) -> Void)? #if !os(watchOS) @available(iOS 9.0, macOS 10.11, tvOS 9.0, *)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var streamTaskReadClosed: ((URLSession, URLSessionStreamTask) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var streamTaskWriteClosed: ((URLSession, URLSessionStreamTask) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var streamTaskBetterRouteDiscovered: ((URLSession, URLSessionStreamTask) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var streamTaskDidBecomeInputAndOutputStreams: ((URLSession, URLSessionStreamTask, InputStream, OutputStream) -> Void)?",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var _streamTaskReadClosed: Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _streamTaskWriteClosed: Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _streamTaskBetterRouteDiscovered: Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _streamTaskDidBecomeInputStream: Any? #endif",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var retrier: RequestRetrier?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sessionManager: SessionManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requests: [Int: Request]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lock",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "responds(to selector: Selector) -> Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SessionDelegate",
  "superClass": 1434,
  "extensions": [
    503,
    504,
    505,
    506,
    507
  ]
},{
  "id": 508,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let temporary: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let ifNotExists: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let withoutRowID: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var columns: [ColumnDefinition]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var primaryKeyConstraint: KeyConstraint?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var uniqueKeyConstraints: [KeyConstraint]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var foreignKeyConstraints: [(columns: [String], table: String, destinationColumns: [String]?, de",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var checkConstraints: [SQLExpression]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "autoIncrementedPrimaryKey(_ name: String, onConflict conflictResolution: Database.ConflictResolution? = nil) -> ColumnDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "column(_ name: String, _ type: Database.ColumnType? = nil) -> ColumnDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "primaryKey(_ columns: [String], onConflict conflictResolution: Database.ConflictResolution? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "uniqueKey(_ columns: [String], onConflict conflictResolution: Database.ConflictResolution? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "foreignKey(_ columns: [String], references table: String, columns destinationColumns: [String]? = nil, onDelete deleteAction: Database.ForeignKeyAction? = nil, onUpdate updateAction: Database.ForeignKeyAction? = nil, deferred: Bool = false)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "check(_ condition: SQLExpressible)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "check(sql: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sql(_ db: Database) throws -> String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(name: String, temporary: Bool, ifNotExists: Bool, withoutRowID: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TableDefinition"
},{
  "id": 509,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var addedColumns: [ColumnDefinition]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "add(column name: String, _ type: Database.ColumnType? = nil) -> ColumnDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sql(_ db: Database) throws -> String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TableAlteration"
},{
  "id": 510,
  "typeString": "enum",
  "cases": [
    {
  "name": "none case index case unique"
}
  ],
  "name": "Index"
},{
  "id": 511,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let type: Database.ColumnType?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var primaryKey: (conflictResolution: Database.ConflictResolution?, autoincrement: Bool)?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var index: Index",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var notNullConflictResolution: Database.ConflictResolution?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var checkConstraints: [SQLExpression]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var foreignKeyConstraints: [(table: String, column: String?, de",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var defaultExpression: SQLExpression?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var collationName: String? @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult @discardableResult",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "primaryKey(onConflict conflictResolution: Database.ConflictResolution? = nil, autoincrement: Bool = false) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "notNull(onConflict conflictResolution: Database.ConflictResolution? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unique(onConflict conflictResolution: Database.ConflictResolution? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "indexed() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "check(_ condition: (Column) -> SQLExpressible) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "check(sql: String) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "defaults(to value: DatabaseValueConvertible) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "defaults(sql: String) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "collate(_ collation: Database.CollationName) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "collate(_ collation: DatabaseCollation) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "references(_ table: String, column: String? = nil, onDelete deleteAction: Database.ForeignKeyAction? = nil, onUpdate updateAction: Database.ForeignKeyAction? = nil, deferred: Bool = false) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sql(_ db: Database, tableName: String, primaryKeyColumns: [String]?) throws -> String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "indexDefinition(in table: String) -> IndexDefinition?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(name: String, type: Database.ColumnType?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ColumnDefinition",
  "containedEntities": [
    510
  ]
},{
  "id": 512,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let table: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let unique: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let ifNotExists: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let condition: SQLExpression?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "sql() -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "IndexDefinition"
},{
  "id": 514,
  "typeString": "struct",
  "properties": [
    {
  "name": "let joinConditionRequest: ForeignKeyJoinConditionRequest",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var key: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var request: AssociationRequest<Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "forKey(_ key: String) -> BelongsToAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joinCondition(_ db: Database) throws -> JoinCondition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapRequest(_ transform: (AssociationRequest<Destination>) -> AssociationRequest<Destination>) -> BelongsToAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    531
  ],
  "name": "BelongsToAssociation",
  "extensions": [
    515
  ]
},{
  "id": 517,
  "typeString": "struct",
  "properties": [
    {
  "name": "let joinConditionRequest: ForeignKeyJoinConditionRequest",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var key: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var request: AssociationRequest<Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "forKey(_ key: String) -> HasOneAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joinCondition(_ db: Database) throws -> JoinCondition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapRequest(_ transform: (AssociationRequest<Destination>) -> AssociationRequest<Destination>) -> HasOneAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    531
  ],
  "name": "HasOneAssociation",
  "extensions": [
    518
  ]
},{
  "id": 520,
  "typeString": "struct",
  "properties": [
    {
  "name": "var source: SQLSource",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selection: [SQLSelectable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var filterPromise: DatabasePromise<SQLExpression?>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ordering: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var joins: [AssociationJoin]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var alias: TableAlias?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AssociationQuery",
  "extensions": [
    521,
    522,
    523
  ]
},{
  "id": 524,
  "typeString": "struct",
  "properties": [
    {
  "name": "let joinConditionRequest: ForeignKeyJoinConditionRequest",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var key: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var request: AssociationRequest<Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "forKey(_ key: String) -> HasManyAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joinCondition(_ db: Database) throws -> JoinCondition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapRequest(_ transform: (AssociationRequest<Destination>) -> AssociationRequest<Destination>) -> HasManyAssociation<Origin, Destination>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    531
  ],
  "name": "HasManyAssociation",
  "extensions": [
    525
  ]
},{
  "id": 527,
  "typeString": "struct",
  "properties": [
    {
  "name": "var originColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var destinationColumns: [String]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ originColumns: [String], to destinationColumns: [String]? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ originColumns: [ColumnExpression], to destinationColumns: [ColumnExpression]? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ForeignKey"
},{
  "id": 528,
  "typeString": "struct",
  "properties": [
    {
  "name": "let originTable: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let destinationTable: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let originColumns: [String]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let destinationColumns: [String]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fetch(_ db: Database) throws -> ForeignKeyInfo",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(originTable: String, destinationTable: String, foreignKey: ForeignKey?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ForeignKeyRequest"
},{
  "id": 529,
  "typeString": "struct",
  "properties": [
    {
  "name": "let query: AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(query: AssociationQuery)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ request: QueryInterfaceRequest<T>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AssociationRequest",
  "extensions": [
    530
  ]
},{
  "id": 531,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var key: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var request: AssociationRequest<RowDecoder>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "forKey(_ key: String) -> Self",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "joinCondition(_ db: Database) throws -> JoinCondition",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mapRequest(_ transform: (AssociationRequest<RowDecoder>) -> AssociationRequest<RowDecoder>) -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    547
  ],
  "name": "Association",
  "extensions": [
    533,
    534,
    535
  ]
},{
  "id": 532,
  "typeString": "struct",
  "properties": [
    {
  "name": "var foreignKeyRequest: ForeignKeyRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var originIsLeft: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fetch(_ db: Database) throws -> JoinCondition",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ForeignKeyJoinConditionRequest"
},{
  "id": 536,
  "typeString": "struct",
  "properties": [
    {
  "name": "let query: QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(query: QueryInterfaceQuery)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ request: AssociationRequest<T>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "QueryInterfaceRequest",
  "extensions": [
    537,
    538,
    539,
    540,
    554,
    636,
    646,
    985
  ]
},{
  "id": 542,
  "typeString": "protocol",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SelectionRequest",
  "extensions": [
    548
  ]
},{
  "id": 543,
  "typeString": "protocol",
  "methods": [
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FilteredRequest",
  "extensions": [
    549
  ]
},{
  "id": 544,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "aliased(_ alias: TableAlias) -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TableRequest",
  "extensions": [
    550,
    551
  ]
},{
  "id": 545,
  "typeString": "protocol",
  "methods": [
    {
  "name": "group(_ expressions: [SQLExpressible]) -> Self",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "having(_ predicate: SQLExpressible) -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AggregatingRequest",
  "extensions": [
    552
  ]
},{
  "id": 546,
  "typeString": "protocol",
  "methods": [
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> Self",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reversed() -> Self",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "OrderedRequest",
  "extensions": [
    553
  ]
},{
  "id": 547,
  "typeString": "protocol",
  "protocols": [
    542
  ],
  "name": "DerivableRequest"
},{
  "id": 556,
  "typeString": "protocol",
  "methods": [
    {
  "name": "collectionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "contains(_ value: SQLExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLCollection",
  "extensions": [
    558
  ]
},{
  "id": 557,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expressions: [SQLExpression]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "collectionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "contains(_ value: SQLExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<S: Sequence>(_ expressions: S) where S.Iterator.Element : SQLExpressible",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    556
  ],
  "name": "SQLExpressionsArray"
},{
  "id": 559,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    567
  ],
  "name": "SQLExpression",
  "extensions": [
    561,
    562,
    563,
    599
  ]
},{
  "id": 560,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expression: SQLExpression)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionNot"
},{
  "id": 564,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var reversed: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "orderingTermSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedOrdering(with alias: TableAlias) -> SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLOrderingTerm"
},{
  "id": 565,
  "typeString": "enum",
  "properties": [
    {
  "name": "var reversed: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let expression): return SQLOrdering.desc(expression) case .desc(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let expression): return SQLOrdering.asc(expression) } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "orderingTermSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedOrdering(with alias: TableAlias) -> SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    564
  ],
  "cases": [
    {
  "name": "asc"
},
    {
  "name": "desc"
}
  ],
  "name": "SQLOrdering"
},{
  "id": 566,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var sqlExpression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLExpressible",
  "extensions": [
    568,
    569
  ]
},{
  "id": 567,
  "typeString": "protocol",
  "protocols": [
    566
  ],
  "name": "SQLSpecificExpressible",
  "extensions": [
    608,
    609,
    610,
    622,
    632,
    633,
    1005,
    1006
  ]
},{
  "id": 570,
  "typeString": "struct",
  "properties": [
    {
  "name": "let resolve: (Database) throws -> T",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "map(_ transform: @escaping (Database, T) throws -> T) -> DatabasePromise",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(value: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ resolve: @escaping (Database) throws -> T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabasePromise"
},{
  "id": 571,
  "typeString": "struct",
  "properties": [
    {
  "name": "var source: SQLSource",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selection: [SQLSelectable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isDistinct: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var filterPromise: DatabasePromise<SQLExpression?>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var groupByExpressions: [SQLExpression]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ordering: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var havingExpression: SQLExpression?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var limit: SQLLimit?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var joins: [AssociationJoin]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var alias: TableAlias?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init( source: SQLSource, selection: [SQLSelectable] = [], isDistinct: Bool = false, filterPromise: DatabasePromise<SQLExpression?> = DatabasePromise(value: nil), groupByExpressions: [SQLExpression] = [], ordering: QueryOrdering = QueryOrdering(), havingExpression: SQLExpression? = nil, limit: SQLLimit? = nil, joins: [AssociationJoin] = [])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ query: AssociationQuery)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "QueryInterfaceQuery",
  "extensions": [
    576,
    577,
    578
  ]
},{
  "id": 572,
  "typeString": "enum",
  "cases": [
    {
  "name": "required"
},
    {
  "name": "optional"
}
  ],
  "name": "AssociationJoinOperator"
},{
  "id": 573,
  "typeString": "struct",
  "properties": [
    {
  "name": "var joinOperator: AssociationJoinOperator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var query: AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var key: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var joinConditionPromise: DatabasePromise<JoinCondition>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedJoin: AssociationJoin",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var join",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedAliases: [TableAlias]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedSelection: [SQLSelectable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedOrdering: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "finalizedRowAdapter(_ db: Database, fromIndex startIndex: Int, forKeyPath keyPath: [String]) throws -> (adapter: RowAdapter, endIndex: Int)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "joinSQL(_ db: Database,_ context: inout SQLGenerationContext, leftAlias: TableAlias, isRequiredAllowed: Bool) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AssociationJoin"
},{
  "id": 574,
  "typeString": "enum",
  "properties": [
    {
  "name": "var alias: TableAlias?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias): return alias case .query(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let query): return query.alias } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "sourceSQL(_ db: Database, _ context: inout SQLGenerationContext) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualified(with alias: TableAlias) -> SQLSource",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "table"
},
    {
  "name": "query"
}
  ],
  "name": "SQLSource"
},{
  "id": 575,
  "typeString": "struct",
  "properties": [
    {
  "name": "let limit: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let offset: Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let offset",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLLimit"
},{
  "id": 580,
  "typeString": "enum",
  "properties": [
    {
  "name": "var reversed: Element",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let orderings): return .orderingTerms",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let queryOrdering): return .queryOrdering(queryOrdering.reversed) } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "qualified(with alias: TableAlias) -> Element",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolve(_ db: Database) throws -> [SQLOrderingTerm]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "orderingTerms"
},
    {
  "name": "queryOrdering"
}
  ],
  "name": "Element"
},{
  "id": 581,
  "typeString": "struct",
  "properties": [
    {
  "name": "var elements: [Element]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isReversed: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var reversed: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "qualified(with alias: TableAlias) -> QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "appending(_ ordering: QueryOrdering) -> QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolve(_ db: Database) throws -> [SQLOrderingTerm]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(elements: [Element], isReversed: Bool)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(orderings: @escaping (Database) throws -> [SQLOrderingTerm])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "QueryOrdering",
  "containedEntities": [
    580
  ]
},{
  "id": 582,
  "typeString": "struct",
  "properties": [
    {
  "name": "let sql: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let arguments: StatementArguments?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var unsafeRaw: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ sql: String, arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionLiteral"
},{
  "id": 583,
  "typeString": "struct",
  "properties": [
    {
  "name": "let sql: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let needsRightSpace: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: SQLUnaryOperator, rhs: SQLUnaryOperator) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(_ sql: String, needsRightSpace: Bool)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SQLUnaryOperator",
  "superClass": 1461,
  "extensions": [
    619
  ]
},{
  "id": 584,
  "typeString": "struct",
  "properties": [
    {
  "name": "let op: SQLUnaryOperator",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ op: SQLUnaryOperator, _ value: SQLExpressible)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionUnary"
},{
  "id": 585,
  "typeString": "struct",
  "properties": [
    {
  "name": "let sql: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let negatedSQL: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var negated: SQLBinaryOperator?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let negatedSQL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: SQLBinaryOperator, rhs: SQLBinaryOperator) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(_ sql: String, negated: String? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SQLBinaryOperator",
  "superClass": 1461,
  "extensions": [
    612,
    618,
    621,
    623
  ]
},{
  "id": 586,
  "typeString": "struct",
  "properties": [
    {
  "name": "let lhs: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let op: SQLBinaryOperator",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rhs: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let negatedOp",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ op: SQLBinaryOperator, _ lhs: SQLExpressible, _ rhs: SQLExpressible)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionBinary"
},{
  "id": 587,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expressions: [SQLExpression]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expressions: [SQLExpression])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionAnd"
},{
  "id": 588,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expressions: [SQLExpression]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expressions: [SQLExpression])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionOr"
},{
  "id": 589,
  "typeString": "enum",
  "properties": [
    {
  "name": "var negated: Operator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "equal"
},
    {
  "name": "notEqual"
},
    {
  "name": "isNot"
}
  ],
  "name": "Operator",
  "superClass": 1443
},{
  "id": 590,
  "typeString": "struct",
  "properties": [
    {
  "name": "var lhs: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rhs: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var op: Operator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ op: Operator, _ lhs: SQLExpression, _ rhs: SQLExpression)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionEqual",
  "containedEntities": [
    589
  ]
},{
  "id": 591,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let collection: SQLCollection",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let isNegated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ value: SQLExpressible, _ collection: SQLCollection, negated: Bool = false)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionContains"
},{
  "id": 592,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lowerBound: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let upperBound: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let isNegated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expression: SQLExpression, _ lowerBound: SQLExpression, _ upperBound: SQLExpression, negated: Bool = false)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionBetween"
},{
  "id": 593,
  "typeString": "struct",
  "properties": [
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(_ sql: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SQLFunctionName",
  "superClass": 1461,
  "extensions": [
    625,
    626,
    627,
    628,
    629,
    630,
    631
  ]
},{
  "id": 594,
  "typeString": "struct",
  "properties": [
    {
  "name": "let functionName: SQLFunctionName",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let arguments: [SQLExpression]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ functionName: SQLFunctionName, arguments: [SQLExpression])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ functionName: SQLFunctionName, arguments: SQLExpressible...)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionFunction"
},{
  "id": 595,
  "typeString": "struct",
  "properties": [
    {
  "name": "let counted: SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ counted: SQLSelectable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionCount"
},{
  "id": 596,
  "typeString": "struct",
  "properties": [
    {
  "name": "let counted: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ counted: SQLExpression)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionCountDistinct"
},{
  "id": 597,
  "typeString": "struct",
  "properties": [
    {
  "name": "var alias: TableAlias",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pattern: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "TableMatchExpression"
},{
  "id": 598,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let collationName: Database.CollationName",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expression: SQLExpression, collationName: Database.CollationName)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "SQLExpressionCollate"
},{
  "id": 600,
  "typeString": "protocol",
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLSelectable"
},{
  "id": 601,
  "typeString": "struct",
  "properties": [
    {
  "name": "let sql: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let arguments: StatementArguments?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ sql: String, arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    600
  ],
  "name": "SQLSelectionLiteral"
},{
  "id": 602,
  "typeString": "enum",
  "cases": [
    {
  "name": "all case distinct"
}
  ],
  "name": "SQLCount",
  "extensions": [
    579
  ]
},{
  "id": 603,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    559
  ],
  "name": "ColumnExpression",
  "extensions": [
    606,
    607,
    648
  ]
},{
  "id": 604,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rowID",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(_ name: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    603
  ],
  "name": "Column",
  "extensions": [
    1052
  ]
},{
  "id": 605,
  "typeString": "struct",
  "properties": [
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias: TableAlias",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ name: String, alias: TableAlias)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    603
  ],
  "name": "QualifiedColumn"
},{
  "id": 611,
  "typeString": "enum",
  "cases": [
    {
  "name": "and"
},
    {
  "name": "or"
}
  ],
  "name": "SQLLogicalBinaryOperator"
},{
  "id": 634,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let collationName: Database.CollationName",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var asc: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var desc: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var sqlExpression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ expression: SQLExpression, collationName: Database.CollationName)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLCollatedExpression",
  "extensions": [
    635
  ]
},{
  "id": 639,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var moduleName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeTableDef",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "moduleArguments(for def",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "database(_ db: Database, didCreate tableName: String, using def",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "VirtualTableModule"
},{
  "id": 641,
  "typeString": "struct",
  "properties": [
    {
  "name": "var arguments: StatementArguments?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resolvedNames: [TableAlias: String]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var qualifierNeeded: Bool mutating",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "literalGenerationContext(withArguments: Bool) -> SQLGenerationContext",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "queryGenerationContext(aliases: [TableAlias]) -> SQLGenerationContext",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "recordSelectionGenerationContext(alias: TableAlias) -> SQLGenerationContext",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "appendArguments(_ newArguments: StatementArguments) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifier(for alias: TableAlias) -> String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resolvedName(for alias: TableAlias) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "aliasName(for alias: TableAlias) -> String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SQLGenerationContext"
},{
  "id": 642,
  "typeString": "enum",
  "cases": [
    {
  "name": "undefined"
},
    {
  "name": "table"
},
    {
  "name": "proxy"
}
  ],
  "name": "Impl"
},{
  "id": 643,
  "typeString": "class",
  "properties": [
    {
  "name": "var impl: Impl",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var root: TableAlias",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let base)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var identityName: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var hasUserName: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName, userName: _): return tableName case .proxy(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let base): return base.tableName } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userName: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let userName): return userName case .table(tableName: _, userName:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userName): return userName case .proxy(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let base): return base.userName } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "becomeProxy(of base: TableAlias)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setUserName(_ userName: String)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setTableName(_ tableName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: TableAlias, rhs: TableAlias) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(name: String? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(tableName: String, userName: String? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TableAlias",
  "superClass": 1461,
  "containedEntities": [
    642
  ]
},{
  "id": 649,
  "typeString": "struct",
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "AllColumns",
  "extensions": [
    652
  ]
},{
  "id": 650,
  "typeString": "struct",
  "properties": [
    {
  "name": "let alias: TableAlias",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(alias: TableAlias)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "QualifiedAllColumns",
  "extensions": [
    653
  ]
},{
  "id": 651,
  "typeString": "struct",
  "properties": [
    {
  "name": "let expression: SQLExpression",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ expression: SQLExpression, name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    600
  ],
  "name": "SQLAliasedExpression"
},{
  "id": 654,
  "typeString": "class",
  "properties": [
    {
  "name": "var writer: SerializedDatabase #if os(iOS)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var application: UIApplication? #endif",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var configuration: Configuration",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(path: String, configuration: Configuration = Configuration()) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(configuration: Configuration = Configuration())",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    881
  ],
  "name": "DatabaseQueue",
  "extensions": [
    655,
    656,
    657,
    990,
    993,
    999,
    1031
  ]
},{
  "id": 658,
  "typeString": "struct",
  "properties": [
    {
  "name": "let layoutColumns: [(Int, String)]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let lowercaseColumnIndexes: [String: Int]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "baseColumnIndex(atMappingIndex index: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atMappingIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<S: Sequence>(layoutColumns: S) where S.Iterator.Element == (Int, String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "LayoutedColumnMapping",
  "extensions": [
    670,
    671
  ]
},{
  "id": 659,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var mapping: LayoutedColumnMapping",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scopes: [String: LayoutedRowAdapter]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LayoutedRowAdapter"
},{
  "id": 660,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var layoutColumns: [(Int, String)]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutIndex(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowLayout"
},{
  "id": 661,
  "typeString": "protocol",
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowAdapter",
  "extensions": [
    673,
    674
  ]
},{
  "id": 662,
  "typeString": "struct",
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    661
  ],
  "name": "EmptyRowAdapter"
},{
  "id": 663,
  "typeString": "struct",
  "properties": [
    {
  "name": "let mapping: [String: String]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ mapping: [String: String])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    661
  ],
  "name": "ColumnMapping"
},{
  "id": 664,
  "typeString": "struct",
  "properties": [
    {
  "name": "let index: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(fromIndex index: Int)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    661
  ],
  "name": "SuffixRowAdapter"
},{
  "id": 665,
  "typeString": "struct",
  "properties": [
    {
  "name": "let range: CountableRange<Int>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ range: CountableRange<Int>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ range: CountableClosedRange<Int>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    661
  ],
  "name": "RangeRowAdapter"
},{
  "id": 666,
  "typeString": "struct",
  "properties": [
    {
  "name": "let base: RowAdapter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scopes: [String: RowAdapter]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ scopes: [String: RowAdapter])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(base: RowAdapter, scopes: [String: RowAdapter])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    661
  ],
  "name": "ScopeAdapter"
},{
  "id": 667,
  "typeString": "struct",
  "properties": [
    {
  "name": "let mapping: LayoutedColumnMapping",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scopes: [String: LayoutedRowAdapter]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    659
  ],
  "name": "LayoutedScopeAdapter"
},{
  "id": 668,
  "typeString": "struct",
  "properties": [
    {
  "name": "let first: RowAdapter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let second: RowAdapter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutedAdapter(from layout: RowLayout) throws -> LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    661
  ],
  "name": "ChainedAdapter"
},{
  "id": 669,
  "typeString": "struct",
  "properties": [
    {
  "name": "let base: Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let adapter: LayoutedRowAdapter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let mapping: LayoutedColumnMapping",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scopes: Row.ScopesView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hasNull(atUncheckedIndex index: Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copiedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unscopedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unadaptedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(base: Row, adapter: LayoutedRowAdapter)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    858
  ],
  "name": "AdaptedRowImpl"
},{
  "id": 676,
  "typeString": "protocol",
  "methods": [
    {
  "name": "authorize( _ actionCode: Int32, _ cString1: UnsafePointer<Int8>?, _ cString2: UnsafePointer<Int8>?, _ cString3: UnsafePointer<Int8>?, _ cString4: UnsafePointer<Int8>?) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatementAuthorizer",
  "superClass": 1433
},{
  "id": 677,
  "typeString": "class",
  "properties": [
    {
  "name": "var databaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseEventKinds: [DatabaseEventKind]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var invalidatesDatabaseSchemaCache",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transactionEffect: UpdateStatement.TransactionEffect?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isDropStatement",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "authorize( _ actionCode: Int32, _ cString1: UnsafePointer<Int8>?, _ cString2: UnsafePointer<Int8>?, _ cString3: UnsafePointer<Int8>?, _ cString4: UnsafePointer<Int8>?) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insertUpdateEventKind(tableName: String, columnName: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    676
  ],
  "name": "StatementCompilationAuthorizer"
},{
  "id": 678,
  "typeString": "class",
  "methods": [
    {
  "name": "authorize( _ actionCode: Int32, _ cString1: UnsafePointer<Int8>?, _ cString2: UnsafePointer<Int8>?, _ cString3: UnsafePointer<Int8>?, _ cString4: UnsafePointer<Int8>?) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    676
  ],
  "name": "TruncateOptimizationBlocker"
},{
  "id": 679,
  "typeString": "protocol",
  "methods": [
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FetchRequest",
  "extensions": [
    684,
    710,
    714,
    871,
    914,
    918,
    936,
    976,
    1014
  ]
},{
  "id": 680,
  "typeString": "struct",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let adapter: (Database) throws -> RowAdapter",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, _ adapter: @escaping (Database) throws -> RowAdapter)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    679
  ],
  "name": "AdaptedFetchRequest"
},{
  "id": 681,
  "typeString": "struct",
  "properties": [
    {
  "name": "let _prepare: (Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let _fetchCount: (Database) throws -> Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let _databaseRegion: (Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<Request: FetchRequest>(_ request: Request)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ prepare: @escaping (Database) throws -> (SelectStatement, RowAdapter?))",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    679
  ],
  "name": "AnyFetchRequest"
},{
  "id": 682,
  "typeString": "enum",
  "name": "Cache"
},{
  "id": 683,
  "typeString": "struct",
  "properties": [
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var arguments: StatementArguments?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var adapter: RowAdapter?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let cache: Cache?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil, cached: Bool = false)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<Request: FetchRequest>(_ db: Database, request: Request, cached: Bool = false) throws where Request.RowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil, fromCache cache: Cache?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    679
  ],
  "name": "SQLRequest",
  "containedEntities": [
    682
  ]
},{
  "id": 687,
  "typeString": "protocol",
  "methods": [
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "canonicalTableName(_ table: String) -> String? mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(canonicalTableName: String, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "primaryKey(_ table: String) -> PrimaryKeyInfo? mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(primaryKey: PrimaryKeyInfo, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columns(in table: String) -> [ColumnInfo]? mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(columns: [ColumnInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "indexes(on table: String) -> [IndexInfo]? mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(indexes: [IndexInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "foreignKeys(on table: String) -> [ForeignKeyInfo]? mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(foreignKeys: [ForeignKeyInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseSchemaCache"
},{
  "id": 688,
  "typeString": "struct",
  "properties": [
    {
  "name": "var canonicalTableNames: [String: String]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var primaryKeys: [String: PrimaryKeyInfo]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var columns: [String: [ColumnInfo]]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var indexes: [String: [IndexInfo]]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var foreignKeys: [String: [ForeignKeyInfo]]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "canonicalTableName(_ table: String) -> String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(canonicalTableName: String, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "primaryKey(_ table: String) -> PrimaryKeyInfo?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(primaryKey: PrimaryKeyInfo, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columns(in table: String) -> [ColumnInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(columns: [ColumnInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "indexes(on table: String) -> [IndexInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(indexes: [IndexInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "foreignKeys(on table: String) -> [ForeignKeyInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(foreignKeys: [ForeignKeyInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    687
  ],
  "name": "SimpleDatabaseSchemaCache"
},{
  "id": 689,
  "typeString": "struct",
  "methods": [
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "canonicalTableName(_ table: String) -> String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(canonicalTableName: String, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "primaryKey(_ table: String) -> PrimaryKeyInfo?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(primaryKey: PrimaryKeyInfo, forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columns(in table: String) -> [ColumnInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(columns: [ColumnInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "indexes(on table: String) -> [IndexInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(indexes: [IndexInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "foreignKeys(on table: String) -> [ForeignKeyInfo]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "set(foreignKeys: [ForeignKeyInfo], forTable table: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    687
  ],
  "name": "EmptyDatabaseSchemaCache"
},{
  "id": 690,
  "typeString": "protocol",
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "add(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseReader",
  "superClass": 1433,
  "extensions": [
    692,
    994,
    1000
  ]
},{
  "id": 691,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: DatabaseReader",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: DatabaseReader)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    690
  ],
  "name": "AnyDatabaseReader"
},{
  "id": 693,
  "typeString": "enum",
  "properties": [
    {
  "name": "var value: DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let int64): return int64 case .double(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let double): return double case .string(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let string): return string case .blob(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let data): return data } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "== (_ lhs: Storage, _ rhs: Storage) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "cases": [
    {
  "name": "null case int64"
},
    {
  "name": "double"
},
    {
  "name": "string"
},
    {
  "name": "blob"
}
  ],
  "name": "Storage",
  "superClass": 1451
},{
  "id": 694,
  "typeString": "struct",
  "properties": [
    {
  "name": "let storage: Storage",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let null",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var isNull: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init?(value: Any)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(storage: Storage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sqliteValue: SQLiteValue)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValue",
  "superClass": 1461,
  "containedEntities": [
    693
  ],
  "extensions": [
    695,
    696,
    697,
    698,
    699,
    700,
    979
  ]
},{
  "id": 701,
  "typeString": "class",
  "properties": [
    {
  "name": "var serializedDatabase: SerializedDatabase",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var configuration: Configuration",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(path: String, configuration: Configuration = Configuration(), labelSuffix: String) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    690
  ],
  "name": "DatabaseSnapshot",
  "extensions": [
    702
  ]
},{
  "id": 703,
  "typeString": "protocol",
  "methods": [
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatementColumnConvertible",
  "extensions": [
    706
  ]
},{
  "id": 704,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let columnIndex: Int32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "ColumnCursor"
},{
  "id": 705,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let columnIndex: Int32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Value??",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "NullableColumnCursor"
},{
  "id": 715,
  "typeString": "class",
  "properties": [
    {
  "name": "let writer: SerializedDatabase",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var readerConfig: Configuration",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var readerPool: Pool<SerializedDatabase>!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var functions",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var collations",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var snapshotCount",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var application: UIApplication? #endif",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "setupDatabase(_ db: Database)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(path: String, configuration: Configuration = Configuration()) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    881
  ],
  "name": "DatabasePool",
  "extensions": [
    716,
    717,
    718,
    719,
    720,
    989,
    992,
    998,
    1032
  ]
},{
  "id": 721,
  "typeString": "class",
  "properties": [
    {
  "name": "let specificKey",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "var allowedDatabases: [Database]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseObservationBroker: DatabaseObservationBroker?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var current: SchedulingWatchdog?",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeSerializedQueue(allowingDatabase database: Database, label: String) -> DispatchQueue",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "inheritingAllowedDatabases<T>(from other: SchedulingWatchdog, execute body: () throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "preconditionValidQueue(_ db: Database, _ message: @autoclosure() -> String = , file: StaticString = #file, line: UInt = #line)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "allows(_ db: Database) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(allowedDatabase database: Database)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "SchedulingWatchdog"
},{
  "id": 722,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: Int32",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var primaryResultCode: ResultCode",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isPrimary: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let SQLITE_OK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_ERROR",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_INTERNAL",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_PERM",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_ABORT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_BUSY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_LOCKED",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOMEM",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_READONLY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_INTERRUPT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CORRUPT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOTFOUND",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_FULL",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CANTOPEN",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_PROTOCOL",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_EMPTY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_SCHEMA",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_TOOBIG",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_MISMATCH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_MISUSE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOLFS",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_AUTH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_FORMAT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_RANGE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOTADB",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOTICE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_WARNING",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_ROW",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_DONE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_READ",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SHORT_READ",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_WRITE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_FSYNC",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_DIR_FSYNC",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_TRUNCATE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_FSTAT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_UNLOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_RDLOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_DELETE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_BLOCKED",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_NOMEM",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_ACCESS",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_CHECKRESERVEDLOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_LOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_CLOSE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_DIR_CLOSE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SHMOPEN",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SHMSIZE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SHMLOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SHMMAP",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_SEEK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_DELETE_NOENT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_MMAP",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_GETTEMPPATH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_CONVPATH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_VNODE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_IOERR_AUTH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_LOCKED_SHAREDCACHE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_BUSY_RECOVERY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_BUSY_SNAPSHOT",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CANTOPEN_NOTEMPDIR",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CANTOPEN_ISDIR",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CANTOPEN_FULLPATH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CANTOPEN_CONVPATH",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CORRUPT_VTAB",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_READONLY_RECOVERY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_READONLY_CANTLOCK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_READONLY_ROLLBACK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_READONLY_DBMOVED",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_ABORT_ROLLBACK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_CHECK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_COMMITHOOK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_FOREIGNKEY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_FUNCTION",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_NOTNULL",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_PRIMARYKEY",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_TRIGGER",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_UNIQUE",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_VTAB",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_CONSTRAINT_ROWID",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOTICE_RECOVER_WAL",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_NOTICE_RECOVER_ROLLBACK",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_WARNING_AUTOINDEX",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_AUTH_USER",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let SQLITE_OK_LOAD_PERMANENTLY",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "~= (pattern: ResultCode, code: ResultCode) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(rawValue: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ResultCode",
  "superClass": 1451,
  "extensions": [
    724
  ]
},{
  "id": 723,
  "typeString": "struct",
  "properties": [
    {
  "name": "var resultCode: ResultCode",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let extendedResultCode: ResultCode",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let message: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let sql: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let arguments: StatementArguments?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(resultCode: ResultCode = .SQLITE_ERROR, message: String? = nil, sql: String? = nil, arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(resultCode: Int32, message: String? = nil, sql: String? = nil, arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseError"
},{
  "id": 727,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cid: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let type: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let isNotNull: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let defaultValueSQL: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let primaryKeyIndex: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(row: Row)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    931
  ],
  "name": "ColumnInfo"
},{
  "id": 728,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let columns: [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let isUnique: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(name: String, columns: [String], unique: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "IndexInfo"
},{
  "id": 729,
  "typeString": "enum",
  "cases": [
    {
  "name": "hiddenRowID case rowID"
},
    {
  "name": "regular"
}
  ],
  "name": "Impl"
},{
  "id": 730,
  "typeString": "struct",
  "properties": [
    {
  "name": "let impl: Impl",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let hiddenRowID",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var columns: [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let column): return [column] case .regular(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columns): return columns } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rowIDColumn: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let column): return column case .regular: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isRowID: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "rowID(_ column: String) -> PrimaryKeyInfo",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "regular(_ columns: [String]) -> PrimaryKeyInfo",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "PrimaryKeyInfo",
  "containedEntities": [
    729
  ]
},{
  "id": 731,
  "typeString": "struct",
  "properties": [
    {
  "name": "let destinationTable: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let mapping: [(origin: String, destination: String)]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var originColumns: [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var destinationColumns: [String]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ForeignKeyInfo"
},{
  "id": 732,
  "typeString": "struct",
  "properties": [
    {
  "name": "var type: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tbl_name: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1426
  ],
  "name": "SchemaKey"
},{
  "id": 733,
  "typeString": "struct",
  "properties": [
    {
  "name": "var objects: [SchemaKey: String?]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SchemaInfo",
  "superClass": 1451,
  "containedEntities": [
    732
  ]
},{
  "id": 754,
  "typeString": "struct",
  "properties": [
    {
  "name": "let encode: (DatabaseValue) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encodeNil() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Bool) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int8) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int16) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int32) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int64) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt8) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt16) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt32) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt64) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Float) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Double) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: String) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode<T>(_ value: T) throws where T : Encodable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValueEncodingContainer",
  "superClass": 1463
},{
  "id": 755,
  "typeString": "struct",
  "properties": [
    {
  "name": "let encode: (DatabaseValue) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userInfo: [CodingUserInfoKey : Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "container<Key>(keyedBy type: Key.Type) -> KeyedEncodingContainer<Key>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unkeyedContainer() -> UnkeyedEncodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "singleValueContainer() -> SingleValueEncodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(encode: @escaping (DatabaseValue) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValueEncoder",
  "superClass": 1464
},{
  "id": 758,
  "typeString": "struct",
  "properties": [
    {
  "name": "let dbValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "decodeNil() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Bool.Type) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int.Type) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int8.Type) throws -> Int8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int16.Type) throws -> Int16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int32.Type) throws -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int64.Type) throws -> Int64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt.Type) throws -> UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt8.Type) throws -> UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt16.Type) throws -> UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt32.Type) throws -> UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt64.Type) throws -> UInt64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Float.Type) throws -> Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Double.Type) throws -> Double",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: String.Type) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode<T>(_ type: T.Type) throws -> T where T : Decodable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValueDecodingContainer",
  "superClass": 1465
},{
  "id": 759,
  "typeString": "struct",
  "properties": [
    {
  "name": "let dbValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userInfo: [CodingUserInfoKey : Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "container<Key>(keyedBy type: Key.Type) throws -> KeyedDecodingContainer<Key>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unkeyedContainer() throws -> UnkeyedDecodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "singleValueContainer() throws -> SingleValueDecodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(dbValue: DatabaseValue, codingPath: [CodingKey])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValueDecoder",
  "superClass": 1466
},{
  "id": 774,
  "typeString": "enum",
  "properties": [
    {
  "name": "var hasYMDComponents: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "YMD"
},
    {
  "name": "YMD_HM"
},
    {
  "name": "YMD_HMS"
},
    {
  "name": "YMD_HMSS"
},
    {
  "name": "HM"
},
    {
  "name": "HMS"
},
    {
  "name": "HMSS"
}
  ],
  "name": "Format",
  "superClass": 1443
},{
  "id": 775,
  "typeString": "struct",
  "properties": [
    {
  "name": "let dateComponents: DateComponents",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let format: Format",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let dateString: String? switch format",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let year",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let month",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let day",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let timeString: String? switch format",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hour",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let minute",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hour",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let minute",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let second",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hour",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let minute",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let second",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let nanosecond",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> DatabaseDateComponents?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(_ dateComponents: DateComponents, format: Format)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ],
  "name": "DatabaseDateComponents",
  "containedEntities": [
    774
  ]
},{
  "id": 779,
  "typeString": "struct",
  "properties": [
    {
  "name": "var year: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var month: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var day: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hour: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minute: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var second: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nanosecond",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ParserComponents"
},{
  "id": 780,
  "typeString": "class",
  "methods": [
    {
  "name": "components(from dateString: String) -> DatabaseDateComponents?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "components(cString: UnsafePointer<CChar>, length: Int) -> DatabaseDateComponents?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "datetimeComponents(cString: UnsafePointer<CChar>, length: Int) -> DatabaseDateComponents?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "timeComponents(cString: UnsafePointer<CChar>, length: Int) -> DatabaseDateComponents?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "nanosecondsInt(for nanosecond: ContiguousArray<CChar>) -> Int?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "SQLiteDateParser",
  "containedEntities": [
    779
  ]
},{
  "id": 782,
  "typeString": "class",
  "properties": [
    {
  "name": "let closure: (Database) -> ()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "observes(eventsOfKind eventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidChange(with event: DatabaseEvent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidRollback(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidCommit(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ closure: @escaping (Database) -> ())",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    786
  ],
  "name": "CommitHandler"
},{
  "id": 783,
  "typeString": "enum",
  "cases": [
    {
  "name": "observerLifetime case nextTransaction case databaseLifetime"
}
  ],
  "name": "TransactionObservationExtent"
},{
  "id": 784,
  "typeString": "enum",
  "cases": [
    {
  "name": "none case commit case rollback case cancelledCommit"
}
  ],
  "name": "TransactionState"
},{
  "id": 785,
  "typeString": "class",
  "properties": [
    {
  "name": "var database: Database",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var savepointStack",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var transactionState: TransactionState",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var transactionObservations: [TransactionObservation]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var statementObservations: [StatementObservation]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var observesDatabaseChanges: Bool",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "add(transactionObserver: TransactionObserver, extent: Database.TransactionObservationExtent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "disableUntilNextTransaction(transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatementWillExecute(_ statement: UpdateStatement)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatementDidFail(_ statement: UpdateStatement) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatementDidExecute(_ statement: UpdateStatement) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseWillChange(with event: DatabasePreUpdateEvent)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseDidChange(with event: DatabaseEvent)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseWillCommit() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseDidCommit()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseDidCommitEmptyDeferredTransaction() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseDidRollback(notifyTransactionObservers: Bool)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "databaseDidEndTransaction()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "notifyBufferedEvents()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "installCommitAndRollbackHooks()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "installUpdateHook()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "uninstallUpdateHook()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(_ database: Database)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseObservationBroker",
  "containedEntities": [
    784
  ]
},{
  "id": 786,
  "typeString": "protocol",
  "methods": [
    {
  "name": "observes(eventsOfKind eventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidChange(with event: DatabaseEvent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseWillCommit() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidCommit(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidRollback(_ db: Database) #if SQLITE_ENABLE_PREUPDATE_HOOK",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseWillChange(with event: DatabasePreUpdateEvent) #endif",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TransactionObserver",
  "superClass": 1433,
  "extensions": [
    803
  ]
},{
  "id": 787,
  "typeString": "class",
  "properties": [
    {
  "name": "let extent: Database.TransactionObservationExtent",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isDisabled: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var weakObserver: TransactionObserver?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var strongObserver: TransactionObserver?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var observer: TransactionObserver?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isObserving: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "isWrapping(_ observer: TransactionObserver) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "observes(eventsOfKind eventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseWillChange(with event: DatabasePreUpdateEvent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidChange(with event: DatabaseEvent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseWillCommit() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidCommit(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidRollback(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(observer: TransactionObserver, extent: Database.TransactionObservationExtent)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TransactionObservation"
},{
  "id": 788,
  "typeString": "enum",
  "properties": [
    {
  "name": "var modifiedRegion: DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName): return DatabaseRegion(table: tableName) case .insert(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName): return DatabaseRegion(table: tableName) case .update(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let updatedColumnNames): return DatabaseRegion(table: tableName, columns: updatedColumnNames) } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "insert"
},
    {
  "name": "delete"
},
    {
  "name": "update"
}
  ],
  "name": "DatabaseEventKind",
  "extensions": [
    804,
    1010
  ]
},{
  "id": 789,
  "typeString": "protocol",
  "methods": [
    {
  "name": "send(to observer: TransactionObservation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchesKind(_ databaseEventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseEventProtocol"
},{
  "id": 790,
  "typeString": "enum",
  "cases": [
    {
  "name": "insert"
},
    {
  "name": "delete"
},
    {
  "name": "update"
}
  ],
  "name": "Kind",
  "superClass": 1467
},{
  "id": 791,
  "typeString": "struct",
  "properties": [
    {
  "name": "let impl: DatabaseEventImpl",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let kind: Kind",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rowID: Int64",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "copy() -> DatabaseEvent",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(kind: Kind, rowID: Int64, impl: DatabaseEventImpl)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(kind: Kind, rowID: Int64, databaseNameCString: UnsafePointer<Int8>?, tableNameCString: UnsafePointer<Int8>?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseEvent",
  "containedEntities": [
    790
  ],
  "extensions": [
    805
  ]
},{
  "id": 792,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copy(_ event: DatabaseEvent) -> DatabaseEvent",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseEventImpl"
},{
  "id": 793,
  "typeString": "struct",
  "properties": [
    {
  "name": "let databaseNameCString: UnsafePointer<Int8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableNameCString: UnsafePointer<Int8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copy(_ event: DatabaseEvent) -> DatabaseEvent",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    792
  ],
  "name": "MetalDatabaseEventImpl"
},{
  "id": 794,
  "typeString": "struct",
  "properties": [
    {
  "name": "let databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copy(_ event: DatabaseEvent) -> DatabaseEvent",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    792
  ],
  "name": "CopiedDatabaseEventImpl"
},{
  "id": 795,
  "typeString": "enum",
  "cases": [
    {
  "name": "insert"
},
    {
  "name": "delete"
},
    {
  "name": "update"
}
  ],
  "name": "Kind",
  "superClass": 1467
},{
  "id": 796,
  "typeString": "struct",
  "properties": [
    {
  "name": "let kind: Kind",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var depth: CInt",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let public",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var finalDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let impl: DatabasePreUpdateEventImpl",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "initialDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "finalDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "copy() -> DatabasePreUpdateEvent",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "initialRowID: Int64? public let finalRowID: Int64? public var initialDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(kind: Kind, initialRowID: Int64?, finalRowID: Int64?, impl: DatabasePreUpdateEventImpl)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(connection: SQLiteConnection, kind: Kind, initialRowID: Int64, finalRowID: Int64, databaseNameCString: UnsafePointer<Int8>?, tableNameCString: UnsafePointer<Int8>?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabasePreUpdateEvent",
  "containedEntities": [
    795
  ],
  "extensions": [
    806
  ]
},{
  "id": 797,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var columnsCount: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var depth: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var initialDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "finalDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copy(_ event: DatabasePreUpdateEvent) -> DatabasePreUpdateEvent",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabasePreUpdateEventImpl"
},{
  "id": 798,
  "typeString": "struct",
  "properties": [
    {
  "name": "let connection: SQLiteConnection",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let kind: DatabasePreUpdateEvent.Kind",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let databaseNameCString: UnsafePointer<Int8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableNameCString: UnsafePointer<Int8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var columnsCount: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var depth: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var var finalDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "initialDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finalDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copy(_ event: DatabasePreUpdateEvent) -> DatabasePreUpdateEvent",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "preupdate_getValues(_ connection: SQLiteConnection, sqlite_func: (_ connection: SQLiteConnection, _ column: CInt, _ value: inout SQLiteValue? ) -> CInt ) -> [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "getValue(_ connection: SQLiteConnection, column: CInt, sqlite_func: (_ connection: SQLiteConnection, _ column: CInt, _ value: inout SQLiteValue? ) -> CInt ) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "preupdate_getValues_old(_ connection: SQLiteConnection) -> [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "preupdate_getValues_new(_ connection: SQLiteConnection) -> [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "initialDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    797
  ],
  "name": "MetalDatabasePreUpdateEventImpl"
},{
  "id": 799,
  "typeString": "struct",
  "properties": [
    {
  "name": "let databaseName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columnsCount: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let depth: CInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let initialDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let finalDatabaseValues: [DatabaseValue]?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "initialDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finalDatabaseValue(atIndex index: Int) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copy(_ event: DatabasePreUpdateEvent) -> DatabasePreUpdateEvent",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    797
  ],
  "name": "CopiedDatabasePreUpdateEventImpl"
},{
  "id": 800,
  "typeString": "enum",
  "methods": [
    {
  "name": "evaluate(_ event: DatabaseEventProtocol) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "matching"
}
  ],
  "name": "DatabaseEventPredicate"
},{
  "id": 801,
  "typeString": "class",
  "properties": [
    {
  "name": "var eventsBuffer: [(event: DatabaseEventProtocol, statementObservations: [StatementObservation])]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var savepoints: [(name: String, index: Int)]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "savepointDidBegin(_ name: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "savepointDidRollback(_ name: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "savepointDidRelease(_ name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SavepointStack"
},{
  "id": 807,
  "typeString": "class",
  "properties": [
    {
  "name": "let sqliteConnection: SQLiteConnection",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var logError: LogErrorFunction?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let logError",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let message",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let resultCode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let configuration: Configuration",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var lastInsertedRowID: Int64",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var changesCount: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var totalChangesCount: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInsideTransaction: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var schemaCache: DatabaseSchemaCache lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var internalStatementCache",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var publicStatementCache",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastErrorCode: ResultCode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastErrorMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var authorizer: StatementAuthorizer?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dbPointer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dbPointer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let db",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var observationBroker",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteCompileOptions: Set<String>",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var busyCallback: BusyCallback?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var functions",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var collations",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isClosed: Bool",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(path: String, configuration: Configuration, schemaCache: DatabaseSchemaCache) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Database"
},{
  "id": 808,
  "typeString": "enum",
  "cases": [
    {
  "name": "immediateError case timeout"
},
    {
  "name": "callback"
}
  ],
  "name": "BusyMode"
},{
  "id": 809,
  "typeString": "enum",
  "cases": [
    {
  "name": "passive"
},
    {
  "name": "full"
},
    {
  "name": "restart"
},
    {
  "name": "truncate"
}
  ],
  "name": "CheckpointMode",
  "superClass": 1467
},{
  "id": 810,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let binary",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let nocase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let rtrim",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "CollationName",
  "superClass": 1462
},{
  "id": 811,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let text",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let integer",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let double",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let numeric",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let boolean",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let blob",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let date",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let datetime",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ColumnType",
  "superClass": 1462
},{
  "id": 812,
  "typeString": "enum",
  "cases": [
    {
  "name": "rollback"
},
    {
  "name": "abort"
},
    {
  "name": "fail"
},
    {
  "name": "ignore"
},
    {
  "name": "replace"
}
  ],
  "name": "ConflictResolution",
  "superClass": 1443
},{
  "id": 813,
  "typeString": "enum",
  "cases": [
    {
  "name": "cascade"
},
    {
  "name": "restrict"
},
    {
  "name": "setNull"
},
    {
  "name": "setDefault"
}
  ],
  "name": "ForeignKeyAction",
  "superClass": 1443
},{
  "id": 814,
  "typeString": "enum",
  "cases": [
    {
  "name": "commit case rollback"
}
  ],
  "name": "TransactionCompletion"
},{
  "id": 815,
  "typeString": "enum",
  "cases": [
    {
  "name": "deferred"
},
    {
  "name": "immediate"
},
    {
  "name": "exclusive"
}
  ],
  "name": "TransactionKind",
  "superClass": 1443
},{
  "id": 816,
  "typeString": "enum",
  "properties": [
    {
  "name": "var SQLiteOpenFlags: Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "multiThread case serialized var SQLiteOpenFlags"
}
  ],
  "name": "ThreadingMode"
},{
  "id": 829,
  "typeString": "struct",
  "properties": [
    {
  "name": "let tableRegions: [String: TableRegion]?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let tableRegions",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fullDatabase",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "intersection(_ other: DatabaseRegion) -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableIntersection(_ table: String, rowIds: Set<Int64>) -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "union(_ other: DatabaseRegion) -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "formUnion(_ other: DatabaseRegion)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(tableRegions: [String: TableRegion]?)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(table: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(table: String, columns: Set<String>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(table: String, rowIds: Set<Int64>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseRegion",
  "superClass": 1451,
  "extensions": [
    831,
    832,
    833
  ]
},{
  "id": 830,
  "typeString": "struct",
  "properties": [
    {
  "name": "var columns: Set<String>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rowIds: Set<Int64>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columns",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let rowIds",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "intersection(_ other: TableRegion) -> TableRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "union(_ other: TableRegion) -> TableRegion",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TableRegion",
  "superClass": 1451
},{
  "id": 834,
  "typeString": "protocol",
  "methods": [
    {
  "name": "next() throws -> Element?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Cursor",
  "superClass": 1433,
  "extensions": [
    847,
    848,
    849,
    850,
    851,
    852
  ]
},{
  "id": 835,
  "typeString": "class",
  "properties": [
    {
  "name": "let element: () throws -> Element?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<C: Cursor>(_ base: C) where C.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<I: IteratorProtocol>(iterator: I) where I.Element == Element",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<S: Sequence>(_ s: S) where S.Element == Element",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ body: @escaping () throws -> Element?)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    834
  ],
  "name": "AnyCursor"
},{
  "id": 836,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let limit: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var dropped: Int",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, limit: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "DropFirstCursor"
},{
  "id": 837,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let predicate: (Base.Element) throws -> Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var predicateHasFailed",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, predicate: @escaping (Base.Element) throws -> Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "DropWhileCursor"
},{
  "id": 838,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var index: Int",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> (Int, Base.Element)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "EnumeratedCursor"
},{
  "id": 839,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let isIncluded: (Base.Element) throws -> Bool",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, _ isIncluded: @escaping (Base.Element) throws -> Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "FilterCursor"
},{
  "id": 840,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var inner: Base.Element?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FlattenCursor",
  "superClass": 1469
},{
  "id": 841,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let transform: (Base.Element) throws -> Element",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, _ transform: @escaping (Base.Element) throws -> Element)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "MapCursor"
},{
  "id": 842,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let maxLength: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var taken",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, maxLength: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "PrefixCursor"
},{
  "id": 843,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let predicate: (Base.Element) throws -> Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var predicateHasFailed",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Base.Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: Base, predicate: @escaping (Base.Element) throws -> Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "PrefixWhileCursor"
},{
  "id": 853,
  "typeString": "class",
  "properties": [
    {
  "name": "let impl: RowImpl",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let statementRef: Unmanaged<SelectStatement>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement: SQLiteStatement?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let count: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copy() -> Row",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ dictionary: [String: DatabaseValueConvertible?])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(_ dictionary: [AnyHashable: Any])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(statement: SelectStatement)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(copiedFromSQLiteStatement sqliteStatement: SQLiteStatement, statementRef: Unmanaged<SelectStatement>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(impl: RowImpl)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Row",
  "superClass": 1451,
  "extensions": [
    675,
    863,
    864,
    865,
    866,
    867,
    868,
    869,
    870,
    872,
    873,
    874,
    875,
    878,
    879,
    965,
    982,
    988,
    1013
  ]
},{
  "id": 854,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Row?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "RowCursor"
},{
  "id": 855,
  "typeString": "struct",
  "properties": [
    {
  "name": "let index: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ index: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1471
  ],
  "name": "RowIndex",
  "superClass": 1470,
  "extensions": [
    876,
    877
  ]
},{
  "id": 856,
  "typeString": "struct",
  "properties": [
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let scopes: [String: LayoutedRowAdapter]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var names: Dictionary<String, LayoutedRowAdapter>.Keys",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var startIndex: Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let adapter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(after i: Index) -> Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(row: Row, scopes: [String: LayoutedRowAdapter])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScopesView",
  "superClass": 1472
},{
  "id": 857,
  "typeString": "struct",
  "properties": [
    {
  "name": "let scopes: ScopesView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var names: Set<String>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var names",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fifo",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scope",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScopesTreeView"
},{
  "id": 858,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scopes: Row.ScopesView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "hasNull(atUncheckedIndex index:Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unscopedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unadaptedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copiedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowImpl",
  "extensions": [
    880
  ]
},{
  "id": 859,
  "typeString": "struct",
  "properties": [
    {
  "name": "let columns: [(String, DatabaseValue)]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(columns: [(String, DatabaseValue)])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    858
  ],
  "name": "ArrayRowImpl"
},{
  "id": 860,
  "typeString": "struct",
  "properties": [
    {
  "name": "let dbValues: ContiguousArray<DatabaseValue>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columnNames: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, columnNames: [String])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    858
  ],
  "name": "StatementCopyRowImpl"
},{
  "id": 861,
  "typeString": "struct",
  "properties": [
    {
  "name": "let statementRef: Unmanaged<SelectStatement>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lowercaseColumnIndexes: [String: Int]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hasNull(atUncheckedIndex index:Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "copiedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, statementRef: Unmanaged<SelectStatement>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    858
  ],
  "name": "StatementRowImpl"
},{
  "id": 862,
  "typeString": "struct",
  "properties": [
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFetched: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "databaseValue(atUncheckedIndex index: Int) -> DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dataNoCopy(atUncheckedIndex index:Int) -> Data?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnName(atUncheckedIndex index: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    858
  ],
  "name": "EmptyRowImpl"
},{
  "id": 881,
  "typeString": "protocol",
  "methods": [
    {
  "name": "write<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "writeWithoutTransaction<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unsafeReentrantWrite<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "readFromCurrentState(_ block: @escaping (Database) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    690
  ],
  "name": "DatabaseWriter",
  "extensions": [
    883,
    1004
  ]
},{
  "id": 882,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: DatabaseWriter",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "readFromCurrentState(_ block: @escaping (Database) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "write<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeWithoutTransaction<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantWrite<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ base: DatabaseWriter)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    881
  ],
  "name": "AnyDatabaseWriter"
},{
  "id": 884,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let nArg: Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Identity",
  "superClass": 1461
},{
  "id": 885,
  "typeString": "class",
  "properties": [
    {
  "name": "let compute: (Int32, UnsafeMutablePointer<OpaquePointer?>?) throws -> DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(compute: @escaping (Int32, UnsafeMutablePointer<OpaquePointer?>?) throws -> DatabaseValueConvertible?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FunctionDefinition"
},{
  "id": 886,
  "typeString": "class",
  "properties": [
    {
  "name": "let makeAggregate: () -> DatabaseAggregate",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(makeAggregate: @escaping () -> DatabaseAggregate)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AggregateDefinition"
},{
  "id": 887,
  "typeString": "class",
  "properties": [
    {
  "name": "var aggregate: DatabaseAggregate",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hasErrored",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(aggregate: DatabaseAggregate)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AggregateContext"
},{
  "id": 888,
  "typeString": "enum",
  "properties": [
    {
  "name": "var definition: AnyObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let compute): return FunctionDefinition(compute: compute) case .aggregate(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let makeAggregate): return AggregateDefinition(makeAggregate: makeAggregate) } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var xFunc: (@convention(c) (OpaquePointer?, Int32, UnsafeMutablePointer<OpaquePointer?>?) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let definition",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var xStep: (@convention(c) (OpaquePointer?, Int32, UnsafeMutablePointer<OpaquePointer?>?) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aggregateContextU",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aggregateContext",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let arguments",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var xFinal: (@convention(c) (OpaquePointer?) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aggregateContextU",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aggregateContext",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "function"
},
    {
  "name": "aggregate"
}
  ],
  "name": "Kind"
},{
  "id": 889,
  "typeString": "class",
  "properties": [
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let identity: Identity",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let pure: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let kind: Kind",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var eTextRep: Int32",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "install(in db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "uninstall(in db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unmanagedAggregateContext(_ sqliteContext: OpaquePointer?) -> Unmanaged<AggregateContext>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "report(result: DatabaseValueConvertible?, in sqliteContext: OpaquePointer?)",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "report(error: Error, in sqliteContext: OpaquePointer?)",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "init(_ name: String, argumentCount: Int32? = nil, pure: Bool = false, function: @escaping ([DatabaseValue]) throws -> DatabaseValueConvertible?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<Aggregate: DatabaseAggregate>(_ name: String, argumentCount: Int32? = nil, pure: Bool = false, aggregate: Aggregate.Type)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DatabaseFunction",
  "superClass": 1461,
  "containedEntities": [
    884,
    885,
    886,
    887,
    888
  ],
  "extensions": [
    624,
    750,
    751,
    891,
    995,
    996
  ]
},{
  "id": 890,
  "typeString": "protocol",
  "methods": [
    {
  "name": "step(_ dbValues: [DatabaseValue]) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finalize() throws -> DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init() mutating",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseAggregate"
},{
  "id": 892,
  "typeString": "struct",
  "name": "EmptyStatementError"
},{
  "id": 893,
  "typeString": "class",
  "properties": [
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let database: Database deinit",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var argumentsNeedValidation",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _arguments: StatementArguments",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sqliteArgumentCount: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sqliteArgumentNames: [String?]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let cString",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var arguments: StatementArguments",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validate(arguments: StatementArguments) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeSetArguments(_ arguments: StatementArguments)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setArgumentsWithValidation(_ arguments: StatementArguments) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bind(_ dbValue: DatabaseValue, at index: Int32)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "clearBindings()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(withArguments arguments: StatementArguments?)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init( database: Database, statementStart: UnsafePointer<Int8>, statementEnd: UnsafeMutablePointer<UnsafePointer<Int8>?>, prepFlags: Int32) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Statement",
  "extensions": [
    1002
  ]
},{
  "id": 894,
  "typeString": "protocol",
  "methods": [
    {
  "name": "init( database: Database, statementStart: UnsafePointer<Int8>, statementEnd: UnsafeMutablePointer<UnsafePointer<Int8>?>, prepFlags: Int32, authorizer: StatementCompilationAuthorizer) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AuthorizedStatement",
  "extensions": [
    901
  ]
},{
  "id": 895,
  "typeString": "class",
  "properties": [
    {
  "name": "var databaseRegion: DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var columnCount: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var columnNames: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var columnIndexes: [String: Int]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "cursor(arguments: StatementArguments? = nil) -> StatementCursor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cursorReset(arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init( database: Database, statementStart: UnsafePointer<Int8>, statementEnd: UnsafeMutablePointer<UnsafePointer<Int8>?>, prepFlags: Int32, authorizer: StatementCompilationAuthorizer) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SelectStatement",
  "superClass": 893,
  "extensions": [
    672,
    902,
    1009
  ]
},{
  "id": 896,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Void?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil)",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "protocols": [
    834
  ],
  "name": "StatementCursor"
},{
  "id": 897,
  "typeString": "enum",
  "cases": [
    {
  "name": "beginTransaction case commitTransaction case rollbackTransaction case beginSavepoint"
},
    {
  "name": "releaseSavepoint"
},
    {
  "name": "rollbackSavepoint"
}
  ],
  "name": "TransactionEffect"
},{
  "id": 898,
  "typeString": "class",
  "properties": [
    {
  "name": "var invalidatesDatabaseSchemaCache: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var transactionEffect: TransactionEffect?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseEventKinds: [DatabaseEventKind]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "execute(arguments: StatementArguments? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init( database: Database, statementStart: UnsafePointer<Int8>, statementEnd: UnsafeMutablePointer<UnsafePointer<Int8>?>, prepFlags: Int32, authorizer: StatementCompilationAuthorizer) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UpdateStatement",
  "superClass": 893,
  "containedEntities": [
    897
  ],
  "extensions": [
    903
  ]
},{
  "id": 899,
  "typeString": "struct",
  "properties": [
    {
  "name": "var values: [DatabaseValue]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var namedValues: [String: DatabaseValue]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "append(contentsOf arguments: StatementArguments) -> [String: DatabaseValue]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "+ (lhs: StatementArguments, rhs: StatementArguments) -> StatementArguments",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "&+ (lhs: StatementArguments, rhs: StatementArguments) -> StatementArguments",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "+= (lhs: inout StatementArguments, rhs: StatementArguments)",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "consume(_ statement: Statement, allowingRemainingValues: Bool) throws -> [DatabaseValue]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<Sequence: Swift.Sequence>(_ sequence: Sequence) where Sequence.Element == DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<Sequence: Swift.Sequence>(_ sequence: Sequence) where Sequence.Element: DatabaseValueConvertible",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(_ array: [Any])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ dictionary: [String: DatabaseValueConvertible?])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init<Sequence: Swift.Sequence>(_ sequence: Sequence) where Sequence.Element == (String, DatabaseValueConvertible?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(_ dictionary: [AnyHashable: Any])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "StatementArguments",
  "superClass": 1468,
  "extensions": [
    904,
    905,
    906
  ]
},{
  "id": 900,
  "typeString": "struct",
  "properties": [
    {
  "name": "let db: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectStatements: [String: SelectStatement]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var updateStatements: [String: UpdateStatement]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "selectStatement(_ sql: String) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatement(_ sql: String) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(_ statement: SelectStatement)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(_ statement: UpdateStatement)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(database: Database)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatementCache"
},{
  "id": 907,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    566
  ],
  "name": "DatabaseValueConvertible",
  "extensions": [
    707,
    708,
    709,
    753,
    756,
    757,
    760,
    761,
    769,
    770,
    771,
    910,
    911,
    912,
    913,
    983
  ]
},{
  "id": 908,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let columnIndex: Int32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "DatabaseValueCursor"
},{
  "id": 909,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let columnIndex: Int32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Value??",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "NullableDatabaseValueCursor"
},{
  "id": 919,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let function: (Int32, UnsafeRawPointer?, Int32, UnsafeRawPointer?) -> ComparisonResult",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ name: String, function: @escaping (String, String) -> ComparisonResult)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DatabaseCollation",
  "extensions": [
    752,
    920
  ]
},{
  "id": 921,
  "typeString": "class",
  "properties": [
    {
  "name": "let db: Database",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var configuration: Configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let queue: DispatchQueue deinit",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var onValidQueue: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "sync<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reentrantSync<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "async(_ block: @escaping (Database) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "execute<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "preconditionValidQueue(_ message: @autoclosure() -> String = , file: StaticString = #file, line: UInt = #line)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "preconditionNoUnsafeTransactionLeft(_ db: Database, _ message: @autoclosure() -> String = , file: StaticString = #file, line: UInt = #line)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(path: String, configuration: Configuration = Configuration(), schemaCache: DatabaseSchemaCache, label: String) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SerializedDatabase"
},{
  "id": 922,
  "typeString": "struct",
  "properties": [
    {
  "name": "var foreignKeysEnabled: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var readonly: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var label: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var trace: TraceFunction? #if SQLITE_HAS_CODEC",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var passphrase: String? #endif",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var defaultTransactionKind: Database.TransactionKind",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var allowsUnsafeTransactions: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var busyMode: Database.BusyMode",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var maximumReaderCount: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var threadingMode: Database.ThreadingMode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var SQLiteConnectionDidOpen: (() -> ())?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var SQLiteConnectionWillClose: ((SQLiteConnection) -> ())?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var SQLiteConnectionDidClose: (() -> ())?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var SQLiteOpenFlags: Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let readWriteFlags",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Configuration"
},{
  "id": 923,
  "typeString": "struct",
  "properties": [
    {
  "name": "let encode: (_ value: DatabaseValueConvertible?, _ key: String) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(_ value: Bool, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int8, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int16, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int32, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int64, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt8, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt16, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt32, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt64, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Float, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Double, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: String, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode<T>(_ value: T, forKey key: Key) throws where T : Encodable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeNil(forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Bool?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Int?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Int8?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Int16?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Int32?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Int64?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: UInt?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: UInt8?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: UInt16?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: UInt32?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: UInt64?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Float?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: Double?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent(_ value: String?, forKey key: Key) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encodeIfPresent<T>(_ value: T?, forKey key: Key) throws where T : Encodable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nestedContainer<NestedKey>(keyedBy keyType: NestedKey.Type, forKey key: Key) -> KeyedEncodingContainer<NestedKey>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nestedUnkeyedContainer(forKey key: Key) -> UnkeyedEncodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "superEncoder() -> Encoder",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "superEncoder(forKey key: Key) -> Encoder",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(encode: @escaping (_ value: DatabaseValueConvertible?, _ key: String) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PersistableRecordKeyedEncodingContainer",
  "superClass": 1473
},{
  "id": 924,
  "typeString": "struct",
  "properties": [
    {
  "name": "let key: CodingKey",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let encode: (_ value: DatabaseValueConvertible?, _ key: String) -> Void",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encodeNil() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Bool) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int8) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int16) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int32) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Int64) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt8) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt16) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt32) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: UInt64) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Float) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: Double) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(_ value: String) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode<T>(_ value: T) throws where T : Encodable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseValueEncodingContainer",
  "superClass": 1463
},{
  "id": 925,
  "typeString": "struct",
  "properties": [
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userInfo: [CodingUserInfoKey : Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let encode: (_ value: DatabaseValueConvertible?, _ key: String) -> Void",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "container<Key>(keyedBy type: Key.Type) -> KeyedEncodingContainer<Key>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unkeyedContainer() -> UnkeyedEncodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "singleValueContainer() -> SingleValueEncodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(codingPath: [CodingKey], encode: @escaping (_ value: DatabaseValueConvertible?, _ key: String) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PersistableRecordEncoder",
  "superClass": 1464
},{
  "id": 927,
  "typeString": "struct",
  "properties": [
    {
  "name": "let decoder: RowDecoder",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var allKeys: [Key]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columnNames",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scopeNames",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "contains(_ key: Key) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decodeNil(forKey key: Key) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Bool.Type, forKey key: Key) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int.Type, forKey key: Key) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int8.Type, forKey key: Key) throws -> Int8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int16.Type, forKey key: Key) throws -> Int16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int32.Type, forKey key: Key) throws -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int64.Type, forKey key: Key) throws -> Int64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt.Type, forKey key: Key) throws -> UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt8.Type, forKey key: Key) throws -> UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt16.Type, forKey key: Key) throws -> UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt32.Type, forKey key: Key) throws -> UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt64.Type, forKey key: Key) throws -> UInt64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Float.Type, forKey key: Key) throws -> Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Double.Type, forKey key: Key) throws -> Double",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: String.Type, forKey key: Key) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decodeIfPresent<T>(_ type: T.Type, forKey key: Key) throws -> T? where T : Decodable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode<T>(_ type: T.Type, forKey key: Key) throws -> T where T : Decodable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nestedContainer<NestedKey>(keyedBy type: NestedKey.Type, forKey key: Key) throws -> KeyedDecodingContainer<NestedKey> where NestedKey : CodingKey",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nestedUnkeyedContainer(forKey key: Key) throws -> UnkeyedDecodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "superDecoder() throws -> Decoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "superDecoder(forKey key: Key) throws -> Decoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(decoder: RowDecoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowKeyedDecodingContainer",
  "superClass": 1474
},{
  "id": 928,
  "typeString": "struct",
  "properties": [
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let column: CodingKey",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "decodeNil() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Bool.Type) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int.Type) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int8.Type) throws -> Int8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int16.Type) throws -> Int16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int32.Type) throws -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Int64.Type) throws -> Int64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt.Type) throws -> UInt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt8.Type) throws -> UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt16.Type) throws -> UInt16",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt32.Type) throws -> UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: UInt64.Type) throws -> UInt64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Float.Type) throws -> Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: Double.Type) throws -> Double",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode(_ type: String.Type) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decode<T>(_ type: T.Type) throws -> T where T : Decodable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowSingleValueDecodingContainer",
  "superClass": 1465
},{
  "id": 929,
  "typeString": "struct",
  "properties": [
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let codingPath: [CodingKey]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userInfo: [CodingUserInfoKey : Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "container<Key>(keyedBy type: Key.Type) throws -> KeyedDecodingContainer<Key>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unkeyedContainer() throws -> UnkeyedDecodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "singleValueContainer() throws -> SingleValueDecodingContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(row: Row, codingPath: [CodingKey])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RowDecoder",
  "superClass": 1466
},{
  "id": 931,
  "typeString": "protocol",
  "methods": [
    {
  "name": "init(row: Row)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FetchableRecord",
  "extensions": [
    930,
    933,
    934,
    935,
    973,
    974,
    975,
    986,
    987
  ]
},{
  "id": 932,
  "typeString": "class",
  "properties": [
    {
  "name": "let statement: SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sqliteStatement: SQLiteStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var done",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() throws -> Record?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    834
  ],
  "name": "RecordCursor"
},{
  "id": 937,
  "typeString": "class",
  "properties": [
    {
  "name": "let databaseWriter: DatabaseWriter",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let queue: DispatchQueue #if os(iOS) #endif",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var fetchedRecords: [Record]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let fetchedItems",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var application: UIApplication? #endif",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fetchedItems: [Item<Record>]?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var itemsAreIdentical: ItemComparator<Record>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let itemsAreIdenticalFactory: ItemComparatorFactory<Record>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var request: ItemRequest",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var region : DatabaseRegion",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var observer: FetchedRecordsObserver<Record>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var errorHandler: ((FetchedRecordsController<Record>, Error) -> ())?",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "performFetch() throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setRequest<Request>(_ request: Request) throws where Request: FetchRequest, Request.RowDecoder == Record",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setRequest(sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "trackChanges( willChange: ((FetchedRecordsController<Record>) -> ())? = nil, onChange: ((FetchedRecordsController<Record>, Record, FetchedRecordChange) -> ())? = nil, didChange: ((FetchedRecordsController<Record>) -> ())? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "trackChanges<T>( fetchAlongside: @escaping (Database) throws -> T, willChange: ((FetchedRecordsController<Record>, _ fetchedAlongside: T) -> ())? = nil, onChange: ((FetchedRecordsController<Record>, Record, FetchedRecordChange) -> ())? = nil, didChange: ((FetchedRecordsController<Record>, _ fetchedAlongside: T) -> ())? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "trackErrors(_ errorHandler: @escaping (FetchedRecordsController<Record>, Error) -> ())",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "allowBackgroundChangesTracking(in application: UIApplication)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init( _ databaseWriter: DatabaseWriter, sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil, queue: DispatchQueue = .main, isSameRecord: ((Record, Record) -> Bool)? = nil) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<Request>( _ databaseWriter: DatabaseWriter, request: Request, queue: DispatchQueue = .main, isSameRecord: ((Record, Record) -> Bool)? = nil) throws where Request: FetchRequest, Request.RowDecoder == Record",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<Request>( _ databaseWriter: DatabaseWriter, request: Request, queue: DispatchQueue, itemsAreIdenticalFactory: @escaping ItemComparatorFactory<Record>) throws where Request: FetchRequest, Request.RowDecoder == Record",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "FetchedRecordsController",
  "extensions": [
    943,
    944,
    945
  ]
},{
  "id": 938,
  "typeString": "class",
  "properties": [
    {
  "name": "var isValid: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var needsComputeChanges: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var items: [Item<Record>]!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let queue: DispatchQueue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let region: DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fetchAndNotifyChanges: (FetchedRecordsObserver<Record>) -> ()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "invalidate()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "observes(eventsOfKind eventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidChange(with event: DatabaseEvent)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidRollback(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseDidCommit(_ db: Database)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(region: DatabaseRegion, fetchAndNotifyChanges: @escaping (FetchedRecordsObserver<Record>) -> ())",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    786
  ],
  "name": "FetchedRecordsObserver"
},{
  "id": 939,
  "typeString": "enum",
  "cases": [
    {
  "name": "insertion"
},
    {
  "name": "deletion"
},
    {
  "name": "move"
},
    {
  "name": "update"
}
  ],
  "name": "ItemChange",
  "extensions": [
    946,
    947
  ]
},{
  "id": 940,
  "typeString": "enum",
  "cases": [
    {
  "name": "insertion"
},
    {
  "name": "deletion"
},
    {
  "name": "move"
},
    {
  "name": "update"
}
  ],
  "name": "FetchedRecordChange",
  "extensions": [
    948
  ]
},{
  "id": 941,
  "typeString": "struct",
  "properties": [
    {
  "name": "let controller: FetchedRecordsController<Record>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var numberOfRecords: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let items",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var records: [Record]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let items",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FetchedRecordsSectionInfo"
},{
  "id": 942,
  "typeString": "class",
  "properties": [
    {
  "name": "let row: Row lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var record: T",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "==<T> (lhs: Item<T>, rhs: Item<T>) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(row: Row)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    931
  ],
  "name": "Item"
},{
  "id": 949,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var databaseSelection: [SQLSelectable]",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "TableRecord",
  "extensions": [
    516,
    519,
    526,
    541,
    555,
    638,
    647,
    950,
    951,
    952
  ]
},{
  "id": 953,
  "typeString": "class",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "var persistenceConflictPolicy: PersistenceConflictPolicy",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "var databaseSelection: [SQLSelectable]",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "var hasDatabaseChanges: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var databaseChanges: [String: DatabaseValue?]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var referenceRow: Row? @discardableResult final final @discardableResult",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(to container: inout PersistenceContainer)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "copy() -> Self",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "databaseChangesIterator() -> AnyIterator<(String, DatabaseValue?)>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "insert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "update(_ db: Database, columns: Set<String>) throws",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "updateChanges(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "save(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(row: Row)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    931
  ],
  "name": "Record",
  "extensions": [
    1011
  ]
},{
  "id": 954,
  "typeString": "enum",
  "cases": [
    {
  "name": "recordNotFound"
}
  ],
  "name": "PersistenceError",
  "extensions": [
    964
  ]
},{
  "id": 955,
  "typeString": "struct",
  "properties": [
    {
  "name": "var storage: [String: DatabaseValueConvertible?]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var columns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var values: [DatabaseValueConvertible?]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lowercaseColumn",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lowercaseColumn",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "value(forCaseInsensitiveColumn column: String) -> DatabaseValue?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeIterator() -> DictionaryIterator<String, DatabaseValueConvertible?>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ record: MutablePersistableRecord)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PersistenceContainer"
},{
  "id": 956,
  "typeString": "struct",
  "properties": [
    {
  "name": "let conflictResolutionForInsert: Database.ConflictResolution",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let conflictResolutionForUpdate: Database.ConflictResolution",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(insert: Database.ConflictResolution = .abort, update: Database.ConflictResolution = .abort)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PersistenceConflictPolicy"
},{
  "id": 957,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var persistenceConflictPolicy: PersistenceConflictPolicy",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(to container: inout PersistenceContainer) mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didInsert(with rowID: Int64, for column: String?) mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(_ db: Database, columns: Set<String>) throws mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "save(_ db: Database) throws @discardableResult",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "delete(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "exists(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    949
  ],
  "name": "MutablePersistableRecord",
  "extensions": [
    637,
    926,
    966,
    967,
    968,
    969,
    970,
    1012
  ]
},{
  "id": 958,
  "typeString": "protocol",
  "methods": [
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "save(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    957
  ],
  "name": "PersistableRecord",
  "extensions": [
    971
  ]
},{
  "id": 959,
  "typeString": "class",
  "properties": [
    {
  "name": "let db: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let record: MutablePersistableRecord",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let persistenceContainer: PersistenceContainer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let databaseTableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let primaryKey: PrimaryKeyInfo",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "insertStatement(onConflict: Database.ConflictResolution) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatement(_ db: Database, columns: Set<String>, onConflict: Database.ConflictResolution) throws -> UpdateStatement?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteStatement() throws -> UpdateStatement?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "existsStatement() throws -> SelectStatement?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ db: Database, _ record: MutablePersistableRecord) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DAO"
},{
  "id": 960,
  "typeString": "struct",
  "properties": [
    {
  "name": "let onConflict: Database.ConflictResolution",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let insertedColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "InsertQuery",
  "superClass": 1461,
  "extensions": [
    972
  ]
},{
  "id": 961,
  "typeString": "struct",
  "properties": [
    {
  "name": "let onConflict: Database.ConflictResolution",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let updatedColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let conditionColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UpdateQuery",
  "superClass": 1461
},{
  "id": 962,
  "typeString": "struct",
  "properties": [
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let conditionColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DeleteQuery"
},{
  "id": 963,
  "typeString": "struct",
  "properties": [
    {
  "name": "let tableName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let conditionColumns: [String]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ExistsQuery"
},{
  "id": 980,
  "typeString": "struct",
  "name": "DatabaseSequence"
},{
  "id": 981,
  "typeString": "struct",
  "name": "DatabaseIterator"
},{
  "id": 1007,
  "typeString": "class",
  "name": "RecordBox",
  "superClass": 953
},{
  "id": 1015,
  "typeString": "enum",
  "methods": [
    {
  "name": "map<T>(_ transform: (Value) -> T) -> Result<T>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(value: () throws -> Value)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "success"
},
    {
  "name": "failure"
}
  ],
  "name": "Result"
},{
  "id": 1016,
  "typeString": "class",
  "properties": [
    {
  "name": "var value: T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var _value: T",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var queue: DispatchQueue",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "read<U>(_ block: (T) throws -> U) rethrows -> U",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "write<U>(_ block: (inout T) throws -> U) rethrows -> U",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ value: T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ReadWriteBox",
  "extensions": [
    1017
  ]
},{
  "id": 1018,
  "typeString": "class",
  "properties": [
    {
  "name": "let element: T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var available: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(element: T, available: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Item"
},{
  "id": 1019,
  "typeString": "class",
  "properties": [
    {
  "name": "let makeElement: () throws -> T",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var items: ReadWriteBox<[Item]>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let semaphore: DispatchSemaphore",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "get() throws -> (T, () -> ())",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "get<U>(block: (T) throws -> U) throws -> U",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "forEach(_ body: (T) throws -> ()) rethrows",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clear(andThen block: () throws -> ()) rethrows",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(maximumCount: Int, makeElement: @escaping () throws -> T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Pool",
  "containedEntities": [
    1018
  ]
},{
  "id": 1020,
  "typeString": "protocol",
  "name": "_OptionalProtocol"
},{
  "id": 1024,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawPattern: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init?(matchingAnyTokenIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingAllTokensIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingPhrase string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingPrefixPhrase string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(rawPattern: String, allowedColumns: [String] = []) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS5Pattern",
  "extensions": [
    1026
  ]
},{
  "id": 1027,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var name: String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(db: Database, arguments: [String]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1037
  ],
  "name": "FTS5CustomTokenizer",
  "extensions": [
    1029
  ]
},{
  "id": 1028,
  "typeString": "class",
  "properties": [
    {
  "name": "let db: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let constructor: (Database, [String], UnsafeMutablePointer<OpaquePointer?>?) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(db: Database, constructor: @escaping (Database, [String], UnsafeMutablePointer<OpaquePointer?>?) -> Int32)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS5TokenizerConstructor"
},{
  "id": 1033,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let arguments: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let simple",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let porter",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "unicode61(removeDiacritics: Bool = true, separators: Set<Character> = [], tokenCharacters: Set<Character> = []) -> FTS3TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "unicode61(removeDiacritics: Bool = true, separators: Set<Character> = [], tokenCharacters: Set<Character> = []) -> FTS3TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_unicode61(removeDiacritics: Bool = true, separators: Set<Character> = [], tokenCharacters: Set<Character> = []) -> FTS3TokenizerDescriptor",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "tokenize(_ string: String) -> [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tokenize(_ string: String) -> [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_tokenize(_ string: String) -> [String]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(_ name: String, arguments: [String] = [])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS3TokenizerDescriptor"
},{
  "id": 1034,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawPattern: String #if GRDBCUSTOMSQLITE || GRDBCIPHER #else @available(iOS 8.2, OSX 10.10, *) @available(iOS 8.2, OSX 10.10, *) @available(iOS 8.2, OSX 10.10, *) #endif",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawPattern: String) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingAnyTokenIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingAllTokensIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingPhrase string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingAnyTokenIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingAllTokensIn string: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(matchingPhrase string: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS3Pattern",
  "extensions": [
    1035
  ]
},{
  "id": 1036,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: Int32",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let query",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let prefix",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let document",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let aux",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS5Tokenization",
  "superClass": 1460
},{
  "id": 1037,
  "typeString": "protocol",
  "methods": [
    {
  "name": "tokenize(context: UnsafeMutableRawPointer?, tokenization: FTS5Tokenization, pText: UnsafePointer<Int8>?, nText: Int32, tokenCallback: @escaping FTS5TokenCallback) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS5Tokenizer",
  "superClass": 1433,
  "extensions": [
    1040
  ]
},{
  "id": 1038,
  "typeString": "class",
  "properties": [
    {
  "name": "var tokens: [(String, FTS5TokenFlags)]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TokenizeContext"
},{
  "id": 1039,
  "typeString": "class",
  "properties": [
    {
  "name": "let xTokenizer: fts5_tokenizer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tokenizerPointer: OpaquePointer deinit",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let delete",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "convertArguments<Result>(_ array: inout ContiguousArray<UnsafePointer<Int8>>, _ car: String, _ cdr: [String], _ body: (ContiguousArray<UnsafePointer<Int8>>) -> Result) -> Result",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tokenize(context: UnsafeMutableRawPointer?, tokenization: FTS5Tokenization, pText: UnsafePointer<Int8>?, nText: Int32, tokenCallback: @escaping FTS5TokenCallback) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(xTokenizer: fts5_tokenizer, contextPointer: UnsafeMutableRawPointer?, arguments: [String]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1037
  ],
  "name": "FTS5RegisteredTokenizer"
},{
  "id": 1042,
  "typeString": "struct",
  "properties": [
    {
  "name": "let moduleName",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeTableDefinition() -> FTS4TableDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "moduleArguments(for definition: FTS4TableDefinition, in db: Database) -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "database(_ db: Database, didCreate tableName: String, using definition: FTS4TableDefinition) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    639
  ],
  "name": "FTS4"
},{
  "id": 1043,
  "typeString": "enum",
  "cases": [
    {
  "name": "raw"
},
    {
  "name": "synchronized"
}
  ],
  "name": "ContentMode"
},{
  "id": 1044,
  "typeString": "class",
  "properties": [
    {
  "name": "var columns: [FTS4ColumnDefinition]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var contentMode: ContentMode",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var tokenizer: FTS3TokenizerDescriptor?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var content: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let content): return content case .synchronized(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentTable): return contentTable } } set",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var compress: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var uncompress: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var matchinfo: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var prefixes: Set<Int>? @discardableResult",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "column(_ name: String) -> FTS4ColumnDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "synchronize(withTable tableName: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS4TableDefinition",
  "containedEntities": [
    1043
  ]
},{
  "id": 1045,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var isIndexed: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var isLanguageId: Bool #if GRDBCUSTOMSQLITE || GRDBCIPHER @discardableResult #else @available(iOS 8.2, OSX 10.10, *) @discardableResult #endif @discardableResult",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "notIndexed() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "notIndexed() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "asLanguageId() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS4ColumnDefinition"
},{
  "id": 1047,
  "typeString": "struct",
  "properties": [
    {
  "name": "let components: [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var arguments: [String]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "ascii(separators: Set<Character> = []) -> FTS5TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "porter(wrapping base: FTS5TokenizerDescriptor? = nil) -> FTS5TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "unicode61(removeDiacritics: Bool = true, separators: Set<Character> = [], tokenCharacters: Set<Character> = []) -> FTS5TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(components: [String])",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS5TokenizerDescriptor"
},{
  "id": 1048,
  "typeString": "struct",
  "properties": [
    {
  "name": "let moduleName",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeTableDefinition() -> FTS5TableDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "moduleArguments(for definition: FTS5TableDefinition, in db: Database) throws -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "database(_ db: Database, didCreate tableName: String, using definition: FTS5TableDefinition) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "api(_ db: Database) -> UnsafePointer<fts5_api>",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    639
  ],
  "name": "FTS5"
},{
  "id": 1049,
  "typeString": "enum",
  "cases": [
    {
  "name": "raw"
},
    {
  "name": "synchronized"
}
  ],
  "name": "ContentMode"
},{
  "id": 1050,
  "typeString": "class",
  "properties": [
    {
  "name": "var columns: [FTS5ColumnDefinition]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var contentMode: ContentMode",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var tokenizer: FTS5TokenizerDescriptor?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var content: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let content, _): return content case .synchronized(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentTable): return contentTable } } set",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let contentRowID): contentMode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var contentRowID: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let contentRowID): return contentRowID case .synchronized: return nil } } set",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let content, _): contentMode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var prefixes: Set<Int>?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var columnSize: Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var detail: String? @discardableResult",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "column(_ name: String) -> FTS5ColumnDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "synchronize(withTable tableName: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS5TableDefinition",
  "containedEntities": [
    1049
  ]
},{
  "id": 1051,
  "typeString": "class",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var isIndexed: Bool @discardableResult",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "notIndexed() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(name: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS5ColumnDefinition"
},{
  "id": 1054,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: Int32",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let colocated",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS5TokenFlags",
  "superClass": 1460
},{
  "id": 1055,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var wrappedTokenizer: FTS5Tokenizer",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "accept(token: String, flags: FTS5TokenFlags, for tokenization: FTS5Tokenization, tokenCallback: FTS5WrapperTokenCallback) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1027
  ],
  "name": "FTS5WrapperTokenizer",
  "extensions": [
    1057
  ]
},{
  "id": 1056,
  "typeString": "struct",
  "properties": [
    {
  "name": "let tokenizer: FTS5WrapperTokenizer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let context: UnsafeMutableRawPointer?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tokenization: FTS5Tokenization",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tokenCallback: FTS5TokenCallback",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FTS5WrapperContext"
},{
  "id": 1058,
  "typeString": "struct",
  "properties": [
    {
  "name": "let moduleName",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeTableDefinition() -> FTS3TableDefinition",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "moduleArguments(for definition: FTS3TableDefinition, in db: Database) -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "database(_ db: Database, didCreate tableName: String, using definition: FTS3TableDefinition)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    639
  ],
  "name": "FTS3"
},{
  "id": 1059,
  "typeString": "class",
  "properties": [
    {
  "name": "var columns: [String]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var tokenizer: FTS3TokenizerDescriptor?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "column(_ name: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "FTS3TableDefinition"
},{
  "id": 1060,
  "typeString": "struct",
  "properties": [
    {
  "name": "var eraseDatabaseOnSchemaChange",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var migrations: [Migration]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "registerMigration(_ identifier: String, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "registerMigrationWithDeferredForeignKeyCheck(_ identifier: String, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "registerMigrationWithDeferredForeignKeyCheck(_ identifier: String, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "migrate(_ writer: DatabaseWriter) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "migrate(_ writer: DatabaseWriter, upTo targetIdentifier: String) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "appliedMigrations(in reader: DatabaseReader) throws -> Set<String>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "registerMigration(_ migration: Migration)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupMigrations(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "appliedIdentifiers(_ db: Database) throws -> Set<String>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "runMigrations(_ db: Database, upTo targetIdentifier: String) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DatabaseMigrator"
},{
  "id": 1061,
  "typeString": "struct",
  "properties": [
    {
  "name": "let identifier: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let disabledForeignKeyChecks: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let migrate: (Database) throws -> Void #if GRDBCUSTOMSQLITE || GRDBCIPHER #else @available(iOS 8.2, OSX 10.10, *) #endif",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "run(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "runWithoutDisabledForeignKeys(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "runWithDisabledForeignKeys(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "insertAppliedIdentifier(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(identifier: String, disabledForeignKeyChecks: Bool = false, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(identifier: String, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(identifier: String, disabledForeignKeyChecks: Bool, migrate: @escaping (Database) throws -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Migration"
},{
  "id": 1062,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidKeySize case dataPaddingRequired case invalidData"
}
  ],
  "name": "Error",
  "superClass": 1475,
  "extensions": [
    429
  ]
},{
  "id": 1063,
  "typeString": "enum",
  "properties": [
    {
  "name": "var Nk: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var Nb: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var Nr: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "aes128"
}
  ],
  "name": "Variant",
  "superClass": 1446
},{
  "id": 1064,
  "typeString": "class",
  "properties": [
    {
  "name": "let variantNr: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let variantNb: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let variantNk: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let blockSize: Int",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let keySize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let variant: Variant",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let key: Key",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockMode: BlockMode",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let padding: Padding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var expandedKey: Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var expandedKeyInv: Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sBoxes: (sBox: Array<UInt32>, invSBox: Array<UInt32>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sBox: Array<UInt32>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sBoxInv: Array<UInt32>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let Rcon: Array<UInt8>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T0: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T0_INV: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T1: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T1_INV: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T2: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T2_INV: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T3: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let T3_INV: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let U1: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let U2: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let U3: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let U4: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encrypt(block: ArraySlice<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block: ArraySlice<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(key: Array<UInt8>, blockMode: BlockMode, padding: Padding = .pkcs7) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1136
  ],
  "name": "AES",
  "containedEntities": [
    1062,
    1063
  ],
  "extensions": [
    1065,
    1066,
    1081,
    1104
  ]
},{
  "id": 1067,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var worker: CipherModeWorker",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let padding: Padding",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var lastBlockRemainder",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, padding: Padding, _ worker: CipherModeWorker) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1112
  ],
  "name": "BlockEncryptor"
},{
  "id": 1069,
  "typeString": "protocol",
  "methods": [
    {
  "name": "makeEncryptor() throws -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeDecryptor() throws -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "randomIV(_ blockSize: Int) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Cryptors",
  "superClass": 1433,
  "extensions": [
    1070
  ]
},{
  "id": 1071,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInput case derivedKeyTooLong"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1072,
  "typeString": "struct",
  "properties": [
    {
  "name": "let numBlocks: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dkLen: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let info: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let prk: Array<UInt8>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let variant: HMAC.Variant",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate() throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(password: Array<UInt8>, salt: Array<UInt8>? = nil, info: Array<UInt8>? = nil, keyLength: Int? = nil , variant: HMAC.Variant = .sha256) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "HKDF",
  "containedEntities": [
    1071
  ]
},{
  "id": 1073,
  "typeString": "enum",
  "cases": [
    {
  "name": "encrypt case decrypt"
}
  ],
  "name": "CipherError"
},{
  "id": 1074,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var keySize: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encrypt(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Cipher",
  "superClass": 1433,
  "extensions": [
    1075
  ]
},{
  "id": 1076,
  "typeString": "class",
  "properties": [
    {
  "name": "let kLen",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var ivRange",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "encrypt(_ plainText: Array<UInt8>, key: Array<UInt8>, iv: Array<UInt8>, authenticationHeader: Array<UInt8>) throws -> (cipherText: Array<UInt8>, authenticationTag: Array<UInt8>)",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "decrypt(_ cipherText: Array<UInt8>, key: Array<UInt8>, iv: Array<UInt8>, authenticationHeader: Array<UInt8>, authenticationTag: Array<UInt8>) throws -> (plainText: Array<UInt8>, success: Bool)",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1077
  ],
  "name": "AEADChaCha20Poly1305"
},{
  "id": 1077,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var kLen: Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var ivRange: Range<Int>",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "AEAD",
  "extensions": [
    1078
  ]
},{
  "id": 1082,
  "typeString": "enum",
  "cases": [
    {
  "name": "zero case one"
}
  ],
  "name": "Bit",
  "superClass": 1446,
  "extensions": [
    1083
  ]
},{
  "id": 1084,
  "typeString": "enum",
  "cases": [
    {
  "name": "authenticateError case invalidInput"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1085,
  "typeString": "enum",
  "properties": [
    {
  "name": "var digestLength: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "calculateHash(_ bytes: Array<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "blockSize() -> Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "sha1"
},
    {
  "name": "sha256"
},
    {
  "name": "sha384"
},
    {
  "name": "sha512"
},
    {
  "name": "md5 var digestLength"
}
  ],
  "name": "Variant"
},{
  "id": 1086,
  "typeString": "class",
  "properties": [
    {
  "name": "var key: Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let variant: Variant",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "authenticate(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(key: Array<UInt8>, variant: HMAC.Variant = .md5)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1124
  ],
  "name": "HMAC",
  "containedEntities": [
    1084,
    1085
  ],
  "extensions": [
    1099
  ]
},{
  "id": 1087,
  "typeString": "enum",
  "cases": [
    {
  "name": "wrongKeyLength"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1088,
  "typeString": "class",
  "properties": [
    {
  "name": "let key: SecureBytes",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let BlockSize: Int",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let Zero: Array<UInt8>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let Rb: Array<UInt8>",
  "type": "type",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "authenticate(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "leftShiftOneBit(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(key: Array<UInt8>) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1124
  ],
  "name": "CMAC",
  "containedEntities": [
    1087
  ]
},{
  "id": 1091,
  "typeString": "protocol",
  "name": "_UInt32Type"
},{
  "id": 1094,
  "typeString": "struct",
  "methods": [
    {
  "name": "md5(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha1(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha224(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha256(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha384(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha512(_ bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha2(_ bytes: Array<UInt8>, variant: SHA2.Variant) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "sha3(_ bytes: Array<UInt8>, variant: SHA3.Variant) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "Digest"
},{
  "id": 1095,
  "typeString": "struct",
  "properties": [
    {
  "name": "let i: (a: UInt64, b: UInt64) typealias IntegerLiteralType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bytes: Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var at",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let ar",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let br",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var result",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "^(n1: UInt128, n2: UInt128) -> UInt128",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "&(n1: UInt128, n2: UInt128) -> UInt128",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": ">>(value: UInt128, by: Int) -> UInt128",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "==(lhs: UInt128, rhs: UInt128) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "!=(lhs: UInt128, rhs: UInt128) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(integerLiteral value: IntegerLiteralType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ raw: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ raw: ArraySlice<UInt8>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ i: (a: UInt64, b: UInt64))",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(a: UInt64, b: UInt64)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ b: UInt64)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UInt128",
  "superClass": 1451
},{
  "id": 1096,
  "typeString": "struct",
  "methods": [
    {
  "name": "add(to data: Array<UInt8>, blockSize _: Int) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(from data: Array<UInt8>, blockSize _: Int?) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1150
  ],
  "name": "NoPadding"
},{
  "id": 1106,
  "typeString": "protocol",
  "name": "_UInt8Type"
},{
  "id": 1110,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let digestLength: Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let hashInitialValue: Array<UInt32>",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var processedBytesTotalCount: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulatedHash: Array<UInt32>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let s: Array<UInt32>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let k: Array<UInt32>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "calculate(for bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "process(block chunk: ArraySlice<UInt8>, currentHash: inout Array<UInt32>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1144
  ],
  "name": "MD5",
  "extensions": [
    1111
  ]
},{
  "id": 1112,
  "typeString": "protocol",
  "methods": [
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Cryptor"
},{
  "id": 1114,
  "typeString": "struct",
  "properties": [
    {
  "name": "let range: Range<Base.Index>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BatchedCollectionIndex",
  "extensions": [
    1117
  ]
},{
  "id": 1115,
  "typeString": "protocol",
  "name": "BatchedCollectionType",
  "superClass": 1472
},{
  "id": 1116,
  "typeString": "struct",
  "properties": [
    {
  "name": "let base: Base",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let size: Int typealias Index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startIndex: Index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endIndex: Index",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "nextBreak(after idx: Base.Index) -> Base.Index",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "index(after idx: Index) -> Index",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BatchedCollection",
  "superClass": 1472
},{
  "id": 1119,
  "typeString": "class",
  "properties": [
    {
  "name": "let bytes: Array<UInt8>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let count: Int deinit",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(bytes: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SecureBytes",
  "extensions": [
    1120,
    1121
  ]
},{
  "id": 1122,
  "typeString": "struct",
  "methods": [
    {
  "name": "add(to bytes: Array<UInt8>, blockSize: Int) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(from bytes: Array<UInt8>, blockSize _: Int?) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1150
  ],
  "name": "ZeroPadding"
},{
  "id": 1124,
  "typeString": "protocol",
  "methods": [
    {
  "name": "authenticate(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Authenticator"
},{
  "id": 1125,
  "typeString": "enum",
  "properties": [
    {
  "name": "var digestLength: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var markByte: UInt8",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var outputLength: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "cases": [
    {
  "name": "sha224"
},
    {
  "name": "sha256"
},
    {
  "name": "sha384"
},
    {
  "name": "sha512"
},
    {
  "name": "keccak224"
},
    {
  "name": "keccak256"
},
    {
  "name": "keccak384"
},
    {
  "name": "keccak512 var digestLength"
}
  ],
  "name": "Variant"
},{
  "id": 1126,
  "typeString": "class",
  "properties": [
    {
  "name": "let round_constants: Array<UInt64>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let digestLength: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let markByte: UInt8",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulatedHash: Array<UInt64>",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate(for bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "θ(_ a: inout Array<UInt64>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "π(_ a: inout Array<UInt64>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "χ(_ a: inout Array<UInt64>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "ι(_ a: inout Array<UInt64>, round: Int)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "process(block chunk: ArraySlice<UInt64>, currentHash hh: inout Array<UInt64>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(variant: SHA3.Variant)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1144
  ],
  "name": "SHA3",
  "containedEntities": [
    1125
  ],
  "extensions": [
    1127
  ]
},{
  "id": 1128,
  "typeString": "struct",
  "properties": [
    {
  "name": "let size: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeIterator() -> AnyIterator<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RandomBytesSequence",
  "superClass": 1476
},{
  "id": 1129,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidKeyOrInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1130,
  "typeString": "class",
  "properties": [
    {
  "name": "let ivSize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let keySize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let blockSize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var keySize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let key: Key",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let iv: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var x",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var c",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var p7: UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var a: Array<UInt32>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setup()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "setupIV(_ iv: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "nextState()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "g(_ j: Int) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "nextOutput() -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(key: Array<UInt8>) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(key: Array<UInt8>, iv: Array<UInt8>?) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1136
  ],
  "name": "Rabbit",
  "containedEntities": [
    1129
  ],
  "extensions": [
    1105,
    1131
  ]
},{
  "id": 1132,
  "typeString": "class",
  "properties": [
    {
  "name": "let digestLength: Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let hashInitialValue: ContiguousArray<UInt32>",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var processedBytesTotalCount: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulatedHash: ContiguousArray<UInt32>",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate(for bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "process(block chunk: ArraySlice<UInt8>, currentHash hh: inout ContiguousArray<UInt32>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1144
  ],
  "name": "SHA1",
  "extensions": [
    1133
  ]
},{
  "id": 1134,
  "typeString": "enum",
  "cases": [
    {
  "name": "authenticateError"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1135,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let key: SecureBytes",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "squeeze(h: inout Array<UInt32>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "add(h: inout Array<UInt32>, c: Array<UInt32>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "mulmod(h: inout Array<UInt32>, r: Array<UInt32>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "freeze(h: inout Array<UInt32>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "onetimeauth(message input: Array<UInt8>, key k: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "authenticate(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(key: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1124
  ],
  "name": "Poly1305",
  "containedEntities": [
    1134
  ]
},{
  "id": 1136,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var blockSize: Int",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1074
  ],
  "name": "BlockCipher"
},{
  "id": 1137,
  "typeString": "protocol",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool) throws -> Array<UInt8> mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool, output: (_ bytes: Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Updatable",
  "extensions": [
    1138
  ]
},{
  "id": 1139,
  "typeString": "enum",
  "cases": [
    {
  "name": "dataPaddingRequired case invalidKeyOrInitializationVector case invalidInitializationVector case invalidBlockMode"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1140,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let keySize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let blockMode: BlockMode",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let padding: Padding",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var decryptWorker: CipherModeWorker!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var encryptWorker: CipherModeWorker!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let N",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var P: Array<UInt32>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var S: Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let origP: Array<UInt32>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let origS: Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setupBlockModeWorkers() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "expandKey(key: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "encrypt(block: ArraySlice<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "decrypt(block: ArraySlice<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "encryptBlowfishBlock(l: inout UInt32, r: inout UInt32)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "decryptBlowfishBlock(l: inout UInt32, r: inout UInt32)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "F(x: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(key: Array<UInt8>, blockMode: BlockMode = CBC(iv: Array<UInt8>(repeating: 0, count: Blowfish.blockSize)), padding: Padding) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Blowfish",
  "containedEntities": [
    1139
  ],
  "extensions": [
    1098,
    1141
  ]
},{
  "id": 1142,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let padding: Padding",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var worker: CipherModeWorker",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "seek(to position: Int) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(blockSize: Int, padding: Padding, _ worker: CipherModeWorker) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1112
  ],
  "name": "BlockDecryptor"
},{
  "id": 1143,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var worker: CipherModeWorker",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let padding: Padding",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var lastBlockRemainder",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, padding: Padding, _ worker: CipherModeWorker) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1112
  ],
  "name": "StreamEncryptor"
},{
  "id": 1144,
  "typeString": "protocol",
  "methods": [
    {
  "name": "calculate(for bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DigestType"
},{
  "id": 1145,
  "typeString": "class",
  "properties": [
    {
  "name": "let table32: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let table32c: Array<UInt32>",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let table16: Array<UInt16>",
  "type": "type",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "crc32(_ message: Array<UInt8>, seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "crc32c(_ message: Array<UInt8>, seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "crc16(_ message: Array<UInt8>, seed: UInt16? = nil) -> UInt16",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Checksum",
  "extensions": [
    1146
  ]
},{
  "id": 1147,
  "typeString": "enum",
  "properties": [
    {
  "name": "var digestLength: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var blockSize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rawValue: RawValue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var h: Array<UInt64>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var finalLength: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "init?(rawValue: RawValue)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "cases": [
    {
  "name": "sha224"
},
    {
  "name": "sha256"
},
    {
  "name": "sha384"
},
    {
  "name": "sha512 public var digestLength"
}
  ],
  "name": "Variant",
  "superClass": 1462
},{
  "id": 1148,
  "typeString": "class",
  "properties": [
    {
  "name": "let variant: Variant",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let size: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let digestLength: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let k: Array<UInt64>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var processedBytesTotalCount: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulatedHash32",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var accumulatedHash64",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate(for bytes: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "process64(block chunk: ArraySlice<UInt8>, currentHash hh: inout Array<UInt64>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "process32(block chunk: ArraySlice<UInt8>, currentHash hh: inout Array<UInt32>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init(variant: SHA2.Variant)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1144
  ],
  "name": "SHA2",
  "containedEntities": [
    1147
  ],
  "extensions": [
    1149
  ]
},{
  "id": 1150,
  "typeString": "protocol",
  "methods": [
    {
  "name": "add(to: Array<UInt8>, blockSize: Int) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(from: Array<UInt8>, blockSize: Int?) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PaddingProtocol"
},{
  "id": 1151,
  "typeString": "enum",
  "methods": [
    {
  "name": "add(to: Array<UInt8>, blockSize: Int) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(from: Array<UInt8>, blockSize: Int?) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1150
  ],
  "cases": [
    {
  "name": "noPadding"
},
    {
  "name": "zeroPadding"
},
    {
  "name": "pkcs7"
},
    {
  "name": "pkcs5"
}
  ],
  "name": "Padding"
},{
  "id": 1152,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidPaddingValue"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1153,
  "typeString": "struct",
  "methods": [
    {
  "name": "add(to bytes: Array<UInt8>, blockSize: Int) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "remove(from bytes: Array<UInt8>, blockSize _: Int?) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1150
  ],
  "name": "PKCS7Padding",
  "containedEntities": [
    1152
  ]
},{
  "id": 1154,
  "typeString": "enum",
  "name": "PKCS5",
  "extensions": [
    1158,
    1162
  ]
},{
  "id": 1155,
  "typeString": "enum",
  "name": "PKCS7"
},{
  "id": 1156,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInput case derivedKeyTooLong"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1157,
  "typeString": "struct",
  "properties": [
    {
  "name": "let salt: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let iterations: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let numBlocks: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dkLen: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let prf: HMAC",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate() throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(password: Array<UInt8>, salt: Array<UInt8>, iterations: Int = 4096 , keyLength: Int? = nil , variant: HMAC.Variant = .sha256) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PBKDF2",
  "containedEntities": [
    1156
  ]
},{
  "id": 1159,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInput case derivedKeyTooLong"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1160,
  "typeString": "enum",
  "properties": [
    {
  "name": "var size: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "calculateHash(_ bytes: Array<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "cases": [
    {
  "name": "md5"
},
    {
  "name": "sha1 var size"
}
  ],
  "name": "Variant"
},{
  "id": 1161,
  "typeString": "struct",
  "properties": [
    {
  "name": "let iterations: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let variant: Variant",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let keyLength: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let t1: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "calculate() -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(password: Array<UInt8>, salt: Array<UInt8>, variant: Variant = .sha1, iterations: Int = 4096 , keyLength: Int? = nil ) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PBKDF1",
  "containedEntities": [
    1159,
    1160
  ]
},{
  "id": 1163,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let none",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let initializationVectorRequired",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let paddingRequired",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let useEncryptToDecrypt",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: Int)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(rawValue: Int, authenticationTagSize: Int)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "BlockModeOption",
  "superClass": 1460
},{
  "id": 1164,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1165,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1175
  ],
  "name": "CFB",
  "containedEntities": [
    1164
  ]
},{
  "id": 1166,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var prev: ArraySlice<UInt8>? mutating mutating",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, iv: ArraySlice<UInt8>, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "CFBModeWorker"
},{
  "id": 1167,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1168,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1175
  ],
  "name": "CBC",
  "containedEntities": [
    1167
  ]
},{
  "id": 1169,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var prev: ArraySlice<UInt8>? mutating mutating",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, iv: ArraySlice<UInt8>, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "CBCModeWorker"
},{
  "id": 1170,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1175
  ],
  "name": "ECB"
},{
  "id": 1171,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "ECBModeWorker"
},{
  "id": 1172,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1173,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1175
  ],
  "name": "PCBC",
  "containedEntities": [
    1172
  ]
},{
  "id": 1174,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var prev: ArraySlice<UInt8>? mutating mutating",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, iv: ArraySlice<UInt8>, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "PCBCModeWorker"
},{
  "id": 1175,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var options: BlockModeOption",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BlockMode"
},{
  "id": 1176,
  "typeString": "enum",
  "properties": [
    {
  "name": "var additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "combined case detached var additionalBufferSize"
}
  ],
  "name": "Mode"
},{
  "id": 1177,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector case fail"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1178,
  "typeString": "class",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let additionalAuthenticatedData: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let mode: Mode",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var authenticationTag: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>, additionalAuthenticatedData: Array<UInt8>? = nil, mode: Mode = .detached)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>, authenticationTag: Array<UInt8>, additionalAuthenticatedData: Array<UInt8>? = nil, mode: Mode = .detached)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1175
  ],
  "name": "GCM",
  "containedEntities": [
    1176,
    1177
  ]
},{
  "id": 1179,
  "typeString": "class",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var didCalculateTag: ((Array<UInt8>) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tagSize",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "let nonceSize",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let blockSize",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let mode: GCM.Mode",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var counter: UInt128",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let eky0: UInt128",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let h: UInt128",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let aad: ArraySlice<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var expectedTag: Array<UInt8>?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var gf: GF",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aad",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finalize(encrypt ciphertext: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "willDecryptLast(block ciphertext: ArraySlice<UInt8>) throws -> ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didDecryptLast(block plaintext: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(iv: ArraySlice<UInt8>, aad: ArraySlice<UInt8>? = nil, expectedTag: Array<UInt8>? = nil, mode: GCM.Mode, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1185
  ],
  "name": "GCMModeWorker"
},{
  "id": 1180,
  "typeString": "class",
  "properties": [
    {
  "name": "let r",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let h: UInt128",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let aadLength: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ciphertextLength: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var x: UInt128 @discardableResult",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "ghashUpdate(block ciphertextBlock: Array<UInt8>) -> UInt128",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ghashFinish() -> UInt128",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ghash(x startx: UInt128 = 0, h: UInt128, aad: Array<UInt8>, ciphertext: Array<UInt8>, blockSize: Int) -> UInt128",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "calculateX(ciphertext: [UInt8], x startx: UInt128, h: UInt128, blockSize: Int) -> UInt128",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "calculateX(block ciphertextBlock: Array<UInt8>, x: UInt128, h: UInt128, blockSize: Int) -> UInt128",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "calculateX(aad: [UInt8], x startx: UInt128, h: UInt128, blockSize: Int) -> UInt128",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "multiply(_ x: UInt128, _ y: UInt128) -> UInt128",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "init(aad: [UInt8], h: UInt128, blockSize: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "GF"
},{
  "id": 1181,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8> mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CipherModeWorker"
},{
  "id": 1182,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1181
  ],
  "name": "BlockModeWorker"
},{
  "id": 1183,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var counter: Counter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1181
  ],
  "name": "CounterModeWorker"
},{
  "id": 1184,
  "typeString": "protocol",
  "methods": [
    {
  "name": "seek(to position: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1181
  ],
  "name": "StreamModeWorker"
},{
  "id": 1185,
  "typeString": "protocol",
  "methods": [
    {
  "name": "finalize(encrypt ciphertext: ArraySlice<UInt8>) throws -> Array<UInt8> mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "willDecryptLast(block ciphertext: ArraySlice<UInt8>) throws -> ArraySlice<UInt8> mutating",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didDecryptLast(block plaintext: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "BlockModeWorkerFinalizing"
},{
  "id": 1186,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1187,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let counter: Int",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>, counter: Int = 0)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "CTR",
  "superClass": 1477,
  "containedEntities": [
    1186
  ]
},{
  "id": 1188,
  "typeString": "class",
  "properties": [
    {
  "name": "let constPrefix: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var value: UInt64",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var bytes: Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "+=(lhs: CTRCounter, rhs: Int)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(_ initialValue: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(nonce: Array<UInt8>, startAt index: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CTRCounter"
},{
  "id": 1189,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var counter: CTRCounter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var keystream: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var keystreamPosIdx",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "seek(to position: Int) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, iv: ArraySlice<UInt8>, counter: Int, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1184
  ],
  "name": "CTRModeWorker",
  "containedEntities": [
    1188
  ]
},{
  "id": 1190,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidInitializationVector"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1191,
  "typeString": "struct",
  "properties": [
    {
  "name": "let options: BlockModeOption",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let iv: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "worker(blockSize: Int, cipherOperation: @escaping CipherOperationOnBlock) throws -> CipherModeWorker",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(iv: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1175
  ],
  "name": "OFB",
  "containedEntities": [
    1190
  ]
},{
  "id": 1192,
  "typeString": "struct",
  "properties": [
    {
  "name": "let cipherOperation: CipherOperationOnBlock",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let blockSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let additionalBufferSize: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iv: ArraySlice<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var prev: ArraySlice<UInt8>? mutating mutating",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encrypt(block plaintext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decrypt(block ciphertext: ArraySlice<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(blockSize: Int, iv: ArraySlice<UInt8>, cipherOperation: @escaping CipherOperationOnBlock)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1182
  ],
  "name": "OFBModeWorker"
},{
  "id": 1193,
  "typeString": "enum",
  "cases": [
    {
  "name": "invalidKeyOrInitializationVector case notSupported"
}
  ],
  "name": "Error",
  "superClass": 1475
},{
  "id": 1194,
  "typeString": "class",
  "properties": [
    {
  "name": "let blockSize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let keySize: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let key: Key",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var counter: Array<UInt8>",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "core(block: inout Array<UInt8>, counter: Array<UInt8>, key: Array<UInt8>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "process(bytes: ArraySlice<UInt8>, counter: inout Array<UInt8>, key: Array<UInt8>) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(key: Array<UInt8>, iv nonce: Array<UInt8>) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1136
  ],
  "name": "ChaCha20",
  "containedEntities": [
    1193
  ],
  "extensions": [
    1102,
    1197,
    1198,
    1199,
    1200
  ]
},{
  "id": 1195,
  "typeString": "struct",
  "properties": [
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let chacha: ChaCha20",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(chacha: ChaCha20)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1112
  ],
  "name": "ChaChaEncryptor"
},{
  "id": 1196,
  "typeString": "struct",
  "properties": [
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var offset: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var offsetToRemove: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let chacha: ChaCha20",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = true) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(chacha: ChaCha20)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1112
  ],
  "name": "ChaChaDecryptor"
},{
  "id": 1204,
  "typeString": "struct",
  "properties": [
    {
  "name": "var onLayoutAppearanceBlock: AppearanceBlock?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var initialAppearanceBlock: AppearanceBlock?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var emptyAppearanceBlock: AppearanceBlock?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var filledAppearanceBlock: AppearanceBlock?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Configuration"
},{
  "id": 1205,
  "typeString": "class",
  "properties": [
    {
  "name": "var value: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var configuration: LabelBasedInputField.Configuration?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "layoutSubviews()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "deleteValue()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setValue(_ newValue: String)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "getValue() -> String",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "isEmpty() -> Bool",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LabelBasedInputField",
  "superClass": 1459,
  "containedEntities": [
    1204
  ]
},{
  "id": 1206,
  "typeString": "protocol",
  "methods": [
    {
  "name": "deleteValue()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setValue(_ newValue: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getValue() -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "isEmpty() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "InputableField",
  "superClass": 1478
},{
  "id": 1207,
  "typeString": "class",
  "properties": [
    {
  "name": "var fields",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var currentIndex",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var numberOfFields",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var code",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var horizontalMargins: CGFloat",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var interFieldSpacing: CGFloat",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var keyboardType: UIKeyboardType",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var onCodeDidEnter: ((String) -> ())?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var sizeOfField: CGFloat",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let frameWidth",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let minBySides",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fieldsCount",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var canBecomeFirstResponder: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hasText: Bool",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "layoutSubviews()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "configure()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "insertNewField(_ index: Int)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "layoutFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "clear()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "insertText(_ text: String)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "deleteBackward()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "updateCode()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "IACodeInputView",
  "superClass": 1437
},{
  "id": 1208,
  "typeString": "struct",
  "properties": [
    {
  "name": "var dotSize: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fillColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var strokeColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emptyColor",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Configuration"
},{
  "id": 1209,
  "typeString": "class",
  "properties": [
    {
  "name": "var value: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var configuration: Configuration",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var dotRect: CGRect",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let size",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var circlePath: UIBezierPath",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var strokeLayer: CAShapeLayer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let layer",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutSubviews()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "deleteValue()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ newValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getValue() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "isEmpty() -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DotInputField",
  "superClass": 1437,
  "containedEntities": [
    1208
  ]
},{
  "id": 1210,
  "typeString": "struct",
  "properties": [
    {
  "name": "var defaultConfiguration: Configuration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var syncConfiguration: SyncConfiguration?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _syncConfiguration: SyncConfiguration?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var fileURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _path: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var inMemoryIdentifier: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _inMemoryIdentifier: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var encryptionKey: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var readOnly: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var schemaVersion: UInt64",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var migrationBlock: MigrationBlock?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var deleteRealmIfMigrationNeeded: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var shouldCompactOnLaunch: ((Int, Int) -> Bool)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var objectTypes: [Object.Type]?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var customSchema: RLMSchema?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var disableFormatUpgrade: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rlmConfiguration: RLMRealmConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fileURL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let inMemoryIdentifier",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let syncConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let shouldCompactOnLaunch",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromRLMRealmConfiguration(_ rlmConfiguration: RLMRealmConfiguration) -> Configuration",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(fileURL: URL? = URL(fileURLWithPath: RLMRealmPathForFile(), isDirectory: false), inMemoryIdentifier: String? = nil, syncConfiguration: SyncConfiguration? = nil, encryptionKey: Data? = nil, readOnly: Bool = false, schemaVersion: UInt64 = 0, migrationBlock: MigrationBlock? = nil, deleteRealmIfMigrationNeeded: Bool = false, shouldCompactOnLaunch: ((Int, Int) -> Bool)? = nil, objectTypes: [Object.Type]? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Configuration"
},{
  "id": 1213,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmTask: RLMAsyncOpenTask",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "cancel()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "addProgressNotification(queue: DispatchQueue = .main, block: @escaping (SyncSession.Progress) -> Void)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "AsyncOpenTask"
},{
  "id": 1214,
  "typeString": "enum",
  "cases": [
    {
  "name": "error"
},
    {
  "name": "modified"
},
    {
  "name": "all"
}
  ],
  "name": "UpdatePolicy",
  "superClass": 1446
},{
  "id": 1215,
  "typeString": "struct",
  "properties": [
    {
  "name": "var schema: Schema",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var configuration: Configuration",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isEmpty: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInWriteTransaction: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var autorefresh: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rlmRealm: RLMRealm",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "asyncOpen(configuration: Realm.Configuration = .defaultConfiguration, callbackQueue: DispatchQueue = .main, callback: @escaping (Realm?, Swift.Error?) -> Void) -> AsyncOpenTask",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "write(withoutNotifying tokens: [NotificationToken] = [], _ block: (() throws -> Void)) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "beginWrite()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "commitWrite(withoutNotifying tokens: [NotificationToken] = []) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "cancelWrite()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(_ object: Object, update: Bool)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(_ object: Object, update: UpdatePolicy = .error)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add<S: Sequence>(_ objects: S, update: Bool) where S.Iterator.Element: Object",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add<S: Sequence>(_ objects: S, update: UpdatePolicy = .error) where S.Iterator.Element: Object",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create<T: Object>(_ type: T.Type, value: Any = [:], update: Bool) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create<T: Object>(_ type: T.Type, value: Any = [:], update: UpdatePolicy = .error) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dynamicCreate(_ typeName: String, value: Any = [:], update: Bool) -> DynamicObject",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dynamicCreate(_ typeName: String, value: Any = [:], update: UpdatePolicy = .error) -> DynamicObject",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete(_ object: Object)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete<S: Sequence>(_ objects: S) where S.Iterator.Element: Object",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete<Element: Object>(_ objects: List<Element>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete<Element: Object>(_ objects: Results<Element>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "deleteAll()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "objects<Element: Object>(_ type: Element.Type) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dynamicObjects(_ typeName: String) -> Results<DynamicObject>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "object<Element: Object, KeyType>(ofType type: Element.Type, forPrimaryKey key: KeyType) -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dynamicObject(ofType typeName: String, forPrimaryKey key: Any) -> DynamicObject?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "observe(_ block: @escaping NotificationBlock) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "refresh() -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "invalidate()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeCopy(toFile fileURL: URL, encryptionKey: Data? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init() throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(configuration: Configuration) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(fileURL: URL) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rlmRealm: RLMRealm)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Realm",
  "containedEntities": [
    1213,
    1214
  ],
  "extensions": [
    1212,
    1217,
    1218,
    1222,
    1277,
    1281,
    1292,
    1343
  ]
},{
  "id": 1216,
  "typeString": "enum",
  "cases": [
    {
  "name": "didChange"
},
    {
  "name": "refreshRequired"
}
  ],
  "name": "Notification",
  "superClass": 1443,
  "extensions": [
    440
  ]
},{
  "id": 1219,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmProperty: RLMProperty",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var type: PropertyType",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isArray: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isIndexed: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isOptional: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var objectClassName: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(_ rlmProperty: RLMProperty)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Property",
  "superClass": 1468,
  "extensions": [
    1220
  ]
},{
  "id": 1221,
  "typeString": "struct",
  "properties": [
    {
  "name": "let fail: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileAccess: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let filePermissionDenied: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileExists: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileNotFound: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let incompatibleLockFile: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileFormatUpgradeRequired: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let addressSpaceExhausted: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let schemaMismatch: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let incompatibleSyncedFile: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var code: Code",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let _nsError: NSError",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var backupConfiguration: Realm.Configuration?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_nsError error: NSError)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "Error"
},{
  "id": 1223,
  "typeString": "struct",
  "properties": [
    {
  "name": "var generatorBase: NSFastEnumerationIterator",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "next() -> Element?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(collection: RLMCollection)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RLMIterator",
  "superClass": 1479
},{
  "id": 1224,
  "typeString": "enum",
  "methods": [
    {
  "name": "fromObjc(value: CollectionType, change: RLMCollectionChange?, error: Error?) -> RealmCollectionChange",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "initial"
},
    {
  "name": "update"
},
    {
  "name": "error"
}
  ],
  "name": "RealmCollectionChange"
},{
  "id": 1225,
  "typeString": "protocol",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_nilValue() -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "RealmCollectionValue",
  "superClass": 1451,
  "extensions": [
    1234
  ]
},{
  "id": 1226,
  "typeString": "protocol",
  "methods": [
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "_RealmCollectionEnumerator"
},{
  "id": 1227,
  "typeString": "protocol",
  "protocols": [
    1481
  ],
  "name": "RealmCollectionBase",
  "superClass": 1468
},{
  "id": 1228,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "average(ofProperty property: String) -> Double?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "observe(_ block: @escaping (RealmCollectionChange<Self>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection<Element>>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1227
  ],
  "name": "RealmCollection",
  "extensions": [
    1248,
    1249,
    1250,
    1251,
    1252,
    1253
  ]
},{
  "id": 1229,
  "typeString": "protocol",
  "methods": [
    {
  "name": "_rlmInferWrappedType() -> Wrapped",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "OptionalProtocol"
},{
  "id": 1230,
  "typeString": "class",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "average(ofProperty property: String) -> Double?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeIterator() -> RLMIterator<T>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<Wrapper>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> Self",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ],
  "name": "_AnyRealmCollectionBase"
},{
  "id": 1231,
  "typeString": "class",
  "properties": [
    {
  "name": "let base: C override",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(of object: C.Element) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<C.Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<C.Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool) -> Results<C.Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sorted<S: Sequence> (by sortDescriptors: S) -> Results<C.Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "average(ofProperty property: String) -> Double?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeIterator() -> RLMIterator<Element>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<Wrapper>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> _AnyRealmCollection",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(base: C)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "_AnyRealmCollection"
},{
  "id": 1232,
  "typeString": "struct",
  "properties": [
    {
  "name": "let base: _AnyRealmCollectionBase<Element>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "index(after i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(before i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "average(ofProperty property: String) -> Double?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "makeIterator() -> RLMIterator<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(base: _AnyRealmCollectionBase<Element>)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init<C: RealmCollection>(_ base: C) where C.Element == Element",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1228
  ],
  "name": "AnyRealmCollection",
  "extensions": [
    1254
  ]
},{
  "id": 1233,
  "typeString": "struct",
  "properties": [
    {
  "name": "var baseMetadata: Any?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var baseType: _AnyRealmCollectionBase<T>.Type",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AnyRealmCollectionBridgingMetadata"
},{
  "id": 1255,
  "typeString": "enum",
  "cases": [
    {
  "name": "none case system case pinCertificate"
}
  ],
  "name": "ServerValidationPolicy"
},{
  "id": 1256,
  "typeString": "struct",
  "properties": [
    {
  "name": "let user: SyncUser",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let realmURL: URL",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let stopPolicy: RLMSyncStopPolicy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let serverValidationPolicy: ServerValidationPolicy @available(*, unavailable, message: )",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var enableSSLValidation: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isPartial: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let fullSynchronization: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let urlPrefix: String? @available(*, unavailable, message: ) @available(*, unavailable, message: ) @available(*, unavailable, message: )",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "asConfig() -> RLMSyncConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "automatic() -> Realm.Configuration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "automatic(user: SyncUser) -> Realm.Configuration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(config: RLMSyncConfiguration)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(user: SyncUser, realmURL: URL, enableSSLValidation: Bool = true, isPartial: Bool = false, urlPrefix: String? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SyncConfiguration"
},{
  "id": 1257,
  "typeString": "struct",
  "properties": [
    {
  "name": "var token: Token",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var provider: Provider",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userInfo: [String: Any] @available(*, deprecated, message: )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "facebook(token: Token) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "google(token: Token) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "cloudKit(token: Token) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "usernamePassword(username: String, password: String, register: Bool = false) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "accessToken(_ accessToken: String, identity: String) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "jwt(_ token: Token) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "nickname(_ nickname: String, isAdmin: Bool = false) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "anonymous() -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "customRefreshToken(_ token: String, identity: String, isAdmin: Bool = false) -> SyncCredentials",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(customToken token: Token, provider: Provider, userInfo: [String: Any] = [:])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ credentials: RLMSyncCredentials)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SyncCredentials"
},{
  "id": 1258,
  "typeString": "enum",
  "cases": [
    {
  "name": "upload case download"
}
  ],
  "name": "ProgressDirection"
},{
  "id": 1259,
  "typeString": "enum",
  "cases": [
    {
  "name": "reportIndefinitely case forCurrentlyOutstandingWork"
}
  ],
  "name": "ProgressMode"
},{
  "id": 1260,
  "typeString": "struct",
  "properties": [
    {
  "name": "let transferredBytes: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let transferrableBytes: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var fractionTransferred: Double",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let percentage",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isTransferComplete: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(transferred: UInt, transferrable: UInt)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Progress"
},{
  "id": 1261,
  "typeString": "enum",
  "methods": [
    {
  "name": "== (lhs: SyncSubscriptionState, rhs: SyncSubscriptionState) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(_ rlmSubscription: RLMSyncSubscription)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "creating case pending case complete case invalidated case error"
}
  ],
  "name": "SyncSubscriptionState",
  "superClass": 1451
},{
  "id": 1262,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmSubscription: RLMSyncSubscription",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var name: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var state: SyncSubscriptionState",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var query: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var createdAt: Date?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var updatedAt: Date?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var expiresAt: Date?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var timeToLive: TimeInterval?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let ttl",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "== (lhs: SyncSubscription, rhs: SyncSubscription) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "observe(_ keyPath: KeyPath<SyncSubscription, SyncSubscriptionState>, options: NSKeyValueObservingOptions = [], _ block: @escaping (SyncSubscriptionState) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsubscribe()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rlmSubscription: RLMSyncSubscription)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1225
  ],
  "name": "SyncSubscription",
  "extensions": [
    1279
  ]
},{
  "id": 1263,
  "typeString": "class",
  "properties": [
    {
  "name": "var observation: NSKeyValueObservation?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "invalidate()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ observation: NSKeyValueObservation)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "KeyValueObservationNotificationToken",
  "superClass": 1482
},{
  "id": 1264,
  "typeString": "class",
  "properties": [
    {
  "name": "var role: PermissionRole? @objc dynamic",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canRead",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canUpdate",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canDelete",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canSetPermissions",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canQuery",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canCreate",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var canModifySchema",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "_realmObjectName() -> String",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "Permission",
  "superClass": 1344
},{
  "id": 1265,
  "typeString": "class",
  "properties": [
    {
  "name": "var name",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let users",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "_realmObjectName() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "primaryKey() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_realmColumnNames() -> [String: String]",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "PermissionRole",
  "superClass": 1344
},{
  "id": 1266,
  "typeString": "class",
  "properties": [
    {
  "name": "var identity",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var role: PermissionRole?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let roles",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "_realmObjectName() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "primaryKey() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_realmColumnNames() -> [String: String]",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "PermissionUser",
  "superClass": 1344
},{
  "id": 1267,
  "typeString": "class",
  "properties": [
    {
  "name": "var id",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let permissions",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "_realmObjectName() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "primaryKey() -> String",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "RealmPermission",
  "superClass": 1344
},{
  "id": 1268,
  "typeString": "class",
  "properties": [
    {
  "name": "var name",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let permissions",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "_realmObjectName() -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "primaryKey() -> String",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "ClassPermission",
  "superClass": 1344
},{
  "id": 1269,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: UInt8",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let read",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let update",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let setPermissions",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let modifySchema",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: RawValue)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "RealmPrivileges",
  "superClass": 1460
},{
  "id": 1270,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: UInt8",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let read",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let create",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let update",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let subscribe",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let setPermissions",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: RawValue)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ClassPrivileges",
  "superClass": 1460
},{
  "id": 1271,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rawValue: UInt8",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let read",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let update",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let delete",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let setPermissions",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: RawValue)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ObjectPrivileges",
  "superClass": 1460
},{
  "id": 1283,
  "typeString": "struct",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var this",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var first: Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var last: Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rlmResults: RLMResults<AnyObject>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var propertyName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var handle: RLMLinkingObjectsHandle?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool = true) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "average<T: AddableType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "observe(_ block: @escaping (RealmCollectionChange<LinkingObjects>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(fromType _: Element.Type, property propertyName: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "LinkingObjects",
  "extensions": [
    1284,
    1285,
    1368
  ]
},{
  "id": 1286,
  "typeString": "struct",
  "properties": [
    {
  "name": "let keyPath: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let ascending: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rlmSortDescriptorValue: RLMSortDescriptor",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "reversed() -> SortDescriptor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(keyPath: String, ascending: Bool = true)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "SortDescriptor",
  "extensions": [
    1287,
    1288,
    1289
  ]
},{
  "id": 1290,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ThreadConfined"
},{
  "id": 1291,
  "typeString": "struct",
  "properties": [
    {
  "name": "let swiftMetadata: Any?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let objectiveCReference: RLMThreadSafeReference<RLMThreadConfined>",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "resolve(in realm: Realm) -> Confined?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(to threadConfined: Confined)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "ThreadSafeReference"
},{
  "id": 1293,
  "typeString": "struct",
  "methods": [
    {
  "name": "convert<T>(object: Results<T>) -> RLMResults<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMResults<AnyObject>) -> Results<Object>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert<T>(object: List<T>) -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMArray<AnyObject>) -> List<Object>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert<T>(object: LinkingObjects<T>) -> RLMResults<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMLinkingObjects<RLMObject>) -> Results<Object>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: Realm) -> RLMRealm",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMRealm) -> Realm",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: Migration) -> RLMMigration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMMigration) -> Migration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: ObjectSchema) -> RLMObjectSchema",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMObjectSchema) -> ObjectSchema",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: Property) -> RLMProperty",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMProperty) -> Property",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: Realm.Configuration) -> RLMRealmConfiguration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMRealmConfiguration) -> Realm.Configuration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: Schema) -> RLMSchema",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMSchema) -> Schema",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: SortDescriptor) -> RLMSortDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: RLMSortDescriptor) -> SortDescriptor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: @escaping RLMShouldCompactOnLaunchBlock) -> (Int, Int) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "convert(object: @escaping (Int, Int) -> Bool) -> RLMShouldCompactOnLaunchBlock",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "ObjectiveCSupport",
  "extensions": [
    1339
  ]
},{
  "id": 1294,
  "typeString": "protocol",
  "name": "MinMaxType"
},{
  "id": 1295,
  "typeString": "protocol",
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AddableType"
},{
  "id": 1296,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmResults: RLMResults<AnyObject>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var first: Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var last: Element?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKeyPath keyPath: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool = true) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "distinct<S: Sequence>(by keyPaths: S) -> Results<Element> where S.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "average<T: AddableType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "observe(_ block: @escaping (RealmCollectionChange<Results>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rlmResults: RLMResults<AnyObject>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Results",
  "superClass": 1451,
  "extensions": [
    1280,
    1315,
    1316,
    1317
  ]
},{
  "id": 1318,
  "typeString": "class",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var count: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "descriptionWithMaxDepth(_ depth: UInt) -> String",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ListBase",
  "superClass": 1483
},{
  "id": 1319,
  "typeString": "class",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var first: Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var last: Element?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "index(of object: Element) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicate: NSPredicate) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(matching predicateFormat: String, _ args: Any...) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKey key: String) -> [AnyObject]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forKeyPath keyPath: String) -> [AnyObject]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ value: Any?, forKey key: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicateFormat: String, _ args: Any...) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: NSPredicate) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted(byKeyPath keyPath: String, ascending: Bool = true) -> Results<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sorted<S: Sequence>(by sortDescriptors: S) -> Results<Element> where S.Iterator.Element == SortDescriptor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max<T: MinMaxType>(ofProperty property: String) -> T?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sum<T: AddableType>(ofProperty property: String) -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "average(ofProperty property: String) -> Double?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append(_ object: Element)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "append<S: Sequence>(objectsIn objects: S) where S.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "insert(_ object: Element, at index: Int)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(at index: Int)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeAll()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replace(index: Int, object: Element)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "move(from: Int, to: Int)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "swapAt(_ index1: Int, _ index2: Int)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "observe(_ block: @escaping (RealmCollectionChange<List>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_unmanagedArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(rlmArray: RLMArray<AnyObject>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "List",
  "superClass": 1318,
  "extensions": [
    1282,
    1320,
    1321,
    1322,
    1323,
    1324,
    1325,
    1326,
    1327,
    1367
  ]
},{
  "id": 1328,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CustomObjectiveCBridgeable"
},{
  "id": 1329,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "AssistedObjectiveCBridgeable"
},{
  "id": 1337,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmObjectSchema: RLMObjectSchema",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var properties: [Property]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var className: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var objectClass: AnyClass",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var primaryKeyProperty: Property?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rlmProperty",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rlmProperty",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ rlmObjectSchema: RLMObjectSchema)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ObjectSchema",
  "superClass": 1468,
  "extensions": [
    1338
  ]
},{
  "id": 1340,
  "typeString": "struct",
  "properties": [
    {
  "name": "let rlmSchema: RLMSchema",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var objectSchema: [ObjectSchema]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rlmObjectSchema",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_ rlmSchema: RLMSchema)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Schema",
  "superClass": 1468,
  "extensions": [
    1341
  ]
},{
  "id": 1342,
  "typeString": "struct",
  "properties": [
    {
  "name": "var oldSchema: Schema",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var newSchema: Schema",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rlmMigration: RLMMigration @discardableResult @discardableResult",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "enumerateObjects(ofType typeName: String, _ block: MigrationObjectEnumerateBlock)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(_ typeName: String, value: Any = [:]) -> MigrationObject",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "delete(_ object: MigrationObject)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "deleteData(forType typeName: String) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "renameProperty(onType typeName: String, from oldName: String, to newName: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rlmMigration: RLMMigration)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Migration"
},{
  "id": 1344,
  "typeString": "class",
  "properties": [
    {
  "name": "var realm: Realm?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let rlmReam",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var objectSchema: ObjectSchema",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isInvalidated: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_getProperties(withInstance instance: Any) -> [RLMProperty]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "ignoredProperties() -> [String]",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "indexedProperties() -> [String]",
  "type": "type",
  "accessLevel": "open"
},
    {
  "name": "dynamicGet(key: String) -> Any?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "observe(_ block: @escaping (ObjectChange) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dynamicList(_ propertyName: String) -> List<DynamicObject>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "isSameObject(as object: Object?) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(value: Any)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1290
  ],
  "name": "Object",
  "superClass": 1484,
  "extensions": [
    1330,
    1366,
    1371
  ]
},{
  "id": 1345,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let oldValue: Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let newValue: Any?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PropertyChange"
},{
  "id": 1346,
  "typeString": "enum",
  "cases": [
    {
  "name": "error"
},
    {
  "name": "change"
},
    {
  "name": "deleted"
}
  ],
  "name": "ObjectChange"
},{
  "id": 1347,
  "typeString": "class",
  "properties": [
    {
  "name": "let value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let array",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "dynamicList(_ propertyName: String) -> List<DynamicObject>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(forUndefinedKey key: String) -> Any?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setValue(_ value: Any?, forUndefinedKey key: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "shouldIncludeInDefaultSchema() -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "DynamicObject",
  "superClass": 1344
},{
  "id": 1348,
  "typeString": "protocol",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_rlmRequireObjc() -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ManagedPropertyType",
  "extensions": [
    1351
  ]
},{
  "id": 1349,
  "typeString": "class",
  "methods": [
    {
  "name": "initializeObject(_ ptr: UnsafeMutableRawPointer, parent: RLMObjectBase, property: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "get(_ ptr: UnsafeMutableRawPointer) -> Any",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "LinkingObjectsAccessor",
  "superClass": 1485
},{
  "id": 1350,
  "typeString": "class",
  "properties": [
    {
  "name": "let runOnce: Void",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let collection",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "swiftVersion() -> NSString",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "baseName(forLazySwiftProperty name: String) -> String?",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "getNonIgnoredMirrorChildren(for object: Any) -> [Mirror.Child]",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "getSwiftProperties(_ object: RLMObjectBase) -> [RLMProperty]",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ObjectUtil"
},{
  "id": 1372,
  "typeString": "protocol",
  "name": "RealmOptionalType",
  "extensions": [
    1375
  ]
},{
  "id": 1373,
  "typeString": "class",
  "properties": [
    {
  "name": "var value: Value?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(_ value: Value? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "RealmOptional",
  "superClass": 1486,
  "extensions": [
    1370,
    1384,
    1385
  ]
},{
  "id": 1374,
  "typeString": "protocol",
  "name": "RealmOptionalProtocol"
},{
  "id": 1386,
  "typeString": "enum",
  "cases": [
    {
  "name": "notActive"
},
    {
  "name": "delayingStart"
},
    {
  "name": "active"
},
    {
  "name": "delayingCompletion"
}
  ],
  "name": "ActivityIndicatorState"
},{
  "id": 1387,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var isEnabled: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isNetworkActivityIndicatorVisible: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var networkActivityIndicatorVisibilityChanged: ((Bool) -> Void)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var startDelay: TimeInterval",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var completionDelay: TimeInterval",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var activityIndicatorState: ActivityIndicatorState",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var activityCount: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var enabled: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var startDelayTimer: Timer?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var completionDelayTimer: Timer?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let lock",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "incrementActivityCount()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrementActivityCount()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "updateActivityIndicatorStateForNetworkActivityChange()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "registerForNotifications()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "unregisterForNotifications()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "networkRequestDidStart()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "networkRequestDidComplete()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "scheduleStartDelayTimer()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "scheduleCompletionDelayTimer()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startDelayTimerFired()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "completionDelayTimerFired()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "invalidateStartDelayTimer()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "invalidateCompletionDelayTimer()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "NetworkActivityIndicatorManager",
  "containedEntities": [
    1386
  ]
},{
  "id": 1388,
  "typeString": "protocol",
  "methods": [
    {
  "name": "packetListDiagnosticsRecieved(_: PacketListViewController) -> [WearableStatusPacket]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PacketListViewControllerDelegate",
  "superClass": 1433
},{
  "id": 1389,
  "typeString": "class",
  "properties": [
    {
  "name": "var delegate: PacketListViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var textView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var diagnosticPackets: [WearableStatusPacket]",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handlePacketReceivedNotification(notification: Notification)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PacketListViewController",
  "superClass": 1436,
  "extensions": [
    1390
  ]
},{
  "id": 1391,
  "typeString": "class",
  "properties": [
    {
  "name": "var scannedDeviceList: [Wearable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScannedDeviceTableViewController",
  "superClass": 1448,
  "extensions": [
    1392,
    1393
  ]
},{
  "id": 1394,
  "typeString": "protocol",
  "name": "ECGTransferDetailsViewControllerDelegate"
},{
  "id": 1395,
  "typeString": "enum",
  "cases": [
    {
  "name": "summary"
},
    {
  "name": "ecgs"
}
  ],
  "name": "Sections",
  "superClass": 1446
},{
  "id": 1396,
  "typeString": "enum",
  "methods": [
    {
  "name": "indexPath() -> IndexPath",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "ecgCount"
},
    {
  "name": "ecgBytes"
},
    {
  "name": "ecgDownloaded"
},
    {
  "name": "ecgUploaded"
},
    {
  "name": "ecgErrors"
},
    {
  "name": "ecgTransferRate"
},
    {
  "name": "ecgTransferTime"
},
    {
  "name": "MAX"
}
  ],
  "name": "Summary",
  "superClass": 1446
},{
  "id": 1397,
  "typeString": "class",
  "properties": [
    {
  "name": "var ecgManager : ECGManager?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgAvailable : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var details : [ECG?]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var delegate : ECGTransferDetailsViewControllerDelegate?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "summaryLabelFor(index: Summary) -> UILabel?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateSummary()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateECGPercentage(cell: UITableViewCell?, ecg: ECG?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateECGCount(count: Int, keep: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "numberOfSections(in tableView: UITableView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ECGTransferDetailsViewController",
  "superClass": 1448,
  "containedEntities": [
    1395,
    1396
  ],
  "extensions": [
    1398
  ]
},{
  "id": 1399,
  "typeString": "class",
  "properties": [
    {
  "name": "let bleManager: BLEManager",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectionStatusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didReceiveMemoryWarning()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLETestViewController",
  "superClass": 1436
},{
  "id": 1400,
  "typeString": "class",
  "properties": [
    {
  "name": "var packet: WearableStatusPacket?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearStatusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var batteryVoltageLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var packetIndexLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiVersionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rawBytesLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timestampLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearContainerView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var diagnosticsContainerView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearHeightConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var diagnosticsHeightConstraint: NSLayoutConstraint!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PacketDetailViewController",
  "superClass": 1436
},{
  "id": 1401,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillResignActive(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationDidEnterBackground(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillEnterForeground(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationDidBecomeActive(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "applicationWillTerminate(_ application: UIApplication)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppDelegate",
  "superClass": 1429
},{
  "id": 1402,
  "typeString": "class",
  "properties": [
    {
  "name": "var pairCoordinator: PairingCoordinator?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wearable: Wearable?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testDeviceUnpaired()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testDeviceFound()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPairingSuccessful()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPairingFailed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupPairingCoordinator() -> PairingCoordinator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupStatusCoordinator() -> StatusCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PairingTests",
  "superClass": 1487
},{
  "id": 1403,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testTabBarControllerConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CustomTabBarTests",
  "superClass": 1487
},{
  "id": 1404,
  "typeString": "enum",
  "cases": [
    {
  "name": "unknown"
},
    {
  "name": "deviceUnpaired"
},
    {
  "name": "pairingMode"
},
    {
  "name": "pairingDeviceFound"
},
    {
  "name": "pairingSuccessful"
},
    {
  "name": "pairingUnsuccessful"
},
    {
  "name": "applicationMode"
},
    {
  "name": "preparingToMonitor"
},
    {
  "name": "applicationFailed"
},
    {
  "name": "shippingMode"
},
    {
  "name": "deviceActive"
},
    {
  "name": "era"
},
    {
  "name": "mraMedium"
},
    {
  "name": "mraHigh"
},
    {
  "name": "mraUrgent"
},
    {
  "name": "removalMode"
},
    {
  "name": "deviceNotDetectedUnder60Mins"
},
    {
  "name": "deviceNotDetectedOver60Mins"
},
    {
  "name": "treatmentWasDelayed"
},
    {
  "name": "unableToDeliverTreatment_vtvf"
},
    {
  "name": "unableToDeliverTreatment"
},
    {
  "name": "treatmentWasGiven"
},
    {
  "name": "treatmentWasGivenMRAMedium"
},
    {
  "name": "treatmentWasGivenMRAHigh"
},
    {
  "name": "deviceOffBodyInitial"
},
    {
  "name": "deviceOffBody"
},
    {
  "name": "pressAndHold"
}
  ],
  "name": "StatusState",
  "superClass": 1443
},{
  "id": 1405,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createStatusCoordinator() -> StatusCoordinator",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "StatusCoordinatorTests",
  "superClass": 1487
},{
  "id": 1406,
  "typeString": "class",
  "properties": [
    {
  "name": "var realmConfiguration: Realm.Configuration",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FakeUserDataManagerConfiguration"
},{
  "id": 1407,
  "typeString": "struct",
  "properties": [
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timestamp: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiVersion: UInt16?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var batteryVoltage: UInt16?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var status: UInt16?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tti8: UInt32?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tti32: UInt32?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tti100: UInt32?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rawValue: UInt16?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(status: FakeWearableDiagnosticPacket)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(statusValue: UInt16)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FakeWearableDiagnosticPacket"
},{
  "id": 1408,
  "typeString": "class",
  "properties": [
    {
  "name": "var requestedDetails : [Int:Bool]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requestedMetadata : [UUID:Bool]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var requestedData : [UUID:Bool]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ignoreDetails : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ignoreMetadata : UUID?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ignoreData : UUID?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ignoreDownload : Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadCallback : ((BLEBinaryTransferDetails, Fragment, Int) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fragmentCallback : ((BLEBinaryTransferDetails) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var centralManager: FakeCBControlManager lazy",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgDetails : [BLEBinaryTransferDetails]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgMetadata : [String:Data]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ecgData : [Data]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "requestECGDetails(index: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleStatusUpdate(data: Data?, peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGMetadata(uuid: UUID)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestECGFragment(details: BLEBinaryTransferDetails)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nextData(details: BLEBinaryTransferDetails, fragment: Fragment, sequence: Int) -> Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateData(data: Data, details: BLEBinaryTransferDetails, fragment: Fragment, sequence: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(dataManager: ESDataManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEManagerMock",
  "superClass": 80
},{
  "id": 1409,
  "typeString": "class",
  "properties": [
    {
  "name": "let key",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var deinit",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let sampleData2",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sampleData4",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportHeader",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData1",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData2",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData3",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData4",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportData5",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let therapyReportDataEnd",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "checkPacket(dataPacket: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "checkSubtype(dataPacket: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "decryptData() -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "parsePacket(packet: Data?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "convertTimestamp(byteArray: Array<UInt8>) -> Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "initVector: Array<UInt8>? private var length: UInt8? private var associatedData: Array<UInt8>? private var tag: Array<UInt8>? private var ciphertext: Array<UInt8>? var isTherapy: Bool = false init(someString: String?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BLEMockData"
},{
  "id": 1411,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPresentationView()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createSettingsCoordinator() -> SettingsCoordinator",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "SettingsTests",
  "superClass": 1487
},{
  "id": 1412,
  "typeString": "class",
  "properties": [
    {
  "name": "var realmConfiguration: Realm.Configuration",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FakeUserDataManagerConfiguration"
},{
  "id": 1413,
  "typeString": "class",
  "properties": [
    {
  "name": "var queue : DispatchQueue",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var _managerState : CBManagerState",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(delegate: CBCentralManagerDelegate?, queue q: DispatchQueue?, options: [String : Any]?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FakeCBControlManager",
  "superClass": 26
},{
  "id": 1414,
  "typeString": "class",
  "properties": [
    {
  "name": "var rootViewController: LoginViewController!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var topViewController: TopLevelUIUtilities<LoginViewController>!",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testViewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testHelpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testForgotPasswordButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testAttemptLoginTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testQABuilds()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testTextInputs()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testHintsAndLabels()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testButtonTaps()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testToggleSecureIconButton()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoginViewControllerTests",
  "superClass": 1487
},{
  "id": 1415,
  "typeString": "class",
  "properties": [
    {
  "name": "var rootWindow: UIWindow!",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setUpUI(withViewController viewController: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDownUI()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TopLevelUIUtilities"
},{
  "id": 1416,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testAPIManager()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testGETDeviceKey()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testGETWhoAmI()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPOSTTherapyReport()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testTherapyReportRouter()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testTherapyReportManager()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "APIRequestsTests",
  "superClass": 1487
},{
  "id": 1417,
  "typeString": "class",
  "properties": [
    {
  "name": "var username",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var window: UIWindow!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var loginCoord: LoginCoordinator!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isUserLoggedIn: Bool!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var apiManager: ESAPIManager!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var authManager: CognitoAuthManager!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testIsModalTask()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testRootViewController ()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testBeginFunc()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testNewPassword()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testConfirmationCode()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testUpdatePassword()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPerpForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testEULAAcceptance()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testShowAndVCMethod()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testLogin()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testForgotPassword()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testHelp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testDismiss()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPostAuth()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLoginCoordinator() -> LoginCoordinator",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "setupAuthManager() -> CognitoAuthManager",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "LoginTests",
  "superClass": 1487
},{
  "id": 1418,
  "typeString": "class",
  "properties": [
    {
  "name": "let region",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let clientSecret",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let poolId",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let clientId",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MockCognitoAuthManager",
  "superClass": 332
},{
  "id": 1419,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testStatusCoordinator()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testDecryptor()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testHandleStatusUpdate()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupStatusCoordinator() -> StatusCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "StatusTests",
  "superClass": 1487
},{
  "id": 1420,
  "typeString": "protocol",
  "methods": [
    {
  "name": "discoverServices(_ serviceUUIDs: [CBUUID]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverCharacteristics(_ characteristicUUIDs: [CBUUID]?, for service: CBService)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BluetoothPeripheral"
},{
  "id": 1421,
  "typeString": "class",
  "methods": [
    {
  "name": "discoverServices(_ serviceUUIDs: [CBUUID]?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discoverCharacteristics(_ characteristicUUIDs: [CBUUID]?, for service: CBService)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1420
  ],
  "name": "BluetoothPeripheralMock"
},{
  "id": 1424,
  "typeString": "class",
  "methods": [
    {
  "name": "setUp()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDown()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testExample()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPerformanceExample()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ES_1_SimulatorTests",
  "superClass": 1487
},{
  "id": 1425,
  "typeString": "class",
  "name": "NSManagedObject"
},{
  "id": 1426,
  "typeString": "protocol",
  "name": "Codable"
},{
  "id": 1427,
  "typeString": "class",
  "name": "CBManager"
},{
  "id": 1428,
  "typeString": "class",
  "name": "CBPeripheralDelegate"
},{
  "id": 1429,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 1430,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 1431,
  "typeString": "class",
  "name": "View"
},{
  "id": 1432,
  "typeString": "class",
  "name": "PreviewProvider"
},{
  "id": 1433,
  "typeString": "class",
  "name": "class"
},{
  "id": 1434,
  "typeString": "class",
  "name": "NSObject"
},{
  "id": 1435,
  "typeString": "class",
  "name": "CBMockPeripheral"
},{
  "id": 1436,
  "typeString": "class",
  "name": "UIViewController",
  "extensions": [
    186,
    214
  ]
},{
  "id": 1437,
  "typeString": "class",
  "name": "UIView",
  "extensions": [
    206,
    210
  ]
},{
  "id": 1438,
  "typeString": "class",
  "name": "CBCentralManager"
},{
  "id": 1439,
  "typeString": "class",
  "name": "SFWTypedPublisher<CBCentralManagerDelegate>"
},{
  "id": 1440,
  "typeString": "class",
  "name": "SFWTypedPublisher<CBPeripheralDelegate>"
},{
  "id": 1441,
  "typeString": "class",
  "name": "SFWTypedPublisher<WearableProtocol>"
},{
  "id": 1442,
  "typeString": "class",
  "name": "SFWTypedPublisher<CommunicationsProtocol>"
},{
  "id": 1443,
  "typeString": "class",
  "name": "String",
  "extensions": [
    197,
    201,
    213,
    455,
    645,
    749,
    1021,
    1097,
    1123,
    1244,
    1360
  ]
},{
  "id": 1444,
  "typeString": "class",
  "name": "UInt8",
  "extensions": [
    192,
    743,
    1107,
    1108,
    1109
  ]
},{
  "id": 1445,
  "typeString": "class",
  "name": "CustomDebugStringConvertible"
},{
  "id": 1446,
  "typeString": "class",
  "name": "Int",
  "extensions": [
    191,
    737,
    1079,
    1236,
    1300,
    1310,
    1352,
    1376
  ]
},{
  "id": 1447,
  "typeString": "class",
  "name": "Operation"
},{
  "id": 1448,
  "typeString": "class",
  "name": "UITableViewController"
},{
  "id": 1449,
  "typeString": "class",
  "name": "IACodeInputView<LabelBasedInputField>"
},{
  "id": 1450,
  "typeString": "class",
  "name": "MaskedCodeInputField<PhoneNumberInputField>"
},{
  "id": 1451,
  "typeString": "class",
  "name": "Equatable"
},{
  "id": 1452,
  "typeString": "class",
  "name": "UITabBarController"
},{
  "id": 1453,
  "typeString": "class",
  "name": "UITextView"
},{
  "id": 1454,
  "typeString": "class",
  "name": "UIButton",
  "extensions": [
    20,
    187
  ]
},{
  "id": 1455,
  "typeString": "class",
  "name": "UITableViewHeaderFooterView"
},{
  "id": 1456,
  "typeString": "class",
  "name": "UITableViewCell"
},{
  "id": 1457,
  "typeString": "class",
  "name": "UICollectionViewCell"
},{
  "id": 1458,
  "typeString": "protocol",
  "name": "WKNavigationDelegate"
},{
  "id": 1459,
  "typeString": "class",
  "name": "UILabel",
  "extensions": [
    188
  ]
},{
  "id": 1460,
  "typeString": "class",
  "name": "OptionSet"
},{
  "id": 1461,
  "typeString": "class",
  "name": "Hashable"
},{
  "id": 1462,
  "typeString": "class",
  "name": "RawRepresentable"
},{
  "id": 1463,
  "typeString": "class",
  "name": "SingleValueEncodingContainer"
},{
  "id": 1464,
  "typeString": "class",
  "name": "Encoder"
},{
  "id": 1465,
  "typeString": "class",
  "name": "SingleValueDecodingContainer"
},{
  "id": 1466,
  "typeString": "class",
  "name": "Decoder"
},{
  "id": 1467,
  "typeString": "class",
  "name": "Int32",
  "extensions": [
    740,
    1239,
    1303,
    1313,
    1334,
    1355,
    1379
  ]
},{
  "id": 1468,
  "typeString": "class",
  "name": "CustomStringConvertible"
},{
  "id": 1469,
  "typeString": "class",
  "name": "CursorwhereBase.ElementCursor"
},{
  "id": 1470,
  "typeString": "class",
  "name": "Comparable"
},{
  "id": 1471,
  "typeString": "protocol",
  "name": "Strideable"
},{
  "id": 1472,
  "typeString": "class",
  "name": "Collection",
  "extensions": [
    1090,
    1118
  ]
},{
  "id": 1473,
  "typeString": "class",
  "name": "KeyedEncodingContainerProtocol"
},{
  "id": 1474,
  "typeString": "class",
  "name": "KeyedDecodingContainerProtocol"
},{
  "id": 1475,
  "typeString": "class",
  "name": "Swift.Error"
},{
  "id": 1476,
  "typeString": "class",
  "name": "Sequence",
  "extensions": [
    617,
    620,
    845,
    1113,
    1211
  ]
},{
  "id": 1477,
  "typeString": "class",
  "name": "StreamMode"
},{
  "id": 1478,
  "typeString": "class",
  "name": "whereSelfUIView"
},{
  "id": 1479,
  "typeString": "class",
  "name": "IteratorProtocol"
},{
  "id": 1480,
  "typeString": "class",
  "name": "RandomAccessCollection"
},{
  "id": 1481,
  "typeString": "protocol",
  "name": "LazyCollectionProtocol"
},{
  "id": 1482,
  "typeString": "class",
  "name": "NotificationToken"
},{
  "id": 1483,
  "typeString": "class",
  "name": "RLMListBase"
},{
  "id": 1484,
  "typeString": "class",
  "name": "RLMObjectBase"
},{
  "id": 1485,
  "typeString": "class",
  "name": "RLMManagedPropertyAccessor"
},{
  "id": 1486,
  "typeString": "class",
  "name": "RLMOptionalBase"
},{
  "id": 1487,
  "typeString": "class",
  "name": "XCTestCase",
  "extensions": [
    1423
  ]
},{
  "id": 1488,
  "typeString": "protocol",
  "name": "CBPeripheralManagerDelegate"
},{
  "id": 1489,
  "typeString": "class",
  "name": "Data",
  "extensions": [
    23,
    207,
    768,
    1100,
    1101,
    1246,
    1362,
    1410
  ]
},{
  "id": 1490,
  "typeString": "protocol",
  "name": "UITabBarControllerDelegate"
},{
  "id": 1491,
  "typeString": "protocol",
  "name": "UIViewControllerTransitioningDelegate"
},{
  "id": 1492,
  "typeString": "protocol",
  "name": "AWSCognitoIdentityInteractiveAuthenticationDelegate"
},{
  "id": 1493,
  "typeString": "protocol",
  "name": "AWSCognitoIdentityPasswordAuthentication"
},{
  "id": 1494,
  "typeString": "protocol",
  "name": "AWSCognitoIdentityNewPasswordRequired"
},{
  "id": 1495,
  "typeString": "protocol",
  "name": "CBCentralManagerDelegate"
},{
  "id": 1496,
  "typeString": "protocol",
  "name": "UNUserNotificationCenterDelegate"
},{
  "id": 1497,
  "typeString": "class",
  "name": "UInt16",
  "extensions": [
    193,
    744,
    1089
  ]
},{
  "id": 1498,
  "typeString": "class",
  "name": "UInt32",
  "extensions": [
    194,
    745,
    1092,
    1093
  ]
},{
  "id": 1499,
  "typeString": "class",
  "name": "UInt64",
  "extensions": [
    195,
    746,
    1068
  ]
},{
  "id": 1500,
  "typeString": "class",
  "name": "UIApplication",
  "extensions": [
    196
  ]
},{
  "id": 1501,
  "typeString": "class",
  "name": "OperationQueue",
  "extensions": [
    198
  ]
},{
  "id": 1502,
  "typeString": "class",
  "name": "UINavigationBar",
  "extensions": [
    199
  ]
},{
  "id": 1503,
  "typeString": "class",
  "name": "UIProgressView",
  "extensions": [
    200
  ]
},{
  "id": 1504,
  "typeString": "class",
  "name": "UIPageViewController",
  "extensions": [
    202
  ]
},{
  "id": 1505,
  "typeString": "class",
  "name": "UIControl",
  "extensions": [
    205
  ]
},{
  "id": 1506,
  "typeString": "class",
  "name": "VALValet",
  "extensions": [
    209
  ]
},{
  "id": 1507,
  "typeString": "class",
  "name": "Formatter",
  "extensions": [
    211
  ]
},{
  "id": 1508,
  "typeString": "class",
  "name": "Date",
  "extensions": [
    212,
    765,
    766,
    1245,
    1305,
    1364
  ]
},{
  "id": 1509,
  "typeString": "class",
  "name": "UIColor",
  "extensions": [
    215
  ]
},{
  "id": 1510,
  "typeString": "class",
  "name": "GAI",
  "extensions": [
    231
  ]
},{
  "id": 1511,
  "typeString": "class",
  "name": "UIAlertController",
  "extensions": [
    233
  ]
},{
  "id": 1512,
  "typeString": "protocol",
  "name": "UIScrollViewDelegate"
},{
  "id": 1513,
  "typeString": "class",
  "name": "UINavigationController",
  "extensions": [
    264
  ]
},{
  "id": 1514,
  "typeString": "protocol",
  "name": "UITableViewDataSource"
},{
  "id": 1515,
  "typeString": "protocol",
  "name": "UITableViewDelegate"
},{
  "id": 1516,
  "typeString": "protocol",
  "name": "UINavigationControllerDelegate"
},{
  "id": 1517,
  "typeString": "class",
  "name": "IndexPath",
  "extensions": [
    319
  ]
},{
  "id": 1518,
  "typeString": "protocol",
  "name": "LocalizedError"
},{
  "id": 1519,
  "typeString": "protocol",
  "name": "UITextFieldDelegate"
},{
  "id": 1520,
  "typeString": "class",
  "name": "DispatchQueue",
  "extensions": [
    410
  ]
},{
  "id": 1521,
  "typeString": "class",
  "name": "NSNumber",
  "extensions": [
    422,
    781,
    1297,
    1307
  ]
},{
  "id": 1522,
  "typeString": "class",
  "name": "URL",
  "extensions": [
    456,
    778
  ]
},{
  "id": 1523,
  "typeString": "class",
  "name": "URLComponents",
  "extensions": [
    457
  ]
},{
  "id": 1524,
  "typeString": "class",
  "name": "URLRequest",
  "extensions": [
    459,
    460
  ]
},{
  "id": 1525,
  "typeString": "class",
  "name": "URLSession",
  "extensions": [
    501
  ]
},{
  "id": 1526,
  "typeString": "protocol",
  "name": "URLSessionDelegate"
},{
  "id": 1527,
  "typeString": "protocol",
  "name": "URLSessionTaskDelegate"
},{
  "id": 1528,
  "typeString": "protocol",
  "name": "URLSessionDataDelegate"
},{
  "id": 1529,
  "typeString": "protocol",
  "name": "URLSessionDownloadDelegate"
},{
  "id": 1530,
  "typeString": "protocol",
  "name": "URLSessionStreamDelegate"
},{
  "id": 1531,
  "typeString": "class",
  "name": "Range",
  "extensions": [
    613
  ]
},{
  "id": 1532,
  "typeString": "class",
  "name": "ClosedRange",
  "extensions": [
    614
  ]
},{
  "id": 1533,
  "typeString": "class",
  "name": "CountableRange",
  "extensions": [
    615
  ]
},{
  "id": 1534,
  "typeString": "class",
  "name": "CountableClosedRange",
  "extensions": [
    616
  ]
},{
  "id": 1535,
  "typeString": "class",
  "name": "Array",
  "extensions": [
    644,
    844,
    1023,
    1103,
    1201,
    1202,
    1203
  ]
},{
  "id": 1536,
  "typeString": "class",
  "name": "Optional",
  "extensions": [
    711,
    712,
    713,
    915,
    916,
    917,
    984,
    1022,
    1235,
    1247,
    1336,
    1369
  ]
},{
  "id": 1537,
  "typeString": "class",
  "name": "Bool",
  "extensions": [
    736,
    1243,
    1359,
    1383
  ]
},{
  "id": 1538,
  "typeString": "class",
  "name": "Int8",
  "extensions": [
    738,
    1237,
    1301,
    1311,
    1332,
    1353,
    1377
  ]
},{
  "id": 1539,
  "typeString": "class",
  "name": "Int16",
  "extensions": [
    739,
    1238,
    1302,
    1312,
    1333,
    1354,
    1378
  ]
},{
  "id": 1540,
  "typeString": "class",
  "name": "Int64",
  "extensions": [
    741,
    1240,
    1304,
    1314,
    1335,
    1356,
    1380
  ]
},{
  "id": 1541,
  "typeString": "class",
  "name": "UInt",
  "extensions": [
    742
  ]
},{
  "id": 1542,
  "typeString": "class",
  "name": "Double",
  "extensions": [
    747,
    1242,
    1298,
    1308,
    1358,
    1382
  ]
},{
  "id": 1543,
  "typeString": "class",
  "name": "Float",
  "extensions": [
    748,
    1241,
    1299,
    1309,
    1331,
    1357,
    1381
  ]
},{
  "id": 1544,
  "typeString": "class",
  "name": "CGFloat",
  "extensions": [
    762
  ]
},{
  "id": 1545,
  "typeString": "class",
  "name": "NSString",
  "extensions": [
    763,
    1361
  ]
},{
  "id": 1546,
  "typeString": "class",
  "name": "NSDate",
  "extensions": [
    764,
    1306,
    1365
  ]
},{
  "id": 1547,
  "typeString": "class",
  "name": "NSNull",
  "extensions": [
    767
  ]
},{
  "id": 1548,
  "typeString": "class",
  "name": "NSUUID",
  "extensions": [
    772
  ]
},{
  "id": 1549,
  "typeString": "class",
  "name": "UUID",
  "extensions": [
    773
  ]
},{
  "id": 1550,
  "typeString": "class",
  "name": "NSData",
  "extensions": [
    776,
    1363
  ]
},{
  "id": 1551,
  "typeString": "class",
  "name": "NSURL",
  "extensions": [
    777
  ]
},{
  "id": 1552,
  "typeString": "class",
  "name": "Set",
  "extensions": [
    846
  ]
},{
  "id": 1553,
  "typeString": "class",
  "name": "FixedWidthInteger",
  "extensions": [
    1080
  ]
},{
  "id": 1554,
  "typeString": "protocol",
  "name": "ExpressibleByArrayLiteral"
},{
  "id": 1555,
  "typeString": "class",
  "name": "SyncManager",
  "extensions": [
    1272
  ]
},{
  "id": 1556,
  "typeString": "class",
  "name": "SyncError",
  "extensions": [
    1273
  ]
},{
  "id": 1557,
  "typeString": "class",
  "name": "RLMSyncCredentials",
  "extensions": [
    1274
  ]
},{
  "id": 1558,
  "typeString": "class",
  "name": "SyncUser",
  "extensions": [
    1275
  ]
},{
  "id": 1559,
  "typeString": "class",
  "name": "SyncSession",
  "extensions": [
    1276
  ]
},{
  "id": 1560,
  "typeString": "class",
  "name": "SyncPermission",
  "extensions": [
    1278
  ]
},{
  "id": 1561,
  "typeString": "protocol",
  "name": "ExpressibleByStringLiteral"
},{
  "id": 1562,
  "typeString": "protocol",
  "name": "Encodable"
},{
  "id": 1563,
  "typeString": "protocol",
  "name": "MutableCollection"
},{
  "id": 1564,
  "typeString": "protocol",
  "name": "RangeReplaceableCollection"
},{
  "id": 1565,
  "typeString": "protocol",
  "name": "Decodable"
},{
  "id": 1566,
  "typeString": "class",
  "name": "CBPeripheral",
  "extensions": [
    1422
  ]
},{
  "id": 2,
  "typeString": "extension",
  "methods": [
    {
  "name": "testing ()",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 11,
  "typeString": "extension",
  "methods": [
    {
  "name": "updateValue(_ data: Data, for characteristic: CBMutableCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "advertise(_ advertise: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    13
  ]
},{
  "id": 12,
  "typeString": "extension",
  "methods": [
    {
  "name": "peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, didAdd service: CBService, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManagerDidStartAdvertising(_ peripheral: CBPeripheralManager, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, central: CBCentral, didSubscribeTo characteristic: CBCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, central: CBCentral, didUnsubscribeFrom characteristic: CBCharacteristic)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, willRestoreState dict: [String : Any])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, didReceiveWrite requests: [CBATTRequest])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManager(_ peripheral: CBPeripheralManager, didReceiveRead request: CBATTRequest)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheralManagerIsReady(toUpdateSubscribers peripheral: CBPeripheralManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1488
  ]
},{
  "id": 16,
  "typeString": "extension",
  "methods": [
    {
  "name": "didSubscribe()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUnsubscribe(central: CoreBluetooth.CBCentral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUpdateTransferStatus(index: Int, progress: Float)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    9
  ]
},{
  "id": 20,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupSimulatorStatusViews(name: String, number: Int)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 23,
  "typeString": "extension",
  "methods": [
    {
  "name": "init?(hexString: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 28,
  "typeString": "extension",
  "methods": [
    {
  "name": "okTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deviceNotFoundRetryTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pairingUnsuccessfulRetryTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    277
  ]
},{
  "id": 29,
  "typeString": "extension",
  "methods": [
    {
  "name": "wearableFound(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableScanEnded()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableError(wearable: Wearable?, error: BLEErrorCode)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableConnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 30,
  "typeString": "extension",
  "methods": [
    {
  "name": "bluetoothCommunication(enabled: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 31,
  "typeString": "extension",
  "properties": [
    {
  "name": "var deviceNotDetectedTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastSyncTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var statusState: MobileDeviceStatus",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "refreshStatus()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "currentStatusStateDismissed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "faqTapped(_ faqID: Int?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialMenuTapped(_ contentId: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "newDeviceTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bluetoothSettingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    276
  ]
},{
  "id": 33,
  "typeString": "extension",
  "methods": [
    {
  "name": "taskCoordinator( _ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any? )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator( _ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any?, presentAs style: TaskPresentation )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator( _ taskCoordinator: TaskCoordinator, changeTask newTask: Task, with data: Any?, presentAs style: TaskPresentation, completion: @escaping (() -> Void) )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(canceled taskCoordinator: TaskCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskCoordinator(finished taskCoordinator: TaskCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    392
  ]
},{
  "id": 34,
  "typeString": "extension",
  "methods": [
    {
  "name": "tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1490
  ]
},{
  "id": 35,
  "typeString": "extension",
  "methods": [
    {
  "name": "presentationController(forPresented presented: UIViewController, presenting: UIViewController?, source: UIViewController) -> UIPresentationController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "animationController(forDismissed dismissed: UIViewController) -> UIViewControllerAnimatedTransitioning?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "animationController(forPresented presented: UIViewController, presenting: UIViewController, source: UIViewController) -> UIViewControllerAnimatedTransitioning?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1491
  ]
},{
  "id": 36,
  "typeString": "extension",
  "methods": [
    {
  "name": "notificationManager(_ manager: NotificationManager, presentTutorial tutorial: Tutorial)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    99
  ]
},{
  "id": 37,
  "typeString": "extension",
  "methods": [
    {
  "name": "startPasswordAuthentication() -> AWSCognitoIdentityPasswordAuthentication",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startNewPasswordRequired() -> AWSCognitoIdentityNewPasswordRequired",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1492
  ]
},{
  "id": 39,
  "typeString": "extension",
  "methods": [
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "openContentPage(_ contentPage: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    260
  ]
},{
  "id": 43,
  "typeString": "extension",
  "methods": [
    {
  "name": "attemptLogin( username: String, password: String, completion: @escaping (_ success: Bool, _ error: Error? ) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "postAuthentication()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "forgotPasswordButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    304
  ]
},{
  "id": 44,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissButtonTapped(_ sender: Any)",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "requestPasswordReset( email: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    284
  ]
},{
  "id": 45,
  "typeString": "extension",
  "methods": [
    {
  "name": "requestPasswordUpdate( newPassword: String, completion: @escaping (_ success: Bool, _ error: Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "requestPasswordUpdate(updatePassword: String, completion: @escaping (Bool, Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    299
  ]
},{
  "id": 46,
  "typeString": "extension",
  "methods": [
    {
  "name": "verifyConfirmationCode(email: String, code: String, completion: @escaping (Bool, Error?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    289
  ]
},{
  "id": 47,
  "typeString": "extension",
  "methods": [
    {
  "name": "getDetails(_ authenticationInput: AWSCognitoIdentityPasswordAuthenticationInput, passwordAuthenticationCompletionSource: PasswordAuthCompletion)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "didCompleteStepWithError(_ error: Error?)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1493
  ]
},{
  "id": 48,
  "typeString": "extension",
  "methods": [
    {
  "name": "getNewPasswordDetails(_ newPasswordRequiredInput: AWSCognitoIdentityNewPasswordRequiredInput, newPasswordRequiredCompletionSource: NewPasswordRequiredDetailsCompletion)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didCompleteNewPasswordStepWithError(_ error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1494
  ]
},{
  "id": 49,
  "typeString": "extension",
  "methods": [
    {
  "name": "testEULAAcceptance()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testShowAndViewControllerMethods() -> UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testDismissButton()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setCurrentStep(value: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 52,
  "typeString": "extension",
  "methods": [
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logOutSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "legalNoticesSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "eulaSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deviceHistorySelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "aboutSelected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resetDeviceConnection()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "allowSimulator(_ allowSimulator: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "ecgTransfers()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    253
  ]
},{
  "id": 53,
  "typeString": "extension",
  "methods": [
    {
  "name": "packetListDiagnosticsRecieved(_: PacketListViewController) -> [WearableStatusPacket]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1388
  ]
},{
  "id": 54,
  "typeString": "extension",
  "protocols": [
    1394
  ]
},{
  "id": 56,
  "typeString": "extension",
  "methods": [
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialCellTapped(_ tutorial: Tutorial)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialLinkTapped(_ tutorial: Tutorial)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "openViewController(_ controller: UIViewController, displayContent content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    309
  ]
},{
  "id": 58,
  "typeString": "extension",
  "methods": [
    {
  "name": "openViewController(_ controller: UIViewController, displayContent content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpViewController(_ controller: HelpViewController, displayContent content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    309
  ]
},{
  "id": 61,
  "typeString": "extension",
  "methods": [
    {
  "name": "introViewControllerStartButtonTapped(_: IntroViewController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    265
  ]
},{
  "id": 63,
  "typeString": "extension",
  "properties": [
    {
  "name": "var lastSyncTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var var deviceNotDetectedTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "refreshStatus()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "currentStatusStateDismissed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "settingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "faqTapped(_ faqID: Int?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tutorialMenuTapped(_ contentId: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "newDeviceTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bluetoothSettingsTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "initialConnectionTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    276
  ]
},{
  "id": 65,
  "typeString": "extension",
  "methods": [
    {
  "name": "closeButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "openContentPage(_ contentPage: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    260
  ]
},{
  "id": 81,
  "typeString": "extension",
  "methods": [
    {
  "name": "centralManagerDidUpdateState(_ central: CBCentralManager)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didFailToConnect peripheral: CBPeripheral, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didDiscover peripheral: CBPeripheral, advertisementData: [String: Any], rssi RSSI: NSNumber)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didDisconnectPeripheral peripheral: CBPeripheral, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, willRestoreState dict: [String: Any])",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1495
  ]
},{
  "id": 82,
  "typeString": "extension",
  "methods": [
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverCharacteristicsFor service: CBService, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverDescriptorsFor characteristic: CBCharacteristic, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverIncludedServicesFor service: CBService, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didModifyServices invalidatedServices: [CBService])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didOpen channel: CBL2CAPChannel?, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didReadRSSI RSSI: NSNumber, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateNotificationStateFor characteristic: CBCharacteristic, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateValueFor descriptor: CBDescriptor, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didWriteValueFor descriptor: CBDescriptor, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1428
  ]
},{
  "id": 83,
  "typeString": "extension",
  "methods": [
    {
  "name": "bleOperationFailed(operation: BLEBaseOperation, withError error: BLEError)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    172
  ]
},{
  "id": 84,
  "typeString": "extension",
  "methods": [
    {
  "name": "scanOperation(_ scanOperation: BLEScanOperation, wearableFound: Wearable, rssi: NSNumber)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scanEnded()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    167
  ]
},{
  "id": 91,
  "typeString": "extension",
  "methods": [
    {
  "name": "wearableConnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableError(wearable: Wearable?, error: BLEErrorCode)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    387
  ]
},{
  "id": 92,
  "typeString": "extension",
  "methods": [
    {
  "name": "bluetoothCommunication(enabled: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "internetCommunication(enabled: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    386
  ]
},{
  "id": 97,
  "typeString": "extension",
  "methods": [
    {
  "name": "wearableError(wearable: Wearable?, error: BLEErrorCode)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableConnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableDisconnected(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    387
  ]
},{
  "id": 103,
  "typeString": "extension",
  "methods": [
    {
  "name": "userNotificationCenter( _ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Swift.Void )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "userNotificationCenter( _ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Swift.Void )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1496
  ]
},{
  "id": 117,
  "typeString": "extension",
  "methods": [
    {
  "name": "getSection(_ index: Int) -> TutorialSection",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 119,
  "typeString": "extension",
  "methods": [
    {
  "name": "getPage(_ index: Int) -> TutorialPage?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 169,
  "typeString": "extension",
  "methods": [
    {
  "name": "centralManager(_ central: CBCentralManager, didDiscover peripheral: CBPeripheral, advertisementData: [String: Any], rssi RSSI: NSNumber)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 171,
  "typeString": "extension",
  "methods": [
    {
  "name": "centralManagerDidUpdateState(_ central: CBCentralManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 174,
  "typeString": "extension",
  "methods": [
    {
  "name": "bleUpdated(state: State)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 175,
  "typeString": "extension",
  "methods": [
    {
  "name": "centralManagerDidUpdateState(_ central: CBCentralManager)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1495
  ]
},{
  "id": 178,
  "typeString": "extension",
  "methods": [
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverCharacteristicsFor service: CBService, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1428
  ]
},{
  "id": 181,
  "typeString": "extension",
  "methods": [
    {
  "name": "centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didFailToConnect peripheral: CBPeripheral, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "centralManager(_ central: CBCentralManager, didDisconnectPeripheral: CBPeripheral, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 184,
  "typeString": "extension",
  "methods": [
    {
  "name": "peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1428
  ]
},{
  "id": 186,
  "typeString": "extension",
  "methods": [
    {
  "name": "getVisibleViewController() -> UIViewController",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dismissAllPresentedViewControllers(completion: (() -> Void)?)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 187,
  "typeString": "extension",
  "methods": [
    {
  "name": "kern(_ kerningValue:CGFloat)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 188,
  "typeString": "extension",
  "methods": [
    {
  "name": "kern(_ kerningValue:CGFloat)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 190,
  "typeString": "extension",
  "properties": [
    {
  "name": "var data: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var value",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init?(data: Data, startingIndex: Data.Index = 0)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 191,
  "typeString": "extension",
  "protocols": [
    189
  ]
},{
  "id": 192,
  "typeString": "extension",
  "protocols": [
    189
  ]
},{
  "id": 193,
  "typeString": "extension",
  "protocols": [
    189
  ]
},{
  "id": 194,
  "typeString": "extension",
  "protocols": [
    189
  ]
},{
  "id": 195,
  "typeString": "extension",
  "protocols": [
    189
  ]
},{
  "id": 196,
  "typeString": "extension",
  "methods": [
    {
  "name": "present(_ viewControllerToPresent: UIViewController, animated: Bool, completion: (() -> Swift.Void)? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 197,
  "typeString": "extension",
  "properties": [
    {
  "name": "var length: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let range",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let start",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let end",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "substring(fromIndex: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "substring(toIndex: Int) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "substring(with nsrange: NSRange) -> String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 198,
  "typeString": "extension",
  "methods": [
    {
  "name": "addOperation(operation: Operation, timeout: Double, timeoutBlock: (() -> Void)?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 199,
  "typeString": "extension",
  "methods": [
    {
  "name": "findShadowImage(under view: UIView) -> UIImageView?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "hideDividerLine()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 200,
  "typeString": "extension",
  "properties": [
    {
  "name": "var barHeight: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let heightScale",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let c",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 201,
  "typeString": "extension",
  "properties": [
    {
  "name": "var isValidEmail: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let emailRegEx",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let emailTest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorTextForEmailInput: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 202,
  "typeString": "extension",
  "methods": [
    {
  "name": "getNextViewController(_ orderedViewControllers: [UIViewController]) -> UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getPreviousViewController(_ orderedViewControllers: [UIViewController]) -> UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 204,
  "typeString": "extension",
  "methods": [
    {
  "name": "startObservingKeyboardFrameChange()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "stopObservingKeyboardFrameChange()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "keyboardWillChangeFrameNotification(notification: Notification)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "animatateOnKeyboardWillChange(keyboardEndFrame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 205,
  "typeString": "extension"
},{
  "id": 206,
  "typeString": "extension",
  "methods": [
    {
  "name": "addShadow()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 207,
  "typeString": "extension",
  "methods": [
    {
  "name": "init?(hexString: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 209,
  "typeString": "extension",
  "properties": [
    {
  "name": "let identifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let session",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let databaseEncryptionKey",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var shared: VALVa",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let valet",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let valet",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseEncryptionKey: Data",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let existingKey",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var key",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "removeAllAPIKeychainItems()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 210,
  "typeString": "extension",
  "methods": [
    {
  "name": "constrain(toFill view: UIView, padding: CGFloat = 0.0)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 211,
  "typeString": "extension",
  "properties": [
    {
  "name": "let iso8601: DateFormatter",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let formatter",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 212,
  "typeString": "extension",
  "properties": [
    {
  "name": "var iso8601: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 213,
  "typeString": "extension",
  "properties": [
    {
  "name": "var dateFromISO8601: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 214,
  "typeString": "extension",
  "methods": [
    {
  "name": "setThemedTitle(_ title: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 215,
  "typeString": "extension",
  "properties": [
    {
  "name": "var esPurple: UIColor",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var esGreen: UIColor",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var esLightBlue: UIColor",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var esNavTitleGrey: UIColor",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var cardBackground: UIColor",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(hex: UInt, alpha: CGFloat)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(hex: UInt)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 230,
  "typeString": "extension",
  "properties": [
    {
  "name": "var analyticsScreenName: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 231,
  "typeString": "extension",
  "methods": [
    {
  "name": "trackScreenView(_ screenName: String)",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "trackEvent(_ category: String, action: String, label: String? = nil, value: Int? = nil)",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "trackUserTimeEvent(_ category: String, interval: Int, action: String? = nil, label: String? = nil)",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 233,
  "typeString": "extension",
  "methods": [
    {
  "name": "show(isAlertVC: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "show()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(messageID: AlertMessageID)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 238,
  "typeString": "extension",
  "methods": [
    {
  "name": "primaryKey() -> String?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "autoIncrementKey() -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 240,
  "typeString": "extension",
  "methods": [
    {
  "name": "index(of element: T) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(_ element: T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 242,
  "typeString": "extension",
  "methods": [
    {
  "name": "index(of node: T) -> Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(node: T) -> T?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 250,
  "typeString": "extension",
  "methods": [
    {
  "name": "webView(_ webView: WKWebView, didFinish navigation: WKNavigation!)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1458
  ]
},{
  "id": 251,
  "typeString": "extension",
  "methods": [
    {
  "name": "scrollViewDidScroll(_ scrollView: UIScrollView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1512
  ]
},{
  "id": 252,
  "typeString": "extension",
  "methods": [
    {
  "name": "contentLinkTapped(_ content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    273
  ]
},{
  "id": 259,
  "typeString": "extension",
  "methods": [
    {
  "name": "switchValueChanged(onOffSwitch: UISwitch)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    375
  ]
},{
  "id": 264,
  "typeString": "extension",
  "methods": [
    {
  "name": "pushViewController(_ viewController: UIViewController, animated: Bool, completion: (() -> Void)?)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 268,
  "typeString": "extension",
  "methods": [
    {
  "name": "contentLinkTapped(_ content: ContentPage)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    273
  ]
},{
  "id": 269,
  "typeString": "extension",
  "methods": [
    {
  "name": "webView(_ webView: WKWebView, didFinish navigation: WKNavigation!)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1458
  ]
},{
  "id": 271,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 275,
  "typeString": "extension",
  "methods": [
    {
  "name": "webViewLinkClicked(delegate: HelpWebViewURLExtensionDelegate?, URL: URL) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 279,
  "typeString": "extension",
  "properties": [
    {
  "name": "var lastSyncTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "initialConnectionTime: Date?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 286,
  "typeString": "extension",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    359
  ]
},{
  "id": 287,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    366
  ]
},{
  "id": 291,
  "typeString": "extension",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    359
  ]
},{
  "id": 292,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    366
  ]
},{
  "id": 296,
  "typeString": "extension",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    359
  ]
},{
  "id": 297,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    366
  ]
},{
  "id": 302,
  "typeString": "extension",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    359
  ]
},{
  "id": 303,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    366
  ]
},{
  "id": 306,
  "typeString": "extension",
  "methods": [
    {
  "name": "formTextFieldUpdated(formTextField: FormTextField, text: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldSubmit(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "formTextFieldEditingDidEnd(formTextField: FormTextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    359
  ]
},{
  "id": 307,
  "typeString": "extension",
  "methods": [
    {
  "name": "dismissErrorButtonTapped(_ formErrorView: FormErrorView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    366
  ]
},{
  "id": 308,
  "typeString": "extension",
  "methods": [
    {
  "name": "testQABuild(bundleString: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getTextFields() -> [String?]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setTextFields(text: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loginButtonTap()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "helpButtonTap()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "forgotTap()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testSecureLoginToggleIcon()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 311,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "numberOfSections(in tableView: UITableView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1514
  ]
},{
  "id": 312,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1515
  ]
},{
  "id": 313,
  "typeString": "extension",
  "methods": [
    {
  "name": "navigationController(_ navigationController: UINavigationController, willShow viewController: UIViewController, animated: Bool)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1516
  ]
},{
  "id": 317,
  "typeString": "extension",
  "methods": [
    {
  "name": "numberOfSections(in tableView: UITableView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1514
  ]
},{
  "id": 318,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1515
  ]
},{
  "id": 319,
  "typeString": "extension",
  "properties": [
    {
  "name": "var previousIndexPath: IndexPath",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nextIndexPath: IndexPath",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 321,
  "typeString": "extension",
  "methods": [
    {
  "name": "didTap(tabBarButtonView: CustomTabBarButtonView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    378
  ]
},{
  "id": 330,
  "typeString": "extension",
  "properties": [
    {
  "name": "var errorDescription: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let APIError): switch APIError",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1518
  ]
},{
  "id": 333,
  "typeString": "extension",
  "methods": [
    {
  "name": "initializeSession(request: Request? = nil, completionHandler: @escaping () -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    344
  ]
},{
  "id": 334,
  "typeString": "extension",
  "methods": [
    {
  "name": "adapt(_ urlRequest: URLRequest) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    461
  ]
},{
  "id": 335,
  "typeString": "extension",
  "methods": [
    {
  "name": "should( _ manager: SessionManager, retry request: Request, with error: Error, completion: @escaping RequestRetryCompletion )",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    462
  ]
},{
  "id": 337,
  "typeString": "extension",
  "properties": [
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let error): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1445
  ]
},{
  "id": 338,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 339,
  "typeString": "extension",
  "properties": [
    {
  "name": "var errorDescription: String?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1518
  ]
},{
  "id": 342,
  "typeString": "extension",
  "methods": [
    {
  "name": "adapt(_ urlRequest: URLRequest) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    461
  ]
},{
  "id": 343,
  "typeString": "extension",
  "methods": [
    {
  "name": "should( _ manager: SessionManager, retry request: Request, with error: Error, completion: @escaping RequestRetryCompletion )",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "refreshToken( token: OAuth2Token, completion: @escaping (_ success: Bool) -> Void )",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "protocols": [
    462
  ]
},{
  "id": 348,
  "typeString": "extension",
  "properties": [
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var method: HTTPMethod",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var parameters: Parameters",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var parameterEncoding: ParameterEncoding",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "composedURLRequest(baseURL: URL?) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "asURLRequest() throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 361,
  "typeString": "extension",
  "methods": [
    {
  "name": "textFieldShouldReturn(_ textField: UITextField) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "textFieldDidEndEditing(_ textField: UITextField)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1519
  ]
},{
  "id": 390,
  "typeString": "extension",
  "properties": [
    {
  "name": "var currentCoordinator: TaskCoordinator?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentCoordinatorsPresentationType: TaskPresentation?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentTask: Task?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin( _ task: Task, with data: Any? = nil, presentAs presentation: TaskPresentation, animated: Bool = true, transition: UIViewControllerAnimatedTransitioning? = nil, completion: (() -> Void)? = nil )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "begin( _ nextCoordinator: TaskCoordinator, with data: Any? = nil, presentAs presentation: TaskPresentation, animated: Bool = true, transition: UIViewControllerAnimatedTransitioning? = nil, completion: (() -> Void)? = nil )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "end(coordinator: TaskCoordinator)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dismissCurrentModalTask( animated: Bool, completion: (() -> Void)? = nil )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rootViewControllerForCoordinator(_ coordinator: TaskCoordinator) -> UIViewController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "transition( from fromCoordinator: TaskCoordinator?, to toCoordinator: TaskCoordinator, presentAs presentation: TaskPresentation = .replace, animated: Bool = true, transition: UIViewControllerAnimatedTransitioning? = nil, completion:(() -> Void)? = nil )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "dismissModalTask( forPresentation presentation: TaskPresentation, animated: Bool, completion: (() -> Void)? = nil )",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 393,
  "typeString": "extension",
  "properties": [
    {
  "name": "var currentPresentationViewController: UIViewController",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "begin(with data: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reset()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepareForRemoval()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 408,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let latency",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let serializationDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let totalDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let timings",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 409,
  "typeString": "extension",
  "properties": [
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let requestStartTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let initialResponseTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestCompletedTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let serializationCompletedTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let latency",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let serializationDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let totalDuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let timings",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1445
  ]
},{
  "id": 410,
  "typeString": "extension",
  "properties": [
    {
  "name": "var userInteractive: DispatchQueue",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var userInitiated: DispatchQueue",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var utility: DispatchQueue",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var background: DispatchQueue",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "after(_ delay: TimeInterval, execute closure: @escaping () -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 412,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 413,
  "typeString": "extension",
  "properties": [
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let value): return case .failure(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let error): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1445
  ]
},{
  "id": 414,
  "typeString": "extension",
  "methods": [
    {
  "name": "unwrap() throws -> Value",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "map<T>(_ transform: (Value) -> T) -> Result<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<T>(_ transform: (Value) throws -> T) -> Result<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapError<T: Error>(_ transform: (Error) -> T) -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMapError<T: Error>(_ transform: (Error) throws -> T) -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "withValue(_ closure: (Value) throws -> Void) rethrows -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "withError(_ closure: (Error) throws -> Void) rethrows -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "ifSuccess(_ closure: () throws -> Void) rethrows -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "ifFailure(_ closure: () throws -> Void) rethrows -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(value: () throws -> Value)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 422,
  "typeString": "extension",
  "properties": [
    {
  "name": "var isBool: Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ]
},{
  "id": 429,
  "typeString": "extension",
  "properties": [
    {
  "name": "var underlyingAdaptError: Error?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 430,
  "typeString": "extension",
  "properties": [
    {
  "name": "var isInvalidURLError: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isParameterEncodingError: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isMultipartEncodingError: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isResponseValidationError: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isResponseSerializationError: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 431,
  "typeString": "extension",
  "properties": [
    {
  "name": "var urlConvertible: URLConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let url): return url default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var url: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.url default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var underlyingError: Error?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.underlyingError case .multipartEncodingFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.underlyingError case .responseSerializationFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.underlyingError default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var acceptableContentTypes: [String]?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.acceptableContentTypes default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var responseContentType: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.responseContentType default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var responseCode: Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.responseCode default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var failedStringEncoding: String.Encoding?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let reason): return reason.failedStringEncoding default: return nil } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 432,
  "typeString": "extension",
  "properties": [
    {
  "name": "var errorDescription: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let url): return case .parameterEncodingFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.localizedDescription case .multipartEncodingFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.localizedDescription case .responseValidationFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.localizedDescription case .responseSerializationFailed(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let reason): return reason.localizedDescription } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1518
  ]
},{
  "id": 435,
  "typeString": "extension",
  "properties": [
    {
  "name": "let type: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subtype: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isWildcard: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var acceptableStatusCodes: [Int]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var acceptableContentTypes: [String]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let accept",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "matches(_ mime: MIMEType) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validate<S: Sequence>( statusCode acceptableStatusCodes: S, response: HTTPURLResponse) -> ValidationResult where S.Iterator.Element == Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "validate<S: Sequence>( contentType acceptableContentTypes: S, response: HTTPURLResponse, data: Data?) -> ValidationResult where S.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "init?(_ string: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 436,
  "typeString": "extension",
  "methods": [
    {
  "name": "validate(_ validation: @escaping Validation) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate<S: Sequence>(statusCode acceptableStatusCodes: S) -> Self where S.Iterator.Element == Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate<S: Sequence>(contentType acceptableContentTypes: S) -> Self where S.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate() -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 437,
  "typeString": "extension",
  "methods": [
    {
  "name": "validate(_ validation: @escaping Validation) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate<S: Sequence>(statusCode acceptableStatusCodes: S) -> Self where S.Iterator.Element == Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate<S: Sequence>(contentType acceptableContentTypes: S) -> Self where S.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "validate() -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 440,
  "typeString": "extension",
  "properties": [
    {
  "name": "let Task",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let ResponseData",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 446,
  "typeString": "extension",
  "methods": [
    {
  "name": "map<T>(_ transform: (Value) -> T) -> DataResponse<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<T>(_ transform: (Value) throws -> T) -> DataResponse<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapError<E: Error>(_ transform: (Error) -> E) -> DataResponse",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMapError<E: Error>(_ transform: (Error) throws -> E) -> DataResponse",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 447,
  "typeString": "extension",
  "methods": [
    {
  "name": "map<T>(_ transform: (Value) -> T) -> DownloadResponse<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<T>(_ transform: (Value) throws -> T) -> DownloadResponse<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "mapError<E: Error>(_ transform: (Error) -> E) -> DownloadResponse",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMapError<E: Error>(_ transform: (Error) throws -> E) -> DownloadResponse",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 448,
  "typeString": "extension",
  "methods": [
    {
  "name": "add(_ metrics: AnyObject?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 449,
  "typeString": "extension",
  "properties": [
    {
  "name": "var metrics: URLSessionTaskMetrics?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    445
  ]
},{
  "id": 450,
  "typeString": "extension",
  "properties": [
    {
  "name": "var metrics: URLSessionTaskMetrics?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    445
  ]
},{
  "id": 451,
  "typeString": "extension",
  "properties": [
    {
  "name": "var metrics: URLSessionTaskMetrics?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    445
  ]
},{
  "id": 452,
  "typeString": "extension",
  "properties": [
    {
  "name": "var metrics: URLSessionTaskMetrics?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    445
  ]
},{
  "id": 455,
  "typeString": "extension",
  "methods": [
    {
  "name": "asURL() throws -> URL",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    453
  ]
},{
  "id": 456,
  "typeString": "extension",
  "methods": [
    {
  "name": "asURL() throws -> URL",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    453
  ]
},{
  "id": 457,
  "typeString": "extension",
  "methods": [
    {
  "name": "asURL() throws -> URL",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    453
  ]
},{
  "id": 458,
  "typeString": "extension",
  "properties": [
    {
  "name": "var urlRequest: URLRequest?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 459,
  "typeString": "extension",
  "methods": [
    {
  "name": "asURLRequest() throws -> URLRequest",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    454
  ]
},{
  "id": 460,
  "typeString": "extension",
  "methods": [
    {
  "name": "adapt(using adapter: RequestAdapter?) throws -> URLRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(url: URLConvertible, method: HTTPMethod, headers: HTTPHeaders? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 475,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var components: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let urlString",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let response",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 476,
  "typeString": "extension",
  "properties": [
    {
  "name": "var debugDescription: String",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "var headers: [AnyHashable: Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let escapedValue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let httpBodyData",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let httpBody",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var escapedBody",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "cURLRepresentation() -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1445
  ]
},{
  "id": 483,
  "typeString": "extension",
  "properties": [
    {
  "name": "var timeline: Timeline",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestStartTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let requestCompletedTime",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let initialResponseTime",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 484,
  "typeString": "extension",
  "methods": [
    {
  "name": "response(queue: DispatchQueue? = nil, completionHandler: @escaping (DefaultDataResponse) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "response<T: DataResponseSerializerProtocol>( queue: DispatchQueue? = nil, responseSerializer: T, completionHandler: @escaping (DataResponse<T.SerializedObject>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 485,
  "typeString": "extension",
  "methods": [
    {
  "name": "response( queue: DispatchQueue? = nil, completionHandler: @escaping (DefaultDownloadResponse) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "response<T: DownloadResponseSerializerProtocol>( queue: DispatchQueue? = nil, responseSerializer: T, completionHandler: @escaping (DownloadResponse<T.SerializedObject>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 486,
  "typeString": "extension",
  "methods": [
    {
  "name": "serializeResponseData(response: HTTPURLResponse?, data: Data?, error: Error?) -> Result<Data>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 487,
  "typeString": "extension",
  "methods": [
    {
  "name": "dataResponseSerializer() -> DataResponseSerializer<Data>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseData( queue: DispatchQueue? = nil, completionHandler: @escaping (DataResponse<Data>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 488,
  "typeString": "extension",
  "methods": [
    {
  "name": "dataResponseSerializer() -> DownloadResponseSerializer<Data>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseData( queue: DispatchQueue? = nil, completionHandler: @escaping (DownloadResponse<Data>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 489,
  "typeString": "extension",
  "methods": [
    {
  "name": "serializeResponseString( encoding: String.Encoding?, response: HTTPURLResponse?, data: Data?, error: Error?) -> Result<String>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 490,
  "typeString": "extension",
  "methods": [
    {
  "name": "stringResponseSerializer(encoding: String.Encoding? = nil) -> DataResponseSerializer<String>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseString( queue: DispatchQueue? = nil, encoding: String.Encoding? = nil, completionHandler: @escaping (DataResponse<String>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 491,
  "typeString": "extension",
  "methods": [
    {
  "name": "stringResponseSerializer(encoding: String.Encoding? = nil) -> DownloadResponseSerializer<String>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseString( queue: DispatchQueue? = nil, encoding: String.Encoding? = nil, completionHandler: @escaping (DownloadResponse<String>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 492,
  "typeString": "extension",
  "methods": [
    {
  "name": "serializeResponseJSON( options: JSONSerialization.ReadingOptions, response: HTTPURLResponse?, data: Data?, error: Error?) -> Result<Any>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 493,
  "typeString": "extension",
  "methods": [
    {
  "name": "jsonResponseSerializer( options: JSONSerialization.ReadingOptions = .allowFragments) -> DataResponseSerializer<Any>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseJSON( queue: DispatchQueue? = nil, options: JSONSerialization.ReadingOptions = .allowFragments, completionHandler: @escaping (DataResponse<Any>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 494,
  "typeString": "extension",
  "methods": [
    {
  "name": "jsonResponseSerializer( options: JSONSerialization.ReadingOptions = .allowFragments) -> DownloadResponseSerializer<Any>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responseJSON( queue: DispatchQueue? = nil, options: JSONSerialization.ReadingOptions = .allowFragments, completionHandler: @escaping (DownloadResponse<Any>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 495,
  "typeString": "extension",
  "methods": [
    {
  "name": "serializeResponsePropertyList( options: PropertyListSerialization.ReadOptions, response: HTTPURLResponse?, data: Data?, error: Error?) -> Result<Any>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 496,
  "typeString": "extension",
  "methods": [
    {
  "name": "propertyListResponseSerializer( options: PropertyListSerialization.ReadOptions = []) -> DataResponseSerializer<Any>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responsePropertyList( queue: DispatchQueue? = nil, options: PropertyListSerialization.ReadOptions = [], completionHandler: @escaping (DataResponse<Any>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 497,
  "typeString": "extension",
  "methods": [
    {
  "name": "propertyListResponseSerializer( options: PropertyListSerialization.ReadOptions = []) -> DownloadResponseSerializer<Any>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "responsePropertyList( queue: DispatchQueue? = nil, options: PropertyListSerialization.ReadOptions = [], completionHandler: @escaping (DownloadResponse<Any>) -> Void) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 501,
  "typeString": "extension",
  "properties": [
    {
  "name": "var managerKey",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var serverTrustPolicyManager: ServerTrustPolicyManager?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 503,
  "typeString": "extension",
  "methods": [
    {
  "name": "urlSession(_ session: URLSession, didBecomeInvalidWithError error: Error?)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSessionDidFinishEvents(forBackgroundURLSession session: URLSession)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "protocols": [
    1526
  ]
},{
  "id": 504,
  "typeString": "extension",
  "methods": [
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest, completionHandler: @escaping (URLRequest?) -> Void)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, needNewBodyStream completionHandler: @escaping (InputStream?) -> Void)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, task: URLSessionTask, didSendBodyData bytesSent: Int64, totalBytesSent: Int64, totalBytesExpectedToSend: Int64)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession(_ session: URLSession, task: URLSessionTask, didFinishCollecting metrics: URLSessionTaskMetrics)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession(_ session: URLSession, task: URLSessionTask, didCompleteWithError error: Error?)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "protocols": [
    1527
  ]
},{
  "id": 505,
  "typeString": "extension",
  "methods": [
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, didReceive response: URLResponse, completionHandler: @escaping (URLSession.ResponseDisposition) -> Void)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, didBecome downloadTask: URLSessionDownloadTask)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didReceive data: Data)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, dataTask: URLSessionDataTask, willCacheResponse proposedResponse: CachedURLResponse, completionHandler: @escaping (CachedURLResponse?) -> Void)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "protocols": [
    1528
  ]
},{
  "id": 506,
  "typeString": "extension",
  "methods": [
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingTo location: URL)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didWriteData bytesWritten: Int64, totalBytesWritten: Int64, totalBytesExpectedToWrite: Int64)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, downloadTask: URLSessionDownloadTask, didResumeAtOffset fileOffset: Int64, expectedTotalBytes: Int64)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "protocols": [
    1529
  ]
},{
  "id": 507,
  "typeString": "extension",
  "methods": [
    {
  "name": "urlSession(_ session: URLSession, readClosedFor streamTask: URLSessionStreamTask)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession(_ session: URLSession, writeClosedFor streamTask: URLSessionStreamTask)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession(_ session: URLSession, betterRouteDiscoveredFor streamTask: URLSessionStreamTask)",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "urlSession( _ session: URLSession, streamTask: URLSessionStreamTask, didBecome inputStream: InputStream, outputStream: OutputStream)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "protocols": [
    1530
  ]
},{
  "id": 513,
  "typeString": "extension",
  "methods": [
    {
  "name": "create(table name: String, temporary: Bool = false, ifNotExists: Bool = false, withoutRowID: Bool = false, body: (TableDefinition) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(table name: String, temporary: Bool = false, ifNotExists: Bool = false, withoutRowID: Bool, body: (TableDefinition) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(table name: String, temporary: Bool = false, ifNotExists: Bool = false, body: (TableDefinition) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "rename(table name: String, to newName: String) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "alter(table name: String, body: (TableAlteration) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "drop(table name: String) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(index name: String, on table: String, columns: [String], unique: Bool = false, ifNotExists: Bool = false, condition: SQLExpressible? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(index name: String, on table: String, columns: [String], unique: Bool = false, ifNotExists: Bool = false) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create(index name: String, on table: String, columns: [String], unique: Bool = false, ifNotExists: Bool = false, condition: SQLExpressible) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "drop(index name: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 515,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    544
  ]
},{
  "id": 516,
  "typeString": "extension",
  "methods": [
    {
  "name": "belongsTo<Destination>( _ destination: Destination.Type, key: String? = nil, using foreignKey: ForeignKey? = nil) -> BelongsToAssociation<Self, Destination> where Destination: TableRecord",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 518,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    544
  ]
},{
  "id": 519,
  "typeString": "extension",
  "methods": [
    {
  "name": "hasOne<Destination>( _ destination: Destination.Type, key: String? = nil, using foreignKey: ForeignKey? = nil) -> HasOneAssociation<Self, Destination> where Destination: TableRecord",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 521,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(_ query: QueryInterfaceQuery)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 522,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reversed() -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "order(_ ordering: QueryOrdering) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "joining(_ join: AssociationJoin) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualified(with alias: TableAlias) -> AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 523,
  "typeString": "extension",
  "properties": [
    {
  "name": "var finalizedQuery: AssociationQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var query",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedAliases: [TableAlias]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var aliases: [TableAlias]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedSelection: [SQLSelectable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedOrdering: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "finalizedRowAdapter(_ db: Database, fromIndex startIndex: Int, forKeyPath keyPath: [String]) throws -> (adapter: RowAdapter, endIndex: Int)?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 525,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    544
  ]
},{
  "id": 526,
  "typeString": "extension",
  "methods": [
    {
  "name": "hasMany<Destination>( _ destination: Destination.Type, key: String? = nil, using foreignKey: ForeignKey? = nil) -> HasManyAssociation<Self, Destination> where Destination: TableRecord",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 530,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> AssociationRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> AssociationRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> AssociationRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reversed() -> AssociationRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "aliased(_ alias: TableAlias) -> AssociationRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "joining<A: Association>(_ joinOperator: AssociationJoinOperator, _ association: A) -> AssociationRequest where A.OriginRowDecoder == T",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 533,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "reversed() -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "forKey(_ codingKey: CodingKey) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "aliased(_ alias: TableAlias) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 534,
  "typeString": "extension",
  "methods": [
    {
  "name": "including<A: Association>(optional association: A) -> Self where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "including<A: Association>(required association: A) -> Self where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(optional association: A) -> Self where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(required association: A) -> Self where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 535,
  "typeString": "extension",
  "methods": [
    {
  "name": "request(from record: OriginRowDecoder) -> QueryInterfaceRequest<RowDecoder>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 537,
  "typeString": "extension",
  "methods": [
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    679
  ]
},{
  "id": 538,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "distinct() -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "group(_ expressions: [SQLExpressible]) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "having(_ predicate: SQLExpressible) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "reversed() -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "limit(_ limit: Int, offset: Int? = nil) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "aliased(_ alias: TableAlias) -> QueryInterfaceRequest",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "asRequest<Target>(of type: Target.Type) -> QueryInterfaceRequest<Target>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    547,
    545
  ]
},{
  "id": 539,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseTableName: String",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    544
  ]
},{
  "id": 540,
  "typeString": "extension",
  "methods": [
    {
  "name": "deleteAll(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 541,
  "typeString": "extension",
  "methods": [
    {
  "name": "all() -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "none() -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "select(_ selection: SQLSelectable...) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "select(_ selection: [SQLSelectable]) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "select(sql: String, arguments: StatementArguments? = nil) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter(_ predicate: SQLExpressible) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter<PrimaryKeyType: DatabaseValueConvertible>(key: PrimaryKeyType?) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter<Sequence: Swift.Sequence>(keys: Sequence) -> QueryInterfaceRequest<Self> where Sequence.Element: DatabaseValueConvertible",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter(key: [String: DatabaseValueConvertible?]?) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter(keys: [[String: DatabaseValueConvertible?]]) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "filter(sql: String, arguments: StatementArguments? = nil) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "order(_ orderings: SQLOrderingTerm...) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "order(_ orderings: [SQLOrderingTerm]) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "orderByPrimaryKey() -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "order(sql: String, arguments: StatementArguments? = nil) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "limit(_ limit: Int, offset: Int? = nil) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "aliased(_ alias: TableAlias) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 548,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: SQLSelectable...) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "select(sql: String, arguments: StatementArguments? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 549,
  "typeString": "extension",
  "methods": [
    {
  "name": "filter(_ predicate: SQLExpressible) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(sql: String, arguments: StatementArguments? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "none() -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 550,
  "typeString": "extension",
  "methods": [
    {
  "name": "filter<PrimaryKeyType: DatabaseValueConvertible>(key: PrimaryKeyType?) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter<Sequence: Swift.Sequence>(keys: Sequence) -> Self where Sequence.Element: DatabaseValueConvertible",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(key: [String: DatabaseValueConvertible?]?) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(keys: [[String: DatabaseValueConvertible?]]) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 551,
  "typeString": "extension",
  "methods": [
    {
  "name": "orderByPrimaryKey() -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 552,
  "typeString": "extension",
  "methods": [
    {
  "name": "group(_ expressions: SQLExpressible...) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "group(sql: String, arguments: StatementArguments? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "having(sql: String, arguments: StatementArguments? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 553,
  "typeString": "extension",
  "methods": [
    {
  "name": "order(_ orderings: SQLOrderingTerm...) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "order(_ orderings: [SQLOrderingTerm]) -> Self",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "order(sql: String, arguments: StatementArguments? = nil) -> Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 554,
  "typeString": "extension",
  "methods": [
    {
  "name": "matching(_ pattern: FTS5Pattern?) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 555,
  "typeString": "extension",
  "methods": [
    {
  "name": "matching(_ pattern: FTS5Pattern?) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 558,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ value: SQLExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 561,
  "typeString": "extension",
  "properties": [
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "matchedRowIds(rowIdName: String?) -> Set<Int64>?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedOrdering(with alias: TableAlias) -> SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 562,
  "typeString": "extension",
  "properties": [
    {
  "name": "var sqlExpression: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 563,
  "typeString": "extension",
  "methods": [
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 568,
  "typeString": "extension",
  "properties": [
    {
  "name": "var reversed: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "orderingTermSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 569,
  "typeString": "extension",
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 576,
  "typeString": "extension",
  "methods": [
    {
  "name": "select(_ selection: [SQLSelectable]) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "distinct() -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filter(_ predicate: @escaping (Database) throws -> SQLExpressible) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "group(_ expressions: [SQLExpressible]) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "having(_ predicate: SQLExpressible) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "order(_ orderings: @escaping (Database) throws -> [SQLOrderingTerm]) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reversed() -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "order(_ ordering: QueryOrdering) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "unordered() -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "limit(_ limit: Int, offset: Int? = nil) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "joining(_ join: AssociationJoin) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualified(with alias: TableAlias) -> QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 577,
  "typeString": "extension",
  "properties": [
    {
  "name": "var finalizedQuery: QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var query",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedAliases: [TableAlias]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var aliases: [TableAlias]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let alias",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedSelection: [SQLSelectable]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var finalizedOrdering: QueryOrdering",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "finalizedRowAdapter(_ db: Database) throws -> RowAdapter?",
  "type": "instance",
  "accessLevel": "private"
}
  ]
},{
  "id": 578,
  "typeString": "extension",
  "properties": [
    {
  "name": "var countQuery: QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let count",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var countQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var countQuery",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var trivialCountQuery: QueryInterfaceQuery",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "sql(_ db: Database, _ context: inout SQLGenerationContext) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeSelectStatement(_ db: Database) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "makeDeleteStatement(_ db: Database) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(_ db: Database) throws -> (SelectStatement, RowAdapter?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 579,
  "typeString": "extension",
  "properties": [
    {
  "name": "var sqlSelectable: SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let expression): return SQLExpressionCountDistinct(expression) } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 599,
  "typeString": "extension",
  "properties": [
    {
  "name": "var literal: SQLExpressionLiteral",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var context",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sql",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var context",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 606,
  "typeString": "extension",
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 607,
  "typeString": "extension",
  "properties": [
    {
  "name": "var name: String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 608,
  "typeString": "extension",
  "properties": [
    {
  "name": "var asc: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var desc: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 609,
  "typeString": "extension",
  "methods": [
    {
  "name": "aliased(_ name: String) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 610,
  "typeString": "extension",
  "methods": [
    {
  "name": "collating(_ collation: Database.CollationName) -> SQLCollatedExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "collating(_ collation: DatabaseCollation) -> SQLCollatedExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 612,
  "typeString": "extension",
  "properties": [
    {
  "name": "let lessThan",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let lessThanOrEqual",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let greaterThan",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let greaterThanOrEqual",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 613,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: SQLSpecificExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "contains(_ element: SQLCollatedExpression) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 614,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: SQLSpecificExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "contains(_ element: SQLCollatedExpression) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 615,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: SQLSpecificExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 616,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: SQLSpecificExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 617,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: SQLSpecificExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "contains(_ element: SQLCollatedExpression) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 618,
  "typeString": "extension",
  "properties": [
    {
  "name": "let plus",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let minus",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let multiply",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let divide",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 619,
  "typeString": "extension",
  "properties": [
    {
  "name": "let minus",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 620,
  "typeString": "extension",
  "methods": [
    {
  "name": "joined(operator: SQLLogicalBinaryOperator) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 621,
  "typeString": "extension",
  "properties": [
    {
  "name": "let like",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 622,
  "typeString": "extension",
  "methods": [
    {
  "name": "like(_ pattern: SQLExpressible) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 623,
  "typeString": "extension",
  "properties": [
    {
  "name": "let match",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 624,
  "typeString": "extension",
  "methods": [
    {
  "name": "apply(_ arguments: SQLExpressible...) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 625,
  "typeString": "extension",
  "properties": [
    {
  "name": "let abs",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 626,
  "typeString": "extension",
  "properties": [
    {
  "name": "let avg",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 627,
  "typeString": "extension",
  "properties": [
    {
  "name": "let ifNull",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 628,
  "typeString": "extension",
  "properties": [
    {
  "name": "let length",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 629,
  "typeString": "extension",
  "properties": [
    {
  "name": "let max",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 630,
  "typeString": "extension",
  "properties": [
    {
  "name": "let min",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 631,
  "typeString": "extension",
  "properties": [
    {
  "name": "let sum",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 632,
  "typeString": "extension",
  "properties": [
    {
  "name": "var capitalized: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var lowercased: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var uppercased: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 633,
  "typeString": "extension",
  "properties": [
    {
  "name": "var localizedCapitalized: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var localizedLowercased: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var localizedUppercased: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 635,
  "typeString": "extension",
  "properties": [
    {
  "name": "var reversed: SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "orderingTermSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedOrdering(with alias: TableAlias) -> SQLOrderingTerm",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    564
  ]
},{
  "id": 636,
  "typeString": "extension",
  "methods": [
    {
  "name": "joining<A: Association>(_ joinOperator: AssociationJoinOperator, _ association: A) -> QueryInterfaceRequest<RowDecoder> where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "including<A: Association>(optional association: A) -> QueryInterfaceRequest<RowDecoder> where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "including<A: Association>(required association: A) -> QueryInterfaceRequest<RowDecoder> where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(optional association: A) -> QueryInterfaceRequest<RowDecoder> where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(required association: A) -> QueryInterfaceRequest<RowDecoder> where A.OriginRowDecoder == RowDecoder",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 637,
  "typeString": "extension",
  "methods": [
    {
  "name": "request<A: Association>(for association: A) -> QueryInterfaceRequest<A.RowDecoder> where A.OriginRowDecoder == Self",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 638,
  "typeString": "extension",
  "methods": [
    {
  "name": "including<A: Association>(optional association: A) -> QueryInterfaceRequest<Self> where A.OriginRowDecoder == Self",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "including<A: Association>(required association: A) -> QueryInterfaceRequest<Self> where A.OriginRowDecoder == Self",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(optional association: A) -> QueryInterfaceRequest<Self> where A.OriginRowDecoder == Self",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "joining<A: Association>(required association: A) -> QueryInterfaceRequest<Self> where A.OriginRowDecoder == Self",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 640,
  "typeString": "extension",
  "methods": [
    {
  "name": "create(virtualTable name: String, ifNotExists: Bool = false, using module: String) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "create<Module: VirtualTableModule>(virtualTable tableName: String, ifNotExists: Bool = false, using module: Module, _ body: ((Module.TableDefinition) -> Void)? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 644,
  "typeString": "extension",
  "properties": [
    {
  "name": "var resolvedNames: [TableAlias: String]",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let groups",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var uniqueLowercaseNames: Set<String>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ambiguousGroups: [[TableAlias]]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resolvedNames: [TableAlias: String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let radical",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resolvedName: String repeat",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 645,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseQualifierRadical: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let digits: ClosedRange<Character>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let radicalEndIndex",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 646,
  "typeString": "extension",
  "methods": [
    {
  "name": "matching(_ pattern: FTS3Pattern?) -> QueryInterfaceRequest<T>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 647,
  "typeString": "extension",
  "methods": [
    {
  "name": "matching(_ pattern: FTS3Pattern?) -> QueryInterfaceRequest<Self>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 648,
  "typeString": "extension",
  "methods": [
    {
  "name": "match(_ pattern: FTS3Pattern?) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 652,
  "typeString": "extension",
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    600
  ]
},{
  "id": 653,
  "typeString": "extension",
  "methods": [
    {
  "name": "resultColumnSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "countedSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "count(distinct: Bool) -> SQLCount?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "qualifiedSelectable(with alias: TableAlias) -> SQLSelectable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "columnCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    600
  ]
},{
  "id": 655,
  "typeString": "extension",
  "methods": [
    {
  "name": "releaseMemory()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setupMemoryManagement(in application: UIApplication)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "applicationDidEnterBackground(_ notification: NSNotification)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "applicationDidReceiveMemoryWarning(_ notification: NSNotification)",
  "type": "instance",
  "accessLevel": "private"
}
  ]
},{
  "id": 656,
  "typeString": "extension",
  "methods": [
    {
  "name": "change(passphrase: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 657,
  "typeString": "extension",
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "readFromCurrentState(_ block: @escaping (Database) -> Void)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "write<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "inTransaction(_ kind: Database.TransactionKind? = nil, _ block: (Database) throws -> Database.TransactionCompletion) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeWithoutTransaction<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "inDatabase<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantWrite<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 670,
  "typeString": "extension",
  "properties": [
    {
  "name": "var mapping: LayoutedColumnMapping",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var scopes: [String: LayoutedRowAdapter]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    659
  ]
},{
  "id": 671,
  "typeString": "extension",
  "methods": [
    {
  "name": "layoutIndex(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    660
  ]
},{
  "id": 672,
  "typeString": "extension",
  "properties": [
    {
  "name": "var layoutColumns: [(Int, String)]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "layoutIndex(ofColumn name: String) -> Int?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    660
  ]
},{
  "id": 673,
  "typeString": "extension",
  "methods": [
    {
  "name": "addingScopes(_ scopes: [String: RowAdapter]) -> RowAdapter",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 674,
  "typeString": "extension",
  "methods": [
    {
  "name": "baseColumnIndex(atIndex index: Int, layout: RowLayout) throws -> Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 675,
  "typeString": "extension",
  "methods": [
    {
  "name": "adapted(with adapter: RowAdapter?, layout: RowLayout) throws -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(base: Row, adapter: LayoutedRowAdapter)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 684,
  "typeString": "extension",
  "methods": [
    {
  "name": "adapted(_ adapter: @escaping (Database) throws -> RowAdapter) -> AdaptedFetchRequest<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 685,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeSelectStatement(_ sql: String) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "makeSelectStatement(_ sql: String, prepFlags: Int32) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cachedSelectStatement(_ sql: String) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "internalCachedSelectStatement(_ sql: String) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeUpdateStatement(_ sql: String) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "makeUpdateStatement(_ sql: String, prepFlags: Int32) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cachedUpdateStatement(_ sql: String) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "internalCachedUpdateStatement(_ sql: String) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "execute(_ sql: String, arguments: StatementArguments? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 686,
  "typeString": "extension",
  "methods": [
    {
  "name": "updateStatementWillExecute(_ statement: UpdateStatement)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatementDidExecute(_ statement: UpdateStatement) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatementDidFail(_ statement: UpdateStatement) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "selectStatementDidFail(_ statement: SelectStatement)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 692,
  "typeString": "extension",
  "methods": [
    {
  "name": "backup(to writer: DatabaseWriter) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "backup(to writer: DatabaseWriter, afterBackupInit: (() -> ())?, afterBackupStep: (() -> ())?) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 695,
  "typeString": "extension",
  "properties": [
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let int64): return Double(int64).hashValue case .double(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let double): return double.hashValue case .string(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let string): return string.hashValue case .blob(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let data): return data.hashValue } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "== (lhs: DatabaseValue, rhs: DatabaseValue) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 696,
  "typeString": "extension",
  "methods": [
    {
  "name": "losslessConvert<T>(sql: String? = nil, arguments: StatementArguments? = nil) -> T where T : DatabaseValueConvertible",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "losslessConvert<T>(sql: String? = nil, arguments: StatementArguments? = nil) -> T? where T : DatabaseValueConvertible",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 697,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> DatabaseValue?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 698,
  "typeString": "extension",
  "properties": [
    {
  "name": "var sqlExpression: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 699,
  "typeString": "extension",
  "properties": [
    {
  "name": "var negated: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let int64): return (int64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let double): return (double",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "expressionSQL(_ context: inout SQLGenerationContext) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "qualifiedExpression(with alias: TableAlias) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "resolvedExpression(inContext context: [TableAlias: PersistenceContainer]) -> SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 700,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let int64): return String(int64) case .double(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let double): return String(double) case .string(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let string): return String(reflecting: string) case .blob(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let data): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 702,
  "typeString": "extension",
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 706,
  "typeString": "extension",
  "methods": [
    {
  "name": "losslessConvert(sqliteStatement: SQLiteStatement, index: Int32) -> Self?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "losslessConvert(sqliteStatement: SQLiteStatement, index: Int32) -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 707,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> ColumnCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 708,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> ColumnCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 709,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> ColumnCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne<R: FetchRequest>(_ db: Database, _ request: R) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 710,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> ColumnCursor<RowDecoder>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [RowDecoder]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database) throws -> RowDecoder?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 711,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> NullableColumnCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 712,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> NullableColumnCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 713,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> NullableColumnCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 714,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> NullableColumnCursor<RowDecoder._Wrapped>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [RowDecoder._Wrapped?]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 716,
  "typeString": "extension",
  "methods": [
    {
  "name": "checkpoint(_ kind: Database.CheckpointMode = .passive) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 717,
  "typeString": "extension",
  "methods": [
    {
  "name": "releaseMemory()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "setupMemoryManagement(in application: UIApplication)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "applicationDidEnterBackground(_ notification: NSNotification)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "applicationDidReceiveMemoryWarning(_ notification: NSNotification)",
  "type": "instance",
  "accessLevel": "private"
}
  ]
},{
  "id": 718,
  "typeString": "extension",
  "methods": [
    {
  "name": "change(passphrase: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 719,
  "typeString": "extension",
  "properties": [
    {
  "name": "var currentReader: SerializedDatabase?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var readers: [SerializedDatabase]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "read<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantRead<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "readFromCurrentState(_ block: @escaping (Database) -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "write<T>(_ block: (Database) throws -> T) throws -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeWithoutTransaction<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "writeInTransaction(_ kind: Database.TransactionKind? = nil, _ block: (Database) throws -> Database.TransactionCompletion) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "unsafeReentrantWrite<T>(_ block: (Database) throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    690
  ]
},{
  "id": 720,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeSnapshot() throws -> DatabaseSnapshot",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 724,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 725,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sql",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let arguments",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let message",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 726,
  "typeString": "extension",
  "properties": [
    {
  "name": "var errorDomain: String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var errorCode: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var errorUserInfo: [String : Any]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 734,
  "typeString": "extension",
  "methods": [
    {
  "name": "clearSchemaCache()",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "tableExists(_ tableName: String) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "isSQLiteInternalTable(_ tableName: String) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "isGRDBInternalTable(_ tableName: String) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "viewExists(_ viewName: String) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "triggerExists(_ triggerName: String) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "primaryKey(_ tableName: String) throws -> PrimaryKeyInfo",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "indexes(on tableName: String) throws -> [IndexInfo]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "table<T: Sequence>(_ tableName: String, hasUniqueKey columns: T) throws -> Bool where T.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "foreignKeys(on tableName: String) throws -> [ForeignKeyInfo]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "canonicalTableName(_ tableName: String) throws -> String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "schema() throws -> SchemaInfo",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 735,
  "typeString": "extension",
  "methods": [
    {
  "name": "columns(in tableName: String) throws -> [ColumnInfo]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "columnsForUniqueKey<T: Sequence>(_ columns: T, in tableName: String) throws -> [String]? where T.Iterator.Element == String",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 736,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Bool?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 737,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Int?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 738,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Int8?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 739,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Int16?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 740,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Int32?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 741,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Int64?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 742,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> UInt?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 743,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> UInt8?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 744,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> UInt16?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 745,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> UInt32?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 746,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> UInt64?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 747,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Double?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 748,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Float?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 749,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> String?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 750,
  "typeString": "extension",
  "properties": [
    {
  "name": "let capitalize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lowercase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let uppercase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 751,
  "typeString": "extension",
  "properties": [
    {
  "name": "let localizedCapitalize",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let localizedLowercase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let localizedUppercase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let string",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 752,
  "typeString": "extension",
  "properties": [
    {
  "name": "let unicodeCompare",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let caseInsensitiveCompare",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let localizedCaseInsensitiveCompare",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let localizedCompare",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let localizedStandardCompare",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 753,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 756,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var dbValue: DatabaseValue!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let encoder",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 757,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 760,
  "typeString": "extension",
  "methods": [
    {
  "name": "fromDatabaseValue(_ databaseValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 761,
  "typeString": "extension",
  "methods": [
    {
  "name": "fromDatabaseValue(_ databaseValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 762,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> CGFloat?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 763,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 764,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 765,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Date?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init?(databaseDateComponents: DatabaseDateComponents)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init?(julianDay: Double)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 766,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    703
  ]
},{
  "id": 767,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 768,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Data?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "init(sqliteStatement: SQLiteStatement, index: Int32)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907,
    703
  ]
},{
  "id": 769,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 770,
  "typeString": "extension",
  "methods": [
    {
  "name": "fromDatabaseValue(_ databaseValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 771,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 772,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var uuidBytes",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 773,
  "typeString": "extension",
  "protocols": [
    907
  ]
},{
  "id": 776,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 777,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 778,
  "typeString": "extension",
  "protocols": [
    907
  ]
},{
  "id": 781,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let decimal",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let uint",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let uint64",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let objCType: fatalError() } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 802,
  "typeString": "extension",
  "methods": [
    {
  "name": "add(transactionObserver: TransactionObserver, extent: TransactionObservationExtent = .observerLifetime)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "afterNextTransactionCommit(_ closure: @escaping (Database) -> ())",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 803,
  "typeString": "extension",
  "methods": [
    {
  "name": "databaseWillCommit() throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseWillChange(with event: DatabasePreUpdateEvent)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "stopObservingDatabaseChangesUntilNextTransaction()",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 804,
  "typeString": "extension",
  "properties": [
    {
  "name": "var tableName: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let tableName): return tableName case .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName): return tableName case .update(tableName:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableName, columnNames: _): return tableName } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 805,
  "typeString": "extension",
  "methods": [
    {
  "name": "send(to observer: TransactionObservation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchesKind(_ databaseEventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    789
  ]
},{
  "id": 806,
  "typeString": "extension",
  "methods": [
    {
  "name": "send(to observer: TransactionObservation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "matchesKind(_ databaseEventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    789
  ]
},{
  "id": 817,
  "typeString": "extension",
  "methods": [
    {
  "name": "openConnection(path: String, flags: Int32) throws -> SQLiteConnection",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "activateExtendedCodes(_ sqliteConnection: SQLiteConnection) throws",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "validateSQLCipher(_ sqliteConnection: SQLiteConnection) throws",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "set(passphrase: String, forConnection sqliteConnection: SQLiteConnection) throws",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "validateDatabaseFormat(_ sqliteConnection: SQLiteConnection) throws",
  "type": "type",
  "accessLevel": "private"
}
  ]
},{
  "id": 818,
  "typeString": "extension",
  "methods": [
    {
  "name": "setup() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTrace()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupForeignKeys() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupBusyMode()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupDefaultFunctions()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupDefaultCollations()",
  "type": "instance",
  "accessLevel": "private"
}
  ]
},{
  "id": 819,
  "typeString": "extension",
  "methods": [
    {
  "name": "close()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "closeConnection(_ sqliteConnection: SQLiteConnection)",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "close_v2(connection sqliteConnection: SQLiteConnection)",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "close_v2(connection sqliteConnection: SQLiteConnection)",
  "type": "type",
  "accessLevel": "private"
}
  ]
},{
  "id": 820,
  "typeString": "extension",
  "methods": [
    {
  "name": "add(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 821,
  "typeString": "extension",
  "methods": [
    {
  "name": "add(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 822,
  "typeString": "extension",
  "methods": [
    {
  "name": "readOnly<T>(_ block: () throws -> T) rethrows -> T",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 823,
  "typeString": "extension",
  "methods": [
    {
  "name": "inTransaction(_ kind: TransactionKind? = nil, _ block: () throws -> TransactionCompletion) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "inSavepoint(_ block: () throws -> TransactionCompletion) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "beginTransaction(_ kind: TransactionKind? = nil) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "rollback() throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "commit() throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 824,
  "typeString": "extension",
  "methods": [
    {
  "name": "releaseMemory()",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 825,
  "typeString": "extension",
  "methods": [
    {
  "name": "backup(from dbFrom: Database, to dbDest: Database, afterBackupInit: (() -> ())? = nil, afterBackupStep: (() -> ())? = nil) throws",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 826,
  "typeString": "extension",
  "methods": [
    {
  "name": "change(passphrase: String) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 827,
  "typeString": "extension",
  "properties": [
    {
  "name": "let rawValue: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let binary",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let nocase",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let rtrim",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let rawValue: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let text",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let integer",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let double",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let numeric",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let boolean",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let blob",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let date",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let datetime",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "init(rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(_ rawValue: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 828,
  "typeString": "extension",
  "properties": [
    {
  "name": "var SQLiteOpenFlags: Int32",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 831,
  "typeString": "extension",
  "methods": [
    {
  "name": "isModified(byEventsOfKind eventKind: DatabaseEventKind) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "isModified(by event: DatabaseEvent) -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 832,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: DatabaseRegion, rhs: DatabaseRegion) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 833,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let tableRegions",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var desc",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columns",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let rowIds",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 844,
  "typeString": "extension",
  "methods": [
    {
  "name": "init<C: Cursor>(_ cursor: C) throws where C.Element == Element",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 845,
  "typeString": "extension",
  "methods": [
    {
  "name": "flatMap<SegmentOfResult: Cursor>(_ transform: @escaping (Iterator.Element) throws -> SegmentOfResult) -> FlattenCursor<MapCursor<AnyCursor<Iterator.Element>, SegmentOfResult>>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 846,
  "typeString": "extension",
  "methods": [
    {
  "name": "init<C: Cursor>(_ cursor: C) throws where C.Element == Element",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 847,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(where predicate: (Element) throws -> Bool) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "enumerated() -> EnumeratedCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filter(_ isIncluded: @escaping (Element) throws -> Bool) -> FilterCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "first(where predicate: (Element) throws -> Bool) throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "compactMap<ElementOfResult>(_ transform: @escaping (Element) throws -> ElementOfResult?) -> MapCursor<FilterCursor<MapCursor<Self, ElementOfResult?>>, ElementOfResult>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<ElementOfResult>(_ transform: @escaping (Element) throws -> ElementOfResult?) -> MapCursor<FilterCursor<MapCursor<Self, ElementOfResult?>>, ElementOfResult>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "drop(while predicate: @escaping (Element) throws -> Bool) -> DropWhileCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dropFirst(_ n: Int) -> DropFirstCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dropFirst() -> DropFirstCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dropLast(_ n: Int) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dropLast() throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<SegmentOfResult: Sequence>(_ transform: @escaping (Element) throws -> SegmentOfResult) -> FlattenCursor<MapCursor<Self, AnyCursor<SegmentOfResult.Element>>>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "flatMap<SegmentOfResult: Cursor>(_ transform: @escaping (Element) throws -> SegmentOfResult) -> FlattenCursor<MapCursor<Self, SegmentOfResult>>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "forEach(_ body: (Element) throws -> Void) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "map<T>(_ transform: @escaping (Element) throws -> T) -> MapCursor<Self, T>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max(by areInIncreasingOrder: (Element, Element) throws -> Bool) throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min(by areInIncreasingOrder: (Element, Element) throws -> Bool) throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "prefix(_ maxLength: Int) -> PrefixCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "prefix(while predicate: @escaping (Element) throws -> Bool) -> PrefixWhileCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "reduce<Result>( _ initialResult: Result, _ nextPartialResult: (Result, Element) throws -> Result) throws -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "reduce<Result>( into initialResult: Result, _ updateAccumulatingResult: (inout Result, Element) throws -> Void) throws -> Result",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "suffix(_ maxLength: Int) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 848,
  "typeString": "extension",
  "methods": [
    {
  "name": "contains(_ element: Element) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 849,
  "typeString": "extension",
  "methods": [
    {
  "name": "max() throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "min() throws -> Element?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 850,
  "typeString": "extension",
  "methods": [
    {
  "name": "joined() -> FlattenCursor<Self>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 851,
  "typeString": "extension",
  "methods": [
    {
  "name": "joined() -> FlattenCursor<MapCursor<Self, AnyCursor<Element.Element>>>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 852,
  "typeString": "extension",
  "methods": [
    {
  "name": "joined(separator: String = ) throws -> String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 863,
  "typeString": "extension",
  "properties": [
    {
  "name": "var columnNames: LazyMapCollection<Row, String>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "hasColumn(_ columnName: String) -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 864,
  "typeString": "extension",
  "properties": [
    {
  "name": "var containsNonNullValue: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let sqliteStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sqliteStatement",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hasNull(atIndex index: Int) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dataNoCopy(atIndex index: Int) -> Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dataNoCopy(named columnName: String) -> Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "dataNoCopy(_ column: ColumnExpression) -> Data?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 865,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValues: LazyMapCollection<Row, DatabaseValue>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 866,
  "typeString": "extension",
  "properties": [
    {
  "name": "let scopedRow",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scopedRow",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 867,
  "typeString": "extension",
  "properties": [
    {
  "name": "var scopes: ScopesView",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var scopesTree: ScopesTreeView",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var unscoped: Row",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var unadapted: Row",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 868,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> RowCursor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Row]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Row?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 869,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> RowCursor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Row]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Row?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 870,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> RowCursor",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Row]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne<R: FetchRequest>(_ db: Database, _ request: R) throws -> Row?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 871,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> RowCursor",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [Row]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database) throws -> Row?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 872,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(dictionaryLiteral elements: (String, DatabaseValueConvertible?)...)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 873,
  "typeString": "extension",
  "properties": [
    {
  "name": "var startIndex: RowIndex",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: RowIndex",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let index",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 874,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Row, rhs: Row) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 875,
  "typeString": "extension",
  "properties": [
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 876,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: RowIndex, rhs: RowIndex) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "< (lhs: RowIndex, rhs: RowIndex) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 877,
  "typeString": "extension",
  "methods": [
    {
  "name": "distance(to other: RowIndex) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "advanced(by n: Int) -> RowIndex",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 878,
  "typeString": "extension",
  "properties": [
    {
  "name": "let row: Row",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let scopes: [String: LayoutedRowAdapter]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var names: Dictionary<String, LayoutedRowAdapter>.Keys",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var startIndex: Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let adapter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "index(after i: Index) -> Index",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(row: Row, scopes: [String: LayoutedRowAdapter])",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 879,
  "typeString": "extension",
  "properties": [
    {
  "name": "let scopes: ScopesView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var names: Set<String>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var names",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fifo",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scope",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 880,
  "typeString": "extension",
  "properties": [
    {
  "name": "var scopes: Row.ScopesView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "copiedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unscopedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "unadaptedRow(_ row: Row) -> Row",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "hasNull(atUncheckedIndex index:Int) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(atUncheckedIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(atUncheckedIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fastValue<Value: DatabaseValueConvertible & StatementColumnConvertible>(atUncheckedIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 883,
  "typeString": "extension",
  "methods": [
    {
  "name": "add(transactionObserver: TransactionObserver, extent: Database.TransactionObservationExtent = .observerLifetime)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "remove(transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "erase() throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "vacuum() throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 891,
  "typeString": "extension",
  "properties": [
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: DatabaseFunction, rhs: DatabaseFunction) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 901,
  "typeString": "extension",
  "methods": [
    {
  "name": "prepare(sql: String, prepFlags: Int32, in database: Database) throws -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 902,
  "typeString": "extension",
  "protocols": [
    894
  ]
},{
  "id": 903,
  "typeString": "extension",
  "protocols": [
    894
  ]
},{
  "id": 904,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(arrayLiteral elements: DatabaseValueConvertible?...)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 905,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(dictionaryLiteral elements: (String, DatabaseValueConvertible?)...)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 906,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let valuesDescriptions",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let namedValuesDescriptions",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 910,
  "typeString": "extension",
  "properties": [
    {
  "name": "var sqlExpression: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 911,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> DatabaseValueCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 912,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> DatabaseValueCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 913,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> DatabaseValueCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne<R: FetchRequest>(_ db: Database, _ request: R) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 914,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> DatabaseValueCursor<RowDecoder>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [RowDecoder]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database) throws -> RowDecoder?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 915,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> NullableDatabaseValueCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 916,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> NullableDatabaseValueCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 917,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> NullableDatabaseValueCursor<Wrapped>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Wrapped?]",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 918,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> NullableDatabaseValueCursor<RowDecoder._Wrapped>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [RowDecoder._Wrapped?]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 920,
  "typeString": "extension",
  "properties": [
    {
  "name": "var hashValue: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: DatabaseCollation, rhs: DatabaseCollation) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1461
  ]
},{
  "id": 926,
  "typeString": "extension",
  "methods": [
    {
  "name": "encode(to container: inout PersistenceContainer)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 930,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(row: Row)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 933,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> RecordCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 934,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> RecordCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 935,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<R: FetchRequest>(_ db: Database, _ request: R) throws -> RecordCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<R: FetchRequest>(_ db: Database, _ request: R) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne<R: FetchRequest>(_ db: Database, _ request: R) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 936,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> RecordCursor<RowDecoder>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [RowDecoder]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database) throws -> RowDecoder?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 943,
  "typeString": "extension",
  "methods": [
    {
  "name": "init( _ databaseWriter: DatabaseWriter, sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil, queue: DispatchQueue = .main) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<Request>( _ databaseWriter: DatabaseWriter, request: Request, queue: DispatchQueue = .main) throws where Request: FetchRequest, Request.RowDecoder == Record",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 944,
  "typeString": "extension",
  "properties": [
    {
  "name": "var sections: [FetchedRecordsSectionInfo<Record>]",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "record(at indexPath: IndexPath) -> Record",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 945,
  "typeString": "extension",
  "methods": [
    {
  "name": "indexPath(for record: Record) -> IndexPath?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 946,
  "typeString": "extension",
  "properties": [
    {
  "name": "var record: T",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item, indexPath: _): return item.record case .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item, indexPath: _): return item.record case .move(item:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item, indexPath: _, newIndexPath: _, changes: _): return item.record case .update(item:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item, indexPath: _, changes: _): return item.record } }",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fetchedRecordChange: FetchedRecordChange",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath): return .insertion(indexPath: indexPath) case .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath): return .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath, newIndexPath:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newIndexPath, changes:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return .move(indexPath: indexPath, newIndexPath: newIndexPath, changes: changes) case .update(item: _, indexPath:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath, changes:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return .update(indexPath: indexPath, changes: changes) } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 947,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath): return case .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath): return case .move(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newIndexPath, changes:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return case .update(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let item,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 948,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let indexPath): return case .de",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath): return case .move(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newIndexPath, changes:",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return case .update(",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let indexPath,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changes): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 950,
  "typeString": "extension",
  "properties": [
    {
  "name": "var defaultDatabaseTableName: String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let typeName",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var databaseTableName: String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var databaseSelection: [SQLSelectable]",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "initial = typeName.replacingOccurrences(of: , options: [.regularExpression]) switch initial.count",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 951,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCount(_ db: Database) throws -> Int",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 952,
  "typeString": "extension",
  "methods": [
    {
  "name": "selectionSQL(alias: String? = nil) -> String",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "numberOfSelectedColumns(_ db: Database) throws -> Int",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 964,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let record): return } }",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 965,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(_ record: MutablePersistableRecord)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ container: PersistenceContainer)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 966,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseDictionary: [String: DatabaseValue]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 967,
  "typeString": "extension",
  "properties": [
    {
  "name": "var persistenceConflictPolicy: PersistenceConflictPolicy",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "insert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(_ db: Database, columns: Set<String>) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "update<Sequence: Swift.Sequence>(_ db: Database, columns: Sequence) throws where Sequence.Element: ColumnExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "update<Sequence: Swift.Sequence>(_ db: Database, columns: Sequence) throws where Sequence.Element == String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "update(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "updateChanges(_ db: Database, from record: MutablePersistableRecord) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "save(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "delete(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "exists(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseEquals(_ record: Self) -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseChanges(from record: MutablePersistableRecord) -> [String: DatabaseValue]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "databaseChangesIterator(from record: MutablePersistableRecord) -> AnyIterator<(String, DatabaseValue)>",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "canUpdate(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "performInsert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performUpdate(_ db: Database, columns: Set<String>) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "performSave(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDelete(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "performExists(_ db: Database) throws -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 968,
  "typeString": "extension",
  "methods": [
    {
  "name": "deleteAll(_ db: Database) throws -> Int",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 969,
  "typeString": "extension",
  "methods": [
    {
  "name": "deleteAll<Sequence: Swift.Sequence>(_ db: Database, keys: Sequence) throws -> Int where Sequence.Element: DatabaseValueConvertible",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "deleteOne<PrimaryKeyType: DatabaseValueConvertible>(_ db: Database, key: PrimaryKeyType?) throws -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 970,
  "typeString": "extension",
  "methods": [
    {
  "name": "deleteAll(_ db: Database, keys: [[String: DatabaseValueConvertible?]]) throws -> Int",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "deleteOne(_ db: Database, key: [String: DatabaseValueConvertible?]) throws -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 971,
  "typeString": "extension",
  "methods": [
    {
  "name": "didInsert(with rowID: Int64, for column: String?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "insert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "save(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "performInsert(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "performSave(_ db: Database) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 972,
  "typeString": "extension",
  "properties": [
    {
  "name": "let sqlCache",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var sql: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sql",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let columnsSQL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let valuesSQL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sql: String switch onConflict",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 973,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database) throws -> RecordCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 974,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor<Sequence: Swift.Sequence>(_ db: Database, keys: Sequence) throws -> RecordCursor<Self> where Sequence.Element: DatabaseValueConvertible",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll<Sequence: Swift.Sequence>(_ db: Database, keys: Sequence) throws -> [Self] where Sequence.Element: DatabaseValueConvertible",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne<PrimaryKeyType: DatabaseValueConvertible>(_ db: Database, key: PrimaryKeyType?) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 975,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchCursor(_ db: Database, keys: [[String: DatabaseValueConvertible?]]) throws -> RecordCursor<Self>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchAll(_ db: Database, keys: [[String: DatabaseValueConvertible?]]) throws -> [Self]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetchOne(_ db: Database, key: [String: DatabaseValueConvertible?]?) throws -> Self?",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 976,
  "typeString": "extension",
  "methods": [
    {
  "name": "bound<T>(to type: T.Type) -> AnyFetchRequest<T>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 977,
  "typeString": "extension",
  "properties": [
    {
  "name": "var code: Int32",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 978,
  "typeString": "extension",
  "methods": [
    {
  "name": "writeInTransaction(_ kind: Database.TransactionKind? = nil, _ block: (Database) throws -> Database.TransactionCompletion) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 979,
  "typeString": "extension",
  "methods": [
    {
  "name": "value() -> Any",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 982,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch<Request: FetchRequest>(_ db: Database, _ request: Request) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 983,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch<Request: FetchRequest>(_ db: Database, _ request: Request) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 984,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch<Request: FetchRequest>(_ db: Database, _ request: Request) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 985,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ db: Database) -> Any",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 986,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ statement: SelectStatement, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch<Request: FetchRequest>(_ db: Database, _ request: Request) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch(_ db: Database, _ sql: String, arguments: StatementArguments? = nil, adapter: RowAdapter? = nil) -> Any",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 987,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetch(_ db: Database) -> Any",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch<Sequence: Swift.Sequence>(_ db: Database, keys: Sequence) -> Any where Sequence.Iterator.Element: DatabaseValueConvertible",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "fetch(_ db: Database, keys: [[String: DatabaseValueConvertible?]]) -> Any",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 988,
  "typeString": "extension",
  "methods": [
    {
  "name": "value(atIndex index: Int) -> DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(atIndex index: Int) -> Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(atIndex index: Int) -> Value",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(named name: String) -> DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(named name: String) -> Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(named name: String) -> Value",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value(_ column: Column) -> DatabaseValueConvertible?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(_ column: Column) -> Value?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "value<Value: DatabaseValueConvertible>(_ column: Column) -> Value",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 989,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupMemoryManagement(application: UIApplication)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "changePassphrase(_ passphrase: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 990,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupMemoryManagement(application: UIApplication)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "changePassphrase(_ passphrase: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 991,
  "typeString": "extension",
  "methods": [
    {
  "name": "addFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 992,
  "typeString": "extension",
  "methods": [
    {
  "name": "addFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 993,
  "typeString": "extension",
  "methods": [
    {
  "name": "addFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 994,
  "typeString": "extension",
  "methods": [
    {
  "name": "addFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeFunction(_ function: DatabaseFunction)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 995,
  "typeString": "extension",
  "properties": [
    {
  "name": "let capitalizedString",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let lowercaseString",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let uppercaseString",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 996,
  "typeString": "extension",
  "properties": [
    {
  "name": "let localizedCapitalizedString",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let localizedLowercaseString",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let localizedUppercaseString",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 997,
  "typeString": "extension",
  "methods": [
    {
  "name": "addCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 998,
  "typeString": "extension",
  "methods": [
    {
  "name": "addCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 999,
  "typeString": "extension",
  "methods": [
    {
  "name": "addCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1000,
  "typeString": "extension",
  "methods": [
    {
  "name": "addCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeCollation(_ collation: DatabaseCollation)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1001,
  "typeString": "extension",
  "methods": [
    {
  "name": "selectStatement(_ sql: String) throws -> SelectStatement",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateStatement(_ sql: String) throws -> UpdateStatement",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1002,
  "typeString": "extension",
  "methods": [
    {
  "name": "validateArguments(_ arguments: StatementArguments) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1003,
  "typeString": "extension",
  "methods": [
    {
  "name": "addTransactionObserver(_ transactionObserver: TransactionObserver, forDatabaseEvents filter: ((DatabaseEventKind) -> Bool)? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeTransactionObserver(_ transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1004,
  "typeString": "extension",
  "methods": [
    {
  "name": "addTransactionObserver(_ transactionObserver: TransactionObserver, forDatabaseEvents filter: ((DatabaseEventKind) -> Bool)? = nil)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeTransactionObserver(_ transactionObserver: TransactionObserver)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1005,
  "typeString": "extension",
  "properties": [
    {
  "name": "var capitalizedString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var lowercaseString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var uppercaseString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1006,
  "typeString": "extension",
  "properties": [
    {
  "name": "var localizedCapitalizedString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var localizedLowercaseString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var localizedUppercaseString: SQLExpression",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1008,
  "typeString": "extension",
  "methods": [
    {
  "name": "columnCount(in tableName: String) throws -> Int",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1009,
  "typeString": "extension",
  "properties": [
    {
  "name": "var selectionInfo: DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var fetchedRegion: DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1010,
  "typeString": "extension",
  "methods": [
    {
  "name": "impacts(_ region: DatabaseRegion) -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1011,
  "typeString": "extension",
  "properties": [
    {
  "name": "var hasPersistentChangedValues: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var persistentChangedValues: [String: DatabaseValue?]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1012,
  "typeString": "extension",
  "methods": [
    {
  "name": "databaseEqual(_ record: Self) -> Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1013,
  "typeString": "extension",
  "properties": [
    {
  "name": "var scopeNames: Set<String>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scoped(on name: String) -> Row?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1014,
  "typeString": "extension",
  "methods": [
    {
  "name": "fetchedRegion(_ db: Database) throws -> DatabaseRegion",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1017,
  "typeString": "extension",
  "methods": [
    {
  "name": "increment() -> T",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1021,
  "typeString": "extension",
  "properties": [
    {
  "name": "var quotedDatabaseIdentifier: String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1022,
  "typeString": "extension",
  "protocols": [
    1020
  ]
},{
  "id": 1023,
  "typeString": "extension",
  "methods": [
    {
  "name": "removeFirst(_ predicate: (Element) throws -> Bool) rethrows",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1025,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeFTS5Pattern(rawPattern: String, forTable table: String) throws -> FTS5Pattern",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1026,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> FTS5Pattern?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 1029,
  "typeString": "extension",
  "methods": [
    {
  "name": "tokenizerDescriptor(arguments: [String] = []) -> FTS5TokenizerDescriptor",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1030,
  "typeString": "extension",
  "properties": [
    {
  "name": "let db: Database",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let constructor: (Database, [String], UnsafeMutablePointer<OpaquePointer?>?) -> Int32 }",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "add<Tokenizer: FTS5CustomTokenizer>(tokenizer: Tokenizer.Type)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(db: Database, constructor: @escaping (Database, [String], UnsafeMutablePointer<OpaquePointer?>?) -> Int32)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1031,
  "typeString": "extension",
  "methods": [
    {
  "name": "add<Tokenizer: FTS5CustomTokenizer>(tokenizer: Tokenizer.Type)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1032,
  "typeString": "extension",
  "methods": [
    {
  "name": "add<Tokenizer: FTS5CustomTokenizer>(tokenizer: Tokenizer.Type)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1035,
  "typeString": "extension",
  "properties": [
    {
  "name": "var databaseValue: DatabaseValue",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "fromDatabaseValue(_ dbValue: DatabaseValue) -> FTS3Pattern?",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    907
  ]
},{
  "id": 1040,
  "typeString": "extension",
  "methods": [
    {
  "name": "tokenize(_ string: String, for tokenization: FTS5Tokenization) throws -> [(String, FTS5TokenFlags)]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "nonSynonymTokens(in string: String, for tokenization: FTS5Tokenization) throws -> [String]",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1041,
  "typeString": "extension",
  "properties": [
    {
  "name": "let xTokenizer: fts5_tokenizer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tokenizerPointer: OpaquePointer deinit",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let delete",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "convertArguments<Result>(_ array: inout ContiguousArray<UnsafePointer<Int8>>, _ car: String, _ cdr: [String], _ body: (ContiguousArray<UnsafePointer<Int8>>) -> Result) -> Result",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tokenize(context: UnsafeMutableRawPointer?, tokenization: FTS5Tokenization, pText: UnsafePointer<Int8>?, nText: Int32, tokenCallback: @escaping FTS5TokenCallback) -> Int32",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeTokenizer(_ descriptor: FTS5TokenizerDescriptor) throws -> FTS5Tokenizer",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(xTokenizer: fts5_tokenizer, contextPointer: UnsafeMutableRawPointer?, arguments: [String]) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1046,
  "typeString": "extension",
  "methods": [
    {
  "name": "dropFTS4SynchronizationTriggers(forTable tableName: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1052,
  "typeString": "extension",
  "properties": [
    {
  "name": "let rank",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1053,
  "typeString": "extension",
  "methods": [
    {
  "name": "dropFTS5SynchronizationTriggers(forTable tableName: String) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1057,
  "typeString": "extension",
  "methods": [
    {
  "name": "tokenize(context: UnsafeMutableRawPointer?, tokenization: FTS5Tokenization, pText: UnsafePointer<Int8>?, nText: Int32, tokenCallback: @escaping FTS5TokenCallback) -> Int32",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1065,
  "typeString": "extension",
  "methods": [
    {
  "name": "expandKeyInv(_ key: Key, variant: Variant) -> Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "expandKey(_ key: Key, variant _: Variant) -> Array<Array<UInt32>>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "B0(_ x: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "B1(_ x: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "B2(_ x: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "B3(_ x: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "F1(_ x0: UInt32, _ x1: UInt32, _ x2: UInt32, _ x3: UInt32) -> UInt32",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "calculateSBox() -> (sBox: Array<UInt32>, invSBox: Array<UInt32>)",
  "type": "instance",
  "accessLevel": "private"
}
  ]
},{
  "id": 1066,
  "typeString": "extension",
  "methods": [
    {
  "name": "encrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1074
  ]
},{
  "id": 1068,
  "typeString": "extension",
  "methods": [
    {
  "name": "init<T: Collection>(bytes: T) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<T: Collection>(bytes: T, fromIndex index: T.Index) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1070,
  "typeString": "extension",
  "methods": [
    {
  "name": "randomIV(_ blockSize: Int) -> Array<UInt8>",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1075,
  "typeString": "extension",
  "methods": [
    {
  "name": "encrypt(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(_ bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1078,
  "typeString": "extension",
  "methods": [
    {
  "name": "calculateAuthenticationTag(authenticator: Authenticator, cipherText: Array<UInt8>, authenticationHeader: Array<UInt8>) throws -> Array<UInt8>",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1079,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(bits: [Bit])",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1080,
  "typeString": "extension",
  "methods": [
    {
  "name": "bytes(totalBytes: Int = MemoryLayout<Self>.size) -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1081,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeEncryptor() throws -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "makeDecryptor() throws -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1069
  ]
},{
  "id": 1083,
  "typeString": "extension",
  "methods": [
    {
  "name": "inverted() -> Bit",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1089,
  "typeString": "extension",
  "methods": [
    {
  "name": "init<T: Collection>(bytes: T) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<T: Collection>(bytes: T, fromIndex index: T.Index) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1090,
  "typeString": "extension",
  "methods": [
    {
  "name": "toUInt32Array() -> Array<UInt32>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "toUInt64Array() -> Array<UInt64>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1092,
  "typeString": "extension",
  "protocols": [
    1091
  ]
},{
  "id": 1093,
  "typeString": "extension",
  "methods": [
    {
  "name": "init<T: Collection>(bytes: T) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init<T: Collection>(bytes: T, fromIndex index: T.Index) where T.Element == UInt8, T.Index == Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1097,
  "typeString": "extension",
  "methods": [
    {
  "name": "decryptBase64ToString(cipher: Cipher) throws -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decryptBase64(cipher: Cipher) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1098,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(key: String, iv: String, padding: Padding = .pkcs7) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1099,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(key: String, variant: HMAC.Variant = .md5) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1100,
  "typeString": "extension",
  "methods": [
    {
  "name": "checksum() -> UInt16",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "md5() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha1() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha224() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha256() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha384() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha512() -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha3(_ variant: SHA3.Variant) -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32(seed: UInt32? = nil, reflect: Bool = true) -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32c(seed: UInt32? = nil, reflect: Bool = true) -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc16(seed: UInt16? = nil) -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encrypt(cipher: Cipher) throws -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(cipher: Cipher) throws -> Data",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "authenticate(with authenticator: Authenticator) throws -> Data",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1101,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bytes: Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "toHexString() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(hex: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1102,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(key: String, iv: String) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1103,
  "typeString": "extension",
  "methods": [
    {
  "name": "toBase64() -> String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(base64: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1104,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(key: String, iv: String, padding: Padding = .pkcs7) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1105,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(key: String) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(key: String, iv: String) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1107,
  "typeString": "extension",
  "protocols": [
    1106
  ]
},{
  "id": 1108,
  "typeString": "extension",
  "methods": [
    {
  "name": "with(value: UInt64) -> UInt8",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "with(value: UInt32) -> UInt8",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "with(value: UInt16) -> UInt8",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1109,
  "typeString": "extension",
  "methods": [
    {
  "name": "bits() -> [Bit]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "bits() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(bits: [Bit])",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1111,
  "typeString": "extension",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1137
  ]
},{
  "id": 1113,
  "typeString": "extension",
  "methods": [
    {
  "name": "compactMap<ElementOfResult>(_ transform: (Element) throws -> ElementOfResult?) rethrows -> [ElementOfResult]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1117,
  "typeString": "extension",
  "methods": [
    {
  "name": "== <Base>(lhs: BatchedCollectionIndex<Base>, rhs: BatchedCollectionIndex<Base>) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "< <Base>(lhs: BatchedCollectionIndex<Base>, rhs: BatchedCollectionIndex<Base>) -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1470
  ]
},{
  "id": 1118,
  "typeString": "extension",
  "methods": [
    {
  "name": "batched(by size: Int) -> BatchedCollection<Self>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1120,
  "typeString": "extension",
  "properties": [
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "formIndex(after i: inout Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "index(after i: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1472
  ]
},{
  "id": 1121,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(arrayLiteral elements: UInt8...)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1554
  ]
},{
  "id": 1123,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bytes: Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "md5() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha1() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha224() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha256() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha384() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha512() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha3(_ variant: SHA3.Variant) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32(seed: UInt32? = nil, reflect: Bool = true) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32c(seed: UInt32? = nil, reflect: Bool = true) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc16(seed: UInt16? = nil) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encrypt(cipher: Cipher) throws -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encryptToBase64(cipher: Cipher) throws -> String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "authenticate<A: Authenticator>(with authenticator: A) throws -> String",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1127,
  "typeString": "extension",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1137
  ]
},{
  "id": 1131,
  "typeString": "extension",
  "methods": [
    {
  "name": "encrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1074
  ]
},{
  "id": 1133,
  "typeString": "extension",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1137
  ]
},{
  "id": 1138,
  "typeString": "extension",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false, output: (_ bytes: Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(withBytes bytes: Array<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(withBytes bytes: Array<UInt8>, isLast: Bool = false, output: (_ bytes: Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish(withBytes bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish(withBytes bytes: Array<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish() throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish(withBytes bytes: ArraySlice<UInt8>, output: (_ bytes: Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish(withBytes bytes: Array<UInt8>, output: (_ bytes: Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "finish(output: (Array<UInt8>) -> Void) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1141,
  "typeString": "extension",
  "methods": [
    {
  "name": "encrypt<C: Collection>(_ bytes: C) throws -> Array<UInt8> where C.Element == UInt8, C.Index == Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt<C: Collection>(_ bytes: C) throws -> Array<UInt8> where C.Element == UInt8, C.Index == Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1074
  ]
},{
  "id": 1146,
  "typeString": "extension",
  "methods": [
    {
  "name": "crc32(_ message: Array<UInt8>, seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "crc32c(_ message: Array<UInt8>, seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "crc16(_ message: Array<UInt8>, seed: UInt16? = nil) -> UInt16",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1149,
  "typeString": "extension",
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1137
  ]
},{
  "id": 1158,
  "typeString": "extension",
  "properties": [
    {
  "name": "let salt: Array<UInt8>",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let iterations: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let numBlocks: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dkLen: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let prf: HMAC }",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "methods": [
    {
  "name": "calculate() throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(password: Array<UInt8>, salt: Array<UInt8>, iterations: Int = 4096 , keyLength: Int? = nil , variant: HMAC.Variant = .sha256) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1162,
  "typeString": "extension",
  "properties": [
    {
  "name": "var size: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let iterations: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let variant: Variant",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let keyLength: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let t1: Array<UInt8> }",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "calculateHash(_ bytes: Array<UInt8>) -> Array<UInt8>?",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "calculate() -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(password: Array<UInt8>, salt: Array<UInt8>, variant: Variant = .sha1, iterations: Int = 4096 , keyLength: Int? = nil ) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1197,
  "typeString": "extension",
  "methods": [
    {
  "name": "encrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(_ bytes: ArraySlice<UInt8>) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1074
  ]
},{
  "id": 1198,
  "typeString": "extension",
  "properties": [
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let chacha: ChaCha20",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = false) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(chacha: ChaCha20)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1199,
  "typeString": "extension",
  "properties": [
    {
  "name": "var accumulated",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var offset: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var offsetToRemove: Int",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let chacha: ChaCha20",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "update(withBytes bytes: ArraySlice<UInt8>, isLast: Bool = true) throws -> Array<UInt8>",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "seek(to: Int) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(chacha: ChaCha20)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1200,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeEncryptor() -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "makeDecryptor() -> Cryptor & Updatable",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1069
  ]
},{
  "id": 1201,
  "typeString": "extension",
  "properties": [
    {
  "name": "var slice: ArraySlice<Element>",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(reserveCapacity: Int)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1202,
  "typeString": "extension",
  "methods": [
    {
  "name": "toHexString() -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(hex: String)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1203,
  "typeString": "extension",
  "methods": [
    {
  "name": "chunks(size chunksize: Int) -> Array<Array<Element>>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "md5() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha1() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha224() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha256() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha384() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha512() -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha2(_ variant: SHA2.Variant) -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "sha3(_ variant: SHA3.Variant) -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32(seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc32c(seed: UInt32? = nil, reflect: Bool = true) -> UInt32",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "crc16(seed: UInt16? = nil) -> UInt16",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "encrypt(cipher: Cipher) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "decrypt(cipher: Cipher) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "authenticate<A: Authenticator>(with authenticator: A) throws -> [Element]",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1211,
  "typeString": "extension",
  "methods": [
    {
  "name": "compactMap<T>(_ fn: (Self.Iterator.Element) throws -> T?) rethrows -> [T]",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1212,
  "typeString": "extension",
  "properties": [
    {
  "name": "var defaultConfiguration: Configuration",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var syncConfiguration: SyncConfiguration?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _syncConfiguration: SyncConfiguration?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var fileURL: URL?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _path: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var inMemoryIdentifier: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var _inMemoryIdentifier: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var encryptionKey: Data?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var readOnly: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var schemaVersion: UInt64",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var migrationBlock: MigrationBlock?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var deleteRealmIfMigrationNeeded: Bool",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var shouldCompactOnLaunch: ((Int, Int) -> Bool)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var objectTypes: [Object.Type]?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var customSchema: RLMSchema?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var disableFormatUpgrade: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rlmConfiguration: RLMRealmConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let fileURL",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let inMemoryIdentifier",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let syncConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let shouldCompactOnLaunch",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "fromRLMRealmConfiguration(_ rlmConfiguration: RLMRealmConfiguration) -> Configuration",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(fileURL: URL? = URL(fileURLWithPath: RLMRealmPathForFile(), isDirectory: false), inMemoryIdentifier: String? = nil, syncConfiguration: SyncConfiguration? = nil, encryptionKey: Data? = nil, readOnly: Bool = false, schemaVersion: UInt64 = 0, migrationBlock: MigrationBlock? = nil, deleteRealmIfMigrationNeeded: Bool = false, shouldCompactOnLaunch: ((Int, Int) -> Bool)? = nil, objectTypes: [Object.Type]? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1217,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Realm, rhs: Realm) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1451
  ]
},{
  "id": 1218,
  "typeString": "extension"
},{
  "id": 1220,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Property, rhs: Property) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1451
  ]
},{
  "id": 1222,
  "typeString": "extension",
  "properties": [
    {
  "name": "let fail: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileAccess: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let filePermissionDenied: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileExists: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileNotFound: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let incompatibleLockFile: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let fileFormatUpgradeRequired: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let addressSpaceExhausted: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let schemaMismatch: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "let incompatibleSyncedFile: Code",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var code: Code",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let _nsError: NSError",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var backupConfiguration: Realm.Configuration?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(_nsError error: NSError)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1234,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_nilValue() -> Self",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1235,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "_nilValue() -> Optional",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1236,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1237,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1238,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1239,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1240,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1241,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1242,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1243,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1244,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1245,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1246,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmArray() -> RLMArray<AnyObject>",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1225
  ]
},{
  "id": 1247,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmInferWrappedType() -> Wrapped",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1229
  ]
},{
  "id": 1248,
  "typeString": "extension",
  "methods": [
    {
  "name": "min() -> Element?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "max() -> Element?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1249,
  "typeString": "extension",
  "methods": [
    {
  "name": "min() -> Element.Wrapped?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "max() -> Element.Wrapped?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1250,
  "typeString": "extension",
  "methods": [
    {
  "name": "sum() -> Element",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "average() -> Double?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1251,
  "typeString": "extension",
  "methods": [
    {
  "name": "sum() -> Element.Wrapped",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "average() -> Double?",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1252,
  "typeString": "extension",
  "methods": [
    {
  "name": "sorted(ascending: Bool = true) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1253,
  "typeString": "extension",
  "methods": [
    {
  "name": "sorted(ascending: Bool = true) -> Results<Element>",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1254,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> AnyRealmCollection",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ]
},{
  "id": 1272,
  "typeString": "extension",
  "properties": [
    {
  "name": "var shared: SyncManager",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1273,
  "typeString": "extension",
  "methods": [
    {
  "name": "clientResetInfo() -> (String, SyncError.ActionToken)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "deleteRealmUserInfo() -> SyncError.ActionToken?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1274,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(_ credentials: SyncCredentials)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1275,
  "typeString": "extension",
  "properties": [
    {
  "name": "var all: [String: SyncUser]",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var current: SyncUser?",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var errorHandler: ((SyncUser, SyncAuthError) -> Void)?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let newValue",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "logIn(with credentials: SyncCredentials, server authServerURL: URL, timeout: TimeInterval = 30, callbackQueue queue: DispatchQueue = DispatchQueue.main, onCompletion completion: @escaping UserCompletionBlock)",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "createOfferForRealm(at url: URL, accessLevel: SyncAccessLevel, expiration: Date? = nil, callback: @escaping (String?, Error?) -> Void)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "configuration(realmURL: URL? = nil, fullSynchronization: Bool = false, enableSSLValidation: Bool = true, urlPrefix: String? = nil) -> Realm.Configuration",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "configuration(realmURL: URL? = nil, fullSynchronization: Bool = false, serverValidationPolicy: ServerValidationPolicy, urlPrefix: String? = nil) -> Realm.Configuration",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1276,
  "typeString": "extension",
  "properties": [
    {
  "name": "let transferredBytes: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let transferrableBytes: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var fractionTransferred: Double",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let percentage",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isTransferComplete: Bool",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "addProgressNotification(for direction: ProgressDirection, mode: ProgressMode, block: @escaping (Progress) -> Void) -> ProgressNotificationToken?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(transferred: UInt, transferrable: UInt)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1277,
  "typeString": "extension",
  "properties": [
    {
  "name": "var syncSession: SyncSession?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "subscribe<T: Object>(to objects: T.Type, where: String, completion: @escaping (Results<T>?, Swift.Error?) -> Void)",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1278,
  "typeString": "extension",
  "protocols": [
    1225
  ]
},{
  "id": 1279,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> SyncSubscription",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1280,
  "typeString": "extension",
  "methods": [
    {
  "name": "subscribe(named subscriptionName: String? = nil, limit: Int? = nil, update: Bool = false, timeToLive: TimeInterval? = nil, includingLinkingObjects: [String] = []) -> SyncSubscription",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1281,
  "typeString": "extension",
  "properties": [
    {
  "name": "var permissions: List<Permission>",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "getPrivileges() -> RealmPrivileges",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getPrivileges(_ object: Object) -> ObjectPrivileges",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getPrivileges<T: Object>(_ cls: T.Type) -> ClassPrivileges",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getPrivileges(forClassNamed className: String) -> ClassPrivileges",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "permissions<T: Object>(forType cls: T.Type) -> List<Permission>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "permissions(forClassNamed className: String) -> List<Permission>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "subscriptions() -> Results<SyncSubscription>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "subscription(named: String) -> SyncSubscription?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1282,
  "typeString": "extension",
  "methods": [
    {
  "name": "findOrCreate(forRoleNamed roleName: String) -> Permission",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "findOrCreate(forRole role: PermissionRole) -> Permission",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1284,
  "typeString": "extension",
  "properties": [
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeIterator() -> RLMIterator<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(after: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(before: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection<Element>>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1228
  ]
},{
  "id": 1285,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> LinkingObjects",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ]
},{
  "id": 1287,
  "typeString": "extension",
  "properties": [
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let direction",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1468
  ]
},{
  "id": 1288,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: SortDescriptor, rhs: SortDescriptor) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1451
  ]
},{
  "id": 1289,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(unicodeScalarLiteral value: UnicodeScalarLiteralType)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(extendedGraphemeClusterLiteral value: ExtendedGraphemeClusterLiteralType)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(stringLiteral value: StringLiteralType)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1561
  ]
},{
  "id": 1292,
  "typeString": "extension",
  "methods": [
    {
  "name": "resolve<Confined>(_ reference: ThreadSafeReference<Confined>) -> Confined?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1297,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1298,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1299,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1300,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1301,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1302,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1303,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1304,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1305,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1306,
  "typeString": "extension",
  "protocols": [
    1294
  ]
},{
  "id": 1307,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1308,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1309,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1310,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1311,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1312,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1313,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1314,
  "typeString": "extension",
  "protocols": [
    1295
  ]
},{
  "id": 1315,
  "typeString": "extension",
  "properties": [
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeIterator() -> RLMIterator<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(after i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(before i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection<Element>>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1228
  ]
},{
  "id": 1316,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> Results",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ]
},{
  "id": 1317,
  "typeString": "extension",
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1562
  ]
},{
  "id": 1320,
  "typeString": "extension",
  "methods": [
    {
  "name": "min() -> Element?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "max() -> Element?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1321,
  "typeString": "extension",
  "methods": [
    {
  "name": "sum() -> Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "average() -> Double?",
  "type": "instance",
  "accessLevel": "public"
}
  ]
},{
  "id": 1322,
  "typeString": "extension",
  "properties": [
    {
  "name": "var startIndex: Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var endIndex: Int",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "makeIterator() -> RLMIterator<Element>",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_asNSFastEnumerator() -> Any",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection, R>(_ subrange: R, with newElements: C) where C.Iterator.Element == Element, R: RangeExpression, List<Element>.Index == R.Bound",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection>(_ subrange: Range<Int>, with newElements: C) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(after i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "index(before i: Int) -> Int",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "_observe(_ block: @escaping (RealmCollectionChange<AnyRealmCollection<Element>>) -> Void) -> NotificationToken",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1228
  ]
},{
  "id": 1323,
  "typeString": "extension",
  "methods": [
    {
  "name": "removeFirst(_ number: Int = 1)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeLast(_ number: Int = 1)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "insert<C: Collection>(contentsOf newElements: C, at i: Int) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange<R>(_ boundsExpression: R) where R: RangeExpression, List<Element>.Index == R.Bound",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange(_ bounds: Range<Int>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange(_ bounds: ClosedRange<Int>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange(_ bounds: CountableRange<Int>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange(_ bounds: CountableClosedRange<Int>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "removeSubrange(_ bounds: DefaultRandomAccessIndices<List>)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection>(_ subrange: ClosedRange<Int>, with newElements: C) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection>(_ subrange: CountableRange<Int>, with newElements: C) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection>(_ subrange: CountableClosedRange<Int>, with newElements: C) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "replaceSubrange<C: Collection>(_ subrange: DefaultRandomAccessIndices<List>, with newElements: C) where C.Iterator.Element == Element",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1563
  ]
},{
  "id": 1324,
  "typeString": "extension",
  "methods": [
    {
  "name": "removeLast()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1564
  ]
},{
  "id": 1325,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1565
  ]
},{
  "id": 1326,
  "typeString": "extension",
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1562
  ]
},{
  "id": 1327,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> List",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ]
},{
  "id": 1330,
  "typeString": "extension",
  "methods": [
    {
  "name": "unsafeCastToRLMObject() -> RLMObject",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1331,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Float",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1332,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Int8",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1333,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Int16",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1334,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Int32",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1335,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Int64",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1336,
  "typeString": "extension",
  "properties": [
    {
  "name": "var objCValue: Any",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let value",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(objCValue: Any) -> Optional",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1328
  ]
},{
  "id": 1338,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: ObjectSchema, rhs: ObjectSchema) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1451
  ]
},{
  "id": 1339,
  "typeString": "extension",
  "methods": [
    {
  "name": "convert(object: SyncCredentials) -> RLMSyncCredentials",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "convert(object: RLMSyncCredentials) -> SyncCredentials",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "convert(object: SyncConfiguration) -> RLMSyncConfiguration",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "convert(object: RLMSyncConfiguration) -> SyncConfiguration",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "convert(object: RLMSyncSubscription) -> SyncSubscription",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1341,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Schema, rhs: Schema) -> Bool",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "protocols": [
    1451
  ]
},{
  "id": 1343,
  "typeString": "extension",
  "methods": [
    {
  "name": "performMigration(for configuration: Realm.Configuration = Realm.Configuration.defaultConfiguration) throws",
  "type": "type",
  "accessLevel": "public"
}
  ]
},{
  "id": 1351,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_rlmRequireObjc() -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1352,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1353,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1354,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1355,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1356,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1357,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1358,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1359,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1360,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1361,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1362,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1363,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1364,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1365,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1366,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1367,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_rlmRequireObjc() -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1368,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "_rlmRequireObjc() -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1369,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1370,
  "typeString": "extension",
  "methods": [
    {
  "name": "_rlmProperty(_ prop: RLMProperty)",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "_rlmRequireObjc() -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1348
  ]
},{
  "id": 1371,
  "typeString": "extension",
  "properties": [
    {
  "name": "var bridged: (objectiveCValue: Any, metadata: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "bridging(from objectiveCValue: Any, with metadata: Any?) -> Self",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1329
  ]
},{
  "id": 1375,
  "typeString": "extension",
  "methods": [
    {
  "name": "className() -> String",
  "type": "type",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1376,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1377,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1378,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1379,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1380,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1381,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1382,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1383,
  "typeString": "extension",
  "protocols": [
    1372
  ]
},{
  "id": 1384,
  "typeString": "extension",
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1426
  ]
},{
  "id": 1385,
  "typeString": "extension",
  "protocols": [
    1374
  ]
},{
  "id": 1390,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    1514
  ]
},{
  "id": 1392,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1393,
  "typeString": "extension",
  "methods": [
    {
  "name": "scanEnded()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "wearableFound(wearable: Wearable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    167
  ]
},{
  "id": 1398,
  "typeString": "extension",
  "methods": [
    {
  "name": "didUpdateECG(count: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didUpdateECG(_ ecg: ECG)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    394
  ]
},{
  "id": 1410,
  "typeString": "extension",
  "methods": [
    {
  "name": "init?(hexString: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
},{
  "id": 1422,
  "typeString": "extension",
  "protocols": [
    1420
  ]
},{
  "id": 1423,
  "typeString": "extension",
  "methods": [
    {
  "name": "wait(duration: TimeInterval = 0.1, completion: @escaping (XCTestExpectation) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ]
}] 