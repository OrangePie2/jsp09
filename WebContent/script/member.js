function loginCheck(){
	if(document.frm.userid.value.length==0){
		alert("아이디를 써주세요");
		frm.userid.focus();
		return false;
	}
	if(document.frm.pwd.value==""){
	    alert("비밀번호를 반드시 써주세요");
		frm.pwd.focus();
		return false;
	
	}
	return true;
}
function idCheck(){
	if(document.frm.pwd.value==""){
	    alert("아이디를 반드시 써주세요");
		document.frm.userid.focus();
		return;
	
	}
	var url = "idCheck.do?userid="+ document.frm.userid.value;
	window.open(url, "_blank_1",
	"toolbar=no, menubar=no, scrollbars=yes, resizable=no,
	width=450, height=200" );
}
//중복된 내용은 생략합니다.
function idok(){
	opener.frm.userid.value=document.frm.userid.value;
	opener.frm.reid.value=document.frm.userid.value;
		self.close();
		}
		
		function joinCheck(){
		if(document.frm.name.value.length==0){
		alert("이름를 써주세요");
		frm.name.focus();
		return false;
		}
		if(document.frm.userid.value.length==0){
		alert("아이디를 써주세요");
		frm.userid.focus();
		return false;
        }
if(document.frm.userid.value.length < 4){
		alert("아이디는 4자 이상 써주세요");
		frm.userid.focus();
		return false;
        }
if(document.frm.pwd.value == ""){
		alert("암호 반드시 써주세요");
		frm.pwd.focus();
		return false;
        }
if(document.frm.pwd.value != document.frm.pwd_check.value){
		alert("암호 반드시 일치하게 써주세요");
		frm.pwd.focus();
		return false;
        }
if(document.frm.reid.value.length ==0){
		alert("중복체크해 주세요");
		frm.userid.focus();
		return false;
        }
return true;
	}
