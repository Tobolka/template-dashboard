import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  Area,
  Bar,
  Line,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import ReactTooltip from "react-tooltip";

import Image from "next/image";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Colors from https://tailwindcss.com/docs/customizing-colors
const priaryColor = "#6366F1";
const secondaryColor ="#A5B4FC";
const COLORS = ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE", "#E0E7FF"];

function CustomTooltip({ active, payload, label }) {
  if (active && payload) {
    return (
      <div className="bg-gray-700 shadow-md rounded-lg p-3 text-white w-24">
        {label && <p className="text-xs mb-2 text-blueGray-100">{label}</p>}

        <p className="text-sm">{payload[0].value}</p>
      </div>
    );
  }

  return null;
}

function CustomTooltipPie({ active, payload, label }) {
  if (active && payload) {
    return (
      <div className="bg-gray-700 shadow-md rounded-lg p-3 text-white w-24">
        {payload[0].name && (
          <p className="text-xs mb-2 text-blueGray-100">{payload[0].name}</p>
        )}

        <p className="text-sm">{payload[0].value}</p>
      </div>
    );
  }

  return null;
}

function AreaChartRender() {
  return (
    <AreaChart
      width={560}
      height={250}
      data={data}
      margin={{ top: 4, right: 4, left: -22, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.5} />
          <stop offset="95%" stopColor={secondaryColor} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="name"
      />
      <YAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="uv"
      />
      <CartesianGrid strokeDasharray="1 2" vertical={false} stroke="#CBD5E1" />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ stroke: "#94A3B8", opacity: "0.2" }}
      />
      <Area
        dataKey="uv"
        stroke={priaryColor}
        fillOpacity={1}
        fill="url(#colorUv)"
        strokeWidth={3}
      />
    </AreaChart>
  );
}

function BarChartRender() {
  return (
    <BarChart
      width={560}
      height={250}
      data={data}
      margin={{ top: 4, right: 4, left: -22, bottom: 0 }}
      barCategoryGap={20}
    >
      <XAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="name"
      />
      <YAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="uv"
      />
      <CartesianGrid strokeDasharray="1 2" vertical={false} stroke="#CBD5E1" />

      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "#94A3B8", opacity: "0.2" }}
      />
      <Bar dataKey="uv" fill={priaryColor} radius={2} />
    </BarChart>
  );
}

function LineChartRender() {
  return (
    <LineChart
      width={560}
      height={250}
      data={data}
      margin={{ top: 4, right: 4, left: -22, bottom: 0 }}
    >
      <XAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="name"
      />
      <YAxis
        stroke="#94A3B8"
        fontSize={10}
        axisLine={false}
        tickLine={false}
        dataKey="uv"
      />
      <CartesianGrid strokeDasharray="1 2" vertical={false} stroke="#CBD5E1" />

      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "#94A3B8", opacity: "0.2" }}
      />
      <Line dataKey="uv" dot={false} strokeWidth={3} stroke={priaryColor} />
    </LineChart>
  );
}
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div>
      {payload.map((entry, index) => (
        <div className="mr-20" key={index}>
          <span
            style={{ backgroundColor: entry.color }}
            className="w-2 h-2 rounded-full bg-red-100 inline-block"
          ></span>
          <span className="text-blueGray-400 text-xs ml-3 ">{entry.value}</span>
          <span className="text-blueGray-500 text-xs ml-5 text-right w-10 inline-block">
            {Math.round(entry.payload.percent * 100)}%
          </span>
        </div>
      ))}
    </div>
  );
};

