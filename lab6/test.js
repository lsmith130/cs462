
const fetch = require('node-fetch');

(async function () {
  try {
    const managerECI = 'SxGp6veeVhKj5YV6pJzEHS'

    // Create picos
    console.log("Creating Picos:")
    for (let i = 0; i < 5; i++) {
      var response = await fetch(`http://cs462.umkhandi.com/sky/event/${managerECI}/test/sensor/new_sensor?name=lab6_pico_${i}`)
      if (!response.ok) {
        console.error(response.status);
        return;
      }
      // var result = await response.json()
      // console.log(result)
    }

    // // Get ECIs
    console.log("Get ECIs:")
    response = await fetch(`http://cs462.umkhandi.com/sky/cloud/${managerECI}/manage_sensors/sensors`)
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    let picos = await response.json()
    console.log(picos)

    // Check pico profiles
    console.log("Check Pico Profiles:")
    for (pico in picos) {
      response = await fetch(`http://cs462.umkhandi.com/sky/cloud/${picos[pico]}/sensor_profile/profile`)
      if (!response.ok) {
        console.error(response.status);
        return;
      }
      var result = await response.json()
      console.log(result)
    }

    // // Generate some fake wovyn heartbeats for testing
    console.log("Generate Heartbeats:")
    for (let i = 0; i < 10; i++) {
      for (pico in picos) {
        // let data = JSON.stringify({
        //   genericThing: {
        //   data: {
        //     temperature: [{
        //       name: "enclosure temperature",
        //       temperatureF: 10 * i,
        //     }]
        //   }}
        // });
        response = await fetch(`http://cs462.umkhandi.com/sky/event/${picos[pico]}/bum-bum/woven/heartbeat?genericThing[data][temperature][0][name]=enclosure%20temperature&genericThing[data][temperature][0][temperatureF]=${10*i}`, {
          method: "POST",
          headers: {
            "Content-Type": "text/json",
          },
        })
        if (!response.ok) {
          console.error(response.status);
          return;
        }
        // result = await response.json()
        // console.log(result)
      }
    }

    // // Verify temperatures are getting recorded
    console.log("Check temperatures:")
    for (pico in picos) {
      response = await fetch(`http://cs462.umkhandi.com/sky/cloud/${picos[pico]}/temperature_store/temperatures`)
      if (!response.ok) {
        console.error(response.status);
        return;
      }
      var result = await response.json()
      console.log(result)
    }









    // // Delete picos except lab6_pico_0
    console.log("Delete Picos")
    // delete picos["lab6_pico_0"]
    for (pico in picos) {
      var response = await fetch(`http://cs462.umkhandi.com/sky/event/${managerECI}/test/sensor/unneeded_sensor?name=${pico}`)
      if (!response.ok) {
        console.error(response.status);
        return;
      }
      result = await response.json()
      // console.log(result)
    }

    // // Verify that the deleted picos are gone
    console.log("Check Deleted Picos")
    response = await fetch(`http://cs462.umkhandi.com/sky/cloud/${managerECI}/manage_sensors/sensors`)
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    picos = await response.json()
    console.log(picos)


  } catch (e) {
    console.error("FAILED")
    console.error(e);
  }
}())