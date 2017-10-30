function all() {
	$("#al").css("backgroundColor", "#f66d5b");
	$("#al").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#f66d5b");
	$("#al_").css("color" , "#FFFFFF");
	$("#2017").css("backgroundColor", "#f66d5b");
	$("#2017").css("color" , "#FFFFFF");
	$("#monthall").css("backgroundColor", "#f66d5b");
	$("#monthall").css("color" , "#FFFFFF");
	$("#number1").css("backgroundColor", "#f66d5b");
	$("#number1").css("color" , "#FFFFFF");
	$("#popularbutton").css("backgroundColor", "#f66d5b");
	checkContentType(4); //default로 되게 아무숫자
}

function al() {
	$("#al").css("backgroundColor", "#f66d5b");
	$("#al").css("color" , "#FFFFFF");
	$("#toursite").css("backgroundColor", "#f66d5b");
	$("#toursite").css("color" , "#FFFFFF");
	$("#culture").css("backgroundColor", "#f66d5b");
	$("#culture").css("color" , "#FFFFFF");
	$("#leports").css("backgroundColor", "#f66d5b");
	$("#leports").css("color" , "#FFFFFF");
    checkContentType(4); //default
}

function toursite() {
	$("#toursite").css("backgroundColor", "#f66d5b");
	$("#toursite").css("color" , "#FFFFFF");
	$("#al").css("backgroundColor", "#FFFFFF");
	$("#al").css("color" , "black");
	$("#culture").css("backgroundColor", "#FFFFFF");
	$("#culture").css("color" , "black");
	$("#leports").css("backgroundColor", "#FFFFFF");
	$("#leports").css("color" , "black");
    checkContentType(1);
}

function culture() {
	$("#culture").css("backgroundColor", "#f66d5b");
	$("#culture").css("color" , "#FFFFFF");
	$("#al").css("backgroundColor", "#FFFFFF");
	$("#al").css("color" , "black");
	$("#toursite").css("backgroundColor", "#FFFFFF");
	$("#toursite").css("color" , "black");
	$("#leports").css("backgroundColor", "#FFFFFF");
	$("#leports").css("color" , "black");
    checkContentType(2);
}

function leports() {
	$("#leports").css("backgroundColor", "#f66d5b");
	$("#leports").css("color" , "#FFFFFF");
	$("#al").css("backgroundColor", "#FFFFFF");
	$("#al").css("color" , "black");
	$("#culture").css("backgroundColor", "#FFFFFF");
	$("#culture").css("color" , "black");
	$("#toursite").css("backgroundColor", "#FFFFFF");
	$("#toursite").css("color" , "black");
    checkContentType(3);
}
/*-------------------------------------------------------------------------------*/
function al_() {
	$("#al_").css("backgroundColor", "#f66d5b");
	$("#al_").css("color" , "#FFFFFF");
	$("#seoul").css("backgroundColor", "#f66d5b");
	$("#seoul").css("color" , "#FFFFFF");
	$("#incheon").css("backgroundColor", "#f66d5b");
	$("#incheon").css("color" , "#FFFFFF");
	$("#daejeon").css("backgroundColor", "#f66d5b");
	$("#daejeon").css("color" , "#FFFFFF");
	$("#daegu").css("backgroundColor", "#f66d5b");
	$("#daegu").css("color" , "#FFFFFF");
	$("#gwangju").css("backgroundColor", "#f66d5b");
	$("#gwangju").css("color" , "#FFFFFF");
	$("#busan").css("backgroundColor", "#f66d5b");
	$("#busan").css("color" , "#FFFFFF");
	$("#ulsan").css("backgroundColor", "#f66d5b");
	$("#ulsan").css("color" , "#FFFFFF");
	$("#sejong").css("backgroundColor", "#f66d5b");
	$("#sejong").css("color" , "#FFFFFF");
	$("#gyeonggi").css("backgroundColor", "#f66d5b");
	$("#gyeonggi").css("color" , "#FFFFFF");
	$("#gangwon").css("backgroundColor", "#f66d5b");
	$("#gangwon").css("color" , "#FFFFFF");
	$("#chungbuk").css("backgroundColor", "#f66d5b");
	$("#chungbuk").css("color" , "#FFFFFF");
	$("#chungnam").css("backgroundColor", "#f66d5b");
	$("#chungnam").css("color" , "#FFFFFF");
	$("#gyeongbuk").css("backgroundColor", "#f66d5b");
	$("#gyeongbuk").css("color" , "#FFFFFF");
	$("#gyeongnam").css("backgroundColor", "#f66d5b");
	$("#gyeongnam").css("color" , "#FFFFFF");
	$("#jeonbuk").css("backgroundColor", "#f66d5b");
	$("#jeonbuk").css("color" , "#FFFFFF");
	$("#jeonnam").css("backgroundColor", "#f66d5b");
	$("#jeonnam").css("color" , "#FFFFFF");
	$("#jeju").css("backgroundColor", "#f66d5b");
	$("#jeju").css("color" , "#FFFFFF");
	checkAreaCode(999); //default 아무숫자
}

