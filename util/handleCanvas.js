const handleCanvas = (canvasRef, imageRef, data) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = imageRef.current
    const color = [
      '#5BBCFF',
      '#FFFAB7',
      '#FFD1E3',
      '#7EA1FF',
      '#836FFF',
      '#15F5BA',
      '#86A7FC'
    ]
    const textColor = ['#000000', '#000000', '#000000', '#000000']

    canvas.width = image.width
    canvas.height = image.height
    window.image = imageRef

    data.items.map((predictions, index) => {
      const selectedConfidence = predictions.food[0].food_info.display_name
      const predictedQuantity = predictions.food[0].quantity + ' gr'
      const x = predictions.position.x * image.width
      const y = predictions.position.y * image.height
      const width = predictions.position.width * image.width
      const height = predictions.position.height * image.height
      if (index > color.length - 1) {
        index = index % color.length
      }
      ctx.strokeStyle = color[index]
      ctx.lineWidth = 4
      ctx.strokeRect(x, y, width, height)
      ctx.fillStyle = color[index]
      const textWidth = ctx.measureText(selectedConfidence).width
      const quantityWidth = ctx.measureText(predictedQuantity).width
      const quantityHeight = 16
      const textHeight = 16
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
      //   fill rect on bottom right corner
      ctx.fillRect(
        x + width - quantityWidth,
        y + height - quantityHeight,
        quantityWidth + 4,
        quantityHeight + 4
      )
      ctx.fillStyle = '#000000'
      ctx.font = 'poppins'
      ctx.fillText(selectedConfidence, x, y + 10)
      ctx.fillText(predictedQuantity, x + width - quantityWidth, y + height - 5)
    })
  }

  export default handleCanvas;