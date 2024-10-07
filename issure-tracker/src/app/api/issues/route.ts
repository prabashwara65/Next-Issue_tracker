import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import  prisma  from "@/../../prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


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

// Fetch all issues
export async function GET(request: NextRequest) {
    try {
      // Use Prisma to fetch all issues from the database
      const issues = await prisma.issure.findMany();
      
      // Return the fetched issues
      return NextResponse.json(issues, { status: 200 });
    } catch (error) {
      // Handle any errors that occur during fetching
      console.error("Error fetching issues:", error);
      return NextResponse.json({ message: "Error fetching issues" }, { status: 500 });
    }
  }


  