import { BsFillCursorFill } from "react-icons/bs";
import LineChart from "../components/LineChart";

export default function Page() {
  return (
    <div className="flex flex-col bg-dark-700 ml-[22%] w-[78%] py-5 px-10 gap-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-rg font-mb text-text-200">Dashboard</h1>
        <div>
          <label htmlFor="dropdown" className="text-4xs font-l text-text-500">
            Time Range
          </label>
          <select
            id="dropdown"
            className="ml-5 border border-text-500 bg-transparent px-2 py-1 rounded-md text-text-500
            cursor-pointer text-4xs"
          >
            <option
              value="year"
              className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
            >
              Year
            </option>
            <option
              value="month"
              className="text-4xs font-l text-text-500  bg-dark-700  rounded-md"
            >
              Month
            </option>
            <option
              value="week"
              className="text-4xs font-l text-text-500  bg-dark-700  rounded-md"
            >
              Week
            </option>
          </select>
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="min-w-[300px] py-3 px-6 flex flex-col gap-4 rounded-[20px] bg-gradient-to-tr from-dark-700  via-dark-700 to-[rgba(228,239,68,0.15)] shadow-md shadow-dark-800">
          <div className="flex items-center gap-5 text-brand-500">
            <BsFillCursorFill className="text-m" />
            <h2 className="text-sm font-r">Total</h2>
          </div>
          <h1 className="text-text-300 font-mb text-rg">Rs 17,000</h1>
        </div>
        <div className="min-w-[300px] py-3 px-6 flex flex-col gap-4 rounded-[20px] bg-gradient-to-tr from-dark-700  via-dark-700 to-[rgba(68,239,91,0.15)] shadow-md shadow-dark-800">
          <div className="flex items-center gap-5 text-green-500">
            <BsFillCursorFill className="text-m" />
            <h2 className="text-sm font-r">Remaining</h2>
          </div>
          <h1 className="text-text-300 font-mb text-rg">Rs 2,000</h1>
        </div>
        <div className="min-w-[300px] py-3 px-6 flex flex-col gap-4 rounded-[20px] bg-gradient-to-tr from-dark-700  via-dark-700 to-[rgb(239,68,68,0.15)] shadow-md shadow-dark-800">
          <div className="flex items-center gap-5 text-red-500">
            <BsFillCursorFill className="text-m" />
            <h2 className="text-sm font-r">Spend</h2>
          </div>
          <h1 className="text-text-300 font-mb text-rg">Rs 15,000</h1>
        </div>
      </div>
      <LineChart/>
      </div>

  );
}
