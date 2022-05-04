//주메뉴 검색창 클릭으로 띄우기

//토글키 - 하나의 키에 두가지 기능이 있는것 - 이지만, 여기서는 아이콘을 아예 다르게 원래 넣었기 때문에 조금 다르게 작성되었다.
//window.onload안넣으면 작동안됨
function srchLoad() {
	let gnbSrch = document.getElementById("btnSrch"); //a
	let srchMenu = document.getElementById("srchWrap"); //div
	let theIcon = document.getElementById("srchIcon"); //srch버튼i
	let theIcon2 = document.getElementById("srchClose"); //x버튼i
	let scrBlur = document.getElementById("blurFilter"); //backdrop filter
	let flag = true;
	let flag2 = true;
	//한버튼으로 이미지 전환이아니라 이미 아이콘이 두개가 있엇음에, flag, flag2로 변수를 두개 만들어 보았다.

	gnbSrch.onclick = function () {
		if (flag) {
			//열려라
			srchMenu.style.display = "block";
			scrBlur.style.display = "block";
			scrBlur.addEventListener("scroll", function () {
				scrBlur.classList.add("fixed");
			});

			flag = false; //flag=0;
		}
		theIcon2.onclick = scrBlur.onclick = function () {
			if (flag2) {
				srchMenu.style.display = "none";
				scrBlur.style.display = "none";
				flag = true;
				//여기해서 이해는 안가는데 발견한 신기한점 flag=true를 꼭 해야 반복이 가능하다.
				//변수 flag2를 따로만들어주고, 마지막에 flag=true;로 해서 끝내야 제대로 작동을 하는 것을 발견, true를 false로 바꾼다던지 마지막에 flag를 flag2로 바꾼다던지 하면 안됨 - 한번은 켯다 껏다가 되는데 반복이 안되는 상황이 발생.
			}
		};
	};
}
window.addEventListener("load", srchLoad, false);

//버튼2누르면 왼쪽으로 1920px, 슬라이드애니메이션효과(드래그효과) 미완미완!!
function slideBtn() {
	let slide = document.getElementById("slideBtn"); //ul
	let btn = slide.getElementsByTagName("button");
	let arr = Array.prototype.slice.call(btn);

	let btn1 = (arr[0] = document.getElementById("btn1"));
	let btn2 = (arr[1] = document.getElementById("btn2"));
	let btn3 = (arr[2] = document.getElementById("btn3"));

	function slideOnclick1() {
		document.getElementById("slideWrap").style.transform = "translate(0)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[0].classList.add("on");
		arr[1].classList.remove("on");
		arr[2].classList.remove("on");
	}
	function slideOnclick2() {
		document.getElementById("slideWrap").style.transform = "translate(-100vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[1].classList.add("on");
		arr[0].classList.remove("on");
		arr[2].classList.remove("on");
	}
	function slideOnclick3() {
		document.getElementById("slideWrap").style.transform = "translate(-200vw)";
		document.getElementById("slideWrap").style.transition =
			"transform 0.2s ease 0s";
		arr[2].classList.add("on");
		arr[0].classList.remove("on");
		arr[1].classList.remove("on");
	}
	arr[0].addEventListener("click", slideOnclick1);
	arr[1].addEventListener("click", slideOnclick2);
	arr[2].addEventListener("click", slideOnclick3);
}

window.addEventListener("load", slideBtn, false);

//언어선택효과 KOR ENG
function lngLoad() {
	let korBtn = document.getElementById("korBtn"),
		arrIcon = document.getElementById("arrIcon"),
		engBtn = document.getElementById("lngEng"),
		hdInner = document.getElementById("hdInner"),
		x = document.getElementsByClassName("b"),
		flag3 = true;

	console.log(x);
	korBtn.onclick = function () {
		if (flag3) {
			engBtn.style.display = "block";
			arrIcon.style.transform = "rotate(-180deg)";
			hdInner.classList.add("bg_fff");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.add("txt_black");
			}

			flag3 = false;
		} else {
			engBtn.style.display = "none";
			arrIcon.style.transform = "rotate(0)";
			hdInner.classList.remove("bg_fff");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].classList.remove("txt_black");
			}

			flag3 = true;
		}
	};
}
window.addEventListener("load", lngLoad, false);

//주메뉴 밑에 하위 li hover 시 backdrop filter blur

function scrBlur() {
	const gnb = document.getElementById("gnb");
	let scrBlur = document.getElementById("blurFilter");

	console.log(gnb);
	gnb.addEventListener("mousemove", function () {
		scrBlur.style.display = "block";
	});
	gnb.addEventListener("mouseout", function () {
		scrBlur.style.display = "none";
	});
}
window.addEventListener("load", scrBlur, false);

//footer toggle 클릭시 ul 보이게/안보이게
window.addEventListener("click", function toggle() {
	const familySite = document.querySelector(".toggle_family");
	familySite.classList.toggle("on");
});
//footer toggle 클릭시 회전
window.addEventListener("click", function turn() {
	const familyToggle = document.querySelector(".footer_toggle");
	familyToggle.classList.toggle("turn");
});
