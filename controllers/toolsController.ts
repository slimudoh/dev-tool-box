import type { NextApiRequest, NextApiResponse } from "next";
import { TableType } from "../interfaces";
import { tools } from "../utils/tools";

type Data = {
  success: boolean;
  message: string;
  data: TableType[];
  totalRecord: number;
};

const allTools = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      message: "All tools",
      data: tools,
      totalRecord: tools.length,
    });
  }
};

export { allTools };
