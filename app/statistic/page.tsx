"use client";

import LineChart from "@/components/LineChart";

const data = [
  {
    id: "Left Ad",
    color: "hsl(236, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 173,
      },
      {
        x: "Feb",
        y: 132,
      },
      {
        x: "Mar",
        y: 124,
      },
      {
        x: "Apr",
        y: 181,
      },
      {
        x: "May",
        y: 194,
      },
      {
        x: "Jun",
        y: 228,
      },
      {
        x: "Jul",
        y: 271,
      },
      {
        x: "Aug",
        y: 88,
      },
      {
        x: "Sep",
        y: 260,
      },
      {
        x: "Oct",
        y: 122,
      },
      {
        x: "Nov",
        y: 147,
      },
      {
        x: "Dec",
        y: 50,
      },
    ],
  },
  {
    id: "Right Ad",
    color: "hsl(338, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 21,
      },
      {
        x: "Feb",
        y: 245,
      },
      {
        x: "Mar",
        y: 148,
      },
      {
        x: "Apr",
        y: 140,
      },
      {
        x: "May",
        y: 259,
      },
      {
        x: "Jun",
        y: 216,
      },
      {
        x: "Jul",
        y: 118,
      },
      {
        x: "Aug",
        y: 162,
      },
      {
        x: "Sep",
        y: 137,
      },
      {
        x: "Oct",
        y: 85,
      },
      {
        x: "Nov",
        y: 297,
      },
      {
        x: "Dec",
        y: 50,
      },
    ],
  },
];

const Statistic = () => {
  return (
    <div className="h-96">
      <div className="text-center mt-5">
        <h1 className="text-3xl font-bold mb-10">
          Ad interaction statistics - 2023
        </h1>
      </div>
      <LineChart data={data} />
    </div>
  );
};

export default Statistic;
