import * as ReactDOMServer from "react-dom/server";
import { App } from "./Jsx";

console.log(ReactDOMServer.renderToStaticMarkup(App()));
