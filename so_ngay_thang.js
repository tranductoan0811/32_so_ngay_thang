function songay_month() {
  let songay, month, display;
      month = +document.getElementById("month").value;
      display = '';
     
  switch (month) {

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      songay = '31 ngày.';
      break;

    case 4:  
    case 6:  
    case 9:  
    case 11:  
      songay = '30 ngày.';
      break;
    
    case 2:
      songay = '28 hoặc 29 ngày.';
      break;
    
    default:
      songay = 'Xem lại số thứ tự của tháng nhập vào.';

  }

  display = (" Số ngày trong tháng " +  month + " là: " + songay + " ");

  document.getElementById("result").innerHTML = display;





}