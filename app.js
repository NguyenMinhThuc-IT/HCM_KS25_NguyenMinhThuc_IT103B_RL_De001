let currentBookingCode = "";
let isBookingValid = false;
let totalRevenue = 0;
let totalBookings = 0;
let choice ="";

while(choice !== "0"){
   choice = prompt(`
================================
 HỆ THỐNG BÁN VÉ RẠP MOONLIGHT CINEMA
================================
1. Nhập và kiểm chuẩn mã đặt vé
2. Tính tiền vé xem phim
3. Thẩm định số seri vé may mắn
0. Thoát chương trình
================================
Vui lòng nhập lựa chọn của bạn (0-3): `);

    if ( choice === null || choice ===""){
        alert("Chương trình đã dừng lại [ XIN CẢM ƠN ]");
        console.log("Chương trình đã dừng lại [ XIN CẢM ƠN ]");
        break;
    }
    
    switch(choice){
        case "1":
            currentBookingCode = "";
            isBookingValid = false;

            const rawBookingInput = prompt("Vui lòng nhập mã đặt vé");

            // khách hàng bấm hủy hoặc không nhập gì?
            if ( rawBookingInput === null || rawBookingInput.trim() === ""){
                alert("Chưa nhập mã đặt vé");
                console.log("Chưa nhập mã đặt vé");
                break; 
            }
            // kiểm tra chuẩn hóa
            // xóa khoảng trắng và đưa thành in hoa
            const checkInputBooking = rawBookingInput.trim().toUpperCase()
            // mã > 6 ký tự
            if ( checkInputBooking.length < 6){
                alert("Mã đặt vé phải lớn hơn 6 ký tự!!");
                console.log("mã < 6 ký tự");
                break;
            }
            // bắt đầu bằng CIN-
            if (!checkInputBooking.startsWith("CIN-")){
                alert("Lỗi mã đặt vé bắt đầu bằng CIN-");
                console.log("Lỗi mã bắt đầu bằng CIn-");
                break;   
            }
            // không chứa khoảng trắng
            if ( checkInputBooking.includes(" ")){
                alert("Lỗi không được chứa khoảng trắng!!");
                console.log("không được chứa khoảng trắng");
                break;
            }

            alert(`Thành công mã đặt vé của bạn là: ${checkInputBooking}`);

            // đã hợp lệ gán giá trị lại
            currentBookingCode = checkInputBooking;
            isBookingValid = true;
            break;
        case "2":
            let flag = false;// cờ gán 
            // check case 1 dúng hay chưa mới mở khóa
            if (!isBookingValid){
                alert("Bạn chưa nhập mã đặt vé Vui lòng chọn 1");
                break;
            }
            // check validate
            while(true){
                let ticketCount = 0;
                const rawTicketCount = prompt("Nhập số vé của bạn");

                if ( rawTicketCount === null || rawTicketCount === ""){
                    alert("Chưa nhập mã đặt vé trở về Menu")
                    break;
                }

                if ( rawTicketCount === null ||
                    rawTicketCount === "" ||
                    Number.isNaN(rawTicketCount) ||
                    Number.isInteger(!rawTicketCount) || 
                    rawTicketCount <= 0 ){
                    alert("Lỗi không đúng định dạng số vé chỉ nhận số nguyên");
                    continue;
                }
                ticketCount = rawTicketCount;
                break;
            };
            while(true){
                let pricePerTicket = 0;
                const rawpricePerTicket = prompt("Nhập giá trị của mỗi vé");

                if ( rawpricePerTicket === null || rawpricePerTicket === ""){
                    alert("Chưa nhập mã đặt vé trở về Menu")
                    break;
                }

                if ( rawpricePerTicket === null ||
                    rawpricePerTicket === "" ||
                    Number.isNaN(rawpricePerTicket) ||
                    Number.isInteger(!rawpricePerTicket) || 
                    rawpricePerTicket <= 0 ){
                    alert("Lỗi không đúng định dạng số vé chỉ nhận số nguyên");
                    continue;
                }
                pricePerTicket = rawpricePerTicket;
                break;

            };
            
            console.log(ticketCount);
            console.log(pricePerTicket);
            
            let sumPrice = ticketCount * pricePerTicket ? ticketCount > 4 (sumPrice * 0.1): 0;
            alert(`Tổng tiền là ${sumPrice}`);

            break;
        case "3":
            alert("3. Thẩm định số seri vé may mắn");
            console.log("3. Thẩm định số seri vé may mắn");
            break;
        case "0":
            alert("Cảm ơn bạn đã sử dụng hệ thống của chúng tôi\n" + "RẠP MOONLIGHT CINEMA XIN CẢM ƠN");
            console.log("Thoát");
            break;
        default:
            alert("Bạn đã chọn sai vui lòng chọn lại từ (0-3)!!!");
            console.log("Bạn đã chọn sai vui lòng chọn lại từ (0-3)!!!");
            break;
    }
}