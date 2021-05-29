import { couldStartTrivia } from "typescript";
import { Point } from "../gisapp-client"

// 赤道半径
const R = 6378137.0;

function deg2rad(deg: number): number {
    return deg * Math.PI / 180;
}

export function distance(p1: Point, p2: Point): number {
    const lat1 = deg2rad(p1.latitude);
    const lon1 = deg2rad(p1.longitude);
    const lat2 = deg2rad(p2.latitude);
    const lon2 = deg2rad(p2.longitude);
    const d = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2);
    return R * Math.acos(d);
}
