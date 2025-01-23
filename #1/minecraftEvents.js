/**
 * Minecraft 事件列表
 */
/**
 * Minecraft 事件列表，共170個。
 */
const MinecraftEvents = {
    /** 玩家完成多人回合時觸發 */
    MultiplayerRoundEnd: "MultiplayerRoundEnd",

    /** 玩家獲得成就時觸發 */
    AwardAchievement: "AwardAchievement",

    /** 玩家結束一次合成會話時觸發 */
    CraftingSessionEnd: "CraftingSessionEnd",

    /** 玩家開始一次合成會話時觸發 */
    CraftingSessionStart: "CraftingSessionStart",

    /** 一天結束時觸發 */
    EndOfDay: "EndOfDay",

    /** 玩家儲存進度時觸發 */
    PlayerSaved: "PlayerSaved",

    /** 遊戲模式變更時觸發 */
    GameTypeChanged: "GameTypeChanged",

    /** 多人回合開始時觸發 */
    MultiplayerRoundStart: "MultiplayerRoundStart",

    /** 玩家編輯書本時觸發 */
    BookEdited: "BookEdited",

    /** 玩家匯出書本時觸發 */
    BookExported: "BookExported",

    /** 玩家打開已簽名的書本時觸發 */
    SignedBookOpened: "SignedBookOpened",

    /** 玩家匯入書本圖像時觸發 */
    BookImageImported: "BookImageImported",

    /** 玩家編輯指令方塊時觸發 */
    CommandBlockEdited: "CommandBlockEdited",

    /** 玩家使用物品時觸發 */
    ItemUsed: "ItemUsed",

    /** 玩家命名物品時觸發 */
    ItemNamed: "ItemNamed",

    /** 玩家放置方塊時觸發 */
    BlockPlaced: "BlockPlaced",

    /** 玩家合成物品時觸發 */
    ItemCrafted: "ItemCrafted",

    /** 玩家丟棄物品時觸發 */
    ItemDropped: "ItemDropped",

    /** 玩家熔煉物品時觸發 */
    ItemSmelted: "ItemSmelted",

    /** 玩家獲得物品時觸發 */
    ItemAcquired: "ItemAcquired",

    /** 玩家裝備物品時觸發 */
    ItemEquipped: "ItemEquipped",

    /** 玩家與物品互動時觸發 */
    ItemInteracted: "ItemInteracted",

    /** 遊戲規則載入時觸發 */
    GameRulesLoaded: "GameRulesLoaded",

    /** 玩家退出交通工具時觸發 */
    VehicleExited: "VehicleExited",

    /** 生物誕生時觸發 */
    MobBorn: "MobBorn",

    /** 寵物死亡時觸發 */
    PetDied: "PetDied",

    /** 生物被擊殺時觸發 */
    MobKilled: "MobKilled",

    /** 首領被擊殺時觸發 */
    BossKilled: "BossKilled",

    /** 玩家死亡時觸發 */
    PlayerDied: "PlayerDied",

    /** 玩家使用傳送門時觸發 */
    PortalUsed: "PortalUsed",

    /** 玩家建造傳送門時觸發 */
    PortalBuilt: "PortalBuilt",

    /** 代理命令執行時觸發 */
    AgentCommand: "AgentCommand",

    /** 代理創建時觸發 */
    AgentCreated: "AgentCreated",

    /** 玩家使用鍋時觸發 */
    CauldronUsed: "CauldronUsed",

    /** 玩家捕魚桶時觸發 */
    FishBucketed: "FishBucketed",

    /** 玩家敲鐘時觸發 */
    BellBlockUsed: "BellBlockUsed",

    /** 圖案被移除時觸發 */
    PatternRemoved: "PatternRemoved",

    /** 實體被互動時觸發 */
    EntityInteracted: "EntityInteracted",

    /** 玩家與鍋互動時觸發 */
    CauldronBlockUsed: "CauldronBlockUsed",

    /** 玩家使用堆肥機時觸發 */
    ComposterBlockUsed: "ComposterBlockUsed",

    /** 執行斜線命令時觸發 */
    SlashCommandExecuted: "SlashCommandExecuted",

    /** API 初始化時觸發 */
    ApiInit: "ApiInit",

    /** 玩家重生時觸發 */
    Respawn: "Respawn",

    /** 存儲時觸發 */
    Storage: "Storage",

    /** 應用程式暫停時觸發 */
    AppPaused: "AppPaused",

    /** 心跳事件 */
    Heartbeat: "Heartbeat",

    /** 菜單顯示時觸發 */
    MenuShown: "MenuShown",

    /** 腳本執行時觸發 */
    ScriptRan: "ScriptRan",

    /** 登入教育版時觸發 */
    SignInEdu: "SignInEdu",

    /** 應用程式恢復時觸發 */
    AppResumed: "AppResumed",

    /** 區塊被發現時觸發 */
    BlockFound: "BlockFound",

    /** 書本複製時觸發 */
    BookCopied: "BookCopied",

    /** 相機使用時觸發 */
    CameraUsed: "CameraUsed",

    /** 代碼加入時觸發 */
    JoinByCode: "JoinByCode",

    /** 提供評分時觸發 */
    OfferRated: "OfferRated",

    /** 頁面包裝時觸發 */
    PackPlayed: "PackPlayed",

    /** 玩家加入時觸發 */
    PlayerJoin: "PlayerJoin",

    /** 世界啟動時觸發 */
    StartWorld: "StartWorld",

    /** 上傳皮膚時觸發 */
    UploadSkin: "UploadSkin",

    /** 應用程式解除暫停時觸發 */
    AppUnpaused: "AppUnpaused",

    /** 區塊破壞時觸發 */
    BlockBroken: "BlockBroken",

    /** 區塊加載時觸發 */
    ChunkLoaded: "ChunkLoaded",

    /** 住民死亡時觸發 */
    DwellerDied: "DwellerDied",

    /** 音樂盒使用時觸發 */
    JukeboxUsed: "JukeboxUsed",

    /** 玩家離開時觸發 */
    PlayerLeave: "PlayerLeave",

    /** 共享領地時觸發 */
    RealmShared: "RealmShared",

    /** 皮膚更改時觸發 */
    SkinChanged: "SkinChanged",

    /** 堆疊加載時觸發 */
    StackLoaded: "StackLoaded",

    /** 客戶端啟動時觸發 */
    StartClient: "StartClient",

    /** 商店搜索時觸發 */
    StoreSearch: "StoreSearch",

    /** 視頻播放時觸發 */
    VideoPlayed: "VideoPlayed",

    /** 世界加載時觸發 */
    WorldLoaded: "WorldLoaded",

    /** 應用程式暫停時觸發 */
    AppSuspended: "AppSuspended",

    /** 斷言失敗時觸發 */
    AssertFailed: "AssertFailed",

    /** 區塊變更時觸發 */
    ChunkChanged: "ChunkChanged",

    /** 實體舞蹈時觸發 */
    EntityDanced: "EntityDanced",

    /** 硬體資訊時觸發 */
    HardwareInfo: "HardwareInfo",

    /** 加入取消時觸發 */
    JoinCanceled: "JoinCanceled",

    /** 許可證檢查時觸發 */
    LicenseCheck: "LicenseCheck",

    /** POI方塊使用時觸發 */
    POIBlockUsed: "POIBlockUsed",

    /** 圖案新增時觸發 */
    PatternAdded: "PatternAdded",

    /** 薑汁飲料釀造時觸發 */
    PotionBrewed: "PotionBrewed",

    /** 腳本載入時觸發 */
    ScriptLoaded: "ScriptLoaded",

    /** 區塊卸載時觸發 */
    ChunkUnloaded: "ChunkUnloaded",

    /** 內容共享時觸發 */
    ContentShared: "ContentShared",

    /** 難度設置時觸發 */
    DifficultySet: "DifficultySet",

    /** 實體生成時觸發 */
    EntitySpawned: "EntitySpawned",

    /** 物品被摧毀時觸發 */
    ItemDestroyed: "ItemDestroyed",

    /** 物品附魔時觸發 */
    ItemEnchanted: "ItemEnchanted",

    /** 等級摧毀時觸發 */
    LevelDestruct: "LevelDestruct",

    /** 玩家反彈時觸發 */
    PlayerBounced: "PlayerBounced",

    /** 玩家訊息時觸發 */
    PlayerMessage: "PlayerMessage",

    /** 彈出事件時觸發 */
    PopupFiredEdu: "PopupFiredEdu",

    /** 畫面變更時觸發 */
    ScreenChanged: "ScreenChanged",

    /** 存儲報告時觸發 */
    StorageReport: "StorageReport",

    /** 設定處置時觸發 */
    TreatmentsSet: "TreatmentsSet",

    /** 世界匯出時觸發 */
    WorldExported: "WorldExported",

    /** 世界匯入時觸發 */
    WorldImported: "WorldImported",

    /** 世界卸載時觸發 */
    WorldUnloaded: "WorldUnloaded",

    /** 行為錯誤時觸發 */
    BehaviorFailed: "BehaviorFailed",

    /** 車隊變更時觸發 */
    CaravanChanged: "CaravanChanged",

    /** 開發者控制台開啟時觸發 */
    DevConsoleOpen: "DevConsoleOpen",

    /** 選項更新時觸發 */
    OptionsUpdated: "OptionsUpdated",

    /** 交易完成時觸發 */
    TradeCompleted: "TradeCompleted",

    /** 世界生成時觸發 */
    WorldGenerated: "WorldGenerated",

    /** 鎧甲架姿勢時觸發 */
    ArmorStandPosed: "ArmorStandPosed",

    /** Barrel 方塊使用時觸發 */
    BarrelBlockUsed: "BarrelBlockUsed",

    /** 行為錯誤時觸發 */
    BehaviorErrored: "BehaviorErrored",

    /** 客戶端 ID 創建時觸發 */
    ClientIdCreated: "ClientIdCreated",

    /** 實驗性玩法設置時觸發 */
    ExperimentalGameplay: "ExperimentalGameplay",

    /** NPC 屬性更新時觸發 */
    NpcPropertiesUpdated: "NpcPropertiesUpdated",

    /** POI方塊使用時觸發 */
    POIBlockUsageAttempt: "POIBlockUsageAttempt",
    
    /** 搜尋目錄請求時觸發 */
    SearchCatalogRequest: "SearchCatalogRequest",

    /** 設定處理包應用時觸發 */
    TreatmentPackApplied: "TreatmentPackApplied",

    /** 設定處理包移除時觸發 */
    TreatmentPackRemoved: "TreatmentPackRemoved",

    /** 用戶生成內容下載完成時觸發 */
    UgcDownloadCompleted: "UgcDownloadCompleted",

    /** 未知區塊接收時觸發 */
    UnknownBlockReceived: "UnknownBlockReceived",

    /** 檔案傳輸狀態改變時觸發 */
    FileTransmissionState: "FileTransmissionState",

    /** 如何玩主題變更時觸發 */
    HowToPlayTopicChanged: "HowToPlayTopicChanged",

    /** 物品包匯入完成時觸發 */
    PackImportedCompleted: "PackImportedCompleted",

    /** 鎧甲架物品裝備時觸發 */
    ArmorStandItemEquipped: "ArmorStandItemEquipped",

    /** 複合創建者創建時觸發 */
    CompoundCreatorCreated: "CompoundCreatorCreated",

    /** 預設遊戲類型變更時觸發 */
    DefaultGameTypeChanged: "DefaultGameTypeChanged",

    /** 元素構造器使用時觸發 */
    ElementConstructorUsed: "ElementConstructorUsed",

    /** 購買失敗詳情時觸發 */
    PurchaseFailureDetails: "PurchaseFailureDetails",

    /** 推播通知開啟時觸發 */
    PushNotificationOpened: "PushNotificationOpened",

    /** 領地成員列表清除時觸發 */
    RealmMemberlistCleared: "RealmMemberlistCleared",

    /** 應用程式配置變更時觸發 */
    AppConfigurationChanged: "AppConfigurationChanged",

    /** 設置有效於成就時觸發 */
    SetValidForAchievements: "SetValidForAchievements",

    /** 設定處理包下載完成時觸發 */
    TreatmentPackDownloaded: "TreatmentPackDownloaded",

    /** 多人會話更新時觸發 */
    MultiplayerSessionUpdate: "MultiplayerSessionUpdate",

    /** 推播通知接收時觸發 */
    PushNotificationReceived: "PushNotificationReceived",

    /** 回應接受內容時觸發 */
    RespondedToAcceptContent: "RespondedToAcceptContent",

    /** 試用設備ID關聯時觸發 */
    TrialDeviceIdCorrelation: "TrialDeviceIdCorrelation",

    /** 內容日誌在世界會話中記錄時觸發 */
    ContentLogsInWorldSession: "ContentLogsInWorldSession",

    /** 複製世界教育功能啟用時觸發 */
    CopyWorldEducationEnabled: "CopyWorldEducationEnabled",

    /** 商店提供購買嘗試時觸發 */
    StoreOfferPurchaseAttempt: "StoreOfferPurchaseAttempt",

    /** 商店提供購買失敗時觸發 */
    StoreOfferPurchaseFailure: "StoreOfferPurchaseFailure",

    /** 推播通知許可權時觸發 */
    PushNotificationPermission: "PushNotificationPermission",

    /** 商店促銷通知時觸發 */
    StorePromotionNotification: "StorePromotionNotification",

    /** 設置多人遊戲關聯ID時觸發 */
    SetMultiplayerCorrelationId: "SetMultiplayerCorrelationId",

    /** 促銷通知點擊時觸發 */
    PromotionNotificationClicked: "PromotionNotificationClicked",

    /** 新商店內容檢查完成時觸發 */
    NewStoreContentCheckCompleted: "NewStoreContentCheckCompleted",

    /** 多人連接狀態改變時觸發 */
    MultiplayerConnectionStateChanged: "MultiplayerConnectionStateChanged",

    /** 世界歷史包來源遺失時觸發 */
    WorldHistoryPackSourceMissingDuringUpgrade: "WorldHistoryPackSourceMissingDuringUpgrade",

    /** 修正市場世界使用V2村民時觸發 */
    FixedMarketplaceWorldUsingV2VillagersToUseV1: "FixedMarketplaceWorldUsingV2VillagersToUseV1",

    /** 教育選項設置時觸發 */
    EduOptionSet: "EduOptionSet",

    /** 教育資源設置時觸發 */
    EduResources: "EduResources",

    /** 結構匯出時觸發 */
    StructureExport: "StructureExport",

    /** 代碼建構器關閉時觸發 */
    CodeBuilderClosed: "CodeBuilderClosed",

    /** 聊天設定更新時觸發 */
    ChatSettingsUpdated: "ChatSettingsUpdated",

    /** 代碼建構器下載時觸發 */
    CodeBuilderDownload: "CodeBuilderDownload",

    /** 玩家重新映射控制時觸發 */
    ControlRemappedByPlayer: "ControlRemappedByPlayer",

    /** 教育版iOS購買交易時觸發 */
    EduiOSPurchaseTransaction: "EduiOSPurchaseTransaction"
};


export default MinecraftEvents;
