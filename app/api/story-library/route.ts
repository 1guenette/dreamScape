import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next'
import { readdirSync } from "fs";


export async function GET(request: NextRequest, response: NextApiResponse) {
    let x = readdirSync("./app/library")
    return NextResponse.json(x, { status: 200 });
  }