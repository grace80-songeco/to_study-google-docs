/* 
   Ultraviolet-App 구성 파일 
   이 설정은 고가디언의 카테고리 필터링을 무력화하기 위한 핵심 로직입니다.
*/

self.__uv$config = {
    // 프록시 서비스의 경로 접두사
    prefix: '/service/',

    /* 
       [가장 중요] Bare 서버 주소 
       Vercel이나 GitHub Pages는 정적 호스팅이므로, 실제 데이터를 긁어올 외부 서버가 필요합니다. 
       아래 주소는 현재 작동하는 공개 Bare 서버들입니다. 하나가 안 되면 다른 걸로 바꿔보세요.
    */
    bare: 'https://uv.tomp.app/', 
    // 대체 주소 예시: 'https://bare.benropro.me/' 또는 'https://uv.holyub.org/bare/'

    // URL 암호화 및 복호화 방식 (고가디언이 유튜브 주소를 읽지 못하게 숨김)
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,

    // 관련 자바스크립트 파일 경로
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
