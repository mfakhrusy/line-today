import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  isOpen: boolean;
  leastDestructiveRef: React.RefObject<any>;
  onClose: () => void;
  onConfirm: () => void;
  articleTitle: string;
}

function BookmarkAlertDialog({
  isOpen, leastDestructiveRef, onClose, onConfirm, articleTitle,
}: Props) {
  return (
    <AlertDialog leastDestructiveRef={leastDestructiveRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Hapus Bookmark
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text mb={3}>
              Apakah kamu yakin untuk menghapus bookmark dari artikel berjudul:
            </Text>
            <Text>
              {articleTitle}
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>
              Batal
            </Button>
            <Button onClick={onConfirm} ml={3} colorScheme="red">
              Hapus
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default BookmarkAlertDialog;
