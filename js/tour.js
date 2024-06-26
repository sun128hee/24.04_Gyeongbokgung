//tour.js

//header 스크롤시 배경 생성
const header = document.querySelector('header');
const changeHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > changeHeight) {
        header.style.backgroundColor = "rgb(0, 0, 0)";
    }
    else {
        header.style.backgroundColor = null;
    }
});


//헤더 메뉴 이벤트
const info =  document.querySelector('#info');
const infoList = document.querySelector('.info-list');

info.addEventListener('mouseover', ()=>{
    infoList.style.display = "inline";
    info.style.backgroundColor = "rgb(0, 0, 0)";
    info.classList.add('borderbottom');
    infoList.style.backgroundColor = "rgb(0, 0, 0)";
});

info.addEventListener('mouseout', ()=>{
    infoList.style.display = "none";
    info.style.backgroundColor = "rgb(0, 0, 0, 0)";
    info.classList.remove('borderbottom');
});

const tour = document.querySelector('#tour');
const tourList = document.querySelector('.tour-list');

tour.addEventListener('mouseover', ()=>{
    tourList.style.display = "inline";
    tour.style.backgroundColor = "rgb(0, 0, 0)";
    tour.classList.add('borderbottom');
    tourList.style.backgroundColor = "rgb(0, 0, 0)";
});

tour.addEventListener('mouseout', ()=>{
    tourList.style.display = "none";
    tour.style.backgroundColor = "rgb(0, 0, 0, 0)";
    tour.classList.remove('borderbottom');
});

const event0 = document.querySelector('#event');
const eventList = document.querySelector('.event-list');

event0.addEventListener('mouseover', ()=>{
    eventList.style.display = "inline";
    event0.style.backgroundColor = "rgb(0, 0, 0)";
    event0.classList.add('borderbottom');
    eventList.style.backgroundColor = "rgb(0, 0, 0)";
});

event0.addEventListener('mouseout', ()=>{
    eventList.style.display = "none";
    event0.style.backgroundColor = "rgb(0, 0, 0, 0)";
    event0.classList.remove('borderbottom');
});

const booking = document.querySelector('#booking');
const bookingList = document.querySelector('.booking-list');

booking.addEventListener('mouseover', ()=>{
    bookingList.style.display = "inline";
    booking.style.backgroundColor = "rgb(0, 0, 0)";
    booking.classList.add('borderbottom');
    bookingList.style.backgroundColor = "rgb(0, 0, 0)";
});

booking.addEventListener('mouseout', ()=>{
    bookingList.style.display = "none";
    booking.style.backgroundColor = "rgb(0, 0, 0, 0)";
    booking.classList.remove('borderbottom');
});

const main = document.querySelector('#main');

main.addEventListener('mouseover', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0)";
    main.classList.add('borderbottom');
});

main.addEventListener('mouseout', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0, 0)";
    main.classList.remove('borderbottom');
});

//헤더팝업 이벤트
const popupmenu = document.querySelector('.popupmenu');

function popupClear() {
    popupmenu.classList.add('hidden-none');
}

const fullMenu = document.querySelector('#full-menu');

fullMenu.addEventListener('click', ()=>{
    popupmenu.classList.remove('hidden-none');
});

const popUpMenuBox = document.querySelectorAll('.popupmenu-box');
const popUpMenuUl = document.querySelectorAll('.popupmenu-ul');
const popUpMenuA = document.querySelectorAll('.popupmenu-a');

popUpMenuBox[1].addEventListener('mouseover', ()=>{
    popUpMenuUl[0].style.display = "block";
    popUpMenuA[0].innerHTML = "소개·역사 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[1].addEventListener('mouseout', ()=>{
    popUpMenuUl[0].style.display = "none";
    popUpMenuA[0].innerHTML = "소개·역사 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[2].addEventListener('mouseover', ()=>{
    popUpMenuUl[1].style.display = "block";
    popUpMenuA[1].innerHTML = "관람안내 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[2].addEventListener('mouseout', ()=>{
    popUpMenuUl[1].style.display = "none";
    popUpMenuA[1].innerHTML = "관람안내 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[3].addEventListener('mouseover', ()=>{
    popUpMenuUl[2].style.display = "block";
    popUpMenuA[2].innerHTML = "행사마당 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[3].addEventListener('mouseout', ()=>{
    popUpMenuUl[2].style.display = "none";
    popUpMenuA[2].innerHTML = "행사마당 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[4].addEventListener('mouseover', ()=>{
    popUpMenuUl[3].style.display = "block";
    popUpMenuA[3].innerHTML = "예약하기 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[4].addEventListener('mouseout', ()=>{
    popUpMenuUl[3].style.display = "none";
    popUpMenuA[3].innerHTML = "예약하기 <i class='fa-solid fa-chevron-down'></i>"
});