function DonutChartRender() {
  return (
    <PieChart
      width={560}
      height={250}
      margin={{ top: 4, right: 4, left: -22, bottom: 0 }}
    >
      <Tooltip content={<CustomTooltipPie />} />
      <Legend
        verticalAlign="middle"
        align="right"
        layout="vertical"
        content={renderLegend}
      />
      <Pie
        data={data}
        dataKey="pv"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={65}
        outerRadius={100}
        fill={priaryColor}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

function TableRender() {
  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className="text-xs  text-blueGray-400 h-8">
          <th className="text-left font-medium">Next Billing Date</th>
          <th className="text-right font-medium">Subscriptions</th>
          <th className="text-right font-medium">Total Forecast</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr
            key={index}
            className="text-xs text-blueGray-700 border-t border-t-1 border-blueGray-300 border-dotted h-8"
          >
            <td className="text-left">{entry.name}</td>
            <td className="text-right">{entry.uv}</td>
            <td className="text-right">{entry.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Arrow({ isArrowUp }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isArrowUp ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      )}
    </svg>
  );
}

function Widget({
  children,
  name,
  number,
  diff,
  isArrowUp,
  isPositive,
  previous,
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow flex-1 flex-grow">
      <div className="text-blueGray-600 font-light mb-3">{name}</div>
      <div className="mb-3">
        <span className="text-2xl font-bold number">{number}</span>
        {diff && (
          <span
            className={
              "font-light ml-2 number " +
              (isPositive ? "text-green-400" : "text-rose-400")
            }
          >
            <span className="inline-block w-3">
              <Arrow isArrowUp={isArrowUp} />
            </span>
            {diff}
          </span>
        )}
      </div>

      {previous && (
        <div className="text-xs text-blueGray-400 font-light number ">
          <span className="text-blueGray-500">{previous}</span> in previous
          period
        </div>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50 flex">
      <ReactTooltip
        place="right"
        effect="solid"
        className="tooltip"
        backgroundColor="#1E293B"
        textColor="#fafafa"
      />
      <nav className="p-6">
        <div className="sticky top-7">
          <div className="w-12 h-12 rounded-full mt-1 mb-12 pt-1 p-1 bg-gray-100">
           
          </div>
          <a
            href="#"
            className="bg-indigo-100 text-indigo-500 p-3 rounded-xl mb-2 block"
            data-tip="Executive Dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-3 hover:bg-purple-100 text-purple-500 rounded-xl mb-2 block"
            data-tip="Marketing"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-3 hover:bg-lightBlue-100 text-lightBlue-500 rounded-xl mb-2 block"
            data-tip="Customer Service"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-3 hover:bg-pink-100 rounded-xl text-pink-500  mb-2 block"
            data-tip="Gateway Report"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <section className="p-6 mx-auto mb-10">
        <h1 className="text-blueGray-800 text-3xl mt-3 font-semibold">
          Executive Dashboard
        </h1>
        <div className="flex flex-col space-y-4 mt-12">
          <div className="flex flex-row space-x-4">
            <Widget
              name="Total subscribers"
              number="23,395"
              diff="2.1%"
              isArrowUp={false}
              isPositive={false}
              previous="24,221"
            ></Widget>
            <Widget
              name="Refund rate"
              number="13.69%"
              diff="3.1%"
              isArrowUp={false}
              isPositive={true}
              previous="2424"
            ></Widget>
            <Widget
              name="Net revenue"
              number="$194,573.00"
              diff="5.2%"
              isArrowUp={true}
              isPositive={false}
              previous="$189,231.22"
            ></Widget>{" "}
            <Widget
              name="Successful payments"
              number="6,642"
              diff="4.8%"
              isArrowUp={true}
              isPositive={false}
              previous="6,452"
            ></Widget>
          </div>

          <div className="flex flex-row space-x-4">
            <Widget
              name="Churn rate"
              number="4.2%"
              diff="28%"
              isArrowUp={true}
              isPositive={true}
            >
              <AreaChartRender />
            </Widget>
            <Widget
              name="Total orders"
              number="333,730"
              diff="28%"
              isArrowUp={false}
              isPositive={false}
            >
              <BarChartRender />
            </Widget>
          </div>
          <div className="flex flex-row space-x-4">
            <Widget name="MRR">
              <LineChartRender />
            </Widget>
            <Widget name="Sessions">
              <DonutChartRender />
            </Widget>
          </div>
          <div className="flex flex-row space-x-4">
            <Widget name="Page Organic Impressions">
              <TableRender />
            </Widget>
          </div>
        </div>
      </section>
    </div>
  );
}
