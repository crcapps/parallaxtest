DeviceMotionEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      const scene = document.getElementById('scene')
      const parallaxInstance = new Parallax(scene)
      return parallaxInstance
    }
  })
  .catch(console.error)