//전체, 둘러보기, 편의시설 클릭 시 이미지 변경
const div_mapfull = document.querySelector('.mapfull');
const div_maptour = document.querySelector('.maptour');
const div_mapshop = document.querySelector('.mapshop');
const id_mapimg = document.querySelector('#mapImg')

function clickMapfull() {
    id_mapimg.src = "../자료/전체맵.jpg";
}

function clickMaptour() {
    id_mapimg.src = "../자료/둘러보기맵.jpg";
}

function clickmapshop() {
    id_mapimg.src = "../자료/편의시설맵.jpg";
}


//관리소별 연락처 클릭 시 telbox table 생성
const id_telBox = document.querySelector('#telBox')
const select_telBoxTable = document.querySelector('.telBoxTable');
let display = false;

id_telBox.addEventListener('click', ()=>{
    if(display == false) {
        select_telBoxTable.style.display = "inline";
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-up'></i>"
        display = true;
    } else if (display == true) {
        select_telBoxTable.style.display = "none";
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-down'></i>"
        display = false; 
    }
});


//시설안내 이벤트
function click1() {
    document.querySelector('.picture-h2').textContent = "근정전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4801)";
    document.querySelector('.picture-p').textContent = "근정전(勤政殿)은 경복궁의 정전으로 왕의 즉위식, 신하들의 하례, 외국 사신의 접견, 궁중연회 등 중요한 국가행사를 치르던 곳이다. 근정전은 궁궐 내에서도 가장 규모가 크고 격식을 갖춘 건물로 면적도 가장 넓게 차지하고 있다. 근정전 앞마당은 다른 궁궐의 정전과 같이 박석이 깔려있고, 중앙에는 삼도(三道)를 두어 궁궐의 격식을 갖추었으며 조정에는 품계석을 놓았다.";
}

function click2() {
    document.querySelector('.picture-h2').textContent = "사정전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4802)";
    document.querySelector('.picture-p').textContent = "사정전(思政殿)은 왕이 신하들과 함께 일상 업무를 보던 공식 집무실인 편전(便殿)이다. 이곳에서 매일 아침 업무 보고와 회의, 경연 들이 이루어졌다. 사정전 좌우에는 만춘전(萬春殿)과 천추전(千秋殿)은 사정전의 부속건물로 사정전에 없는 온돌시설이 갖추어져 있어 사계절로 이용이 가능하였던 것으로 보인다.";
}

function click3() {
    document.querySelector('.picture-h2').textContent = "수정전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4803)";
    document.querySelector('.picture-p').textContent = "수정전(修政殿)은 고종 대 편전으로 사용했던 건물이다. 경복궁 창건 당시에는 없었으나 고종 대 경복궁을 다시 지을 때 지은 건물이다. 1894년(고종 31) 갑오개혁 때 군국기무처가 들어섰고, 이후 의정부(議政府)가 내각(內閣)으로 바뀌면서 내각의 청사로 사용되었다. 특히 조선 초기 수정전 일대에는 세종 대에 훈민정음 창제의 산실인 집현전이 있었다.";
}

function click4() {
    document.querySelector('.picture-h2').textContent = "경회루";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4805)";
    document.querySelector('.picture-p').textContent = "경회루(慶會樓)는 경복궁 침전영역 서쪽에 위치한 연못 안에 조성된 누각으로, 왕이 신하들과 규모가 큰 연회를 열거나 외국 사신을 접대하던 곳이다. 경회루의 1층은 48개(둥근 기둥과 네모난 기둥 각 24개)의 높은 돌기둥들만 세웠으며, 2층에 마루를 깔아 연회장으로 이용했다. 추녀마루에는 우리나라 건물 가운데 가장 많은 11개의 잡상(雜像)이 있다.";
}

