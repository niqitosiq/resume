<script>
  import shader from '../node_modules/shader.vrtx';
  import {
    Raycaster,
    WebGLRenderer,
    OrthographicCamera,
    Scene,
    PlaneBufferGeometry,
    Vector2,
    Vector3,
    Vector4,
    ShaderMaterial,
    Mesh,
  } from 'three';
  import { onMount } from 'svelte';

  function initShader() {
    const raycaster = new Raycaster();

    const canvas = document.querySelector('#background');

    const renderer = new WebGLRenderer({ canvas });
    renderer.autoClearColor = false;

    const camera = new OrthographicCamera(-1, 1, 1, -1, -1, 1);
    const scene = new Scene();
    const plane = new PlaneBufferGeometry(2, 2);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3() },
      iMouse: { value: new Vector4() },
    };

    const material = new ShaderMaterial({
      fragmentShader: shader,
      uniforms,
    });

    scene.add(new Mesh(plane, material));

    let mouse = new Vector2();
    function onCanvasMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;

      resizeRendererToDisplaySize(renderer);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      for (let i = 0; i < intersects.length; i++) {
        uniforms.iMouse.value.set(intersects[i].uv.x, intersects[i].uv.y, 0, 0);
      }

      const canvas = renderer.domElement;
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      uniforms.iTime.value = time;
      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    canvas.addEventListener('mousemove', onCanvasMouseMove);
    requestAnimationFrame(render);
  }

  onMount(() => {
    if (!document) return;
    initShader();
  });
</script>

<style lang="scss">
  canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>

<canvas id="background" class="background" />
