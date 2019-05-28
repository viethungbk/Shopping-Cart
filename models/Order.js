const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users'
  },
  listItems: [
    {
      product: {
        type: ObjectId,
        ref: 'products'
      },
      quantity: Number
    }
  ],
  grandtotal: Number,
  date: {
    type: Date,
    default: Date.now
  },
  shipaddress: String,
  status: Number
  /*
  {1} -> Chờ Xác Nhận
  {2} -> Đang Giao
  {3} -> Giao Thành Công
  {4} -> Đã Hủy
  */
});

module.exports = Order = mongoose.model('orders', OrderSchema);