import CreditCardIcon from '@mui/icons-material/CreditCard';

const defineIcons = {
  style: { verticalAlign: 'middle', color: '#808080'},
  fontSize: 'small'
}

const createIcon = (IconComponent) => {
  return <IconComponent {...defineIcons} />
}

const categoryIcons = {
    "Debit Card": createIcon(CreditCardIcon),
    "Credit Card": createIcon(CreditCardIcon)
  };
  
  const Wallet = ({ category }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {categoryIcons[category]}
        <span style={{ marginLeft: '8px' }}>{category}</span>
      </div>
    );
  };
  
  export default Wallet;