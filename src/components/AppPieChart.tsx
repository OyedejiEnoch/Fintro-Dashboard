"use client"
import React from 'react'
import { Label, Pie, PieChart } from "recharts"
import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent } from './ui/chart'
import { TrendingUp } from 'lucide-react'

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ]

const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-6))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-7))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-8))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig

const AppPieChart = () => {
    const totalVisitors= chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  return (
    <div>
        <h1 className='text-lg font-medium mb-6'>Total Revenue</h1>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
            <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
                <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>


            </PieChart>
        </ChartContainer>

            <div className='flex items-center flex-col justify-center'>
                <div className="flex items-center gap-2 text-sm font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground text-xs mt-2">
                Showing total visitors for the last 6 months
                </div>
            </div>

      
    </div>
  )
}

export default AppPieChart
