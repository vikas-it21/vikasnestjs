'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiHospital
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { FaUniversity, FaSchool, FaUtensils, FaLandmark } from 'react-icons/fa';




import CategoryBox from "../CategoryBox";
import Container from '../Container';
const MountainsIcon = () => <TbMountain />;

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Hospital',
    icon: GiHospital,
    description: 'This property is has Hospital!',
  },
  {
    label: 'college',
    icon:  FaUniversity,
    description: 'This property is modern!'
  },
  {
    label: 'School',
    icon: FaSchool,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Restaurant',
    icon: FaUtensils ,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Monuments',
    icon: FaLandmark,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Mountains',
    icon: TbMountain,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Histroic',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
 
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;