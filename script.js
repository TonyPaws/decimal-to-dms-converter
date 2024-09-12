function convertToDMS() {
    const input = document.getElementById("decimalInput").value.trim();
    
    // Parse the input
    let coords = input.match(/-?\d+(\.\d+)?/g);
    if (!coords || coords.length !== 2) {
      document.getElementById("output").innerHTML = "Invalid input. Please enter two decimal numbers.";
      document.getElementById("copyButton").style.display = "none";
      return;
    }
  
    let lat = parseFloat(coords[0]);
    let lon = parseFloat(coords[1]);
    
    // Conversion functions
    function toDMS(deg) {
      const d = Math.floor(Math.abs(deg));
      const minFloat = (Math.abs(deg) - d) * 60;
      const m = Math.floor(minFloat);
      const s = (minFloat - m) * 60;
      return `${d}° ${m}' ${s.toFixed(4)}''`;
    }
  
    function getDirection(deg, posChar, negChar) {
      return deg >= 0 ? posChar : negChar;
    }
  
    // Convert to DMS
    const latDMS = toDMS(lat);
    const lonDMS = toDMS(lon);
    const latDirection = getDirection(lat, "N", "S");
    const lonDirection = getDirection(lon, "E", "W");
  
    // Display result
    const result = `${latDMS} ${latDirection}, ${lonDMS} ${lonDirection}`;
    document.getElementById("output").innerHTML = result;
  
    // Show copy button
    document.getElementById("copyButton").style.display = "inline";
  }
  
  function copyToClipboard() {
    const outputText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
      alert('Copied to clipboard: ' + outputText);
    });
  }
  