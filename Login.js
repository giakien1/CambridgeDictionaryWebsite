function Signin(){
            var name = document.getElementById("ten").value;
            var e = document.getElementById("email").value;
            var pass = document.getElementById("matkhau").value;
            if(name == ""){
                alert("Ho ten khong duoc rong");
            else if(e == "")
                alert("Dinh dang email sai");
                
            else if(pass == "" || /\s/.test(pass))
                alert("Dinh dang mat khau sai");
                
            }
            else
                alert("Thong tin nhap vao dung");
                return;
}