function seoul() {
	$("#seoul").css("backgroundColor", "#f66d5b");
	$("#seoul").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(1);
}


function incheon() {
	$("#incheon").css("backgroundColor", "#f66d5b");
	$("#incheon").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(2);
}

function daejeon() {
	$("#daejeon").css("backgroundColor", "#f66d5b");
	$("#daejeon").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(3);
}

function daegu() {
	$("#daegu").css("backgroundColor", "#f66d5b");
	$("#daegu").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(4);
}

function gwangju() {
	$("#gwangju").css("backgroundColor", "#f66d5b");
	$("#gwangju").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(5);
}

function busan() {
	$("#busan").css("backgroundColor", "#f66d5b");
	$("#busan").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(6);
}

function ulsan() {
	$("#ulsan").css("backgroundColor", "#f66d5b");
	$("#ulsan").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(7);
}

function sejong() {
	$("#sejong").css("backgroundColor", "#f66d5b");
	$("#sejong").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(8);
}

function gyeonggi() {
	$("#gyeonggi").css("backgroundColor", "#f66d5b");
	$("#gyeonggi").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black")
    checkAreaCode(9);
}

function gangwon() {
	$("#gangwon").css("backgroundColor", "#f66d5b");
	$("#gangwon").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(10);
}

function chungbuk() {
	$("#chungbuk").css("backgroundColor", "#f66d5b");
	$("#chungbuk").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(11);
}

function chungnam() {
	$("#chungnam").css("backgroundColor", "#f66d5b");
	$("#chungnam").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(12);
}

function gyeongbuk() {
	$("#gyeongbuk").css("backgroundColor", "#f66d5b");
	$("#gyeongbuk").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(13);
}

function gyeongnam() {
	$("#gyeongnam").css("backgroundColor", "#f66d5b");
	$("#gyeongnam").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(14);
}

function jeonbuk() {
	$("#jeonbuk").css("backgroundColor", "#f66d5b");
	$("#jeonbuk").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(15);
}


function jeonnam() {
	$("#jeonnam").css("backgroundColor", "#f66d5b");
	$("#jeonnam").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeju").css("backgroundColor", "#FFFFFF");
	$("#jeju").css("color" , "black");
    checkAreaCode(16);
}


function jeju() {
	$("#jeju").css("backgroundColor", "#f66d5b");
	$("#jeju").css("color" , "#FFFFFF");
	$("#al_").css("backgroundColor", "#FFFFFF");
	$("#al_").css("color" , "black");
	$("#seoul").css("backgroundColor", "#FFFFFF");
	$("#seoul").css("color" , "black");
	$("#incheon").css("backgroundColor", "#FFFFFF");
	$("#incheon").css("color" , "black");
	$("#daejeon").css("backgroundColor", "#FFFFFF");
	$("#daejeon").css("color" , "black");
	$("#daegu").css("backgroundColor", "#FFFFFF");
	$("#daegu").css("color" , "black");
	$("#gwangju").css("backgroundColor", "#FFFFFF");
	$("#gwangju").css("color" , "black");
	$("#busan").css("backgroundColor", "#FFFFFF");
	$("#busan").css("color" , "black");
	$("#ulsan").css("backgroundColor", "#FFFFFF");
	$("#ulsan").css("color" , "black");
	$("#sejong").css("backgroundColor", "#FFFFFF");
	$("#sejong").css("color" , "black");
	$("#gyeonggi").css("backgroundColor", "#FFFFFF");
	$("#gyeonggi").css("color" , "black");
	$("#gangwon").css("backgroundColor", "#FFFFFF");
	$("#gangwon").css("color" , "black");
	$("#chungbuk").css("backgroundColor", "#FFFFFF");
	$("#chungbuk").css("color" , "black");
	$("#chungnam").css("backgroundColor", "#FFFFFF");
	$("#chungnam").css("color" , "black");
	$("#gyeongbuk").css("backgroundColor", "#FFFFFF");
	$("#gyeongbuk").css("color" , "black");
	$("#gyeongnam").css("backgroundColor", "#FFFFFF");
	$("#gyeongnam").css("color" , "black");
	$("#jeonbuk").css("backgroundColor", "#FFFFFF");
	$("#jeonbuk").css("color" , "black");
	$("#jeonnam").css("backgroundColor", "#FFFFFF");
	$("#jeonnam").css("color" , "black");
    checkAreaCode(17);
}
/*-------------------------------------------------------------------------------*/
function year17() {
	$("#2017").css("backgroundColor", "#f66d5b");
	$("#2017").css("color" , "#FFFFFF");
	$("#2016").css("backgroundColor", "#FFFFFF");
	$("#2016").css("color" , "black");
	$("#2015").css("backgroundColor", "#FFFFFF");
	$("#2015").css("color" , "black");
}

