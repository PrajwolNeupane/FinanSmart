import mongoose from "mongoose";

const remainingBudgetSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  totalAmount: { type: String, required: true },
  date: { type: String, required: true },
  year: { type: String, required: true },
  month: { type: String, required: true },
  week: { type: String, required: true },
  sepratedFor: { type: String, required: true },
});

const SpendBudget =
  mongoose.models.RemainingBudget ||
  mongoose.model("RemainingBudget", remainingBudgetSchema);

export default SpendBudget;
