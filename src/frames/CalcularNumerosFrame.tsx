import Buttons from 'containers/Buttons';
import InputLabeled from 'containers/InputLabeled';
import React, { ChangeEvent, useState } from 'react';
import Frame from './Frame';

export default function CalcularNumerosFrame() {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  function handleNumero(
    numero: string,
    setNumero: React.Dispatch<React.SetStateAction<string>>
  ) {
    if (Number(numero).toString() !== 'NaN' && Number(numero) % 1 === 0) {
      setNumero(numero);
      setResultado('');
    }
  }

  const handleNumero1 = (event: ChangeEvent<HTMLInputElement>) => {
    handleNumero(event.target.value, setNumero1);
  };

  const handleNumero2 = (event: ChangeEvent<HTMLInputElement>) => {
    handleNumero(event.target.value, setNumero2);
  };

  const multiplicar = () => {
    setResultado((Number(numero1) * Number(numero2)).toString());
  };

  const somar = () => {
    setResultado((Number(numero1) + Number(numero2)).toString());
  };

  const subtrair = () => {
    setResultado((Number(numero1) - Number(numero2)).toString());
  };

  return (
    <Frame>
      <h1>Calcular Números</h1>
      <InputLabeled
        id="numero-1"
        label="1º número"
        onChange={handleNumero1}
        readonly={false}
        type="number"
        value={numero1}
      />
      <InputLabeled
        id="numero-2"
        label="2º número"
        onChange={handleNumero2}
        readonly={false}
        type="number"
        value={numero2}
      />
      <Buttons
        buttons={[
          { action: somar, text: 'Somar' },
          { action: subtrair, text: 'Subtrair' },
          { action: multiplicar, text: 'Multiplicar' },
        ]}
      />
      <InputLabeled
        id="resultado"
        label="Resultado"
        onChange={() => {}}
        readonly
        type="number"
        value={resultado}
      />
    </Frame>
  );
}
