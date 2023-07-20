let taxCodes = [
  {
    code: "L",
    description: "You're entitled to the standard tax-free Personal Allowance",
  },
  {
    code: "M",
    description:
      "Marriage Allowance: you've received a transfer of 10% of your partner's Personal Allowance",
  },
  {
    code: "N",
    description:
      "Marriage Allowance: you've transferred 10% of your Personal Allowance to your partner",
  },
  {
    code: "T",
    description:
      "Your tax code includes other calculations to work out your Personal Allowance",
  },
  {
    code: "0T",
    description:
      "Your Personal Allowance has been used up or you've started a new job and your employer does not have the details they need to give you a tax code",
  },
  {
    code: "BR",
    description:
      "All your income from this job or pension is taxed at the basic rate (usually used if you've got more than one job or pension)",
  },
  {
    code: "D0",
    description:
      "All your income from this job or pension is taxed at the higher rate (usually used if you've got more than one job or pension)",
  },
  {
    code: "D1",
    description:
      "All your income from this job or pension is taxed at the additional rate (usually used if you've got more than one job or pension)",
  },
  {
    code: "NT",
    description: "You're not paying any tax on this income",
  },
  {
    code: "S",
    description: "Your income or pension is taxed using the rates in Scotland",
  },
  {
    code: "S0T",
    description:
      "Your Personal Allowance (Scotland) has been used up or you've started a new job and your employer does not have the details they need to give you a tax code",
  },
  {
    code: "SBR",
    description:
      "All your income from this job or pension is taxed at the basic rate in Scotland (usually used if you've got more than one job or pension)",
  },
  {
    code: "SD0",
    description:
      "All your income from this job or pension is taxed at the intermediate rate in Scotland (usually used if you've got more than one job or pension)",
  },
  {
    code: "SD1",
    description:
      "All your income from this job or pension is taxed at the higher rate in Scotland (usually used if you've got more than one job or pension)",
  },
  {
    code: "SD2",
    description:
      "All your income from this job or pension is taxed at the top rate in Scotland (usually used if you've got more than one job or pension)",
  },
  {
    code: "C",
    description: "Your income or pension is taxed using the rates in Wales",
  },
  {
    code: "C0T",
    description:
      "Your Personal Allowance (Wales) has been used up or you've started a new job and your employer does not have the details they need to give you a tax code",
  },
  {
    code: "CBR",
    description:
      "All your income from this job or pension is taxed at the basic rate in Wales (usually used if you've got more than one job or pension)",
  },
  {
    code: "CD0",
    description:
      "All your income from this job or pension is taxed at the higher rate in Wales (usually used if you've got more than one job or pension)",
  },
  {
    code: "CD1",
    description:
      "All your income from this job or pension is taxed at the additional rate in Wales (usually used if you've got more than one job or pension)",
  },
];

let emergencyCodes = [
  {
    code: "W1",
    description: "Emergency tax code",
  },
  {
    code: "M1",
    description: "Emergency tax code",
  },
  {
    code: "X",
    description: "Emergency tax code",
  },
  {
    code: "K",
    description:
      "You have income that is not being taxed another way and it's worth more than your tax-free allowance.",
  },
];

// console.log(pattern.test("K1257 L M1"));

function checkCode(userInput) {
  taxCodes.forEach((code) => {
    var pattern = new RegExp(`${code.code}`);
    if (pattern.test(userInput)) {
      console.log(
        `Your tax code contains ${code.code}, which means ${code.description}`
      );
    }
  });

  // emergencyCodes.forEach((emCode) => {
  //   if (userInput.includes(emCode.code)) {
  //     console.log(
  //       `Your tax code also contains ${emCode.code}, which is an emergency tax code (${emCode.description})`
  //     );
  //   }
  // });
  // console.log(
  //   `Based on the information you've given us, you have a tax-free Personal Allowance of £${getPersonalAllowance(
  //     userInput
  //   )}.`
  // );
}

function getPersonalAllowance(input) {
  let regex = /\d{3,}/g;
  let numResult = input.match(regex)[0];
  let result = String(numResult * 10);
  const personalAllowance = result.slice(0, 2) + "," + result.slice(2);
  return personalAllowance;
}

// function regexMatch(string, pattern) {
//   let regex = new RegExp(`${pattern}`, "g");
//   if (regex.test(string)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// regexMatch("K1257 L M1", "/L/");

checkCode("K1257 L M1");
