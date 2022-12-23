import { model, Schema, Types } from "mongoose";
import { OrderStatus } from "../constants/order_status";
import { Food } from "./food.model";

export interface LatLng {
  lat: String;
  lng: String;
}

export const LatLngSchema = new Schema<LatLng>({
  lat: { type: String, reqired: true },
  lng: { type: String, reqired: true },
});

export interface OrderItem {
  food: Food;
  price: Number;
  quantity: Number;
}

export const OrderItemSchema = new Schema<OrderItem>({
  food: { type: String, reqired: true },
  price: { type: Number, reqired: true },
  quantity: { type: Number, reqired: true },
});

export interface Order {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  name: string;
  address: string;
  addressLatLng: LatLng;
  paymentId: string;
  status: OrderStatus;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<Order>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    user: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const OrderModel = model("order", orderSchema);