function year16() {
	$("#2016").css("backgroundColor", "#f66d5b");
	$("#2016").css("color" , "#FFFFFF");
	$("#2017").css("backgroundColor", "#FFFFFF");
	$("#2017").css("color" , "black");
	$("#2015").css("backgroundColor", "#FFFFFF");
	$("#2015").css("color" , "black");
}

function year15() {
	$("#2015").css("backgroundColor", "#f66d5b");
	$("#2015").css("color" , "#FFFFFF");
	$("#2017").css("backgroundColor", "#FFFFFF");
	$("#2017").css("color" , "black");
	$("#2016").css("backgroundColor", "#FFFFFF");
	$("#2016").css("color" , "black");
}
/*-------------------------------------------------------------------------------*/
function monthall() {
	$("#monthall").css("backgroundColor", "#f66d5b");
	$("#monthall").css("color" , "#FFFFFF");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month1() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month1").css("backgroundColor", "#f66d5b");
	$("#month1").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month2() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month2").css("backgroundColor", "#f66d5b");
	$("#month2").css("color" , "#FFFFFF");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month3() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month3").css("backgroundColor", "#f66d5b");
	$("#month3").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month4() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month4").css("backgroundColor", "#f66d5b");
	$("#month4").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month5() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month5").css("backgroundColor", "#f66d5b");
	$("#month5").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month6() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month6").css("backgroundColor", "#f66d5b");
	$("#month6").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month7() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month7").css("backgroundColor", "#f66d5b");
	$("#month7").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month8() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month8").css("backgroundColor", "#f66d5b");
	$("#month8").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month9() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month9").css("backgroundColor", "#f66d5b");
	$("#month9").css("color" , "#FFFFFF");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month10() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#f66d5b");
	$("#month10").css("color" , "#FFFFFF");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month11() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#f66d5b");
	$("#month11").css("color" , "#FFFFFF");
	$("#month12").css("backgroundColor", "#FFFFFF");
	$("#month12").css("color" , "black");
}

function month12() {
	$("#monthall").css("backgroundColor", "#FFFFFF");
	$("#monthall").css("color" , "black");
	$("#month1").css("backgroundColor", "#FFFFFF");
	$("#month1").css("color" , "black");
	$("#month2").css("backgroundColor", "#FFFFFF");
	$("#month2").css("color" , "black");
	$("#month3").css("backgroundColor", "#FFFFFF");
	$("#month3").css("color" , "black");
	$("#month4").css("backgroundColor", "#FFFFFF");
	$("#month4").css("color" , "black");
	$("#month5").css("backgroundColor", "#FFFFFF");
	$("#month5").css("color" , "black");
	$("#month6").css("backgroundColor", "#FFFFFF");
	$("#month6").css("color" , "black");
	$("#month7").css("backgroundColor", "#FFFFFF");
	$("#month7").css("color" , "black");
	$("#month8").css("backgroundColor", "#FFFFFF");
	$("#month8").css("color" , "black");
	$("#month9").css("backgroundColor", "#FFFFFF");
	$("#month9").css("color" , "black");
	$("#month10").css("backgroundColor", "#FFFFFF");
	$("#month10").css("color" , "black");
	$("#month11").css("backgroundColor", "#FFFFFF");
	$("#month11").css("color" , "black");
	$("#month12").css("backgroundColor", "#f66d5b");
	$("#month12").css("color" , "#FFFFFF");
}
/*-------------------------------------------------------------------------*/
function number1() {
	$("#number1").css("backgroundColor", "#f66d5b");
	$("#number1").css("color" , "white");
	$("#number2").css("backgroundColor", "#FFFFFF");
	$("#number2").css("color" , "black");
	$("#number3").css("backgroundColor", "#FFFFFF");
	$("#number3").css("color" , "black");
}

function number2() {
	$("#number2").css("backgroundColor", "#f66d5b");
	$("#number2").css("color" , "white");
	$("#number1").css("backgroundColor", "#FFFFFF");
	$("#number1").css("color" , "black");
	$("#number3").css("backgroundColor", "#FFFFFF");
	$("#number3").css("color" , "black");

}

function number3() {
	$("#number3").css("backgroundColor", "#f66d5b");
	$("#number3").css("color" , "white");
	$("#number2").css("backgroundColor", "#FFFFFF");
	$("#number2").css("color" , "black");
	$("#number1").css("backgroundColor", "#FFFFFF");
	$("#number1").css("color" , "black");

}
/*-------------------------------------------------------------------------*/
function popularbutton() {
	$("#popularbutton").css("background", "#f66d5b");
	$("#recentbutton").css("background", "#DDDDDD");
}

function recentbutton() {
	$("#popularbutton").css("background", "#DDDDDD");
	$("#recentbutton").css("background", "#f66d5b");
}