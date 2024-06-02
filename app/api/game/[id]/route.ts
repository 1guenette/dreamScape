import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync, readdirSync } from "fs";

type Params = {
  id: string
}

export async function GET(request: NextRequest, path: Params) {
  
    let fileName = `${path.params.id}.json`
    console.log(fileName)
    let storyFile = readFileSync(`./app/game-map/library/test1/${fileName}`, 'utf8')
    return NextResponse.json(JSON.parse(storyFile), { status: 200 });
  }