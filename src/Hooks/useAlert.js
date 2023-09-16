import { useToast } from "@chakra-ui/react";

export const useAlert = () => {
  const toast = useToast();
  const alert = (message, type) => {
    toast({
      title: "",
      description: message,
      status: type,
      duration: 500,
      position: "top",
      isClosable: true,
    });
  };

  return { alert };
};