function click5() {
    document.querySelector('.picture-h2').textContent = "강녕전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4807)";
    document.querySelector('.picture-p').textContent = "강녕전(康寧殿)은 교태전과 함께 왕과 왕비가 일상생활을 하던 침전이다. 강녕전은 왕의 침전으로, 왕은 이곳에서 독서와 휴식 등 일상생활뿐 아니라 신하들과 은밀한 정무를 보기도 하였다. 건물 앞에는 넓은 월대가 있고, 지붕 위에 용마루가 없는 건물이다. 지금의 강녕전은 1995년에 복원하였다. 강녕전 주변으로는 경성전(慶成殿), 연생전(延生殿), 응지당(膺祉堂), 연길당(延吉堂) 등 강녕전 부속건물이 있다.";
}

function click6() {
    document.querySelector('.picture-h2').textContent = "교태전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4809)";
    document.querySelector('.picture-p').textContent = "교태전(交泰殿)은 강녕전과 함께 왕과 왕비가 일상생활을 하던 침전이자, 왕비의 생활공간이다. 교태전은 궁궐의 가장 가운데에 위치하고 있어, 왕비의 생활공간이기 때문에 중궁전이라고도 부른다. 강녕전과 마찬가지로 지붕 위에 용마루가 없고 내부 모습은 비슷하나, 건물 앞에 월대는 없다. 지금의 교태전은 1995년에 복원한 것이다. 교태전 뒤로는 아미산(峨嵋山)이라는 왕비를 위한 후원을 조성하였다.";
}

function click7() {
    document.querySelector('.picture-h2').textContent = "동궁";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4810)";
    document.querySelector('.picture-p').textContent = "동궁(東宮) 영역은 왕세자와 왕세자빈의 교육공간이자 생활공간으로 궁궐의 동쪽에 있어 동궁, 또는 세자궁이라고 부른다. 현재 동궁 영역에는 왕세자와 왕세자빈의 생활공간인 자선당(資善堂)과 왕세자의 교육과 정무를 보던 비현각(丕顯閣), 그리고 동궁의 정당(正堂)인 계조당(繼照堂)이 있다. 자선당과 비현각은 1999년에, 계조당은 2023년에 복원하였다.";
}

function click8() {
    document.querySelector('.picture-h2').textContent = "소주방";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4814)";
    document.querySelector('.picture-p').textContent = "소주방(燒廚房)은 왕의 수라와 궁중의 잔치 음식 등을 준비하던 궁중 부엌이다. 이곳은 왕의 수라를 만들던 내소주방(內燒廚房), 궁중 잔치나 고사 음식을 차리던 외소주방(外燒廚房), 그리고 간식, 죽, 과일, 떡 등을 차리던 생물방(生物房) 세 구역으로 나뉘어 있다. 현재의 소주방은 2015년에 복원한 것이다.";
}

function click9() {
    document.querySelector('.picture-h2').textContent = "자경전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4821)";
    document.querySelector('.picture-p').textContent = "자경전(慈慶殿)은 1867년(고종 4) 경복궁을 다시 지을 때 신정황후 조씨(24대 헌종의 어머니이자 26대 고종의 양어머니, 대한제국 선포 후 황후로 추존됨)를 위해 지은 건물이다. 그러나 지은 지 얼마 지나지 않아 화재로 소실된 것을 1888년(고종 25)에 다시 지어 지금까지 남아 있는 건물이다. 자경전 주변으로는 복안당(福安堂)과 청연루(淸讌樓), 협경당(協慶堂) 등 부속건물을 따로 두었는데 모두 연결되어 있다.";
}

