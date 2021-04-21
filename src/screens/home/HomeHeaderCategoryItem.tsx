import { Button } from '@chakra-ui/react';
import useHomeHeaderStore from 'store/useHomeHeaderStore';

type Props = {
  text: string;
  id: number;
}

function HomeHeaderCategoryItem({ text, id }: Props) {
  const { activeHeaderId, setActiveHeaderId } = useHomeHeaderStore();

  return (
    <Button
      m="1px"
      variant="outline"
      isActive={id === activeHeaderId}
      onClick={() => setActiveHeaderId(id)}
      minW="auto"
    >
      {text}
    </Button>
  );
}

export default HomeHeaderCategoryItem;
