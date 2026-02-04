import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isBlocked: { type: Boolean, default: false },
    wishlist: { type: Array, default: [] },
    cart: { type: Array, default: [] },
  },
  { timestamps: true },
);

// Password Hashing: runs before .save()
userSchema.pre("save", async function () {
  // only hash the password, if its new or modified
  if (!this.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw new Error(error);
  }
});

// WARNING: also need a middleware setup in Login!!!

export const User = mongoose.model("User", userSchema);
