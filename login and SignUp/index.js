function checkUsernameValid() {
	var name = $("#txtUsername").val();
	if (/^[a-zA-Z]\w{5,17}/.test(name)) {
		return true;
	} else {
		$("#txtUsername").next("span").css("color", "red").text("Username Invalid");
		return false;
	}
}

function checkEmailValid() {
	var email = $("#txtEmail").val();
	if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
		return true;
	} else {
		$("#txtEmail").next("span").css("color", "red").text("Email Invalid");
		return false;
	}
}

function checksubmit() {
	$("#txtUsername").next("span").css("color", "red").text("");
	$("#txtStudentid").next("span").css("color", "red").text("");
	$("#txtPhone").next("span").css("color", "red").text("");
	$("#txtEmail").next("span").css("color", "red").text("");
	return checkUsernameValid()&&checkStudentidValid()&&checkPhoneValid()&&checkEmailValid();
}
