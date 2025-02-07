import prisma from "@/lib/prisma";

export async function getTotalSumInsured() {
  const data = await prisma.$queryRaw<{ sum_insured: string | null }[]>`
    select sum(ben.coverage_amount) as sum_insured
    from insured_coverage cov 
    join insurance_policy pol on cov.insurance_policy_id = pol.id
    join insurance_policy_benefit ben on pol.id = ben.insurance_policy_id
    
  `;

  if (data.length > 0) {
    return data[0].sum_insured ? data[0].sum_insured : "0";
  } else {
    return "0";
  }
}

export async function getPremiumAmount() {
  const data = await prisma.$queryRaw<{ sum_insured: string | null }[]>`
    SELECT sum(insurance_policy_premium.premium_amount) as sum_insured
FROM public.insured_coverage
JOIN insurance_policy_premium ON insured_coverage.insurance_policy_id = insurance_policy_premium.id
    
  `;

  if (data.length > 0) {
    return data[0].sum_insured ? data[0].sum_insured : "0";
  } else {
    return "0";
  }
}

export async function getProspectAmount() {
  const data = await prisma.$queryRaw<{ sum_insured: string | null }[]>`
    SELECT 
    (SELECT COUNT(employee.id) FROM public.employee) - 
    (SELECT COUNT(employee.id) 
     FROM public.employee
     JOIN insured_coverage ON insured_coverage.employee_id = employee.id
    ) AS count;
  `;

  if (data.length > 0) {
    return data[0].sum_insured ? data[0].sum_insured : "0";
  } else {
    return "0";
  }
}