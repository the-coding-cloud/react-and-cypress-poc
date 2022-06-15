import { createContext } from 'react'

export const ApplicationContext = createContext(10);
export const ApplicationProvider = ApplicationContext.Provider;
export const ApplicationConsumer = ApplicationContext.Consumer;
