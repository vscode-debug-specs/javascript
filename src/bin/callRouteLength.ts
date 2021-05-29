import { GiscalcApi, Configuration, RouteRequest } from "../gisapp-client";

const api = new GiscalcApi(new Configuration({
    basePath: "http://localhost:8080"
}))
const req: RouteRequest = {
    points: [
        {
            latitude: 35.658577,
            longitude: 139.745451,
        }, {
            latitude: 35.710063,
            longitude: 139.81070,
        }
    ],
};
(async () => {
    const res = await api.routeLength(req);
    try {
        console.log(res.data.length);
    } catch (e) {
        console.log(e);
    }
})();