function click10() {
    document.querySelector('.picture-h2').textContent = "흥복전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4822)";
    document.querySelector('.picture-p').textContent = "흥복전(興福殿)은 고종 대 경복궁을 다시 지을 때 처음 지어졌다. 이곳은 고종 연간에 독일, 일본, 이탈리아, 프랑스 등 외국 사신을 접견했다는 기록이 있다. 이후 신정황후 조씨(24대 헌종의 어머니이자 26대 고종의 양어머니, 대한제국 선포 후 황후로 추존됨)가 세상을 떠난 곳이기도 하다. 흥복전은 일제강점기 때 철거되었다가 2020년에 복원하였다.";
}

function click11() {
    document.querySelector('.picture-h2').textContent = "향원정";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4823)";
    document.querySelector('.picture-p').textContent = "향원정(香遠亭)은 1873년(고종 10) 고종이 건청궁을 지을 때 그 앞에 연못(향원지)을 파서 연못 가운데 섬을 만들고 2층의 육모지붕의 형태로 지었다. 향원정을 가기 위해 지은 다리는 ‘향기에 취한다’라는 뜻에 취향교(醉香橋)라고 불렀다. 2017년부터 2020년까지 향원정 보수공사 때 취향교는 원래의 자리로 복원하였다.";
}

function click12() {
    document.querySelector('.picture-h2').textContent = "건청궁";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4824)";
    document.querySelector('.picture-p').textContent = "건청궁(乾淸宮)은 1873년(고종 10)에 왕과 왕비의 생활공간으로 지어진 궁 안의 궁이다. 건청궁의 왕의 생활공간인 장안당(長安堂)과 왕비의 생활공간인 곤녕합(坤寧閤) 등으로 구성되어 있는데, 장안당과 곤녕합은 복도로 이어져 있다. 이곳에서 고종과 명성황후는 10년 정도 생활하였다. 2007년에 지금의 모습으로 복원하였다.";
}

function click13() {
    document.querySelector('.picture-h2').textContent = "집옥재";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4825)";
    document.querySelector('.picture-p').textContent = "집옥재(集玉齋)는 1891년(고종 28) 창덕궁 함녕전의 별당이었던 집옥재와 협길당 등을 건청궁 서쪽으로 옮겨지은 것으로, 고종의 서재와 외국 사신을 접견하던 장소로 사용되었다. 집옥재를 중심으로 왼쪽에 팔우정(八隅亭), 오른쪽에 협길당(協吉堂)이 있다. 집옥재는 경복궁의 전각 중 유일하게 현판이 세로형으로 되어있다.";
}

function click14() {
    document.querySelector('.picture-h2').textContent = "태원전";
    document.querySelector('.picture-img').style.backgroundImage = "url(https://royal.cha.go.kr/afile/preview/4826)";
    document.querySelector('.picture-p').textContent = "태원전(泰元殿)은 태조의 어진을 모셨고, 이후에는 빈전(殯殿, 왕과 왕비가 세상을 떠난 후 발인하기 전까지 재궁(관)을 모셔둔 건물)으로 사용되었다. 태원전 주변에는 부속 건물인 문경전(文慶殿)과 공묵재(恭默齋), 영사재(永思齋) 등 의례용 건물이 있다. 태원전은 2006년에 현재 모습으로 복원하였다.";
}


//코스 팝업 이벤트
const course = document.querySelectorAll('.coursebox');
const popupCourse = document.querySelectorAll('.coursebox-popup');

const clear1 = document.querySelector('.clear1');
const clear2 = document.querySelector('.clear2');
const clear3 = document.querySelector('.clear3');

const Popup = document.querySelectorAll('.pop-up');

course[0].addEventListener('click', ()=>{
    Popup[0].classList.remove('hidden');
    course[0].classList.add('selectColor');
    popupCourse[0].style.backgroundColor = "black";
    popupCourse[0].style.color = "white";    
});

popupCourse[0].addEventListener('click', ()=>{
    Popup[0].classList.remove('hidden')
    course[0].classList.add('selectColor');
    popupCourse[0].style.backgroundColor = "black";
    popupCourse[0].style.color = "white";
});

clear1.addEventListener('click', ()=>{
    Popup[0].classList.add('hidden')
    course[0].classList.remove('selectColor');
    popupCourse[0].style.backgroundColor = null;
    popupCourse[0].style.color = "gray";
});

