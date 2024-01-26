import React, { ReactNode, useEffect } from "react";
import {
  OptionsObject,
  ProviderContext,
  SnackbarMessage,
  SnackbarProvider,
  SnackbarProviderProps,
  useSnackbar,
} from "notistack";

type CustomNotistack = {
  toast: ProviderContext["enqueueSnackbar"];
} & ProviderContext;

const Notistack: CustomNotistack = {
  // Default empty functions.
  toast: () => "",
  enqueueSnackbar: () => "",
  closeSnackbar: () => undefined,
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    Object.assign(Notistack, {
      enqueueSnackbar,
      closeSnackbar,
      toast: (message: SnackbarMessage, options?: OptionsObject) => {
        // Convert (Error) Objects to String
        const formattedMessage =
          typeof message !== "string" ? message?.toString() ?? "" : message;

        if (!formattedMessage) {
          console.error("Empty toast message (throw error to get trace)");
        }

        if (message instanceof Error) {
          options ??= {};
          options.variant ??= "error";
        }

        // Creates a Snackbar and allows closing it by clicking it
        const key = enqueueSnackbar(formattedMessage, {
          SnackbarProps: {
            onClick: () => {
              closeSnackbar(key);
            },
          },
          ...options,
        });

        return key;
      },
    });
  }, [enqueueSnackbar, closeSnackbar]);

  return children;
};

export const NotistackProvider = ({
  children,
  ...props
}: SnackbarProviderProps) => {
  return (
    <SnackbarProvider {...props}>
      <Wrapper>{children}</Wrapper>
    </SnackbarProvider>
  );
};

export default Notistack;
