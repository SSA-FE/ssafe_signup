<div align="center">
    
## 회원가입 페이지 구현 과제
<br/>

Main Language & Library

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<br/>
<br/>


CSS in JS

<img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"/>
<br/>
<br/>

Newly Used

<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"/>
<img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=black"/>
<br/>
<br/>

Developing Environment

<img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=black"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=black"/>
<br/>
<br/>

</div>

### 구현 과제

#### Pages

    Home / SignUp
    새로고침 없이 페이지 이동 구현 : react-router-dom 사용

#### Home

    회원가입 버튼 click -> SignUp Page로 이동

#### SignUp

    회원가입 완료되면 SignUp페이지에서 알람을 띄우고, Home으로 이동합니다.
    필드가 포커스되면 테두리 색이 변경됩니다.
    
#### Data

    유효성 검사
    ‘이메일, 비밀번호, 비밀번호 확인’
    
    Email)
        이메일 필드 유효성 검사 : 이메일 정규식
    
    PassWord)
        8자 이상 16자 이하의 문자열
        하나 이상의 영문자, 하나 이상의 숫자, 하나 이상의 특수문자
        비밀번호 확인 == 비밀번호
        
    isValid)
        유효하지 않은 값을 입력 -> 실시간 에러메세지 출력(필드 하단)
        유효한 값이 입력 -> 입력받은 데이터 alert로 띄우기, 메인페이지로 이동

#### Optional

    PassWord Field)
        ‘뜬 눈 아이콘’ click -> 작성한 값 표시
        ‘감은 눈 아이콘’ click -> 작성한 값 "암호로" 표시
        모두 유효한 값 입력 -> 하단의 회원가입 버튼의 색깔 변함 & 활성화 (default: 비활성화)