course[1].addEventListener('click', ()=>{
    Popup[1].classList.remove('hidden')
    course[1].classList.add('selectColor');
    popupCourse[1].style.backgroundColor = "black";
    popupCourse[1].style.color = "white";    
});

popupCourse[1].addEventListener('click', ()=>{
    Popup[1].classList.remove('hidden')
    course[1].classList.add('selectColor');
    popupCourse[1].style.backgroundColor = "black";
    popupCourse[1].style.color = "white";
});

clear2.addEventListener('click', ()=>{
    Popup[1].classList.add('hidden')
    course[1].classList.remove('selectColor');
    popupCourse[1].style.backgroundColor = null;
    popupCourse[1].style.color = "gray";
});

course[2].addEventListener('click', ()=>{
    Popup[2].classList.remove('hidden')
    course[2].classList.add('selectColor');
    popupCourse[2].style.backgroundColor = "black";
    popupCourse[2].style.color = "white";
});

clear3.addEventListener('click', ()=>{
    Popup[2].classList.add('hidden')
    course[2].classList.remove('selectColor');
    popupCourse[2].style.backgroundColor = null;
    popupCourse[2].style.color = "gray";
});


//팝업 이미지 슬라이드 이벤트
const slides = document.querySelector('.slides');

const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next')

const Item40 = document.querySelectorAll('.item40');
const Item60 = document.querySelectorAll('.item60');
const Item90 = document.querySelectorAll('.item90');

next[0].addEventListener('click', ()=>{
    Item40[0].style.left = "-100%";
    Item40[1].style.left = "-100%";
    Item40[2].style.left = "-100%";
    Item40[3].style.left = "-100%";
    Item40[4].style.left = "-100%";
    Item40[5].style.left = "-100%";
});

prev[0].addEventListener('click', ()=>{
    Item40[0].style.left = "0%";
    Item40[1].style.left = "0%";
    Item40[2].style.left = "0%";
    Item40[3].style.left = "0%";
    Item40[4].style.left = "0%";
    Item40[5].style.left = "0%";
});

next[1].addEventListener('click', ()=>{
    Item60[0].style.left = "-100%";
    Item60[1].style.left = "-100%";
    Item60[2].style.left = "-100%";
    Item60[3].style.left = "-100%";
    Item60[4].style.left = "-100%";
    Item60[5].style.left = "-100%";
    Item60[6].style.left = "-100%";
    Item60[7].style.left = "-100%";
    Item60[8].style.left = "-100%";
});

prev[1].addEventListener('click', ()=>{
    Item60[0].style.left = "0%";
    Item60[1].style.left = "0%";
    Item60[2].style.left = "0%";
    Item60[3].style.left = "0%";
    Item60[4].style.left = "0%";
    Item60[5].style.left = "0%";
    Item60[6].style.left = "0%";
    Item60[7].style.left = "0%";
    Item60[8].style.left = "0%";
});

next[2].addEventListener('click', ()=>{
    Item90[0].style.left = "-100%";
    Item90[1].style.left = "-100%";
    Item90[2].style.left = "-100%";
    Item90[3].style.left = "-100%";
    Item90[4].style.left = "-100%";
    Item90[5].style.left = "-100%";
    Item90[6].style.left = "-100%";
    Item90[7].style.left = "-100%";
    Item90[8].style.left = "-100%";
    Item90[9].style.left = "-100%";
});

prev[2].addEventListener('click', ()=>{
    Item90[0].style.left = "0%";
    Item90[1].style.left = "0%";
    Item90[2].style.left = "0%";
    Item90[3].style.left = "0%";
    Item90[4].style.left = "0%";
    Item90[5].style.left = "0%";
    Item90[6].style.left = "0%";
    Item90[7].style.left = "0%";
    Item90[8].style.left = "0%";
    Item90[9].style.left = "0%";
});

//설문조사 입력창 
document.querySelector('.reserachButton').addEventListener('click', ()=>{
    let valid = false;
    const reserach = document.getElementsByName('reserach');

    for (var i = 0; i < reserach.length; i++) {
        if (reserach[i].checked) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert('의견을 남겨주셔서 감사합니다.');
    } else {
        alert('만족도를 선택해주세요.');
    }
});