import nc from "next-connect";
import { allTools } from "../../controllers/toolsController";

const handler = nc();
handler.get(allTools);

export default handler;
