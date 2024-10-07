// import { NextRequest, NextResponse } from "next/server";
// import { z } from 'zod';
// import prisma from "@/../../prisma/client"; // Adjust the import based on your project structure

// const issueSchema = z.object({
//     title: z.string().min(1).max(255),
//     description: z.string().min(255),
// });

// // Define the type for the parameters
// interface Params {
//     id: string;
// }
// export async function PUT(request: NextRequest, { params }: { params: Params }) {
//     const { id } = params; // Get the issue ID from the URL
//     const body = await request.json();
    
//     const validation = issueSchema.safeParse(body);
//     if (!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 });
//     }

//     const { title, description } = validation.data;

//     try {
//         const updatedIssue = await prisma.issure.update({
//             where: { id: Number(id) }, // Ensure id is a number
//             data: { title, description },
//         });

//         return NextResponse.json(updatedIssue, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ error: "Issue not found" }, { status: 404 });
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/../../prisma/client"; // Adjust the import based on your project structure

const issueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(255),
});

// // Define the type for the parameters
interface Params {
    id: string;
}

export async function GET(request: NextRequest, { params } : { params: Params }) {
    const { id } = params;

    const issue = await prisma.issure.findUnique({
        where: { id: Number(id) }, // Ensure id is a number
    });

    if (!issue) {
        return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    return NextResponse.json(issue);
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
    const { id } = params;
    const body = await request.json();

    const validation = issueSchema.safeParse(body);
    
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { title, description } = validation.data;

    try {
        const updatedIssue = await prisma.issure.update({
            where: { id: Number(id) }, // Ensure id is a number
            data: { title, description },
        });

        return NextResponse.json(updatedIssue, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }
}
