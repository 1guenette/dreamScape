import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next'
import { readdirSync } from "fs";


export async function GET(request: NextRequest, response: NextApiResponse) {
    let x = readdirSync("./app/game-map/library")
    return NextResponse.json(["/game root"], { status: 200 });
  }