import React from 'react'
import { useState } from 'react'

export default function GetUserComponent({setUser, setIsLoggedIn}) {
    const [userInput, setUserInput] = useState('')

    function HandleLogin(userInput) {
        setIsLoggedIn(true)
        setUser(userInput)
    }

    return (
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    );
}
