## bootstrap 셋팅
~~~
부트스트랩 패키지 다운
npm install react-bootstrap bootstrap@4.6.0
~~~


#### 부트스트랩 태그 요소 import
~~~
ex)
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

#설명 (리액트 홈페이지 설명 번역)
전체 라이브러리보다는 react-bootstrap/Button과 같은 개별 구성요소를
가져와야 한다. 이렇게 하면 사용하는 특정 구성 요소만 끌어와 클라이언트에 보내는 
코드 양을 크게 줄일 수 있습니다.
~~~

#### 부트스트랩 css include
~~~
node_modules 패키지에서 직접 import
ex) import 'bootstrap/dist/css/bootstrap.min.css';

index.html  CDN 링크 추가
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
~~~

#### unpkg
~~~
unpkg에서 react-bootstrap.js and react-bootstrap.min.js 지원
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
<script>var Alert = ReactBootstrap.Alert;</script>
~~~
