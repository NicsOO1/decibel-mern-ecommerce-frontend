import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, index: true, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: String,
        price: Number,
        image: String,
        quantity: { type: Number, required: true },
      },
    ],
    amount: {
      subTotal: { type: Number, required: true },
      gst: { type: Number, required: true },
      total: { type: Number, required: true },
    },
    address: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    paymentInfo: {
      razorpayOrderId: { type: String }, // from Razorpay
      razorpayPaymentId: { type: String }, // after user pays
      razorpaySignature: { type: String }, // for verification
      status: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending",
      },
      paidAt: { type: Date },
    },
    orderStatus: {
      type: String,
      required: true,
      default: "Processing",
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);
