import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="bg-gray-700 shadow-md rounded-lg p-3 text-white w-24">
        <p className="text-xs mb-2 text-blueGray-100">{label}</p>
        <p className="text-sm">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};

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
          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
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

      <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#E2E8F0" }} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#6366F1"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}

function Widget(props) {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <div className="text-blueGray-600 font-light mb-2">Sessions</div>
      <div className="mb-2">
        <span className="text-2xl font-medium number">$630.44</span>
        <span className="text-rose-400 font-light ml-2 number">
          <span className="inline-block w-3">
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </span>
          93.9%
        </span>
      </div>
      <div className="text-xs text-blueGray-400 font-light number mb-6">
        $2,134,124 same period last month
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen flex">
      <nav className="p-6">
        <div className="bg-blueGray-200 w-12 h-12 rounded-full mt-1 mb-12"></div>
        <a
          href="#"
          className="bg-indigo-100 text-indigo-500 p-3 rounded-xl mb-2 block"
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
            š
          </svg>
        </a>
      </nav>
      <section className="p-6">
        <h1 className="text-blueGray-600 text-3xl mt-2">Executive Dashboard</h1>

        <div className="flex mt-14">
          <Widget>
            <AreaChartRender />
          </Widget>
        </div>
      </section>
    </div>
  );
}
