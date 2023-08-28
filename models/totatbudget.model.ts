import mongoose from "mongoose";

const totalBudgetSchema = new mongoose.Schema({
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

const TotalBudget =
  mongoose.models.TotalBudget ||
  mongoose.model("TotalBudget", totalBudgetSchema);

export default TotalBudget;
