import MinecraftEvents from './minecraftEvents.js';

export function sendMinecraftCommand(conn, command) {
    const data = JSON.stringify({
        header: {
            requestId: "00000000-0000-0000-0000-000000000000",
            messagePurpose: "commandRequest",
            version: 5201314,
        },
        body: {
            version: 5201314,
            commandLine: command
        }
    });
    conn ? conn.send(data) : console.log(`wss未連接`)
}

/**
 * @typedef {keyof typeof MinecraftEvents} MinecraftEventName
 */

/**
 * 訂閱 Minecraft 事件
 * @param conn - WebSocket 連線
 * @param {MinecraftEventName[]} events - 訂閱事件
 */

export function minecraftEventSubscribe(conn, events) {

    if (!Array.isArray(events)) {
        console.error("Events 參數必須是array");
        return;
    }

    events.forEach((event) => {
        if (MinecraftEvents[event]) {
            const data = JSON.stringify({
                header: {
                    requestId: "00000000-0000-0000-0000-000000000000",
                    messagePurpose: "subscribe",
                    version: 5201314,
                },
                body: {
                    eventName: MinecraftEvents[event],
                },
            });
            conn.sendText(data);
            console.log(`成功訂閱: ${MinecraftEvents[event]}`);
        } else {
            console.warn(`無效訂閱: ${event}`);
        }
    });
}

let spam = false;
let SpamInterval;
let SpamMessageCount = 0;
let Time = 0;

export function handleCommand(command, conn) {
    switch (command) {
        case 'spam':
            if (!spam) {
                spam = true;
                Time = Date.now();
                startSpam(conn);
                console.log('Spam 已啟動');
            } else {
                console.log('Spam 正在運行中...');
            }
            break;
        case 'spam stop':
            if (spam) {
                spam = false;
                const EndTime = ((Date.now() - Time) / 1000).toFixed(2);
                stopSpam();
                console.log(`Spam 已停止，共發送: ${SpamMessageCount} 則訊息，花費 ${EndTime} 秒`);
                SpamMessageCount = 0;
                Time = 0;
            } else {
                console.log('Spam 未運行');
            }
            break;

        default:
            sendMinecraftCommand(conn, command)
    }

}

function startSpam(conn) {
    SpamInterval = setInterval(() => {
        if (conn) {
            SpamMessageCount++;
            const string = generateLargeChineseString(100)
            sendMinecraftCommand(conn, 'me '+string);
        }
    }, 1);
}

function stopSpam() {
    if (SpamInterval) {
        clearInterval(SpamInterval);
        SpamInterval = null;
    }
}

function generateLargeChineseString(length, charset = ['齉', '龘', '龖', '靐', '籲', '蠿', '驫', '鱻', '麤', '鑱']) {
    let result = '';
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charsetLength)];
    }
    return result;
}