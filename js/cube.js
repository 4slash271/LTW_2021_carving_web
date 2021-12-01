
const Init = () => {
    //three로 표현하기 위해서는 scene, camera, renderer가 필요하다.
    //PerspectiveCamera의 속성
    //1. field of view 시야: 주어진 시간에 디스플레이에 보이는 장면의 범위
    //2. aspect ratio 종횡비: 거의 항상 요소의 너비를 높이로 나눈 값을 사용
    //3. near & far 근거리 및 원거리 클리핑 평면: 카메라에서 너무 멀거나 가까운 객체는 렌더링되지 않음.
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 01, 1000 );

    //renderer
    //setSize 렌더링 할 크기는 앱으로 채우려는 영역의 너비와 높이와 같게 설정하는 것이 좋다.
    /*앱의 크기를 유지하되 더 낮은 해상도로 렌더링하려면 
    updateStyle (세 번째 인수) 로 false를 사용하여 setSize 를 호출하면 된다. 
    예를 들어, setSize(window.innerWidth/2, window.innerHeight/2, false) 는 <canvas>의 너비와 높이가 100%인 경우 앱을 절반 해상도로 렌더링합니다.*/
    //document에 렌더러 추가
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    //큐브를 만드려면 필요한 것
    //1. geometry/BoxGeometry 큐브의 모든 점과 면을 포함하는 객체
    //2. material/MeshBasicMaterial은 16진수 색으로 표면 표현
    //3. mesh/메쉬는 geometry에 material를 적용하는 객체
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z= 5;
    camera.lookAt( 0, 0, 0 );
    cube.rotation.x = (Math.PI * 30) / 180;
    cube.rotation.y = (Math.PI * 30) / 180;

    const light = new THREE.PointLight();
    light.position.set(25, 50, 50);
    scene.add(light);

    //위의 코드를 화면에서 보기 위해서는 렌더 또는 애니메이션 루프가 필요하다.
    //일반적인 화면에서는 초당 60회를 의미
    function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    }
    
    
    animate();

    const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    };
    //위에서 언급한 것들이 순서대로 진행됩니다.
    window.addEventListener("resize", handleResize);

    const rotateObj = () => {
    const speed = Math.floor(Math.random() * 3);
    cube.rotation.y += (Math.PI * speed) / 180;
    renderer.render(scene, camera);
    requestAnimationFrame(rotateObj);
    };
 


    //드래그 컨트롤을 추가해주세요.
    //꼭 이 위치가 아니더라도 상관 없습니다.
    const obj = [cube];
    const dragControls = new THREE.DragControls(obj, camera, renderer.domElement);
    
    // renderer.render(scene, camera);
}
            
    



    


  //페이지가 로드되면 Init 함수가 실행됩니다.
  window.addEventListener("load", Init);
