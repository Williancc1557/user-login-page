import { pinoConfig } from "../log/pino-config";
import app from "./config/app";


const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

app.listen(PORTA, () => {
    pinoConfig.info(`server started using port ${PORTA}`);
});