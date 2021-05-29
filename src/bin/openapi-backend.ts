import OpenAPIBackend from 'openapi-backend';
import { RouteRequest, RouteLength } from '../gisapp-client'
import { distance } from '../gisapp/routeLength'
import express from 'express';

// create api with your definition file or object
const api = new OpenAPIBackend({ definition: './openapi/openapi.yaml' });

// register your framework specific request handlers here
api.register({
    routeLength: (c, req: express.Request, res: express.Response) => {
        const routeRequest = req.body as RouteRequest;
        let d = 0;
        for (let i = 0; i < routeRequest.points.length - 1; i++) {
            d += distance(routeRequest.points[i], routeRequest.points[i + 1]);
        }
        res.status(200).json({ length: d } as RouteLength)
    },
});

// initalize the backend
api.init();

const app = express();
app.use(express.json());
app.use((req, res) => {
    api.handleRequest(req as any, req, res);
});
app.listen(8080);
