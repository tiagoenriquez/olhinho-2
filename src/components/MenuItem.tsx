import { useDispatch } from 'react-redux';
import { setFrame } from 'redux/modules/Frame';

interface MenuItemProps {
  frame: string;
  caractereKey: string;
  text: string;
  tooltip: string;
}

export default function MenuItem(props: MenuItemProps) {
  const { frame, caractereKey, text, tooltip } = props;
  const dispatch = useDispatch();

  const resetar = () => {
    window.location.reload();
  };

  const selecionarFrame = () => {
    dispatch(setFrame(frame));
  };

  document.addEventListener('keydown', (event: any) => {
    if (event.altKey && event.key === caractereKey) {
      selecionarFrame();
    }
  });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="menu-item"
      onClick={frame === 'resetar' ? resetar : selecionarFrame}
      title={tooltip}
    >
      {text}
    </div>
  );
}
