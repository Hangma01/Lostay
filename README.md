## :interrobang: 프로젝트 소개
호텔 예약 사이트[Lostay]

> 기간 : 2024.10.14~2024.11.08
> 
> 팀원 : 5명
>
> 

<br><br>

## :seedling: 개발 환경
### FrontEnd
- JavaScript, React, React-Router, Redux 


### Backend
- Java11, SpringBoot, Spring Security, JPA, S3, MySql, Redis


### Collaboration & Tools
- Github, Jira, Figma, Postman

### ETC
- Kakao Mobility API, Kakao Map API, TMap API, Elasticesearch API, ProtOne API, coolSms API, OAuth2(Google, Kakao, Naver)
<br><br><br>

## :busts_in_silhouette: 담당 역할
### FrontEnd
  - 회원가입/로그인 페이지
  - 결제 페이지
  - 마이 페이지
  - 메인 페이지
  - 관리자 페이지 ( 홈, 호텔 및 객실 수정)

### BackEnd
  - 소셜 회원 가입 / 로그인 기능 [ JWT + OAuth2 + Redis ]
  - SMS 인증 가능 [ CoolSms API ]
  - 결제 페이지 이동 [ Synchronize + Redis ]
  - 결제 사전, 사후 검증 기능 [ PortOne API ]
  - 관리자 호텔 및 객실 수정 CRUD
  - 호텔 정보 및 이미지 크롤링
<br><br><br>

## :dart: 담당 주요 기능

### 1. 소셜 회원 가입/로그인
  - JWT + OAuth2 이용한 간편 소셜 로그인 (Naver, Kakao Google)
  - coolSms API 이용한 휴대폰 번호 인증

    
* * *
<img src="https://github.com/user-attachments/assets/1e19b93b-33b2-41c7-bdac-d7ae9944b659" width="350" height="450"/>    <img src="https://github.com/user-attachments/assets/0a4bd842-d280-444e-847c-15c919b52b31" width="550" height="450"/>

* * *
<br><br>


### 2. PortOne API를 활용한 결제
  - 사전 검증, 사후 검증 단계를 거쳐 신뢰성과 무결성 확보
  - Synchronize, Redis 사용하여 동시성 해결
  - 포인트, 간편 결제 할인율 적용
  - PortOne API 사용

* * *
<img src="https://github.com/user-attachments/assets/fa3ea8bc-2616-431b-9b5b-ea9bb439f143" width="350" height="450"/>

* * *
<br><br><br>


## :gun: 트러블 슈팅

### 이미지 최적화
    웹사이트에서 크롤링을 진행한 결과, 이미지 파일 용량이 전체적으로 30GB 이상에 달했다.  
    이미지 용량이 크면 로딩 속도가 느려져 사용자 경험에 악영향을 미칠 수 있다고 생각했다.
    페이지 로딩이 늦어지면 사용자가 이탈할 확률이 높아지기 때문이다.  

    이 문제를 해결하기 위해 구글에서 개발한 Webp 포맷으로 이미지를 최적화했다.
    Webp는 JPEG나 PNG보다 압축률이 우수하고, 같은 품질을 유지하면서 파일 크기를 크게 줄일 수 있는 장점이 있다.
    특히, WebP 포맷은 웹 환경에서 성능 최적화에 유리해 많은 웹사이트에서 사용되고 있다.

    최적화 과정에서 품질 80%로 설정하여 눈에 띄지 않는 품질 저하를 방지하면서 용량을 효과적으로 줄였다.
    그 결과, 전체 이미지 용량이 30GB 이상에서 약 6GB로 감소하게 되었다.
    이는 약 80% 이상의 용량 절감을 이루었다.
<br>

### 동시성
    객실이 1개 남았을 때, 2명이 예약하기 버튼을 누르면 동시에 결제페이지로 이동하게 되어
    1개 남은 객실에 중복결제가 발생하는 상황이 발생했다.

    이 문제를 해결하기 위해 Synchronize로 동시성을 처리했다.
    또한, 객실 결제 대기중인 사람의 카운트와 15분의 TTL을 설정 후 Redis에 저장했다.
    결제 대기 카운트와 DB에 결제된 카운트를 차감하여 0이면 예약하기 버튼을 비활성화하여 해결했다.
    

    

<br><br><br>

# :receipt: Reference
- 디자인은 여기어때, 야놀자 사이트를 참고하여 만들었으며 현 사이트는 상업적 목적으로 사용하지 않습니다.
