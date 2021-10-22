function CPF(cpf) {
  this.cpf = cpf;
}

CPF.prototype.verifyCPF = function () {
  if (this.cpf === "") {
    return {
      status: "notValue",
    };
  }

  //Calc
  const cpf = String(this.cpf);

  const cleanedCPF = cpf.replace(/\D+/g, "");

  const cpfArrayRaw = Array.from(cleanedCPF);
  const cpfArrayRaw2 = Array.from(cleanedCPF);

  const cpfIndexArr = cpfArrayRaw.splice(0, 9);
  const cpfIndexArr2 = cpfArrayRaw2.splice(0, 10);

  const sequenceCalc = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const sequenceCalc2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  const newCpfArrCalc = cpfIndexArr.map((item, index, array) => {
    return Number(item) * sequenceCalc[index];
  });

  const totalCalc = newCpfArrCalc.reduce((prev, item) => {
    return prev + Number(item);
  }, 0);
  const result = 11 - (totalCalc % 11);

  const newCpfArrCalc2 = cpfIndexArr2.map((item, index, array) => {
    return Number(item) * sequenceCalc2[index];
  });

  const totalCalc2 = newCpfArrCalc2.reduce((prev, item) => {
    return Number(item) + Number(prev);
  }, 0);

  const result2 = 11 - (totalCalc2 % 11);

  // validation

  const [penultimate, last] = Array.from(cleanedCPF).splice(9, 11);

  const verifyLastNumber = result >= 10 ? 0 : result;
  const verifyLastNumber2 = result2 >= 10 ? 0 : result2;

  console.log(
    `lats: ${penultimate} ${last} // result ${verifyLastNumber} ${verifyLastNumber2}`
  );

  if (
    Number(penultimate) === verifyLastNumber &&
    Number(last) === verifyLastNumber2
  ) {
    return {
      cpf: this.cpf,
      status: true,
    };
  } else {
    return {
      status: false,
    };
  }
};

export { CPF };
