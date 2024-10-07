import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import  prisma  from "@/../../prisma/client";


const schema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(255)
})

export async function POST(request:NextRequest) {
    const body =  await request.json();
    const validation  = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{ status: 400})//client send invalid data 

    const newIssue = await prisma.issure.create({
        data:{title: body.title, description: body.description}
    });

    return NextResponse.json(newIssue ,{ status: 201}) //object was created
}