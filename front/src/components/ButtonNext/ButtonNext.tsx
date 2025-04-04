import "./ButtonNext.scss";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export function ButtonNext({ disabled, onClick }: { disabled: boolean, onClick: () => void }) {
  return (
    <div className="button-next">
        <button disabled = {disabled} onClick={onClick} >Proximo <ArrowForwardIosOutlinedIcon/></button>
    </div>
  );
}