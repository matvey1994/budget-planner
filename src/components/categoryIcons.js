import SchoolIcon from '@mui/icons-material/School';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TrainIcon from '@mui/icons-material/Train';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MailIcon from '@mui/icons-material/Mail';
import PetsIcon from '@mui/icons-material/Pets';
import PendingIcon from '@mui/icons-material/Pending';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import TvIcon from '@mui/icons-material/Tv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { create } from '@mui/material/styles/createTransitions';

const defineIcons = {
  style: { verticalAlign: 'middle'},
  fontSize: 'small'
}

const createIcon = (IconComponent, color) => {
  return <IconComponent {...defineIcons} style={{ ...defineIcons.style, color }} />
}

const categoryIcons = {
    Education: createIcon(SchoolIcon, '#e34c83'),
    Salary: createIcon(LocalAtmIcon, '#48a77a'),
    Transport: createIcon(TrainIcon, '#f0932c'),
    Transfer: createIcon(CompareArrowsIcon, '#2c2c2c'),
    Entertrainment: createIcon(SportsEsportsIcon, '#de7455'),
    Gifts: createIcon(MailIcon, '#6cbcac'),
    Pets: createIcon(PetsIcon, '#f4c48c'),
    Other: createIcon(PendingIcon, '#2a2b2a'),
    Groceries: createIcon(LocalGroceryStoreIcon, '#6989e0'),
    Music: createIcon(MusicNoteIcon, '#3961d93'),
    TV: createIcon(TvIcon, '#a6d4c6'),
    Sport: createIcon(SportsCricketIcon, '#d2df71'),
  };
  
  const Categories = ({ category }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {categoryIcons[category]}
        <span style={{ marginLeft: '8px' }}>{category}</span>
      </div>
    );
  };
  
  export default Categories;