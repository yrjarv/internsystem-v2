
import { NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";

export async function GET(req) {
  
  if (req.method != "GET") {
    return NextResponse.json(
      { error: `Invalid method '${req.method}'` },
      { status: 405 }
    );
  }
  
  
  try {
    const shifts = await prisma.shiftCafe.findMany({
        select: {
            shiftPosition: true,
            startAt: true,
            UserForShiftManager: {select: {firstName: true, lastName: true}},
            UserForShiftWorker1: {select: {firstName: true, lastName: true}},
            UserForShiftWorker2: {select: {firstName: true, lastName: true}}
        }
    })

    return NextResponse.json({ shifts: shifts });
  }
  
  catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `something went wrong: ${error}` },
      { status: 500 }
    );
  }
  
}