"use client";
import { useState } from "react";
import { setTotalBudget } from "@/actions/totalBudget.action";

interface ManageFormProps {
  name: string;
  id: string;
}

export default function ManageForm({ name, id }: ManageFormProps) {
  const [formData, setFormData] = useState<any>({
    type: "total",
    sepratedFor: "fee/rent",
    amount: null,
  });

  const setBudget = async () => {
    console.log(formData);
    // try {
    //   const response = await setTotalBudget({
    //     id: id,
    //     username: name,
    //     total: 1230,
    //     sepratedFor: "Clothing",
    //     date: "124",
    //     year: "20224",
    //     month: "8",
    //     week: "1",
    //   });
    //   console.log(response);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <form className="flex flex-col w-[70%] gap-10">
      <div className="flex gap-5">
        <h3 className="text-2xs font-l text-text-400">Budget Type :</h3>
        <select
          id="dropdown"
          className="border border-text-500 bg-transparent px-2 py-1 rounded-md text-text-500
            cursor-pointer text-4xs"
          onChange={(e: any) => {
            setFormData({ ...formData, type: e.target.value });
          }}
        >
          <option
            value="total"
            className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
          >
            Total
          </option>
          <option
            value="spend"
            className="text-4xs font-l text-text-500  bg-dark-700  rounded-md"
          >
            Spend
          </option>
        </select>
      </div>
      <div className="flex gap-5">
        <h3 className="text-2xs font-l text-text-400">Seperated for :</h3>
        <select
          id="dropdown"
          className="border border-text-500 bg-transparent px-2 py-1 rounded-md text-text-500
            cursor-pointer text-4xs"
          onChange={(e: any) => {
            setFormData({ ...formData, sepratedFor: e.target.value });
          }}
        >
          <option
            value="fee/rent"
            className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
          >
            Fee / Rent
          </option>
          <option
            value="clothing"
            className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
          >
            Clothing
          </option>
          <option
            value="food"
            className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
          >
            Food
          </option>
          <option
            value="transportation"
            className="text-4xs font-l text-text-500 bg-dark-700  rounded-md"
          >
            Transportation
          </option>
          <option
            value="miscellaneous"
            className="text-4xs font-l text-text-500  bg-dark-700  rounded-md"
          >
            Miscellaneous
          </option>
        </select>
      </div>
      <div className="flex gap-5">
        <h3 className="text-2xs font-l text-text-400">Amount : </h3>
        <input
          type="number"
          placeholder="Amount"
          onChange={(e: any) => {
            setFormData({ ...formData, amount: e.target.value });
          }}
        />
      </div>
      <div className="flex gap-10">
        <button className="button-solid bg-brand-600 hover:bg-brand-700 text-3xs font-r">
          Add
        </button>
        <button
          className="button-solid bg-green-600 hover:bg-green-700 text-3xs font-r"
          onClick={(e) => {
            e.preventDefault();
            setBudget();
          }}
        >
          Set
        </button>
      </div>
      <h3 className="text-2xs font-l text-text-400">Need help ?</h3>
      <p className="text-4xs font-l text-text-500 leading-[180%]">
        {
          "Budget Type: The system offers two distinct options – 'Total' and 'Spend.' The 'Total' category represents your overall available funds that you can allocate for various expenses. On the other hand, 'Spend' reflects the money you've already spent or intend to spend. For instance, if you receive money, you would assign the amount to the 'Total' budget type and click the 'Add' button. Conversely, if you enter an incorrect amount, you can rectify it by setting the correct value and clicking the 'Set' button, and for spen it's same."
        }
      </p>
      <p className="text-4xs font-l text-text-500 leading-[180%]">
        {
          "Seperated for: In this section, you have the flexibility to allocate or add amounts based on your specific plans, such as transportation, clothing, and food. If you haven't outlined a specific plan yet, you can categorize the amount under 'Miscellaneous.' This approach applies to both the 'Total' and 'Spend' budget types."
        }
      </p>
    </form>
  );
}
