function calculateSize() {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const waist = parseInt(document.getElementById("waist").value);
    const legLength = parseInt(document.getElementById("legLength").value);
    const shoulder = parseInt(document.getElementById("shoulder").value);
    const chest = parseInt(document.getElementById("chest").value);

    let result = "";

    // Tính size áo
    if (chest <= 46 && weight <= 60 && height <= 167) {
        result += "Size áo: S<br>";
    } else if (chest <= 50 && weight <= 65 && height <= 172) {
        result += "Size áo: M<br>";
    } else if (chest <= 54 && weight <= 75 && height <= 180) {
        result += "Size áo: L<br>";
    } else if (chest <= 56 && weight <= 90 && height <= 190) {
        result += "Size áo: XL<br>";
    } else {
        result += "Size áo: XLL<br>";
    }

    // Tính size quần
    if (waist <= 72 && legLength <= 82) {
        result += "Size quần: S<br>";
    } else if (waist <= 78 && legLength <= 83) {
        result += "Size quần: M<br>";
    } else if (waist <= 84 && legLength <= 84) {
        result += "Size quần: L<br>";
    } else if (waist <= 87 && legLength <= 85) {
        result += "Size quần: XL<br>";
    } else {
        result += "Không tìm thấy size quần phù hợp<br>";
    }

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = result;
}
