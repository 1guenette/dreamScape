import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync, readdirSync } from "fs";

type Params = {
  params: any;
  id: string
}

export async function GET(request: NextRequest, path: Params) {
  
    let fileName = `${path?.params.id}.json`
    let storyFile = readFileSync(`./app/game-map/library/${path.params.id}/${fileName}`, 'utf8')
    return NextResponse.json(JSON.parse(storyFile), { status: 200 });
  }