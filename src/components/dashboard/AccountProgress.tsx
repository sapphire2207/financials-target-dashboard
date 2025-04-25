"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PieChart, Pie, Cell } from "recharts";
import { useDashboard } from "@/context/DashboardContext";
import Image from "next/image";

const COLORS = ["#279dd4", "#e5e7eb"]; // sky and light gray

export default function AccountProgress() {
  const [isClient, setIsClient] = useState(false);
  const { dashboardData } = useDashboard();
  const { progress, completedSteps, remainingSteps } = dashboardData.accountProgress;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = [
    { name: "Completed", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  return (
    <Card className="w-full max-w-sm mx-auto border-none bg-white">
      <CardContent className="px-4">
        <h2 className="text-center text-lg font-semibold mb-4">Account Progress</h2>

        {isClient && (
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28">
              <PieChart width={112} height={112}>
                <Pie
                  data={chartData}
                  innerRadius={40}
                  outerRadius={56}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
                {progress}%
              </div>
            </div>
          </div>
        )}

        <Separator className="h-2 bg-[#eaecf0] my-4" />

        <Card className="bg-[#f6f7fb] mb-4 border-none">
          <CardContent className="flex flex-col px-4">
            <h3 className="text-sm font-semibold mb-3">Steps Completed</h3>
            <ul className="space-y-2">
              {completedSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-3"></span>
                  <span className="flex-1 text-sm text-gray-700">{step}</span>
                  <Image
                    src="/tick.svg"
                    alt="Completed"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#f6f7fb] border-none">
          <CardContent className="flex flex-col px-4">
            <h3 className="text-sm font-semibold mb-3">Steps Remaining</h3>
            <ul className="space-y-2">
              {remainingSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-3"></span>
                  <span className="flex-1 text-sm text-gray-700">{step}</span>
                  <Image
                    src="/pending.svg"
                    alt="Pending"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
