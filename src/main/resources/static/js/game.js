  let serachTime = "";
  let serachList = "";
  let searchAnswers = "";
  let searchStart ="";
  let searchInput = "";
  let searchAudio = "";
  let searchNum = "";
  let musicStop = "";
  let searchResult = "";
  let searchResultWrap = "";
  let searchRestart = "";
 let cssProperty="";
 let timeReamining = 120, // 남은 시간
    score = 0, // 점수
    answers = {}; // 새로운 정답

  let answerCount = 0;
  let Timer = 0;
$(function () {
  $(".ruleView").hide();

  $(".rule").click(function () {
    $(".ruleView").slideToggle(500);
  });

   cssProperty = [
    { num: 1, name: "명량" },
    { num: 2, name: "극한직업" },
    { num: 3, name: "신과함께" },
    { num: 4, name: "국제시장" },
    { num: 5, name: "어벤져스" },
    { num: 6, name: "겨울왕국" },
    { num: 7, name: "아바타" },
    { num: 8, name: "베테랑" },
    { num: 9, name: "괴물" },
    { num: 10, name: "도둑들" },
    { num: 11, name: "칠번방의선물" },
    { num: 12, name: "암살" },
    { num: 13, name: "범죄도시" },
    { num: 14, name: "알라딘" },
    { num: 15, name: "광해" },
    { num: 16, name: "왕의남자" },
    { num: 17, name: "택시운전사" },
    { num: 18, name: "태극기휘날리며" },
    { num: 19, name: "부산행" },
    { num: 20, name: "해운대" },
    { num: 21, name: "변호인" },
    { num: 22, name: "실미도" },
    { num: 23, name: "아바타" },
    { num: 24, name: "기생충" },
    { num: 25, name: "인터스텔라" },
    { num: 26, name: "보헤미안랩소디" },
    { num: 27, name: "검사외전" },
    { num: 28, name: "엑시트" },
    { num: 29, name: "설국열차" },
    { num: 30, name: "관상" },
    { num: 31, name: "아이언맨" },
    { num: 32, name: "캡틴아메리카" },
    { num: 33, name: "해적" },
    { num: 34, name: "수상한그녀" },
    { num: 35, name: "국가대표" },
    { num: 36, name: "디워" },
    { num: 37, name: "백두산" },
    { num: 38, name: "과속스캔들" },
    { num: 39, name: "탑건" },
    { num: 40, name: "스파이더맨" },
    { num: 41, name: "웰컴투동막골" },
    { num: 42, name: "공조" },
    { num: 43, name: "트랜스포머" },
    { num: 44, name: "히말라야" },
    { num: 45, name: "미션임파서블" },
    { num: 46, name: "밀정" },
    { num: 47, name: "최종병기활" },
    { num: 48, name: "써니" },
    { num: 49, name: "화려한휴가" },
    { num: 50, name: "한산" },
    { num: 51, name: "베를린" },
    { num: 52, name: "마스터" },
    { num: 53, name: "터널" },
    { num: 54, name: "내부자들" },
    { num: 55, name: "인천상륙작전" },
    { num: 56, name: "럭키" },
    { num: 57, name: "은밀하게위대하게" },
    { num: 58, name: "곡성" },
    { num: 59, name: "범죄도시" },
    { num: 60, name: "타짜" },
    { num: 61, name: "좋은놈나쁜놈이상한놈" },
    { num: 62, name: "늑대소년" },
    { num: 63, name: "미녀는괴로워" },
    { num: 64, name: "군함도" },
    { num: 65, name: "다크나이트" },
    { num: 66, name: "아저씨" },
    { num: 67, name: "사도" },
    { num: 68, name: "전우치" },
    { num: 69, name: "킹스맨" },
    { num: 70, name: "투사부일체" },
    { num: 71, name: "연평해전" },
    { num: 72, name: "반지의제왕" },
    { num: 73, name: "인셉션" },
    { num: 74, name: "레미제라블" },
    { num: 75, name: "닥터스트레인지" },
    { num: 76, name: "쉬리" },
    { num: 77, name: "캡틴마블" },
    { num: 78, name: "쥬라기월드" },
    { num: 79, name: "청년경찰" },
    { num: 80, name: "가문의위기" },
    { num: 81, name: "숨바꼭질" },
    { num: 82, name: "덕혜옹주" },
    { num: 83, name: "더테러" },
    { num: 84, name: "감시자들" },
    { num: 85, name: "의형제" },
    { num: 86, name: "앤트맨과와스프" },
    { num: 87, name: "검은사제들" },
    { num: 88, name: "안시성" },
    { num: 89, name: "블랙팬서" },
    { num: 90, name: "더킹" },
    { num: 91, name: "완득이" },
    { num: 92, name: "완벽한타인" },
    { num: 93, name: "살인의추억" },
    { num: 94, name: "조커" },
    { num: 95, name: "월드워제트" },
    { num: 96, name: "타워" },
    { num: 97, name: "말아톤" },
    { num: 98, name: "미녀와야수" },
    { num: 99, name: "추격자" },

    { num: 100, name: "독전" },
    { num: 101, name: "쿵푸팬더" },
    { num: 102, name: "아쿠아맨" },
    { num: 103, name: "공작" },
    { num: 104, name: "인사이드아웃" },
    { num: 105, name: "캐리비안의해적" },
    { num: 106, name: "동갑내기과외하기" },
    { num: 107, name: "바람과함께사라지다" },
    { num: 108, name: "미션" },
    { num: 109, name: "토르" },
    { num: 110, name: "님아그강을건너지마오" },
    { num: 111, name: "봉오동전투" },
    { num: 112, name: "조선명탐정" },
    { num: 113, name: "군도" },
    { num: 114, name: "남산의부장들" },
    { num: 115, name: "라이온킹" },
    { num: 116, name: "범죄와의전쟁" },
    { num: 117, name: "주토피아" },
    { num: 118, name: "엣지오브투모로우" },
    { num: 119, name: "신세계" },
    { num: 120, name: "신비한동물사전" },
    { num: 121, name: "도가니" },
    { num: 122, name: "박물관이살아있다" },
    { num: 123, name: "내아내의모든것" },
    { num: 124, name: "판도라" },
    { num: 125, name: "터미네이터" },
    { num: 126, name: "맘마미아" },
    { num: 127, name: "연가시" },
    { num: 128, name: "강철비" },
    { num: 129, name: "해리포터" },
    { num: 130, name: "다만악에서구하소서" },
    { num: 131, name: "헌트" },
    { num: 132, name: "엑스맨" },
    { num: 133, name: "아가씨" },
    { num: 134, name: "킹콩" },
    { num: 135, name: "인디아나존스" },
    { num: 136, name: "용의자" },
    { num: 137, name: "건축학개론" },
    { num: 138, name: "태풍" },
    { num: 139, name: "미이라" },
    { num: 140, name: "칠급공무원" },
    { num: 141, name: "색즉시공" },
    { num: 142, name: "댄싱퀸" },
    { num: 143, name: "우리생애최고의순간" },
    { num: 144, name: "꾼" },
    { num: 145, name: "혹성탈출" },
    { num: 146, name: "박수건달" },
    { num: 147, name: "공공의적" },
    { num: 148, name: "베놈" },
    { num: 149, name: "한반도" },
    { num: 150, name: "트로이" },
    { num: 151, name: "역린" },
    { num: 152, name: "남한산성" },
    { num: 153, name: "매드맥스" },
    { num: 154, name: "반도" },
    { num: 155, name: "암수살인" },
    { num: 156, name: "데드풀" },
    { num: 157, name: "쌍화점" },
    { num: 158, name: "국가부도의날" },
    { num: 159, name: "신기전" },
    { num: 160, name: "팔십이년생김지영" },
    { num: 161, name: "너의이름은" },
    { num: 162, name: "분노의질주" },
    { num: 163, name: "친절한금자씨" },
    { num: 164, name: "더퍼스트슬램덩크" },
    { num: 165, name: "모가디슈" },
    { num: 166, name: "인턴" },
    { num: 167, name: "라라랜드" },
    { num: 168, name: "귀향" },
    { num: 169, name: "리얼스틸" },
    { num: 170, name: "신의한수" },
    { num: 171, name: "미스터앤미세스스미스" },
    { num: 172, name: "스캔들" },
    { num: 173, name: "코코" },
    { num: 174, name: "가문의부활" },
    { num: 175, name: "부러진화살" },
    { num: 176, name: "끝까지간다" },
    { num: 177, name: "스파이" },
    { num: 178, name: "아일랜드" },
    { num: 179, name: "비긴어게인" },
    { num: 180, name: "그것만이내세상" },
    { num: 181, name: "이끼" },
    { num: 182, name: "토이스토리" },
    { num: 183, name: "어바웃타임" },
    { num: 184, name: "돈" },
    { num: 185, name: "포화속으로" },
    { num: 186, name: "다이하드" },
    { num: 187, name: "맨인블랙" },
    { num: 188, name: "악인전" },
    { num: 189, name: "다빈치코드" },
    { num: 190, name: "올빼미" },
    { num: 191, name: "슈퍼배드" },
    { num: 192, name: "시동" },
    { num: 193, name: "슈렉" },
    { num: 194, name: "아이캔스피크" },
    { num: 195, name: "스타워즈" },
    { num: 196, name: "올드보이" },
    { num: 197, name: "영웅" },
    { num: 198, name: "그래비티" },
    { num: 199, name: "우주전쟁" },

    { num: 200, name: "마녀" },
    { num: 201, name: "탐정" },
    { num: 202, name: "어린신부" },
    { num: 203, name: "오브라더스" },
    { num: 204, name: "장화홍련" },
    { num: 205, name: "그놈목소리" },
    { num: 206, name: "우리들의행복한시간" },
    { num: 207, name: "퀵" },
    { num: 208, name: "감기" },
    { num: 209, name: "말죽거리잔혹사" },
    { num: 210, name: "광복절특사" },
    { num: 211, name: "나우유씨미" },
    { num: 212, name: "마파도" },
    { num: 213, name: "하모니" },
    { num: 214, name: "거북이달린다" },
    { num: 215, name: "너는내운명" },
    { num: 216, name: "이터널스" },
    { num: 217, name: "스물" },
    { num: 218, name: "식객" },
    { num: 219, name: "방자전" },
    { num: 220, name: "인크레더블" },
    { num: 221, name: "하울의움직이는성" },
    { num: 222, name: "마더" },
    { num: 223, name: "오싹한연애" },
    { num: 224, name: "투모로우" },
    { num: 225, name: "레드" },
    { num: 226, name: "드래곤길들이기" },
    { num: 227, name: "형" },
    { num: 228, name: "황금나침반" },
    { num: 229, name: "친구" },
    { num: 230, name: "워낭소리" },
    { num: 231, name: "블랙위도우" },
    { num: 232, name: "고지전" },
    { num: 233, name: "서치" },
    { num: 234, name: "가장보통의연애" },
    { num: 235, name: "솔트" },
    { num: 236, name: "헬로우고스트" },
    { num: 237, name: "귀신이산다" },
    { num: 238, name: "원티드" },
    { num: 239, name: "말포이" },
    { num: 240, name: "극비수사" },
    { num: 241, name: "표적" },
    { num: 242, name: "호빗" },
    { num: 243, name: "너의결혼식" },
    { num: 244, name: "메이즈러너" },
    { num: 245, name: "빅히어로" },
    { num: 246, name: "덩케르크" },
    { num: 247, name: "황산벌" },
    { num: 248, name: "부당거래" },
    { num: 249, name: "일번가의기적" },
    { num: 250, name: "삼백" },
    { num: 251, name: "가디언즈오브갤럭시" },
    { num: 252, name: "시라노연애조작단" },
    { num: 253, name: "핸콕" },
    { num: 254, name: "미스페레그린과이상한아이들의집" },
    { num: 255, name: "적벽대전" },
    { num: 256, name: "지아이조" },
    { num: 257, name: "소원" },
    { num: 258, name: "타이탄" },
    { num: 259, name: "곤지암" },
    { num: 260, name: "살인자의기억법" },
    { num: 261, name: "브레이킹던" },
    { num: 262, name: "후궁" },
    { num: 263, name: "미니언즈" },
    { num: 264, name: "제이슨본" },
    { num: 265, name: "지금만나러갑니다" },
    { num: 266, name: "도리를찾아서" },
    { num: 267, name: "위험한상견례" },
    { num: 268, name: "아수라" },
    { num: 269, name: "보안관" },
    { num: 270, name: "굿모닝프레지던트" },
    { num: 271, name: "음란서생" },
    { num: 272, name: "내머리속의지우개" },
    { num: 273, name: "기술자들" },
    { num: 274, name: "퍼시픽림" },
    { num: 275, name: "정글북" },
    { num: 276, name: "증인" },
    { num: 277, name: "내생애가장아름다운일주일" },
    { num: 278, name: "목격자" },
    { num: 279, name: "패션오브크라이스트" },
    { num: 280, name: "마이펫의이중생활" },
    { num: 281, name: "조작된도시" },
    { num: 282, name: "공동경비구역" },
    { num: 283, name: "나니아연대기" },
    { num: 284, name: "블랙머니" },
    { num: 285, name: "우리형" },
    { num: 286, name: "반창꼬" },
    { num: 287, name: "박수칠때떠나라" },
    { num: 288, name: "선생김봉두" },
    { num: 289, name: "보스베이비" },
    { num: 290, name: "화차" },
    { num: 291, name: "이웃사람" },
    { num: 292, name: "광식이동생광태" },
    { num: 293, name: "재심" },
    { num: 294, name: "신비한동물들과그린델왈드의범죄" },
    { num: 295, name: "히트맨" },
    { num: 296, name: "사바하" },
    { num: 297, name: "화이" },
    { num: 298, name: "의뢰인" },
    { num: 299, name: "테이큰" },

    { num: 300, name: "가문의수난" },
    { num: 301, name: "블라인드" },
    { num: 302, name: "박열" },
    { num: 303, name: "맨발의기봉이" },
    { num: 304, name: "바람의파이터" },
    { num: 305, name: "작업의정석" },
    { num: 306, name: "첫사랑사수궐기대회" },
    { num: 307, name: "미인도" },
    { num: 308, name: "스파이" },
    { num: 309, name: "라스트갓파더" },
    { num: 310, name: "모아나" },
    { num: 311, name: "주유소습격사건" },
    { num: 312, name: "하녀" },
    { num: 313, name: "달콤살벌한연인" },
    { num: 314, name: "나잇앤데이" },
    { num: 315, name: "혈의누" },
    { num: 316, name: "컨저링" },
    { num: 317, name: "극락도살인사건" },
    { num: 318, name: "이글아이" },
    { num: 319, name: "레디플레이어원" },
    { num: 320, name: "위대한유산" },
    { num: 321, name: "칠광구" },
    { num: 322, name: "배틀쉽" },
    { num: 323, name: "셜록홈즈" },
    { num: 324, name: "박쥐" },
    { num: 325, name: "어거스트러쉬" },
    { num: 326, name: "나는전설이다" },
    { num: 327, name: "포세이돈" },
    { num: 328, name: "싱글즈" },
    { num: 329, name: "마당을나온암탉" },
    { num: 330, name: "내여자친구를소개합니다" },
    { num: 331, name: "댄서의순정" },
    { num: 332, name: "싱크홀" },
    { num: 333, name: "악의연대기" },
    { num: 334, name: "바르게살자" },
    { num: 335, name: "늑대의유혹" },
    { num: 336, name: "이상한나라의앨리스" },
    { num: 337, name: "맨오브스틸" },
    { num: 338, name: "로건" },
    { num: 339, name: "황해" },
    { num: 340, name: "원더우먼" },
    { num: 341, name: "초능력자" },
    { num: 342, name: "내사랑내곁에" },
    { num: 343, name: "마이웨이" },
    { num: 344, name: "나의사랑나의신부" },
    { num: 345, name: "겟아웃" },
    { num: 346, name: "범죄의재구성" },
    { num: 347, name: "사랑" },
    { num: 348, name: "세븐데이즈" },
    { num: 349, name: "굿바이싱글" },
    { num: 350, name: "이클립스" },
    { num: 351, name: "사생결단" },
    { num: 352, name: "몽타주" },
    { num: 353, name: "명당" },
    { num: 354, name: "논스톱" },
    { num: 355, name: "째째한로맨스" },
    { num: 356, name: "장화신은고양이" },
    { num: 357, name: "인투더스톰" },
    { num: 358, name: "청춘만화" },
    { num: 359, name: "비상선언" },
    { num: 360, name: "뷰티인사이드" },
    { num: 361, name: "본얼티메이텀" },
    { num: 362, name: "눈에는눈이에는이" },
    { num: 363, name: "봉이김선달" },
    { num: 364, name: "아라한장풍대작전" },
    { num: 365, name: "소울" },
    { num: 366, name: "비열한거리" },
    { num: 367, name: "노아" },
    { num: 368, name: "레버넌트" },
    { num: 369, name: "오페라의유령" },
    { num: 370, name: "페르시아의왕자" },
    { num: 371, name: "천문" },
    { num: 372, name: "테넷" },
    { num: 373, name: "크루엘라" },
    { num: 374, name: "육사오" },
    { num: 375, name: "남자가사랑할때" },
    { num: 376, name: "루시" },
    { num: 377, name: "효자동이발사" },
    { num: 378, name: "협상" },
    { num: 379, name: "타이타닉" },
    { num: 380, name: "알리타" },
    { num: 381, name: "뉴문" },
    { num: 382, name: "천사와악마" },
    { num: 383, name: "애나벨" },
    { num: 384, name: "가족" },
    { num: 385, name: "터보" },
    { num: 386, name: "애자" },
    { num: 387, name: "내안의그놈" },
    { num: 388, name: "잠복근무" },
    { num: 389, name: "그림자살인" },
    { num: 390, name: "영웅" },
    { num: 391, name: "살아있다" },
    { num: 392, name: "수어사이드스쿼드" },
    { num: 393, name: "헤어질결심" },
    { num: 394, name: "오늘의연애" },
    { num: 395, name: "글러브" },
    { num: 396, name: "러브액츄얼리" },
    { num: 397, name: "라디오스타" },
    { num: 398, name: "퍼시잭슨과번개도둑" },
    { num: 399, name: "해결사" },

    { num: 400, name: "코리아" },
    { num: 401, name: "아이들" },
    { num: 402, name: "색계" },
    { num: 403, name: "하늘에서음식이내린다면" },
    { num: 404, name: "스피드레이서" },
    { num: 405, name: "킹스스피치" },
    { num: 406, name: "헝거게임" },
    { num: 407, name: "밀리언달러베이비" },
    { num: 408, name: "써로게이트" },
    { num: 409, name: "모범시민" },
    { num: 410, name: "하트오브더씨" },
    { num: 411, name: "콜래트럴" },
    { num: 412, name: "나이브스아웃" },
    { num: 413, name: "틴틴" },
    { num: 414, name: "뮌헨" },
    { num: 415, name: "브리짓존스의베이비" },
    { num: 416, name: "베이비드라이버" },
    { num: 417, name: "인시디어스" },
    { num: 418, name: "데자뷰" },
    { num: 419, name: "존카터" },
    { num: 420, name: "오션스트웰브" },
    { num: 421, name: "쉰들러리스트" },
    { num: 422, name: "스타더스트" },
    { num: 423, name: "디스트릭트" },
    { num: 424, name: "제오원소" },
    { num: 425, name: "레전드오브타잔" },
    { num: 426, name: "작은아씨들" },
    { num: 427, name: "오리엔트특급살인" },
    { num: 428, name: "나홀로집에" },
    { num: 429, name: "레모니스니켓의위험한대결" },
    { num: 430, name: "몬스터대학교" },
    { num: 431, name: "스카이라인" },
    { num: 432, name: "벤허" },
    { num: 433, name: "디스민즈워" },
    { num: 434, name: "스피드" },
    { num: 435, name: "트루라이즈" },
    { num: 436, name: "블랙" },
    { num: 437, name: "메가마인드" },
    { num: 438, name: "아이스에이지" },
    { num: 439, name: "씽투게더" },
    { num: 440, name: "몬스터호텔" },
    { num: 441, name: "그것" },
    { num: 442, name: "베오울프" },
    { num: 443, name: "버티컬리미트" },
    { num: 444, name: "타이탄의분노" },
    { num: 445, name: "매트릭스" },
    { num: 446, name: "취권" },
    { num: 447, name: "월요일이사라졌다" },
    { num: 448, name: "썬더와마법저택" },
    { num: 449, name: "배트맨" },
    { num: 450, name: "헷지" },
    { num: 451, name: "더록" },
    { num: 452, name: "투어리스트" },
    { num: 453, name: "주먹왕랄프" },
    { num: 454, name: "갓오브이집트" },
    { num: 455, name: "매그니피센트" },
    { num: 456, name: "인디펜던스데이" },
    { num: 457, name: "뉴월드" },
    { num: 458, name: "샤크" },
    { num: 459, name: "킬링필드" },
    { num: 460, name: "센과치히로의행방불명" },
    { num: 461, name: "오만과편견" },
    { num: 462, name: "일본침몰" },
    { num: 463, name: "크루즈패밀리" },
    { num: 464, name: "월터의상상은현실이된다" },
    { num: 465, name: "미비포유" },
    { num: 466, name: "새미의어드벤쳐" },
    { num: 467, name: "그는당신에게반하지않았다" },
    { num: 468, name: "스텝업" },
    { num: 469, name: "황후화" },
    { num: 470, name: "미드웨이" },
    { num: 471, name: "잭더자이언트킬러" },
    { num: 472, name: "쿵푸허슬" },
    { num: 473, name: "원초적본능" },
    { num: 474, name: "프로메테우스" },
    { num: 475, name: "콘에어" },
    { num: 476, name: "로보캅" },
    { num: 477, name: "파퍼씨네펭귄들" },
    { num: 478, name: "게이샤의추억" },
    { num: 479, name: "늑대와춤을" },
    { num: 480, name: "오스트레일리아" },
    { num: 481, name: "스카이스크래퍼" },
    { num: 482, name: "맨인더다크" },
    { num: 483, name: "존윅" },
    { num: 484, name: "셔터아일랜드" },
    { num: 485, name: "라푼젤" },
    { num: 486, name: "더넌" },
    { num: 487, name: "향수" },
    { num: 488, name: "본레거시" },
    { num: 489, name: "벤티지포인트" },
    { num: 490, name: "본레거시" },
    { num: 491, name: "로그원" },
    { num: 492, name: "에라곤" },
    { num: 493, name: "개구쟁이스머프" },
    { num: 494, name: "지오스톰" },
    { num: 495, name: "이프온리" },
    { num: 496, name: "삼국지" },
    { num: 497, name: "업" },
    { num: 498, name: "라따뚜이" },
    { num: 499, name: "빨간모자의진실" },

    { num: 500, name: "쥬만지" },
    { num: 501, name: "진주만" },
    { num: 502, name: "노잉" },
    { num: 503, name: "섹스앤더시티" },
    { num: 504, name: "가디언즈" },
    { num: 505, name: "마루밑아리에티" },
    { num: 506, name: "블레이드" },
    { num: 507, name: "오늘밤세계에서이사랑이사라진다해도" },
    { num: 508, name: "그여자작사그남자작곡" },
    { num: 509, name: "라이트아웃" },
    { num: 510, name: "스타트렉" },
    { num: 511, name: "클리프헹어" },
    { num: 512, name: "슬럼독밀리어네어" },
    { num: 513, name: "미나리" },
    { num: 514, name: "인크레더블" },
    { num: 515, name: "웜바디스" },
    { num: 516, name: "아마겟돈" },
    { num: 517, name: "브루스올마이티" },
    { num: 518, name: "엘리시움" },
    { num: 519, name: "킹아더" },
    { num: 520, name: "토탈리골" },
    { num: 521, name: "포비든킹덤" },
    { num: 522, name: "메리다와마법의숲" },
    { num: 523, name: "나비효과" },
    { num: 524, name: "꿀벌대소동" },
    { num: 525, name: "글래디에이터" },
    { num: 526, name: "마다가스카" },
    { num: 527, name: "라스트사무라이" },
    { num: 528, name: "소스코드" },
    { num: 529, name: "니모를찾아서" },
    { num: 530, name: "로맨틱홀리데이" },
    { num: 531, name: "신밧드" },
    { num: 532, name: "월이" },
    { num: 533, name: "굿다이노" },
    { num: 534, name: "터미널" },
    { num: 535, name: "드라큘라" },
    { num: 536, name: "신들의전쟁" },
    { num: 537, name: "퓨리" },
    { num: 538, name: "트와일라잇" },
    { num: 539, name: "월드인베이전" },
    { num: 540, name: "시카고" },
    { num: 541, name: "찰리와초콜릿공장" },
    { num: 542, name: "폼페이" },
    { num: 543, name: "해피데스데이" },
    { num: 544, name: "내셔널트레져" },
    { num: 545, name: "램페이지" },
    { num: 546, name: "오션스써틴" },
    { num: 547, name: "라스트에어벤더" },
    { num: 548, name: "마이너리티리포트" },
    { num: 549, name: "예스맨" },
    { num: 550, name: "위대한쇼맨" },
    { num: 551, name: "연인" },
    { num: 552, name: "잃어버린세계를찾아서" },
    { num: 553, name: "위대한개츠비" },
    { num: 554, name: "나쁜녀석들" },
    { num: 555, name: "젠틀맨리그" },
    { num: 556, name: "오블리비언" },
    { num: 557, name: "벼랑위의포뇨" },
    { num: 558, name: "사랑과영혼" },
    { num: 559, name: "듄" },
    { num: 560, name: "범블비" },
    { num: 561, name: "어스" },
    { num: 562, name: "미녀삼총사" },
    { num: 563, name: "지구가멈추는날" },
    { num: 564, name: "위플래쉬" },
    { num: 565, name: "로빈후드" },
    { num: 566, name: "닥터두리틀" },
    { num: 567, name: "블랙스완" },
    { num: 568, name: "반헬싱" },
    { num: 569, name: "마다가스카의펭귄" },
    { num: 570, name: "점퍼" },
    { num: 571, name: "킬러의보디가드" },
    { num: 572, name: "씽" },
    { num: 573, name: "악마는프라다를입는다" },
    { num: 574, name: "샌안드레아스" },
    { num: 575, name: "이미테이션게임" },
    { num: 576, name: "걸리버여행기" },
    { num: 577, name: "나를찾아줘" },
    { num: 578, name: "벤자민버튼의시간은거꾸로간다" },
    { num: 579, name: "아이로봇" },
    { num: 580, name: "작전명발키리" },
    { num: 581, name: "캐치미이프유캔" },
    { num: 582, name: "콘스탄틴" },
    { num: 583, name: "연애의온도" },
    { num: 584, name: "마약왕" },
    { num: 585, name: "구세주" },
    { num: 586, name: "조폭마누라" },
    { num: 587, name: "노무현입니다" },
    { num: 588, name: "집으로가는길" },
    { num: 589, name: "악마를보았다" },
    { num: 590, name: "바람피기좋은날" },
    { num: 591, name: "뺑반" },
    { num: 592, name: "흡혈형사나도열" },
    { num: 593, name: "변신" },
    { num: 594, name: "목포는항구다" },
    { num: 595, name: "아내가결혼했다" },
    { num: 596, name: "여고괴담" },
    { num: 597, name: "공범" },
    { num: 598, name: "대호" },
    { num: 599, name: "제보자" },

    { num: 600, name: "바람난가족" },
    { num: 601, name: "거룩한계보" },
    { num: 602, name: "전설의주먹" },
    { num: 603, name: "연애의목적" },
    { num: 604, name: "엽기적인그녀" },
    { num: 605, name: "주먹이운다" },
    { num: 606, name: "러브픽션" },
    { num: 607, name: "교섭" },
    { num: 608, name: "담보" },
    { num: 609, name: "평양성" },
    { num: 610, name: "파파로티" },
    { num: 611, name: "쎄시봉" },
    { num: 612, name: "밀양" },
    { num: 613, name: "님은먼곳에" },
    { num: 614, name: "품행제로" },
    { num: 615, name: "불꽃처럼나비처럼" },
    { num: 616, name: "알포인트" },
    { num: 617, name: "피끓는청춘" },
    { num: 618, name: "공모자들" },
    { num: 619, name: "그대를사랑합니다" },
    { num: 620, name: "인질" },
    { num: 621, name: "임금님의사건수첩" },
    { num: 622, name: "고사" },
    { num: 623, name: "걸캅스" },
    { num: 624, name: "두근두근내인생" },
    { num: 625, name: "권순분여사납치사건" },
    { num: 626, name: "우아한거짓말" },
    { num: 627, name: "무방비도시" },
    { num: 628, name: "하울링" },
    { num: 629, name: "복면달호" },
    { num: 630, name: "사자" },
    { num: 631, name: "신라의달밤" },
    { num: 632, name: "창궐" },
    { num: 633, name: "더폰" },
    { num: 634, name: "성난황소" },
    { num: 635, name: "간큰가족" },
    { num: 636, name: "집으로" },
    { num: 637, name: "와일드카드" },
    { num: 638, name: "삼진그룹영어토익반" },
    { num: 639, name: "무적자" },
    { num: 640, name: "원스어폰어타임" },
    { num: 641, name: "야수와미녀" },
    { num: 642, name: "도어락" },
    { num: 643, name: "용의자엑스" },
    { num: 644, name: "도굴" },
    { num: 645, name: "클래식" },
    { num: 646, name: "도굴" },
    { num: 647, name: "클래식" },
    { num: 648, name: "해바라기" },
    { num: 649, name: "정직한후보" },
    { num: 650, name: "유감스러운도시" },
    { num: 651, name: "작전" },
    { num: 652, name: "중천" },
    { num: 653, name: "내사랑싸가지" },
    { num: 654, name: "퍼펙트게임" },
    { num: 655, name: "리틀포레스트" },
    { num: 656, name: "더게임" },
    { num: 657, name: "부라더" },
    { num: 658, name: "비형남자친구" },
    { num: 659, name: "나의특별한형제" },
    { num: 660, name: "해무" },
    { num: 661, name: "차이나타운" },
    { num: 662, name: "스윙키즈" },
    { num: 663, name: "홀리데이" },
    { num: 664, name: "각설탕" },
    { num: 665, name: "인간중독" },
    { num: 666, name: "궁녀" },
    { num: 667, name: "주홍글씨" },
    { num: 668, name: "보이스" },
    { num: 669, name: "런닝맨" },
    { num: 670, name: "검은집" },
    { num: 671, name: "구르믈버서난달처럼" },
    { num: 672, name: "허브" },
    { num: 673, name: "똥개" },
    { num: 674, name: "기억의밤" },
    { num: 675, name: "골든슬럼버" },
    { num: 676, name: "역도산" },
    { num: 677, name: "브이아이피" },
    { num: 678, name: "분홍신" },
    { num: 679, name: "특별시민" },
    { num: 680, name: "차형사" },
    { num: 681, name: "은교" },
    { num: 682, name: "궁합" },
    { num: 683, name: "미스터고" },
    { num: 684, name: "청담보살" },
    { num: 685, name: "사라진밤" },
    { num: 686, name: "싸움의기술" },
    { num: 687, name: "간첩" },
    { num: 688, name: "영화는영화다" },
    { num: 689, name: "장산범" },
    { num: 690, name: "만남의광장" },
    { num: 691, name: "못말리는결혼" },
    { num: 692, name: "최강로맨스" },
    { num: 693, name: "킹콩을들다" },
    { num: 694, name: "달마야서울가자" },
    { num: 695, name: "달콤한인생" },
    { num: 696, name: "클로젯" },
    { num: 697, name: "황진이" },
    { num: 698, name: "이장과군수" },
    { num: 699, name: "즐거운인생" },

    { num: 700, name: "미스터소크라테스" },
    { num: 701, name: "브로커" },
    { num: 702, name: "달마야놀자" },
    { num: 703, name: "간기만" },
    { num: 704, name: "유열의음악앨범" },
    { num: 705, name: "신부수업" },
    { num: 706, name: "특별수사" },
    { num: 707, name: "퍼팩트맨" },
    { num: 708, name: "행복" },
    { num: 709, name: "육혈포강도단" },
    { num: 710, name: "천군" },
    { num: 711, name: "텔미썸딩" },
    { num: 712, name: "오케이마담" },
    { num: 713, name: "심야의에프엠" },
    { num: 714, name: "두사부일체" },
    { num: 715, name: "해치지않아" },
    { num: 716, name: "찌라시" },
    { num: 717, name: "결혼전야" },
    { num: 718, name: "깡철이" },
    { num: 719, name: "악녀" },
    { num: 720, name: "인사동스캔들" },
    { num: 721, name: "해빙" },
    { num: 722, name: "그녀를믿지마세요" },
    { num: 723, name: "시간이탈자" },
    { num: 724, name: "리턴투베이스" },
    { num: 725, name: "더웹툰" },
    { num: 726, name: "생일" },
    { num: 727, name: "짝패" },
    { num: 728, name: "바람바람바람" },
    { num: 729, name: "파송송계란탁" },
    { num: 730, name: "몽정기" },
    { num: 731, name: "힘을내요미스터리" },
    { num: 732, name: "빅매치" },
    { num: 733, name: "서양골동양과자점앤티크" },
    { num: 734, name: "인생은아름다워" },
    { num: 735, name: "슬로우비디오" },
    { num: 736, name: "동주" },
    { num: 737, name: "당신거기있어줄래요" },
    { num: 738, name: "돈의맛" },
    { num: 739, name: "장수상회" },
    { num: 740, name: "연애술사" },
    { num: 741, name: "항거" },
    { num: 742, name: "미씽" },
    { num: 743, name: "용서는없다" },
    { num: 744, name: "안녕형아" },
    { num: 745, name: "고령화가족" },
    { num: 746, name: "장사리" },
    { num: 747, name: "김종욱찾기" },
    { num: 748, name: "하루" },
    { num: 749, name: "챔피언" },
    { num: 750, name: "성난변호사" },
    { num: 751, name: "육년째연애중" },
    { num: 752, name: "아랑" },
    { num: 753, name: "특수본" },
    { num: 754, name: "회사원" },
    { num: 755, name: "간신" },
    { num: 756, name: "령" },
    { num: 757, name: "베스트셀러" },
    { num: 758, name: "지금사랑하는사람과살고있습니까" },
    { num: 759, name: "롱리브더킹" },
    { num: 760, name: "그때그사람들" },
    { num: 761, name: "내남자의로맨스" },
    { num: 762, name: "오해피데이" },
    { num: 763, name: "오빠생각" },
    { num: 764, name: "새드무비" },
    { num: 765, name: "날보러와요" },
    { num: 766, name: "수상한고객들" },
    { num: 767, name: "남극일기" },
    { num: 768, name: "동창생" },
    { num: 769, name: "시크릿" },
    { num: 770, name: "그놈이다" },
    { num: 771, name: "마음이" },
    { num: 772, name: "점박이" },
    { num: 773, name: "서편제" },
    { num: 774, name: "파괴된사나이" },
    { num: 775, name: "오직그대만" },
    { num: 776, name: "이중간첩" },
    { num: 777, name: "우아한세계" },
    { num: 778, name: "김관장대김관장대김관장" },
    { num: 779, name: "데이지" },
    { num: 780, name: "야수" },
    { num: 781, name: "심장이뛴다" },
    { num: 782, name: "분신사바" },
    { num: 783, name: "염력" },
    { num: 784, name: "방황하는칼날" },
    { num: 785, name: "강력삼반" },
    { num: 786, name: "방가방가" },
    { num: 787, name: "미쓰와이프" },
    { num: 788, name: "시체가돌아왔다" },
    { num: 789, name: "원더풀라디오" },
    { num: 790, name: "전국노래자랑" },
  ];

   serachTime = document.querySelector(".time span");
   serachList = document.querySelector(".search__list");
   searchAnswers = document.querySelector(".search__answers");
   searchStart = document.querySelector(".search__box .start");
   searchInput = document.querySelector("#search");
   searchAudio = document.querySelector("#audio");
   searchNum = document.querySelector(".search__info .num"); //전체 개수
   musicStop = document.querySelector(".search__audio .stop");
   searchResult = document.querySelector(".search__result .result");
   searchResultWrap = document.querySelector(".search__result");
   searchRestart = document.querySelector(".search__result .restart");





  updateList();


  // 버튼 이벤트
  searchStart.addEventListener("click", startQuiz);
  searchInput.addEventListener("input", checkInput);
  searchRestart.addEventListener("click", restart);

  console.log(searchRestart);
});


 function updateList() {
    searchNum.innerHTML = cssProperty.length; // 프로퍼티 총 갯수
  }

  // 게임 시작하기
  function startQuiz() {
    // 인풋박스 초기화
    searchInput.value = "";

    answerCount = 0;
    // 시작 버튼 없애기, 속성 리스트 없애기
    searchStart.style.display = "none";

    // 시간 설정
    // setInterval(Timer);
    Timer = setInterval(reduceTime, 1000);

    // 정답 체크
    checkAnswers();
  }

  // 인풋 체크(인풋박스 감지?)
  function checkInput() {
    let input = event.currentTarget.value.trim().toLowerCase(); // 사용자가 쓴 값

    if (answers.hasOwnProperty(input) && !answers[input]) {
      // input입력값을 확인해서 T/F 반환
      answers[input] = true; // 일치하면 T 반환이므로 객체 값 T로 변환
      // 정답 표시
      searchAnswers.style.display = "block";
      searchAnswers.innerHTML += `<span>${input}</span>`;

      answerCount++;
      document.querySelector(".answerNum").innerText = answerCount;

      // 정답 초기화
      document.getElementById("search").value = " ";
    }
  }

  // 정답 체크하기 : 정답을 객체화 시키기 (기본값 false로)
  function checkAnswers() {
    cssProperty.forEach((item) => {
      let answer = item.name.trim().toLowerCase();
      answers[answer] = false;
    });
  }

  // 시간 설정하기
  function reduceTime() {
    timeReamining--;

    if (timeReamining < 11) {
      document.querySelector(".time").style.background = "red";
    }

    if (timeReamining == 0) {
      endQuiz();
    }

    serachTime.innerText = displayTime();
  }

  // 시간 표시하기 (분, 초 변환)
  function displayTime() {
    if (timeReamining <= 0) {
      return "0:00";
    } else {
      let minutes = Math.floor(timeReamining / 60);
      let seconds = Math.floor(timeReamining % 60);

      // 초 단위가 한자리 일때 0 추가
      if (seconds < 10) seconds = "0" + seconds;
      return minutes + ":" + seconds;
    }
  }

  // 게임 끝
  function endQuiz() {
    alert("게임 끝");

    // 시작버튼 재활성화
    searchStart.style.display = "block";
    document.querySelector(".time").style.background = "#223547";
    timeReamining = 120;

    clearInterval(Timer);

    // 메세지 출력
    searchResultWrap.classList.add("show");
    let score = Math.round(answerCount * 10);
    searchResult.innerHTML = `END <br> ${answerCount} / ${cssProperty.length} <br> Score : ${score}`;
  }

  // 다시 셋팅하기(다시시작버튼 누름)
  function restart() {
    searchResultWrap.classList.remove("show");
    searchStart.style.display = "block";
    serachList.style.display = "none";
    searchAnswers.style.display = "none";
    searchAnswers.innerHTML = ``;
    answerCount = 0;
    document.querySelector(".answerNum").innerText = answerCount;
    startQuiz();
  }