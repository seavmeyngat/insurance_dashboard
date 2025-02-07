import prisma from "@/lib/prisma";

export async function getTotalInsured(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`select count(id) from insured_coverage`;
  if (data.length > 0) return data[0].count;
  else return "0";
}

export async function getTotalPolicy(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`select count(insurance_policy.id) from insurance_policy`;
  if (data.length > 0) return data[0].count;
  else return "0";
}

