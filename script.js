let menu = parseInt(prompt(`1- Ingresar nueva nota de examen \n0- Salir`));
let cont = 0;
let suma = 0;

if (menu !== 0 && menu !== 1) {
  alert(`Opcion no valida, ingrese otra opcion`);
  menu = parseInt(prompt(`1- Ingresar nueva nota de examen \n0- Salir`));
}

while (menu !== 0) {
  if (menu === 1) {
    let nota = parseInt(prompt(`Ingrese nota`));
    suma += nota;
    cont++;
  }

  if (menu === 2) {
    console.log(`El promedio de las notas fue ${suma / cont}`);
  }
  menu = parseInt(
    prompt(`1- Ingresar nota del examen\n2-Ver Promedio \n0- Salir`)
  );
  if (menu !== 0 && menu !== 1 && menu !== 2) {
    alert(`Opcion no valida, ingrese otra opcion`);
    menu = parseInt(
      prompt(`1- Ingresar nota del examen\n2-Ver Promedio \n0- Salir`)
    );
  }
}
