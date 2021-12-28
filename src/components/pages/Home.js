import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as TWEEN from '@tweenjs/tween.js'
import { FormattedMessage } from 'react-intl'

import table from '../../assets/models/landingpage/scene3.glb';
import computer from '../../assets/models/landingpage/computer.glb'
import earthBump from '../../assets/images/landingpage/earthbump1k.jpg'
import earthSpec from '../../assets/images/landingpage/earthspec1k.jpg'
//import colorMap from '../../assets/images/landingpage/pngwing.png'
//import Cards from "../cards/Cards"
//import styled from 'styled-components'



/* const Div1 = styled.div`
    padding: 4rem;
    display: flex;
  background-color: ${props => props.theme.pageBackground};
 
`;
const Div2 = styled.div`

    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;

  background-color: ${props => props.theme.pageBackground};
 
`;
const Div3 = styled.div`
    position: relative;
    margin: 50px 0 45px;

  background-color: ${props => props.theme.pageBackground};
 
`; */



class Home extends Component {

    state = { width: window.innerWidth, height: window.innerHeight };


    componentDidMount() {




        var camera, scene, renderer;
        var mesh;
        var cloudy;
        // var orbitingObj;

        //main planet sizes
        let r = 1.5;
        let d = 15;
        let e = 15;

        init();
        animate();

        function init() {

            renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#c"), antialias: true, alpha: true });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap;
            renderer.setPixelRatio(window.devicePixelRatio);
            const canvasContainer = document.querySelector('#divR');
            renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
            // renderer.setSize(window.innerWidth, window.innerHeight);
            // document.body.appendChild(renderer.domElement); --> Wie canvas im WebGLRenderer


            // let aspect = window.innerWidth / window.innerHeight;
            let aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
            camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
            camera.position.z = -105;

            scene = new THREE.Scene();
            //scene.background = new THREE.Color( 0xffffff );


            const controls = new OrbitControls(camera, document.querySelector("#c"));
            controls.target.set(0, 0, 0);
            controls.enableDamping = true;
            //  controls.maxPolarAngle = Math.PI /2;
            // controls.enablePan = false;
            controls.update();

            //renderer.setSize(window.innerWidth, window.innerHeight);
            ///document.body.appendChild(document.querySelector("#c"));

            const loader = new THREE.TextureLoader();

            loader.setCrossOrigin("true");

            //-----------------PLAIN EARTH-------------------------

            /*  const texture = loader.load( 'https://drive.google.com/uc?export=download&id=16a758OvTovkIz_bilprEDxqj3EAPKoDL' );
             const earthBumpMap = loader.load( 'https://drive.google.com/uc?export=download&id=/14MqoHVKDhKpKkS1porPq8vxdk9853ZXz');
             const earthSpecMap = loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg'); */


            const texture = loader.load('https://drive.google.com/uc?export=download&id=16a758OvTovkIz_bilprEDxqj3EAPKoDL');
            // const texture = loader.load(colorMap);
            const earthBumpMap = loader.load(earthBump);
            const earthSpecMap = loader.load(earthSpec)


            var geometry = new THREE.SphereGeometry(r, d, e);
            var material = new THREE.MeshPhongMaterial({
                // roughness: 1,
                // metalness: 0,
                map: texture,
                bumpMap: earthBumpMap,
                specularMap: earthSpecMap,
                bumpScale: 1,
                shininess: 1
            })


            mesh = new THREE.Mesh(geometry, material);
            mesh.rotation.x += 0.5;
            mesh.receiveShadow = true;
            mesh.castShadow = true;
            mesh.layers.set(0);



            //------------------------ATMOSPHERE------------------------------------
            const atmosphericGlow = new THREE.Mesh(
                new THREE.SphereGeometry(r, d, e),
                new THREE.ShaderMaterial(
                    {
                        vertexShader: `
              varying vec3 vertexNormal;
              void main()
              {
                  vertexNormal = normalize(normalMatrix * normal);
                  gl_Position = projectionMatrix*modelViewMatrix * vec4(position, 1.0);
    
              }`,
                        fragmentShader: `
              varying vec3 vertexNormal;
              void main()
              {
                  float intensity = pow(0.7 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
    
                  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0) * intensity;
              }`,
                        blending: THREE.AdditiveBlending,
                        side: THREE.BackSide
                    }
                )



                //custom shader material

            )

            atmosphericGlow.scale.set(1.1, 1.1, 1.1)


            //----------------------CLOUDS----------------------------------------
            var cloudGeometry = new THREE.SphereGeometry(1.45, d, e);
            const texture2 = new THREE.TextureLoader().load('https://drive.google.com/uc?export=download&id=1kHelkdcVGGJ3dXpkDZER3_LsD4gUjAiJ');

            //Cloud Geomtry and Material
            var cloudMaterial = new THREE.MeshBasicMaterial({
                map: texture2,
                transparent: true,
                opacity: 0.3

            });

            cloudy = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloudy.rotation.x -= 0.003;
            cloudGeometry.scale(1.1, 1.1, 1.1);


            //------------------------------RING---------------------------------

            /* var ring1Geometry = new THREE.RingGeometry(15, 150 , 150);
            var ring1Material = new THREE.MeshBasicMaterial({color:0xffffff , side: THREE.DoubleSide});
            var myRing = new THREE.Mesh(ring1Geometry, ring1Material);
            myRing.position.set(distanceFromAxis, 0, 0);
            myRing.rotation.x = Math.PI / 2; */


            //------------------------------TUBE--------------------------------------

            /* var ringGeometry = new THREE.TorusGeometry(1.8, 0.05, 480, facets);
            var ringMaterial = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});
            myRing = new THREE.Mesh(ringGeometry, ringMaterial);
            myRing.position.set(distanceFromAxis, 0, 0);
            myRing.rotation.x = Math.PI / 2; */


            //-------------------------------Orbiting test2 -----------------------------------------------

            const GLTFloader = new GLTFLoader();
            let obj = null;

            GLTFloader.setCrossOrigin("true");




            /*         GLTFloader.load('https://drive.google.com/uc?export=download&id=12e-cf_WGrESVDpmKqp8AVwT8Aa0QucWD', function(glb) {
                        obj = glb.scene;
                        console.log(glb.scene);
                        glb.scene.scale.set(0.5,0.5,0.5);
                        glb.scene.position.y = 50;
                        glb.scene.rotation.x -= 0.2;
                        glb.scene.rotation.y -= 0.5;
                        scene.add(glb.scene);
                    }); */

            // --------------------------orbiting table--------------------------------------------------------------
            // GLTFloader.load('https://drive.google.com/uc?export=download&id=1_DDFce6V9xlJ8kJo_eRAZdURPYKGf8wC', function(glb) {
            GLTFloader.load(table, function (glb) {

                obj = glb.scene;

                glb.scene.scale.set(0.006, 0.006, 0.006)
                glb.scene.position.x = -3;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot2 = new THREE.Object3D();
                mesh.add(orbitingObjPivot2);
                orbitingObjPivot2.add(glb.scene);
            });

            //-------------------------------orbiting pc -----------------------------------------------------
            //https://drive.google.com/file/d/1niNm5TpcuMHVWnvmTMTUlhZLvw95UCEi/view?usp=sharing

            // GLTFloader.load('https://drive.google.com/uc?export=download&id=1niNm5TpcuMHVWnvmTMTUlhZLvw95UCEi', function(glb) {
            GLTFloader.load(computer, function (glb) {

                obj = glb.scene;

                //glb.scene.scale.set(0.006,0.006,0.006)
                glb.scene.position.x = 3;
                // glb.scene.position.z = -3;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot3 = new THREE.Object3D();
                mesh.add(orbitingObjPivot3);
                orbitingObjPivot3.add(glb.scene);
            });
            //-------------------------------Orbiting test-----------------------------------------------------

            /*     const texture3 = loader.load( 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/earthmap1k.jpg' );
            
            
            
                    var geometry3 = new THREE.SphereGeometry(0.5,  d, e);
            
            
            
                    var material3 = new THREE.MeshPhongMaterial({
                        // roughness: 1,
                        // metalness: 0,
                        map: texture3,
                        bumpScale:1,
                        shininess:2
                    })
            
            
                    var orbitingObj = new THREE.Mesh(geometry3, material3);
                    orbitingObj.position.x = 3;
                    orbitingObj.rotation.x -=0.5;
                    orbitingObj.receiveShadow = true;
                    orbitingObj.castShadow = true;
                    scene.add(orbitingObj);
            
            
            
            
            //------------------------------Orbit pivot-----------------------------
            
                    var orbitingObjPivot = new THREE.Object3D();
                    mesh.add(orbitingObjPivot);
                    orbitingObjPivot.add(orbitingObj);
            
                    */

            //-----------------------------PLANET------------------------------

            let planet = new THREE.Object3D(

            );

            planet.add(mesh);
            planet.add(atmosphericGlow);
            planet.add(cloudy);
            //planet.add(myRing);
            //planet.add(atmosphericGlow);


            planet.position.z = -20;

            scene.add(planet);

            const tween1 = new TWEEN.Tween({ x: 0, y: 0, z: 200 }).to({
                x: -
                    0, y: 0, z: -90
            }, 2000).onUpdate(function (object) {
                planet.position.set(object.x, object.y, object.z);
            })

            /*         tween1.onUpdate(function (object, elapsed) {
                        planet.position.set(object.x, object.y, object.z);
                        elapsed  = 4000;
                    });
                     */

            tween1.start();



            //some light

            /*           var light1 = new THREE.AmbientLight( 0xffffff );
                      light1.position.set(100, 50, 100);
                      scene.add(light1);
    
    
    
                      let spotLight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);
                      scene.add(spotLight);
                      spotLight.position.set(2, 0, 1); */


            var light = new THREE.DirectionalLight(0xffffff, 2);
            light.position.set(0, 1, -250).normalize();
            light.castShadow = true;

            scene.add(light);



        }

        /*     function resizeRendererToDisplaySize(renderer) {
                const canvas = renderer.domElement;
                const width = canvas.clientWidth;
                const height = canvas.clientHeight;
                const needResize = canvas.width !== width || canvas.height !== height;
                if (needResize) {
                    renderer.setSize(width, height, false);
                }
                return needResize;
            }
        
         */



        function resize() {
            var width = renderer.domElement.clientWidth;
            var height = renderer.domElement.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }



        function animate() {
               resize();

            /*         if (resizeRendererToDisplaySize(renderer)) {
                        const canvas = renderer.domElement;
                        camera.aspect = canvas.clientWidth / canvas.clientHeight;
                        camera.updateProjectionMatrix();
                    } */

            //tweeing
            TWEEN.update();


            mesh.rotation.y += 0.005;
            cloudy.rotation.y -= 0.003;
            //orbitingObj.rotation.y -=0.005;
            renderer.render(scene, camera);
            renderer.clearDepth();
            camera.layers.set(0);
            requestAnimationFrame(animate);
        }

        //---------------------------------BUILDCARDS--------------------------


        /*  
                const divR = document.querySelector('#divR');
        
                divR.width
        
                var width = window.width() - 25;  
                $("#divR").width(width);
             */

        window.addEventListener('resize', this.updateDimensions);


    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    /*       componentWillUnmount() {
            window.removeEventListener('resize', this.updateDimensions);
          } */

    render() {
        return (
            <div id='mainDiv'

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '800hv'
                }}>


      <h1 style={{color:'red'}}>
        <FormattedMessage
          id="app.content"
        >
        </FormattedMessage>
      </h1>

<p style = {{color:'red'}}>     
 <FormattedMessage
        id="app.channel.plug"
        values={{ channelName: "DESKSHARING" }}
      >

  </FormattedMessage></p>






                <div>
                    <p style={{ color: 'green' }}>Window size: {this.state.width} x {this.state.height} </p>
                    <p style={{ color: 'red' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                    </p>



                </div>






                <div id='divR'

                    style={{
                        display: 'absolute',
                        justifyContent: 'right',
                        alignItems: 'right',
                        /*     height: `${this.state.height}`,
                            width:`${this.state.width}` */
                        height: '600px',
                        width: '600px'

                    }}
                >
                    <canvas id='c'></canvas>
                </div>



            </div>


        );
    }
}

export default Home;