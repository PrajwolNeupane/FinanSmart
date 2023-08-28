"use server";

import Budget from "@/models/budget.model";
import { connectToDB } from "./mongoose";
import TotalBudget from "@/models/totatbudget.model";

export async function setTotalBudget({
  id,
  username,
  total,
  sepratedFor,
  date,
  year,
  month,
  week,
}: {
  id: string;
  username: string;
  total: number;
  sepratedFor: string;
  date: string;
  year: string;
  month: string;
  week: string;
}) {
  try {
    connectToDB();
    let totalBudget = await TotalBudget.findOne({
      year: year,
      month: month,
      week: week,
      id: id,
    });
    let budget = await Budget.findOne({ id: id });
    if (totalBudget) {
      totalBudget = await TotalBudget.updateOne(
        { year: year, month: month, week: week, id: id },
        { $set: { totalAmount: total.toString(), date: date } }
      );
    } else {
      totalBudget = new TotalBudget({
        year: year,
        month: month,
        week: week,
        id: id,
        totalAmount: total.toString(),
        date: date,
        sepratedFor,
      });
      totalBudget = await totalBudget.save();
    }
    if (!budget) {
      budget = new Budget({ id, username, totalAmount: [totalBudget._id] });
      budget = await budget.save();
    } else {
      Budget.findOneAndUpdate(
        { id: id },
        { $push: { totalAmount: totalBudget._id } }
      );
    }
    return JSON.stringify(totalBudget);
  } catch (e: any) {
    console.log(e);
  }
}
