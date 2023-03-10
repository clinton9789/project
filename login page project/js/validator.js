class Validator {
  static isValidString(input, message) {
    if (input == null || input.trim() == "") {

      throw new Error(message);
    }
  }

  static isValidPassword(input1, input2, message) {

    if (input1.length < 4 || input2.length < 4 || input1 != input2) {
      throw new Error(message);

    }
  }

  static isValidMobile(input, message) {

    if (input.length != 10) {
      throw new Error(message);

    }
  }

  static isValidTrainNo(input, message) {

    if (input.length != 5) {
      throw new Error(message);

    }
  }


  static isValidTrainTicket(input, message) {

    if (input < 1) {
      throw new Error(message);

    }
  }

}