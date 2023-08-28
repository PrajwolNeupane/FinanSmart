import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  totalAmount: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TotalBudget",
    },
  ],
  spendAmount: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TotalBudget",
    },
  ],
  remainingAmount: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Remaining",
    },
  ],
});

const Budget = mongoose.models.Budget || mongoose.model("Budget", budgetSchema);

export default Budget;
