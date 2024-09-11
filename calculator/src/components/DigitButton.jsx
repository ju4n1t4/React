function DigitButton ({onClick, digit}) {
  
  return (

    <>
      <button onClick={() => onClick(digit)}>
        {digit} 
      </button>
    </>

  )
}

export default DigitButton;