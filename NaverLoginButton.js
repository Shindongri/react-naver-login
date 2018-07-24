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
            <div id="naver_id_login" />
        );
    }
}
