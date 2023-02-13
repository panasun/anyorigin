import * as express from "express";
import { Application, Request, Response } from "express";
import * as cors from "cors";
import axios from "axios";

const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  const body = req.body;
  const { host, ...headers } = req.headers;
  const url = String(req?.query?.url);
  axios({
    method: "POST",
    url,
    data: body,
    headers,
  })
    .then((response: any) => res.send(response))
    .catch((error: any) => res.status(500).send(error));
});

app.get("/", (req: Request, res: Response) => {
  const { host, ...headers } = req.headers;
  const url = String(req?.query?.url);
  axios({
    method: "get",
    url,
    headers,
  })
    .then((response: any) => res.send(response.data))
    .catch((error: any) => res.status(500).send(error));
});

app.listen(8080);
