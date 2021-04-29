import runServer from "./express/ServerInitFunctions";

import {initServer} from "./express/server";

initServer().then(app => runServer(app))

