export default function showOrderStatus(orderStatus) {
  switch(orderStatus) {
    case 1:
      return 'Chờ xác nhân';
    case 2:
      return 'Đang giao';
    case 3:
      return 'Giao thành công';
    case 4:
      return 'Đã hủy';

    default:
      return;
  }
}