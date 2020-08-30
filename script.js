DeviceMotionEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      const scene = document.getElementById('scene')
      const parallaxInstance = new Parallax(scene)
      return parallaxInstance
    } else {
      console.warn("Motion denied!")
    }
  })
  .catch(console.error)