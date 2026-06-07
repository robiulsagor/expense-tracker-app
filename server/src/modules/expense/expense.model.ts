import { Schema, model, Types } from "mongoose";

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    note: {
      type: String,
      default: "",
    },

    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Expense = model("Expense", expenseSchema);