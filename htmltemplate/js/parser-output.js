var entities = [{
  "id": 1,
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
  "name": "ElementScienceTests",
  "superClass": 15
},{
  "id": 2,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "buttonAction(sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    17
  ],
  "name": "ViewController",
  "superClass": 16
},{
  "id": 3,
  "typeString": "class",
  "properties": [
    {
  "name": "var socials",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var faces",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var canBecomeFirstResponder: Bool",
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
  "name": "showDialog(_ sender: UIBarButtonItem)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showInputDialog()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]?",
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
  "name": "FacebookViewController",
  "superClass": 18
},{
  "id": 4,
  "typeString": "class",
  "properties": [
    {
  "name": "var socials",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var twits",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var canBecomeFirstResponder: Bool",
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
  "name": "showDialog(_ sender: UIBarButtonItem)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showInputDialog()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]?",
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
  "name": "TwitterViewController",
  "superClass": 18
},{
  "id": 5,
  "typeString": "class",
  "properties": [
    {
  "name": "var twitterVC: TwitterViewController!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var facebookVC: FacebookViewController!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var instaVC: InstagramViewController!",
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
  "name": "tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    20
  ],
  "name": "TabBarViewController",
  "superClass": 19
},{
  "id": 6,
  "typeString": "struct",
  "properties": [
    {
  "name": "let twitter: [Twitter]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let facebook: [Facebook]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let instagram: [Instagram]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Social",
  "superClass": 21
},{
  "id": 7,
  "typeString": "struct",
  "properties": [
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let status: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Facebook",
  "superClass": 21
},{
  "id": 8,
  "typeString": "struct",
  "properties": [
    {
  "name": "let username: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let picture: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Instagram",
  "superClass": 21
},{
  "id": 9,
  "typeString": "struct",
  "properties": [
    {
  "name": "let username: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tweet: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Twitter",
  "superClass": 21
},{
  "id": 10,
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
  "protocols": [
    23
  ],
  "name": "AppDelegate",
  "superClass": 22
},{
  "id": 11,
  "typeString": "class",
  "properties": [
    {
  "name": "var stackArray",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var size: Int",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "push(vc: UIViewController)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pop() -> UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "peek() -> UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Stack"
},{
  "id": 12,
  "typeString": "class",
  "properties": [
    {
  "name": "let expandDur: CFTimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let contractDur: CFTimeInterval",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let stack",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "var isAnimating",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "var circleOrigin: CGPoint",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var shouldUnwind: Bool",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "perform()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "animationDidStart(_ anim: CAAnimation)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "animationDidStop(_ anim: CAAnimation, finished flag: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scalingAnimation(destinationPath: CGPath) -> CABasicAnimation",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startAndEndPaths(shouldUnwind: Bool) -> (start: CGPath, end: CGPath)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(identifier: String?, source: UIViewController, destination: UIViewController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    25
  ],
  "name": "OHCircleSegue",
  "superClass": 24,
  "containedEntities": [
    11
  ]
},{
  "id": 13,
  "typeString": "class",
  "properties": [
    {
  "name": "var socials",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var instas",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var canBecomeFirstResponder: Bool",
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
  "name": "showDialog(_ sender: UIBarButtonItem)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showInputDialog()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]?",
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
  "name": "InstagramViewController",
  "superClass": 18
},{
  "id": 14,
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
}
  ],
  "name": "ElementScienceUITests",
  "superClass": 15
},{
  "id": 15,
  "typeString": "class",
  "name": "XCTestCase"
},{
  "id": 16,
  "typeString": "class",
  "name": "UIViewController"
},{
  "id": 17,
  "typeString": "protocol",
  "name": "UITextViewDelegate"
},{
  "id": 18,
  "typeString": "class",
  "name": "UITableViewController"
},{
  "id": 19,
  "typeString": "class",
  "name": "UITabBarController"
},{
  "id": 20,
  "typeString": "protocol",
  "name": "UITabBarControllerDelegate"
},{
  "id": 21,
  "typeString": "class",
  "name": "Codable"
},{
  "id": 22,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 23,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 24,
  "typeString": "class",
  "name": "UIStoryboardSegue"
},{
  "id": 25,
  "typeString": "protocol",
  "name": "CAAnimationDelegate"
}] 