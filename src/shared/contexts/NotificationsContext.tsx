/**
 * NotificationsContext
 * NotificationsContext provider
 *
 * Created by Andres Rincon on 28/04/25
 */

import { createContext, useContext } from "react";

interface NotificationsContextProps {}

export const NotificationsContext = createContext(
  {} as NotificationsContextProps,
);

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NotificationsContext.Provider value={{}}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  return useContext(NotificationsContext);
};
