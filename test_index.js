

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}


async function randomDelay() {
  const randomTime = Math.round(Math.random() * 1000)
  return sleep(randomTime)
}

class ShipmentSearchIndex{
  async updateShipment(id , shipmentData) {
    const startTime = new Date()
    await randomDelay()
    const endTime = new Date()
    console.log(`update ${id}@${
        startTime.toISOString()
      } finished@${
        endTime.toISOString()
      }`
    )

    return {startTime, endTime}
  }

}


class ShipmentUpdateListenerInterface extends ShipmentSearchIndex{
  receiveUpdate(id, shipmentData) {
    this.updateShipment(id,shipmentData)
  }
}

class FinalClassExtendsAllClasses extends ShipmentUpdateListenerInterface {
  constructor() {
    super();
    this.receiveUpdate( 101, "Some Shipment Data")
  }
}


let obj = new  FinalClassExtendsAllClasses
