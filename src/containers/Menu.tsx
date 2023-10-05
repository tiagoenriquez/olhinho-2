import MenuItem from 'components/MenuItem';

export default function Menu() {
  return (
    <div className="menu">
      <MenuItem
        frame="calcular-periodo"
        caractereKey="c"
        text="Calcular Período"
        tooltip="(Alt c) Abre a tela de edição de período."
      />
      <MenuItem
        frame="periodos"
        caractereKey="l"
        text="Lista de Períodos"
        tooltip="(Alt l) Abre a tela com a lista de períodos somados e descontados."
      />
      <MenuItem
        frame="dados"
        caractereKey="d"
        text="Dados do Somatório de Períodos"
        tooltip="(Alt d) Abre a tela com informações adicionais sobre a lista de períodos."
      />
      <MenuItem
        frame="somar"
        caractereKey="+"
        text="+"
        tooltip="(Alt +) Adiciona dias na lista de período sem editar datas."
      />
      <MenuItem
        frame="subtrair"
        caractereKey="-"
        text="-"
        tooltip="(Alt -) Subtrai dias na lista de período sem editar datas."
      />
      <MenuItem
        frame="multiplicar"
        caractereKey="x"
        text="x"
        tooltip="(Alt x) Multiplica os dias na lista de período sem editar datas com um número informado."
      />
      <MenuItem
        frame="calcular-numeros"
        caractereKey="n"
        text="Calculadora"
        tooltip="(Alt n) Simples calculadora para somar, subtrair e multiplicar números."
      />
      <MenuItem
        frame="resetar"
        caractereKey=""
        text="Resetar"
        tooltip="(F5) Retorna a aplicação para o estado inicial, apagando os períodos da lista."
      />
      <MenuItem
        frame="sobre"
        caractereKey="s"
        text="Sobre"
        tooltip="(Atl s) Mostra informações sobre a aplicação"
      />
    </div>
  );
}
