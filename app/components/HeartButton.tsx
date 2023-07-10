import { SafeUser } from '@/app/types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useFavorite from '../hooks/useFavorite';

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    });

    return (
        <div
            onClick={toggleFavorite}
            className="
        relative 
        hover:opacity-80
        transition
        cursor-pointer
      "
        >
            <FavoriteBorderIcon
                fontSize="large"
                style={{ position: 'absolute', top: -2, right: -2 }}
            />

            <FavoriteIcon
                fontSize="large"
                sx={{
                    color: hasFavorited ? 'rosybrown' : 'rgba(0, 0, 0, 0.54)'
                }}
            />
        </div>
    );
};

export default HeartButton;
