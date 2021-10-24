let N1: number = dato.value;
let N2: number = dato.value;
let N3: number = dato.value;

if ((N1 > N2) & (N1 > N3)) {
  console.log("el valor mayor es: " + N1);
} else if ((N2 > N3) & (N2 > N1)) {
  console.log("el valor mayor es: " + N2);
} else if ((N3 > N1) & (N3 > N2)) {
  console.log("el valor mayor es: " + N3);
} else {
  console.log("todos son Iguales");
}
