import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      projects,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      slug,
      description,
      type,
    } = body

    const project = await prisma.project.create({
      data: {
        name,
        slug,
        description,
        type,
        status: "DRAFT",
      },
    })

    return NextResponse.json({
      success: true,
      project,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create project",
      },
      {
        status: 500,
      }
    )
  }
}