import ws from 'nodejs-websocket';
import { minecraftEventSubscribe, handleCommand } from './function.js';
import readline from 'readline';
import MinecraftEvents from './minecraftEvents.js';

const PORT = '19132'

console.log(`WebSocket 正在端口 ${PORT} 監聽`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ws.createServer(function (conn) {
    console.log('新連線加入')

    minecraftEventSubscribe(conn, [
        MinecraftEvents.PlayerDied,
        MinecraftEvents.PlayerMessage,
    ]);

    conn.on("text", (json) => onText(json));
    conn.on("close", () => {
        console.log("wss已斷開");
    });
    conn.on('error', (error) => {
        console.log(error)
    });
    rl.on('line', (line) => {
        const command = line.trim();
        if (command) {
            handleCommand(command, conn);
        }
    });
}).listen(PORT);

function onText(json) {
    const data = JSON.parse(json);
    if (data.body?.sender == "外部" || data.body?.statusCode == 0) return;
    console.log(data)
}