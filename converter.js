function convertLength() {
    const meter = parseFloat(document.getElementById('length').value);
    const kilometer = meter / 1000;
    document.getElementById('result').innerHTML = `${meter} meter = ${kilometer} kilometer`;
  }
  
  function convertTemperature() {
    const celsius = parseFloat(document.getElementById('temperature').value);
    const kelvin = celsius + 273.15;
    document.getElementById('result').innerHTML = `${celsius} celsius = ${kelvin} kelvin`;
  }
  
  function convertArea() {
    const squareMeter = parseFloat(document.getElementById('area').value);
    const squareKilometer = squareMeter / 1000000;
    document.getElementById('result').innerHTML = `${squareMeter} square meter = ${squareKilometer} square kilometer`;
  }
  
  function convertVolume() {
    const cubicMeter = parseFloat(document.getElementById('volume').value);
    const cubicKilometer = cubicMeter / 1000000000;
    document.getElementById('result').innerHTML = `${cubicMeter} cubic meter = ${cubicKilometer} cubic kilometer`;
  }
  
  function convertWeight() {
    const kilogram = parseFloat(document.getElementById('weight').value);
    const gram = kilogram * 1000;
    document.getElementById('result').innerHTML = `${kilogram} kilogram = ${gram} gram`;
  }
  
  function convertTime() {
    const seconds = parseFloat(document.getElementById('time').value);
    const milliseconds = seconds * 1000;
    document.getElementById('result').innerHTML = `${seconds} seconds = ${milliseconds} milliseconds`;
  }
  