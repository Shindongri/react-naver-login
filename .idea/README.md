## REACT NAVER LOGIN

1. 개요

> React ( Web ) 으로 네이버 (SNS) 로그인 구현 예제
> 네이버 개발자 센터 ( 'https://developers.naver.com/main/' ) 에 이미 어플리케이션을 등록했다고 가정.
> 주의 !! 프로젝트 URL, 리다이렉트 URL 정확히 일치시켜줘야 로그인 됨

2. 구현 방법

    1. index.html 
        - naver login CDN 과 jQuery 를 inline-tag 로 import 
        ``` 
         <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charSet="utf-8" />
         <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js" />
        ```
    2. NaverLoginButton.js 컴포넌트 생성
        ```
        import React, { Component } from 'react';
        
        const CLIENT_ID = '발급받은 클라이언트 키';
        const REDIRECT_URI = encodeURI( '앱 등록시 기입한 리다이렉트 URI' );
        
        export default class NaverLoginButton extends Component {
        
          constructor( props ) {
            super( props );
          }
        
          componentDidMount() {
            const naver_id_login = new window.naver_id_login( CLIENT_ID, REDIRECT_URI );
            const state = naver_id_login.getUniqState();
        
            naver_id_login.setButton( 'green', 1, 40 );
            naver_id_login.setDomain( 'http://localhost:3000' );
            naver_id_login.setState( state );
            naver_id_login.init_naver_id_login();
          }
        
          render() {
            return (
                <div id="naver_id_login" style={ { marginTop: '3px' } } />
            );
          }
        }

        ```
        
    3. Callback 설정
        ```
        const CLIENT_ID = '발급받은 클라이언트 키';
        const REDIRECT_URI = encodeURI( '앱 등록시 기입한 리다이렉트 URI' );
        
        class Success extends React.Component {
        
          state = {
            aliasNm: ''
          }
        
          constructor(props) {
            super(props)
            window.naverLoginCallback = this.naverLoginCallback.bind(this)
          }
        
          naverLoginCallback() {
            var naver_id_login = new window.naver_id_login(CLIENT_ID, REDIRECT_URI)
            this.setState({
              aliasNm: naver_id_login.getProfileData('aliasNm')
            })
          }
        
          componentDidMount() {
            const naver_id_login = new window.naver_id_login(client_id, redirectURI)
            console.log(naver_id_login.oauthParams.access_token)
            naver_id_login.get_naver_userprofile("naverLoginCallback()")
          }
        
          render() {
            return (
              <div>Welcome ! {this.state.aliasNm} </div>
            )
          }
        
        }
 
        ```
        
